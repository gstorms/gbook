
## 前言
- 前面几篇文章主要介绍了allure的特性，这篇文章我们就来讲下allure的标记用法
- 有时候我们写pytest的时候，会用到 @pytest.mark 但并不会显示在allure报告上
- 而allure也提供了三种类型的标记装饰器，它们是可以显示在allure报告上的

 

## allure的标记装饰器

- BDD样式的标记装饰器
- 优先级（严重程度）标记装饰器
- 自定义标记装饰器

 

## BDD标记装饰器
提供了三个装饰器

- **@allure.epic：**敏捷里面的概念，定义史诗，往下是 feature
- **@allure.feature：**功能点的描述，理解成模块往下是 story
- **@allure.story：**故事，往下是 title

 

## 栗子一（story+feature）

#### 测试代码

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  =
__Time__   = 2020-04-19 14:27
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""

import allure


def test_without_any_annotations_that_wont_be_executed():
    pass


@allure.story('epic_1')
def test_with_epic_1():
    pass


@allure.story('story_1')
def test_with_story_1():
    pass


@allure.story('story_2')
def test_with_story_2():
    pass


@allure.feature('feature_2')
@allure.story('story_2')
def test_with_story_2_and_feature_2():
    pass

```
 

#### 无标记装饰器
**我们先看看没有设置标记装饰器时，allure报告是咋样的**  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200419143545313-1192847935.png)  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200419143547509-461702889.png)  
 

#### 添加装饰器
**加了 @allure.feature 和 @allure.story 之后的 allure 报告**  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200419143646436-112943561.png)  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200419143700757-1044518704.png)  
 

#### 知识点

- story 是 feature 的子集，当测试用例有 @allure.feature、@allure.story 时，在报告上会先显示 feature，点开之后再显示 story**【可以想象成，安徒生童话（feature）有很多个童话故事（story）】**
- 如果不加 @allure.feature、@allure.story 时，在Behaviors栏目下，测试用例都不会分类显示，当用例多的时候可能看的花里胡哨

 

## 栗子二

#### 前言
这里应用了包括前面所讲的全部装饰器  
 

#### 测试代码

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  = 
__Time__   = 2020/10/27 19:44
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
import os

import allure
import pytest


@pytest.fixture(scope="session")
def login_fixture():
    print("=== 前置登录 ===")


@allure.step("步骤1")
def step_1():
    print("操作步骤---------------1")


@allure.step("步骤2")
def step_2():
    print("操作步骤---------------2")


@allure.step("步骤3")
def step_3():
    print("操作步骤---------------3")


@allure.epic("epic 相当于总体描述")
@allure.feature("测试模块")
class TestAllureALL:

    @allure.testcase("https://www.cnblogs.com/poloyy/", '测试用例,点我一下')
    @allure.issue("https://www.cnblogs.com/poloyy/p/12219145.html", 'Bug 链接,点我一下')
    @allure.title("用例的标题")
    @allure.story("story one")
    @allure.severity("critical")
    def test_case_1(self, login_fixture):
        """
        小菠萝测试笔记地址：https://www.cnblogs.com/poloyy/
        """
        print("测试用例1")
        step_1()
        step_2()

    @allure.story("story two")
    def test_case_2(self, login_fixture):
        print("测试用例2")
        step_1()
        step_3()


@allure.epic("另一个 epic")
@allure.feature("查找模块")
class TestAllureALL2:
    @allure.story("story three")
    def test_case_3(self, login_fixture):
        print("测试用例3")
        step_1()

    @allure.story("story four")
    def test_case_4(self, login_fixture):
        print("测试用例4")
        step_3()


if __name__ == '__main__':
    pytest.main(['-s', '-q', '--alluredir', './allure'])
    os.system('allure -c ./allure')
    os.system('allure serve ./allure-report')

```
 

#### allure 报告
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201027222800445-1537547444.png)  
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201027222813521-133031475.png)  
 

## 总结
倘若是用 pytest+allure 写项目，又想用 @pytest.mark.xxx 来给不同的用例添加标记的话，可以尝试用 @allure.feature、@allure.story 替换，毕竟可以显示在报告上  
 

#### 提出问题
用命令行方式运行时，可以指定运行某个story、feature、epic吗？  
 

#### 自问自答
当然可以，跟 @pytest.mark.xxx 指定标签运行的方式没啥区别，添加下面的命令行参数就行

- --allure-epics
- --allure-features
- --allure-stories

 

#### 举栗子
```bash
# 只运行 epic 名为 test 的测试用例
pytest --alluredir ./report/allure --allure-epics=test

# 只运行 feature 名为 模块 的测试用例
pytest --alluredir ./report/allure --allure-features=模块

# 只运行 story1、story2 的测试用例（也可以不用=号 空格就行了哦）
pytest tests.py --allure-stories story1,story2

# 指定 feature+story
pytest tests.py --allure-features feature2 --allure-stories story2
```

> 转载：[https://www.cnblogs.com/poloyy/p/12725509.html](https://www.cnblogs.com/poloyy/p/12725509.html)

