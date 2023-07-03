
## 作用
使用该命令在网络层管理 HTTP 请求的行为  
 

#### **注意**
仅在 Cypress@6.0 版本后才支持该方法   
 

#### 包含以下功能

- 对任何类型的 HTTP 请求进行 stub 或 spy
- 在 HTTP 请求发送到目标服务器前，可以修改 HTTP 请求 body、headers、URL（类似抓包工具对**请求**进行打断点然后修改）
- 动态或静态地对 HTTP 请求的响应进行 stub
- 接收 HTTP 响应后可对 HTTP 响应 body、headers、status、code 进行修改（类似抓包工具对**响应**进行打断点然后修改）
- 在所有阶段都可以完全访问所有 HTTP 请求

 

## 相较于 cy.route() 的不同
cy.route() 命令详解：[https://www.cnblogs.com/poloyy/p/13852941.html](https://www.cnblogs.com/poloyy/p/13852941.html)

- 可以拦截所有类型的网络请求，包括 Fetch API，页面加载，XMLHttpRequest，资源加载等
- 不需要在使用前调用 cy.server() ，实际上 cy.server() 根本不影响 cy.intercept()
- 默认情况下没有将请求方法设置为 GET

 

## 语法格式

```javascript
cy.intercept(url, routeHandler?)
cy.intercept(method, url, routeHandler?)
cy.intercept(routeMatcher, routeHandler?)
```
 

### url
要匹配的请求 URL ，可以是字符串也可以是正则表达式

```javascript
cy.intercept('http://example.com/widgets')
cy.intercept('http://example.com/widgets', { fixture: 'widgets.json' })
```
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125173909090-167237483.png)  
没有指定请求方法的话，可以匹配任意类型的请求方法  
 

### method
请求方法

```javascript
cy.intercept('POST', 'http://example.com/widgets', {
  statusCode: 200,
  body: 'it worked!'
})
```
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125173837584-1223389771.png)  
 

### routeMatcher 

- 它是一个对象
- 用于匹配此路由将处理哪些传入的 HTTP 请求
- 所有对象属性都是**可选的**，不是必填的
- 设置的所有属性必须与路由匹配才能处理请求
- 如果将字符串传递给任何属性，则将使用 minimatch 将与请求进行全局匹配

#### 它有以下属性

```javascript
{
  /**
   * 与 HTTP Basic身份验证中使用的用户名和密码匹配
   */
  auth?: { username: string | RegExp, password: string | RegExp }
  /**
   * 与请求上的 HTTP Headers 匹配
   */
  headers?: {
    [name: string]: string | RegExp
  }
  /**
   * 与请求上的 hostname 匹配
   */
  hostname?: string | RegExp
  /**
   * If 'true', 只有 https 的请求会被匹配
   * If 'false', 只有 http 的请求会被匹配
   */
  https?: boolean
  /**
   * 与请求上的 method 请求方法匹配
   * 默认 '*', 匹配全部类型的 method
   */
  method?: string | RegExp
  /**
   * 主机名后的路径, 包括了 ？ 后面的查询参数
   * www.baidu.com/s?wd=2
   */
  path?: string | RegExp
  /**
   * 和 path 一样, 不过不管 ? 后面的查询参数
   * www.baidu.com/s
   */
  pathname?: string | RegExp
  /**
   * 与指定的端口匹配, 或者传递多个端口组成的数组, 其中一个匹配上就行了
   */
  port?: number | number[]
  /**
   * 与请求路径 ? 后面跟的查询参数匹配上
   * wd=2
   */
  query?: {
    [key: string]: string | RegExp
  }
  /**
   * 完整的请求 url
   * http://www.baidu.com/s?wd=2
   */
  url?: string | RegExp
}
```
 　　

### routeHandler 

- routeHandler 定义了如果请求和 routeMatcher 匹配将对请求进行的指定的处理
- 可接受的数据类型：string、object、Function、StaticResponse

 

#### StaticResponse

- 相当于一个自定义响应体对象
- 可以自定义 Response headers、HTTP 状态码、Response body 等
- 详细栗子将在后面展开讲解

 

#### StaticResponse 对象的属性

