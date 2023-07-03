# Pytest权威教程04-断言的编写和报告

### 使用assert语句进行断言
pytest允许你使用标准的Python`assert`断言语句来验证测试中的期望结果和实际结果。 例如,你可以编写以下内容：
```python
# test_assert1.py文件内容
def f():
    return 3

def test_function():
    assert f() == 4
```
来断言你的函数返回一个特定的值。 如果此断言失败,你将看到函数调用的返回值：
```bash
$ pytest test_assert1.py
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-3.x.y,py-1.x.y,pluggy-0.x.y
rootdir: $REGENDOC_TMPDIR,inifile:
collected 1 item

test_assert1.py F                                                    [100%]

================================= FAILURES =================================
______________________________ test_function _______________________________

    def test_function():
>       assert f() == 4
E       assert 3 == 4
E        +  where 3 = f()

test_assert1.py:5: AssertionError
========================= 1 failed in 0.12 seconds =========================
```
`Pytest`支持显示常见的包括调用,属性,比较以及二元和一元运算符子表达式的值 (参考: pytest执行Python测试失败报告示例)。 你可以在不使用繁琐的Python惯用构造样板代码的同时,不丢失断言失败的对比信息(内省信息)。  
当然,你也可以像下面所示,指定断言失败的返回消息：
```python
assert a % 2 == 0,"值为奇数,应为偶数"
```
这样将不会断言失败对比信息(内省信息),而只简单地在追溯信息中显示你指定的失败返回信息。

有关断言内省的更多信息,请参阅**高级断言内省**。
### 异常断言
你可以像如下所示,使用`pytest.raises`作为上下文管理器来进行异常断言：
```python
import pytest

def test_zero_division():
    with pytest.raises(ZeroDivisionError):
        1 / 0
```
如果需要访问实际的异常信息,你可以使用：
```python
def test_recursion_depth():
    with pytest.raises(RuntimeError) as excinfo:
        def f():
            f()
        f()
    assert 'maximum recursion' in str(excinfo.value)
```
`excinfo`是一个`ExceptionInfo`实例,它是实际异常的装饰器。 其主要属性有`.type`,`.value`及`.traceback`三种  
_版本3.0已修改_  
在上下文管理器中,你可以使用参数`message`来指定自定义失败信息：
```bash
>>> with raises(ZeroDivisionError,message="Expecting ZeroDivisionError"):
...    pass
... Failed: Expecting ZeroDivisionError
```
如果你想编写适用于Python 2.4的测试代码,你还可以使用其他两种方法来测试预期的异常：
```python
pytest.raises(ExpectedException,func,*args,**kwargs)
pytest.raises(ExpectedException,"func(*args,**kwargs)")
```
两者都可以对带任意参数的函数,断言是否出现了期望的异常：`ExpectedException`。 即使没有异常或出现了不同的异常,报告生成器也能输出一些有用的断言信息。  
注意,也可以为`pytest.mark.xfail`指定一个“raises”参数,当引发异常时标记用例失败：
```python
@pytest.mark.xfail(raises=IndexError)
def test_f():
    f()
```
对于你在代码中故意设置的异常,使用`pytest.raises`断言更加好用,而将`@ pytest.mark.xfail`与check函数一起使用对于已知未修复或依赖中的bug会更好。  
此外,上下文管理器表单接受`match`关键字参数来测试正则表达式匹配中的异常(如`unittest`中的`TestCase.assertRaisesRegexp`方法)：
```python
import pytest

def myfunc():
    raise ValueError("Exception 123 raised")

def test_match():
    with pytest.raises(ValueError,match=r'.* 123 .*'):
        myfunc()
```
`match`变量后的正则表达式与使用`re.search`函数来进行匹配一致。 因此在上面的例子中,`match ='123'`不会引发异常。
### 警示断言
_2.8版本新增_  
你可以使用`pytest.warns`检查代码是否引发了特定警告。
### 使用上下文对比
_2.0版本新增_  
`Pytest`可以在断言的比较中提供丰富的上下文信息。 例如：
```python
# test_assert2.py文件内容

def test_set_comparison():
    set1 = set("1308")
    set2 = set("8035")
    assert set1 == set2
```
当你运行这个模块后
```bash
$ pytest test_assert2.py
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-3.x.y,py-1.x.y,pluggy-0.x.y
rootdir: $REGENDOC_TMPDIR,inifile:
collected 1 item

test_assert2.py F                                                    [100%]

================================= FAILURES =================================
___________________________ test_set_comparison ____________________________

    def test_set_comparison():
        set1 = set("1308")
        set2 = set("8035")
>       assert set1 == set2
E       AssertionError: assert {'0','1','3','8'} == {'0','3','5','8'}
E         Extra items in the left set:
E         '1'
E         Extra items in the right set:
E         '5'
E         Use -v to get the full diff

test_assert2.py:5: AssertionError
========================= 1 failed in 0.12 seconds =========================
```
对大量用例进行了特定对比：

