
## 前言
allure除了支持pytest自带的特性之外（fixture、parametrize、xfail、skip），自己本身也有强大的特性可以在pytest中使用  
 

## @allure.step 

- allure报告最重要的一点是，它允许对每个测试用例进行非常详细的步骤说明
- 通过 @allure.step() 装饰器，可以让测试用例在allure报告中显示更详细的测试过程

 

### 示例代码

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
__title__  =
__Time__   = 2020-04-08 21:24
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
import allure
@allure.step("第一步")
def passing_step():
    pass
@allure.step("第二步")
def step_with_nested_steps():
    nested_step()
@allure.step("第三步")
def nested_step():
    nested_step_with_arguments(1, 'abc')
@allure.step("第四步{0}，{arg2}")
def nested_step_with_arguments(arg1, arg2):
    pass
@allure.step("第五步")
def test_with_nested_steps():
    passing_step()
    step_with_nested_steps()
```

### 测试用例在allure上的显示
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200417135246245-902116613.png)

### 知识点

- step() 只有一个参数，就是title，你传什么，在allure上就显示什么
- 可以像python字符串一样，支持位置参数和关键字参数 {0}，{arg2}，可看第四步那里，如果函数的参数没有匹配成功就会报错哦
- step() 的使用场景，给我感觉就是，当方法之间嵌套会比较有用，否则的话只会显示一个步骤，类似下面图

![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200417133631873-1202403389.png)  
 

## allure.attach（挺有用的）
**作用：**allure报告还支持显示许多不同类型的附件，可以补充测试结果；自己想输出啥就输出啥，挺好的  
**语法：** allure.attach(body, name, attachment_type, extension)

### **参数列表**

- **body**：要显示的内容（附件）
- **name**：附件名字
- **attachment_type**：附件类型，是 allure.attachment_type 里面的其中一种
- **extension**：附件的扩展名（比较少用）

 

### allure.attachment_type提供了哪些附件类型？
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200417200221337-763341073.png)  
 

### 语法二： allure.attach.file(source, name, attachment_type, extension)
source：文件路径，相当于传一个文件  
其他参数和上面的一致  
 

### 其中一个测试用例的代码栗子

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
__title__  =
__Time__   = 2020-04-08 21:24
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
import allure
import pytest
@pytest.fixture
def attach_file_in_module_scope_fixture_with_finalizer(request):
    allure.attach('在fixture前置操作里面添加一个附件txt', 'fixture前置附件', allure.attachment_type.TEXT)
    def finalizer_module_scope_fixture():
        allure.attach('在fixture后置操作里面添加一个附件txt', 'fixture后置附件',
                      allure.attachment_type.TEXT)
    request.addfinalizer(finalizer_module_scope_fixture)
def test_with_attacments_in_fixture_and_finalizer(attach_file_in_module_scope_fixture_with_finalizer):
    pass
def test_multiple_attachments():
    allure.attach('<head></head><body> 一个HTML页面 </body>', 'Attach with HTML type', allure.attachment_type.HTML)
    allure.attach.file('./reports.html', attachment_type=allure.attachment_type.HTML)
```
 

### 运行之后看结果
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200417203657146-1495579440.png)  
**这是一个txt附件**  
   
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200417204119583-92174005.png)  
**这是一个用了 allure.attach() 来插入一段自己写的HTML和 allure.attach.file() 来导入一个已存在的HTML文件（pytest-html报告）**  
**
> 转载：[https://www.cnblogs.com/poloyy/p/12716659.html](https://www.cnblogs.com/poloyy/p/12716659.html)

