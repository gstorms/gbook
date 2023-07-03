
## 背景
- Cypress 的断言库是基于 Chai 断言库的
- 并且增加了对 Sinon-Chai，Chai-jQuery 断言库的支持，带来了强大的断言功能
- Cypress 支持 **BDD**（expect/should）和 **TDD**（assert）格式的断言

 

## BDD、TDD 格式断言的简单栗子

#### BDD
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200928113101791-47376361.png)  
 

#### TDD
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200928113105013-1049047113.png)  
 

## Cypress 命令内置的断言
Cypress 命令通常具有内置的断言，这些断言将导致命令自动重试，以确保命令成功（或者超时后失败）

```javascript
it('cypress 命令自带断言', function () {
    cy.wrap({body: {name: 'poloyy'}})
    .its('body')
    .should('deep.eq', {name: 'poloyy'})
});
```
 

#### Cypress 有哪些常见内置断言操作的命令
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200930112336893-2111654388.png)  
 

## Cypress 提供两个方法来断言

### 隐性断言：should()、and()

- should()、and() 是 Cypress 推崇的方式
- and() 和 should() 其实使用方式和效果是完全一样的，具体可以看这篇文章：[https://www.cnblogs.com/poloyy/p/13678233.html](https://www.cnblogs.com/poloyy/p/13678233.html)

```javascript
cy
.get('form')
.should('be.visible')
.and('have.class', 'open')
```
 

### 显性断言：expect
expect 允许传入一个特定的对象并且对它进行断言

```javascript
expect(true).to.be.true
```
 

### 混合使用隐性断言和显性断言

```javascript
cy.get('.action-email')
.type('fake@email.com')
.should(($el) => {
    expect($el).to.have.value('fake@email.com')
    expect($el).to.be.visible
})
```
 

## TDD、BDD 常见断言

### BDD 形式的断言
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012110540376-670813682.png)  
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012110549950-1588662590.png)  
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012110558938-994786699.png)  
 

### TDD 形式的断言
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012142321310-379075955.png)  
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012142327399-970646860.png)  
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012142332992-2049319750.png)  
 
> [https://www.cnblogs.com/poloyy/p/13744006.html](https://www.cnblogs.com/poloyy/p/13744006.html)

