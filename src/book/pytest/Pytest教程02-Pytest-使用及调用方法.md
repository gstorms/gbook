# Pytest权威教程02-Pytest-使用及调用方法

## 使用python -m pytest调用pytest  

_2.0版本新增_  

你可以在命令行中通过Python编译器来调用Pytest执行测试:
```bash
python -m pytest [...]
```
通过`python`调用会将当前目录也添加到`sys.path`中,除此之外,这几乎等同于命令行直接调用`pytest [...]`。
### 可能出现的执行退出code
执行`pytest`可能会出现6中不同的退出code:

- **退出code 0**: 收集并成功通过所有测试用例
- **退出code 1**: 收集并运行了测试,部分测试用例执行失败
- **退出code 2**: 测试执行被用户中断
- **退出code 3**: 执行测试中发生内部错误
- **退出code 4**: pytest命令行使用错误
- **退出code 5**: 没有收集到测试用例
### 获取版本路径、命令行选项及环境变量相关帮助
```bash
pytest --version   # 显示pytest导入位置
pytest --fixtures  # 显示可用的内置方法参数
pytest -h --help # 显示命令行及配置文件选项帮助信息
```
### 第1(N)次失败后停止测试
在第1(N)次用例失败后停止测试执行：
```bash
pytest -x            # 第1次失败后停止
pytest --maxfail=2    # 2次失败后停止
```
### 指定及选择测试用例
Pytest支持多种从命令行运行和选择测试用例的方法。  

**运行模块内所有用例**  

```
pytest test_mod.py

```
**运行目录内所有用例**
```bash
pytest test_mod.py
```
**按关键字表达式运行用例**
```bash
pytest -k "MyClass and not method"
```
这将运行包含与指定表达式匹配的名称的测试用例,其中可以包括文件名、类名和函数名作为变量,并且支持Python运算符(and和or)操作。上面的示例将运行`TestMyClass.test_something`但不运行`TestMyClass.test_method_simple`。  
**按节点id运行测试**  
每次执行收集到的测试用例集合都会被分配一个唯一的`nodeid`,其中包含模块文件名,后跟说明符,如类名、函数名及参数,由`::` 字符分隔。  
执行模块中某条指定的测试用例如:
```bash
pytest test_mod.py::test_func
```
另一个通过命令行挑选所执行测试用例的示例如:
```bash
pytest test_mod.py::TestClass::test_method
```
**通过标记(Mark)表达式运行测试**
```bash
pytest -m slow
```
这将会执行所有带`@pytest.mark.slow`装饰器的用例。
> 有关更多信息,请参阅: 标记

