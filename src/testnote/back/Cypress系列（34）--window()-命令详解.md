
## 作用
获取当前页面的 window 对象  
 

## 语法格式

```javascript
cy.window()
cy.window(options)
```
**options：**只有 timeout 和 log，不再展开讲了  
 

## 正确写法

```javascript
cy.window()
```
 

## 实际栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617104546982-1900788219.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617104551414-546048760.png)  
 

#### .window() 命令的产物
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617104621742-729013463.png)  
可以看到，window 对象包含了很多属性值  
 
> [https://www.cnblogs.com/poloyy/p/13151135.html](https://www.cnblogs.com/poloyy/p/13151135.html)

