# Pytest笔记：测试用例的执行


### Pytest 的 Exit Code 含义清单

---

- Exit code 0 所有用例执行完毕，全部通过
- Exit code 1 所有用例执行完毕，存在Failed的测试用例
- Exit code 2 用户中断了测试的执行
- Exit code 3 测试执行过程发生了内部错误
- Exit code 4 pytest 命令行使用错误
- Exit code 5 未采集到可用测试用例文件


### 如何获取帮助信息

查看 pytest 版本

```
pytest --version
```

显示可用的内置函数参数

```
pytest --fixtures
```

通过命令行查看帮助信息及配置文件选项

```
pytest --help
```


### 在第N个用例失败后，结束测试执行

```
pytest -x                    # 第01次失败，就停止测试
pytest --maxfail=2     # 出现2个失败就终止测试
```


### 执行特定用例

---


#### 指定测试模块

```
pytest test_mod.py
```


#### 指定测试目录

```
pytest testing/
```


#### 通过关键字表达式过滤执行

```
pytest -k "MyClass and not method"
```

这条命令会匹配文件名、类名、方法名匹配表达式的用例，这里这条命令会运行 TestMyClass.test_something， 不会执行 TestMyClass.test_method_simple


#### 通过 node id 指定测试用例

nodeid由模块文件名、分隔符、类名、方法名、参数构成，举例如下：  
运行模块中的指定用例

```
pytest test_mod.py::test_func
```

运行模块中的指定方法

```
pytest test_mod.py::TestClass::test_method
```


### 通过标记表达式执行

```
pytest -m slow
```

这条命令会执行被装饰器 [@pytest.mark.slow ](/pytest.mark.slow ) 装饰的所有测试用例 


### 通过包执行测试

```
pytest --pyargs pkg.testing
```

这条命令会自动导入包 pkg.testing，并使用该包所在的目录，执行下面的用例


## 修改 Python traceback 输出

```
pytest --showlocals     # show local variables in tracebacks
pytest -l               # show local variables (shortcut)
pytest --tb=auto        # (default) 'long' tracebacks for the first and last
                        # entry, but 'short' style for the other entries
pytest --tb=long        # exhaustive, informative traceback formatting
pytest --tb=short       # shorter traceback format
pytest --tb=line        # only one line per failure
pytest --tb=native      # Python standard library formatting
pytest --tb=no          # no traceback at all
```

--full-trace 参数会打印更多的错误输出信息，比参数 --tb=long 还多，即使是 Ctrl+C 触发的错误，也会打印出来


## 执行失败的时候跳转到 PDB

执行用例的时候，跟参数 --pdb，这样失败的时候，每次遇到失败，会自动跳转到 PDB

```
pytest --pdb              # 每次遇到失败都跳转到 PDB
pytest -x --pdb           # 第一次遇到失败就跳转到 PDB，结束测试执行
pytest --pdb --maxfail=3  # 只有前三次失败跳转到 PDB
```


## 设置断点

在用例脚本中加入如下python代码，pytest会自动关闭执行输出的抓取，这里，其他test脚本不会受到影响，带断点的test上一个test正常输出

```
import pdb; pdb.set_trace()
```


## 获取用例执行性能数据

获取最慢的10个用例的执行耗时

```
pytest --durations=10
```


## 生成 JUnitXML 格式的结果文件

这种格式的结果文件可以被Jenkins或其他CI工具解析

```
pytest --junitxml=path
```


## 禁用插件

例如，关闭 doctest 插件

```
pytest -p no:doctest
```


## 从Python代码中调用pytest

```
pytest.main()                      # 基本用法
pytest.main(['-x', 'mytestdir'])   # 传入配置参数


// 指定自定义的或额外的插件
# content of myinvoke.py
import pytest
class MyPlugin(object):
    def pytest_sessionfinish(self):
        print("*** test run reporting finishing")

pytest.main(["-qq"], plugins=[MyPlugin()])
```


## 测试脚本迁移后快速部署包含pytest的virtualenv

例如你从Gitlab仓库里clone了项目组的刀刀同学编写的测试脚本到你自己的电脑里，你想修改些东西，并调试，咋办？可以通过下面的操作快速创建 VirtualEnv

```
cd <repository>
pip install -e .
```

This will set up a symlink to your code in site-packages, allowing you to edit your code while  
your tests run against it as if it were installed.  
Setting up your project in development mode lets you avoid having to reinstall every time you want to run your tests,  
and is less brittle than mucking about with sys.path to point your tests at local code.  
Also consider using tox

> 原文链接：[https://www.jianshu.com/p/9982abb9942c](https://www.jianshu.com/p/9982abb9942c)
> 作者：半个王国