```javascript
{
  /**
   * 将 fixture 文件作为响应主体, 以 cypress/fixtures 为根目录
   */
  fixture?: string
  /**
   * 将字符串或 JSON 对象作为响应主体
   */
  body?: string | object | object[]
  /**
   * 响应 headers
   * @default {}
   */
  headers?: { [key: string]: string }
  /**
   * 响应状态码
   * @default 200
   */
  statusCode?: number
  /**
   * 如果 true, Cypress 将破坏网络连接, 并且不发送任何响应
   * 主要用于模拟无法访问的服务器
   * 请勿与其他选项结合使用
   */
  forceNetworkError?: boolean
  /**
   * 发送响应前要延迟的毫秒数
   */
  delayMs?: number
  /**
   * 以多少 kbps 发送响应体
   */
  throttleKbps?: number
}
```
 

#### string

- 如果传递一个字符串，这个值相当于响应 body 的值
- 等价于 StaticResponse 对象 { body: "foo" }

 

#### object

- 如果传递了没有 StaticResponse 密钥的对象，则它将作为 JSON 响应 Body 发送
- 例如， {foo：'bar'} 等价于 StaticResponse 对象 {body：{foo：'bar'}}

 

#### function

- 如果传递了一个回调函数，当一个请求匹配上了该路由将会自动调用这个函数
- 函数第一个参数是请求对象
- 在回调函数内部，可以修改外发请求、发送响应、访问实际响应
- 详细栗子将在后面展开讲解

 

## 命令返回结果

- 返回 null
- 可以链接 as() 进行别名，但不可链接其他命令
- 可以使用 cy.wait() 等待 cy.intercept() 路由匹配上请求，这将会产生一个对象，包含匹配上的请求/响应相关信息

 

## 实际栗子的前置准备
Cypress 官方项目的下载地址：[https://github.com/cypress-io/cypress-example-kitchensink](https://github.com/cypress-io/cypress-example-kitchensink)  
 

#### 下载好后进入下图项目文件夹
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201124509698-1068535606.png)  
 

#### 启动项目

npm start  
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201124718804-737083341.png)  
 

## 通过 URL 路由匹配请求的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201124759381-2095954952.png)  
 

#### 等价于 route() 的测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201124804754-1813089135.png)  
**注：**  route()  未来将会被弃用  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201124846710-1025460445.png)  
登录请求匹配上了路由  
 

#### Console 查看 cy.wait() 返回的对象
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201124927847-560473572.png)  
最重要的当然是 request 和 response 两个属性  
 

## 通过 RouteMatcher 路由匹配请求的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201140515012-782173477.png)  
断言请求体和响应状态码  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201140652033-144077789.png)  
 

#### Console 查看 cy.wait() 返回的对象
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201140700962-646280126.png)  
 

#### 另一种断言方式

```javascript
// 断言匹配此路由的请求接收到包含【username】的请求 body
cy.wait('@login3').its('request.body').should('have.property', 'username')
// 断言匹配此路由的请求接收到 HTTP 状态码为 500
cy.wait('@login3').its('response.statusCode').should('eq', 200)
// 断言匹配此路由的请求接收到包含【redirect】的请求 body
cy.wait('@login3').its('response.body').should('have.property', 'redirect')
```
不过这样的话只能每次写一条不能同时三条都写，所以还是建议像代码图一样，先 .then() 再进行断言  
 

## 自定义不同类型的响应体的各种栗子

### 自定义一个纯字符串的响应体

#### 测试代码

#### ![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201153544297-156469118.png)
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201153558794-1107531368.png)  
 

#### 接口响应
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201153606985-646891480.png)  
 

### 自定义一个 JSON 的响应体

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201153613192-447983386.png)  
会从cypress安装目录/fixtures 下读取对应的数据文件，它会变成响应 body 的数据  
 

#### test.json 数据文件
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201153700038-1666839801.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201153619222-312729308.png)  
 

#### 接口响应
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201153628426-1314688626.png)  
 

### 自定义一个 StaticResponse 的响应体

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201161419464-588602591.png)  
自定义了响应body、statusCode，还有返回响应的延时时间  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201160754906-1685793342.png)  
延时生效了  
   
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201201160839735-1930734267.png)  
body 和 statusCode 变成自定义的数据了  
 

## 拦截请求的栗子

### 前置操作

```javascript
beforeEach(() => {
    cy.visit('http://localhost:7079/login')
})
```
 

### 断言请求的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202103857420-1841897777.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202103902197-1730550545.png)  
 

#### Console 查看打印结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202103907965-826761301.png)  
可以看到回调函数只有一个参数，就是 request 参数  
 

#### 重点
回调函数内不能包含 cy.**() 的命令，如果包含会报错  
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202104115670-1920491105.png)  
简单来说就是  
cy.type() 命令执行完后会返回一个 promise 对象，同时又会调用回调函数，而回调函数内又调用了 cy.get() 返回了一个 promise 对象，Cypress 会将这种情况当做测试失败处理  
 

