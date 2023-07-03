# Pytest权威教程05-Pytest-fixtures：清晰-模块化-易扩展

_2.0/2.3/2.4版本新函数_  
text fixtures的目的是为测试的重复执行提供一个可靠的固定基线。 `pytest fixture` 比经典的 `xUnit setUp/tearDown` 方法有着显着的改进：

- `fixtures` 具有明确的名称,在测试用例/类/模块或整个项目中通过声明使用的 `fixtures` 名称来使用。
- `fixtures` 以模块化方式实现,因为每个 `fixture` 名称都会触发调用fixture函数,该 `fixture` 函数本身可以使用其它的 `fixtures` 。
- 从简单的单元测试到复杂的函数测试, `fixtures` 的管理允许根据配置和组件选项对 `fixtures` 和测试用例进行参数化,或者在测试用例/类/模块或整个测试会话范围内重复使用该 `fixture` 。

此外, `pytest` 继续支持经典的 `xUnit` 风格的 `setup` 方法。 你可以根据需要混合使用两种样式,逐步从经典样式移动到新样式。 你也可以从现有的 `unittest.TestCase` 样式或基于 `nose` 的项目开始。
### Fixtures作为函数参数使用
测试用例可以通过在其参数中使用fixtures名称来接收fixture对象。 每个fixture参数名称所对应的函数,可以通过使用`@pytest.fixture`注册成为一个fixture函数,来为测试用例提供一个fixture对象。 让我们看一个只包含一个fixture和一个使用它的测试用例的简单独立测试模块：
```python
# ./test_smtpsimple.py内容
import pytest

@pytest.fixture
def smtp_connection():
    import smtplib
    return smtplib.SMTP("smtp.gmail.com",587,timeout=5)

def test_ehlo(smtp_connection):
    response,msg = smtp_connection.ehlo()
    assert response == 250
    assert 0 # for demo purposes
```
这里,`test_ehlo`需要`smtp_connection`来提供fixture对象。pytest将发现并调用带`@pytest.fixture`装饰器的`smtp_connection` fixture函数。 运行测试如下所示：
```bash
$ pytest test_smtpsimple.py
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-3.x.y,py-1.x.y,pluggy-0.x.y
rootdir: $REGENDOC_TMPDIR,inifile:
collected 1 item

test_smtpsimple.py F                                                 [100%]

================================= FAILURES =================================
________________________________ test_ehlo _________________________________

smtp_connection = <smtplib.SMTP object at 0xdeadbeef>

    def test_ehlo(smtp_connection):
        response,msg = smtp_connection.ehlo()
        assert response == 250
>       assert 0 # for demo purposes
E       assert 0

test_smtpsimple.py:11: AssertionError
========================= 1 failed in 0.12 seconds =========================
```
在测试失败的回溯信息中,我们看到测试用例是使用`smtp_connection`参数调用的,即由fixture函数创建的`smtplib.SMTP()`实例。测试用例在我们故意的`assert 0`上失败。以下是pytest用这种方式调用测试用例使用的确切协议：
### Fixtures: 依赖注入的主要例子
Fixtures允许测试用例能轻松引入预先定义好的初始化准备函数,而无需关心导入/设置/清理方法的细节。 这是依赖注入的一个主要示例,其中fixture函数的函数扮演”注入器“的角色,测试用例来“消费”这些fixture对象。
### conftest.py: 共享fixture函数
如果在测试中需要使用多个测试文件中的fixture函数,则可以将其移动到`conftest.py`文件中,所需的fixture对象会自动被`Pytest`发现,而不需要再每次导入。 fixture函数的发现顺序从测试类开始,然后是测试模块,然后是conftest.py文件,最后是内置和第三方插件。  
你还可以使用conftest.py文件来实现本地每个目录的插件。
### 共享测试数据
如果要使用数据文件中的测试数据,最好的方法是将这些数据加载到fixture函数中以供测试用例注入使用。这利用到了`pytest`的自动缓存机制。  
另一个好方法是在tests文件夹中添加数据文件。 还有社区插件可用于帮助处理这方面的测试,例如：`pytest-datadir`和`pytest-datafiles`。
### 生效范围：在测试类/测试模块/测试会话中共享fixture对象
由于fixtures对象需要连接形成依赖网,而通常创建时间比较长。 扩展前面的示例,我们可以在`@pytest.fixture`调用中添加`scope ="module"`参数,以使每个测试模块只调用一次修饰的`smtp_connection` fixture函数(默认情况下,每个测试函数调用一次)。 因此,测试模块中的多个测试用例将各自注入相同的`smtp_connection`fixture对象,从而节省时间。scope参数的可选值包括：function(函数),class(类),module(模块),package(包)及 session(会话)。  
下一个示例将fixture函数放入单独的conftest.py文件中,以便来自目录中多个测试模块的测试可以访问fixture函数：
```python
# conftest.py文件内容
import pytest
import smtplib

@pytest.fixture(scope="module")
def smtp_connection():
    return smtplib.SMTP("smtp.gmail.com",587,timeout=5)
```
fixture对象的名称依然是`smtp_connection`,你可以通过在任何测试用例或fixture函数(在conftest.py所在的目录中或下面)使用参数`smtp_connection`作为输入参数来访问其结果：
```python
# test_module.py文件内容

def test_ehlo(smtp_connection):
    response,msg = smtp_connection.ehlo()
    assert response == 250
    assert b"smtp.gmail.com" in msg
    assert 0  # for demo purposes

def test_noop(smtp_connection):
    response,msg = smtp_connection.noop()
    assert response == 250
    assert 0  # for demo purposes
```
我们故意插入失败的`assert 0`语句,以便检查发生了什么,运行测试并查看结果：
```bash
$ pytest test_module.py
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-4.x.y,py-1.x.y,pluggy-0.x.y
cachedir: $PYTHON_PREFIX/.pytest_cache
rootdir: $REGENDOC_TMPDIR,inifile:
collected 2 items

test_module.py FF                                                    [100%]

================================= FAILURES =================================
________________________________ test_ehlo _________________________________

smtp_connection = <smtplib.SMTP object at 0xdeadbeef>

    def test_ehlo(smtp_connection):
        response,msg = smtp_connection.ehlo()
        assert response == 250
        assert b"smtp.gmail.com" in msg
>       assert 0  # for demo purposes
E       assert 0

test_module.py:6: AssertionError
________________________________ test_noop _________________________________

smtp_connection = <smtplib.SMTP object at 0xdeadbeef>

    def test_noop(smtp_connection):
        response,msg = smtp_connection.noop()
        assert response == 250
>       assert 0  # for demo purposes
E       assert 0

test_module.py:11: AssertionError
========================= 2 failed in 0.12 seconds =========================
```
你会看到两个`assert 0`失败信息,更重要的是你还可以看到相同的(模块范围的)`smtp_connection`对象被传递到两个测试用例中,因为pytest在回溯信息中显示传入的参数值。 因此,使用`smtp_connection`的两个测试用例运行速度与单个函数一样快,因为它们重用了相同的fixture对象。  
如果你决定要使用session(会话,一次运行算一次会话)范围的`smtp_connection`对象,则只需如下声明：
```python
@pytest.fixture(scope="session")
def smtp_connection():
    # the returned fixture value will be shared for
    # all tests needing it
    ...
```
最后,class(类)范围将为每个测试类调用一次fixture对象。
> 注意:
> Pytest一次只会缓存一个fixture实例。 这意味着当使用参数化fixture时,pytest可能会在给定范围内多次调用fixture函数。

