
## **首先，将下面html代码保存到一个文件中**
后续的代码小案例都是访问此html的  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>警告框处理</title>
    <script type="text/javascript">
        function duihua() {
            alert("这个窗口是对话框！");
            print('你点击了确认');
        }

        function queren() {
            var se = confirm("确认框!");
            if (se == true) {
                print('你点击了确认1');
            } else {
                print('你点击了取消1');
            }
        }

        function tishi() {
            var se = prompt("请输入您的反馈意见", "测试")
            if (se != null) {
                print('你点击了确认2');
            } else {
                print('你点击了取消2');
            }
//            if (t != null && t != "") {
//                document.write("刷新回到初始界面")
//            }
        }

        function print(text) {
            var dom = document.createElement('div')
            dom.innerText = text
            document.getElementsByTagName('body')[0].appendChild(dom)
        }
    </script>
</head>
<body>
<input id="bu1" type="button" onclick="duihua()" value="点击显示对话框"/>
<br>
<br>
<input id="bu2" type="button" onclick="queren()" value="点击显示确认框"/>
<br>
<br>
<input id="bu3" type="button" onclick="tishi()" value="点击显示提示框"/>
</body>
</html>

```
 

## alert窗口的类型

- 警告框
- 确认框
- 对话框

### 警告框

### ![](https://img2020.cnblogs.com/blog/1896874/202003/1896874-20200330191645384-273099975.png)
 

### 确认框
![](https://img2020.cnblogs.com/blog/1896874/202003/1896874-20200330191654993-47935397.png)  
 

### 对话框
![](https://img2020.cnblogs.com/blog/1896874/202003/1896874-20200330191703244-948506019.png)  
 

# 操作alert窗口

- 切换至alert窗口
- 获取alert窗口的值
- 确定
- 取消
- 输入值

 

## 警告框的栗子

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

# html文件路径需要自己替换哦
driver.get("file:///C:/警告框.html")
driver.maximize_window()

# 警告框
alert1 = driver.find_element_by_id("bu1")

# 先点击，得先弹出警告框
alert1.click()

# 切换至警告框
alert1 = driver.switch_to.alert

# 获取alert窗口的值
print(alert1.text)

# 点击 确定
alert1.accept()

```
 

## 确认框的栗子

```python
alert2 = driver.find_element_by_id("bu2")
alert2.click()

# 切换至对话框
alert2_ = driver.switch_to.alert

# 获取窗口值
print(alert2_.text)

# 点击 取消
alert2_.dismiss()
# 点击 确认
# alert2_.accept()

```
 

## 对话框的栗子

```python
alert3 = driver.find_element_by_id("bu3")
alert3.click()

# 切换至对话框
alert3_ = driver.switch_to.alert

# 获取窗口值
print(alert3_.text)

# 输入值到对话框中
alert3_.send_keys("输入对话框")

# 点击 确认
alert2_.accept()

```
 

## switch_to.alert源码解读

```python
    @property
    def alert(self):
        """
        Switches focus to an alert on the page.

        :Usage:
            alert = driver.switch_to.alert
        """
        alert = Alert(self._driver)
        alert.text
        return alert

```

### 知识点

- alert是一个属性，不是一个方法
- 最终返回一个 Alert 实例，所以我们需要有变量去接住它，后续通过这个变量去操作alert窗口
- 操作alert窗口的方法都 Alert 的方法

 
> 转载： [https://www.cnblogs.com/poloyy/p/12600700.html](https://www.cnblogs.com/poloyy/p/12600700.html)