- 长字符串断言：显示上下文差异
- 长序列断言：显示第一个失败的索引
- 字典断言：显示不同的key-value对

有关更多示例,请参阅 报告样例。
### 自定义断言对比信息
可以通过实现`hook`方法`pytest_assertrepr_compare`来在断言结果中添加你自己的详细说明信息。  
**pytest_assertrepr_compare(config,op,left,right)*- [源码]  
返回失败断言表达式中的对比信息。  
如果没有自定义对比信息,则返回None,否则返回一列字符串。 字符串将由换行符连接,但字符串中的任何换行符都将被转义。 请注意,除第一行外的所有行都将略微缩进,目的是将第一行作为摘要。  
**参数： config**(pytest.config.Config* - pytest config 对象  
例如,在conftest.py文件中添加以下钩子(Hook)方法,可以为`Foo`对象提供了附加对比信息：
```python
# conftest.py内容
from test_foocompare import Foo
def pytest_assertrepr_compare(op,left,right):
    if isinstance(left,Foo) and isinstance(right,Foo) and op == "==":
        return ['Foo实例对比:',
                '   值: %s != %s' % (left.val,right.val)]
```
现在,在测试模块使用
```python
# test_foocompare.py内容
class Foo(object):
    def __init__(self,val):
        self.val = val

    def __eq__(self,other):
        return self.val == other.val

def test_compare():
    f1 = Foo(1)
    f2 = Foo(2)
    assert f1 == f2

```
运行这个测试模块你可以看到`conftest.py`文件中定义的自定义输出：
```bash
$ pytest -q test_foocompare.py
F                                                                    [100%]
================================= FAILURES =================================
_______________________________ test_compare _______________________________

    def test_compare():
        f1 = Foo(1)
        f2 = Foo(2)
>       assert f1 == f2
E       assert Foo实例对比:
E            值: 1 != 2

test_foocompare.py:11: AssertionError
1 failed in 0.12 seconds
```
### 高级断言内省
_2.1版本新函数_  
报告有关失败断言的详细信息是通过在运行之前重写assert语句来实现的。 重写的断言语句将内省信息放入断言失败消息中。 `Pytest`只重写测试收集过程直接发现的测试模块中的assert断言,因此**在支持模块(非测试模块)中的断言,不会被重写**。  
你可以在导入模块前通过调用`register_assert_rewrite`手动启用断言重写(比如可以在`conftest.py`这样使用)。
::: tip 注意 
`Pytest`通过使用导入hook方法写入新的`pyc`文件来重写测试模块。 通常这种结构比较清晰。 但是,如果你混乱导入,导入的hook方法可能会受到干扰。
如果是这种情况,你有两种选择：
- 通过将字符串`PYTEST_DONT_REWRITE`添加到其docstring来禁用特定模块的重写。
- 使用`--assert = plain`禁用所有模块的重写。
:::
> **注意**  
> `Pytest`通过使用导入hook方法写入新的`pyc`文件来重写测试模块。 通常这种结构比较清晰。 但是,如果你混乱导入,导入的hook方法可能会受到干扰。
> 如果是这种情况,你有两种选择：
> - 通过将字符串`PYTEST_DONT_REWRITE`添加到其docstring来禁用特定模块的重写。
> - 使用`--assert = plain`禁用所有模块的重写。
> 
此外,如果无法写入新的`.pyc`文件(如在只读文件系统或zip文件中),重写将无提示失败。
> 有关进一步的信息,课参阅：本杰明彼得森写的[pytest的新断言改写的幕后故事。

_版本2.1新函数_：添加断言重写作为备用内省技术。  
_版本2.1更改_：引入`--assert`选项。 弃用`--no-assert`和`--nomagic`。  
_版本3.0版更改_：删除`--no-assert`和--nomagic`选项。 删除`--assert = reinterp`选项。
