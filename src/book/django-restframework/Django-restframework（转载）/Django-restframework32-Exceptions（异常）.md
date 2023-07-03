# DRF32-Exceptions（异常）
一般在程序最外层统一对异常进行处理


## 一、Exceptions

### 1.REST框架中视图中异常处理
视图处理不同的异常，然后返回合适的异常响应。  
处理的异常包括：  
- REST内部抛出的APIException的子类  
- Django’s Http404异常  
- Django’s PermissionDenied异常  
在每一个情况中，REST框架都会返回带有合适状态码和content-type的对象。响应主体包括关于错误的附加详细信息，大多数错误响应对象主体都包含一个‘detail’
```python
DELETE http://api.example.com/foo/bar HTTP/1.1
Accept: application/json

# 接收到的错误信息可能为
HTTP/1.1 405 Method Not Allowed
Content-Type: application/json
Content-Length: 42

{"detail": "Method 'DELETE' not allowed."}
```
数据验证错误有部分地方不同，response将会包含字段的名字.如果验证错误没有指定一个特别的字段，将会使用‘non_field_errors’键，或者无论什么字符串都会被设置为NON_FIELD_ERRORS_KEY的值
```python
# 验证错误返回信息
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: 94

{"amount": ["A valid integer is required."], "description": ["This field may not be blank."]}
```

### 2.自定义异常处理
您可以通过创建一个处理程序函数来实现定制的异常处理，该函数可以将API视图中出现的异常转换为响应对象。这允许您控制API所使用的错误响应的样式。  
该函数必须接受一对参数，第一个是要处理的异常，第二个是包含任何额外上下文的字典，例如当前正在处理的视图。异常处理函数要么返回响应对象，要么返回Response，如果异常不能处理，就返回None。如果处理程序返回None，那么异常将被重新提高，而Django将返回一个标准的HTTP 500“server error”响应。
```python
HTTP/1.1 405 Method Not Allowed
Content-Type: application/json
Content-Length: 62

{"status_code": 405, "detail": "Method 'DELETE' not allowed."}
```
为了改变响应对象的样式，可以自定义一个异常处理函数：
```python
from rest_framework.views import exception_handler

def custom_exception_handler(exc, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.
    # 调用REST异常处理函数，获得标准的异常响应对象
    response = exception_handler(exc, context)

    # Now add the HTTP status code to the response.
    # 为响应对象添加状态码
    if response is not None:
        response.data['status_code'] = response.status_code

    return response
```
默认的处理函数不使用context参数，但如果异常处理程序需要更多的信息，例如当前正在处理的视图（context[‘view’]），则可能有用。  
异常处理函数也必须在设置文件中配置：
```python
REST_FRAMEWORK = {
    'EXCEPTION_HANDLER': 'my_project.my_app.utils.custom_exception_handler'
}
```
如果没有指定’EXCEPTION_HANDLER’，默认由REST的标准异常处理。  
注意：异常处理只会处理通过raise抛出的异常。努会处理由视图直接返回的异常响应，例如HTTP_400_BAD_REQUEST响应。因为其是验证失败后，由通用视图直接返回的。


## 二、接口指南

### 1.APIException
所有APIView和 @api_view内部抛出的异常基类  
为了提供一个自定义的异常，需要：

1. 继承APIException
1. 设置.status_code，.default_detail，default_code属性。

比如说有时，你的API依靠的第三方服务无法使用时，需要实现一个 “503 Service Unavailable” HTTP异常：
```python
from rest_framework.exceptions import APIException

class ServiceUnavailable(APIException):
    status_code = 503
    default_detail = 'Service temporarily unavailable, try again later.'
    default_code = 'service_unavailable'
```

1. 检查API异常

有大量属性可以检查API异常的状态。可以使用它们为项目建立一个自定义的异常处理程序。  
需要的属性和方法有：

   - .detail：返回错误的文本描述信息
   - .get_codes()：返回错误代码的标识符
   - .get_full_details()，返回文本描述和代码标识符

