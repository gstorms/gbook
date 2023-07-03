
## 首先，将下面html代码保存到一个文件中
后续**第一种上传文件方式**的代码小案例都是访问此html的

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
      <input type="file" name="pic" id="pic" />
</body>
</html>

```
 

## 方式一：input标签上传文件
比较简单，可以定位input标签后，直接 .send_keys() 就可以了

```python
# !/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  =
__Time__   = 2020/3/25 17:52
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
from selenium import webdriver

driver = webdriver.Chrome("../resources/chromedriver.exe")

# 需要自己修改路径
driver.get("file:///C://上传文件.html")
driver.maximize_window()

# 定位上传文件元素input[type=file]
pic = driver.find_element_by_id("pic")

# 上传文件
pic.send_keys(r"C:/上传文件.html")

```

## 方式二：非input标签上传文件

```python
# 打开上传网站
driver.get("https://tinypng.com/")
paths = Path.cwd().parent

# 触发文件上传的操作
driver.find_element_by_css_selector("section.target").click()

time.sleep(2)
# 一级顶层窗口
dialog = win32gui.FindWindow("#32770", "打开")

# 二级窗口
comboBoxEx32 = win32gui.FindWindowEx(dialog, 0, "ComboBoxEx32", None)

# 三级窗口
comboBox = win32gui.FindWindowEx(comboBoxEx32, 0, "ComboBox", None)

# 四级窗口 -- 文件路径输入区域
edit = win32gui.FindWindowEx(comboBox, 0, "Edit", None)

# 二级窗口 -- 打开按钮
button = win32gui.FindWindowEx(dialog, 0, "Button", None)

# 1、输入文件路径
filepath = f"{paths}\\resources\\11.png"
win32gui.SendMessage(edit, win32con.WM_SETTEXT, None, filepath)

# 2、点击打开按钮
win32gui.SendMessage(dialog, win32con.WM_COMMAND, 1, button)

```
这个是写死的方法，直接照搬即可，因为涉及了第三方工具去定位Window元素，暂时不展开详解
> 转载： [https://www.cnblogs.com/poloyy/p/12607930.html](https://www.cnblogs.com/poloyy/p/12607930.html)

