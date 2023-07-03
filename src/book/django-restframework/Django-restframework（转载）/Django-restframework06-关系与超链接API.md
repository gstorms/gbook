# DRF06-关系与超链接API
## 1. 内容
- 为API接口创建根节点
- 为对象的高亮显示文本创建端点
- 为每个API创建链接
- 确保每个url模式被命名，或者定义
- 添加分页
- 浏览接口

之前使用主键，需要提升内聚性和可发现性

## 2. 创建api根节点的断点
```python
# 之前我们有了snippets和users的端点，现在我们利用正则表达式和带@api_view基础视图函数创建初级的单一断点。
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'snippets': reverse('snippet-list', request=request, format=format)
    })
```

## 3. 创建高亮文本的断点
> 除了返回JSON数据，rest还提供了两种HTML渲染方式，
> - 一种利用模板templates渲染，另一种通过pre-rendered渲染
> - ++注意++：创建高亮文本时，不存在创建好的通用的视图函数以供我们调用
> - 另一个方面是我们不能返回一个对象实例，而是返回一个对象实例的某个属性
> - 所以我们利用基础的视图函数来处理， 创建自己的‘get’方法


```python
from rest_framework import renderers
from rest_framework.response import Response

class SnippetHighlight(generics.GenericAPIView):
    queryset = Snippet.objects.all()
    # 设置我们的序列化格式，这里是序列化为HTML形式
    renderer_classes = (renderers.StaticHTMLRenderer,)

    def get(self, request, *args, **kwargs):
        snippet = self.get_object()
        return Response(snippet.highlighted)
```
添加url路由
```python
# 这里我们还没有定义这一大类的根节点入口
url(r'^$', views.api_root), 
# 获取高亮文本的接口
url(r'^snippets/(?P<pk>[0-9]+)/highlight/$', views.SnippetHighlight.as_view()),
```

## 4. 超链接接口
处理存在实体之间的关系，有以下几种不同的方式：  
- 利用pk  
- 在实体之间使用超链接， 那序列化就要继承HyperlinkedModelSerializer  
- 利用唯一的标识字段链接相关的实体  
- 使用相关实体的默认字符串表示形式  
- 将相关实体嵌套在父类中  
- 其他自定义表示  
rest框架支持所有的这些样式，我们可以跨越前向或者利用反向关系获得，或者应用外键之类的

HyperlinkedModelSerializer与ModelSerializer有以下区别：  
- 默认不包含id字段  
- 它包含一个url字段，HyperlinkedIdentityField字段生成  
- 关系通过HyperlinkedRelatedField字段建立，而不是PrimaryKeyRelatedField  
重写成超链接序列器，在snippets/serializers.py中：
```python
class SnippetSerializer(serializers.HyperlinkedModelSerializer):

    owner = serializers.ReadOnlyField(source='owner.username')
    # 视图函数名：views_name,后缀为html，而不是json，因为我们需要的就是高亮的文本
    highlight = serializers.HyperlinkedIdentityField(view_name='snippet-highlight', format='html')

    class Meta:
        model = Snippet
        fields = ('url', 'id', 'highlight', 'owner',
                  'title', 'code', 'linenos', 'language', 'style')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    snippets = serializers.HyperlinkedRelatedField(many=True, view_name='snippet-detail', read_only=True)

    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'snippets')
```

## 5. URL模式命名

1. 根节点，命名为 ‘user-list’ and ‘snippet-list’，模型名-list
1. 自定义模型的字段 使用模型名-字段名
1. 单个实例属性，使用模型名-detail  
将这些全部写入我们的路由管理器中为：
```python
from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from snippets import views

# API endpoints
urlpatterns = format_suffix_patterns([
    url(r'^$', views.api_root),
    url(r'^snippets/$',views.SnippetList.as_view(),name='snippet-list'),
    url(r'^snippets/(?P<pk>[0-9]+)/$',views.SnippetDetail.as_view(),name='snippet-detail'),
    url(r'^snippets/(?P<pk>[0-9]+)/highlight/$',views.SnippetHighlight.as_view(),
    name='snippet-highlight'),
    url(r'^users/$',views.UserList.as_view(),name='user-list'),
    url(r'^users/(?P<pk>[0-9]+)/$',views.UserDetail.as_view(),name='user-detail')
])

# Login and logout views for the browsable API
urlpatterns += [
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
]
```


————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78479162](https://blog.csdn.net/runnoob_1115/article/details/78479162)
