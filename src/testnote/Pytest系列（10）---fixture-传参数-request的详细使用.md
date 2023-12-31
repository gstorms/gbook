
## 前言
- 为了提高复用性，我们在写测试用例的时候，会用到不同的fixture，比如：最常见的登录操作，大部分的用例的前置条件都是登录
- 假设不同的用例想登录不同的测试账号，那么登录fixture就不能把账号写死，需要通过传参的方式来完成登录操作

 

## 案例一：传单个参数

```python
import pytest
@pytest.fixture()
def login(request):
    name = request.param
    print(f"== 账号是：{name} ==")
    return name
data = ["pyy1", "polo"]
ids = [f"login_test_name is:{name}" for name in data]
@pytest.mark.parametrize("login", data, ids=ids, indirect=True)
def test_name(login):
    print(f" 测试用例的登录账号是：{login} ")
```

### 执行结果

```bash
collecting ... collected 2 items
10fixture_request.py::test_name[login_test_name is:pyy1] == 账号是：pyy1 ==
PASSED          [ 50%] 测试用例的登录账号是：pyy1 
10fixture_request.py::test_name[login_test_name is:polo] == 账号是：polo ==
PASSED          [100%] 测试用例的登录账号是：polo
```

### 知识点

- 添加  indirect=True  参数是为了把 login 当成一个函数去执行，而不是一个参数，并且将data当做参数传入函数
- def test_name(login) ，这里的login是获取fixture返回的值

 

## 案例二：多个参数

```python
@pytest.fixture()
def logins(request):
    param = request.param
    print(f"账号是：{param['username']}，密码是：{param['pwd']}")
    return param
data = [
    {"username": "name1", "pwd": "pwd1"},
    {"username": "name2", "pwd": "pwd2"},
]
@pytest.mark.parametrize("logins", data, indirect=True)
def test_name_pwd(logins):
    print(f"账号是：{logins['username']}，密码是：{logins['pwd']}")
```

### 执行结果

```bash
10fixture_request.py::test_name_pwd[logins0] 账号是：name1，密码是：pwd1
PASSED                      [ 50%]账号是：name1，密码是：pwd1
10fixture_request.py::test_name_pwd[logins1] 账号是：name2，密码是：pwd2
PASSED                      [100%]账号是：name2，密码是：pwd2
```

### 知识点
如果需要传多个参数，需要通过字典去传  
 

## 案例三：多个fixture（只加一个装饰器）
**这种更常用**  

```python
# 多个fixture
@pytest.fixture(scope="module")
def input_user(request):
    user = request.param
    print("登录账户：%s" % user)
    return user
@pytest.fixture(scope="module")
def input_psw(request):
    psw = request.param
    print("登录密码：%s" % psw)
    return psw
data = [
    ("name1", "pwd1"),
    ("name2", "pwd2")
]
@pytest.mark.parametrize("input_user,input_psw", data, indirect=True)
def test_more_fixture(input_user, input_psw):
    print("fixture返回的内容:", input_user, input_psw)
```

### 执行结果

```bash
10fixture_request.py::test_more_fixture[name1-pwd1] 登录账户：name1
登录密码：pwd1
PASSED               [ 50%]fixture返回的内容: name1 pwd1
10fixture_request.py::test_more_fixture[name2-pwd2] 登录账户：name2
登录密码：pwd2
PASSED               [100%]fixture返回的内容: name2 pwd2
```
 

## 案例四：多个fixture（叠加装饰器）

```python
# 多个fixture
@pytest.fixture(scope="function")
def input_user(request):
    user = request.param
    print("登录账户：%s" % user)
    return user
@pytest.fixture(scope="function")
def input_psw(request):
    psw = request.param
    print("登录密码：%s" % psw)
    return psw
name = ["name1", "name2"]
pwd = ["pwd1", "pwd2"]
@pytest.mark.parametrize("input_user", name, indirect=True)
@pytest.mark.parametrize("input_psw", pwd, indirect=True)
def test_more_fixture(input_user, input_psw):
    print("fixture返回的内容:", input_user, input_psw)
```

### 执行结果

```bash
10fixture_request.py::test_more_fixture[pwd1-name1] 登录账户：name1
登录密码：pwd1
PASSED               [ 25%]fixture返回的内容: name1 pwd1
10fixture_request.py::test_more_fixture[pwd1-name2] 登录账户：name2
登录密码：pwd1
PASSED               [ 50%]fixture返回的内容: name2 pwd1
10fixture_request.py::test_more_fixture[pwd2-name1] 登录账户：name1
登录密码：pwd2
PASSED               [ 75%]fixture返回的内容: name1 pwd2
10fixture_request.py::test_more_fixture[pwd2-name2] 登录账户：name2
登录密码：pwd2
PASSED               [100%]fixture返回的内容: name2 pwd2
```
测试用例数=2*2=4条  
 
> 转载：[https://www.cnblogs.com/poloyy/p/12685948.html](https://www.cnblogs.com/poloyy/p/12685948.html)

