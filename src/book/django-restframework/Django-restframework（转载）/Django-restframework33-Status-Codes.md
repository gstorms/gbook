# DRF33-Status-Codes
## 一、Status Codes

### 1.简介
不建议在你的Response中使用裸露的状态码。REST框架包括一组命名常量，您可以使用这些常量来使更多的代码更加明显和可读。
```python
from rest_framework import status
from rest_framework.response import Response

def empty_view(self):
    content = {'please move along': 'nothing to see here'}
    return Response(content, status=status.HTTP_404_NOT_FOUND)
```
下面列出了status模块中包含的完整的HTTP状态代码。  
该模块还包括一组帮助函数，用于测试状态代码是否在给定范围内。
```python
from rest_framework import status
from rest_framework.test import APITestCase

class ExampleTestCase(APITestCase):
    def test_url_root(self):
        url = reverse('index')
        response = self.client.get(url)
        self.assertTrue(status.is_success(response.status_code))
```

### 2.Informational - 1xx
```python
HTTP_100_CONTINUE
HTTP_101_SWITCHING_PROTOCOLS
```

### 3.Successful - 2xx
```python
HTTP_200_OK
HTTP_201_CREATED
HTTP_202_ACCEPTED
HTTP_203_NON_AUTHORITATIVE_INFORMATION
HTTP_204_NO_CONTENT
HTTP_205_RESET_CONTENT
HTTP_206_PARTIAL_CONTENT
HTTP_207_MULTI_STATUS
```

### 4.Redirection - 3xx
```python
HTTP_300_MULTIPLE_CHOICES
HTTP_301_MOVED_PERMANENTLY
HTTP_302_FOUND
HTTP_303_SEE_OTHER
HTTP_304_NOT_MODIFIED
HTTP_305_USE_PROXY
HTTP_306_RESERVED
HTTP_307_TEMPORARY_REDIRECT
```

### 5.Client Error - 4xx
```python
HTTP_400_BAD_REQUEST
HTTP_401_UNAUTHORIZED
HTTP_402_PAYMENT_REQUIRED
HTTP_403_FORBIDDEN
HTTP_404_NOT_FOUND
HTTP_405_METHOD_NOT_ALLOWED
HTTP_406_NOT_ACCEPTABLE
HTTP_407_PROXY_AUTHENTICATION_REQUIRED
HTTP_408_REQUEST_TIMEOUT
HTTP_409_CONFLICT
HTTP_410_GONE
HTTP_411_LENGTH_REQUIRED
HTTP_412_PRECONDITION_FAILED
HTTP_413_REQUEST_ENTITY_TOO_LARGE
HTTP_414_REQUEST_URI_TOO_LONG
HTTP_415_UNSUPPORTED_MEDIA_TYPE
HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE
HTTP_417_EXPECTATION_FAILED
HTTP_422_UNPROCESSABLE_ENTITY
HTTP_423_LOCKED
HTTP_424_FAILED_DEPENDENCY
HTTP_428_PRECONDITION_REQUIRED
HTTP_429_TOO_MANY_REQUESTS
HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE
HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS
```

### 5.Server Error - 5xx
```python
HTTP_500_INTERNAL_SERVER_ERROR
HTTP_501_NOT_IMPLEMENTED
HTTP_502_BAD_GATEWAY
HTTP_503_SERVICE_UNAVAILABLE
HTTP_504_GATEWAY_TIMEOUT
HTTP_505_HTTP_VERSION_NOT_SUPPORTED
HTTP_507_INSUFFICIENT_STORAGE
HTTP_511_NETWORK_AUTHENTICATION_REQUIRED
```

### 6.Helper functions
```python
is_informational()  # 1xx
is_success()        # 2xx
is_redirect()       # 3xx
is_client_error()   # 4xx
is_server_error()   # 5xx
```
