
## 作用
获取所有 Cookie，返回一个 Cookie 对象数组  
 

## 语法格式

```javascript
cy.getCookies()
cy.getCookies(options)
```
 

#### options 参数

- **log：**是否将命令显示到命令日志中，默认 true
- **timeout：**命令超时时间

 

## 正确用法

```javascript
cy.getCookies()
```
 

## 命令返回结果
返回一个 Cookie 对象组成的**数组**，每个 Cookie 对象都包含以下属性

- domain
- expiry (如果有)
- httpOnly
- name
- path
- sameSite (如果有)
- secure
- value

 

## 实际栗子

### 栗子一：直接访问网站

#### 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122111333943-162454375.png)  
可以用 .each() 来遍历 Cookie 对象数组  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122111416597-893879607.png)  
 

#### getCookies 返回结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122111424010-53831723.png)  
Cookie 对象数组  
 

### 栗子二：简单登录页面

#### 代码

```javascript
//<reference types="cypress" /R>
describe('getCookies 登录页面', function () {
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
        cy.getCookies()
            .should('exist')
            .should('have.length', 1)
            .each((cookie) => {
                // 循环遍历每个 Cookie 对象
                cy.log(cookie)
            })
            .then((cookies) => {
                // 打印 Cookie 对象数组
                cy.log(cookies)
            })
    })
})
```
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122111557795-1171001446.png)  
 
> [https://www.cnblogs.com/poloyy/p/14014705.html](https://www.cnblogs.com/poloyy/p/14014705.html)

