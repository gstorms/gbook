# DRF24-Filtering（过滤器）
QuerySet一般提供数据库模型中的全部实例。但是通常情况下你只需要全部对象的子集


## 1 Filtering
简单的过滤方法，继承GenericAPIView，然后重写.get_queryset()方法。


### 1. 根据当前用户进行过滤（使用request.user）
只返回与当前经过身份验证的用户有关的结果，从而返回请求。
```python
from myapp.models import Purchase
from myapp.serializers import PurchaseSerializer
from rest_framework import generics

class PurchaseList(generics.ListAPIView):
    serializer_class = PurchaseSerializer

    def get_queryset(self):
        """
        返回当前用户购买的所有物品
        """
        user = self.request.user
        return Purchase.objects.filter(purchaser=user)
```

### 2. 通过URL过滤
```python
# url设置
url('^purchases/(?P<username>.+)/$', PurchaseList.as_view()),
# views
class PurchaseList(generics.ListAPIView):
    serializer_class = PurchaseSerializer

    def get_queryset(self):
        username = self.kwargs['username']
        return Purchase.objects.filter(purchaser__username=username)
```

### 3. 通过查询参数过滤
不用重新设置url
```python
class PurchaseList(generics.ListAPIView):
    serializer_class = PurchaseSerializer

    def get_queryset(self):
        queryset = Purchase.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(purchaser__username=username)
        return queryset
```

## 2 Generic Filtering

### 1. 设置过滤后端
可以通过DEFAULT_FILTER_BACKENDS设置通用的过滤后端
```python
REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': ('django_filters.rest_framework.DjangoFilterBackend',)
}
```
在视图中设置过滤后端
```python
import django_filters.rest_framework
from django.contrib.auth.models import User
from myapp.serializers import UserSerializer
from rest_framework import generics

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
```

### 2. 过滤对象查找
如果为视图配置了一个过滤后端，会被用来过滤listview的queryset和返回单个对象的queryset.
```python
http://example.com/api/products/4675/?category=clothing&max_price=10.00
```

### 3. 重写queryset初始化方法
```python
class PurchasedProductsList(generics.ListAPIView):
    """
   返回当前用户购买的所有商品
    """
    model = Product
    serializer_class = ProductSerializer
    filter_class = ProductFilter

    def get_queryset(self):
        user = self.request.user
        return user.purchase_set.all()
```

## 3 接口使用指南

1. DjangoFilterBackend  
支持高度自定义的字段过滤，第一步安装django-filter，然后添加django_filters到INSTALLED_APPS。然后修改设置
```python
REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': ('django_filters.rest_framework.DjangoFilterBackend',)
}
```
或者在视图中添加过滤后端
```python
from django_filters.rest_framework import DjangoFilterBackend

class UserListView(generics.ListAPIView):
    ...
    filter_backends = (DjangoFilterBackend,)
```
如果需要设置简单的相等查询，可以通过设置filter_fields。
```python
class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('category', 'in_stock')
# 使用
http://example.com/api/products?category=clothing&in_stock=True
```
如果需要使用高级过滤功能，可以在视图中使用FilterSet

SearchFilter  
SearchFilter支持单独的查寻参数，基于 Django admin’s search functionality。  
使用时，浏览器API接口包含一个SearchFilter。  
只有设置了search_fields属性，SearchFilter才能够应用。search_fields应该是墨西哥字段名的列表。
```python
class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('username', 'email')
    # 设置外键
    search_fields = ('username', 'email', 'profile__profession')
```
默认情况下，搜索将使用不区分大小写的部分匹配。搜索参数可能包含多个搜索词，应该使用空格和逗号分隔。如果使用多个搜索条件，那么只有在所有提供的条件匹配的情况下，才会返回对象。  
搜索行为可以为search_fields字段设置不同的字符进行限制  
- ‘^’ Starts-with search.  
- ‘=’ Exact matches.  
- ‘@’ Full-text search. (Currently only supported Django’s MySQL backend.)  
- ‘$’ Regex search.
```python
search_fields = ('=username', '=email')
```

