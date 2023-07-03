# DRF14-路由类Router(冲突)
## 1.作用
快速为一个‘资源’比较多的视图类声明所有普通路由。


## 2.用法

### 使用SimpleRouter
```python
from rest_framework import routers
router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'accounts', AccountViewSet)
urlpatterns = router.urls
```

对于register()方法有两个必要的参数：  
- prefix：系列路由前缀  
- viewset：视图集合类  
可选参数：  
- base_name:用于创建url的基础名字，如果没有设置，就根据queryset值设置，如果没有设置queryset属性，那么就必须设置base_name. 如果没有设置的话就会报错

```python
'base_name' argument not specified, and could not automatically determine the name from the viewset, as it does not have a '.queryset' attribute.
```

自动生成的实例：  
- URL pattern: ^users/Name:‘user−list′−URLpattern:users/pk/Name:‘user−list′−URLpattern:users/pk/ Name: ‘user-detail’  
- URL pattern: ^accounts/Name:‘account−list′−URLpattern:accounts/pk/Name:‘account−list′−URLpattern:accounts/pk/ Name: ‘account-detail’


### 使用include方法
方法一：
```python
router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'accounts', AccountViewSet)
urlpatterns = [
    url(r'^forgot-password/$', ForgotPasswordFormView.as_view()),
]
urlpatterns += router.urls
```

方法二：
```python
urlpatterns = [
    url(r'^forgot-password/$', ForgotPasswordFormView.as_view()),
    url(r'^', include(router.urls)),
]
```

方法三：
```python
urlpatterns = [
    url(r'^forgot-password/$', ForgotPasswordFormView.as_view()),
    url(r'^api/', include(router.urls, namespace='api')),
]
```

注意:如果序列化器为超链接类型（hyperlinked serializers），那就需要确保任何view_name都需要反射到这个正确的命名空间上。如对于需要超链接到用户详细信息user-detail的函数，需要设置view_name=’api:user-detail’


### 另外的链接和行为
任何被@detail_route 或者 @list_route装饰的函数都会被设置url路径，例如ViewSet中的方法：

```python
# 自定义的权限管理类
from myapp.permissions import IsAdminOrIsSelf
from rest_framework.decorators import detail_route
class UserViewSet(ModelViewSet):
    ...
    @detail_route(methods=['post'], permission_classes=[IsAdminOrIsSelf])
    def set_password(self, request, pk=None):
        ...
```

生成的路由地址为：

```python
URL pattern: ^users/{pk}/set_password/$ Name: 'user-set-password'
```

你也可以自定义url路径：

```python
from myapp.permissions import IsAdminOrIsSelf
from rest_framework.decorators import detail_route
class UserViewSet(ModelViewSet):
    ...
    @detail_route(methods=['post'], permission_classes=[IsAdminOrIsSelf], url_path='change-password')
    def set_password(self, request, pk=None):
        ...
```

此时的url路径为：

```python
URL pattern: ^users/{pk}/change-password/$ Name: 'user-change-password'
```

你也可以同时使用url_path和url_name参数控制生成的url路径


## 3. 路由接口指南

### SimpleRouter
| URL Style | HTTP Method | Action | URL Name |
| --- | --- | --- | --- |
| {prefix}/ | GET | list | {basename}-list |
|  | POST | create |  |
| {prefix}/{methodname}/ | GET, or as specified by ``methods argument | ``@list_route decorated method | {basename}-{methodname} |
| {prefix}/{lookup}/ | GET | retrieve | {basename}-detail |
|  | PUT | update |  |
|  | PATCH | partial_update |  |
|  | DELETE | destroy |  |
| {prefix}/{lookup}/{methodname}/ | GET, or as specified by ``methods argument | ``@detail_route decorated method | {basename}-{methodname} |


SimpleRouter会默认在url结尾添加一个‘/’，可以通过设置trailing_slash为False，不添加尾斜杠

```python
router = SimpleRouter(trailing_slash=False)
```

路由查询值默认包含除了斜杠和period characters之外的任何字符  
通过设置lookup_value_regex属性可以限制查找，如将查询字段设置为uuid

```python
class MyModelViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    lookup_field = 'my_model_id'
    lookup_value_regex = '[0-9a-f]{32}'
```


