
## PO 模式
PageObject（页面对象）模式是自动化测试中的一个最佳实践，相信很多小伙伴都知道的  
 

#### PO 模式特征

- 将每个页面（或者待测试对象）封装成一个（class），类里面包含了页面上所有元素及它们的操作方法（单步操作或功能集合）
- 测试代码和被测页面代码解耦，使用 PO 模式后，当页面发生改变，无须改变测试代码，仅改页面代码

   
接下来就讲解下 Cypress 下如何使用 PO 模式  
 

## 前期准备

#### 启动 Cypress 提供的演示项目
cmd 窗口进入下面的文件夹  
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012144320306-1408993875.png)  
   
执行下面的命令

```javascript
npm start
```
 

## PO 模式代码

### 简单的 PageObject 模型栗子

#### 待测试页面代码
在 C:\Users\user\Desktop\py\cypress-example-recipes\examples\logging-in__html-web-forms\cypress 文件夹下新建 pages 文件夹，并创建一个 login.js 待测试页面文件，代码如下
```javascript
// login.js
export default class LoginPage {
    constructor() {
        this.userName = 'input[name=username]'
        this.password = 'input[name=password]'
        this.form = 'form'
        this.url = 'http://localhost:7077/login'
    }
    isTargetPage() {
        cy.visit('/login')
        cy.url().should('eq', this.url)
    }
    login(username, pwd) {
        cy.get(this.userName).type(username)
        cy.get(this.password).type(pwd)
        cy.get(this.form).submit()
    }
}
```
 

#### 测试用例文件
在 C:\Users\user\Desktop\py\cypress-example-recipes\examples\logging-in__html-web-forms\cypress\integration 文件夹下，创建一个 testLogin.js 测试用例文件，代码如下

```javascript
import LoginPage from "../pages/login"
context('登录测试，PO 模式', function () {
    const username = 'jane.lane'
    const pwd = 'password123'
    it('登录成功', function () {
        // 创建 po 实例
        const loginInstance = new LoginPage()
        loginInstance.isTargetPage()
        loginInstance.login(username, pwd)
        cy.url().should('include', '/dashboard')
    });
})
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012172549102-752015452.png)  
 

#### 总结下
这样的 PageObject 模式代码只是把定位元素的元素定位表达式给剥离出来，并没有针对元素本身进行封装  
 

### 针对元素本身进行封装的栗子

#### 待测试页面代码
```javascript
// login.js
export default class LoginPage {
    constructor() {
        this.userNameLocator = 'input[name=username]'
        this.passwordLocator = 'input[name=password]'
        this.formLocator = 'form'
        this.url = 'http://localhost:7077/login'
    }
    get username() {
        return cy.get(this.userNameLocator)
    }
    get password() {
        return cy.get(this.passwordLocator)
    }
    get form() {
        return cy.get(this.formLocator)
    }
    isTargetPage() {
        cy.visit('/login')
        cy.url().should('eq', this.url)
    }
    login(username, pwd) {
        this.username.type(username)
        this.password.type(pwd)
        this.form.submit()
    }
}
```
 

#### 跳转页面代码
当登录成功后，页面将跳转至 mainPage 页面，上面只写了 login 页面，这里写下跳转后的页面

```javascript
// login.js
export default class mainPage{
    constructor() {
        this.h1Locator = 'h1'
        this.url = 'http://localhost:7077/dashboard'
    }
    get welComeText() {
        return cy.get(this.h1Locator)
    }
    isTargetPage() {
        cy.url().should('eq', this.url)
    }
}
```
 

#### 测试用例代码
```javascript
context('登录测试，PO 模式', function () {
    const username = 'jane.lane'
    const pwd = 'password123'
    it('登录成功', function () {
        // 创建 po 实例
        const loginInstance = new LoginPage()
        loginInstance.visitPage()
        loginInstance.isTargetPage()
        cy.login(username, pwd)
        cy.url().should('include', '/dashboard')
        const manInstance = new mainPage()
        manInstance.isTargetPage()
        manInstance.welComeText.should('contain', 'jane.lane')
    });
})
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012173323239-2021160090.png)  
 

#### 总结下

- login.js 和 mainPage.js 两个页面对象都有一个 isTargetPage() 函数来判断当前页面 URL 是否正确
- 那这里就将每个 page 都共用的部分再次剥离，放到一个新的 common page
- 然后每个 page 都继承自 common page（类似 selenium po 模式的 BasePage）

 

### 使用 common page 的栗子

#### commonPage.js 的代码
它也在 pages 文件夹下创建

```javascript
export default class commanPage {
    constructor() {
        // 构造函数可以为空
        // 如果不为空 应该是所有 page 都会用到的变量
    }
    isTargetPage() {
        cy.url().should('eq', this.url)
    }
}
```
 

#### login.js 的代码
```javascript
// login.js
import commanPage from "./commonPage";
// 继承 commonPage
export default class LoginPage extends commanPage{
    constructor() {
        // 调用父类的构造方法
        super()
        this.userNameLocator = 'input[name=username]'
        this.passwordLocator = 'input[name=password]'
        this.formLocator = 'form'
        this.url = 'http://localhost:7077/login'
    }
    get username() {
        return cy.get(this.userNameLocator)
    }
    get password() {
        return cy.get(this.passwordLocator)
    }
    get form() {
        return cy.get(this.formLocator)
    }
    visitPage(){
        cy.visit('/login')
    }
    login(username, pwd) {
        this.username.type(username)
        this.password.type(pwd)
        this.form.submit()
    }
}
```
 

#### mainPage.js 的代码

```javascript
// login.js
import commonPage from "./commonPage";
// 继承 commonPage
export default class mainPage extends commonPage {
    constructor() {
        super()
        this.h1Locator = 'h1'
        this.url = 'http://localhost:7077/dashboard'
    }
    get welComeText() {
        return cy.get(this.h1Locator)
    }
}
```
 

#### 测试结果
测试结果和上面的栗子一样  
 

## Cypress 使用 PO 模式的总结

- Cypress 完全支持 PageObject 模式
- 但存在一个**问题**，如果一个测试需要访问多个页面对象，就意味着测试中要**初始化多个页面对象实例（new Page()）**
- 如果一个页面对象需要登录才能访问（大部分场景都是这样），则每次初始化都需要先登录再访问（只有登录后才能重用 cookie），这无形增加了测试运行的时间
- Cypress 不认为 PO 模式是一个好模式，它认为跨页面共享逻辑是一个反逻辑，因为 Cypress 的实现原理与其他工具完全不同
- 那 Cypress 用什么方式来替代 PO 模式呢？答案就是下一篇要讲到的 Custom Commons

> [https://www.cnblogs.com/poloyy/p/13804226.html](https://www.cnblogs.com/poloyy/p/13804226.html)