**从包中运行测试**
```bash
pytest --pyargs pkg.testing
```
这将会导入`pkg.testing`并使用其文件系统位置来查找和运行测试。
### 修改Python原生追溯(traceback)信息
修改回追溯信息示例如:
```bash
pytest --showlocals # 在追溯信息中显示局部变量
pytest -l           # 显示局部变量 (简写)

pytest --tb=auto    # (默认) 第1和最后1条使用详细追溯信息,其他使用简短追溯信息

pytest --tb=long    # 详尽,信息丰富的追溯信息格式
pytest --tb=short   # 简短的追溯信息格式
pytest --tb=line    # 每个失败信息一行
pytest --tb=native  # Python标准库格式
pytest --tb=no      # 不使用追溯信息
```
### 详尽的测试结果摘要
_2.9版本新增_  
`-r`标志可用于在测试会话结束时显示测试结果摘要,从而可以在拥有大量用例的测试套件中轻松获得所有失败、跳过、标记失败(xfails)等测试结果的清晰描述。  
例如：
```bash
$ pytest -ra
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-3.x.y,py-1.x.y,pluggy-0.x.y
rootdir: $REGENDOC_TMPDIR,inifile:
collected 0 items

======================= no tests ran in 0.12 seconds =======================
```
`-r`选项接受后面的多个字符,上面使用的`a`表示“除了执行通过(Pass)以外所有的结果”。  
以下是可以使用的可用字符的完整列表：  
-`f` - 失败的用例  
-`E` - 出错的用例  
-`s` - 跳过的用例  
-`x` - 标记失败的用例  
-`X` - 标记成功的用例  
-`p` - 成功用例  
-`P` - 成功用例并输出信息  
-`a` - 所有`pP`状态以外的用例  
可以使用多个字符,例如,只查看失败和跳过的用例,你可以执行：
```bash
$ pytest -rfs
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-3.x.y,py-1.x.y,pluggy-0.x.y
rootdir: $REGENDOC_TMPDIR,inifile:
collected 0 items

======================= no tests ran in 0.12 seconds =======================
```
### 执行失败时进入PDB(Python调试器)
Python附带一个名为PDB的内置Python调试器。 pytest允许通过命令行选项进入PDB提示符：
```bash
pytest --pdb
```
这将在每次失败(或KeyboardInterrupt)时调用Python调试器。一般,你可能只希望在第一次失败的测试中执行此操作以了解某种故障情况：
```bash
pytest -x --pdb   # 在第一次用例失败时进入PDB
pytest --pdb --maxfail=3  # 在前3次失败是进入PDB
```
注意,在任何失败时,异常信息都存储在`sys.last_value1,1sys.last_type1和1sys.last_traceback1中。在交互模式中,这允许用户使用任何调试工具进行事后调试。也可以手动访问异常信息,例如：
```bash
>>> import sys
>>> sys.last_traceback.tb_lineno
42
>>> sys.last_value
AssertionError('assert result == "ok"',)
```
### 测试开始时进入PDB(Python调试器)
`pytest`允许用户通过命令行选项在每次测试开始时立即进入PDB提示符：
```bash
pytest --trace
```
这将在每次测试开始时调用Python调试器。
### 设置断点
要在代码中设置断点,需要在代码中使用Python原生`import pdb; pdb.set_trace()`进行调用,Pytest会自动禁用显示print输出, 并捕获该用例输出结果：

- 其他测试中的输出捕获不受影响。
- 任何先前的测试输出已经被捕获并将被处理。
- 在同一测试中生成的任何后续输出都不会被捕获,而是直接发送到`sys.stdout`。注意：即使是退出交互式PDB跟踪会话并继续常规测试后发生的测试输出,这也适用。
### 使用内置断点方法
Python 3.7引入了内置`breakpoint()`函数。 Pytest支持以下几种使用`breakpoint()`的方式：

- 当`PYTHONBREAKPOINT`设置为默认值,调用`breakpoint()`时,pytest将使用其内部PDB跟踪交互界面(PDB trace UI)而不是Python自带的`pdb`。
- 测试完成后,默认会重置为Python自带的PDB跟踪交互界面。
- 在pytest后使用`--pdb`参数,在失败的测试/未处理异常中,pytest内部PDB跟踪交互界面与`breakpoint()`同时使用。
- `--pdbcls`参数可指定要使用的调试器类。
### 分析测试用例执行时间
显示执行最慢的10条测试用例如:
```bash
pytest --durations=10
```
默认情况下,Pytest不会显示<0.01s的测试时间, 除非在命令行上传递`-vv`。
### 创建JUnit XML格式的测试报告
要创建可由Jenkins或其他持续集成软件读取的XML测试报告,可以使用：
```bash
pytest --junitxml=path
```
运行结束后,在指定路径`path`下创建一个XML报告文件  
_3.1版本新增_  
可以通过修改配置中`junit_suite_name`字段的名称来更改XML报告中`root test suite`的名称。
```bash
[pytest]
junit_suite_name = my_suite
```
**record_property(添加新属性)**  
_版本2.8新增_  
_版本3.5更改_: 在所有报告生成器(reporter)中用户属性`record_xml_property`项已改为`record_property`,`record_xml_property`现已弃用。  
可以使用`record_property`项来在XML报告中增加更多的日志信息：
```python
def test_function(record_property):
    record_property("example_key",1)
    assert True
```
在生成的`testcase`标签是会添加一个额外的属性`example_key="1"`：
```xml
<testcase classname="test_function" file="test_function.py" line="0" name="test_function" time="0.0009">
  <properties>
    <property name="example_key" value="1" />
  </properties>
</testcase>
```
或者,你可以将此函数集成在自定义标记装饰器中：
```python
# conftest.py文件内容

def pytest_collection_modifyitems(session,config,items):
    for item in items:
        for marker in item.iter_markers(name="test_id"):
            test_id = marker.args[0]
            item.user_properties.append(("test_id",test_id))
```
在你的测试用例中使用：
```python
# test_function.py文件内容
import pytest

@pytest.mark.test_id(1501)
def test_function():
    assert True
```
这将导致：
```xml
<testcase classname="test_function" file="test_function.py" line="0" name="test_function" time="0.0009">
  <properties>
    <property name="test_id" value="1501" />
  </properties>
</testcase>
```
> **警告：**  
> `record_property`是一个实验性函数,将来可能会发生变化。  
> 另外,这将破坏一些XML结构验证,与某些持续集成软件一起使用时,可能会导致一些问题。

**record_xml_attribute(修改xml节点属性)**  
_3.4版本新增_  
可以使用`record_xml_attribute fixture向`testcase`标签中添加其他xml属性。也可以用来覆盖原有属性值：
```python
def test_function(record_xml_attribute):
    record_xml_attribute("assertions","REQ-1234")
    record_xml_attribute("classname","custom_classname")
    print("hello world")
    assert True
```
与`record_property`不同, 它不会在节点下添加子元素,而是在生成的`testcase`标签内添加一个属性`assertions ="REQ-1234"`,并使用`classname = custom_classname`覆盖默认的`classname`属性：
```xml
<testcase classname="custom_classname" file="test_function.py" line="0" name="test_function" time="0.003" assertions="REQ-1234">
    <system-out>
        hello world
    </system-out>
</testcase>
```
> **警告：**
> `record_xml_attribute`也是一个实验性函数,其界面可能会被更强大,更通用的未来版本所取代。但是,将保留函数本身。