### DefaultRouter
| URL Style | HTTP Method | Action | URL Name |
| --- | --- | --- | --- |
| [.format] | GET | automatically generated root view | api-root |
| {prefix}/[.format] | GET | list | {basename}-list |
|  | POST | create |  |
| {prefix}/{methodname}/[.format] | GET, or as specified by ``methods argument | ``@list_route decorated method | {basename}-{methodname} |
| {prefix}/{lookup}/[.format] | GET | retrieve | {basename}-detail |
|  | PUT | update |  |
|  | PATCH | partial_update |  |
|  | DELETE | destroy |  |
| {prefix}/{lookup}/{methodname}/[.format] | GET, or as specified by ``methods argument | ``@detail_route decorated method | {basename}-{methodname} |

也有trailing_slash属性


### 自定义路由Custom Routers
一般不需要经常实现自定义路由，但是当你需要构造特定的路由系统时，它将非常有用，你可以将你的自定义模式封装成一个路由，以便重复调用，而不用为每一个新视图写一个路由。  
自定义路由的简单方法:继承一个已经存在的路由类。.routes属性通常用于作为url模式的模板，用来匹配每一个视图函数，.routes属性值为一系列路由Route命名元组列表构成：  
- url  
- {prefix}：url前缀，用来标识同一系列的路由  
- {lookup}： 查询字段，用来匹配单一实例  
- {trailing_slash}： 是否在末尾自动添加’/’  
- mapping: HTTP方法-视图函数映射表  
- name: url名称，用于重定向  
- {basename}： url名称创建的基础  
- initkwargs：初始化一个视图实例时附加的参数字典，suffix（后缀参数）一般被用于在生成一个视图名称和链接时标识视图集合类型

示例：  
首先通过继承SimpleRouter，创建一个自定义路由类

```python
from rest_framework.routers import Route, DynamicDetailRoute, SimpleRouter
class CustomReadOnlyRouter(SimpleRouter):
    """
    A router for read-only APIs, which doesn't use trailing slashes.
    """
    routes = [
        Route(
            url=r'^{prefix}$',
            mapping={'get': 'list'},
            name='{basename}-list',
            initkwargs={'suffix': 'List'}
        ),
        Route(
            url=r'^{prefix}/{lookup}$',
            mapping={'get': 'retrieve'},
            name='{basename}-detail',
            initkwargs={'suffix': 'Detail'}
        ),
        DynamicDetailRoute(
            url=r'^{prefix}/{lookup}/{methodnamehyphen}$',
            name='{basename}-{methodnamehyphen}',
            initkwargs={}
        )
    ]
```

ViewSet为：

```python
class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'
    @detail_route()
    def group_names(self, request, pk=None):
        """
        返回用户参加的所有小组名称列表
        """
        user = self.get_object()
        groups = user.groups.all()
        return Response([group.name for group in groups])
```

注册路由：
```python
router = CustomReadOnlyRouter()
router.register('users', UserViewSet)
urlpatterns = router.urls
```

将会创建以下映射：

| URL | HTTP Method | Acton | URL Name |
| --- | --- | --- | --- |
| /users | GET | list | user-list |
| /users/{username} | GET | retrieve | user-detail |
| /users/{username}/group-names | GET | group_names | user-group-names |


更加个性化的路由类  
如果你想编写一个完全个性化的路由类，可以通过重写BaseRouter和get_urls(self)方法  
get_urls(self)方法会检查注册的视图集合类，然后返回一个路由模式列表（URL patterns）  
注册之前，首先会通过self.registry检查设置的属性（视图集合和base_name）  
也可以重写get_default_base_name(self, viewset)或者通过其他方式明确的设置base_name参数


## 4.第三方包
DRF Nested Routers  
ModelRouter (wq.db.rest)  
提供了一个模型继承类，继承自利用register_model()扩展后的DefaultRouter，非常类似于Django’s admin.site.register，需要的唯一参数rest.router.register_model是一个数据库模型类，因为可以从模型类中推断出url prefix, serializer, 和viewset
```python
from wq.db import rest
from myapp.models import MyModel

rest.router.register_model(MyModel)
```
DRF-extensions  
用于创建嵌套的viewsets.  
————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78486920](https://blog.csdn.net/runnoob_1115/article/details/78486920)
