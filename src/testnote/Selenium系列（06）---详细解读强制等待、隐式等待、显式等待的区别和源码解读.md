
## **设置元素等待**
**为什么需要设置元素等待？**

- **因为**，目前大多数Web应用程序都是使用Ajax和Javascript开发的；每次加载一个网页，就会加载各种HTML标签、JS文件 
- **但是**，加载肯定有加载顺序，大型网站很难说一秒内就把所有东西加载出来，不仅如此，加载速度也受网络波动影响
- **因此**，当我们要在网页中做**元素定位**的时候，有可能我们打开了网页但元素未加载出来，这个时候就定位不到元素，就会报错 
- **所以**，我们需要设置元素等待，**意思就是：**等待指定元素已被加载出来之后，我们才去定位该元素，就不会出现定位失败的现象了

 

### 如果我们不设置元素等待，那怎么避免 **因元素未加载出来而定位失败 **的情况出现呢？

- 答案很简单，就是调用 sleep() ，也叫**强制等待  **
- 但是**缺点**就是：如果指定的时间过长，即使元素已被加载出来了，但还是要继续等，这样会浪费很多时间

## 强制等待的栗子

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  =
__Time__   = 2020/3/25 17:52
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
from time import sleep
from selenium import webdriver

driver = webdriver.Chrome("../resources/chromedriver.exe")
20)

# 访问网址
driver.get("http://www.baidu.com")

# ===强制等待3秒才执行下一步===
sleep(3)

# 找到搜索框
inputElement = driver.find_element_by_id("kw")

```

# WebDriver提供了两种类型的等待：显式等待和隐式等待

## 隐式等待

### 什么是隐式等待？

- 如果某些元素不是立即可用的，隐式等待是告诉WebDriver去等待一定的时间后去查找元素
- 默认等待时间是0秒，隐式等待对整个WebDriver的周期都起作用，所以只要设置一次即可

 

### **如何体现隐式等待？**
如果在规定时间内，整个网页都加载完成，则执行下一步，否则会抛出异常   
 

### 隐式等待的弊端
**可以把隐式等待当做全局变量**，它影响整个页面，所以程序需要等待整个**页面加载完成（就是浏览器标签栏那个小圈不再转）时，才会执行下一步****【页面加载完成，才能执行下一步】**  
但可能页面加载未完成的时候，需要定位的元素已经加载完成了，但受限于某些JS文件、图片加载特别慢，我们不能执行下一步，**必须**得等到网页所有东西都加载完了才能下一步**【增加不必要的加载时间】**  
 

### 隐式等待的代码
很简单，就调用一个方法即可，毕竟是作用于WebDriver的  

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  =
__Time__   = 2020/3/25 17:52
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""

from selenium import webdriver

# 加载驱动
driver = webdriver.Chrome("../resources/chromedriver.exe")

# ===隐性等待20s===
driver.implicitly_wait(20)

# 访问网址
driver.get("http://www.baidu.com")

# 找到搜索框
inputElement = driver.find_element_by_id("kw")

```

## 显式等待 

### 什么是显式等待？

- 需要定位某个元素的时候，但元素可能不可见，这个时候**针对这个元素**就可以使用显式等待了
- 显式等待和隐式等待最大的不同就是：**你可以它看成是局部变量，作用于指定元素**

 

### 显式等待的优势
相比隐式等待，显式等待只对指定元素生效，不再是在整个WebDriver生命周期内生效**【仅对元素生效】**  
可以根据需要定位的元素来设置显式等待，无需等待页面完全加载，节省大量因加载无关紧要文件而浪费掉的时间**【针对元素设置，无需等待页面加载完成，节省加载时间】**  
 

### 显式等待的代码

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  =
__Time__   = 2020/3/25 17:52
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
from time import sleep

from selenium import webdriver

# 加载驱动
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome("../resources/chromedriver.exe")

# 访问网址
driver.get("http://www.baidu.com")

# ===显式等待===

# 设置元素等待实例，最多等10秒，每0.5秒查看条件是否成立
element = WebDriverWait(driver, 10, 0.5).until(
    # 条件：直到元素加载完成
    EC.presence_of_element_located((By.ID, "kw"))
)

