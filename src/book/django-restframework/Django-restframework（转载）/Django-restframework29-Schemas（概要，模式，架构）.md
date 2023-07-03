# DRF29-Schemas（概要，模式，架构）
> 一份机器可读的关于API接口中有哪些资源可以使用，它们的url是多少，它们是如何呈现的，以及它们支持什么操作


API架构是一种有用的工具，它允许使用实例，包括生成参考文档，或者驱动动态客户端库，这些库可以与您的API交互。


## 一、内部陈述架构
简介  
REST框架使用核心API来在独立表单中对架构信息进行建模。然后可以将这些信息渲染为各种不同的概要格式，或者用于生成API文档。  
在使用Core API时，架构信息被表示为一个文档，它是关于API信息的顶级容器对象。可用的API交互是使用Link来表示的。每个链接都包含一个URL、HTTP方法，并且可能包含一个Field列表，该列表描述了API端点可以接受的任何参数。Link和Field 实例也可能包括描述，这些描述允许将API架构呈现给用户文档。
```python
coreapi.Document(
    title='Flight Search API',
    url='https://api.example.org/',
    content={
        'search': coreapi.Link(
            url='/search/',
            action='get',
            fields=[
                coreapi.Field(
                    name='from',
                    required=True,
                    location='query',
                    description='City name or airport code.'
                ),
                coreapi.Field(
                    name='to',
                    required=True,
                    location='query',
                    description='City name or airport code.'
                ),
                coreapi.Field(
                    name='date',
                    required=True,
                    location='query',
                    description='Flight date in "YYYY-MM-DD" format.'
                )
            ],
            description='Return flight availability and prices.'
        )
    }
)
```
架构输出格式  
为了将其表现为一个HTTP响应对象，架构的内部表示必须渲染成真实的字节以供响应对象使用。  
Core JSON被设计成使用 Core API的标准格式。REST框架包含一个渲染类用于处理这种媒体类型，renderers.CoreJSONRenderer。  
其他的架构模式，如Open API (“Swagger”), JSON HyperSchema, or API Blueprint也能通过自定义渲染类来实现渲染。

架构和超链接媒体  
值得指出的是，Core API还可以用于hypermedia response，这是API模式的另一种交互风格。  
使用一个API架构，整个可用的接口将作为一个端点预先呈现。对于单个API端点的响应通常以纯数据的方式呈现，而不需要在每个响应中包含任何进一步的交互。  
使用Hypermedia时，客户端会呈现一个包含数据和可用交互的文档。每个交互都将产生一个新文档，详细描述当前状态和可用的交互。


## 二、添加一个模式
REST框架包含一个功能自动生成一个schema，或者允许你指定一个。有许多不同的方式来为你添加一个schema。


### 1. 使用get_schema_view()方法
```python
from rest_framework.schemas import get_schema_view

schema_view = get_schema_view(title="Server Monitoring API")

urlpatterns = [
    url('^$', schema_view),
    ...
]
```
一旦添加了视图，您就可以创建API请求来检索自动生成的模式定义。
```python
$ http http://127.0.0.1:8000/ Accept:application/coreapi+json
HTTP/1.0 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/vnd.coreapi+json

{
    "_meta": {
        "title": "Server Monitoring API"
    },
    "_type": "document",
    ...
}
```

### 2. get_schema_view()的参数为：

- title：描述模式标题
- url:可用于传递模式的规范URL。
```python
schema_view = get_schema_view(
    title='Server Monitoring API',
    url='https://www.example.org/api/'
)
```

- urlconf:一个字符串表示您想要生成一个API模式的URL conf的导入路径。默认值为django的 ROOT_URLCONF设置
```python
schema_view = get_schema_view(
    title='Server Monitoring API',
    url='https://www.example.org/api/',
    urlconf='myproject.urls'
)
```

- renderer_classes：用来传递API根端点的渲染器类。
```python
from rest_framework.schemas import get_schema_view
from rest_framework.renderers import CoreJSONRenderer
from my_custom_package import APIBlueprintRenderer

schema_view = get_schema_view(
    title='Server Monitoring API',
    url='https://www.example.org/api/',
    renderer_classes=[CoreJSONRenderer, APIBlueprintRenderer]
)
```

- patterns  
用于限制内联的url列表，如果你仅想暴露myproject.api的urls:
```python
schema_url_patterns = [
    url(r'^api/', include('myproject.api.urls')),
]

schema_view = get_schema_view(
    title='Server Monitoring API',
    url='https://www.example.org/api/',
    patterns=schema_url_patterns,
)
```
generator_class  
指定一个SchemaGenerator子类，用于传递SchemaView  
3. 显示指定一个SchemaView  
如果需要比get_schema_view()更多的控制权限，你需要使用SchemaGenerator类自动创建Document的实例，然后从视图中返回。  
这个选项给您提供了您想要的任何行为灵活设置模式端点。例如，您可以将不同的权限、节流或身份验证策略应用到模式端点。
```python
# views.py
from rest_framework.decorators import api_view, renderer_classes
from rest_framework import renderers, response, schemas

generator = schemas.SchemaGenerator(title='Bookings API')

@api_view()
@renderer_classes([renderers.CoreJSONRenderer])
def schema_view(request):
    schema = generator.get_schema(request)
    return response.Response(schema)

# urls.py
urlpatterns = [
    url('/', schema_view),
    ...
]
```
您还可以为不同的用户提供不同的模式，这取决于他们所拥有的权限。此方法可用于确保未经身份验证的请求与经过身份验证的请求不同，或确保不同的用户根据角色的不同判断用户是否可见。
```python
@api_view()
@renderer_classes([renderers.CoreJSONRenderer])
def schema_view(request):
    generator = schemas.SchemaGenerator(title='Bookings API')
    return response.Response(generator.get_schema(request=request))
```

### 3. 显示模式定义
自动生成方法的另一种选择是显式地指定API模式，方法是在代码中声明一个Document对象。这样做需要更多的工作，但是可以确保您对模式表示有完全的控制。
```python
import coreapi
from rest_framework.decorators import api_view, renderer_classes
from rest_framework import renderers, response

schema = coreapi.Document(
    title='Bookings API',
    content={
        ...
    }
)

@api_view()
@renderer_classes([renderers.CoreJSONRenderer])
def schema_view(request):
    return response.Response(schema)
```

### 4. 静态模式文件
最后一个选项是将您的API模式编写为静态文件，使用可用的一种格式，比如Core JSON或Open API。
