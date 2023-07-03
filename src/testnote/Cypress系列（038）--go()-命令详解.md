
## 作用
在浏览器历史记录中，访问前一个或后一个 URL  
 

## 语法格式

```javascript
cy.go(direction)
cy.go(direction, options)
```
**options：**只有 timeout 和 log，不再展开讲了  
 

## 正确格式

```javascript
// 相当于单击浏览器左上角的后退←按钮
cy.go("back")
// 相当于单击浏览器左上角的前进→按钮
cy.go("forward")
```
 

## 实际栗子

```javascript
// 相当于单击浏览器左上角的后退←按钮
cy.go(-1)
// 相当于单击浏览器左上角的前进→按钮
cy.go(1)
```
 

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200621181000984-1780326003.png)  
 
> [https://www.cnblogs.com/poloyy/p/13173455.html](https://www.cnblogs.com/poloyy/p/13173455.html)

