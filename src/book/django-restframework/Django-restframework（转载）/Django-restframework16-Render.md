# DRF16-Render
> 在模版响应返回给客户端之前，必须被渲染。渲染进程将模板和正文之间中间内容渲染成客户端能够接受的二进制流



## 1.如何决定使用什么渲染器
渲染器通常和解析器一样由一系列类列表组成  
一般检查请求头，另外就是路由后缀（ [http://example.com/api/users_count.json](http://example.com/api/users_count.json)）


## 2.设置渲染器
通过settings文件设置
```python
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    )
}
```
单一APIView
```python
from django.contrib.auth.models import User
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

class UserCountView(APIView):
    """
    A view that returns the count of active users in JSON.
    """
    renderer_classes = (JSONRenderer, )

    def get(self, request, format=None):
        # 返回当前在线用户数量
        user_count = User.objects.filter(active=True).count()
        content = {'user_count': user_count}
        return Response(content)
```
使用装饰器
```python
@api_view(['GET'])
@renderer_classes((JSONRenderer,))
def user_count_view(request, format=None):
    """
    A view that returns the count of active users in JSON.
    """
    user_count = User.objects.filter(active=True).count()
    content = {'user_count': user_count}
    return Response(content)
```

## 3.渲染器顺序
请求中如果没有指定接受的渲染器类型（Accept），默认使用renderer_classes中的第一个渲染器进行解析  
如果你的接口包含的视图函数既能提供正常的网页访问，又能作为API接口返回响应对象，那么你应该考虑使用TemplateHTMLRenderer作为默认renderer.


## 4.渲染器指南

### JSONRenderer
以utf-8进行编码，返回JSON数据  
默认风格包含unicode字符， 返回的数据十分紧凑，没有不必要的空格。如果想要缩进，可以在请求的时候设置‘intent’参数，如Accept: application/json; indent=4，如
```python
{
    "unicode black star": "★",
    "value": 999
}
```
JSON的编码方式可以通过修改UNICODE_JSON和COMPACT_JSON键值实现  
- media_type: application/json  
- format: ‘.json’  
- charset: None


### TemplateHTMLRenderer
利用django的默认模版进行渲染，返回HTML数据。与其它渲染器的区别：  
- 返回的数据不要进行序列化  
- 当你创建一个响应对象的时候，想包含一个template_name参数

TemplateHTMLRenderer渲染器利用响应数据作为上下文字典，然后确定一个template_name用来渲染正文，template_name的优先顺序为：  
- 首先通过查看传递给response对象的参数中有没有template_name参数；  
- 然后查看视图类中是否设置了template_name属性；  
- 最后通过调用view.get_template_names()方法获取template_name。  
使用实例：
```python
class UserDetail(generics.RetrieveAPIView):
    """
    A view that returns a templated HTML representation of a given user.
    """
    queryset = User.objects.all()
    renderer_classes = (TemplateHTMLRenderer,)

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        # 优先级最高的template_name
        return Response({'user': self.object}, template_name='user_detail.html')
```
可以通过使用TemplateHTMLRenderer返回一个普通的HTML网页，也可以从一个路径返回网页和API 响应对象。  
如果在构建一个网站的时候，使用了TemplateHTMLRenderer和其他渲染器，你应该将TemplateHTMLRenderer放在renderer_classes的第一个，以处理用户请求头中并未确切指明ACCEPT:参数的情况。  
- .media_type: text/html

- .format: ‘.html’
- .charset: utf-8


### StaticHTMLRenderer
以字符串的形式，返回一个事先编写好的HTML网页
```python
@api_view(('GET',))
@renderer_classes((StaticHTMLRenderer,))
def simple_html_view(request):
    data = '<html><body><h1>Hello, world</h1></body></html>'
    return Response(data)
```

- .media_type: text/html
- .format: ‘.html’
- .charset: utf-8


### BrowsableAPIRenderer
可浏览的API，将数据输出到网页上显示，在网页中可以确定到底哪一个渲染器的优先级最高，测试用  
- .media_type: text/html

- .format: ‘.api’
- .charset: utf-8
- .template: ‘rest_framework/api.html’


### 定制BrowsableAPIRenderer
默认为优先级最高的渲染器渲染，你可以重写get_default_renderer()方法，返回你需要显示的渲染器渲染结果
```python
class CustomBrowsableAPIRenderer(BrowsableAPIRenderer):
    def get_default_renderer(self, view):
        return JSONRenderer()
```

### AdminRenderer
将数据呈现为管理员的显示格式，用于管理接口数据（CRUD-style）  
AdminRenderer对于嵌套了或者说包含了序列化器的视图的输入支持并不友好，因为HTML表单不支持该数据类型。  
注意：  
当继承了HyperlinkedModelSerializer的serializer类中包含了url字段，AdminRenderer才会显示单个实例的详情页链接。  
对于其他的ModelSerializer或者普通Serializer类，需要确保包含url字段：
```python
class AccountSerializer(serializers.ModelSerializer):
    url = serializers.CharField(source='get_absolute_url', read_only=True)

    class Meta:
        model = Account
```

- .media_type: text/html
- .format: ‘.admin’
- .charset: utf-8
- .template: ‘rest_framework/admin.html’


### HTMLFormRenderer
将序列化数据转化成HTML 表单数据， 输出不包含标签，csrf_token和任何submit按钮。一般我们不会单独使用，而是通过render_form标签在template中用于解析一个序列化实例
```python
{% load rest_framework %}

<form action="/submit-report/" method="post">
    {% csrf_token %}
    {% render_form serializer %}
    <input type="submit" value="Save" />
</form>
```

- .media_type: text/html
- .format: ‘.form’
- .charset: utf-8
- .template: ‘rest_framework/horizontal/form.html’


### MultiPartRenderer
用于处理分段传输的表单数据（如文件等），不适合作为一个响应对象渲染器，通常用于创建测试请求。  
- .media_type: multipart/form-data; boundary=BoUnDaRyStRiNg

- .format: ‘.multipart’
- .charset: utf-8


### 自定义renderers

- 重写BaseRenderer
- 设置.media_type和.format属性
- 实现.render(self, data, media_type=None, renderer_context=None)方法

data:请求数据，由Response对象设置  
media_type=None，返回数据类型  
renderer_context=None，视图函数提供的上下文信息字典，默认键有view, request, response, args, kwargs.  
示例：
```python
from django.utils.encoding import smart_unicode
from rest_framework import renderers


class PlainTextRenderer(renderers.BaseRenderer):
    media_type = 'text/plain'
    format = 'txt'

    def render(self, data, media_type=None, renderer_context=None):
        return data.encode(self.charset)
```
**设置编码：**
```python
class PlainTextRenderer(renderers.BaseRenderer):
    media_type = 'text/plain'
    format = 'txt'
    charset = 'iso-8859-1'

    def render(self, data, media_type=None, renderer_context=None):
        return data.encode(self.charset)
```
注意：  
如果渲染类返回了一个unicode编码的字符串，响应对象将其转换成bytestring形式，然后将render类的charset属性强制设置在response显示的对象上。  
如果渲染器返回了一个原生的二进制内容，应该将charset值设置为None,以确保返回的Content-Type响应头中， charset没有被设置值  
有时你想将render_style属性设置为’binary’，以确保显示窗口不会将其作为字符串显示了
```python
# 图片渲染示例
class JPEGRenderer(renderers.BaseRenderer):
    media_type = 'image/jpeg'
    format = 'jpg'
    charset = None
    render_style = 'binary'

    def render(self, data, media_type=None, renderer_context=None):
        return data
```

## 5.高级渲染器使用
灵活使用REST框架的渲染器：  
- 根据请求媒体类型，从同一端点嵌套显示或者扁平显示  
- 同一端点显示正常的HTML或者JSON数据  
- 为API客户端提供多种HTML显示形式  
- 未提供明确类型的， 比如media_type = ‘image/*’，使用Accept请求头设置合适的编码方式
```python
@api_view(('GET',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def list_users(request):
    """
    能够返回json和html的视图
    """
    queryset = Users.objects.filter(active=True)

    if request.accepted_renderer.format == 'html':
        # TemplateHTMLRenderer takes a context dict,
        # and additionally requires a 'template_name'.
        # It does not require serialization.
        data = {'users': queryset}
        return Response(data, template_name='list_users.html')

    # JSONRenderer requires serialized data as normal.
    serializer = UserSerializer(instance=queryset)
    data = serializer.data
    return Response(data)
```
有时你想渲染一定范围的媒体类型，你可以使用通配形式，如image/_，或者_/*，那么响应对象就应该设置明确的content_type参数。
```python
return Response(data, content_type='image/png')
```

## 6 设计自己的媒体类型
REST API应该花费几乎所有的描述性工作来定义用于表示资源和应用程序状态的媒体类型(s)，或者为现有标准媒体类型定义扩展关系名称和/或超文本启用标记  
设计示例：[https://developer.github.com/v3/media/](https://developer.github.com/v3/media/)


## 7 HTML错误响应视图函数
通常来说，一个渲染器类始终保持一致的行为，不管是在处理正常的response还是异常的response对象（Http404，PermissionDenied等）  
当你在使用TemplateHTMLRenderer或者StaticHTMLRenderer时，对于异常处理可能有轻微的不同。HTML renderer依次尝试以下方法：  
1. 载入，然后渲染template_name为{status_code}.html的网页  
2. 载入，渲染template_name为api_exception.html的网页  
3. 渲染状态码和文本，如“404 Not Found”  
如果设置中DEBUG=True，开启了测试模式，Django’s的标准异常处理页将会代替HTTP异常状态码和文本（最后一种！）


## 8 第三方包

1. YAML
1. XML
1. JSONP（djangorestframework-jsonp）

如果想要使用跨域请求，则应该使用CORS  
jsonp方法本质上是一种浏览器攻击，只适合全局可读的API端点，在那里GET请求是未经身份验证的，不需要任何用户权限。

4. MessagePack
4. CSV（使用逗号作为分隔符）
4. UltraJSON（使用C语言的更快的json实现）
4. CamelCase JSON
4. Pandas (CSV, Excel, PNG)
4. LaTeX（ PDF）






————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78497635](https://blog.csdn.net/runnoob_1115/article/details/78497635)