在大多数情况下，错误的详细信息 detail 比较简单
```python
>>> print(exc.detail)
You do not have permission to perform this action.
>>> print(exc.get_codes())
permission_denied
>>> print(exc.get_full_details())
{'message':'You do not have permission to perform this action.','code':'permission_denied'}
```
在验证错误中，错误的detail要么是一个列表，要么是一个字典
```python
>>> print(exc.detail)
{"name":"This field is required.","age":"A valid integer is required."}
>>> print(exc.get_codes())
{"name":"required","age":"invalid"}
>>> print(exc.get_full_details())
{"name":{"message":"This field is required.","code":"required"},"age":{"message":"A valid integer is required.","code":"invalid"}}
```

### 2. ParseError
```python
Signature: ParseError(detail=None, code=None)
```
如果请求在访问request.data时，包含了错误的数据就会抛出  
默认情况下，这个异常会生成一个状态码为“400 Bad Request”的响应。

### 3. AuthenticationFailed
```python
Signature: AuthenticationFailed(detail=None, code=None)
```
当接受到的请求包含不正确的认证信息时抛出。  
默认情况下，这个异常会生成状态码为“401 Unauthenticated”的响应，但是它也可能生成“403 Forbidden”响应，这取决于使用的身份验证方案。

### 4. NotAuthenticated
```python
Signature: NotAuthenticated(detail=None, code=None)
```
当一个未认证请求在进行权限检查时抛出。  
默认情况下，这个异常会生成状态码为“401 Unauthenticated”的响应，但是它也可能生成“403 Forbidden”响应，这取决于使用的身份验证方案。

### 5.PermissionDenied
```python
Signature: PermissionDenied(detail=None, code=None)
```
认证请求进行权限检查失败后抛出。  
默认情况下生成状态码为”403 Forbidden”的响应对象。

### 6.NotFound
```python
Signature: NotFound(detail=None, code=None)
```
当一个资源不在给定的url中抛出，和django中的Http404异常等价。  
默认情况下响应状态码为 “404 Not Found”

### 7.MethodNotAllowed
```python
Signature: MethodNotAllowed(method, detail=None, code=None)
```
当传入请求发生时，不会映射到视图上的处理程序方法。  
默认情况下，这个异常会生成HTTP状态码为 “405 Method Not Allowed”的响应。

### 8. NotAcceptable
```python
Signature: NotAcceptable(detail=None, code=None)
```
当传入请求中的Accept请求头不被任何可用的renderer满足时抛出，默认生成的响应对象状态码为”406 Not Acceptable”

### 9.UnsupportedMediaType
```python
Signature: UnsupportedMediaType(media_type, detail=None, code=None)
```
如果没有合适的parser用于解析请求的content type类型时抛出  
默认生成的响应对象状态码为”415 Unsupported Media Type”

### 10.Throttled
```python
Signature: Throttled(wait=None, detail=None, code=None)
```
在限流检查失败后抛出  
默认生成的响应对象状态码为”429 Too Many Requests”

### 11.ValidationError
```python
Signature: ValidationError(detail, code=None)
```
验证错误与其他APIException异常的区别：  
- detail：必须有，列表或者字典，或者嵌套的数据结构  
一般需要导入ValidationError，例如raise serializers.ValidationError(‘This field must be an integer value.’)  
ValidationError应该被用于序列化或者字段验证中。也会被serializer.is_valid（）的raise_exception调用。
```python
serializer.is_valid(raise_exception=True)
```
在通用视图中使用raise_exception=True，意味着你可以重写API接口中的全局验证错误响应对象。为此，你需要使用自定义的异常处理。  
默认生成的响应对象状态码为”400 Bad Request”


————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78506719](https://blog.csdn.net/runnoob_1115/article/details/78506719)
