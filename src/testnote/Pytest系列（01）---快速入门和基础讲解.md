
## 前言
- 目前有两种纯测试的测试框架，pytest和unittest
- unittest应该是广为人知，而且也是老框架了，很多人都用来做自动化，无论是UI还是接口
- pytest是基于unittest开发的另一款更高级更好用的单元测试框架
- 出去面试也好，跟别人说起来也好，pytest的逼格明显高于unittest

 

## 为什么要用Pytest

### pytest 的官方网站介绍，它具有如下特点：

1. 非常容易上手，入门简单，文档丰富，文档中有很多实例可以参考
1. 能够支持简单的单元测试和复杂的功能测试
1. 支持参数化
1. 执行测试过程中可以将某些测试跳过（skip），或者对某些预期失败的case标记成失败
1. 支持重复执行(rerun)失败的 case
1. 支持运行由 nose, unittest 编写的测试 case
1. 可生成 html 报告
1. 方便的和持续集成工具 jenkins 集成
1. 可支持执行部分用例
1. 具有很多第三方插件，并且可以自定义扩展

 

## 安装Pytest

### cmd运行
```bash
pip install -U pytest
pip3 install pytest -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
```

### 查看版本
```bash
pytest --version
```
 

## 快速开始
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
__title__  =
__Time__   = 2020-04-06 12:33
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
def func(x):
    return x + 1
def test_answer():
    assert func(3) == 5
class TestClass:
    def test_one(self):
        x = "this"
        assert "h" in x
    def test_two(self):
        x = "hello"
        assert hasattr(x, "check")
```
然后，cmd进入当前文件目录，直接执行
```bash
pytest
```
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200406113939910-775602409.png)  
 

### 知识点

- 如果只执行 pytest ，会查找当前目录及其子目录下以  test_*.py  或 *_test.py 文件，找到文件后，在文件中找到以  test 开头函数并执行
- 如果只想执行某个文件，可以 pytest start.py
- 加上-q，就是显示简单的结果： pytest -q start.py

 

## Pytest用例的设计原则
用Pytest写用例时候，一定要按照下面的规则去写，否则不符合规则的测试用例是不会执行的

- 文件名以 test_*.py 文件和*_test.py
- 以  test_ 开头的函数
- 以  Test 开头的类，不能包含 __init__ 方法
- 以  test_ 开头的类里面的方法
- 所有的包 pakege 必须要有__init__.py 文件

 

## Pytest执行用例规则
**注意，下面讲的都是在cmd中执行pytest命令**

### 1、某个目录下所有的用例
```bash
pytest
```
 

### 2、执行某一个 py 文件下用例 
```bash
pytest 脚本名称.py
```


### 3、运行start.py 模块里面的某个函数，或者某个类，某个类里面的方法
加v和不加-v都可以，加-v的话，打印的信息更详细
```bash
pytest -v 08_mark.py::TestClass::test_method
pytest 08_mark.py::TestClass::test_method
pytest start.py::test_answer
```
 

### 4、运行start.py 模块里面,测试类里面的某个方法
```bash
pytest start.py::TestClass::test_two
```
 

### 5、-m 标记表达式（后续讲解）
```bash
pytest -m login
```
将运行用 @pytest.mark.login 装饰器修饰的所有测试，后面再展开讲标记哦  
 

### 6、-q 简单打印，只打印测试用例的执行结果
```bash
pytest -q start.py
```
 

### 7、-s 详细打印
```bash
pytest -s start.py
```
 

### 8、-x 遇到错误时停止测试
```bash
pytest start.py -x
```
 

### 9、--maxfail=num，当用例错误个数达到指定数量时，停止测试
```bash
pytest start.py --maxfail=1
```
 

### 10、-k 匹配用例名称
执行测试用例名称包含http的所有用例
```bash
pytest -s -k http start.py
```
 

### 11、-k 根据用例名称排除某些用例
```bash
1 pytest -s -k "not http" start.py
```
 

### 12、-k 同时匹配不同的用例名称
```bash
pytest -s -k "method or weibo" start.py
```
 

## Pycharm运行Pytest
平时写代码，咱们都在Pycharm写的，怎么可能一直用cmd来跑用例呢，现在我们就来看看在Pycharm中如何运行Pytest

1. 首先，我们先要去**settings里面设置单元测试框架为Pytest**
1. 如果是nosetests的话，右键运行是以python脚本运行的哦
1. 如果设置了unittest则是以unittest框架去运行

![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200406120954271-1361854733.png)  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200406121305438-1106790149.png)  
 

### 注意
pytest 是可以兼容 unittest 脚本的，之前写的 unittest 用例也能用 pytest 框架去运行

> 转载：[https://www.cnblogs.com/poloyy/p/12641505.html](https://www.cnblogs.com/poloyy/p/12641505.html)

