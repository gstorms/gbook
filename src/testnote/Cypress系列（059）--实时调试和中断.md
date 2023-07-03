
## 前言
Cypress 提供了两种方式的 debug  
 

## .debug()

### 作用

- 在定位问题时，可以使用 .debug() 来调试，查看此时系统的状态
- 记得需要打开浏览器开发者工具哦（F12），才能让调试生效

 

### 语法格式

```javascript
.debug()
.debug(options)
// ---or---
cy.debug()
cy.debug(options)
```
   
 

### 命令返回结果
返回上一条命令产生的结果  
 

### 正确用法

```javascript
// 在命令开头就进行调试
cy.debug().getCookie('app')
// 调试 get 命令
cy.get('nav').debug()
```
 

### 栗子

```javascript
cy.get('a').debug().should('have.attr', 'href')
```
 

#### 测试结果
主要看 F12  
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927153447978-2043375828.png)  
 

## debugger

### 作用
Cypress 测试代码和被测应用运行在同一个循环中，意味着有访问和控制页面上运行着的代码的权利  
 

### 栗子一

```javascript
it('debugger', function () {
    cy.get('a').then(function () {
        debugger
    })
});
```
记得需要打开浏览器开发者工具哦（F12）  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927151337621-1001918168.png)  
 

#### 命令执行流程
上面的代码整个工作流程如下

- cy.visit() 访问页面，Cypress 等待加载
- 查询该元素（a 标签），如果没有立即找到它，Cypress会自动等待并重试一会儿
- .get()  执行结果传递给 .then() 函数
- 在 .then() 函数的上下文中，调用 debugger 调试器，停止运行测试代码并调用 Developer Tools 的焦点
- 检查应用程序的状态，执行 debugger

 
> [https://www.cnblogs.com/poloyy/p/13739864.html](https://www.cnblogs.com/poloyy/p/13739864.html)

