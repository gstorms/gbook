
## 作用
设置一个 Cookie  
 

## 语法格式

```javascript
cy.setCookie(name, value)
cy.setCookie(name, value, options)
```
 

#### name
Cookie 的名称  
 

#### value
Cookie 的值  
 

#### options 参数
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122113149970-1639094386.png)  
 

## 正确用法

```javascript
cy.setCookie('auth_key', '123key')
```
 

## 命令返回结果
返回设置的 Cookie 对象并且包含以下属性

- domain
- expiry (如果有)
- httpOnly
- name
- path
- sameSite (如果有)
- secure
- value

 

## 实际栗子

#### 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122113807205-2003884352.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122113812912-4969433.png)  
 

#### setCookie 返回结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122113817963-1652547470.png)  
 
> [https://www.cnblogs.com/poloyy/p/14014706.html](https://www.cnblogs.com/poloyy/p/14014706.html)

