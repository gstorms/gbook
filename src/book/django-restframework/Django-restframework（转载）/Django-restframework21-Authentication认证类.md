# DRF21-Authentication认证类
权限认证类必须是可插拔的，钩子


## 1 简介
身份认证的原理是将用户请求和一系列认证证书联系起来。比如说一个用户发送了一个请求，或者说是带着token的请求。权限管理类（ permission）和节流（throttling ）策略能够使用它们的证书来决定这个请求是否被许可。

REST框架提供了大量用户认证方案，也允许用户实现自定义方案。  
身份认证一般在视图函数处理请求中的顺序十分靠前，在 permission and throttling之前，更在其他代码执行之前。  
request.user一般由contrib.auth包中的User设置  
request.auth被用来添加各种附加的身份认证信息。比如说他可以用来表示request携带的身份认证token  
注意：authentication自身并不会判断接收不接收用户的请求，他只是简单的标识用户所用的凭证


### 1 身份认证是怎样进行的？
authentication方案总是定义成一个类的列表。REST框架会尝试认证列表中的每一个类。如果第一个类就认证成功了，就会设置request.user和request.auth信息  
如果没有一个类认证成功，request.user就会设置为django.contrib.auth.models.AnonymousUser，request.auth将会设置为None.  
对于未经用户认证的请求，其request.user和request.auth值可以通过UNAUTHENTICATED_USER和 UNAUTHENTICATED_TOKEN进行设置。  
默认的认证方案，可以使用DEFAULT_AUTHENTICATION_CLASSES进行设置。
```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    )
}
```
也可以为每一个视图函数或者视图类设置认证方案。
```python
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

class ExampleView(APIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        content = {
            'user': unicode(request.user),  # `django.contrib.auth.User` instance.
            'auth': unicode(request.auth),  # None
        }
        return Response(content)

# @api_view装饰器
@api_view(['GET'])
@authentication_classes((SessionAuthentication, BasicAuthentication))
@permission_classes((IsAuthenticated,))
def example_view(request, format=None):
    content = {
        'user': unicode(request.user),  # `django.contrib.auth.User` instance.
        'auth': unicode(request.auth),  # None
    }
    return Response(content)
```

### 2 未经授权和禁止的响应对象
当一个未经授权的请求被permission拒绝时，有两个错误代码对应
```python
HTTP 401 Unauthorized
HTTP 403 Permission Denied
```
HTTP 401响应必须包含WWW-Authenticate一个响应头，他指导客户端怎样进行验证。  
HTTP 403响应不包含WWW-Authenticate响应头  
这种响应依靠于认证方案。尽管可以使用多个认证方案。但是只有一种认证方案会被使用，用于确定响应类型。  
一个请求认证成功后也有可能被权限类所拒绝，表明这个请求没有权限访问。


### 3 使用mod_wsgi部署的Apache服务的服务器
如果使用 Apache using mod_wsgi部署的，WSGI应用程序发送的授权头将不会被接收。身份验证将会使用Apache处理，而不是使用应用来处理  
如果您正在部署Apache，并且使用任何非基于会话的身份验证，您将需要显式地配置mod_wsgi，以便将所需的头信息传递到应用程序。这可以通过在适当的上下文中指定WSGIPassAuthorization并将其设置为“On”来完成。
```python
# this can go in either server config, virtual host, directory or .htaccess
WSGIPassAuthorization On
```

## 2 用户认证指南

### 1. BasicAuthentication
此方案使用 HTTP Basic Authentication，签名为用户名和密码。此方案仅适用于测试  
如果认证成功：request.user为 Django User，request.auth为None.  
未经认证的响应对象将会被permission返回一个带有WWW-Authenticate响应头的HTTP 401 Unauthorized响应结果
```python
WWW-Authenticate: Basic realm="api"
```
如果使用BasicAuthentication，需要确保API只在https协议下使用。也许要确保客户端在登陆时会重新发送用户名和密码，而且不会永久的存储这些信息。


### 2. TokenAuthentication

#### 1. 简介
此方案使用simple token-based HTTP Authentication方案。Token验证适用于client-server，例如本机桌面和移动客户端。  
为了使用此方案需要在设置中包含TokenAuthentication，和INSTALLED_APPS中设置rest_framework.authtoken  
需要进行数据迁移，请设置完成后使用manage.py migrate
```python
# 需要为用户创建token 
from rest_framework.authtoken.models import Token

token = Token.objects.create(user=...)
print token.key
```
对于客户端的认证需要包含Authorization请求头，形式如下
```python
Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b
```
如果你想使用不同的关键字，只需要继承TokenAuthentication，然后重新设置keyword类就可以了。如果成功认证，将提供一下信息：  
- request.user： Django User  
- request.auth：rest_framework.authtoken.models.Token  
未认证成功的返回HTTP 401 Unauthorized，请求头为：
```python
WWW-Authenticate: Token
```
curl命令行可以用来测试token认证api
```python
curl -X GET http://127.0.0.1:8000/api/example/ -H 'Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b'
```

#### 2. 生成令牌

