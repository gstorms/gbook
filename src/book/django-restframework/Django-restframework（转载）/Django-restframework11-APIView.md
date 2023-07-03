# DRF11-APIView
## 1. APIView与View的区别
1. APIView是View的子类
1. 传递给请求处理程序的request实例是REST框架的请求实例，而不是Django的HttpRequest实例
1. 处理程序返回的基于REST框架的Response，而不是Django的HttpResponse,视图函数将会管理内容协商，然后设置正确的渲染方式
1. 任何APIException将会被捕捉，然后转换成合适的response对象
1. 接收到的请求首先被认证，然后赋予相应的权限，然后通过节流器分发给相应的请求处理函数，类似.get()和.post()

例如：
```python
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User

class ListUsers(APIView):
    """
    View to list all users in the system.

    * Requires token authentication.
    * Only admin users are able to access this view.
    """
    # 认证类，通过token认证
    authentication_classes = (authentication.TokenAuthentication,)
    # 权限赋予类，赋予管理员权限
    permission_classes = (permissions.IsAdminUser,)

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        # 返回用户名列表
        usernames = [user.username for user in User.objects.all()]
        return Response(usernames)
```

## 2. API策略属性（可插拔，设置）

1. renderer_classes： 渲染类
1. parser_classes： 解析类
1. authentication_classes： 认证类
1. throttle_classes： 节流类
1. permission_classes： 权限赋予类
1. content_negotiation_class： 内容协商类

## 3. 应用API策略的实例化方法（获取一个对象）
实现各种可插拔策略的实例化方法，一般不需要重写这些方法

- get_renderers(self)
- get_parsers(self)
- get_authenticators(self)
- get_throttles(self)
- get_permissions(self)
- get_content_negotiator(self)
- get_exception_handler(self)

## 4. 应用API政策的实施方法（调用方法，应用）

- .check_permissions(self, request)
- .check_throttles(self, request)
- .perform_content_negotiation(self, request, force=False)

## 5. 调度方法（将请求安排给相应的处理视图）
下面的方法都是由视图函数的dispatch()方法调用，做出的任何操作要么是在处理函数如.get(), .post(), put(), patch() and .delete()之前调用，要么是在之后。  
- .initial(self, request, *args, **kwargs)  
初始化， 做出的任何操作都需要在视图处理函数之前调用，一般是用于赋予权限、限流和执行内容协议。  
- .handle_exception(self, exc)  
视图处理函数发生异常，将会被此函数捕捉到，然后抛出一个对象实例，或者再次向上抛出异常。默认处理的异常包含在rest_framework.exceptions.APIException中，也包括django的Http404 and PermissionDenied异常，然后返回一个合适的异常响应  
- .initialize_request(self, request, *args, **kwargs)  
将请求对象实例化为REST框架的Request对象，而不是Django HttpRequest  
- .finalize_response(self, request, response, *args, **kwargs)  
确保返回的任何Response已经按照文本协议渲染成正确的文本类型

## 6. 基于函数的视图
> 基于类的视图通常是最优解是一个错误

REST也提供一系列简单的装饰器，用来接受一个REST Request实例，然后返回一个REST Response实例，允许你配置这个请求是怎么被处理的。

### @api_view()核心功能
@api_view(http_method_names=[‘GET’], exclude_from_schema=False)  
- 包含一系列需要处理的请求方法，例如一个返回数据的函数：
```python
from rest_framework.decorators import api_view

@api_view()
def hello_world(request):
    return Response({"message": "Hello, world!"})
```
这个例子用了在settings文件中设置的默认的renderers, parsers, authentication classes，默认只有GET方法被接受，其他方法将会返回”405 Method Not Allowed”. 为了接受更多的方法，我们可以在装饰器中传入接受的方法：
```python
@api_view(['GET', 'POST'])
def hello_world(request):
    if request.method == 'POST':
        return Response({"message": "Got some data!", "data": request.data})
    return Response({"message": "Hello, world!"})
```
你也可以通过设置exclude_from_schema=True,除去任何自动添加的模式处理，返回原生的django对象？？
```python
@api_view(['GET'], exclude_from_schema=True)
def api_docs(request):
    ...
```

## 7. API策略装饰器
为了重写默认的配置，REST框架提供了一系列装饰器，但是必须注意他们的使用先后顺序，有的必须在@api_view之前，有的必须在其之后。
```python
from rest_framework.decorators import api_view, throttle_classes
from rest_framework.throttling import UserRateThrottle

class OncePerDayUserThrottle(UserRateThrottle):
        rate = '1/day'

@api_view(['GET'])
@throttle_classes([OncePerDayUserThrottle])
def view(request):
    return Response({"message": "Hello for today! See you tomorrow!"})
```

### 可用的装饰器：

- @renderer_classes(…)
- @parser_classes(…)
- @authentication_classes(…)
- @throttle_classes(…)
- @permission_classes(…)  
每个装饰器都有一个单独的参数，必须是类列表或者类元组。

> 暂时（可能不准确）：
> 先认证权限-限制然后分发处理函数-用户认证-解析数据-渲染序列化数据-返回数据




————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78486842](https://blog.csdn.net/runnoob_1115/article/details/78486842)
