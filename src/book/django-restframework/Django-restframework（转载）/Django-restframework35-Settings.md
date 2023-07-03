# DRF35-Settings
名称空间是一个伟大的想法——让我们做更多！

## 一、Settings
REST框架的配置在一个名为REST_FRAMEWORK的Django设置中。
```python
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    ),
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser',
    )
}
```

1. 可接受的设置  
查看api_settings对象。
```python
from rest_framework.settings import api_settings

print api_settings.DEFAULT_AUTHENTICATION_CLASSES
```

## 二、接口指南

### 1. API策略设置
接下来的设置控制基本的API策略，被应用到每一个基于APIView或者 @api_view的视图中  
1. DEFAULT_RENDERER_CLASSES（Response）
```python
# 默认
(
    'rest_framework.renderers.JSONRenderer',
    'rest_framework.renderers.BrowsableAPIRenderer',
)
```

1. DEFAULT_PARSER_CLASSES（request.data）
```python
# 默认
(
    'rest_framework.parsers.JSONParser',
    'rest_framework.parsers.FormParser',
    'rest_framework.parsers.MultiPartParser'
)
```

1. DEFAULT_AUTHENTICATION_CLASSES(request.user或request.auth)
```python
# 默认
(
    'rest_framework.authentication.SessionAuthentication',
    'rest_framework.authentication.BasicAuthentication'
)
```

1. DEFAULT_PERMISSION_CLASSES  
权限类的列表或元组，它决定了在视图开始时检查的默认权限集。必须由列表中的每个类授予权限。
```python
# 默认
(
    'rest_framework.permissions.AllowAny',
)
```

1. DEFAULT_THROTTLE_CLASSES  
一个节流类的列表或元组，它决定了在视图开始时检查的默认的节流装置。
1. DEFAULT_CONTENT_NEGOTIATION_CLASS  
一个内容协商类，它决定如何为响应选择一个呈现器，给定一个传入请求。
```python
# 默认
'rest_framework.negotiation.DefaultContentNegotiation'
```

### 2. 通用视图设置
控制基于类的视图的行为

1. DEFAULT_PAGINATION_SERIALIZER_CLASS（已被移除）

分页API不使用序列化器来确定输出格式，您需要在分页类上重写get_paginated_response方法，以指定输出格式是如何被控制的。

2. DEFAULT_FILTER_BACKENDS

应该用于通用过滤的过滤后端类的列表。如果设置为None，则禁用通用过滤。

3. PAGE_SIZE

用于分页的默认页面大小。如果设置为None，默认情况下禁用分页。

4. SEARCH_PARAM

查询参数的名称，它可以用来指定SearchFilter使用的搜索词。默认为search

5. ORDERING_PARAM

查询参数的名称，它可以用来指定OrderingFilter返回的结果的顺序。默认为ordering


### 3. 版本控制

1. DEFAULT_VERSION

没有版本控制信息的版本，应该用于请求的值。默认为None.

2. ALLOWED_VERSIONS

如果设置了，这个值将限制版本控制方案返回的版本集，如果在这个集合中没有提供的版本，将会raise一个错误。

3. VERSION_PARAM

应该用于任何版本控制参数的字符串，例如媒体类型或URL查询参数。默认为’version’

### 4. 认证设置
以下设置控制未经身份验证的请求的行为。

1. UNAUTHENTICATED_USER

对于未经认证的请求，用于初始化request.user

2. UNAUTHENTICATED_TOKEN

对于未认证请求，用于初始化request.auth,默认为None


### 5. 测试设置
接下来的设置用于控制APIRequestFactory和APIClient的行为

1. TEST_REQUEST_DEFAULT_FORMAT

生成测试请求时使用的默认格式，需要与TEST_REQUEST_RENDERER_CLASSES匹配，默认为’multipart’

2. TEST_REQUEST_RENDERER_CLASSES

在构建测试请求时提供支持的render类。  
当构建一个测试请求时，渲染类中的任何格式都可以使用
```python
client.post('/users', {'username': 'jamie'}, format='json')
```
默认为：
```python
(
    'rest_framework.renderers.MultiPartRenderer',
    'rest_framework.renderers.JSONRenderer'
)
```

### 5. 模式生成控制

1. SCHEMA_COERCE_PATH_PK

如果设置，这将在生成模式路径参数时将URL conf中的’pk’标识符映射到实际的字段名。通常这是“id”。由于“primary key”是一个实现细节，而“标识符”是一个更通用的概念，        因此它提供了更合适的表示形式。

2. SCHEMA_COERCE_METHOD_NAMES

如果设置，被用来在生成模式时，将内部viwset方法名映射到外部操作名，这允许我们创建一个比内部使用的代码名更合适的外部呈现名字。
```python
# 默认
{'retrieve': 'read', 'destroy': 'delete'}
```

### 6. 内容协议控制

1. URL_FORMAT_OVERRIDE  
url中通过使用format=…，用于重写请求头中Accept的参数名字，设置为None将禁用此查询参数，默认为‘format’
```python
http://example.com/organizations/?format=csv
```

