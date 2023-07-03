
## **控制浏览器有哪些操作？**
- 最大化、最小化浏览器
- 控制、获取浏览器大小
- 获取当前标签页title、url
- 前进、后退、刷新
- 执行js语句
- 打开、关闭新标签页
- 滚动页面

**点击右边目录即可跳转哦！ -------------->>>>>>>>>> **  
 

## 最大化、最小化浏览器

```python
from time import sleep
from selenium import webdriver

# 加载浏览器驱动
driver = webdriver.Chrome("../resources/chromedriver.exe")
# 访问网址
driver.get("https://www.baidu.com")
# 最大化浏览器
driver.maximize_window()
sleep(2)
# 最小化浏览器
driver.minimize_window()
```
 

## 控制、获取浏览器大小

```python
# 加载浏览器驱动
driver = webdriver.Chrome("../resources/chromedriver.exe")
# 访问网址
driver.get("https://www.baidu.com")
# 获取浏览器大小
size = driver.get_window_size()
print(f"浏览器大小:{size}")
sleep(2)
# 设置浏览器大小
driver.set_window_size(1200, 1000)
```

### 执行结果

```python
浏览器大小:{'width': 1936, 'height': 1056}
```

### 知识点
get_window_size() 返回的是字典  
 

## 获取当前标签页title、url

```python
# 加载浏览器驱动
driver = webdriver.Chrome("../resources/chromedriver.exe")

# 访问网址
driver.get("https://www.baidu.com")

# 获取当前标签页的title
print(f"标签页title：{driver.title}")

# 获取当前标签页的url
print(f"标签页url：{driver.current_url}")

# 获取当前浏览器的名称（不常用）
print(f"标签页name：{driver.name}")

# 获取当前页面完整的HTML代码

```
  
（不常用）
```python
print(f"标签页page_source：{driver.page_source}")
```

### 执行结果

```python
标签页title：百度一下，你就知道
标签页url：https://www.baidu.com/
标签页name：chrome
标签页page_source：<html><head>...</head></html>

```
 

## 前进、后退、刷新

```python
# 前进
driver.forward()

# 后退
driver.back()

# 刷新
driver.refresh()

```
 

## 执行js语句

```python
# 同步执行js
js='console.log(2)'
driver.execute_script(js)

# 异步执行js
driver.execute_async_script("alert(2)")

```
 

## 打开、关闭新标签页

```python
# 打开新的标签页
js = 'window.open("https://www.baidu.com/")'
driver.execute_script(js)

# 获取当前标签页句柄
print(driver.current_window_handle)

# 获取浏览器所有标签页句柄
handles = driver.window_handles
print(handles)

# 切换标签页
driver.switch_to.window(handles[-1])

# 关闭当前标签页
driver.close()

```

### 执行结果

```python
CDwindow-24C58D8D81CCC95D5D55E887402B7E0A
['CDwindow-24C58D8D81CCC95D5D55E887402B7E0A', 'CDwindow-04C35D93CD4A04351BAC1CFFA36378CA', 'CDwindow-AC59AC67423FB8463AF0C534C7A47098']

```

### 知识点

- 打开新的标签页只能通过 js 来操作
- 可以根据标签页的**句柄**来切换标签页
- 操作标签页的好处就是，可以只打开一个浏览器但可以访问多个不同的网页；这在后续集成单元测试框架（unittest、pytest）的时候会有很大的帮助

 

## 滚动页面

```python
# 滚动随机高度
js = "var q=document.documentElement.scrollTop=" + random.randint(100, 999)
driver.execute_script(js)
```

### 知识点
这里暂时只介绍js的滚动方法，滚动其实有几种高级方法的，后续有空补上

> 转载： [https://www.cnblogs.com/poloyy/p/12574439.html](https://www.cnblogs.com/poloyy/p/12574439.html)

