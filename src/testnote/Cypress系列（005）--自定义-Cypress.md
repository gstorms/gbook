
## 前言
- Cypress 不仅支持用户自定义文件结构，还支持用户自定义 Cypress 的**各项配置**
- Cypress 可以通过 cypress.json 文件来实现各项配置的自定义**【文件默认是空的】**
- 这里只介绍常用到的配置项，更多配置项请看：[https://docs.cypress.io/zh-cn/guides/references/configuration.html#Cypress-config](https://docs.cypress.io/zh-cn/guides/references/configuration.html#Cypress-config)

 

## 全局配置项
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200601135652017-790382000.png)  
 

## 超时 Timeouts相关

- 超时是必须要了解的核心概念
- 几乎所有命令都可能以某种方式超时
- 所有断言，无论它们是默认断言还是自己添加的断言都具有相同的超时时间

![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200601135711144-1453643473.png)  
 

## 文件夹 / 文件相关
相对于默认文件结构来说，Cypress 支持用户自定义的文件结构  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200601135732789-1518368160.png)  
 

## 可视视图
Cypress 在 Test runner 中运行时，会显示一个可视视图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200601135935971-587605906.png)  
 

## Cypress.config()
除了直接在 cypress.json 文件里更改配置项之外，Cypress 还允许我们通过 Cypress.config() 去获取或覆盖某些配置项，语法如下：

```javascript
// 获取所有config信息
Cypress.config()

// 获取指定配置项的信息
Cypress.config(name)

// 更改指定配置项的默认值
Cypress.config(name, value)

// 使用对象字面量（object literal）设置多个配置项
Cypress.config(object)
```
 

#### 小栗子
每次测试运行前都打印所有的配置信息，将下列代码添加到 cypress/support/index.js 中

```javascript
beforeEach(function () {
    cy.log(`当前环境变量为${JSON.stringify(Cypress.env())}`)
    cy.log(`当前配置项信息为${JSON.stringify(Cypress.config())}`)
})
```
**运行任意测试文件**，则可以看到执行 visit() 命令前打印了两次log日志  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200601141203815-266603202.png)  
 

#### 在测试文件的栗子
在 Integration 文件夹下创建 testConfig.js 文件

```javascript
//<reference types="cypress" /R>
describe('测试配置项', function () {
    it('测试取值和设置值', function () {
        // 获取 pageLoadTimeout默认值
        cy.log(`pageLoadTimeout默认值是：${Cypress.config('pageLoadTimeout')}`)
        // 设置 pageLoadTimeout 值
        Cypress.config("pageLoadTimeout",100000)
        // 再次获取 pageLoadTimeout 的值
        cy.log(`pageLoadTimeout默认值是：${Cypress.config('pageLoadTimeout')}`)
    })
})
```
运行 testConfig.js 文件，结果如下图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200601142336402-1007516997.png)  
 
> [https://www.cnblogs.com/poloyy/p/13024996.html](https://www.cnblogs.com/poloyy/p/13024996.html)

