# Pytest权威教程09-捕获标准输出及标准错误输出

### 默认 stdout/stderr/stdin 捕获行为
在测试执行期间,程序中的标准输出/标准错误输出都会被捕获到。 如果测试或setup方法执行失败时,会在报错追溯信息中查看到程序中的标准输出及标准错误输出。(可以通过`--show-capture`命令行选项配置是否捕获程序中的标准输出/标准错误输出)。  
此外,`stdin`被设置为“null”对象,测试运行过程中无法从中读取数据,因为在运行自动化测试时很少需要等待交互式输入。  
捕获默认是通过拦截对低优先级文件描述符的写入来完成的。 这允许捕获简单print语句的输出以及测试启动的子进程的输出。
### 设置捕获方法或禁用捕获
`pytest`可以通过两种方式捕获输出：

- 文件描述符(FD)级别捕获(默认)：将捕获进入操作系统文件描述符1和2的所有写入。
- `sys`级别捕获：仅捕获Python文件`sys.stdout`和`sys.stderr`。 不执行对文件描述符的写入捕获。

你可以在命令行中指定不同的参数来使用不同的捕获机制：
```bash
pytest -s            # 禁止捕获所有输出
pytest --capture=sys # 使用in-mem文件代替sys.stdout/stderr with 
pytest --capture=fd  # 同时将filedescriptors 1和2指向临时文件
```
### 调试中使用print语句
默认捕获stdout / stderr输出的一个主要好处是可以使用print语句进行调试：
```python
# test_module.py文件内容

def setup_function(function):
    print("setting up %s" % function)

def test_func1():
    assert True

def test_func2():
    assert False
```
运行此模块将只捕获失败用例相关的print信息,而不显示成功用例的print信息：
```bash
$ pytest
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-4.x.y,py-1.x.y,pluggy-0.x.y
rootdir: $REGENDOC_TMPDIR,inifile:
collected 2 items

test_module.py .F                                                    [100%]

================================= FAILURES =================================
________________________________ test_func2 ________________________________

    def test_func2():
>       assert False
E       assert False

test_module.py:9: AssertionError
-------------------------- Captured stdout setup ---------------------------
setting up <function test_func2 at 0xdeadbeef>
==================== 1 failed,1 passed in 0.12 seconds ====================
```
### 在测试用例中使用的捕获的输出
`capsys`,`capsysbinary`,`capfd`和`capfdbinary fixture`允许访问在测试执行期间创建的`stdout` / `stderr`输出。 下面是一个测试函数示例,它执行一些与输出相关的检查：
```python
def test_myoutput(capsys):  # or use "capfd" for fd-level
    print("hello")
    sys.stderr.write("world\n")
    captured = capsys.readouterr()
    assert captured.out == "hello\n"
    assert captured.err == "world\n"
    print("next")
    captured = capsys.readouterr()
    assert captured.out == "next\n"
```
`readouterr()`调用时首先对输出流建立快照 - 并继续捕获输出,然后在该测试用例执行完成后,恢复原始输出流。而通过使用`capsys`可以避免在执行每个测试用例时都进行一次设置/重置输出流,并且还可以与pytest每次测试用例执行时捕获的输出信息进行交互。  
如果要在`filedescriptor`级别捕获,可以使用`capfd fixture`,它提供完全相同的接口,但也允许捕获直接写入操作系统级输出流(FD1和FD2)的库或子进程的输出流中。  
_3.3版本新函数_  
`readouterr`的返回值更改为具有两个属性`out`和`err`的`namedtuple`。  
_3.3版本新函数_  
如果测试中的代码写入了非文本数据,则可以使用`capsysbinary fixture`来捕获它,而后者会从`readouterr`方法返回字节。 `capfsysbinary fixture`目前仅在Python 3中可用。  
_3.0版本新函数_  
要暂时禁用测试中的捕获,`capsys`和`capfd`都有一个`disabled()`方法,可以用作上下文管理器,禁用with块内的捕获：
```python
def test_disabling_capturing(capsys):
    print("输出被捕获到了")
    with capsys.disabled():
        print("输出未捕获到,直接使用sys.stdout标准输出")
    print("这个输出也被捕获到了")
```
