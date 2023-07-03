
## **实战题目**
1. 登录 [http://www.51job.com](http://www.51job.com)
1. 点击高级搜索
1. 输入搜索关键词 python
1. 地区选择 杭州
1. 职能类别 选 计算机软件 -> 高级软件工程师
1. 公司性质 选 上市公司
1. 工作年限 选 1-3 年
1. 搜索最新发布的职位， 抓取页面信息。 得到如下的格式化信息

Python开发工程师 | 杭州纳帕科技有限公司 | 杭州 | 0.8-1.6万/月 | 04-27  
Python高级开发工程师 | 中浙信科技咨询有限公司 | 杭州 | 1-1.5万/月 | 04-27  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404153204134-1221596404.png)  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404153204066-1501201737.png)  
 

## 代码思路（人为测试时的操作步骤）

1. 点击【高级搜索】
1. 关键字输入python
1. 点击城市
1. 显式等待，定位所有默认已选中的城市
1. 取消选中它们
1. 点击【北京】
1. 点击【确定】
1. 发现关键字输入框下方出现关键字历史记录，需要点击任意地方才能取消显示，所以随便找一个可点击元素进行点击
1. 点击【职能类别输入框】
1. 显式等待，点击【后端开发】
1. 点击【高级软件工程师】
1. 点击【确定】
1. 点击【工作年限】，选择1-3年
1. 点击【公司性质】，选择上市公式
1. 点击【搜索】
1. 定位职位列表，除了第一行
1. 循环职位列表，获取每一行的信息存入列表
1. 格式化输出

 

## 代码
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
from selenium.webdriver.support import expected_conditions as ec

# 加载驱动
driver = webdriver.Chrome("../resources/chromedriver.exe")


def wait_element(driver, by_, element_, timeout=10):
    element = WebDriverWait(driver, timeout=timeout).until(
        ec.presence_of_element_located(
            (by_, element_)
        )
    )
    return element


def wait_elements(driver, by_, element_, timeout=10):
    element = WebDriverWait(driver, timeout=timeout).until(
        ec.presence_of_all_elements_located(
            (by_, element_)
        )
    )
    return element


# 加载驱动
driver = webdriver.Chrome("../resources/chromedriver.exe")

# 打开网站
driver.get("http://www.51job.com")
driver.maximize_window()

# 高级搜索
more_btn = wait_element(driver, By.CLASS_NAME, "more").click()

# 职位框
wait_element(driver, By.ID, "kwdselectid").send_keys("python")

# 城市按钮
driver.find_element_by_id("work_position_click").click()

# layer
layer = wait_element(driver, By.ID, "work_position_layer")
# 城市列表
city_list = wait_elements(driver, By.CSS_SELECTOR, "div#work_position_click_center_right_list_000000 table em.on")
for city in city_list:
    sleep(1)
    city.click()

# 杭州
wait_element(driver, By.ID, "work_position_click_center_right_list_category_000000_080200").click()

# 确认
wait_element(driver, By.ID, "work_position_click_bottom_save").click()

# form
wait_element(driver, By.CSS_SELECTOR, "div#historylist>div.r1").click()

# 职能类别
wait_element(driver, By.ID, "funtype_click").click()

# 职能弹窗
type_layer = wait_element(driver, By.ID, "funtype_layer")

# 后端开发
wait_element(driver, By.ID, "funtype_click_center_right_list_category_0100_0100").click()

# f如果有已选列表，取消选择
flag = wait_element(driver, By.ID, "funtype_click_multiple_selected")
if flag.text:
    # 已选列表
    type_list = wait_elements(driver, By.CSS_SELECTOR, "div#funtype_click_multiple_selected>span")
    for types in type_list:
        if types.text == "高级软件工程师":
            continue
        em = types.find_element_by_tag_name("em")
        em.click()

# 高级软件工程师
wait_element(driver, By.ID, "funtype_click_center_right_list_sub_category_each_0100_0106").click()

# 确定
driver.find_element_by_id("funtype_click_bottom_save").click()

# 公司性质
company = wait_element(driver, By.ID, "cottype_list")
company.click()

# 列表
ctype_list = company.find_elements_by_css_selector("div.ul > span")
for ctype in ctype_list:
    # 外资（欧美）没有数据
    if ctype.text == "上市公司":
        ctype.click()
        break

# 工作年限
workyear_list = wait_element(driver, By.ID, "workyear_list")
workyear_list.click()

# 列表
wlist = workyear_list.find_elements_by_css_selector("div.ul > span")
for wtype in wlist:
    if wtype.text == "1-3年":
        wtype.click()
        break

# 搜索按钮
wait_element(driver, By.CSS_SELECTOR, "div.btnbox > span.p_but").click()

# 职位列表
resultList = wait_elements(driver, By.CSS_SELECTOR, "div#resultList>div.el")[1:]
for res in resultList:
    spans = res.find_elements_by_tag_name("span")
    texts = [x.text for x in spans]
    # 最终输出
    print(" | ".join(texts))

sleep(10)
driver.quit()

```

> 转载： [https://www.cnblogs.com/poloyy/p/12632106.html](https://www.cnblogs.com/poloyy/p/12632106.html)

