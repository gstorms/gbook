
## 作用
访问远程 URL  
 

## 语法格式

```javascript
cy.visit(url)
cy.visit(url, options)
cy.visit(options)
```
 

## 参数讲解

### url
两种值

1. 需要直接访问的 URL，可以是一个完整的 URL，比如：[https://www.cnblogs.com/poloyy/](https://www.cnblogs.com/poloyy/)
1. html 文件的相对路径，路径是相对于 Cypress 的安装目录，不需要 file:// 前缀

 

#### Cypress 关于 url 的最佳实践

- 建议在使用 cy.visit() 时，在  cypress.json 里设置一个baseUrl
- baseUrl 相当于一个全局共享的 host，在使用 visit() 和 request() 等命令时自动将 baseUrl 传递进去
- **优势：**首次启动 Cypress 测试时，添加 baseUrl 还可以节省一些时间

 

#### 不添加 baseUrl 的影响
一旦遇到 cy.visit() ，Cypress 便将主窗口的 URL 切换到访问指定的 URL，首次开始测试时，可能会导致**刷新或重新加载**  
 

#### 添加 baseUrl 的优势

- 通过设置 baseUrl，可以完全避免重新加载
- 测试开始后，Cypress 会将主窗口加载到您指定的 baseUrl 中

 

#### 添加 baseUrl
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200903113828310-450523201.png)  
 

#### baseUrl 未运行
如果在 cypress 打开期间，指定了 baseUrl ，但服务器未运行，则会看到错误  
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200903114730269-1652641955.png)  
   
如果在 cypress 运行期间几次重试后，服务器未在指定的 baseUrl 上运行，也会显示错误   
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200903115011027-1798290008.png)  
 

### 其他参数 options
| **参数** | **默认** | **作用** |
| --- | --- | --- |
| method | GET | 请求方法，GET或POST |
| body | null | l 与POST请求一起发送的数据体  
l 如果是字符串，则将其原封不动地传递  
l 如果是一个对象，它将被URL编码为字符串，并加上Content-Type：application / x-www-urlencoded |
| headers | {} | 请求头 |
| qs | null | Url的请求参数 |
| log | true | 是否打印日志 |
| auth | null | 添加基本授权标头 |
| failOnStatusCode | true | 是否在2xx和3xx以外的响应代码上标识为失败 |
| onBeforeLoad | function | 在页面加载所有资源之前调用指定的方法 |
| onLoad | function | 页面触发加载事件后调用 |
| retryOnStatusCodeFailure | false | 当状态码是错误码时，Cypress是否自动重试，最多重试4次 |
| retryOnNetworkFailure | true | 当网络错误时，Cypress是否自动重试，最多重试4次 |
| timeout | pageLoadTimeout | 最长等待 .visit() 完成的时间 |

 

## 正确写法

```javascript
// 在新的窗口打开 URL
cy.visit('http://localhost:3000')  
cy.visit('./pages/hello.html')
```
 

## 具体的栗子

#### 直接访问
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200903141727014-1570205068.png)  
 

#### 加上 timeout 参数
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200903141742177-496116966.png)  
 

#### 加上 auth
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200903141747877-2146472055.png)  
 

#### 加上 onBeforeLoad
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200903141721132-2002317913.png)  
 

#### 加上 onLoad
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200903153016576-986084680.png)  
 

#### 加上 qs
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200903153020021-1798662880.png)  
 

#### 加上 method 和 body
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200903175114016-528062452.png)  
 

#### 使用 window 对象
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200903175120949-101737375.png)  
 

> [https://www.cnblogs.com/poloyy/p/13608977.html](https://www.cnblogs.com/poloyy/p/13608977.html)

