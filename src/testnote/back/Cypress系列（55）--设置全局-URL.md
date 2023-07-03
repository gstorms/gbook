
## 背景
- 为了绕过同源策略，当 Cypress 开始运行测试时，会在 localhost 上打开一个随机端口进行初始化
- 直到遇见第一个 cy.visit() 命令里的 URL 才匹配被测应用程序的 URL

   
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927104022599-830547965.png)  
当 Cypress 以交互模式启动时，会看到 Cypress 先运行在 localhost 上然后又切换到 URL 重新运行（多消耗了一部分时间）  
 

## 设置全局 URL

#### 做法
在 cypress.json 中设置 baseUrl   
 

#### 优势

- 可以在运行时节省 Cypress 匹配被测应用程序 URl 的时间
- 还可以在编写待访问的 URL 时，忽略 baseUrl，直接写后面的路径

![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927104709064-366741347.png)  
 

#### 小栗子
```javascript
// 不加 baseUrl 的写法
cy.visit('https://example.cypress.io/commands/actions')
// 加了上面 baseUrl 的写法
cy.visit('/commands/actions')
```
 
> [https://www.cnblogs.com/poloyy/p/13738202.html](https://www.cnblogs.com/poloyy/p/13738202.html)

