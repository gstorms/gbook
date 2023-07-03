
## Cypress.Cookies 共有三个命令

```javascript
Cypress.Cookies.debug(enable, options)

Cypress.Cookies.preserveOnce(names...)

Cypress.Cookies.defaults(options)
```
 

## Cypress.Cookies.debug(enable, options)

### 作用

- 是否启用 Cookie 调试功能
- 更加易于了解 Cypress 是如何操作 Cookie 的

 

### 参数讲解

#### enable

- **true：**启用，默认，启用后在开发者工具（F12）的 Console 中可以看到详细的 Cookie 操作日志
- **false：**不启用，Console 不会显示 Cookie 操作日志

 

#### options
**verbose：**是否详细打印 Cookie 操作日志，默认 true  
 

### 栗子一

#### 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123103023038-497912027.png)  
 

#### 运行结果（Console）
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123103027266-441778597.png)  
能看到设置和清除 Cookie 都有详细的操作日志


### 栗子二

#### 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123103230366-1230125881.png)  
 

#### 运行结果（Console）
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123103236325-1371863826.png)  
只显示 Cookie 名称，不会显示 Cookie 对象  
 

### 栗子三

#### 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123103728846-679222758.png)  
 

#### 运行结果（Console）
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123103733714-1731022650.png)  
没有 Cookie 的操作日志  
 

## Cypress.Cookies.preserveOnce(names...)

### 前言知识
之前也讲过，Cypress 会在每次测试前**自动清除所有** Cookie，以防止在测试用例之间共享状态  
 

#### Cypress 为啥要自动清除 Cookie？

- 通过在每次测试之前清除 Cookie，可以确保始终从干净状态开始测试
- 从一个干净的状态开始，可以防止测试用例彼此耦合，也可以防止在一项测试中对应用程序中的某些内容进行更改而影响下游的情况

 

#### 实际场景
如果不保存 Cookie，则每次测试前都需要登录一次，这将大大浪费不必要的测试时间  
 

#### Cypress 如何保存 Cookie

- Cypress.Cookies.preserveOnce(names...) 命令可以保存 Cookie，使它在多个测试用例间共享
- 注意：目前如果使用的是基于 Session 的 Cookie，此命令有效

 

### 实际使用的模板
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123113645836-1149634181.png)  
 

### 实际栗子

#### 测试用例代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123113905368-1179184260.png)  
两个测试用例，主要校验是否 Cookie 是否能共享  
 

#### commands.js 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123113930886-653140391.png)  
自定义了一个 login 方法，主要就是登录操作   
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123114146902-250134849.png)  
Cookie 成功在多个测试用例之间共享  
 

## Cypress.Cookies.defaults(options)

### 作用

- 设置全局默认 Cookie
- 可以修改全局默认值并保留一组 Cookie，这些 Cookie 将始终在测试用例之间保留
- 只要调用了这个方法，将在其他测试用例中都会生效

 

#### 重点

- 在 cypress/support/index.js 中配置此命令是绝佳选择
- 因为它会在所有测试文件之前加载

 

### options 讲解
只有一个 preserve 参数，接受下面四种数据类型

- String
- Array
- RegExp
- Function

 

#### 使用方式

```javascript
// 所有名为 cypress-session-cookies 将不会被清除
Cypress.Cookies.defaults({
    preserve: 'cypress-session-cookies'
})
// 所有名为 cypress-session-cookies 或 sessions_id 将不会被清除
// 多个 Cookie 可以用数组来存储
Cypress.Cookies.defaults({
  preserve: ['sessions_id', 'cypress-session-cookies']
})
// 满足此正则表达式的 Cookie 将不会被清除
Cypress.Cookies.defaults({
  preserve: /session|cookie/
})
Cypress.Cookies.defaults({
  preserve: (cookie) => {
    // 可以在这里实现自己的逻辑
    // 如果函数返回 true, 那 Cookie 则不会被清除
  }
})
```
一般用前三个就能满足大部分场景了  
 

### 实际栗子

#### 测试用例代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123132248067-1565649606.png)  
 

#### support/index.js 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123132253805-1778448418.png)

- 使用正则表达式去匹配
- **含义：**cookie 名称**包含** session 或 cookie

 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123133153432-1933322118.png)  
Cookie 也共享成功了  
 

#### 总结

- 这种方式感觉更适合在项目中使用
- 一般我们都会提前知道需要的 Cookie 是什么，此时就能提前在 support/index.js 中调用此命令去设置 Cookie 了

 
> [https://www.cnblogs.com/poloyy/p/14023979.html](https://www.cnblogs.com/poloyy/p/14023979.html)

