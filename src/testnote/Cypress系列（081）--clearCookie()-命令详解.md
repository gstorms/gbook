
## 作用
清除指定名称的 Cookie  
 

## 前言重点知识

- Cypress 会在每次测试前**自动清除**所有 Cookie，以防止在测试用例之间共享状态
- 除非在测试用例中需要调用此命令清除某个 Cookie，否则不需要使用该命令

 

## 语法格式

```javascript
cy.clearCookie(name)
cy.clearCookie(name, options)
```
name 必传   
 

#### options 参数

- **log：**是否将命令显示到命令日志中，默认 true
- **timeout：**命令超时时间

 

## 正确用法

```javascript
// 清除 token 这个 Cookie
cy.clearCookie('token')
```
 

## 命令返回结果

- 返回 null
- **重点：**该命令后面不能再链接其他命令

 

## 实际栗子

#### 代码

```javascript
describe('clearCookie() 命令详解', function () {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/cookies')
    })
    it('栗子一', () => {
        // 执行测试用例, 暂无 Cookie
        cy.getCookie('token')
            .should('be.null')
        // 获取 Cookie
        cy.get('#clearCookie .set-a-cookie').click()
        cy.getCookie('token')
            .should('have.property', 'value', '123ABC')
        // 清除 Cookie
        cy.clearCookie('token')
        cy.getCookie('token')
            .should('be.null')
    })
    it('栗子二', () => {
        // 测试用例之间 Cookie 不会共享
        cy.getCookie('token')
            .should('be.null')
    })
})
```
可以使用 .should('be.null') 判断某 Cookie 是空的  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122124945592-215430784.png)  
 

#### clearCookie 返回结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122124959226-1553094895.png)  
 
> [https://www.cnblogs.com/poloyy/p/14014709.html](https://www.cnblogs.com/poloyy/p/14014709.html)

