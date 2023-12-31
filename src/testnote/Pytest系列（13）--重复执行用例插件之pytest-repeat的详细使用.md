
## 前言
- 平常在做功能测试的时候，经常会遇到某个模块不稳定，偶然会出现一些bug，对于这种问题我们会针对此用例反复执行多次，最终复现出问题来
- 自动化运行用例时候，也会出现偶然的bug，可以针对单个用例，或者针对某个模块的用例重复执行多次

## 环境前提

- Python 2.7、3.4+或PyPy
- py.test 2.8或更高版本

 

## 安装插件

```bash
pip3 install pytest-repeat -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
```
 

## 快速入门
结合之前讲到的失败重跑、输出html报告插件来敲命令行  
两种方式皆可，等号或空格

- count=2
- count 2


```bash
pytest --html=report.html --self-contained-html  -s --reruns=5 --count=2 10fixture_request.py
```
 

## 重复测试直到失败（重点！）

- 如果需要验证偶现问题，可以一次又一次地运行相同的测试直到失败，这个插件将很有用
- 可以将pytest的 -x 选项与pytest-repeat结合使用，以强制测试运行程序在第一次失败时停止


```bash
py.test --count=1000 -x test_file.py
```
 

### 小栗子

```python
def test_example():
    import random
    flag = random.choice([True, False])
    print(flag)
    assert flag
```
 

### 执行命令
```bash
pytest -s --count 5 -x 13repeat.py
```
 

### 执行结果
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200413135848048-1986596726.png)  
 

## @pytest.mark.repeat(count)
如果要在代码中将某些测试用例标记为执行重复多次，可以使用 @pytest.mark.repeat(count)  

```python
@pytest.mark.repeat(5)
def test_repeat():
    print("测试用例执行")
```
 

### 执行命令

```bash
pytest -s 13repeat.py
```
 

### 执行结果
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200413142259708-1248397004.png)  
 

## --repeat-scope
命令行参数  
**作用：**可以覆盖默认的测试用例执行顺序，类似fixture的scope参数

- function：默认，范围针对每个用例重复执行，再执行下一个用例
- class：以class为用例集合单位，重复执行class里面的用例，再执行下一个
- module：以模块为单位，重复执行模块里面的用例，再执行下一个
- session：重复整个测试会话，即所有测试用例的执行一次，然后再执行第二次

 

### 案例一：class

```python
class Test_repeat:
    def test_repeat3(self):
        print("测试用例执行333")
class Test_repeat2:
    def test_repeat3(self):
        print("测试用例执行444")
```

### 执行命令

```bash
pytest -s --count=2 --repeat-scope=class 13repeat.py
```

### 执行结果
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200413143418525-1712642726.png)  
 

### 案例二：module

```python
def test_repeat1():
    print("测试用例执行111")
def test_repeat2():
    print("测试用例执行222")
class Test_repeat:
    def test_repeat3(self):
        print("测试用例执行333")
```

### 执行命令

```bash
pytest -s --count=2 --repeat-scope=module 13repeat.py
```

### 执行结果
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200413143422428-1300950331.png)  
 

## 兼容性问题
pytest-repeat不能与unittest.TestCase测试类一起使用。无论--count设置多少，这些测试始终仅运行一次，并显示警告

> 转载：[https://www.cnblogs.com/poloyy/p/12691240.html](https://www.cnblogs.com/poloyy/p/12691240.html)

 
