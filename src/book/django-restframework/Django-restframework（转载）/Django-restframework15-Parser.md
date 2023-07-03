# DRF15-Parser
> 机器与机器之间的网络交互倾向于使用更加复杂的结构化的数据，而不是简单的表单数据



## 1.Parser对象
> REST框架提供了一系列的内建Parser对象来对不同的媒体类型进行解析，也支持为API接口灵活的自定义Parser



### 如何选择合适的Parser
通常为一个viewset定义一个用于解析的Parser对象列表  
当接收到request.data时，REST框架首先检查请求头的Content-Type字段，然后决定使用哪种解析器来处理请求内容

注意：  
当你编写客户端应用程序时，发送HTTP请求时，一定要在请求头中设置Content-Type。  
如果你没有设置这个属性，大多数客户端默认使用’application/x-www-form-urlencoded’，但这有时并不是你想要的。  
例如当你用jQuery的ajax方法发送一个json编码的数据时，应该确保包含contentType: ‘application/json’设置。


### 设置默认的解析器
```python
REST_FRAMEWORK = {
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser',
    )
}
```
也可以为基于APIView的单个视图类或者视图集合设置自己的Parser
```python
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView

class ExampleView(APIView):
    """
    一个能处理post提交的json数据的视图类
    """
    parser_classes = (JSONParser,)

    def post(self, request, format=None):
        return Response({'received data': request.data})
```
使用装饰器的视图函数：

```python
from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes

# 注意装饰器顺序
@api_view(['POST'])
@parser_classes((JSONParser,))
def example_view(request, format=None):
    """
    A view that can accept POST requests with JSON content.
    """
    return Response({'received data': request.data})
```

## 2.Parser指南

### JSONParser
.media_type: application/json


### FormParser
用于解析HTML表单内容，请求数据会被QueryDict数据填充。一般需要同时使用FormParser和MultiPartParser。  
.media_type: application/x-www-form-urlencoded


### MultiPartParser
.media_type: multipart/form-data


### FileUploadParser
用于解析上传的文件类容，request.data就是一个字典，{‘file’:content}  
如果调用FileUploadParser时，有传入filename参数，就使用其作为filename  
如果url中没有设置filename参数，那么客户端在请求头中就必须设置Content-Disposition，例如Content-Disposition: attachment; filename=upload.jpg  
.media_type: /  
注意：  
- FileUploadParser一般用于解析原生客户端上传未经加工的数据。基于web网络的上传，或者原生客户端想将文件分成多部分上传，应该使用MultiPartParser。  
- 因为media_type能匹配其他的各种类型，所以FileUploadParser应该被设置在APIView内部  
- FileUploadParser尊重Django的FILE_UPLOAD_HANDLERS和request.upload_handlers设置  
使用示例
```python
class FileUploadView(views.APIView):
    parser_classes = (FileUploadParser,)

    def put(self, request, filename, format=None):
        file_obj = request.data['file']
        # ...
        # do some stuff with uploaded file
        # ...
        return Response(status=204)

# urls.py
urlpatterns = [
    # ...
    url(r'^upload/(?P<filename>[^/]+)$', FileUploadView.as_view())
]
```

## 3.个性化解析器
为了实现个性化解析器，需要重写BaseParser，设置.media_type属性，然后实现.parse(self, stream, media_type, parser_context)方法，该方法用于填充request.data。  
- stream  
类似流对象，用于代表请求正文  
- media_type  
可选项，用于表明请求内容的媒体类型（Content-Type:）  
- parser_context  
可选项，字典参数，包含请求附加的需要解析的内容。默认包含（view, request, args, kwargs）这几个键  
使用示例
```python
class PlainTextParser(BaseParser):
    """
    Plain text parser.
    """
    media_type = 'text/plain'

    def parse(self, stream, media_type=None, parser_context=None):
        """
        Simply return a string representing the body of the request.
        """
        return stream.read()
```

## 4.第三方包

### YAML（djangorestframework-yaml）
以前是REST框架内置的包，现在是作为三方包存在，需要另外安装
```python
设置默认的解析器和渲染器
REST_FRAMEWORK = {
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework_yaml.parsers.YAMLParser',
    ),
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework_yaml.renderers.YAMLRenderer',
    ),
}
```

### XML（djangorestframework-xml）
以前是REST框架内置的包，现在是作为三方包存在，需要另外安装
```python
REST_FRAMEWORK = {
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework_xml.parsers.XMLParser',
    ),
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework_xml.renderers.XMLRenderer',
    ),
}
```

### MessagePack
MessagePack是一种高效的二进制序列化形式，提供render和parser

### CamelCase JSON






————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78486972](https://blog.csdn.net/runnoob_1115/article/details/78486972)
