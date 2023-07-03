
## 前言
- 断言是测试用例的必要组成部分
- 没有断言，咱们就不知道测试用例的有效性，到底通过没通过
- Cypress 的断言基于 Chai 断言库，并且增加了对 Sinon-Chai、Chai-jQuery 断言库的支持，其中就包括 BDD 和 TDD 格式的断言

 

#### BDD 格式的断言

- expect
- should

 

#### TDD 格式的断言
assert  
 

## 常见的断言方式
以下列出了常见的元素断言

### 长度（Length）

```javascript
// 重试，直至找到3个匹配的<li.selected>
cy.get('li.selected').should('have.length',3)
```
**重点：** hava.length  
 

### 类（Class）

```javascript
// 重试，直至这个input不再有disabled的class
cy.get('form').find('input').should('not.hava.class','disabled')
```
**重点： not.hava.class **  
   
值（Value）

```javascript
// 重试，直至这个textarea的值为 poloyy
cy.get('textarea').should('have.value','poloyy')
```
**重点： **have.value  
 

### 文本内容（Text Content）

```javascript
// 重试，直至这个span不再包含'click me'
cy.get('a').parent('span.help').should('not.contain','click me')
```
**重点：** not.contain  
 

### 针对元素是否可见（Visibility）

```javascript
// 重试，直至button可见
cy.get('button').should('be.visible')
```
**重点：** be.visible  
 

### 针对元素是否存在（Existence）

```javascript
// 重试，直至 id=loading 元素不再存在
cy.get('#loading').should('not.exist')
```
**重点：** not.exist  
 

### 针对元素状态（State）

```javascript
// 重试，直至radio状态是checked
cy.get(':radio').should('be.checked')
```
**重点：** be.checked  
 

### 针对 CSS

```javascript
// 重试，直至complete这个类有匹配的css为止
cy.get('.completed').should('have.css','text-decoration','line-through')
```
**重点：** hava.css  
 

### 针对回调函数（callback）
如果内建的断言没有满足你的需求，可以自己写断言函数，然后作为一个**回调以参数的形式**传给 .should()

#### 假设源HTML如下

```html
<div class="main-abc123 heading-xyz987">Introduction</div>
```
 

#### 自己写的断言函数
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200604161533420-2069059568.png)  
 

> [https://www.cnblogs.com/poloyy/p/13044532.html](https://www.cnblogs.com/poloyy/p/13044532.html)

