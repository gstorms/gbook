# DRF25-Pagination（分页）
Django提供几个类专门用于处理分页数据。意味着你的数据被切割成几页。通过Previous/Next的链接进行调用。


## 1 Pagination

### 1. 简介
REST框架支持自定义分页风格，你可以修改每页显示数据集合的最大长度。  
分页链接支持以下两种方式提供给用户：  
- 分页链接是作为响应内容提供给用户  
- 分页链接被包含在响应头中（Content-Range或者Link）  
内建风格使用作为响应内容提供给用户。这种风格更容易被使用可浏览API的用户所接受  
如果使用通用视图或者视图集合。系统会自动帮你进行分页。如果使用的是APIView,你就需要自己调用分页API，确保返回一个分页后的响应。可以将pagination_class设置为None关闭分页功能。


### 2. 设置分页风格
可以通过设置DEFAULT_PAGINATION_CLASS和PAGE_SIZE，设置全局变量。
```python
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 100
}
```
需要同时设置pagination class和page size。  
也可以在单个视图中设置pagination_class属性，一般你需要使用统一的分页风格。

### 3. 修改分页风格
如果你需要修改分页风格 ，系需要重写分页类，然后设置你需要修改的属性。
```python
class LargeResultsSetPagination(PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 10000

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000

# 然后在视图中使用.pagination_class属性调用该自定义类
class BillingRecordsView(generics.ListAPIView):
    queryset = Billing.objects.all()
    serializer_class = BillingRecordsSerializer
    pagination_class = LargeResultsSetPagination

# 或者是在设置中修改DEFAULT_PAGINATION_CLASS
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'apps.core.pagination.StandardResultsSetPagination'
}
```

## 2 API指南

### 1. PageNumberPagination
这个分页样式接受请求查询参数中的一个数字页面号。
```python
GET https://api.example.org/accounts/?page=4
```
响应对象
```python
HTTP 200 OK
{
    "count": 1023
    "next": "https://api.example.org/accounts/?page=5",
    "previous": "https://api.example.org/accounts/?page=3",
    "results": [
       …
    ]
}
```
继承了GenericAPIView的视图中，也可以设置pagination_class属性选择PageNumberPagination  
配置属性：  
- django_paginator_class  
使用Django分页类。默认为django.core.paginator.Paginator，适用于大多数情况  
- page_size  
用来显示每页显示对象的数量，如果设置了就重写PAGE_SIZE设置。  
- page_query_param  
页面查询参数，一个字符串值，指示用于分页控件的查询参数的名称。  
- page_size_query_param  
该参数允许客户端根据每个请求设置页面大小。一般默认设置为None.  
- max_page_size  
只有设置了page_size_query_param参数，该参数才有意义，为客户端请求页面中能够显示的最大数量  
- last_page_strings  
用于存储使用page_query_param参数请求过的值列表或元组，默认为(‘last’,)  
- template  
用来在可浏览API中，渲染分页的模板（html）名字，可以重写分页样式，或者设置为None,禁用分页。默认为”rest_framework/pagination/numbers.html”。


### 2. LimitOffsetPagination
这种分页样式与查找多个数据库记录时使用的语法类似。客户端包括一个”limit”和一个 “offset”查询参数。该限制表示返回的条目的最大数量，并且与page_size大小相同。偏移量表示查询的起始位置，与完整的未分页项的集合有关。
```python
GET https://api.example.org/accounts/?limit=100&offset=400

HTTP 200 OK
{
    "count": 1023
    "next": "https://api.example.org/accounts/?limit=100&offset=500",
    "previous": "https://api.example.org/accounts/?limit=100&offset=300",
    "results": [
       …
    ]
}
```
使用这种风格需要设置
```python
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination'
}
```
显然，你也可以设置PAGE_SIZE，然后客户端就可以设置limit参数了。  
继承了GenericAPIView的子类，可以通过设置pagination_class属性为LimitOffsetPagination使用  
（重写LimitOffsetPagination类）配置：  
- default_limit： 如果客户端没有提供，则默认使用与PAGE_SIZE值一样。  
- limit_query_param：表示限制查询参数的名字，默认为’limit’  
- offset_query_param：表示偏移参数的名字， 默认为’offset’  
- max_limit：允许页面中显示的最大数量，默认为None  
- template: 渲染分页结果的模板名，默认为”rest_framework/pagination/numbers.html”.


