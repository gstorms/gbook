
## 首先，将下面html代码保存到一个文件中
后续的代码小案例都是访问此html的<!DOCTYPE html>  

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>下拉框</title>
</head>
<body>
<select id="pro">
    <option value="gd">广东</option>
    <option value="hb">湖北</option>
    <option value="gj">北京</option>
</select>
<select id="city" multiple>
    <option value="gz">广州</option>
    <option value="wh">武汉</option>
    <option value="gj">北京</option>
</select>
</body>
</html>

```

### 注意
若select下拉框有 multiple 属性，则可以多选option，但这种情况不常见  
 

## 关于下拉框的操作

- 返回所有选项
- 返回所有被选中的选项
- 通过value属性选中or取消选中选项
- 通过index索引选中or取消选中选项
- 通过标签间文本选中or取消选中选项
- 取消选中所有选项

 

## 返回选项&选中操作

```python
# !/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  =
__Time__   = 2020/3/25 17:52
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
from time import sleep

from selenium.webdriver.support.select import Select
from selenium import webdriver

driver = webdriver.Chrome("../resources/chromedriver.exe")

# 将html文件更改为自己的路径
driver.get("file:///C:/下拉框.html")
driver.maximize_window()

# 找到select标签元素
pro = Select(driver.find_element_by_id("pro"))

# 返回所有选项
for option in pro.options:
    print(option.text)

# 返回所有被选中的选项
for option in pro.all_selected_options:
    print(option.text)

# 通过value选中
pro.select_by_value("bj")
sleep(1)

# 通过index选中
pro.select_by_index(1)
sleep(1)

# 通过标签文本选中
pro.select_by_visible_text("广东")

```
 

## 取消选中操作

```python
# 找到id=city的下拉框
city = Select(driver.find_element_by_id("city"))

# 全选
for option in city.options:
    if not option.is_selected():
        city.select_by_visible_text(option.text)
sleep(1)

# 根据value取消选中
city.deselect_by_value("bj")
sleep(1)

# 根据index取消选中
city.deselect_by_index(0)
sleep(1)

# 根据标签文本选中
city.deselect_by_visible_text("武汉")
sleep(1)

# 全选
for option in city.options:
    if not option.is_selected():
        city.select_by_visible_text(option.text)
sleep(1)

# 取消选中所有选项
city.deselect_all()

```

### 知识点
取消操作只适用于添加了multiple的下拉框，否则会报错  

```python
    raise NotImplementedError("You may only deselect options of a multi-select")
NotImplementedError: You may only deselect options of a multi-select

```

## Select源码解读

```python
class Select(object):

    def __init__(self, webelement):
        """
        Constructor. A check is made that the given element is, indeed, a SELECT tag. If it is not,
        then an UnexpectedTagNameException is thrown.

        :Args:
         - webelement - element SELECT element to wrap

        Example:
            from selenium.webdriver.support.ui import Select \n
            Select(driver.find_element_by_tag_name("select")).select_by_index(2)
        """

```

### 知识点

- 实例化 Select 需要传入 select 下拉框的 webelement
- 若传入 webelement 的 tag_name 不是 <select>..</select> 标签，则会抛出异常 UnexpectedTagNameException
> 转载：[https://www.cnblogs.com/poloyy/p/12601101.html](https://www.cnblogs.com/poloyy/p/12601101.html)

