# DRF13-ViewSets
## 1.简介
路由系统是用于接收合适的请求，然后返回相应的响应  
REST框架允许将一系列相关的业务逻辑函数写在一起，称为ViewSet.在其他框架中，相似的实现也被称为’Resources’或者’Controllers’.  
一个ViewSet类也是一个基础的View类，不提供任何请求处理函数，如get或post,只提供类似list和created这样的方法  
一个ViewSet类，通过.as_view() method绑定到相应的url上

- 一般不需要在路由管理器中另外注册视图函数，只需要注册这个viewset类就够了，然后就会自动帮你处理，例如：
```python
# 定义一个简单的list和retrieve视图
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from myapps.serializers import UserSerializer
from rest_framework import viewsets
from rest_framework.response import Response

class UserViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)
```
如果我们需要可以提取出来成为两个单独的部分，需要传入参数，方法名：函数名
```python
user_list = UserViewSet.as_view({'get': 'list'})
user_detail = UserViewSet.as_view({'get': 'retrieve'})
```
一般我们使用Router类自动帮我们处理路由
```python
from myapp.views import UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# 默认使用model小写复数， base_name为小写单数
router.register(r'users', UserViewSet, base_name='user')
urlpatterns = router.urls
```

- ViewSet和View视图类的区别
   - 重复的逻辑函数应该被写进一个单独的类中，我们仅需要指定queryset一次，然后就可以被多个函数使用
   - 利用路由管理器，我们就不再需要亲自写url了
   - 所以使用URL confs更明确，有更多的控制， ViewSets编写速度更快，需要使url一致时，应该被使用。


## 2. 为路由添加额外的功能
REST框架默认提供了create/retrieve/update/destroy等操作
```python
class UserViewSet(viewsets.ViewSet):
    """
    一个空的演示实例，将会被路由类处理

    如果使用过了后缀，确保每一个函数后面有一个`format=None`参数
    """

    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
```
如果临时有一个方法需要被路由处理，可以使用@detail_route或 @list_route装饰器  
@detail_route包含一个pk，此方法为操作单个实例的方法  
@list_route，是操作一系列对象的方法，如：
```python
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from myapp.serializers import UserSerializer, PasswordSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @detail_route(methods=['post'])
    def set_password(self, request, pk=None):
        user = self.get_object()
        serializer = PasswordSerializer(data=request.data)
        if serializer.is_valid():
            user.set_password(serializer.data['password'])
            user.save()
            return Response({'status': 'password set'})
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

    # 最近登录的用户
    @list_route()
    def recent_users(self, request):
        recent_users = User.objects.all().order('-last_login')

        page = self.paginate_queryset(recent_users)
        # page为分页好的一些列对象
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(recent_users, many=True)
        return Response(serializer.data)
```
此装饰器也能为路由视图添加额外的视图。
```python
@detail_route(methods=['post'], permission_classes=[IsAdminOrIsSelf])
def set_password(self, request, pk=None):
   ...
```
装饰器默认处理get请求，但也通过methods参数接受其他请求方法
```python
# 删除密码
@detail_route(methods=['post', 'delete'])
def unset_password(self, request, pk=None):
   ...
```
这两个新的函数的路由地址为：  
^users/{pk}/set_password/和users/pk/unsetpassword/

## 3. API参考

- ViewSet

继承自APIView，利用permission_classes, authentication_classes等来控制API策略  
一般都需要重写此类中的方法

- GenericViewSet

GenericViewSet继承自GenericAPIView，提供了一系列如get_object, get_queryset方法，如果使用此类，需要重写此类或者与mixin类进行组合

- ModelViewSet

也是继承自GenericAPIView，通过mixin类，实现了一些具体的操作，.list(), .retrieve(), .create(), .update(), .partial_update(), 和 .destroy()。  
例如：
```python
class AccountViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [IsAccountAdminOrReadOnly]
```
你可以对GenericAPIView提供的各种方法和属性进行重写。
```python
class AccountViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing the accounts
    associated with the user.
    """
    serializer_class = AccountSerializer
    permission_classes = [IsAccountAdminOrReadOnly]

    # 动态的获取查询集，视图类中必须提供get_queryset方法或者queryset属性
    def get_queryset(self):
        return self.request.user.accounts.all()
```
注意：当我们删除ViewSet的queryset属性时， 任何与此相关的路由都自动无法获得数据库模型的base_name，所以在路由注册时，我们必须设置base_name参数。  
虽然类视图默认提供了各种create/list/retrieve/update/destroy操作，你也可以通过permission_classes管理用户操作权限  
- ReadOnlyModelViewSet  
也是继承自GenericAPIView，仅提供只读操作，.list()和.retrieve().如：
```python
class AccountViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
```

## 4. 自定义个性化视图实例
```python
from rest_framework import mixins

class CreateListRetrieveViewSet(mixins.CreateModelMixin,
                                mixins.ListModelMixin,
                                mixins.RetrieveModelMixin,
                                viewsets.GenericViewSet):
    """
    A viewset that provides `retrieve`, `create`, and `list` actions.

    To use it, override the class and set the `.queryset` and
    `.serializer_class` attributes.
    """
    pass
```





————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78486891](https://blog.csdn.net/runnoob_1115/article/details/78486891)

