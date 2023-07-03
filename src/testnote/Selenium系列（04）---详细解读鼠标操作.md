
## 引入HTML页面

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
 

## **背景**
用selenium做自动化，有时候会遇到需要模拟鼠标操作才能进行的情况，比如单击、双击、点击鼠标右键、拖拽等等。  
而selenium给我们提供了一个类来处理这类事件—— ActionChains  
 

# 有哪些鼠标操作呢？

- 执行操作
- 左键、右键单击、双击
- 鼠标悬停到元素、偏移处
- 长按
- 拖动

**点击右边目录即可跳转哦！ -------------->>>>>>>>>> **  
 

## 执行操作
perform() 方法  
主要是调用其他操作方法后，都要再次调用这个方法，表示执行某个鼠标操作，后面会有例子  
 

## 左键、右键单击、双击

```python
from selenium.webdriver import ActionChains
from selenium import webdriver

driver = webdriver.Chrome("../resources/chromedriver.exe")

# 创建实例
chains = ActionChains(driver)

# 访问网址
driver.get("file:///C:/test.html")

# 登录按钮
username = driver.find_element_by_id("username")
login_btn = driver.find_element_by_class_name("login")
password = driver.find_element_by_id("password")

# 左键点击
chains.click(username).perform()

# 右键点击
chains.context_click(username).perform()

# 双击
chains.double_click(password).perform()
```

## 鼠标悬停到元素、偏移处

```python
# 悬停到设置按钮
chains.move_to_element(login_btn).perform()
# 悬停到指定偏移量
chains.move_to_element_with_offset(login_btn, 2, 2).perform()
```

### 知识点
move_to_element_with_offset() 是先找到元素，再根据元素位置偏移指定偏移量  
 

## 长按

```python
# 长按
chains.click_and_hold(login_btn).perform()
```
 

## 拖动

```python
# 拖动1
chains.drag_and_drop(source=username, target=password)

# 拖动2
chains.drag_and_drop_by_offset(source=username, xoffset=20, yoffset=20)
```

### 知识点

- drag_and_drop 将源元素拖动到目标元素处
- drag_and_drop_by_offset 将源元素拖动指定偏移量

 
> 转载： [https://www.cnblogs.com/poloyy/p/12584192.html](https://www.cnblogs.com/poloyy/p/12584192.html)

