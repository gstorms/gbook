
## 作用
与 DOM 元素相关的 helper 方法的集合  
 

#### 重点

- 实际上 Cypress.dom 可以链接几十种方法但并不会全部讲解
- 这些方法几乎在每个内置命令中都由 Cypress 在内部使用
- 阅读源码，查看所有方法：[https://github.com/cypress-io/cypress/blob/develop/packages/driver/src/dom/index.js](https://github.com/cypress-io/cypress/blob/develop/packages/driver/src/dom/index.js)

 

## 语法格式

```javascript
Cypress.dom.isHidden(element)
```
 

## 所有栗子的前置条件

```javascript
beforeEach(function () {
    cy.visit('https://example.cypress.io/cypress-api')
})
```
 

## isattached
判断元素是否附加到 DOM 树

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125125544207-1773854180.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125125547380-1182151090.png)  
 

## isdescendent
判断一个元素是否是另一个元素的后代  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125125600145-1523837515.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125125606920-161787032.png)  
 

## isdetached
判断一个元素是否与 DOM 树分离  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125125611630-1137199386.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125125616566-924837793.png)  
 

## isdocument
判断一个元素是否是 document 文档类型  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125125623462-1586994299.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125125628888-570317468.png)  
 

## isDOM
判断一个元素是否是 DOM **对象**  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125125634427-171193990.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125125652159-1699879361.png)  
 

## iselement
判断一个元素是否是 DOM **元素**  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125130815447-1222365390.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125130820642-746839169.png)  
 

## isfocusable
判断一个元素是否可以接收焦点  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125130846477-346478116.png)  
p、div、li 等存文本的标签是没有焦点的  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125130944371-21553204.png)  
 

## isfocused
判断一个元素当前是否有焦点  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125131050036-1838003696.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125131055103-1483183837.png)  
这里会有点奇怪，我点击完去判断是否聚焦还是会 false，然后再 focus 后去判断是否聚焦仍然是 false，哪位大神指点为何的可以指点迷津  
 

## ishidden
判断一个元素元素是否隐藏  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125131733397-1197404203.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125131749604-1974315246.png)  
 

## isvisible
判断一个元素元素是否可见  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125142716743-863991845.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125142720411-39182628.png)  
 

## isjQuery
判断一个对象是否为 jQuery 对象  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125131809709-1961889370.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125131813363-1847385557.png)  
 

## isscrollable
判断一个元素是否可滚动  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125134745388-2003155833.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125134748220-489235538.png)  
 

## iswindow
判断一个对象是否为 Window 对象  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125134755479-838944229.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125134844656-393803924.png)  
 
> [https://www.cnblogs.com/poloyy/p/14027976.html](https://www.cnblogs.com/poloyy/p/14027976.html)