### 将请求传递给下一个路由处理程序

#### 前言
意思就是一个请求可以同时匹配上多个路由  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202112936442-597878541.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202112943309-1689424273.png)  
一个登录请求匹配成功了两个路由，且回调函数会**按匹配的顺序执行**  
 

### 总结
回调函数的参数就是一个请求对象，它其实可以调用以下方法

```javascript
{
  /**
   * 销毁该请求并返回网络错误的响应
   */
  destroy(): void
  /**
   * 控制请求的响应
   * 如果传入的是一个函数, 则它是回调函数, 当响应时会调用
   * 如果传入的是一个 StaticResponse 对象, 将不会发出请求, 而是直接将这个对象当做响应返回
   */
  reply(interceptor?: StaticResponse | HttpResponseInterceptor): void
  /**
   * 使用 response body(必填) 和 response header(可选) 响应请求
   */
  reply(body: string | object, headers?: { [key: string]: string }): void
  /**
   * 使用 HTTP 状态码(必填)、 response body(可选)、response header(可选) 响应请求
   */
  reply(status: number, body?: string | object, headers?: { [key: string]: string }): void
  /**
   * 重定向到新的 location 来响应请求,
   * @param statusCode 用来重定向的 HTTP 状态代码, Default: 302
   */
  redirect(location: string, statusCode?: number): void
}
```
 

## 拦截响应的栗子

### req.reply() 函数详解

#### 前言
可以使用 req.reply() 函数来动态控制对请求的响应  
 

#### 使用讲解

```javascript
cy.intercept('/login', (req) => {
    // functions on 'req' can be used to dynamically respond to a request here
    // 将请求发送到目标服务器
    req.reply()
    // 将这个 JSON 对象响应请求
    req.reply({plan: 'starter'})
    // 将请求发送到目标服务器, 并且拦截服务器返回的实际响应, 然后进行后续操作(类似抓包工具对响应打断点)
    req.reply((res) => {
        // res 就是实际的响应对象
    })
})
```
 

### .reply() 直接修改响应的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202144848823-1320183135.png)  
 

#### 接口响应内容
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202144855401-1072991384.png)  
 

### 拦截响应的小栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202134448354-2066907730.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202134445901-1347285337.png)  
 

#### Console 查看打印结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202134520448-392031368.png)  
一个是 request 对象，一个是 response 对象  
 

### 自定义响应内容

#### 前言

- 可以使用 resp.send() 函数动态控制传入的响应
- 另外，当响应发送到浏览器时，对 resp 的任何修改都将保留
- 如果尚未调用 resp.send() ，则它会在 req.reply() 回调函数完成后隐式调用

 

#### 使用讲解

```javascript
cy.intercept('/notification', (req) => {
    req.reply((resp) => {
        // Success 将作为 response body 返回到浏览器
        resp.send('Success')
        // 将 success.json 里面的数据作为 response body 返回到浏览器
        resp.send({fixture: 'success.json'})
        // 将响应延迟 1000ms
        resp.delay(1000)
        // 将响应限制为 64kbps
        resp.throttle(64)
    })
})
```
 

### 传递字符串作为响应内容

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202143829580-1562904638.png)  
 

#### 接口响应内容
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202143837689-798883859.png)  
 

### 传递 JSON 对象作为响应内容

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202143841767-389858579.png)  
 

#### 接口响应内容
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202143907530-1812189441.png)  
 

### 传递 StaticResponse 对象作为响应内容

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202143911814-541997266.png)  
 

#### 接口响应内容
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201202143948191-979637023.png)  
 

### resp 可调用的函数总结

```javascript
{
/**
* 可以自定义 response statusCode、response body、response header
* 也可以直接传 StaticResponse 对象
*/
send(status: number, body?: string | number | object, headers?: { [key: string]: string }): void
send(body: string | object, headers?: { [key: string]: string }): void
send(staticResponse: StaticResponse): void
/**
* 继续返回响应
*/
send(): void
/**
* 等待 delayMs 毫秒，然后再将响应发送给客户端
*/
delay: (delayMs: number) => IncomingHttpResponse
/**
* 以多少 kbps 的速度发送响应
*/
throttle: (throttleKbps: number) => IncomingHttpResponse
}
```
 
> [https://www.cnblogs.com/poloyy/p/14037239.html](https://www.cnblogs.com/poloyy/p/14037239.html)

