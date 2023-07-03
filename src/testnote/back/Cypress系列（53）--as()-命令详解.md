
## 作用
- 起别名以供以后使用
- 可在 cy.get() 或 cy.wait() 命令中引用别名

 

## 语法格式

```javascript
.as(aliasName)
```
 

## 正确格式

```javascript
// 给第一个 li 元素起别名
cy.get('.main-nav').find('li').first().as('firstNav')
// 给网络请求的响应起别名
cy.route('PUT', 'users', 'fx:user').as('putUser')
```
 

## 引用别名的方式
 cy.get() 或 cy.wait() 命令中使用@前缀引用的别名的名称，如 @firstNav 、 @putUser  
 

## 简单的栗子
一般 .wrap()  和 as() 配对使用  
 

#### cypress 代码
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200925114111630-938442484.png)  
两个测试用例

1. 获取元素，再进行判断
1. 获取 wrap() 生成的对象，然后再对它进行操作

 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200925114358491-469867553.png)  
 

## 结合 fixture() 的栗子

### 代码一

```javascript
cy.fixture('users').as('users')
cy.log(`变量name${this.users.length}`
```
 

### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200925151951747-1028850025.png)

####  为什么报错呢

- 是因为 Cypress 的命令是异步的
- 因此，无法同步访问别名的任何内容（第二行）
- 必须使用其他异步命令（ 例如.then() ）来访问已别名的内容

 

### 代码二

```javascript
cy.fixture('users').as('users').then(function () {
     cy.log(`变量name${this.users.length}`)
})
```
用 this. 调用别名  
 

### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200925152439927-1243399217.png)  
 

## 结合 get() 的栗子

#### cypress 代码

```javascript
it('via get().', () => {
    cy.fixture('users.json').as('admins')
    cy.get('@admins')
    .then((users) => {
        cy.log(`There are ${users.length} admins.`)
    })
})
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200925160704669-1117173856.png)  
 
> [https://www.cnblogs.com/poloyy/p/13730822.html](https://www.cnblogs.com/poloyy/p/13730822.html)