```

# WebDriverWait源码解读

```python
class WebDriverWait(object):
    def __init__(self, driver, timeout, poll_frequency=POLL_FREQUENCY, ignored_exceptions=None):
        """Constructor, takes a WebDriver instance and timeout in seconds.
           :Args:
            - driver - Instance of WebDriver (Ie, Firefox, Chrome or Remote)
            - timeout - Number of seconds before timing out
            - poll_frequency - sleep interval between calls
              By default, it is 0.5 second.
            - ignored_exceptions - iterable structure of exception classes ignored during calls.
              By default, it contains NoSuchElementException only.
```

## WebDriverWait实例初始化传参

- **driver：**WebDriver实例，传入前面声明的driver即可 
- **timeout：**最大超时时间；
- **poll_frequency：**执行间隔，默认0.5s
- **ignored_exceptions：**需要忽略的异常
   - 　　如果在调用 until() 或 until_not() 的过程中抛出这个元组中的异常， 则不中断代码，继续等待；
   - 　　如果抛出的是这个元组外的异常，则中断代码；
   - 　　忽略的异常默认只有 NoSuchElementException

 

## 通俗易懂的 WebDriverWait
WebDriverWait(driver实例, 超时时长, 调用频率, 忽略的异常).until(要调用的 方法, 超时时返回的信息)  
 

## WebDriverWait实例的两个方法

### until(self, method, message='')
**作用：**每隔一段时间**（上面的poll_frequency）**调用method，直到返回值**不为**False或**不为**空  
**method：**需要执行的method  
**message：**抛出异常时的文案，会返回 TimeoutException ，表示超时  
**注意**：这个才是常用的，如：定位元素直到不返回空  
 

### until_not(self, method, message='')
**作用：**调用method，直到返回值**为**False或**为**空  
**method：**需要执行的method  
**message：**抛出异常时的文案，会返回  TimeoutException ，表示超时  
 

### 两个方法的 method参数注意点
如果直接传入WebElement（页面元素）对象  

```python
WebDriverWait(driver, 10).until(driver.find_element_by_id('kw'))
```
则会抛出异常  

```python
TypeError: 'xxx' object is not callable
```
method 参数需要传入的对象必须包含   __call()__  方法 ，什么意思？让对象可以直接被调用   
 

### 官方提供的两个小例子

```python
element = WebDriverWait(driver, 10).until(lambda x: x.find_element_by_id("someId")) 
is_disappeared = WebDriverWait(driver, 30, 1, (ElementNotVisibleException)).until_not(lambda x: x.find_element_by_id("someId").is_displayed())
```
   
可以看到，通过匿名函数也是可以的，可以说比后面介绍的  expected_conditions   模块要方便多了  
   
**那么有哪些是包含  __call()__  的对象呢？**

- expected_conditions 模块（接下来重点讲的）
- WebElement的 is_displayed() 、 is_enabled() 、 is_selected()

 

# expected_conditions源码解读
 

## expected_conditions的介绍
是selenium中的一个模块，包含一系列用于判断的条件类，一共26个类  
   
**这里就只介绍两个在设置元素等待里面最常用的判断条件类**  
** **

## **其一：presence_of_element_located**

```python
class presence_of_element_located(object):
    """ An expectation for checking that an element is present on the DOM
    of a page. This does not necessarily mean that the element is visible.
    locator - used to find the element
    returns the WebElement once it is located
    """
    
    def __init__(self, locator):
        self.locator = locator
        
    def __call__(self, driver):
        return _find_element(driver, self.locator)
```

### 作用
检查当前DOM树种是否存在该元素（和是否可见没有关系），**只要有一个元素加载出来则通过**  
 

### locator参数 
传入一个元组，格式如下 （By.ID, "元素ID"）

- 第一个参数：定位元素的方式，和那八种元素定位方式一样，只是这里需要引入 By 模块，然后再调用类属性 
- 第二个参数：和之前调用元素定位方法一样传参即可 
- 所以正确写法是： presence_of_element_located((By.ID, "kw"))

### 一起来看看By模块的源码

```python
class By(object):
    """
    Set of supported locator strategies.
    """
    ID = "id"
    XPATH = "xpath"
    LINK_TEXT = "link text"
    PARTIAL_LINK_TEXT = "partial link text"
    NAME = "name"
    TAG_NAME = "tag name"
    CLASS_NAME = "class name"
    CSS_SELECTOR = "css selector"
```
 

## **其二：presence_of_all_elements_located**
源码几乎一样  

```python
class presence_of_all_elements_located(object):
    def __init__(self, locator):
        self.locator = locator
        
    def __call__(self, driver):
        return _find_elements(driver, self.locator)
```
 

### 唯一要注意的点就是 

- 因为调用的是 _find_elements ，会返回多个元素
- 如果用这个条件类，**必须等所有匹配到的元素都加载出来才通过**

**
> 转载： [https://www.cnblogs.com/poloyy/p/12587729.html](https://www.cnblogs.com/poloyy/p/12587729.html)

