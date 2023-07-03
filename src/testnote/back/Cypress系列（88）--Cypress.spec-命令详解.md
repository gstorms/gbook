
## 作用
返回测试文件的属性  
 

## 语法格式

```javascript
Cypress.spec
```
 

## 实际栗子

#### 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123152903407-986333815.png)  
 

#### 命令运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123152922699-689799313.png)  
包含了五个属性  
 

#### 注意
这个命令感觉有点奇怪，为啥这样说呢，如果我代码实现这样的话会循环执行很多次，我也不知道为啥，有大佬知道吗

```javascript
cy.wrap(Cypress.spec).should((obj) => {
    console.log(obj)
    expect(obj).to.have.property('name', 'chrome')
    expect(obj).to.have.property('absolute', "C:/Users/user/Desktop/py/MyCypress/cypress/integration/22_CypressAPI/8_Cypress.spec.js")
    expect(obj).to.have.property('relative', "cypress\\integration\\22_CypressAPI\\8_Cypress.spec.js")
    expect(obj).to.have.property('specType', "integration")
})
```
 
> [https://www.cnblogs.com/poloyy/p/14024741.html](https://www.cnblogs.com/poloyy/p/14024741.html)

