
## 作用
- 返回传递给它的对象
- 返回的是一个 Promise 对象，可以直接接 Cypress 其他命令
- 如果传递给它的就是一个 Promise 对象，则返回它的值

 

## 语法格式

```javascript
cy.wrap(subject)
cy.wrap(subject, options)
```
 

#### **subject**
需要返回的对象  
 

#### **options**
 

- **log：**是否将命令显示到命令日志中，默认 true
- **timeout：**命令超时时间

   
 

## 最简单的栗子

```javascript
// 声明一个整数
cy.wrap(123).should('eq', 123)
// 声明一个字符串
cy.wrap('abc').and('contain', 'a')
```
 

## 声明一个对象的栗子
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200917163531442-789595049.png)  
 

## 对象属性值是函数的栗子
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200917163541801-1899514044.png)  
 

## 页面元素 Element 的栗子
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200917163648966-327615995.png)  
 

> [https://www.cnblogs.com/poloyy/p/13672255.html](https://www.cnblogs.com/poloyy/p/13672255.html)

