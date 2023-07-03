# DRF23-Throttling
> HTTP/1.1 420让你更冷静



## 1 Throttling（Twitter API rate limiting response）

### 1. 简介
节流（Throttling）类似于权限，因为它决定了是否应该对请求进行授权。节流表示一个临时状态，并用于控制客户端对API的请求率。  
与许可一样，可以使用多个节流。对于未经身份验证的请求，您的API可能会有一个限制节流阀，而对于经过身份验证的请求，则会有一个更小的节流阀。  
另一个可能需要使用多个节流的场景是，如果您需要对API的不同部分施加不同的约束，因为某些服务特别占用资源。  
如果您想要同时强制实施节流率和持续的节流率，那么多节流也可以使用。例如，您可能希望将用户限制为每分钟60次请求，每天1000次请求。  
节流不一定只涉及到速率限制的请求。例如，存储服务可能还需要对带宽进行节流，而付费数据服务可能希望对访问的某些记录进行节流。


### 2. 如何设置节流类
和permissions，authentication一样，throttling也被定义成类的列表  
在运行每一个主体部分之前，将会检查每一个 throttle。如果检查失败，抛出exceptions.Throttled，主体部分不在运行。


### 3. 设置节流策略
全局默认值使用DEFAULT_THROTTLE_CLASSES和DEFAULT_THROTTLE_RATES设置
```python
REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': (
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ),
    'DEFAULT_THROTTLE_RATES': {
        'anon': '100/day',
        'user': '1000/day'
    }
}
```
对于速率的描述包括second, minute, hour或者day，也可以在使用APIView的视图中设置基于类的节流
```python
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle
from rest_framework.views import APIView

class ExampleView(APIView):
    throttle_classes = (UserRateThrottle,)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)


@api_view(['GET'])
@throttle_classes([UserRateThrottle])
def example_view(request, format=None):
    content = {
        'status': 'request was permitted'
    }
    return Response(content)
```

### 4. 怎样识别客户
使用X-Forwarded-For和Remote-Addr（X-Forwarded-For：请求端真实IP）  
[https://imququ.com/post/x-forwarded-for-header-in-http.html](https://imququ.com/post/x-forwarded-for-header-in-http.html)  
X-Forwarded-For: client, proxy1, proxy2 (用户真实地址，代理1，代理2)(三级代理，代理3直接连接服务器，所以不显示在XXF中， Remote-Addr=代理3,除了直连IP没有一个可以信任）  
HTTP请求头，作为用户的唯一性认证。优先使用X-Forwarded-For，没有再使用Remote-Addr。  
如果您需要严格地识别唯一的客户端IP地址，那么您需要首先配置这个API所支持的应用程序代理的数量（NUM_PROXIES设置）。如果将其设置为非0整数。一旦任何用户代理被移除，用户的真实地址就是X-Forwarded-For中的最后一个IP.如果设置为0。将会一直使用Remote-Addr请求头最为唯一性验证信息。


### 5. 设置缓存（cache）
throttle_classes由django的 cache后端提供。必须设置合适的cache。默认值为LocMemCache。
```python
# 修改默认值
class CustomAnonRateThrottle(AnonRateThrottle):
    cache = get_cache('alternate')
```
设置全局默认值（’DEFAULT_THROTTLE_CLASSES’），或者在throttle_classes中的属性设置。


## 2 接口使用指南

1. AnonRateThrottle

设置匿名用户的访问频率，AnonRateThrottle类中有一个rate属性，可以通过设置中的DEFAULT_THROTTLE_RATES[‘anon’]设置。

2. UserRateThrottle

认证用户访问频率，通过DEFAULT_THROTTLE_RATES[‘user’]设置，一个接口可以有多个UserRateThrottles，此时就需要继承重写UserRateThrottle的scope属性。
```python
class BurstRateThrottle(UserRateThrottle):
    scope = 'burst'

class SustainedRateThrottle(UserRateThrottle):
    scope = 'sustained'

REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': (
        'example.throttles.BurstRateThrottle',
        'example.throttles.SustainedRateThrottle'
    ),
    'DEFAULT_THROTTLE_RATES': {
        'burst': '60/min',
        'sustained': '1000/day'
    }
}
```

3. ScopedRateThrottle  
可以用来约束API不同的部分。仅仅用在包含.throttle_scope属性的视图中，通过将用户的ID或者IP与唯一的‘scope’属性链接起来。
```python
# views中
class ContactListView(APIView):
    throttle_scope = 'contacts'
    ...

class ContactDetailView(APIView):
    throttle_scope = 'contacts'
    ...

class UploadView(APIView):
    throttle_scope = 'uploads'

# 设置文件中
REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': (
        'rest_framework.throttling.ScopedRateThrottle',
    ),
    'DEFAULT_THROTTLE_RATES': {
        'contacts': '1000/day',
        'uploads': '20/day'
    }
}
```

## 3 自定义节流阀

- 继承重写BaseThrottle
- 实现.allow_request(self, request, view)方法，如果请求允许返回True
- 可选：.wait()方法，返回下一次请求需要等待的时间（seconds）或者None.wait()只有在.allow_request()预先返回了False，才会被调用。如果设置了.wait()方法，Retry-After将会被包含在响应头中。
```python
import random

class RandomRateThrottle(throttling.BaseThrottle):
    def allow_request(self, request, view):
        return random.randint(1, 10) != 1
```


————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78497732](https://blog.csdn.net/runnoob_1115/article/details/78497732)
