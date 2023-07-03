
## **为什么需要Cookie操作**
有时候我们需要验证浏览器中Cookie是否正确，因为基于真实Cookie的测试是无法通过白盒和集成测试进行的  
测试某些网站若需要先登录，可以直接通过接口去登录，把返回的Cookie存起来，相当于UI自动化上的免登录了，除开了不必要的登录操作  
 

## 有哪些Cookie操作

- get_cookies()： 获得所有cookie信息  

- get_cookie(name)： 返回字典的key=name的cookie信息  

- add_cookie(cookie_dict) ： 添加cookie  

- delete_cookie(name)：删除cookie信息name是要删除的cookie的名称  

- delete_all_cookies()： 删除所有cookie信息  


 

## 直接上代码

```python
# 浏览器
driver = webdriver.Chrome("../resources/chromedriver.exe")
driver.get("https://px.seewo.com/product")

# 获得网站的Cookies信息
cookie = driver.get_cookies()

# 将获得Cookies的信息打印
print(cookie)

# 发起登录请求

# 登录后存放的两个token，需要添加到Cookie中去
cookie_list = {}
cookies["px-token"] = exchangedToken
cookies["x-token"] = token

# 添加Cookie
for cookie_ in cookies.items():
    driver.add_cookie({'name': cookie_[0], 'value': cookie_[1], 'path': '/', 'httpOnly': True, 'secure': True})

# 再次打印Cookie
print(driver.get_cookies())

# 执行UI自动化操作
# ......
# ......

# 发起退出登录请求

# 删除某个Cookie
driver.delete_cookie("x-token")

# 删除所有Cookie
driver.delete_all_cookies()

# 浏览器关闭
driver.quit()

```
可以看看， get_cookies()  返回的数据是什么样的  

```bash
[{'domain': '.training.test.seewo.com', 'httpOnly': False, 'name': 'Hm_lpvt_b195036baa8d1a75b4e9572ee8593bdd', 'path': '/', 'secure': False, 'value': '1586141195'}, {'domain': '.training.test.seewo.com', 'expiry': 1617677195, 'httpOnly': False, 'name': 'Hm_lvt_b195036baa8d1a75b4e9572ee8593bdd', 'path': '/', 'secure': False, 'value': '1586141195'}, {'domain': 'training.test.seewo.com', 'expiry': 1586227594.128949, 'httpOnly': True, 'name': 'connect.magick', 'path': '/', 'secure': False, 'value': 's%3AyLzNW4COEHLgiVSDtpv1pcUKzKmsMpoj.5mQxyZpM9kUEdsqXTyCFoht%2F3avDA20S%2Foz5jB52G7U'}]
```
 

## 源码解读
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200406102052434-567029752.png)  
 

### 知识点

- **get_cookie**：从get_cookies()返回的Cookie列表中，循环判断，获取对应的Cookie
- **add_cookie**：传入dict对象，有两个必传key值：name、vlaue；五个可选key值：path、domain、secure、expiry、httpOnly；可以看到你的字典对象不能乱传key，否则会报错
- **delete_cookie**：传入的是Cookie的name值

 
> 转载： [https://www.cnblogs.com/poloyy/p/12640783.html](https://www.cnblogs.com/poloyy/p/12640783.html)

