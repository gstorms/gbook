# DRF34-Testing（测试）
> 没有经过测试的代码是垃圾代码



## 一、Testing
REST框架包含一些用于扩展Django的测试框架的类，改进对API请求的支持。


## 二、APIRequestFactory
继承了djngo的RequestFactory类。


### 1.创建一个测试请求
简介  
APIRequestFactory几乎支持与Django’s RequestFactory一样的API。意味着标准的.get(), .post(), .put(), .patch(), .delete(), .head() 和.options()都可以使用。
```python
from rest_framework.test import APIRequestFactory

# 创建一个POST请求
factory = APIRequestFactory()
request = factory.post('/notes/', {'title': 'new idea'})
```

1. 使用format参数  
使用format参数，post, put和patch方法能够轻松使用 content type 而不仅仅是multipart form数据
```python
factory = APIRequestFactory()
request = factory.post('/notes/', {'title': 'new idea'}, format='json')
```
默认情况下，可用的格式为’multipart’ 和’json’，为了和django存在的RequestFactory兼容，默认值为’multipart’  
为了支持更广发的请求格式，或者改变默认格式，可以在配置中修改。

1. 显示的编码请求正文
```python
request = factory.post('/notes/', json.dumps({'title': 'new idea'}), content_type='application/json')
```

1. 携带表单数据的PUT 和 PATCH方法  
django和RST的一个不同之处就是，表单数据会被编码成其他方法，不只是post()。
```python
# 使用APIRequestFactory
factory = APIRequestFactory()
request = factory.put('/notes/547/', {'title': 'remember to email dave'})

# 使用django的RequestFactory
from django.test.client import encode_multipart, RequestFactory

factory = RequestFactory()
data = {'title': 'remember to email dave'}
content = encode_multipart('BoUnDaRyStRiNg', data)
content_type = 'multipart/form-data; boundary=BoUnDaRyStRiNg'
request = factory.put('/notes/547/', content, content_type=content_type)
```

### 2. 强制认证
当使用force_authenticate()方法的时，能够十分方便的直接认证请求，而不是构造一个身份验证信息  
force_authenticate(request, user=None, token=None)
```python
from rest_framework.test import force_authenticate

factory = APIRequestFactory()
user = User.objects.get(username='olivia')
view = AccountDetail.as_view()

# 生成一个认证请求
request = factory.get('/accounts/django-superstars/')
force_authenticate(request, user=user)
response = view(request)

# 当需要token时：
user = User.objects.get(username='olivia')
request = factory.get('/accounts/django-superstars/')
force_authenticate(request, user=user, token=user.auth_token)
```
注意，当使用APIRequestFactory，对象返回是一个标准的django HttpRequest，而不是REST框架的Request请求，后者只在视图中创建一次。  
这意味着直接为Request对象设置属性可能不会获得预期的效果。例如直接设置.token属性和.user属性将不会起作用，只有在使用session认证时才会有用
```python
# Request will only authenticate if `SessionAuthentication` is in use.
request = factory.get('/accounts/django-superstars/')
request.user = user
response = view(request)
```

### 3.强制进行CSRF验证
默认情况下，APIRequestFactory创建的request对象没有经过REST框架视图提供的CSRF验证，如果你需要开启CSRF验证，你可以在APIRequestFactory初始化时，将enforce_csrf_checks设置为True
```python
factory = APIRequestFactory(enforce_csrf_checks=True)
```
值得注意的是，Django的标准请求工厂不需要包含这个选项，因为当使用常规的Django时，CSRF验证在中间件中进行，而不是在直接测试视图时运行。在使用REST框架时，CSRF验证发生在视图内部，因此请求工厂需要禁用视图级的CSRF检查。


## 三、APIClient
扩展了django的Client类


### 1. 制造请求
APIClient支持Django’s Client的接口。意味着标准的.get(), .post(), .put(), .patch(), .delete(), .head() 和.options()都可以使用。
```python
from rest_framework.test import APIClient

client = APIClient()
client.post('/notes/', {'title': 'new idea'}, format='json')
```

### 2.认证（Authenticating）

1. login(**kwargs)  
login允许在任何包含SessionAuthentication的视图中，认证请求。
```python
# Make all requests in the context of a logged in session.
client = APIClient()
client.login(username='lauren', password='secret')

# 登出
client.logout()
```
登录方法适合用于测试使用会话身份验证的API，例如web站点，其中包括与API的AJAX交互。

1. credentials(**kwargs)  
credentials方法可用于设置请求头部，然后被测试客户端包含在所有后续请求中。
```python
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

# Include an appropriate `Authorization:` header on all requests.
token = Token.objects.get(user__username='lauren')
client = APIClient()
client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
```
请注意，第二次调用credentials会重新设置凭证。您可以通过调用没有参数的方法来取消任何现有的凭证。
```python
client.credentials()
```
credentials方法适合用于测试需要身份验证头的api，例如基本身份验证、OAuth1a和OAuth2身份验证，以及简单的令牌身份验证方案。  
3. force_authenticate(user=None, token=None)  
有时你需要完全绕开身份认证，强制所有测试客户端的请求都是已认证的  
你就可以使用force_authenticate（）方法了
```python
user = User.objects.get(username='lauren')
client = APIClient()
client.force_authenticate(user=user)
```
如果后面的请求需要为未认证的，只需要将user或者token设置为None就可以。
```python
client.force_authenticate(user=None)
```

