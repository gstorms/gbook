
## **针对元素有哪些常见的简单操作？**
- 点击
- 输入内容、清除内容
- 返回元素尺寸、坐标
- 获取元素标签文本
- 获取元素属性值
- 检查元素：是否可见、是否可点击、是否已被选择
- 表单提交

**点击右边目录即可跳转哦！ -------------->>>>>>>>>> **  
   
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
<a href="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_pc_1" target="_blank" id="virus-202"
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
<button type="button" class="ant-btn1" disabled="disabled">不可点击元素</button>
<button type="button" class="ant-btn2">可点击元素</button>

<button type="button" class="ant-btn3" style="display: none">不可见元素</button>
<button type="button" class="ant-btn4" style="display: block">可见元素</button>

<select>
    <option value="volvo"></option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi" selected>Audi</option>
</select>

```
 

## 点击

```python
from selenium import webdriver

# 加载浏览器驱动
driver = webdriver.Chrome("../resources/chromedriver.exe")

# 访问网址
driver.get("file:///C:/test.html")

# =====通过 元素Class查找（仅返回匹配到的第一个）=====
login_btn = driver.find_element_by_class_name("login")

# 点击
login_btn.click()

```
 

## 输入内容、清除内容

```python
# 找到id = username的元素
username = driver.find_element_by_id("username")

# 输入值 张三
username.send_keys("张三")

# 清空内容
username.clear()

```
 

## 返回元素尺寸、坐标

```python
# 找到id = username的元素
login_btn = driver.find_element_by_class_name("login")

# 打印 元素宽高
print(f"元素宽高:{login_btn.size}")

# 打印 元素 x , y坐标值
print(f"元素坐标值：{login_btn.location}")

```

### 执行结果

```python
元素宽高:{'height': 23, 'width': 42}
元素坐标值：{'x': 457, 'y': 8}

```

### 知识点

- size和location都是实例属性
- 返回的都是**字典**
- 元素坐标值是通过元素的最左上角和浏览器内容区域的左上角来定位的，**如下图**

![](https://img2020.cnblogs.com/blog/1896874/202003/1896874-20200327132626887-548793329.png)  
 

## 获取元素标签文本

```python
# 获取第一个标签为a的文本
a_text = driver.find_element_by_tag_name("a")
print(a_text.text)

# 获取第一个标签为div的文本
div_text = driver.find_element_by_tag_name("div")
print(ul_text.div_text)

```

### 执行结果

```python
用户名:
111
222
333
aaa
bbb
ccc

```

### 知识点

- .text 返回的是标签里面的文本，如 <html>内容....</html> ，返回的则是中间那些内容
- 如果**标签内还有子标签**，那也只会获取子标签的文本内容，不会获取标签，像上面获取div的text一样

 

## 获取元素属性值

```python
# 获取元素属性值
a_attr = driver.find_element_by_class_name("mnav")
print(a_attr.get_attribute("href"))

```

### 执行结果

```python
https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_pc_1
_blank
virus-202
mnav sp dot

```
 

## 检查元素：是否可见、是否可点击、是否已被选择

```python
# 找到 不可见元素
ant_btn3 = driver.find_element_by_class_name("ant-btn3")
# 找到 可见元素
ant_btn4 = driver.find_element_by_class_name("ant-btn4")

# 查看是否可见
print("不可见元素:", ant_btn3.is_displayed())
print("可见元素:", ant_btn4.is_displayed())

# 找到 不可点击元素
ant_btn3 = driver.find_element_by_class_name("ant-btn1")
# 找到 可点击元素
ant_btn4 = driver.find_element_by_class_name("ant-btn2")

# 查看是否可点击
print("不可点击元素:", ant_btn3.is_enabled())
print("可点击元素:", ant_btn4.is_enabled())

# 找到 未被选中的元素
option1 = driver.find_elements_by_tag_name("option")[0]
# 找到 已被选中的元素
option2 = driver.find_elements_by_tag_name("option")[-1]

# 查看是否被选择
print("未被选择元素:", option1.is_selected())
print("已被选择元素:", option2.is_selected())

```
 

### 执行结果

```python
不可见元素: False
可见元素: True
不可点击元素: False
可点击元素: True
未被选择元素: False
已被选择元素: True

```

### 知识点

- 某个元素若有 display：none 的样式则是不可见，否则就是可见
- 某个元素若有 disabled 属性则是不可点击，否则就是可点击
- 某个元素若有 selected 属性则是已被选择

 

## 表单提交

```python
driver.get("https://www.baidu.com")

# 找到搜索框
search_text = driver.find_element_by_id('kw')

# 输入搜索内容
search_text.send_keys('小菠萝测试笔记')

# 提交表单
search_text.submit()

```

### 知识点

- submit() 方法用于提交表单。
- **实际场景：**在搜索框输入关键字之后的“回车” 操作， 就可以通过该方法模拟

 
> 转载： [https://www.cnblogs.com/poloyy/p/12580691.html](https://www.cnblogs.com/poloyy/p/12580691.html)

