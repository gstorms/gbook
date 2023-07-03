
## 作用
清除所有 Cookie  
 

## 前言重点知识

- Cypress 会在每次测试前**自动清除**所有 Cookie，以防止在测试用例之间共享状态
- 除非在测试用例中需要调用此命令清除所有 Cookie，否则不需要使用该命令

 

## 语法格式

```javascript
cy.clearCookies()
cy.clearCookies(options)
```
 

#### options 参数

- **log：**是否将命令显示到命令日志中，默认 true
- **timeout：**命令超时时间

 

## 正确用法

```javascript
// 清除所有 Cookie
cy.clearCookies()
```
 

## 命令返回结果

- 返回 null
- **重点：**该命令后面不能再链接其他命令

 

## 实际栗子

#### 代码

```javascript
//<reference types="cypress" /R>
describe('clearCookies 登录页面', function () {
    const username = 'jane.lane'
    const password = 'password123'
    before(function () {
        // 登录操作
        cy.visit("http://localhost:7079/login")
        cy.get("input[name=username]").type(username)
        cy.get("input[name=password]").type(password)
        cy.get("form").submit()
    })
    it('获取登录后的 cookie', function () {
        // 获取登录后的 Cookie
        cy.getCookie("cypress-session-cookie")
            .should('exist')
        // 清空 Cookie
        cy.clearCookies()
        // 再次查看 Cookie
        cy.getCookies()
            .should('be.empty')
    })
})
```
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122125635718-929986704.png)  
 

#### clearCookies 返回结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122125640748-951407399.png)  
 
> [https://www.cnblogs.com/poloyy/p/14014713.html](https://www.cnblogs.com/poloyy/p/14014713.html)

