
## 实战题目
1. 访问：[https://www.toutiao.com/](https://www.toutiao.com/)
1. 获取到下图所有黑框里的内容并打印出来

![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404140109518-2015769824.png)  
 

## 代码思路（人为测试时的操作步骤）

1. 找到列表，循环列表，打印文本
1. 鼠标悬浮到【更多】
1. 待悬浮窗口可见时，获取窗口内的列表
1. 循环列表，打印文本

 

## 代码
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  = 
__Time__   = 2020/3/27 14:35
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
from selenium import webdriver
from selenium.webdriver import ActionChains

# 需要将驱动路径改成自己的路径哦
driver = webdriver.Chrome("../resources/chromedriver.exe")
chains = ActionChains(driver)

# 打开头条
driver.get("https://www.toutiao.com/")

driver.maximize_window()

# 找到外层
channel = driver.find_element_by_css_selector("div.bui-left.index-channel>div>div")

# 找到元素列表
lis = channel.find_elements_by_css_selector("ul > li")[:13]
print("==第一次打印列表==")
more = None
for li in lis:
    print(li.text)
    more = li
# hover
chains.move_to_element(more).perform()

# 找到更多hover层窗口
layer = more.find_element_by_class_name("channel-more-layer")

# 如果可见
if layer.is_displayed():
    lis = layer.find_elements_by_css_selector("ul > li")
    print("==第二次打印列表==")
    for li in lis:
        print(li.text)

```
> 转载：[https://www.cnblogs.com/poloyy/p/12631620.html](https://www.cnblogs.com/poloyy/p/12631620.html)

