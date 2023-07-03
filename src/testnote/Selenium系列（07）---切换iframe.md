
## 保存iframe.html到本地
后面代码针对此简单页面写小案例  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<p id="p1">你好，小菠萝测试笔记</p>

<iframe id="iframe1" src="http://www.baidu.com" height="300px" width="80%">
</iframe>

<a href="https://www.cnblogs.com/poloyy/" id="out">访问小菠萝测试笔记</a>

</body>
</html>

```
 

## iframe操作有哪些？

- 切换到iframe
- 切换回主页面

比较简单，不展开讲了~就两个方法而已~直接看代码啦！  

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

# 加载驱动，路径自己配置
driver = webdriver.Chrome("../resources/chromedriver.exe")

# html页面路径需要自己配置
driver.get(
    "file:///F:/iframe.html")
driver.maximize_window()

# 找到iframe元素
iframe1 = driver.find_element_by_id("iframe1")

# ===切换至iframe===
driver.switch_to.frame(iframe1)

# 找到iframe中页面的元素
# 找到搜索框
inputElement = driver.find_element_by_id("kw")

# 输入搜索内容
inputElement.send_keys("小菠萝测试笔记")

# 找到搜索按钮
searchElement = driver.find_element_by_id("su")

searchElement.click()

# ===切换回主页面===
driver.switch_to.default_content()

# 点击主页面元素
driver.find_element_by_id("out").click()

```

### 注意
WebDriver是提供了 driver.switch_to_frame()、driver.switch_to_default_content() 这两个方法的，和上面说的效果一样，**只是这个已经过时了，不建议用！**  
**
> 转载：[https://www.cnblogs.com/poloyy/p/12592549.html](https://www.cnblogs.com/poloyy/p/12592549.html)

