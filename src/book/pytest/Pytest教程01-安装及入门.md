# Pytest权威教程01-安装及入门

## [安装及入门#](https://www.cnblogs.com/superhin/p/11455335.html#3947074107)
**Python支持版本**: Python 2.6,2.7,3.3,3.4,3.5,Jython,PyPy-2.3  
**支持的平台**: Unix/Posix and Windows  
**PyPI包名**: pytest  
**依赖项**: py,colorama (Windows)  
**PDF文档**: 下载最新版本文档  
Pytest是一个使创建简单及可扩展性测试用例变得非常方便的框架。测试用例清晰、易读而无需大量的繁琐代码。只要几分钟你就可以对你的应用程序或者库展开一个小型的单元测试或者复杂的功能测试。
### 安装 Pytest[#](https://www.cnblogs.com/superhin/p/11455335.html#1327268672)
在命令行执行以下命令
```bash
pip install -U pytest
```
检查安装的Pytest版本
```bash
$ pytest --version
This is pytest version 3.x.y,imported from $PYTHON_PREFIX/lib/python3.6/site-packages/pytest.py
```
创建你的第一个测试用例[#](https://www.cnblogs.com/superhin/p/11455335.html#2288625512)

只需要4行代码即可创建一个简单的测试用例:  
Copy
```python
# test_sample.py文件内容
def func(x):
    return x + 1

def test_answer():
    assert func(3) == 5
```
就是这么简单。现在你可以执行一下这个测试用例:  

```bash
$ pytest
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-3.x.y,py-1.x.y,pluggy-0.x.y
rootdir: $REGENDOC_TMPDIR,inifile:
collected 1 item

test_sample.py F                                                     [100%]

================================= FAILURES =================================
_______________________________ test_answer ________________________________

    def test_answer():
>       assert func(3) == 5
E       assert 4 == 5
E        +  where 4 = func(3)

test_sample.py:5: AssertionError
========================= 1 failed in 0.12 seconds =========================
```
由于`func(3)`并不等于`5`,这次测试返回了一个失败的结果信息。
> **注意：**
> 你可以使用`assert`语句来断言你测试用例的期望结果。Pytest的高级断言内省机制, 可以智能地展示断言表达式的中间结果, 来避免来源于JUnit的方法中的变量名重复问题。

### 执行多条测试用例[#](https://www.cnblogs.com/superhin/p/11455335.html#3747730090)
`pytest`命令会执行当前目录及子目录下所有`test_*.py`及`*_test.py`格式的文件。一般来说,用例需要遵循标准的测试发现规则。
### 断言抛出了指定异常[#](https://www.cnblogs.com/superhin/p/11455335.html#1338174723)
使用`raise`可以在相应代码的抛出的指定异常：
```python
# test_sysexit.py文件内容
import pytest
def f():
    raise SystemExit(1)

def test_mytest():
    with pytest.raises(SystemExit):
        f()
```
使用“静默”模式,执行这个测试用例如:
```bash
$ pytest -q test_sysexit.py
.                                                                   [100%]
1 passed in 0.12 seconds
```
### 使用类组织多条测试用例[#](https://www.cnblogs.com/superhin/p/11455335.html#565019293)
一旦你需要开发多条测试用例,你可能会想要使用类来组织它们。使用Pytest可以很轻松的创建包含多条用例的测试类：
```python
# test_class.py文件内容
class TestClass(object):
    def test_one(self):
        x = "this"
        assert 'h' in x

    def test_two(self):
        x = "hello"
        assert hasattr(x,'check')

```
`Pytest`可以发现所有遵循Python测试用例发现约定规则的用例,所以它能找到`Test`开头的测试类外以及类中所有以`test_`开头的函数及方法。测试类无需再继承任何对象。我们只需要简单地通过文件名来运行这个模块即可。
```bash
$ pytest -q test_class.py
.F                                                                   [100%]
================================= FAILURES =================================
____________________________ TestClass.test_two ____________________________

self = <test_class.TestClass object at 0xdeadbeef>

    def test_two(self):
        x = "hello"
>       assert hasattr(x,'check')
E       AssertionError: assert False
E        +  where False = hasattr('hello','check')

test_class.py:8: AssertionError
1 failed,1 passed in 0.12 seconds
```
第一条用例执行成功,第二天用例执行失败。你可以很容易地通过断言中变量的中间值来理解失败的原因。
### 函数测试中请求使用独立的临时目录[#](https://www.cnblogs.com/superhin/p/11455335.html#2580749679)
`Pytest`提供了内置fixtures方法参数,来使用任意资源,比如一个独立的临时目录：
```python
# test_tmpdir.py文件内容
def test_needsfiles(tmpdir):
    print (tmpdir)
    assert 0
```
在测试用例函数使用`tmpdir`作为参数,Pytest将在测试用例函数调用之前查找并调用fixture工厂方法来创建相应的资源。在测试运行之前,Pytest为每个测试用例创建一个独立的临时目录：
```bash
$ pytest -q test_tmpdir.py
F                                                                    [100%]
================================= FAILURES =================================
_____________________________ test_needsfiles ______________________________

tmpdir = local('PYTEST_TMPDIR/test_needsfiles0')

    def test_needsfiles(tmpdir):
        print (tmpdir)
>       assert 0
E       assert 0

test_tmpdir.py:3: AssertionError
--------------------------- Captured stdout call ---------------------------
PYTEST_TMPDIR/test_needsfiles0
1 failed in 0.12 seconds
```
> 有关tmpdir处理的更多信息,请参见: 临时目录和文件

### 进一步阅读[#](https://www.cnblogs.com/superhin/p/11455335.html#298985699)
查看其他pytest文档资源,来帮助你建立自定义测试用例及独特的工作流：

- “使用pytest -m pytest来调用pyest” - 命令行调用示例
- “将pytest与原有测试套件一起使用”- 使用之前的测试用例
- “使用属性标记测试用例” - `pytest.mark`相关信息
- “pytest fixtures：显式,模块化,可扩展” - 为你的测试提供函数基准
- “插件编写” - 管理和编写插件
- “优质集成实践” - 虚拟环境和测试分层