### 3. CursorPagination
基于游标的分页显示了一个不透明的“cursor”指示器，客户端可以使用它来浏览结果集。这种分页方式只允许用户向前或向后进行查询。并且不允许客户端导航到任意位置。  
基于游标的分页要求在结果集中有一个惟一的、不变的条目顺序。这个排序通常是记录上的一个创建时间戳，用来表示分页的顺序。  
基于游标的分页比其他方案更复杂。它还要求结果集给出一个固定的顺序，并且不允许客户端任意地对结果集进行索引，但是它确实提供了以下好处:  
- 提供一致的分页视图。当使用正确的指针分页时，即使在分页过程中其他客户端插入新项时，客户端也不会在分页时看到同一个项两次。  
- 支持使用非常大的数据集。大量数据集使用基于off-set的分页方式可能会变得低效或不可用。基于指针的分页模式有固定的时间属性，并且随着数据集的大小的增加而不会减慢。

1. 细节和局限性

正确地使用基于游标的分页方式需要对细节有一点注意。你需要考虑你想要什么样的命令翻转这个排序方式。默认是通过“-created”来排序的。这假设在模型实例上必须有一        个“created”的时间戳字段，并将显示一个“timeline”样式的分页视图，其中最近添加的项是第一个。  
你也可以通过’ordering’属性重写这个分页类，或者使用OrderingFilter过滤器这两种方式与CursorPagination一起使用。当使用OrderingFilter时，必须仔细考虑用来排序的字        段  
使用游标分页的字段要求：  
应该是一个不变的值，例如时间戳，标签，或者其他只在创建时设置的字段  
应该是唯一的或者近乎唯一的，使用毫秒精度的时间戳是一个很好的例子  
应该是一个强制表示为字符串的值  
该字段应该有一个数据库索引（重点）  
不满足这些要求，也可以使用游标分页，但会失去一些游标的优点

2. 设置全局变量
```python
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.CursorPagination',
    'PAGE_SIZE': 100
}
```
也可以在GenericAPIView子类中设置pagination_class属性

3. 配置

- page_size：显示的最大条数  
- cursor_query_param： 游标查询参数名，默认为’cursor’  
- ordering： 排序字段名的列表或者元组，例如ordering = ‘slug’，默认为-created  
- template： 渲染模板名，默认为”rest_framework/pagination/previous_and_next.html”


## 3 自定义分页

1. 继承pagination.BasePagination
1. 重写paginate_queryset(self, queryset, request, view=None)方法

初始化queryset对象，设置pagination实例，返回一个只包含用户请求内容的可迭代的对象，形成分页对象

3. 重写get_paginated_response(self, data)方法

序列化请求页中说包含的对象，返回一个Response对象
```python
class CustomPagination(pagination.PageNumberPagination):
    def get_paginated_response(self, data):
        return Response({
            'links': {
               'next': self.get_next_link(),
               'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'results': data
        })

# 设置自定义分页、
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'my_project.apps.core.pagination.CustomPagination',
    'PAGE_SIZE': 100
}
```
请注意，如果在意在可浏览的API中如何显示键的顺序，那么您可能会选择在构建分页响应的主体时使用OrderedDict，但这是可选的。

4. 分页模式

如果需要对REST框架提供的分页进行控制，可以使用get_schema_fields(self, view)方法，该方法返回一个coreapi.Field实例的列表

## 4 HTML分页控制
PageNumberPagination和LimitOffsetPagination使用page和previous，next进行控制  
CursorPagination仅使用 previous和next进行控制

### 1. 自定义控制
通过重写 templates。  
- rest_framework/pagination/numbers.html  
- rest_framework/pagination/previous_and_next.html

### 2. 低级API
在pagination中，display_page_controls属性将用于决定分页类是否具有控制显示的功能  
自定义pagination类在paginate_queryset()方法中应该设置为True


## 5 三方包

1. DRF-extensions
1. drf-proxy-pagination

提供ProxyPagination，用于允许在查询参数中设置分页类。

3. link-header-pagination



————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78506659](https://blog.csdn.net/runnoob_1115/article/details/78506659)
