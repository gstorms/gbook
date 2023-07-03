# DRF12-Generic-views
## 1.引语
Django的通用视图已经发展成一种常见的使用模式的快捷方式，他们采取在视图开发中发现一些常见习语和模式，并将其抽象出来，以便于可以快速编写数据的常见视图，而不需要重复编写。


## 2.简介
基于类的视图允许自由设计组合可重用的模式，REST框架通过提供许多常用模式的预构建视图来利用这一点，如RETIRVEUPDATEAPIVIEW等  
REST提供的通用视图可以快速构建与数据库模型紧密对应的API视图  
如果通用视图不满足需求，可以使用常规APIView,然后自由组合各种Mixin类，来构建自己的使用模式

## 3.使用示例
如果使用通用视图类，意味着你需要重写视图函数和几个类属性。

```python
from django.contrib.auth.models import User
from myapp.serializers import UserSerializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAdminUser,)
```
对于更加复杂的例子，你可能想在你的视图类中重写不同的方法，例如：
```python
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAdminUser,)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)
```
对于非常相似的情形，你可以利用.as_view()函数，只需要传入相应的参数就行
```python
url(r'^/users/', ListCreateAPIView.as_view(queryset=User.objects.all(), serializer_class=UserSerializer), name='user-list')
```

## 4.GenericAPIView
继承了REST框架的APIView,为标准list添加了一些行为和具体的视图  
其他的通用视图，都是由GenericAPIView结合一个或多个Mixin类扩展而成


### 属性

#### 基本设置：

- queyset

查询集，用于返回查询对象，一般你必须设置这个属性，或者重写get_queryset()方法。如果你重写了视图方法，就需要使用get_queryset()方法代替直接使用这个属性。因为        queryset只会评估一次，然后就存入缓存cache中，以供后来的请求使用。

- serializer_class

serializer_class被用来验证和反序列化输入，序列化输出。一般来说，你要么设置这个属性，要么重写get_serializer_class()方法

- lookup_field

用于查找单个模型实例的模型字段，默认为’pk’  
注意：当时用超链接API时，如果需要使用自定义字段，必须在API views和序列化类中都设置lookup_field值。

- lookup_url_kwarg

也是用于查找某个对象，但是url配置时，必须设置相应的值，如果没有设置默认值，那么默认使用lookup_field的值。

### 分页

- pagination_class

当需要分页显示获取的 list结果时使用。默认值与DEFAULT_PAGINATION_CLASS（’rest_framework.pagination.PageNumberPagination’）相同，设置pagination_class=None        将会禁用分页功能。

### 过滤

- filter_backends

用于过滤查询集，默认值与DEFAULT_FILTER_BACKENDS设置值相同方法

### 基本方法

- get_queryset(self)

返回查询集结果，是获取详细查询的基础。默认返回queryset属性指定的查询集结果  
通常不是用于获取queryset，而是重写之后用于获取动态的查询集,如：
```python
def get_queryset(self):
    user = self.request.user
    return user.accounts.all()
```

- get_object(self)  
用于detail查询函数中，默认值是利用lookup_field参数过滤基础的queryset查询集  
可以重写用于更加复杂的查询，例如在url链接中有多个查询参数的时候，如：
```python
def get_object(self):
    queryset = self.get_queryset()
    filter = {}
    for field in self.multiple_lookup_fields:
        filter[field] = self.kwargs[field]

    obj = get_object_or_404(queryset, **filter)
    # 用于检查权限
    self.check_object_permissions(self.request, obj)
    return obj
```
如果你的接口没有设置权限等级，self.check_object_permissions(self.request, obj)这一句就可以删除掉。  
- filter_queryset(self, queryset)  
通过提供一个查询集，然后根据设置的filter_backends进行过滤，然后返回一个新的查询集，如：
```python
def filter_queryset(self, queryset):
    # 默认的过滤类，如何写过滤类？？？
    filter_backends = (CategoryFilter,)

    if 'geo_route' in self.request.query_params:
        # 新添加的过滤类
        filter_backends = (GeoRouteFilter, CategoryFilter)
    elif 'geo_point' in self.request.query_params:
        filter_backends = (GeoPointFilter, CategoryFilter)

    for backend in list(filter_backends):
        # backend()，  view=self？？？
        queryset = backend().filter_queryset(self.request, queryset, view=self)
    return queryset
```

- get_serializer_class(self)  
返回串行化器（将串行数据变为并行数据），默认返回serializer_class属性，也可以重写成动态的，例如利用不同的串行化器去进行读写操作，或者提供不同的串行化器给不同类型的用户。如：
```python
def get_serializer_class(self):
    if self.request.user.is_staff:
        # 需要自行编写不同的串行化器
        return FullAccountSerializer
    return BasicAccountSerializer
```

#### 保存和删除钩子
由mixin类提供，易于重写对象的保存删除操作

- perform_create(self, serializer)：CreateModelMixin，保存一个新的对象实例
- perform_update(self, serializer)：UpdateModelMixin，保存一个存在的对象实例
- perform_destroy(self, instance)：DestroyModelMixin，删除一个存在的实例

