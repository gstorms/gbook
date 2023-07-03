# DRF27-Content-negotiation（内容协议）
HTTP为‘内容协议’提供了几种机制。当存在多种表现方式可以选择时，该过程会选择最好的表现方式


## 一、Content negotiation

### 1.确定渲染器
REST框架使用简单的内容协议方式，基于可用渲染器的优先级和客户端的Accept:请求头中所标识的，用来确定返回给客户端的媒体类型。部分由服务端驱动，部分由客户端驱动。  
1. 更具体的媒体类型被指定为不那么具体的媒体类型  
2. 如果多个媒体类型具有相同的特征，那么优先使用视图中指定的渲染器中的第一个
```python
# 客户端的Accept请求头
application/json; indent=4, application/json, application/yaml, text/html, */*
# 优先级为
1. application/json; indent=4
2. application/json, application/yaml, text/html, 
3. */*
```
在确定首选项时，“q”值不会被REST框架考虑。“q”值的使用会对缓存产生负面影响，在作者看来，它们是一种不必要的、过于复杂的内容协商方法。


## 二、自定义内容协商协议
继承重写BaseContentNegotiation  
实现.select_parser(request, parsers)方法  
从可用的parser实例中选择一个合适的返回，如果没有解析器可以处理这种数据，就返回None  
实现.select_renderer(request, renderers, format_suffix)方法  
返回一个元组(renderer instance, media type)，或者NotAcceptable异常
```python
from rest_framework.negotiation import BaseContentNegotiation

class IgnoreClientContentNegotiation(BaseContentNegotiation):
    def select_parser(self, request, parsers):
        """
        Select the first parser in the `.parser_classes` list.
        """
        return parsers[0]

    def select_renderer(self, request, renderers, format_suffix):
        """
        Select the first renderer in the `.renderer_classes` list.
        """
        return (renderers[0], renderers[0].media_type)
```

1. 设置内容协议
```python
REST_FRAMEWORK = {
    'DEFAULT_CONTENT_NEGOTIATION_CLASS': 'myapp.negotiation.IgnoreClientContentNegotiation',
}

# 或者
from myapp.negotiation import IgnoreClientContentNegotiation
from rest_framework.response import Response
from rest_framework.views import APIView

class NoNegotiationView(APIView):
    """
    An example view that does not perform content negotiation.
    """
    content_negotiation_class = IgnoreClientContentNegotiation

    def get(self, request, format=None):
        return Response({
            'accepted media type': request.accepted_renderer.media_type
        })
```

