
## **如何通过selenium控制浏览器滚动条呢？**
- selenium没有提供原生的滚动页面方法，所以我们得通过最原始的JS来控制
- 原理：通过  driver.execute_script() 执行js代码，达到目的

 

## 方式一：scrollBy(x,y)

```python
driver.execute_script（"window.scrollBy(0,1000)"）
```
x：必传，正数则向右滑动的像素值，负数则向左滑动的像素值  
y：必传，正数则向下滑动的像素值，负数则向上滑动的像素值  
 

## 方式二：scrollTo(x,y)

```python
driver.execute_script（"window.scrollTo(0,1000)"）
```
x：必传，正数则向右滑动的像素值，负数则向左滑动的像素值  
y：必传，正数则向下滑动的像素值，负数则向上滑动的像素值  
 

## 方式三：document.documentElement.scrollTop

### 作用一：获取当前滚动高度

```python
# 获取当前滚动高度
scrolTop = driver.execute_script（"document.documentElement.scrollTop"）
```
 

### 作用二：设置滚动高度

```python
# 设置滚动高度
driver.execute_script（"document.documentElement.scrollTop=1000"）
```
 
