
## 前言
- pytest.mark.skip  可以标记无法在某些平台上运行的测试功能，戒者您希望失败的测试功能
- 希望满足某些条件才执行某些测试用例，否则pytest会跳过运行该测试用例
- 实际常见场景：跳过非Windows平台上的仅Windows测试，或者跳过依赖于当前不可用的外部资源（例如数据库）的测试

 

## @pytest.mark.skip
跳过执行测试用例，有可选参数reason：跳过的原因，会在执行结果中打印

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
__title__  = 
__Time__   = 2020/4/9 13:49
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
import pytest


@pytest.fixture(autouse=True)
def login():
    print("====登录====")
   

def test_case01():
    print("我是测试用例11111")
    
    
@pytest.mark.skip(reason="不执行该用例！！因为没写好！！")
def test_case02():
    print("我是测试用例22222")
    
    
class Test1:
    def test_1(self):
        print("%% 我是类测试用例1111 %%")
        
    @pytest.mark.skip(reason="不想执行")
    def test_2(self):
        print("%% 我是类测试用例2222 %%")
        
        
@pytest.mark.skip(reason="类也可以跳过不执行")
class TestSkip:
    def test_1(self):
        print("%% 不会执行 %%")
```

### 执行结果
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200409140037005-2099522412.png)

### 知识点

- @pytest.mark.skip 可以加在函数上，类上，类方法上
- 如果加在类上面，类里面的所有测试用例都不会执行
- 以上小案例都是针对：整个测试用例方法跳过执行，**如果想在测试用例执行期间跳过不继续往下执行呢？**

 

## pytest.skip()函数基础使用
**作用：**在测试用例执行期间强制跳过不再执行剩余内容  
**类似：**在Python的循环里面，满足某些条件则break 跳出循环

```python
def test_function():
    n = 1
    while True:
        print(f"这是我第{n}条用例")
        n += 1
        if n == 5:
            pytest.skip("我跑五次了不跑了")
```

### 执行结果
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200409140933987-1689454456.png)  
 

## pytest.skip(msg="",allow_module_level=False)
当 allow_module_level=True 时，可以设置在模块级别跳过整个模块

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
__title__  = 
__Time__   = 2020/4/9 13:49
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
import sys
import pytest
if sys.platform.startswith("win"):
    pytest.skip("skipping windows-only tests", allow_module_level=True)
@pytest.fixture(autouse=True)
def login():
    print("====登录====")
def test_case01():
    print("我是测试用例11111")
```

### 执行结果

```bash
collecting ... 
Skipped: skipping windows-only tests
collected 0 items / 1 skipped
============================= 1 skipped in 0.15s ==============================
```
 

## @pytest.mark.skipif(condition, reason="")
**作用：**希望有条件地跳过某些测试用例  
**注意：**condition需要返回True才会跳过

```python
@pytest.mark.skipif(sys.platform == 'win32', reason="does not run on windows")
class TestSkipIf(object):
    def test_function(self):
        print("不能在window上运行")
```

### 执行结果

```bash
collecting ... collected 1 item
07skip_sipif.py::TestSkipIf::test_function SKIPPED                       [100%]
Skipped: does not run on windows
============================= 1 skipped in 0.04s ==============================
```
 

## 跳过标记

- 可以将 pytest.mark.skip 和 pytest.mark.skipif 赋值给一个标记变量
- 在不同模块之间共享这个标记变量
- 若有多个模块的测试用例需要用到相同的 skip 或 skipif ，可以用一个单独的文件去管理这些通用标记，然后适用于整个测试用例集

```python
# 标记
skipmark = pytest.mark.skip(reason="不能在window上运行=====")
skipifmark = pytest.mark.skipif(sys.platform == 'win32', reason="不能在window上运行啦啦啦=====")

@skipmark
class TestSkip_Mark(object):
    @skipifmark
    def test_function(self):
        print("测试标记")
    def test_def(self):
        print("测试标记")
@skipmark
def test_skip():
    print("测试标记")
```

### 执行结果

```bash
collecting ... collected 3 items
07skip_sipif.py::TestSkip_Mark::test_function SKIPPED                    [ 33%]
Skipped: 不能在window上运行啦啦啦=====
07skip_sipif.py::TestSkip_Mark::test_def SKIPPED                         [ 66%]
Skipped: 不能在window上运行=====
07skip_sipif.py::test_skip SKIPPED                                       [100%]
Skipped: 不能在window上运行=====
============================= 3 skipped in 0.04s ==============================
```
 

## pytest.importorskip( modname: str, minversion: Optional[str] = None, reason: Optional[str] = None )
**作用：**如果缺少某些导入，则跳过模块中的所有测试  
**参数列表**

- modname：模块名
- minversion：版本号
- reasone：跳过原因，默认不给也行

```python
pexpect = pytest.importorskip("pexpect", minversion="0.3")
@pexpect
def test_import():
    print("test")
```

### 执行结果一：如果找不到module

```python
Skipped: could not import 'pexpect': No module named 'pexpect'
collected 0 items / 1 skipped
```
 

### 执行结果一：如果版本对应不上

```python
Skipped: module 'sys' has __version__ None, required is: '0.3'
collected 0 items / 1 skipped
```
> 转载：[https://www.cnblogs.com/poloyy/p/12666682.html](https://www.cnblogs.com/poloyy/p/12666682.html)

