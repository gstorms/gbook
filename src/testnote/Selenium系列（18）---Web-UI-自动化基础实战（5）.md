
## 实战题目
1. 打开 12306 网站 [https://kyfw.12306.cn/otn/leftTicket/init](https://kyfw.12306.cn/otn/leftTicket/init)
1. 出发城市 填写 ‘南京南’， 到达城市 填写 ‘杭州东'
1. 发车时间 选 06:00--12:00
1. 发车日期选当前时间的下一天，也就是日期标签栏的，第二个标签
1. 我们要查找的是所有 二等座还有票的车次，打印出这些有票的车次的信息，结果如下：

G7641  
G1505  
G7393  
G7689  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404155242213-448029833.png)  
 

## 代码思路（人为测试时的操作步骤）

1. 点击【出发城市】，输入并点击南京南
1. 点击【到达城市】，输入并点击杭州东
1. 选择发车时间 06:00--12:00
1. 选择第二个日期标签
1. 获取到车次列表
1. 循环列表，获取车次号和二等座那一列的数据
1. 正则匹配是否有坐
1. 输出车次号

 

## 代码

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  =
__Time__   = 2020-03-31 21:30
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
import re
from time import sleep
from selenium.webdriver.support.select import Select
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.wait import WebDriverWait

driver = webdriver.Chrome("../resources/chromedriver.exe")


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
driver.get("https://kyfw.12306.cn/otn/leftTicket/init")
driver.maximize_window()

# 出发城市 填写 ‘南京南’，
from_ = wait_element(By.CSS_SELECTOR, "input#fromStationText")
from_.click()
from_.send_keys("南京南")
# 选择南京南
driver.find_element_by_css_selector("div#citem_0").click()

# 到达城市 填写 ‘杭州东’
to = wait_element(By.CSS_SELECTOR, "input#toStationText")
to.click()
to.send_keys("杭州东")
# 选择杭州东
driver.find_element_by_css_selector("div#citem_0").click()

# 发车时间 选 06:00--12:00
select = Select(driver.find_element_by_css_selector("select#cc_start_time"))
# 选择
select.select_by_visible_text("06:00--12:00")

# 发车日期选当前时间的下一天，也就是日期标签栏的，第二个标签
date_range = driver.find_elements_by_css_selector("div#date_range>ul>li")
date_range[1].click()

# 数据列表
lists = wait_elements(By.CSS_SELECTOR, "tbody#queryLeftTable>tr")[0::2]
print(len(lists))
#  循环数据
for data in lists:
    number = data.find_element_by_css_selector("td>div>div.train a.number").text
    two = data.find_elements_by_css_selector("td")[3].text
    if re.findall("有|\d+", two):
        print(number)

sleep(10)
driver.quit()

```
 
> 转载：[https://www.cnblogs.com/poloyy/p/12632138.html](https://www.cnblogs.com/poloyy/p/12632138.html)

