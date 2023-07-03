
## 作用
获取当根元素  
 

## 语法格式

```javascript
cy.root()
cy.root(options)
```
**options：**只有 timeout 和 log，不再展开讲了  
 

## 正确写法

```javascript
// 根元素是<html>
cy.root()
// 根元素是<nav>
cy.get('nav').within(($nav) => {
  cy.root() 
})
```
 

## 实际栗子

#### html 代码

```javascript
<form id="contact">
    <input type="text" name="email">
    <input type="text" name="password">
    <button type="submit">Send</button>
</form>
```
 

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617112828750-1344325179.png)  
这里调用了两次 root()

1. 直接通过 cy调用
1. 在 .within() 回调函数中获取根元素

 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617112846313-229673919.png)  
可以看到， cy.root()  返回的就是 html 元素  
   
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617112851062-286729244.png)  
而这里返回的是 form 元素

> [https://www.cnblogs.com/poloyy/p/13151649.html](https://www.cnblogs.com/poloyy/p/13151649.html)

