
## 前言
- Cypress 6.0.0 开始不推荐使用 cy.server() 和 cy.route()
- 在将来的版本中，对 cy.server() 和 cy.route() 的支持将移至插件
- 现在优先考虑使用 cy.intercept()

 

## 作用

- 启动服务器以开始将响应路由到 cy.route()  并更改网络请求的行为
- **前置知识：**熟悉 .route() 命令，[https://www.cnblogs.com/poloyy/p/13852941.html](https://www.cnblogs.com/poloyy/p/13852941.html)

 

## 语法格式

```javascript
cy.server()
cy.server(options)
```
 

### options 参数

#### 作用

- 作为默认值，它们被合并到 cy.route() 中
- 作为所有请求的配置行为

 

#### 以下选项被合并为 cy.route() 的默认选项
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201021161839546-585950192.png)  
 

#### 以下选项控制服务器，将会影响所有请求的行为
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201021111917110-171875457.png)  
 

#### 命令执行结果

- 执行结果是 null
- 且后续不能再链接其他命令

 

## 没有参数的栗子

// 启动服务器cy.server()

- 任何与 cy.route() 不匹配的请求都将传递到服务器，除非设置了 force404，这样请求变成 404 和拿到一个空 response
- 与 options.ignore 函数匹配的任何请求都不会被记录或存根（logged、stubbed）
- 将在命令日志中看到名为（XHR Stub）或（XHR）的请求

 

## 带有参数的栗子

#### 进入演示项目目录下
**注：**演示项目是 cypress 提供的，如何下载可看 Cypress 系列文章的一开始几篇都有写

```javascript
cd C:\Users\user\Desktop\py\cypress-example-recipes\examples\logging-in__xhr-web-forms
```
 

#### 启动演示项目

```javascript
npm start
```
 

#### 浏览器访问项目

```javascript
http://localhost:7079/
```
 

#### 测试代码

```javascript
context('route 的栗子', function () {
    const username = 'jane.lane'
    const password = 'password123'
    before(function () {
        cy.visit('http://localhost:7079/')
    })
    it('栗子1', function () {
        cy.server({
            method: 'POST',
            status: 503,
            delay: 1000,
            headers: {
                'x-token': 'abc-123-foo-bar'
            }
        })
        cy.route({
            url: '**/login',
            response: {
                success: false,
                data: 'Not success'
            },
        }).as("login")
        cy.get("input[name=username]").type(username)
        cy.get("input[name=password]").type(`${password}{enter}`)
        cy.wait('@login').then((res) => {
            cy.log(res)
            expect(res.status).to.eq(503)
            expect(res.responseBody.data).to.eq('Not success')
            expect(res.responseHeaders).to.have.property('x-token', 'abc-123-foo-bar')
        })
    });
})
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201021210211318-1415502067.png)  
 

## 启动服务器，关闭服务器的栗子

#### 测试代码
```javascript
it('栗子2', function () {
    cy.server()
    cy.route({
        url: '**/login',
        method: 'POST',
        status: 503,
        response: {
            data:"success"
        }
    }).as("login")
    cy.get("input[name=username]").type(username)
    //第一次发出请求
    cy.get("input[name=password]").type(`${password}{enter}`)
    cy.wait('@login').then((res) => {
        expect(res.status).to.eq(503)
        
        // 关闭服务器
        cy.server({
            enable: false
        })
    })
    cy.visit('http://localhost:7079/')
    cy.get("input[name=username]").type(username)
    //第二次发出请求
    cy.get("input[name=password]").type(`${password}{enter}`)
});
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201022100832922-412397822.png)  
第二个请求虽然被路由监听到了，但是因为服务器关闭了，所以并没有获取路由的 status、response  
 

## 注意事项

- 可以在启动 cy.visit() 之前启动服务器 cy.server()
- 通常，应用程序在加载时可能会立即发出初始请求（例如，对用户进行身份验证）
- Cypress 可以在 cy.visit() 之前启动服务器并定义路由（  cy.route() ）
- 下次访问时，服务器 + 路由将在应用程序加载之前立即应用

 
> [https://www.cnblogs.com/poloyy/p/13856700.html](https://www.cnblogs.com/poloyy/p/13856700.html)