2. FORMAT_SUFFIX_KWARG  
url路劲的后缀参数名字， 默认为‘’format’’，当使用format_suffix_patterns给 URL patterns添加后缀时使用。
```python
http://example.com/organizations.csv/
```

### 7. 日期时间格式
用于确定日期和时间解析和渲染格式

1. DATETIME_FORMAT

一个默认字符串用于渲染DateTimeField序列化字段的输出。如果设置为None,DateTimeField序列化字段将会返回python的datetime对象，datetime对象的编码方式的由渲染        器决定  
可能是None, ‘iso-8601’或者一个python的格式化时间字符串，默认为’iso-8601’

2. DATETIME_INPUT_FORMATS

格式字符串的列表，用于默认解析DateTimeField序列化字段，可能包括’iso-8601’或者python的时间格式化字符串，默认为[‘iso-8601’]

3. DATE_FORMAT

渲染DateField字段的默认字符串格式，如果设置为None，将返回python的date对象，编码方式由渲染器决定，可能是None, ‘iso-8601’或者python的时间格式化字符串，默        认为’iso-8601’

4. DATE_INPUT_FORMATS

格式字符串的列表，用于默认解析DateField序列化字段，可能包括’iso-8601’或者python的时间格式化字符串，默认为[‘iso-8601’]

5. TIME_FORMAT

默认情况下使用的格式字符串，用于呈现TimeField序列化器字段的输出。如果没有，那么TimeField序列化器字段将返回Python时间对象，并且时间编码将由渲染器决定。  
可能是None，‘iso-8601’或者python的时间格式化字符串，默认为[‘iso-8601’]

6. TIME_INPUT_FORMATS

默认的格式字符串列表，用于将输入解析到TimeField序列化器字段。可能是一个列表，包括字符串’iso-8601’或Python strftime格式字符串。默认为[‘iso-8601’]


### 8. 编码
UNICODE_JSON(RFC 4627)  
当设置为True时，JSON响应将允许包含unicode字符。默认为True.
```python
{"unicode black star":"★"}
```
当设置为False时，JSON响应将转化全部非ascii字符
```python
{"unicode black star":"\u2605"}
```

1. COMPACT_JSON  
默认为True，当设置为True，JSON响应对象将会返回一个紧凑的响应对象，在’:’ 和 ‘,’后面没有空格
```python
{"is_admin":false,"email":"jane@example"}
```
设置为False时，则为
```python
{"is_admin": false, "email": "jane@example"}
```
COERCE_DECIMAL_TO_STRING  
默认为True,在不支持本机小数类型的API表示中返回小数对象时，通常最好将该值作为字符串返回。这避免了二进制浮点实现中出现的精度损失。当设置为True时，序列化器DecimalField将返回字符串而不是十进制对象。当设置为False时，序列化器将返回Decimal对象，默认的JSON编码器将返回为浮点数。

### 9. 视图名字和描述
用于返回OPTIONS请求，响应对象时使用

1. VIEW_NAME_FUNCTION

一个字符串表示在生成视图名称时应该使用的函数。默认为’rest_framework.views.get_view_name’
```python
view_name(cls, suffix=None)
```

- cls：视图类，通常命名函数在生成描述名时，需要通过访问cls.name检查类名。
- suffix：viewset中区分单个视图时使用的可选后缀

   - VIEW_DESCRIPTION_FUNCTION

一个表示在生成视图描述时应该使用的函数的字符串。  
该设置可以更改为支持markup样式，而不是默认的markdown。例如，您可以使用它来支持视图中的rst markup，这是在可浏览的API中输出的。  
默认为：’rest_framework.views.get_view_description’
```python
view_description(cls, html=False)
```

- cls: 生成描述时，需要访问cls.doc。
- html： True在使用可浏览API中输出，使用False时， 创建OPTIONS响应时输出

### 10. HTML中下拉框中选项数量限制

1. HTML_SELECT_CUTOFF

最大数量，必须是一个整数，默认为1000。

2. HTML_SELECT_CUTOFF_TEXT

超过最大数量后的显示文本，默认为”More than {count} items…”

### 11. 其他设置

1. EXCEPTION_HANDLER

一个字符串表示在返回一个给定异常的响应时应该使用的函数。如果函数返回None，则将抛出500错误。  
这个设置可以用来更改错误响应对象，例如从{“detail”: “Failure…”}改变为{“errors”: [{“message”: “Failure…”, “code”: “”} …]}.
```python
# 也可以是一个函数
exception_handler(exc, context)
```
默认为’rest_framework.views.exception_handler’

2. NON_FIELD_ERRORS_KEY

一个字符串表示应该用于序列化错误的关键字，这些错误不涉及到特定的字段，而是一般的错误。  
默认为：’non_field_errors’

   - URL_FIELD_NAME

一个字符串表示HyperlinkedModelSerializer生成的URL字段的键，默认为url.

   - NUM_PROXIES

代理的最大数量，默认为None



————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78510460](https://blog.csdn.net/runnoob_1115/article/details/78510460)
