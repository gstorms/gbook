
## 前言
- 做 UI 自动化测试，每个测试用例都会包含对元素的操作
- 健壮、可靠的元素定位策略可以保障测试成功率的提高
- 相对于其他测试框架来说，Cypress 提供了特别的定位策略，让你无须过多担心因定位失败而导致的测试失败

 

## 做元素定位时，你是否曾遇到过以下难题

- 元素 ID 或 class 是动态生成的
- 你使用了 CSS选择器去定位，但开发把元素CSS样式改掉了

这种情况下通常会测试失败  
 

## Cypress 如何解决上述难题
提供了 data-* 属性，包含了下面三个定位器

1. data-cy
1. data-test
1. data-testid

 

#### 重点

- 它们都是 Cypress 专有的定位器，**仅用来测试**
- data-* 属性和**元素的行为或样式无关**，意味着即使 CSS 样式或 JS 行为改变，也不会导致测试失败
- **注意：**在实际项目中，需要自己将 data-* 属性加到元素中，意味着你得有权限修改代码

 

#### html 前端代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608162207388-82872216.png)  
 

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608162214786-1249129841.png)  
 

## 常规选择器
会点前端的童鞋应该都知道，在 css 里面怎么写， 这里就怎么写，敲简单 的啦  
 

### #id 选择器
通过元素的 id 属性来定位

```javascript
cy.get("#main1").click()
```
 

### .class 选择器
通过元素的 class 属性来定位

```javascript
cy.get(".btn").click()
```
 

### 属性选择器
通过元素的各种属性来定位

```javascript
cy.get("button[id='main2']").click()
```
 

### :nth-child(n) 选择器

#### html 代码栗子
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608164654434-2593250.png)  
 

#### 测试代码

```javascript
cy.get("ul>li:nth-child(2)").click()
```
 

### Cypress.$定位器
针对难以用普通方式定位的元素，Cypress 还提供了 JQuery 选择器（对我来说简直是福音）  
**格式：** Cypress.$(selector)

```javascript
Cypress.$('#main2')
// 等价于
cy.get('#main2')
```
 

### 拓展
对于更多的 css 选择器写法，可以看看这篇文章：[https://www.cnblogs.com/poloyy/p/12629662.html](https://www.cnblogs.com/poloyy/p/12629662.html)  
只需要关注**选择器**那一列就好啦  
   
**结尾**  
本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解  
对书籍感兴趣的，大家可以参考本篇博客：[https://www.cnblogs.com/poloyy/p/13052972.html](https://www.cnblogs.com/poloyy/p/13052972.html)，考虑自身需求进行购买  
 
> [https://www.cnblogs.com/poloyy/p/13066714.html](https://www.cnblogs.com/poloyy/p/13066714.html)

