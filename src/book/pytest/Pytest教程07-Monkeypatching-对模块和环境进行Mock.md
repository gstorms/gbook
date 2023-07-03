# Pytest权威教程07-Monkeypatching,对模块和环境进行Mock

有时,测试需要调用依赖于全局设置的函数,或调用无法轻松测试的代码(如网络访问)。 monkeypatch fixture可帮助你安全地设置/删除属性,字典项或环境变量,或修改sys.path以进行导入。 请参阅monkeypatch博客文章,了解一些介绍材料并讨论其动机。
### 简单示例如: 猴子补丁方法
如果你想阻止`os.expanduser`返回某个目录,你可以在测试用例调用其之前,使用`monkeypatch.setattr()`方法改造这个函数：
```python
# test_module.py文件内容
import os.path
def getssh(): # 伪应用代码
    return os.path.join(os.path.expanduser("~admin"),'.ssh')

def test_mytest(monkeypatch):
    def mockreturn(path):
        return '/abc'
    monkeypatch.setattr(os.path,'expanduser',mockreturn)
    x = getssh()
    assert x == '/abc/.ssh'
```
这里在我们的测试用例中,使用猴子补丁改造了`os.path.expanduser`, 然后再进行调用。 测试执行完成后对`os.path.expanduser`修改将被撤消。
### Monkeypatching 返回对象: 构建mock类
### 全局补丁示例如:阻止"requests"库的远程操作
如果要阻止"requests"库在所有测试中执行http请求,你可以执行以下操作：
```python
# conftest.py文件内容
import pytest
@pytest.fixture(autouse=True)
def no_requests(monkeypatch):
    monkeypatch.delattr("requests.sessions.Session.request")
```
每个测试用例执行时都会自动使用该fixture,它将删除测试用例内置属性中的`request.session.Session.request`,以便在测试中任何使用requests库创建http请求的用例都将失败。
> 注意：
> 不建议使用猴子补丁改造Python内置函数,如open,compile等,因为它可能会破坏pytest的内部逻辑。 如果必须要使用,你可以通过参数：`--tb = native`, `- tables = plain`和`--capture = no`来试试,不一定不会有问题。

注意：  
改造`stdlib`函数和pytest依赖的某些第三方库本身可能会破坏pytest,因此在这些情况下,建议使用`MonkeyPatch.context()`来改造这些模块：
```python
import functools


def test_partial(monkeypatch):
    with monkeypatch.context() as m:
        m.setattr(functools,"partial",3)
        assert functools.partial == 3
```
查看#3290号bug详情
### Monkeypatching 环境变量
### Monkeypatching字典
### 参考API
查阅MonkeyPatch类相关文档。