这些钩子在为request设置隐性属性时 特别有用。例如，你可以为一个对象设置属性，基于请求的用户，或者基于url关键字参数数据。
```python
def perform_create(self, serializer):
    serializer.save(user=self.request.user)
```
还可以在保存一个对象之前或者之后添加一些行为，例如在创建用户之后，发送一封邮件，或者更新一个对象之后，用日志记录更新信息
```python
def perform_update(self, serializer):
    instance = serializer.save()
    send_email_confirmation(user=self.request.user, modified=instance)
```
如果你需要利用钩子提供用户验证，如果没有通过就抛出ValidationError()。比如在数据库进行保存操作时：
```python
def perform_create(self, serializer):
    # 用于验证用户是否已经登录
    queryset = SignupRequest.objects.filter(user=self.request.user)
    if queryset.exists():
        raise ValidationError('You have already signed up')
    serializer.save(user=self.request.user)
```
这些方法代替了2.x版本中pre_save, post_save, pre_delete 和 post_delete方法，它们不在能被使用。

#### 其他方法
尽管你在编写定制化视图时需要调用它们，但是一般来说以下的方法不用重写

- get_serializer_context(self) ： 包含一些需要额外提供给序列化器的上下文字典，默认包含’request’, ‘view’ 和 ‘format’；
- get_serializer(self, instance=None, data=None, many=False, partial=False)：返回一个序列化实例；
- get_paginated_response(self, data)：返回一个分好页的响应对象；
- paginate_queryset(self, queryset)： 分页查询集，如果要求，则返回已分页的查询集对象，否则返回None；
- filter_queryset(self, queryset)：如果设置了过滤类，那就返回过滤后的queryset对象，否则返回queryset。


## 5. Mixins
mixin类只是提供一些基础的视图操作，并没有定义处理函数，如.get() and .post()等，这样有便于灵活的组装这些操作

### ListModelMixin
提供.list(request, *args, **kwargs)方法，如果获取到查询结果，就序列化为响应主体，选择性分页后，返回给用户一个200的响应对象


### CreateModelMixin
提供.create(request, *args, **kwargs)，用于创建，保存一个实例，如果对象创建成功就返回一个201 Created的对象，序列化之后作为响应主体，如果显示字段包含url，那么就用该值填充Location的header，如果数据不合法，就返回400 Bad Request响应对象，响应对象主体为错误的详细信息


### RetrieveModelMixin
提供.retrieve(request, *args, **kwargs) 方法，实现返回一个数据库中已经存在的模型实例，返回200 OK response， 或者404 Not Found


### UpdateModelMixin
提供.update(request, *args, **kwargs)方法，实现了更新并保存一个已经存在的实例（必须提供全部字段值）  
.partial_update(request, *args, **kwargs) 部分更新，允许PATCH方法  
返回200 OK response或者400 Bad Request response


### DestroyModelMixin
提供了一个.destroy(request, *args, **kwargs)用于删除已经存在的模型实例  
返回204 No Content response或者404 Not Found

## 6.复合视图类

- CreateAPIView： post+create
- ListAPIView: get + list
- RetrieveAPIView: get + retrieve
- DestroyAPIView: delete + destory
- UpdateAPIView: upadate + put + patch
- ListCreateAPIView: list + create + get + put + patch
- RetrieveDestroyAPIView: retrieve + destory + get + delete
- RetrieveUpdateDestroyAPIView: retreve + destroy + update + get + put + patch + delete

## 7.自定义通用视图
当你在通用视图基础上添加一些自定义的行为时，如果发现在许多地方都要使用此行为，你可以将其抽象成一个mixin类，哪里需要就添加到哪里！  
比如说你利用从url中获取的多个参数来查询对象，你可以创建一个mixin类
```python
# 创建一个mixin类
class MultipleFieldLookupMixin(object):
    """
    Apply this mixin to any view or viewset to get multiple field filtering
    based on a `lookup_fields` attribute, instead of the default single field filtering.
    """
    # 重写get_object方法
    def get_object(self):
        queryset = self.get_queryset()             # Get the base queryset
        queryset = self.filter_queryset(queryset)  # Apply any filter backends
        filter = {}
        for field in self.lookup_fields:
            if self.kwargs[field]: # Ignore empty fields.
                filter[field] = self.kwargs[field]
        return get_object_or_404(queryset, **filter)  # Lookup the object

# 使用mixin类
class RetrieveUserView(MultipleFieldLookupMixin, generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_fields = ('account', 'username')
```
如果你需要大量应用自定义的mixin类时，你可以创建一个基础的APIView:
```python
class BaseRetrieveView(MultipleFieldLookupMixin,
                       generics.RetrieveAPIView):
    pass

class BaseRetrieveUpdateDestroyView(MultipleFieldLookupMixin,
                                    generics.RetrieveUpdateDestroyAPIView):
    pass
```

## 8.使用PUT方法创造PUT as create or PUT as 404
在3.0之前，REST框架利用PUT方法根据对象是否存在进行created或者update。  
利用PUT方法进行创建操作是有问题的，因为PUT肯定会暴露已存在和正在进行创建的对象信息  
但是另一方面，允许创建已经删除的对象比默认的只是简单的返回一个404 Response更好。  
PUT as create or PUT as 404这两种形式都是合法的，但是从3.X版本以后使用PUT as 404作为默认值，因为其更加简单而且明显。  
如果想使用PUT as create,你可以在创建视图类时，使用AllowPUTAsCreateMixin类。


## 9.第三方包

- Django REST Framework bulk

实现了一些mixin类，和一些扩展的复合视图类

- Django Rest Multiple Models

允许在一个API视图中返回多个序列化模型





————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78486871](https://blog.csdn.net/runnoob_1115/article/details/78486871)
