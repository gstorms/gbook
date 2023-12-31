
## 前言
上一篇文章介绍了两种allure的特性

- **@allure.step() 装饰器：**可以设置测试步骤，让测试用例的执行过程更加详细
- **allure.attach() 函数：**可以设置需要显示在allure报告的附件，包含了多种类型，可以通过allure.attachment_type查看支持的类型

这一篇幅，我们主要来讲解另外两个特性，可以增加报告的可读性哦！

- @allure.description()
- @allure.title()

它们用法极其相近，只是作用不一样而已  
 

## @allure.description()

### **作用**
可以添加足够详细的测试用例描述，以便于管理层查看哦哈哈哈  
 

### 语法格式，有三种

1. @allure.description(str）
1. 在测试用例函数声明下方添加 """ """
1. @allure.description_html(str）：相当于传一个HTML代码组成的字符串，类似 allure.attach() 中传HTML

**注意：**方式一方式二的效果和作用是一致的， 哪个方便哪个来

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  =
__Time__   = 2020-04-18 15:24
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""

import allure

import allure

# 方式一
@allure.description("""
这是一个@allure.description装饰器
没有特别的用处
""")
def test_description_from_decorator():
    assert 42 == int(6 * 7)

# 方式二
def test_unicode_in_docstring_description():
    """
    当然，在方法声明的下一行这样子写，也算一种添加description的方式哦
    """
    assert 42 == int(6 * 7)

# 方式三
@allure.description_html("""
<h1>Test with some complicated html description</h1>
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr align="center">
    <td>William</td>
    <td>Smith</td>
</table>
""")
def test_html_description():
    assert True

```
方式一的allure报告  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200418154011153-1321880660.png)  
 

### 方式二的allure报告
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200418154044384-2117386341.png)  
 

### 方式三的allure报告
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200418154041997-557868599.png)  
 

## @allure.title()

### 作用

- 使得测试用例的标题更具有可读性，毕竟我们可以写成中文
- 支持占位符传递关键字参数哦（动态标题，结合 @pytest.mark.parametrize 使用）

 

### 具体栗子一

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
__title__  =
__Time__   = 2020-04-18 16:09
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
import pytest, allure
@allure.title("前置操作：登录")
@pytest.fixture
def test_loginss(request):
    params = request.param
    name = params["username"]
    pwd = params["pwd"]
    allure.attach(f"这是测试用例传的参数{params}")
    print(name, pwd, params)
    yield name, pwd
@allure.title("成功登录，测试数据是：{test_loginss}")
@pytest.mark.parametrize("test_loginss", [
    {"username": "name1", "pwd": "pwd1"},
    {"username": "name2", "pwd": "pwd2"}], indirect=True)
def test_success_login(test_loginss):
    name, pwd = test_loginss
    allure.attach(f"账号{name},密码{pwd}")
```
 

### 运行结果，查看allure报告
这是一次综合多个之前学到的方法来完成的栗子，已经具体标出来啦！  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200418163324281-2106601763.png)  
 

### 具体栗子二

```python
@allure.title("多个参数{name},{phone},{age}")
@pytest.mark.parametrize("name,phone,age", [
    (1, 2, 3),
    (4, 5, 6),
    (7, 8, 9)
])
def test_test_test(name, phone, age):
    print(name, phone, age)
```
 

### 运行结果，查看allure报告
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200418164434431-948219776.png)  
 

## 总结
如果没有添加 @allure.title() 的话，测试用例的标题默认就是函数名，这样的可读性不高，毕竟咱们是中国人，显示中文title还是很有必要的~所以墙裂建议大伙儿加上啦！

> 转载：[https://www.cnblogs.com/poloyy/p/12726657.html](https://www.cnblogs.com/poloyy/p/12726657.html)