通过使用`record_xml_property`可以为在使用持续集成工具解析xml报告时提供帮助。 但是,一些解析器对允许的元素和属性非常严格。 许多工具使用xsd模式(如下例所示)来验证传入的xml。 确保使用解析器允许的属性名称。  
以下是Jenkins用于验证xml报告的结构：
```xml
<xs:element name="testcase">
    <xs:complexType>
        <xs:sequence>
            <xs:element ref="skipped" minOccurs="0" maxOccurs="1"/>
            <xs:element ref="error" minOccurs="0" maxOccurs="unbounded"/>
            <xs:element ref="failure" minOccurs="0" maxOccurs="unbounded"/>
            <xs:element ref="system-out" minOccurs="0" maxOccurs="unbounded"/>
            <xs:element ref="system-err" minOccurs="0" maxOccurs="unbounded"/>
        </xs:sequence>
        <xs:attribute name="name" type="xs:string" use="required"/>
        <xs:attribute name="assertions" type="xs:string" use="optional"/>
        <xs:attribute name="time" type="xs:string" use="optional"/>
        <xs:attribute name="classname" type="xs:string" use="optional"/>
        <xs:attribute name="status" type="xs:string" use="optional"/>
    </xs:complexType>
</xs:element>
```
**LogXML: add_global_property**  

_3.0版本新增_  

如果要在`testsuite`级别添加属性节点,该节点可能包含与所有测试用例相关的属性,则可以使用`LogXML.add_global_properties`
```python
import pytest


@pytest.fixture(scope="session")
def log_global_env_facts(f):

    if pytest.config.pluginmanager.hasplugin("junitxml"):
        my_junit = getattr(pytest.config,"_xml",None)

    my_junit.add_global_property("ARCH","PPC")
    my_junit.add_global_property("STORAGE_TYPE","CEPH")

@pytest.mark.usefixtures(log_global_env_facts.__name__)
def start_and_prepare_env():
    pass

class TestMe(object):
    def test_foo(self):
        assert True
```
这会在生成的xml中的`testsuite`节点下的属性节中添加：
```xml
<testsuite errors="0" failures="0" name="pytest" skips="0" tests="1" time="0.006">
  <properties>
    <property name="ARCH" value="PPC"/>
    <property name="STORAGE_TYPE" value="CEPH"/>
  </properties>
  <testcase classname="test_me.TestMe" file="test_me.py" line="16" name="test_foo" time="0.000243663787842"/>
</testsuite>
```
> **警告：**
> 这依然是一个实验性的函数,其界面也可能会被更强大,更通用的未来版本所取代, 但也将保留该函数。

### 创建结果日志格式文件
_3.0版本_之后不推荐使用,计划在`4.0版本`中删除。  
对于仍然需要类似函数的用户来说,可以使用提供测试数据流的`pytest-tap`插件。  
如有任何疑虑,可以[建立一个问题(open an issue)。
```bash
pytest --resultlog=path
```
执行后,在`path`路径中会创建一个纯文本结果日志文件,这些文件可以用于：例如,在`PyPy-test`网页显示多个修订版的测试结果。
### 将测试报告发送到在线pastebin服务
**为每条测试失败用例建立一个日志URL链接：**
```bash
pytest --pastebin=failed
```
这会将测试运行信息提交到一个提供粘贴服务的远程服务器上,并为每条测试失败用例提供一个URL。 你可以像平常一样查看搜集结果,或者使用`-x`参数,来只显示某个特定的测试失败结果。  
**为整个测试执行日志建立一个URL链接：**
```bash
pytest --pastebin=all
```
目前只实现了粘贴到[http://bpaste.net](http://bpaste.net)网站的服务。
### 禁用插件
可以通过`-p`选项与前缀`no:`一起使用,来在运行时禁用加载特定插件。  
例如：要禁用加载从文本文件执行doctest测试的`doctest`插件,可以通过以下方式运行Pytest：
```bash
pytest -p no:doctest
```
### 在Python代码调用pytest
_版本2.0新增_  
你可以在Python代码中直接调用pytest:
```python
pytest.main()
```
这就和你从命令行调用“pytest”一样。但它不会引发`SystemExit`,而是返回`exitcode`。 你可以传入选项和参数。
```python
pytest.main(['-x','mytestdir'])
```
你可以为`pytest.main`指定其他插件：
```python
# myinvoke.py文件内容
import pytest
class MyPlugin(object):
    def pytest_sessionfinish(self):
        print("*** test run reporting finishing")

pytest.main(["-qq"],plugins=[MyPlugin()])
```
运行它将显示已添加MyPlugin并调用其中的hook方法：
```bash
$ python myinvoke.py
.                                                                   [100%]
*** test run reporting finishing
```
> **注意:**
> 调用`pytest.main()`将会导入所有测试用例及其导入的其他模块。由于python导入系统的缓存机制,从同一进程后续调用`pytest.main()`不会反映调用之间对这些文件的更改。 因此,不建议从同一进程(例如,为了新运行测试)多次调用`pytest.main()`。

