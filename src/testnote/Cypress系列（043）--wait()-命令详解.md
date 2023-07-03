
## 作用
等待数毫秒或等待别名资源解析，然后再继续执行下一个命令  
 

## 语法格式

```javascript
cy.wait(time)
cy.wait(alias)
cy.wait(aliases)
cy.wait(time, options)
cy.wait(alias, options)
cy.wait(aliases, options)
```
 

## 参数讲解
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907110424531-593038185.png)  
 

## 正确格式

```javascript
cy.wait(500)
cy.wait('@getProfile')
```
 

## wait() 命令返回的对象

#### 当传了 time 时
cy.wait() 产生与上一个命令相同的主题  
 

#### 当传了 alias 时
cy.wait() 产生一个对象，其中包含 XHR 的 HTTP 请求和响应属性  
 

## 等待一个别名的栗子
```javascript
it.skip('栗子1', function () {
    cy.server()
    cy.route({
        url: '**/login',
        status: 503,
        response: {
            success: false,
            data: 'Not success'
        },
    }).as("login")
    cy.get("input[name=username]").type(username)
    cy.get("input[name=password]").type(`${password}{enter}`)
    // 等待请求的响应
    cy.wait('@login').then((res) => {
        // 针对响应进行断言
        expect(res.status).to.eq(503)
        expect(res.responseBody.data).to.eq('Not success')
        expect(res.responseHeaders).to.have.property('x-token', 'abc-123-foo-bar')
    })
});
```
 

## 等待别名数组的栗子
当将别名数组传递给 cy.wait() 时，Cypress 将等待**所有请求**在给定的 requestTimeout 和 responseTimeout 内完成
```javascript
cy.server()
cy.route('users/*').as('getUsers')
cy.route('activities/*').as('getActivities')
cy.route('comments/*').as('getComments')
cy.visit('/dashboard')
cy.wait(['@getUsers', '@getActivities', '@getComments']).then((xhrs) => {
  // xhrs现在将是匹配的XHR的数组
  // xhrs[0] <-- getUsers 的响应
  // xhrs[1] <-- getActivities 的响应
  // xhrs[2] <-- getComments 的响应
})
```
 
> [https://www.cnblogs.com/poloyy/p/13625824.html](https://www.cnblogs.com/poloyy/p/13625824.html)

