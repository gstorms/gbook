
## 安装Selenium和下载Driver

### 安装selenium

```bash
pip3 install  selenium -i http://pypi.douban.com/simple --trusted-host pypi.douban.com
```
 

### 下载Driver
打开：[http://npm.taobao.org/mirrors/chromedriver/](http://npm.taobao.org/mirrors/chromedriver/)  
找到自己Chrome对应的版本下载即可  
 

## 访问百度的小Demo

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  = 
__Time__   = 2020/3/25 17:00
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
import time

from selenium import webdriver

# 加载浏览器驱动
driver = webdriver.Chrome("../resources/chromedriver.exe")

# 访问网址
driver.get("http://www.baidu.com")

# 找到搜索框
inputElement = driver.find_element_by_id("kw")

# 输入搜索内容
inputElement.send_keys("小菠萝测试笔记")

# 找到搜索按钮
searchElement = driver.find_element_by_id("su")

# 点击搜索按钮
searchElement.click()

time.sleep(5)

# 释放资源, 退出浏览器
driver.quit()

```
可以看到，流水账式写Web自动化测试代码的顺序就是：  
**加载驱动 - 访问链接 - 页面操作**  
   
**首先，先将一个测试html保存到本地，后续案例就按照这个页面来演示啦！**  
代码如下：  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>小菠萝测试笔记</title>
</head>
<body>
<a>用户名:</a>
<input id="username" class="username">
<a>密码</a>
<input id="password" name="password">
<button class="login">登录</button>
<br>
<p>测试啦</p>
<p>再一次测试啦</p>
<br>
<a href="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_pc_1" target="_blank" id="virus-202s0"
   class="mnav sp dot">终极抗击肺炎啊</a>
<a href="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_pc_1" target="_blank" id="virus-2020"
   class="mnav sp dot">抗击肺炎</a>
<a href="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_pc_1" target="_blank" id="virus-202s0"
   class="mnav sp dot">抗击肺炎</a>
<div>
    <ul>
        <li class="li">111</li>
        <li class="li">222</li>
        <li class="li">333</li>
    </ul>
    <ul>
        <li>aaa</li>
        <li>bbb</li>
        <li>ccc</li>
    </ul>
</div>
</body>
</html>
```
   
**辣么，我们接下来就说下有哪些元素定位的方式呢**  
 

## 方式一：通过元素的id

```python
# 找到id = username的元素
username = driver.find_element_by_id("username")
# 输入值 张三
username.send_keys("张三")
# 找到od = password的元素
password = driver.find_element_by_id("password")
# 输入值 123
password.send_keys("123")
```

### 知识点
在前端，一般一个**id值是唯一的，**只属于一个元素  
 

## 方式二：通过元素的class

```python
# =====通过 元素Class查找（仅返回匹配到的第一个）
login_btn = driver.find_element_by_class_name("login")
# 点击
login_btn.click()
```

### 知识点

- 在前端，一般多个元素共用一个**class**
- 但 find_element_by_class_name 只返回第一个匹配到**class**的元素
- **坏处：**当找不到元素则报错
- **如果想返回所有匹配到class的元素，可看下面代码**


```python
# =====找到所有class=li的元素
lis = driver.find_elements_by_class_name("li")
for i in lis:
    print(i.text)
```

### 执行结果

```python
111
222
333
```

### 知识点

- 返回的是一个元素列表，若只匹配到一个也是列表
- 好处：当没有找到元素时不会报错，而是返回空列表 []

 

## 方式三：通过元素的name

```python
# =====通过 元素name查找元素（仅返回匹配到的第一个）
password = driver.find_element_by_name("password")
# =====输入值 123
password.send_keys("123")
```

### 知识点

- 和class一样，也有可能有多个元素共用一个**name**
- 但  find_element_by_name  只返回第一个匹配到**name**的元素
- 想返回多个的话，和class一样，需要调用 find_elements_by_name 方法，这里不再赘述，写法和上面一致（已标红）

 

## 方式四：通过元素标签
```python
# =====通过 元素标签（仅返回匹配到的第一个）=====
p = driver.find_element_by_tag_name("p")
# 打印元素的文本值
print(p.text)
print("===")
# =====通过 元素标签（返回匹配到的所有元素）=====
ps = driver.find_elements_by_tag_name("p")
for p in ps:
    print(p.text)
```

### 执行结果

```python
测试啦===
测试啦
再一次测试啦
```

### 知识点

- 多个元素同种HTML标签见怪不怪了
- 同样的， find_element_by_tag_name 返回第一个匹配到**标签**的元素
- find_elements_by_tag_name 可以返回所有匹配到**标签**的元素

 

## 方式五：通过超链接文本

```python
# =====通过 超链接的文本查找元素（仅支持精确匹配）
atext = driver.find_element_by_link_text("抗击肺炎")
print(atext.text)
print("===")
ass = driver.find_elements_by_link_text("抗击肺炎")
for i in ass:
    print(i.text)
```

### 执行结果

```python
抗击肺炎===
抗击肺炎
抗击肺炎
```

### 知识点

- find_element_by_link_text 是精确匹配，需要文本完全相同才能匹配
- 若需要返回全部匹配到的元素，也需要用 find_elements_by_link_text 

 

## 方式六：通过超链接文本（模糊匹配）

```python
# =====通过 超链接的文本查找元素（支持模糊匹配）
atext = driver.find_element_by_partial_link_text("肺炎")
print(atext.text)
print("===")
ass = driver.find_elements_by_partial_link_text("肺炎")
for i in ass:
    print(i.text)
```

### 执行结果

```python
终极抗击肺炎啊
===
终极抗击肺炎啊
抗击肺炎
抗击肺炎
```

### 知识点

- find_element_by_partial_link_text 支持模糊匹配，包含文本则匹配成功
- 若需要返回全部匹配到的元素，也需要用  find_elements_by_partial_link_text

 

## 方式七：通过xpath（万能，重点）

```python
# ====通过 xpath
lis = driver.find_element_by_xpath("/html/body/div/ul[2]/li[1]")
print(lis.text)
执行结果
```

### 执行结果
```python
aaa
```
**注意： xpath **包含的知识点很多，暂时不在这篇幅展开讲，后续会单独补充详细博文哦！  
 

## 方式八：通过css选择器（万能，重点）
```python
# ====通过css选择器
lis = driver.find_element_by_css_selector("body > div > ul > li:nth-child(2)")
print(lis.text)
```

### 执行结果
```python
222
```
**注意： css选择器 **包含的知识点很多，暂时不在这篇幅展开讲，后续会单独补充详细博文哦！

> 转载：[https://www.cnblogs.com/poloyy/p/12568983.html](https://www.cnblogs.com/poloyy/p/12568983.html)