1. OrderingFilter  
默认情况下，查询参数为‘ordering’，但是可以通过ORDERING_PARAM重写
```python
http://example.com/api/users?ordering=username
http://example.com/api/users?ordering=-username
http://example.com/api/users?ordering=account,username
```
使用ordering_fields指定哪些字段用来排序，有助于防止数据泄露。如果没有设置ordering_fields，默认serializer_class中的全部字段都可以用来排序。如果想根据任何字段排序也可以使用’**all**’
```python
class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('username', 'email')
```
如果视图中设置类ordering，那么就默认按其之进行排序。ordering可以指定排序方式，order——by不可以。
```python
class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('username', 'email')
    ordering = ('username',)
```
DjangoObjectPermissionsFilter  
一般和django-guardian包一起，在添加了自定义权限的视图中使用。此过滤器仅仅返回用户有权限访问的对象。一般需要为对象添加一个合适的权限管理类，确保每个用户只能操作有权操作的对象。简单的方式就是继承DjangoObjectPermissions，然后添加视图的权限到perms_map中。
```python
# 权限类permissions.py
class CustomObjectPermissions(permissions.DjangoObjectPermissions):
    """
    Similar to `DjangoObjectPermissions`, but adding 'view' permissions.
    """
    perms_map = {
        'GET': ['%(app_label)s.view_%(model_name)s'],
        'OPTIONS': ['%(app_label)s.view_%(model_name)s'],
        'HEAD': ['%(app_label)s.view_%(model_name)s'],
        'POST': ['%(app_label)s.add_%(model_name)s'],
        'PUT': ['%(app_label)s.change_%(model_name)s'],
        'PATCH': ['%(app_label)s.change_%(model_name)s'],
        'DELETE': ['%(app_label)s.delete_%(model_name)s'],
    }

# views.py
class EventViewSet(viewsets.ModelViewSet):
    """
    如果用户有视图权限才为用户列出事件列表。然后用户拥有视图的'add',
    'change'或'delete'权限才能允许用户操作事件
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_backends = (filters.DjangoObjectPermissionsFilter,)
    permission_classes = (myapp.permissions.CustomObjectPermissions,)
```

## 4 自定义通用过滤器

### 1. 使用示例
您还可以提供自己的通用过滤后端，或者为其他开发人员编写一个可安装的应用程序。  
- 重写BaseFilterBackend，  
- 重写.filter_queryset(self, request, queryset, view)方法，返回一个新的查询集queryset 除了允许客户机执行搜索和过滤，一般的过滤后端对于限制哪些对象应该对任何给定的请求或用户可见是很有用的。
```python
class IsOwnerFilterBackend(filters.BaseFilterBackend):
    """
    只允许用户看自己的对象
    """
    def filter_queryset(self, request, queryset, view):
        return queryset.filter(owner=request.user)
```
我们可以通过在视图上重写get_queryset()来实现相同的行为，但是使用filter后端允许您更容易地将这个限制添加到多个视图中，或者在整个API中应用它。


### 2. 自定义显示界面
通用过滤器（Generic filters）还可以在可浏览的API中提供界面。为了实现这一功能，您应该实现一个to_html()方法，该方法返回一个呈现的HTML表示的过滤器。
```python
to_html(self, request, queryset, view)
```

### 3. 分页和模式
通过实现get_schema_fields()方法，还可以对REST框架提供的模式自动生成进行过滤控制。
```python
get_schema_fields(self, view) # 返回一个coreapi.Field实例的列表
```

## 5 三方包

1. Django REST framework filters package

需和DjangoFilterBackend一起使用，使创建根据关系过滤或多字段过滤查询的过滤器更容易

2. Django REST framework full word search filter

与filters.SearchFilter二选一

3. Django URL Filter

django-url-filter提供了一种安全的方式，可以通过友好的url来过滤数据。它与DRF序列化器和字段非常相似，在某种意义上，它们可以被嵌套，除非它们被称为过滤集和过        滤器。这提供了过滤相关数据的简便方法。而且这个库是通用的，所以它可以用来过滤其他数据源，而不仅仅是Django查询集。

4. drf-url-filters

drf-url-filters是一个简单的Django应用程序，它可以在drf模型视图集的查询中以一种干净、简单和可配置的方式使用过滤器。它还支持对传入的查询params及其值的验证。        在传入的查询参数中，使用了一个漂亮的python包，用于验证。最妙的是，您可以根据您的查询参数来定义自己的验证。




————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78497746](https://blog.csdn.net/runnoob_1115/article/details/78497746)

