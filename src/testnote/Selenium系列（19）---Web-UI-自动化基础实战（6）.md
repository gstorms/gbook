**注意，目前的实战都是流水账式写的，后面才会结合框架+PO模式**  
**目的是为了掌握所学的Selenium基础**  
 

## 实战题目

1. 访问: [https://www.vmall.com/](https://www.vmall.com/)
1. 获取一级菜单下包含哪些二级菜单，不包含查看全部
1. 然后获取下面，热销单品中所有 顶部 带有 爆款字样的产品名称及价格

![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404161251385-1078085909.png)  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404161309032-1166720637.png)  
 

## 代码思路（人为测试时的操作步骤）

1. 定位一级菜单的选项列表
1. 循环列表，每次都将鼠标悬浮在当前选项上，然后打印二级菜单的列表
1. 热销单品在页面下方，需要滑动页面
1. 定位热销单品列表
1. 循环，获取标题和价格，打印爆款

 

## 代码

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  = 
__Time__   = 2020/4/2 20:04
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
from time import sleep

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains

driver = webdriver.Chrome("../resources/chromedriver.exe")
action = ActionChains(driver)


def wait_element(by_, element_):
    element = WebDriverWait(driver, timeout=10).until(
        ec.presence_of_element_located((by_, element_))
    )
    return element


def wait_elements(by_, element_):
    element = WebDriverWait(driver, timeout=10).until(
        ec.presence_of_all_elements_located((by_, element_))
    )
    return element


# 打开网站
driver.get("https://www.vmall.com/")

# 列表
lists = wait_elements(By.XPATH, '//div[@id="category-block"]/div/ol/li')
for one in lists:
    one_v = one.find_element_by_xpath("./input[2]").get_attribute("value")

    print(f"一级菜单：{one_v}")
    # hover
    action.move_to_element(one).perform()

    # hover出来的面板
    items = one.find_elements_by_xpath('./div[contains(@class,"category-panels")]/ul/li[@class="subcate-item"]')
    for item in items:
        value = item.find_element_by_xpath('./input[1]').get_attribute("value")
        print(f"\t{value}")

# 往下滚动1000px
js = "document.documentElement.scrollTop = 1000"
driver.execute_script(js)

# 打印爆款
hot_lists = driver.find_elements_by_xpath(
    '//div[contains(@class,"home-hot-goods")]//ul[@class="grid-list clearfix"]/li')
for hot in hot_lists:
    title = hot.find_element_by_xpath('./a/div[@class="grid-title"]')
    price = hot.find_element_by_xpath('./a/p[@class="grid-price"]')
    print(f"爆款：{title.text}, 价格：{price.text}")

sleep(5)
driver.quit()

```
 
> 转载： [https://www.cnblogs.com/poloyy/p/12632293.html](https://www.cnblogs.com/poloyy/p/12632293.html)

