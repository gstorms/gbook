
## 作用
- 创建一个断言，断言将自动重试，直到它们通过或超时
- 和 should() 一个用法

 

## 语法格式

```javascript
.and(chainers)
.and(chainers, value)
.and(chainers, method, value)
.and(callbackFn)
```
 

#### 参数说明

- **chainers：**断言器
- **value：**需要断言的值
- **method：**需要调用到的方法
- **callbackFn：**回调方法，可以满足自己想要断言的内容；且总是返回前一个 cy 命令返回的结果，方法内的 return 是无效的；会一直运行直到里面没有断言

 

## and() 返回的结果
在大多数情况下，.and() 返回与上一个命令相同的结果

```javascript
cy
  .get('nav')                       // 返回 <nav>
  .should('be.visible')             // 返回 <nav>
  .and('have.class', 'open')        // 返回 <nav>
```
   
但是，某些 chainer 会改变返回的结果

```javascript
cy
  .get('nav')                       // 返回 <nav>
  .should('be.visible')             // 返回 <nav>
  .and('have.css', 'font-family')   // 返回 'sans-serif'
  .and('match', /serif/)            // 返回 'sans-serif'
```
 

## 简单的栗子

### 对同一结果操作的栗子（button 元素）

```javascript
cy.get('button').should('have.class', 'active').and('not.be.disabled')
```
 

### chainer 改变返回结果的栗子

#### html 代码

```html
<li>
    <a href="users/123/edit">Edit User</a>
  </li>
```
 

#### cypress 代码

```javascript
cy
  .get('a')
  .should('contain', 'Edit User') // 返回的是 <a>
  .and('have.attr', 'href')       // 返回的是 href 的值
  .and('match', /users/)          // 返回的是 href 的值
  .and('not.include', '#')        // 返回的是 href 的值
```
 

### method + value 参数的栗子
断言 href 属性值是否等于 /users

```javascript
cy
  .get('a')
  .should('have.class', 'active')
  .and('have.attr', 'href', '/users')
```

> [https://www.cnblogs.com/poloyy/p/13678233.html](https://www.cnblogs.com/poloyy/p/13678233.html)

