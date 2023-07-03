# DRF31-Returning-URLs
REST架构风格与其他基于网络的风格的主要特征是它强调组件之间的统一接口。


## 一、Returning URLs

### 1.简介
一般，从Web API返回绝对 URI更好，例如[http://example.com/foobar](http://example.com/foobar)，而不是返回相对uri，例如/foobar。  
优点：  
- 更明确  
- 减轻 API客户端负担  
- 当在诸如JSON这样的表示中没有原生URI类型时，字符串的含义就没有什么不明确的地方了。  
- 它使得使用超链接标记HTML表示变得很容易。  
REST框架提供了两个实用的功能使返回绝对URI更简单。不是必须要求这么做，但是API自我描述时，会自动创建一个超链接，使浏览API更容易。


### 2. reverse
```python
Signature: reverse(viewname, *args, **kwargs)
```
与django.urls.reverse作用相似，除非它返回一个完全限定的URL，使用请求来确定主机和端口。  
应该将函数关键字参数包含在url中，例如
```python
from rest_framework.reverse import reverse
from rest_framework.views import APIView
from django.utils.timezone import now

class APIRootView(APIView):
    def get(self, request):
        year = now().year
        data = {
            ...
            'year-summary-url': reverse('year-summary', args=[year], request=request)
        }
        return Response(data)
```

### 3. reverse_lazy
```python
Signature: reverse_lazy(viewname, *args, **kwargs)
```
与django.urls.reverse_lazy方法类似，除了在返回完整的url链接时，也需要包含请求参数。
```python
api_root = reverse_lazy('api-root', request=request)
```

