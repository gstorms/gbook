
## **截图操作**
- 截取整个页面
- 截取指定元素

只有两个方法，比较简单，直接上代码  

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

driver.get("https://www.baidu.com")
driver.maximize_window()

# 截取整个页面
driver.get_screenshot_as_file("test.png")
driver.save_screenshot("tests.png")

# 找到搜索框
inputElement = driver.find_element_by_id("kw")

# 截取搜索框元素
inputElement.screenshot("inputElement.png")

```

### 知识点

- get_screenshot_as_file()、save_screenshot() 效果一样， save_screenshot() 最终调用的函数就是前者
- 后缀名建议写 .png ，否则会有Warning提示

> 转载： [https://www.cnblogs.com/poloyy/p/12592745.html](https://www.cnblogs.com/poloyy/p/12592745.html)

