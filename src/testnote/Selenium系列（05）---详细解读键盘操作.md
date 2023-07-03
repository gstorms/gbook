
## 有什么键盘操作？
- 删除键
- 空格键
- 制表键
- 回退键
- 回车键
- 全选
- 复制
- 剪切
- 粘贴
- F1-F12
- ......其实就是所有键盘都能模拟，包括alt、shift、insert、delete、home等等等...这里就不举例了，看源码很容易懂

   

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  = 
__Time__   = 2020/3/27 20:33
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
from time import sleep

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome("../resources/chromedriver.exe")
driver.maximize_window()

# 访问网址
driver.get("http://www.baidu.com")

# 找到搜索框
inputElement = driver.find_element_by_id("kw")

# 输入搜索内容
inputElement.send_keys("小菠萝测试笔记")

# ctrl+a全选
inputElement.send_keys(Keys.CONTROL, "a")

sleep(1)

# ctrl+c 复制输入框内容
inputElement.send_keys(Keys.CONTROL, 'c')

sleep(1)

# ctrl+x 剪切输入框内容
inputElement.send_keys(Keys.CONTROL, 'x')

sleep(1)

# ctrl+v 粘贴输入框内容
inputElement.send_keys(Keys.CONTROL, 'v')

sleep(1)

# 空格键
inputElement.send_keys(Keys.SPACE)

sleep(1)

# 后退键
inputElement.send_keys(Keys.BACKSPACE)

sleep(1)

# tab键
inputElement.send_keys(Keys.TAB)

sleep(1)

# 回车键
inputElement.send_keys(Keys.ENTER)

# 刷新页面
inputElement.send_keys(Keys.F5)

```
 

### 知识点
若要看还有什么操作，直接ctrl+点击 Keys 就能查看源码啦

> 转载： [https://www.cnblogs.com/poloyy/p/12586940.html](https://www.cnblogs.com/poloyy/p/12586940.html)

