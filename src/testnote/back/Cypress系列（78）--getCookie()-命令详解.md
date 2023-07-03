
## 作用
获取指定名称的 Cookie  
 

## 语法格式

```javascript
cy.getCookie(name)
cy.getCookie(name, options)
```
name 必传   
 

#### options 参数

- **log：**是否将命令显示到命令日志中，默认 true
- **timeout：**命令超时时间

 

## 正确用法

```javascript
// 获取 token 这个 Cookie
cy.getCookie('token')
```
 

## 命令返回结果
返回一个 Cookie 对象，并且包含以下属性

- domain
- expiry (如果有)
- httpOnly
- name
- path
- sameSite (如果有)
- secure
- value

   
**注意：**当找不到指定 Cookie 时，该命令会返回 null   
 

## 实际栗子

### 栗子一：直接访问网站

#### 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201121113848229-495861926.png)

- 可以用 .should(exist) 判断 cookie 对象是否存在
- 也可以用 .should('have.property') 判断这个 cookie 对象的某个属性是否包含指定的值
- 最后用 .then() 暂存 cookie 对象，以便后续扩展使用

 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201121114050607-69238146.png)  
 

#### getCookie 返回结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201121114200129-416890976.png)  
一个 cookie 对象一定会包含上面的六个属性  
 

### 栗子二：简单登录页面

#### 代码

```javascript
//<reference types="cypress" /R>
describe('getCookie 登录页面', function () {
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
        cy.getCookie("cypress-session-cookie")
            .should('exist')
            .should('have.property', 'domain', "localhost")
            .then((cookies) => {
                cy.log(cookies)
            })
    })
})
```
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201122104831658-368833825.png)  
 
> [https://www.cnblogs.com/poloyy/p/14015090.html](https://www.cnblogs.com/poloyy/p/14015090.html)