1. 使用信号  
如果想自动生成用户令牌，可以通过捕捉用户的post_save信号，此方法一般写在models.py或者其他django启动时会运行的文件中
```python
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
```
为已经存在的用户生成的令牌
```python
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

for user in User.objects.all():
    Token.objects.get_or_create(user=user)
```

2. 暴露一个api  
当使用TokenAuthentication时，你可能想提供一个机制获取客户端的用户名和密码令牌（token）,REST框架提供了一个内建的视图函数（obtain_auth_token），用来提供此类功能。
```python
from rest_framework.authtoken import views
urlpatterns += [
    url(r'^api-token-auth/', views.obtain_auth_token)
]
# 当一个合法的用户名和密码提供给此函数时，将会返回一个JSON响应
{ 'token' : '9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b' }
```
默认的obtain_auth_token方法视图使用Json格式的请求和响应对象  
而不是使用设置中的渲染和解析类， 如果你需要自定义obtain_auth_token，可以通过重写ObtainAuthToken视图类  
默认没有权限或者节流限制应用到obtain_auth_token上。如果你需要在生成token的时候为其添加限制，需要重写这个视图函数类，然后通过设置throttle_classes生成。

3. 使用admin

也可以通过admin手动创建Token，如果数据量很大的话，推荐使用猴子补丁（monkey patch）TokenAdmin类来自定义需求。具体来说就是将‘user’字段设置成‘raw_field’
```python
from rest_framework.authtoken.admin import TokenAdmin

TokenAdmin.raw_id_fields = ('user',)
```

4. 利用django的命令行管理工具  
3.6.4版本以后，可以通过下面的命令生成用户token
```python
./manage.py drf_create_token <username>
```
这个命令将为指定用户返回一个API token
```python
Generated token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b for user user1
```
如果你想为用户重新生成一个token
```python
./manage.py drf_create_token -r <username>
```

### 3. SessionAuthentication
此方案，使用django的默认会话后端进行验证。会话验证适合于与网站在同一会话环境中的ajax客户端。  
如果成功验证，SessionAuthentication会提供以下认证信息。  
- request.user：django的User实例  
- request.auth: None  
没有通过验证的会返回HTTP 403 Forbidden响应。  
如果使用ajax类型的API，不安全的请求必须含有 CSRF token，例如PUT, PATCH, POST 或者 DELETE。  
使用django的标准登录视图，将会确保登录函数是被保护的  
REST中的CSRF验证与Django相比，有少量不同。Django中 需要支持session和non-session验证。 这意味着认证请求需要验证CSRF，而匿名用户不需要验证CSRF token.这种方法不适合登录函数，因为其都需要验证CSRF。


### 4. RemoteUserAuthentication
此方案允许您将身份验证委托给您的web服务器，在该服务器设置REMOTE_USER环境变量。  
使用方法：  
- AUTHENTICATION_BACKENDS设置中必须有django.contrib.auth.backends.RemoteUserBackend  
- 默认情况下，RemoteUserBackend创建的用户User的用户名必须是唯一的。  
如果成功验证，RemoteUserAuthentication会提供以下认证信息。  
- request.user：django的User实例  
- request.auth: None


## 3 自定义authentication
继承BaseAuthentication  
重写.authenticate(self, request)方法，该方法认证成功会返回(user, auth)，否则None  
有时你需要返回一个认证异常AuthenticationFailed，而不是None  
如果没有尝试认证，返回None  
认证失败，抛出AuthenticationFailed异常，将会返回一个异常响应对象。无视任何权限检查，而且不再进行其他认证  
也可以重写.authenticate_header(self, request)，该方法返回值（字符串）作为HTTP 401 Unauthorized中WWW-Authenticate响应头的值  
如果没有重写.authenticate_header()方法，认证失败时将会直接返回HTTP 403 Forbidden响应对象。  
使用实例
```python
from django.contrib.auth.models import User
from rest_framework import authentication
from rest_framework import exceptions

class ExampleAuthentication(authentication.BaseAuthentication):
    # 重写认证方法
    def authenticate(self, request):
        username = request.META.get('X_USERNAME')
        if not username:
            return None

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed('No such user')
        return (user, None)
```

## 4 三方包

1. Django OAuth Toolkit  
django-oauth-toolkit
```python
INSTALLED_APPS = (
    ...
    'oauth2_provider',
)

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'oauth2_provider.contrib.rest_framework.OAuth2Authentication',
    )
}
```

2. Django REST framework OAuth

djangorestframework-oauth，

3. Digest Authentication

djangorestframework-digestauth，HTTP digest authentication（http摘要认证模式），用来替代 HTTP basic authentication。  
提供了一个简单的加密认证。

4. Django OAuth2 Consumer
4. JSON Web Token Authentication

djangorestframework-jwt，JSON Web Token用于提供token-based authentication。JWT Authentication不需要数据库来验证token.djangorestframework-simplejwt提供了不同的特性。

6. Hawk HTTP Authentication
6. HTTP Signature Authentication
6. Djoser




————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78497702](https://blog.csdn.net/runnoob_1115/article/details/78497702)
