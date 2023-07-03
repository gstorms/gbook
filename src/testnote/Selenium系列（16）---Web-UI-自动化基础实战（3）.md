
## 实战题目
1、访问：[http://www.51job.com](http://www.51job.com)  
2、输入搜索关键词 "python"， 地区选择 "北京"（注意，如果所在地已经选中其他地区，要去掉）  
3、搜索最新发布的职位， 抓取页面信息。 得到如下的格式化信息  
Python开发工程师 | 杭州纳帕科技有限公司 | 杭州 | 0.8-1.6万/月 | 04-27  
Python高级开发工程师 | 中浙信科技咨询有限公司 | 杭州 | 1-1.5万/月 | 04-27  
高级Python开发工程师 | 杭州新思维计算机有限公司 | 杭州-西湖区 | 1-1.5万/月 | 04-27  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404151943919-365233368.png)  
   
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404151941903-66431783.png)  
 

## 代码思路

1. 定位搜索框，输入python
1. 点击【地区】
1. 显式等待，定位所有默认已选中的城市
1. 取消选中它们
1. 点击【北京】
1. 点击【确定】
1. 点击【搜索】
1. 定位职位列表，除了第一行
1. 循环职位列表，获取每一行的信息存入列表
1. 格式化输出

 

## 代码（人为测试时的操作步骤）
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
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By


# 设置元素等待实例，最多等10秒，每0.5秒查找一次
def wait_element(driver, by_, element_, timeout=10):
    element = WebDriverWait(driver=driver, timeout=timeout).until(
        lambda x: x.find_element(by=by_, value=element_)
    )
    return element


# 设置元素等待实例，最多等10秒，每0.5秒查找一次
def wait_elements(driver, by_, element_, timeout=10):
    element = WebDriverWait(driver=driver, timeout=timeout).until(
        lambda x: x.find_elements(by=by_, value=element_)
    )
    return element


# 加载驱动
driver = webdriver.Chrome("../resources/chromedriver.exe")

# 打开网站
driver.get("http://www.51job.com")
driver.maximize_window()
# 搜索框
wait_element(driver, By.CSS_SELECTOR, "#kwdselectid").send_keys("python")

# 地区按钮
wait_element(driver, By.CSS_SELECTOR, "#work_position_input").click()

# 热门城市列表
city_lists = wait_elements(driver, By.CSS_SELECTOR, "div#work_position_click_center_right_list_000000 td em.on")

# 选中北京，取消选中其他城市
for city in city_lists:
    sleep(1)
    city.click()

wait_element(driver, By.CSS_SELECTOR, "em#work_position_click_center_right_list_category_000000_010000").click()

# 确定按钮
driver.find_element_by_css_selector("#work_position_click_bottom_save").click()

# 搜索按钮点击
wait_element(driver, By.CSS_SELECTOR, "div.top_wrap button").click()

# 找到职位列表
lists = wait_elements(driver, By.CSS_SELECTOR, "div#resultList>div.el")[1:]

for data in lists:
    spans = [i.text for i in data.find_elements_by_css_selector("span")]
    print(" | ".join(spans))

sleep(10)
# 退出浏览器
driver.quit()

```

> 转载：[https://www.cnblogs.com/poloyy/p/12631987.html](https://www.cnblogs.com/poloyy/p/12631987.html)

