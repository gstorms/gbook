
## 前言
上一篇文章介绍了两种allure的特性

- @allure.description() ：添加测试用例描述，一共三种方式哦！
- @allure.title()：指定测试用例标题，默认是函数名哦！

这一篇幅，我们主要来讲解最后三个常见特性，主要是为了将allure报告和测试管理系统集成，可以更快速的跳转到公司内部地址

- @allure.link()
- @allure.issue()
- @allure.testcase()

 

## 先看看三个装饰器源码

```python
def link(url, link_type=LinkType.LINK, name=None):
    return safely(plugin_manager.hook.decorate_as_link(url=url, link_type=link_type, name=name))
def issue(url, name=None):
    return link(url, link_type=LinkType.ISSUE, name=name)
def testcase(url, name=None):
    return link(url, link_type=LinkType.TEST_CASE, name=name)
```

### 知识点

- issue()和testcase()其实调用的也是link()，**只是link_type不一样**
- 必传参数 url：跳转的链接
- 可选参数 name：显示在allure报告的名字，如果不传就是显示完整的链接；**建议传！！不然可读性不高**
- 可以理解成：三个方法是一样的，我们都提供跳转链接和名字，只是链接的type不一样，最终显示出来的**样式不一样而已【type不一样，样式不一样】**
- 如果你喜欢，只用@allure.link()也可以
- 而出现三个装饰器的原因是为了更好地将**链接分类【访问连接、Bug链接、测试用例链接】**

   
**看完源码和知识点，其实我们就没必要针对三个方法都展开来讲了，直接上代码，看报告的样式区别！**  
 

## **代码栗子**

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
__title__  =
__Time__   = 2020-04-18 17:01
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
import allure
TEST_CASE_LINK = 'https://github.com/qameta/allure-integrations/issues/8#issuecomment-268313637'
@allure.link('https://www.youtube.com/watch?v=4YYzUTYZRMU')
def test_with_link():
    pass
@allure.link('https://www.youtube.com/watch?v=Su5p2TqZxKU', name='点击我看一看youtube吧')
def test_with_named_link():
    pass
@allure.issue('140', 'bug issue链接')
def test_with_issue_link():
    pass
@allure.testcase(TEST_CASE_LINK, '测试用例地址')
def test_with_testcase_link():
    pass
```
 

### 运行结果，查看allure报告
 

### @allure.link()不传name参数时的样式
**不传name的话，如果链接很长，可读性就比较差啦！ **  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200418172039534-32664525.png)  
 

### @allure.link()传了name参数时的样式
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200418172043072-1700939340.png)  
 

### @allure.testcase()的样式
**其实跟link()没有太大区别.....**  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200418172045421-315980894.png)  
 

### @allure.issue()的样式
**多了个虫子哈哈哈哈**  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200418172037397-61372367.png)  
 

## 总结

- 为了减少程序的阅读复杂性，其实可以统一用@allure.link()
- 传name，写好链接描述，就知道这个链接是干嘛的啦，反正三个装饰器的作用都是一样的，就是样式略微不同.....

 
> 转载：[https://www.cnblogs.com/poloyy/p/12726946.html](https://www.cnblogs.com/poloyy/p/12726946.html)

