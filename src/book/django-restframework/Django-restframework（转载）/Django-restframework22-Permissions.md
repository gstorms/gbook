# DRF22-Permissions
身份验证或标识本身通常不足以获得访问信息或代码的权限。为此，请求访问的实体必须具有授权。


## 1 简介
permissions和authentication，throttling一起，确定一个请求是否具有访问权限。  
权限检查一般在请求执行到的动作之前进行检查。Permission 一般会使用用户的认证信息（request.user和request.auth）来确定接收到的请求是否应该被允许。  
Permissions被用来授予不同种类的用给在不同的接口的访问权限。  
简单的形式就是授予认证用户全部权限，拒绝未认证的用户访问请求。这与IsAuthenticated权限类一致。  
不那么严格的方式就是未认证用户具有只读权限（IsAuthenticatedOrReadOnly）。


### 1 确定认证权限
权限一般被定义成一系列权力类的列表（permission_classes）。  
在运行主体之前，会先检查列表中的每一个权限，如果全都失败，产生一个exceptions.PermissionDenied或者exceptions.NotAuthenticated，主体部分将不会运行。  
如果权限检查根据以下2规则返回”403 Forbidden”或”401 Unauthorized” ：  
- 认证成功，但是权限不够，403 Forbidden response  
- 认证失败，优先级最高的认证类没有使用WWW-Authenticate响应头，将会返回HTTP 403 Forbidden response  
- 认证失败，优先级最高的认证类使用了WWW-Authenticate响应头，将返回HTTP 401 Unauthorized response


### 2 对象级权限（Object level permissions）
对象级权限用于为确定用户是否有权对对象执行操作，该对象一般指模型实例  
对象级权限一般在.get_object()方法被调用时运行。和视图函数级权限一样。未经授权也会抛出exceptions.PermissionDenied异常  
如果你在编写视图函数时，需要使用对象级权限管理，或者你在重写通用视图的get_object方法，你需要调用.check_object_permissions(request, obj)方法。该方法将会抛出PermissionDenied或者 NotAuthenticated，或者返回拥有的合适权限。
```python
def get_object(self):
    obj = get_object_or_404(self.get_queryset())
    self.check_object_permissions(self.request, obj)
    return obj
```
对象级权限的局限性  
出于性能的原因，当返回一个对象列表时，通用视图不会自动将对象级权限应用到queryset中的每个实例。  
通常，当您使用对象级权限时，您还需要适当地过滤queryset，以确保用户只对允许查看的实例具有可见性。


### 3 设置权限
默认的全局设置为：DEFAULT_PERMISSION_CLASSES
```python
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    )
}
```
如果没有指定，设置为任何人均可以为访问
```python
'DEFAULT_PERMISSION_CLASSES': (
   'rest_framework.permissions.AllowAny',
)
```
也可以在视图函数或者视图类中设置权限类
```python
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

class ExampleView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)

# 视图函数
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def example_view(request, format=None):
    content = {
        'status': 'request was permitted'
    }
    return Response(content)

```

## 2. 接口指南
AllowAny:允许任何人访问，和权限设置为空一样  
IsAuthenticated：允许认证成功  
IsAdminUser：只允许（user.is_staff=True）的用户访问  
IsAuthenticatedOrReadOnly：认证用户全部权限，未认证用户只读  
DjangoModelPermissions  
关系到 django.contrib.auth model permissions. 这个权限只能应用在拥有queryset属性的视图中。  
只有对用户进行了身份验证，并分配了相关的模型权限，才会授予授权。  
- POST要求用户有add权限  
- PUT和PATCH要求用户有change权限  
- DELETE要求用户有delete权限  
支持自定义模型权限，默认行为可以被重写，例如可以为GET请求设置权限。  
自定义模型权限（DjangoModelPermissions）时，需要重写然后设置.perms_map属性  
在没有设置queryset属性的视图中使用模型权限  
如果您使用的是重写了get_queryset()方法的视图，那么视图中可能没有.queryset属性.建议也写上一个queryset对视图进行标记，这样该类就可以确定所需的权限。例如:
```python
queryset = User.objects.none()
```
DjangoModelPermissionsOrAnonReadOnly ：未认证用户具有只读权限  
DjangoObjectPermissions：对象级权限  
关系到django的 object permissions framework，其允许模型中的每个对象具有权限。为了使用此类，你还需要一个支持对象级权限的额权限许可后端，比如django-guardian。具体使用和 DjangoModelPermissions 类似。视图必须具有queryset属性或者get_queryset()方法。  
如果想支持GET, HEAD和OPTIONS请求，需要添加DjangoObjectPermissionsFilter类来确保返回结果中包含的对象是用户有权操作的。

## 3. 自定义权限
首先继承BasePermission，然后重写.has_permission(self, request, view)和.has_object_permission(self, request, view, obj)两种方法中至少一个。如果对象有权限就返回True,否则False.  
如果你需要判断一个请求是读操作还是写操作，你应该检查该方法是否在SAFE_METHODS元组中，该元组包含（’GET’, ‘OPTIONS’, ‘HEAD’）
```python
if request.method in permissions.SAFE_METHODS:
    # Check permissions for read-only request
else:
    # Check permissions for write request
```
注意：对象级的has_object_permission方法只有在视图级的has_permission检查通过之后才会进行调用。为了使对象级权限检查运行，还需要调用.check_object_permissions(request, obj)方法。如果你使用generic views的话就会默认帮你处理。  
自定义权限类如果检查失败，会抛出PermissionDenied异常。可以自定义message属性，用来表示详情。否则的话，默认使用default_detail属性。
```python
from rest_framework import permissions

class CustomerAccessPermission(permissions.BasePermission):
    message = 'Adding customers not allowed.'

    def has_permission(self, request, view):
         ...
```
使用实例，检查用户IP是否在黑名单中
```python
from rest_framework import permissions

class BlacklistPermission(permissions.BasePermission):
    """
    Global permission check for blacklisted IPs.
    """

    def has_permission(self, request, view):
        ip_addr = request.META['REMOTE_ADDR']
        blacklisted = Blacklist.objects.filter(ip_addr=ip_addr).exists()
        return not blacklisted
```
对象级权限
```python
class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Object-level permission to only allow owners of an object to edit it.
    Assumes the model instance has an `owner` attribute.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Instance must have an attribute named `owner`.
        return obj.owner == request.user
```

## 4 三方包

1. Composed Permissions：提供复杂而且具有多层的对象权限管理
1. REST Condition：使用逻辑判断结合权限认证
1. DRY Rest Permissions：DRY Rest权限包提供默认和自定义操作定义不同权限的能力。这个包是为具有权限的应用（app）设计的，这些应用程序是根据应用程序的model中定义的关系而生成的。它还支持通过API的序列化器返回到客户端应用程序的权限检查。此外，它还支持向默认值和自定义列表操作添加权限，以限制每个用户检索的数据。
1. Django Rest Framework Roles：为API接口配置多种类型的user
1. Django Rest Framework API Key：允许您确保向服务器发出的每个请求都需要一个API密钥头。您可以从django管理界面生成一个。



————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78497716](https://blog.csdn.net/runnoob_1115/article/details/78497716)
