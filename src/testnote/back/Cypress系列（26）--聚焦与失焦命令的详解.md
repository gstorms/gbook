
## .focus() 命令
聚焦 DOM 元素  
 

### 语法格式

```javascript
.focus()
.focus(options)
```
 

### 正确写法

```javascript
cy.get('input').first().focus()
```
**重点**

- 必须是 DOM 元素才能调用 .focus() 方法，不一定是要输入框哦
- 确保 DOM 元素是**可聚焦**的

 

### 错误写法

```javascript
// 不能直接用 cy 调用
cy.focus('#search') 
// 必须是 DOM 元素才能调用
cy.window().focus()
```
 

### options
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616130100210-706826669.png)  
 

## .blur()
让聚焦的 DOM 元素失焦  
 

### 语法格式

```javascript
.blur()
.blur(options)
```
 

### 正确写法

```javascript
// 输入内容后，再让输入框失焦
cy.get('[type="email"]').type('me@email.com').blur()
// 先聚焦再失焦
cy.get('[tabindex="1"]').focus().blur()
```
**重点**

- 必须是 DOM 元素才能调用  .blur()  方法，不一定是要输入框哦
- 确保 DOM 元素是**可失焦**的

 

### 错误写法

```javascript
// 不能直接用 cy 调用
cy.blur('#search') 
// 必须是 DOM 元素才能调用
cy.window().blur()
```
 

### options
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616131408850-1794993101.png)  
 

> [https://www.cnblogs.com/poloyy/p/13140409.html](https://www.cnblogs.com/poloyy/p/13140409.html)

