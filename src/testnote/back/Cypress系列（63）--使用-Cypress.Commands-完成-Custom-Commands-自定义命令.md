
## Custom Commands 自定义命令介绍
- Custom Commands 被认为是替代 PageObject 的良好选择
- 使用 Custom Commands 可以创建自定义命令和替换现有命令
- Custom Commands 默认存放在 cypress/support/commands.js 文件中，因为它是通过 supportFile（ 定义在 cypress/support/index.js ）中的 import 语句导入的，所以会在所有测试用例执行前加载

 

## 语法格式

```javascript
Cypress.Commands.add(name, callbackFn)
Cypress.Commands.add(name, options, callbackFn)
Cypress.Commands.overwrite(name, callbackFn)
```
 

#### 参数说明

- **name：**要添加或覆盖的命令的名称
- **callbackFn ：**自定义命令的回调函数，回调函数里自定义函数所需完成的操作步骤
- **options：**允许自定义命令的隐性行为

 

#### options 可选参数列表
| 参数 | 可接受的值类型 | 默认 | 描述 |
| --- | --- | --- | --- |
| prevSubject | Boolean, String or Array | false | 如何处理上一条命令产生的对象 |


#### prevSubject 可选值

- **false：**忽略任何以前命令产生的对象（父命令）
- **true：**接收上一个命令产生的对象（子命令）
- **optional：**可以启动链，也可以使用现有链（双命令）

除了控制命令的隐式行为，还可以对上一条命令产生的对象类型进行验证，例如：

- **element：**要求上一条命令产生的对象是DOM元素
- **document：**要求上一条命令产生的对象为文档
- **window：**要求上一条命令产生的对象是窗口

   
Cypress 内置命令利用了上述可选值组合中的每一个  
   
**注意：**仅在 Cypress.Commands.add()  中支持使用 options，而在 Cypress.Commands.overwrite() 中不支持使用options  
 

## 正确用法

```javascript
Cypress.Commands.add('login', (email, pw) => {})
Cypress.Commands.overwrite('visit', (orig, url, options) => {})
```
 

## 前期准备

#### 启动 Cypress 提供的演示项目
cmd 窗口进入下面的文件夹  
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012144320306-1408993875.png)  
   
执行下面的命令

```javascript
npm start
```
 

## Custom Commands 的简单栗子

### command.js 的代码
在 cypress/support/commands.js 中写如下代码

```javascript
Cypress.Commands.add('login', (username, pwd) => {
    cy.get('input[name=username]').type(username)
    cy.get('input[name=password]').type(`${pwd}{enter}`)
})
```
 

### testlogin.js 测试用例文件的代码

```javascript
context('登录测试，PO 模式', function () {
    const username = 'jane.lane'
    const pwd = 'password123'
    it('登录成功', function () {
        // 创建 po 实例
        const loginInstance = new LoginPage()
        loginInstance.visitPage()
        loginInstance.isTargetPage()
        // 调用 Custom Commands 的命令
        cy.login(username, pwd)
        cy.url().should('include', '/dashboard')
        const manInstance = new mainPage()
        manInstance.isTargetPage()
        manInstance.welComeText.should('contain', 'jane.lane')
    });
})
```
 

### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201013110128884-1644421452.png)  
 

## Customn Commands 的好处

- 定义在 cypress/support/command.js 中的命令可以像 Cypress 内置命令那样直接使用，无须 import 对应的 page（实际上 PageObject 模式在 Cypress 看来无非是数据/操作函数的共享）
- 自定义命令可以比 PageObject 模式运行更快，Cypress 和应用程序运行在同一个浏览器中，意味着 Cypress 可以直接发送请求到应用程序并设置运行测试所需要的用户状态，而这一切通常无须通过页面操作，这使得使用了自定义命令的测试会更加稳定
- 自定义命令允许重写 Cypress 内置命令，意味着可以自定义测试框架并立刻全局应用

 

## Custom Commands 完全替换 PageObject 模式的栗子

### command.js 代码
在 cypress/support/commands.js  中写如下代码
```javascript
Cypress.Commands.add('login', (username, pwd) => {
    Cypress.log({
        name: 'login',
        message: `${username} | ${pwd}`
    })
    return cy.request({
        method: 'POST',
        url: '/login',
        form: true,
        body: {
            username: username,
            password: pwd
        }
    })
})
```
.request() 命令在后面文章会继续介绍  
 

### testLogin.js 测试用例文件代码
无须 PageObject 模型，直接在 integration 文件夹下建立 testLogin.js 测试用例文件

```javascript
context('登录测试，PO 模式', function () {
    const username = 'jane.lane'
    const pwd = 'password123'
    beforeEach(function () {
        cy.login(username, pwd)
    })
    it('访问受保护页', function () {
        // cy.request() 登录成功后，cypress 会自动保存 session cookie
        // 所以下面就可以访问登录后才能访问的页面
        cy.visit('/dashboard')
        cy.url().should('eq', 'http://localhost:7077/dashboard')
        cy.get('h1').should('contain', 'jane.lane')
    });
})
```
 

## overwrite 覆盖 visit 命令的栗子
```javascript
// 第一个参数代表需要覆盖的命令
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    const domain = Cypress.env('BASE_DOMAIN')
    if (domain === '...') {
        url = '...'
    }
    if (options.something === 'else') {
        url = '...'
    }
    // originalFn 代表传入进来的原 visit 命令
    //
    // 记得需要在最后 return
    return originalFn(url, options)
})
```
 

## overwrite 覆盖 type 命令的栗子
如果在密码字段中键入内容，密码输入将在应用程序中自动屏蔽。但是 .type() 会自动将所有键入的内容记录到测试运行程序的命令日志中

```javascript
cy.get('#username').type('username@email.com')
cy.get('#password').type('superSecret123')
```
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201013185919811-1645713146.png)  
 

#### 实际情况

1. 可能需要屏蔽传递给 .type() 命令的某些值，以便**敏感数据**不会显示在测试运行的屏幕截图或视频中
1. 下面的示例将覆盖 .type() 命令，以允许屏蔽测试运行程序的命令日志中的敏感数据

 

### Cypress.Command.overwrite() 代码
```javascript
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
        options.log = false
        // 创建自定义命令的日志
        Cypress.log({
            $el: element,
            name: 'type',
            message: '*'.repeat(text.length),
        })
    }
    return originalFn(element, text, options)
})
```
 

### 测试用例代码

```javascript
cy.get('input[name=username]').type(username)
cy.get('input[name=password]').type(pwd, {sensitive: true})
```
 

### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201013195112726-346582330.png)  
 
> [https://www.cnblogs.com/poloyy/p/13808675.html](https://www.cnblogs.com/poloyy/p/13808675.html)