### 3. CSRF validation
```python
# 开启CSRF认证
client = APIClient(enforce_csrf_checks=True)
```
通常，CSRF验证只适用于任何会话验证的视图。这意味着只有当客户端通过调用login()登录时才会发生CSRF验证。

四、RequestsClient（请求客户端）  
REST框架也使用requests库提供了一个客户端用于和应用程序互动。  
用处：  
- 您期望与另一个Python服务器的API接口，并希望在与客户端看到的相同上测试服务器。  
- 您希望以这样一种方式编写测试，它们也可以分阶段或者直接在环境中运行。
```python
client = RequestsClient()
response = client.get('http://testserver/users/')
assert response.status_code == 200
```
请求客户端与数据库一起运行  
如果您想编写单独与服务接口交互的测试，那么RequestsClient类是非常有用的。这比使用标准的Django测试客户端要严格一些，因为它意味着所有的交互都应该通过API进行。  
如果您使用RequestsClient，那么您将希望确保测试设置和结果断言是与作为常规的API调用执行一样的，而不是直接与数据库模型交互。例如，与其检查customer.objects.count()==3，不如列出客户端点，并确保它包含三个记录。

Headers & Authentication（请求头和认证）  
提供自定义头和身份验证凭证的方式和使用request.Session一样。
```python
from requests.auth import HTTPBasicAuth

client.auth = HTTPBasicAuth('user', 'pass')
client.headers.update({'x-test': 'true'})

# 会话使用实例
s = requests.Session()
s.auth = ('user', 'pass')
s.headers.update({'x-test': 'true'})
# both 'x-test' and 'x-test2' are sent
s.get('http://httpbin.org/headers', headers={'x-test2': 'true'})
```
CSRF  
如果在使用SessionAuthentication认证，POST, PUT, PATCH或者DELETE请求中必须包含 CSRF token。  
您可以通过遵循基于JavaScript的客户端使用的相同流程来实现这一点。首先要获取一个GET请求，以便获得CRSF令牌，然后在以下请求中显示该令牌。
```python
client = RequestsClient()

# Obtain a CSRF token.
response = client.get('/homepage/')
assert response.status_code == 200
csrftoken = response.cookies['csrftoken']

# Interact with the API.
response = client.post('/organisations/', json={
    'name': 'MegaCorp',
    'status': 'active'
}, headers={'X-CSRFToken': csrftoken})
assert response.status_code == 200
```
Live tests（现场测试）  
谨慎使用RequestsClient和CoreAPIClient，都提供了可以在开发环境中运行测试实例的能力，或者直接运行在您的阶段服务器或生产环境中。  
使用这种风格来创建一些核心功能的基本测试是验证您的实时服务的一种有效方法。这样做可能需要仔细地注意设置和拆卸，以确保测试以一种不会直接影响客户数据的方式运行。

## 五、CoreAPIClient
允许使用python的coreapi与自己的API进行互动
```python
# 获取api模式
client = CoreAPIClient()
schema = client.get('http://testserver/schema/')

# 创建一个新的组织
params = {'name': 'MegaCorp', 'status': 'active'}
client.action(schema, ['organisations', 'create'], params)

# 确保列表中存在organisation
data = client.action(schema, ['organisations', 'list'])
assert(len(data) == 1)
assert(data == [{'name': 'MegaCorp', 'status': 'active'}])
```

1. Headers & Authentication
```python
from requests.auth import HTTPBasicAuth

# 设置请求头和用户认证信息
client = CoreAPIClient()
client.session.auth = HTTPBasicAuth('user', 'pass')
client.session.headers.update({'x-test': 'true'})
```
测试实例

- APISimpleTestCase
- APITransactionTestCase
- APITestCase
- APILiveServerTestCase
```python
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from myproject.apps.core.models import Account

class AccountTests(APITestCase):
    def test_create_account(self):
        """
        创建一个新的account对象
        """
        url = reverse('account-list')
        data = {'name': 'DabApps'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Account.objects.count(), 1)
        self.assertEqual(Account.objects.get().name, 'DabApps')
```
测试responses

- 检查响应对象数据  
在检查测试响应的有效性时，通常更方便地检查响应创建的数据，而不是检查完全呈现的响应。
```python
response = self.client.get('/users/4/')
self.assertEqual(response.data, {'id': 4, 'username': 'lauren'})
```
而不是检查response.content的解析结果
```python
response = self.client.get('/users/4/')
self.assertEqual(json.loads(response.content), {'id': 4, 'username': 'lauren'})
```

- 渲染响应对象  
如果您正在直接使用APIRequestFactory测试视图，那么返回的响应将不会被呈现，因为模板响应是由Django的内部请求-响应周期来执行的。为了访问response.content，您首先需要渲染响应。
```python
view = UserDetail.as_view()
request = factory.get('/users/4')
response = view(request, pk='4')
response.render()  # Cannot access `response.content` without this.
self.assertEqual(response.content, '{"username": "lauren", "id": 4}')
```
配置

- 设置默认格式
```python
REST_FRAMEWORK = {
    ...
    'TEST_REQUEST_DEFAULT_FORMAT': 'json'
}
```

- 设置可用的格式
```python
REST_FRAMEWORK = {
    ...
    'TEST_REQUEST_RENDERER_CLASSES': (
        'rest_framework.renderers.MultiPartRenderer',
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.TemplateHTMLRenderer'
    )
}
```
