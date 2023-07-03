
## 背景
- 为了绕开同源策略的限制而实现的方案，使得  Cypress 不能支持在一个测试用例文件里访问多个不同域名的 URL
- 如果访问了多个不同域名的站点，Cypress 会直接报错

 

## 避免访问多个站点

#### 访问相同超域
如果访问的是同一个超域下的不同子域，则 Cypress 允许你正常访问

```javascript
it('访问同一超域下的不同子域', function () {
    cy.visit('https://example.cypress.io')
    cy.visit('https://www.cypress.io/features')
});
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927111646659-1158048691.png)  
 

#### 访问不同超域

```javascript
it('访问不同超域，会报错', function () {
    cy.visit('https://example.cypress.io')
    cy.visit('https://www.cnblogs.com/poloyy/')
});
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927111704468-2123238922.png)

> [https://www.cnblogs.com/poloyy/p/13738361.html](https://www.cnblogs.com/poloyy/p/13738361.html)