_package(包)范围的fixture(实验性函数)_  
**3.7版本新函数**  
在pytest 3.7中,引入了包范围。 当包的最后一次测试结束时,最终确定包范围的fixture函数。
> 警告:
> 此函数是实验性的,如果在获得更多使用后发现隐藏的角落情况或此函数的严重问题,可能会在将来的版本中删除。

谨慎使用此新函数,请务必报告你发现的任何问题。
### 高范围的fixture函数优先实例化
**3.5版本新函数**  
在测试函数的fixture对象请求中,较高范围的fixture(例如session会话级)较低范围的fixture(例如function函数级或class类级优先执行。相同范围的fixture对象的按引入的顺序及fixtures之间的依赖关系按顺序调用。  
请考虑以下代码：
```python
@pytest.fixture(scope="session")
def s1():
    pass

@pytest.fixture(scope="module")
def m1():
    pass

@pytest.fixture
def f1(tmpdir):
    pass

@pytest.fixture
def f2():
    pass

def test_foo(f1,m1,f2,s1):
    ...
```
`test_foo`中fixtures将按以下顺序执行：

1. s1：是最高范围的fixture(会话级)
1. m1：是第二高的fixture(模块级)
1. tmpdir：是一个函数级的fixture,f1依赖它,因此它需要在f1前调用
1. f1：是test_foo参数列表中第一个函数范围的fixture。
1. f2：是test_foo参数列表中最后一个函数范围的fixture。
### fixture结束/执行teardown代码
当fixture超出范围时,通过使用yield语句而不是return,pytest支持fixture执行特定的teardown代码。yield语句之后的所有代码都视为teardown代码：
```python
# conftest.py文件内容

import smtplib
import pytest

@pytest.fixture(scope="module")
def smtp_connection():
    smtp_connection = smtplib.SMTP("smtp.gmail.com",587,timeout=5)
    yield smtp_connection  # provide the fixture value
    print("teardown smtp")
    smtp_connection.close()
```
无论测试的异常状态如何,`print`和`smtp.close()`语句将在模块中的最后一个测试完成执行时执行。  
让我们执行一下(上文的`test_module.py`)：
```bash
$ pytest -s -q --tb=no
FFteardown smtp

2 failed in 0.12 seconds
```
我们看到`smtp_connection`实例在两个测试完成执行后完成。 请注意,如果我们使用`scope ='function'`修饰我们的fixture函数,那么每次单个测试都会进行fixture的setup和teardown。 在任何一种情况下,测试模块本身都不需要改变或了解fixture函数的这些细节。  
请注意,我们还可以使用with语句无缝地使用yield语法：
```python
# test_yield2.py文件内容

import smtplib
import pytest

@pytest.fixture(scope="module")
def smtp_connection():
    with smtplib.SMTP("smtp.gmail.com",587,timeout=5) as smtp_connection:
        yield smtp_connection  # provide the fixture value
```
测试结束后,`smtp_connection`连接将关闭,因为当with语句结束时,`smtp_connection`对象会自动关闭。  
请注意,如果在设置代码期间(yield关键字之前)发生异常,则不会调用teardown代码(在yield之后)。  
执行teardown代码的另一种选择是利用请求上下文对象的`addfinalizer`方法来注册teardown函数。  
以下是`smtp_connection`fixture函数更改为使用`addfinalizer`进行teardown：
```python
# content of conftest.py
import smtplib
import pytest


@pytest.fixture(scope="module")
def smtp_connection(request):
    smtp_connection = smtplib.SMTP("smtp.gmail.com",587,timeout=5)

    def fin():
        print("teardown smtp_connection")
        smtp_connection.close()

    request.addfinalizer(fin)
    return smtp_connection  # provide the fixture value
```
`yield`和`addfinalizer`方法在测试结束后调用它们的代码时的工作方式类似,但`addfinalizer`相比`yield`有两个主要区别：

1. 使用`addfinalizer`可以注册多个teardown函数。
1. 无论fixture中setup代码是否引发异常,都将始终调用teardown代码。 即使其中一个资源无法创建/获取,也可以正确关闭fixture函数创建的所有资源：
```python
@pytest.fixture
def equipments(request):
    r = []
    for port in ('C1','C3','C28'):
        equip = connect(port)
        request.addfinalizer(equip.disconnect)
        r.append(equip)
    return r
```
在上面的示例中,如果“C28”因异常而失败,则“C1”和“C3”仍将正确关闭。 当然,如果在注册`finalize`函数之前发生异常,那么它将不会被执行。
### Fixtures中使用测试上下文的内省信息
Fixture函数可以接受request对象来内省“请求”测试函数,类或模块上下文。进一步扩展前一个smtp_connectionfixture例子,让我们从使用我们的fixture的测试模块中读取一个可选的服务器URL：
```python
# content of conftest.py
import pytest
import smtplib

@pytest.fixture(scope="module")
def smtp_connection(request):
    server = getattr(request.module,"smtpserver","smtp.gmail.com")
    smtp_connection = smtplib.SMTP(server,587,timeout=5)
    yield smtp_connection
    print("finalizing %s (%s)" % (smtp_connection,server))
    smtp_connection.close()
```
我们使用该request.module属性可选地smtpserver从测试模块获取 属性。如果我们再次执行,那么没有太大变化：
```bash
$ pytest -s -q --tb=no
FFfinalizing <smtplib.SMTP object at 0xdeadbeef> (smtp.gmail.com)

2 failed in 0.12 seconds
```
让我们快速创建另一个测试模块,该模块实际上在其模块命名空间中设置服务器URL：
```python
# content of test_anothersmtp.py

smtpserver = "mail.python.org"  # will be read by smtp fixture

def test_showhelo(smtp_connection):
    assert 0,smtp_connection.helo()
```
运行它：
```bash
$ pytest -qq --tb=short test_anothersmtp.py
F                                                                    [100%]
================================= FAILURES =================================
______________________________ test_showhelo _______________________________
test_anothersmtp.py:5: in test_showhelo
    assert 0,smtp_connection.helo()
E   AssertionError: (250,b'mail.python.org')
E   assert 0
------------------------- Captured stdout teardown -------------------------
finalizing <smtplib.SMTP object at 0xdeadbeef> (mail.python.org)
```
瞧！该smtp_connectionFixture方法函数从模块命名空间拿起我们的邮件服务器名称。
### Fixture作为函数工厂(译者注：Fixture返回一个函数，以支持根据参数得到不同的结果。)
“Fixture作为函数工厂”模式，可以支持在用例中根据不同的参数使用Fixture得到不同的结果。Fixture可以返回一个内部定义的函数，而不是直接返回数据，便可以在用例中使用该函数通过不同的参数获取到不同的结果。  
Fixtures工厂方法可根据需要提供参数生成Fixture和方法：
```python
@pytest.fixture
def make_customer_record():

    def _make_customer_record(name):
        return {
            "name": name,
            "orders": []
        }

    return _make_customer_record


def test_customer_records(make_customer_record):
    customer_1 = make_customer_record("Lisa")
    customer_2 = make_customer_record("Mike")
    customer_3 = make_customer_record("Meredith")
```
如果工厂创建的数据需要管理,那么Fixture方法可以处理：
```python
@pytest.fixture
def make_customer_record():

    created_records = []

    def _make_customer_record(name):
        record = models.Customer(name=name,orders=[])
        created_records.append(record)
        return record

    yield _make_customer_record

    for record in created_records:
        record.destroy()


def test_customer_records(make_customer_record):
    customer_1 = make_customer_record("Lisa")
    customer_2 = make_customer_record("Mike")
    customer_3 = make_customer_record("Meredith")
```
### Fixtures参数化
可以对Fixture方法函数进行参数化,在这种情况下,它们将被多次调用,每次执行一组相关测试,即依赖于此Fixture方法的测试。测试函数通常不需要知道它们的重新运行。Fixture方法参数化有助于为可以以多种方式配置的组件编写详尽的函数测试。  
扩展前面的示例,我们可以标记Fixture方法以创建两个smtp_connectionFixture方法实例,这将导致使用Fixture方法的所有测试运行两次。fixture函数通过特殊request对象访问每个参数：
```python
# content of conftest.py
import pytest
import smtplib

@pytest.fixture(scope="module",
                params=["smtp.gmail.com","mail.python.org"])
def smtp_connection(request):
    smtp_connection = smtplib.SMTP(request.param,587,timeout=5)
    yield smtp_connection
    print("finalizing %s" % smtp_connection)
    smtp_connection.close()
```
主要的变化是paramswith 的声明@pytest.fixture,一个值列表,每个值的Fixture方法函数将执行,并可以通过访问值request.param。没有测试函数代码需要更改。那么让我们再做一次：
```bash
$ pytest -q test_module.py
FFFF                                                                 [100%]
================================= FAILURES =================================
________________________ test_ehlo[smtp.gmail.com] _________________________

smtp_connection = <smtplib.SMTP object at 0xdeadbeef>

    def test_ehlo(smtp_connection):
        response,msg = smtp_connection.ehlo()
        assert response == 250
        assert b"smtp.gmail.com" in msg
>       assert 0  # for demo purposes
E       assert 0

test_module.py:6: AssertionError
________________________ test_noop[smtp.gmail.com] _________________________

smtp_connection = <smtplib.SMTP object at 0xdeadbeef>

    def test_noop(smtp_connection):
        response,msg = smtp_connection.noop()
        assert response == 250
>       assert 0  # for demo purposes
E       assert 0

test_module.py:11: AssertionError
________________________ test_ehlo[mail.python.org] ________________________

smtp_connection = <smtplib.SMTP object at 0xdeadbeef>

    def test_ehlo(smtp_connection):
        response,msg = smtp_connection.ehlo()
        assert response == 250
>       assert b"smtp.gmail.com" in msg
E       AssertionError: assert b'smtp.gmail.com' in b'mail.python.org\nPIPELINING\nSIZE 51200000\nETRN\nSTARTTLS\nAUTH DIGEST-MD5 NTLM CRAM-MD5\nENHANCEDSTATUSCODES\n8BITMIME\nDSN\nSMTPUTF8\nCHUNKING'

test_module.py:5: AssertionError
-------------------------- Captured stdout setup ---------------------------
finalizing <smtplib.SMTP object at 0xdeadbeef>
________________________ test_noop[mail.python.org] ________________________

smtp_connection = <smtplib.SMTP object at 0xdeadbeef>

    def test_noop(smtp_connection):
        response,msg = smtp_connection.noop()
        assert response == 250
>       assert 0  # for demo purposes
E       assert 0

test_module.py:11: AssertionError
------------------------- Captured stdout teardown -------------------------
finalizing <smtplib.SMTP object at 0xdeadbeef>
4 failed in 0.12 seconds
```
我们看到我们的两个测试函数分别针对不同的smtp_connection实例运行了两次 。另请注意,对于mail.python.org 连接,第二个测试失败,test_ehlo因为预期的服务器字符串不同于发送到服务器字符串。  
Pytest将建立一个字符串,它是用于在参数化Fixture方法,例如每个器材值测试ID test_ehlo[smtp.gmail.com]和 test_ehlo[mail.python.org]在上述实施例。这些ID可用于-k选择要运行的特定案例,并且还可以在失败时识别特定案例。运行pytest --collect-only将显示生成的ID。  
数字,字符串,布尔值和None将在测试ID中使用它们通常的字符串表示形式。对于其他对象,Pytest将根据参数名称生成一个字符串。可以使用ids关键字参数自定义测试ID中用于特定Fixture方法值的字符串 ：
```python
# content of test_ids.py
import pytest

@pytest.fixture(params=[0,1],ids=["spam","ham"])
def a(request):
    return request.param

def test_a(a):
    pass

def idfn(fixture_value):
    if fixture_value == 0:
        return "eggs"
    else:
        return None

@pytest.fixture(params=[0,1],ids=idfn)
def b(request):
    return request.param

def test_b(b):
    pass
```
上面显示了如何ids使用要使用的字符串列表或将使用fixture值调用的函数,然后必须返回要使用的字符串。在后一种情况下,如果函数返回,None则将使用pytest的自动生成的ID。  
运行上述测试会导致使用以下测试ID：
```bash
$ pytest --collect-only
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-5.x.y,py-1.x.y,pluggy-0.x.y
cachedir: $PYTHON_PREFIX/.pytest_cache
rootdir: $REGENDOC_TMPDIR
collected 10 items
<Module test_anothersmtp.py>
  <Function test_showhelo[smtp.gmail.com]>
  <Function test_showhelo[mail.python.org]>
<Module test_ids.py>
  <Function test_a[spam]>
  <Function test_a[ham]>
  <Function test_b[eggs]>
  <Function test_b[1]>
<Module test_module.py>
  <Function test_ehlo[smtp.gmail.com]>
  <Function test_noop[smtp.gmail.com]>
  <Function test_ehlo[mail.python.org]>
  <Function test_noop[mail.python.org]>

======================= no tests ran in 0.12 seconds =======================
```
### 使用参数化fixtures标记
pytest.param()可用于在参数化Fixture方法的值集中应用标记,其方式与@ pytest.mark.parametrize一样。  
例如:
```python
# content of test_fixture_marks.py
import pytest
@pytest.fixture(params=[0,1,pytest.param(2,marks=pytest.mark.skip)])
def data_set(request):
    return request.param

def test_data(data_set):
    pass
```
运行此测试将跳过data_set带值的调用2：
```bash
$ pytest test_fixture_marks.py -v
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-5.x.y,py-1.x.y,pluggy-0.x.y -- $PYTHON_PREFIX/bin/python
cachedir: $PYTHON_PREFIX/.pytest_cache
rootdir: $REGENDOC_TMPDIR
collecting ... collected 3 items

test_fixture_marks.py::test_data[0] PASSED                           [ 33%]
test_fixture_marks.py::test_data[1] PASSED                           [ 66%]
test_fixture_marks.py::test_data[2] SKIPPED                          [100%]

=================== 2 passed,1 skipped in 0.12 seconds ====================
```
### 模块化：在fixture函数中使用fixtures函数
你不仅可以在测试函数中使用Fixture方法,而且Fixture方法函数可以自己使用其他Fixture方法。这有助于你的Fixture方法的模块化设计,并允许在许多项目中重复使用特定于框架的Fixture方法。作为一个简单的例子,我们可以扩展前面的例子并实例化一个对象app,我们将已经定义的smtp_connection资源粘贴 到它中：
```python
# content of test_appsetup.py

import pytest

class App(object):
    def __init__(self,smtp_connection):
        self.smtp_connection = smtp_connection

@pytest.fixture(scope="module")
def app(smtp_connection):
    return App(smtp_connection)

def test_smtp_connection_exists(app):
    assert app.smtp_connection
```
这里我们声明一个appfixture,它接收先前定义的 smtp_connectionfixture并App用它实例化一个对象。我们来吧：
```bash
$ pytest -v test_appsetup.py
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-5.x.y,py-1.x.y,pluggy-0.x.y -- $PYTHON_PREFIX/bin/python
cachedir: $PYTHON_PREFIX/.pytest_cache
rootdir: $REGENDOC_TMPDIR
collecting ... collected 2 items

test_appsetup.py::test_smtp_connection_exists[smtp.gmail.com] PASSED [ 50%]
test_appsetup.py::test_smtp_connection_exists[mail.python.org] PASSED [100%]

========================= 2 passed in 0.12 seconds =========================
```
由于参数化smtp_connection,测试将使用两个不同的App实例和相应的smtp服务器运行两次。没有必要为appFixture方法要意识到的smtp_connection 参数化,因为pytest将全面分析Fixture方法依赖关系图。  
请注意,appFixture方法具有范围module并使用模块范围的smtp_connectionFixture方法。如果smtp_connection缓存在session范围上,该示例仍然可以工作 ：Fixture方法使用“更广泛”的范围Fixture方法,但不是相反的方式：会话范围的Fixture方法不能以有意义的方式使用模块范围的Fixture方法。
### 使用fixture实例自动组织测试用例
pytest在测试运行期间最小化活动Fixture方法的数量。如果你有一个参数化Fixture方法,那么使用它的所有测试将首先用一个实例执行,然后在创建下一个Fixture方法实例之前调用终结器。除此之外,这还可以简化对创建和使用全局状态的应用程序的测试。  
以下示例使用两个参数化Fixture方法,其中一个基于每个模块作用域,并且所有函数执行print调用以显示设置/拆卸流程：
```python
# content of test_module.py
import pytest

@pytest.fixture(scope="module",params=["mod1","mod2"])
def modarg(request):
    param = request.param
    print("  SETUP modarg %s" % param)
    yield param
    print("  TEARDOWN modarg %s" % param)

@pytest.fixture(scope="function",params=[1,2])
def otherarg(request):
    param = request.param
    print("  SETUP otherarg %s" % param)
    yield param
    print("  TEARDOWN otherarg %s" % param)

def test_0(otherarg):
    print("  RUN test0 with otherarg %s" % otherarg)
def test_1(modarg):
    print("  RUN test1 with modarg %s" % modarg)
def test_2(otherarg,modarg):
    print("  RUN test2 with otherarg %s and modarg %s" % (otherarg,modarg))
```
让我们以详细模式运行测试并查看打印输出：
```bash
$ pytest -v -s test_module.py
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-5.x.y,py-1.x.y,pluggy-0.x.y -- $PYTHON_PREFIX/bin/python
cachedir: $PYTHON_PREFIX/.pytest_cache
rootdir: $REGENDOC_TMPDIR
collecting ... collected 8 items

test_module.py::test_0[1]   SETUP otherarg 1
  RUN test0 with otherarg 1
PASSED  TEARDOWN otherarg 1

test_module.py::test_0[2]   SETUP otherarg 2
  RUN test0 with otherarg 2
PASSED  TEARDOWN otherarg 2

test_module.py::test_1[mod1]   SETUP modarg mod1
  RUN test1 with modarg mod1
PASSED
test_module.py::test_2[mod1-1]   SETUP otherarg 1
  RUN test2 with otherarg 1 and modarg mod1
PASSED  TEARDOWN otherarg 1

test_module.py::test_2[mod1-2]   SETUP otherarg 2
  RUN test2 with otherarg 2 and modarg mod1
PASSED  TEARDOWN otherarg 2

test_module.py::test_1[mod2]   TEARDOWN modarg mod1
  SETUP modarg mod2
  RUN test1 with modarg mod2
PASSED
test_module.py::test_2[mod2-1]   SETUP otherarg 1
  RUN test2 with otherarg 1 and modarg mod2
PASSED  TEARDOWN otherarg 1

test_module.py::test_2[mod2-2]   SETUP otherarg 2
  RUN test2 with otherarg 2 and modarg mod2
PASSED  TEARDOWN otherarg 2
  TEARDOWN modarg mod2


========================= 8 passed in 0.12 seconds =========================
```
你可以看到参数化模块范围的modarg资源导致测试执行的排序,从而导致尽可能少的“活动”资源。mod1参数化资源的终结器在mod2资源建立之前执行 。  
特别注意test_0是完全独立的并且首先完成。然后执行mod1test_1 mod1,然后执行test_2 ,然后执行test_1,mod2最后执行test_2 mod2。  
该otherarg参数化资源(其函数范围)是之前设置和使用它的每一个测试后撕开了下来。
### 在类/模块/项目中使用fixtures
有时,测试函数不需要直接访问Fixture方法对象。例如,测试可能需要使用空目录作为当前工作目录,但不关心具体目录。以下是如何使用标准tempfile和pytest fixture来实现它。我们将fixture的创建分成conftest.py文件：
```python
# content of conftest.py

import pytest
import tempfile
import os

@pytest.fixture()
def cleandir():
    newpath = tempfile.mkdtemp()
    os.chdir(newpath)
```
并通过usefixtures标记在测试模块中声明它的使用方法：
```python
# content of test_setenv.py
import os
import pytest

@pytest.mark.usefixtures("cleandir")
class TestDirectoryInit(object):
    def test_cwd_starts_empty(self):
        assert os.listdir(os.getcwd()) == []
        with open("myfile","w") as f:
            f.write("hello")

    def test_cwd_again_starts_empty(self):
        assert os.listdir(os.getcwd()) == []
```
由于usefixtures标记,cleandir每个测试用例的执行都需要Fixture方法,就像为每个测试用例指定一个“cleandir”函数参数一样。让我们运行它来验证我们的Fixture方法是否已激活且测试通过：
```bash
$ pytest -q
..                                                                  [100%]
2 passed in 0.12 seconds
```
你可以像这样指定多个Fixture方法：
```python
@pytest.mark.usefixtures("cleandir","anotherfixture")
def test():
    ...
```
你可以使用标记机制的通用函数在测试模块级别指定Fixture方法使用情况：
```python
pytestmark = pytest.mark.usefixtures("cleandir")
```
请注意,必须调用指定的变量pytestmark,分配例如 foomark不会激活Fixture方法。  
也可以将项目中所有测试所需的Fixture方法放入ini文件中：
```bash
 content of pytest.ini
[pytest]
usefixtures = cleandir
```
> 警告
> 请注意,此标记对Fixture方法函数没有影响。例如,这将无法按预期工作：

@pytest.mark.usefixtures("my_other_fixture")  
@pytest.fixture  
def my_fixture_that_sadly_wont_use_my_other_fixture():  
...  
目前,这不会产生任何错误或警告,但这应由＃3664处理。
### 自动使用fixtures(xUnit 框架的setup固定方法)
有时,你可能希望自动调用fixture,而无需显式声明函数参数或使用usefixtures装饰器。作为一个实际的例子,假设我们有一个数据库fixture,它有一个开始/回滚/提交架构,我们希望通过事务和回滚自动包围每个测试用例。以下是这个想法的虚拟自包含实现：
```python
# content of test_db_transact.py

import pytest

class DB(object):
    def __init__(self):
        self.intransaction = []
    def begin(self,name):
        self.intransaction.append(name)
    def rollback(self):
        self.intransaction.pop()

@pytest.fixture(scope="module")
def db():
    return DB()

class TestClass(object):
    @pytest.fixture(autouse=True)
    def transact(self,request,db):
        db.begin(request.function.__name__)
        yield
        db.rollback()

    def test_method1(self,db):
        assert db.intransaction == ["test_method1"]

    def test_method2(self,db):
        assert db.intransaction == ["test_method2"]
```
类级别的transactfixture用autouse = true标记, 这意味着类中的所有测试用例都将使用此fixture而无需在测试函数签名中或使用类级usefixtures装饰器进行陈述。  
如果我们运行它,我们得到两个通过测试：
```bash
$ pytest -q
..                                                                  [100%]
2 passed in 0.12 seconds
```
以下是autouseFixture方法在其他范围内的工作原理：

- autouse fixtures服从scope=关键字参数：如果autouse fixture具有scope='session'它,它将只运行一次,无论它在何处定义。scope='class'意味着它将每班运行一次,等等。
- 如果在测试模块中定义了autouse fixture,则其所有测试函数都会自动使用它。
- 如果在conftest.py文件中定义了autouse fixture,那么其目录下所有测试模块中的所有测试都将调用fixture。
- 最后,请谨慎使用：如果你在插件中定义了autouse fixture,则会在安装插件的所有项目中为所有测试调用它。如果Fixture方法仅在任何情况下在某些设置(例如ini文件中)的情况下工作,则这可能是有用的。这样的全局Fixture方法应该总是快速确定它是否应该做任何工作并避免昂贵的进口或计算。

请注意,上述transactFixture方法很可能是你希望在项目中可用的Fixture方法,而不是通常处于活动状态。规范的方法是将transact定义放入conftest.py文件中,而不使用autouse：
```python
# content of conftest.py
@pytest.fixture
def transact(request,db):
    db.begin()
    yield
    db.rollback()
然后让一个TestClass通过声明需要使用它：

@pytest.mark.usefixtures("transact")
class TestClass(object):
    def test_method1(self):
        ...
```
此TestClass中的所有测试用例都将使用事务Fixture方法,而模块中的其他测试类或函数将不使用它,除非它们还添加transact引用。
### 不同级别的fixtures的覆盖(优先级)
相对于在较大范围的测试套件中的Test Fixtures方法,在较小范围子套件你可能需要重写和覆盖外层的Test Fixtures方法,从而保持测试代码的可读性和可维护性。
#### 在文件夹级别(通过conftest文件)重写fixtures方法
假设用例目录结构为:
```python
tests/
    __init__.py

    conftest.py
        # content of tests/conftest.py
        import pytest

        @pytest.fixture
        def username():
            return 'username'

    test_something.py
        # content of tests/test_something.py
        def test_username(username):
            assert username == 'username'

    subfolder/
        __init__.py

        conftest.py
            # content of tests/subfolder/conftest.py
            import pytest

            @pytest.fixture
            def username(username):
                return 'overridden-' + username

        test_something.py
            # content of tests/subfolder/test_something.py
            def test_username(username):
                assert username == 'overridden-username'
```
你可以看到,基础/上级fixtures方法可以通过子文件夹下的conftest.py中同名的fixtures方法覆盖,非常简单,只需要按照上面的例子使用即可.
#### 在测试模块级别重写fixtures方法
假设用例文件结构如下:
```python
tests/
    __init__.py

    conftest.py
        # content of tests/conftest.py
        @pytest.fixture
        def username():
            return 'username'

    test_something.py
        # content of tests/test_something.py
        import pytest

        @pytest.fixture
        def username(username):
            return 'overridden-' + username

        def test_username(username):
            assert username == 'overridden-username'

    test_something_else.py
        # content of tests/test_something_else.py
        import pytest

        @pytest.fixture
        def username(username):
            return 'overridden-else-' + username

        def test_username(username):
            assert username == 'overridden-else-username'
```
上面的例子中,用例模块(文件)中的fixture方法会覆盖文件夹conftest.py中同名的fixtures方法
#### 在直接参数化方法中覆盖fixtures方法
假设用例文件结构为:
```python
tests/
    __init__.py

    conftest.py
        # content of tests/conftest.py
        import pytest

        @pytest.fixture
        def username():
            return 'username'

        @pytest.fixture
        def other_username(username):
            return 'other-' + username

    test_something.py
        # content of tests/test_something.py
        import pytest

        @pytest.mark.parametrize('username',['directly-overridden-username'])
        def test_username(username):
            assert username == 'directly-overridden-username'

        @pytest.mark.parametrize('username',['directly-overridden-username-other'])
        def test_username_other(other_username):
            assert other_username == 'other-directly-overridden-username-other'
```
在上面的示例中,username fixture方法的结果值被参数化值覆盖。 请注意,即使测试不直接使用(也未在函数原型中提及),也可以通过这种方式覆盖fixture的值。
#### 使用非参数化fixture方法覆盖参数化fixtures方法,反之亦然
假设用例结构为:
```python
tests/
    __init__.py

    conftest.py
        # content of tests/conftest.py
        import pytest

        @pytest.fixture(params=['one','two','three'])
        def parametrized_username(request):
            return request.param

        @pytest.fixture
        def non_parametrized_username(request):
            return 'username'

    test_something.py
        # content of tests/test_something.py
        import pytest

        @pytest.fixture
        def parametrized_username():
            return 'overridden-username'

        @pytest.fixture(params=['one','two','three'])
        def non_parametrized_username(request):
            return request.param

        def test_username(parametrized_username):
            assert parametrized_username == 'overridden-username'

        def test_parametrized_username(non_parametrized_username):
            assert non_parametrized_username in ['one','two','three']

    test_something_else.py
        # content of tests/test_something_else.py
        def test_username(parametrized_username):
            assert parametrized_username in ['one','two','three']

        def test_username(non_parametrized_username):
            assert non_parametrized_username == 'username'
```
在上面的示例中,使用非参数化fixture方法覆盖参数化fixture方法,以及使用参数化fixture覆盖非参数化fixture以用于特定测试模块。 这同样适用于文件夹级别的fixtures方法
