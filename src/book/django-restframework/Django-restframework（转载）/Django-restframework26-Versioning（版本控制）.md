# DRF26-Versioning（版本控制）
## 一、Versioning

### 1.简介
API版本控制可以用来在不同的客户端使用不同的行为。REST框架提供了大量不同的版本设计。  
版本控制是由传入的客户端请求决定的，并且可能基于请求URL，或者基于请求头。  
有许多有效的方法达到版本控制的目的。特别是为具有多个客户的长期系统工程进行设计时，没有版本控制的系统也是可以的。


### 2.REST框架的版本控制
当使用版本控制时，request.version属性（字符串）与客户端请求的版本一致。  
默认情况下，没有使用版本控制，request.version将会返回None  
1. 基于不同版本进行不同的行为
```python
def get_serializer_class(self):
    if self.request.version == 'v1':
        return AccountSerializerVersion1
    return AccountSerializer
```

1. 改变URL
```python
from rest_framework.reverse import reverse

reverse('bookings-list', request=request)
```
reverse函数将应用于转换任何请求版本的URL。  
- NamespacedVersioning：类似命名空间
```python
'v1:bookings-list'
http://example.org/v1/bookings/.
```

- QueryParameterVersioning：查询参数
```python
http://example.org/bookings/?version=1.0
```

1. 版本控制和超链接序列化器  
当使用超链接的序列化器和基于URL的版本控制方案时，确保将请求作为序列化器的上下文。
```python
def get(self, request):
    queryset = Booking.objects.all()
    serializer = BookingsSerializer(queryset, many=True, context={'request': request})
    return Response({'all_bookings': serializer.data})
```

### 3. 配置版本控制方案

1. 全局默认值设置
```python
REST_FRAMEWORK = {
    'DEFAULT_VERSIONING_CLASS': 'rest_framework.versioning.NamespaceVersioning'
}
```
除非明确设置，否则DEFAULT_VERSIONING_CLASS值为None.此例中request.version将会始终返回None  
您还可以在一个单独的视图上设置版本控制方案。通常，您不需要这样做，因为在全局范围内使用一个版本控制方案更有意义。如果您确实需要这样做，请使用versioning_class属性。
```python
class ProfileList(APIView):
    versioning_class = versioning.QueryParameterVersioning
```

2. 其他的版本设置
   - DEFAULT_VERSION：传递给request.version的值，默认为None
   - ALLOWED_VERSIONS:如果设置，返回一系列用于控制版本的集合。如果客户提供的版本不在此集合中，将会抛出一个错误，一般情况下，DEFAULT_VERSION版本是ALLOWED_VERSIONS的一部分。默认为None.
   - VERSION_PARAM:应该用于任何版本控制参数的字符串，例如在媒体类型或URL查询参数中。默认为’version’。

设置自己的版本控制类：
```python
from rest_framework.versioning import URLPathVersioning
from rest_framework.views import APIView

class ExampleVersioning(URLPathVersioning):
    default_version = ...
    allowed_versions = ...
    version_param = ...

class ExampleView(APIVIew):
    versioning_class = ExampleVersioning
```

## 二、自定义版本模式

1. 继承BaseVersioning类
1. 重写.determine_version方法
```python
class XAPIVersionScheme(versioning.BaseVersioning):
    def determine_version(self, request, *args, **kwargs):
        return request.META.get('HTTP_X_API_VERSION', None)
```
如果你的版本控制是基于请求URL的，如果需要确定更改版本的url是怎么确定的，此时你就需要重写.reverse()方法。
