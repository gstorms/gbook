
## 什么是conftest.py
可以理解成一个专门存放fixture的配置文件  
 

## 实际开发场景
多个测试用例文件（test_*.py）的所有用例都需要**用登录功能来作为前置操作**，那就不能把登录功能写到某个用例文件中去了  
 

## 如何解决上述场景问题？
conftest.py的出现，就是为了解决上述问题，单独管理一些全局的fixture  
 

## conftest.py配置fixture注意事项

- pytest会默认读取conftest.py里面的所有fixture
- conftest.py 文件名称是固定的，不能改动
- conftest.py只对同一个package下的所有测试用例生效
- 不同目录可以有自己的conftest.py，一个项目中可以有多个conftest.py
- 测试用例文件中不需要手动import conftest.py，pytest会自动查找

 

# 实际项目中的小案例
这是一个目录  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200408224205809-596157978.png)  
 

## 06conftest目录下

### conftest.py代码

### 最顶层的conftest，一般写全局的fixture，在Web UI自动化中，可能会初始化driver
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  =
__Time__   = 2020-04-08 21:22
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
import pytest

@pytest.fixture(scope="session")
def login():
    print("====登录功能，返回账号，token===")
    name = "testyy"
    token = "npoi213bn4"
    yield name, token
    print("====退出登录！！！====")


@pytest.fixture(autouse=True)
def get_info(login):
    name, token = login
    print(f"== 每个用例都调用的外层fixture：打印用户token： {token} ==")

```
 

### test_1.py代码

### 同级目录下的第一条测试用例
```python
def test_get_info(login):
    name, token = login
    print("***基础用例：获取用户个人信息***")
    print(f"用户名:{name}, token:{token}")
```
 

### 06_run.py代码

### 运行06conftest目录下所有测试用例
```python
import pytest

if __name__ == '__main__':
    pytest.main(["-s", "../06conftest/"])
```
 

## test_51job目录下

### conftest.py代码

### 配置一些针对51job这个网站的测试用例独有的fixture，譬如：打开51job网站
```python
import pytest

@pytest.fixture(scope="module")
def open_51(login):
    name, token = login
    print(f"###用户 {name} 打开51job网站###")

```
 

### test_case1.py代码

### 某个功能模块下的测试用例
```python
def test_case2_01(open_51):
    print("51job，列出所有职位用例")


def test_case2_02(open_51):
    print("51job，找出所有python岗位")

```
 

## test_toutiao目录下

### test_case1.py代码
包没有__init__.py文件也没有conftest.py文件
```python
def test_no_fixture(login):
    print("==没有__init__测试用例，我进入头条了==", login)

```
 

## test_weibo目录下

### conftest.py代码

### 配置一些针对weibo这个网站的测试用例独有的fixture，譬如：打开weibo网站
```python
import pytest

@pytest.fixture(scope="function")
def open_weibo(login):
    name, token = login
    print(f"&&& 用户 {name} 返回微博首页 &&&")

```
 

### test_case1.py代码

### 某个功能模块下的测试用例
```python
class TestWeibo:
    def test_case1_01(self, open_weibo):
        print("查看微博热搜")

    def test_case1_02(self, open_weibo):
        print("查看微博范冰冰")

```
 

## 运行06_run.py的结果
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200408224906333-993246421.png)  
 
> 转载：[https://www.cnblogs.com/poloyy/p/12663601.html](https://www.cnblogs.com/poloyy/p/12663601.html)

