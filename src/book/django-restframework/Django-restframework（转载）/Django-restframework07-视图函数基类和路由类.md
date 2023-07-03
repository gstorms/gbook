# DRF07-视图函数基类和路由类
## 1、内容
1. 重构视图函数
1. 将视图函数绑定url
1. 利用路由类
1. view与viewsets之间的权衡

rest框架提供了ViewSets基类，让开发者得以集中精力于对API的状态和交互进行建模;  
ViewSets和views十分相似，除了提供如read,update等方法，而不是get或put;  
ViewSet类使用Router类处理复杂的url.

## 2、利用ViewSets进行重构
第一步：重构UserList 和 UserDetail，将其归为一个类UserViewSet
```python
from rest_framework import viewsets
# 只具有只读权限，不再需要写两个视图类，一个处理多个，一个处理单个对象
class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
```
第二步：重构SnippetList, SnippetDetail 和 SnippetHighlight类为SnippetViewSet类
```python
from rest_framework.decorators import detail_route

class SnippetViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
    # 设置权限
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)

    # 自定义的方法，用来处理不是标准create/update/delete的请求，默认处理get请求，可以通过参数methods=POST来处理POST请求，或其他
    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        snippet = self.get_object()
        return Response(snippet.highlighted)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
```
第三步： 绑定视图类到url
```python
from snippets.views import SnippetViewSet, UserViewSet, api_root
from rest_framework import renderers
# 前一个表示请求的方法，后一个表示处理的函数
snippet_list = SnippetViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
snippet_detail = SnippetViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})
snippet_highlight = SnippetViewSet.as_view({
    'get': 'highlight'
}, renderer_classes=[renderers.StaticHTMLRenderer])
user_list = UserViewSet.as_view({
    'get': 'list'
})
user_detail = UserViewSet.as_view({
    'get': 'retrieve'
})


urlpatterns = format_suffix_patterns([
    url(r'^$', api_root),
    url(r'^snippets/$', snippet_list, name='snippet-list'),
    url(r'^snippets/(?P<pk>[0-9]+)/$', snippet_detail, name='snippet-detail'),
    url(r'^snippets/(?P<pk>[0-9]+)/highlight/$', snippet_highlight, name='snippet-highlight'),
    url(r'^users/$', user_list, name='user-list'),
    url(r'^users/(?P<pk>[0-9]+)/$', user_detail, name='user-detail')
])
```

## 3. 使用路由器
因为我们使用ViewSet类，而不是View类，我们实际上不需要设计自己的URL  
利用路由器Router可以自动处理链接到资源的请求  
我们唯一需要做的就是利用路由注册视图函数，然后让他自动处理  
下面是改进版的url视图：
```python
from django.conf.urls import url, include
from snippets import views
from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
router = DefaultRouter()
# 我们只需提供两个参数，一个是url前缀，一个是视图函数本身
# DefaultRouter类会自动为我们创建the API root view，所以我们可以删除api_root
router.register(r'snippets', views.SnippetViewSet)
router.register(r'users', views.UserViewSet)

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
```


————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78479173](https://blog.csdn.net/runnoob_1115/article/details/78479173)
