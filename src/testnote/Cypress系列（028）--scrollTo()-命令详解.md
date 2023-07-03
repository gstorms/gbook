
## 作用
滑动浏览器自带的滚动条、元素的滚动条  
 

## 语法格式

```javascript
cy.scrollTo(position)
cy.scrollTo(x, y)
cy.scrollTo(position, options)
cy.scrollTo(x, y, options)
// ---或---
.scrollTo(position)
.scrollTo(x, y)
.scrollTo(position, options)
.scrollTo(x, y, options)
```
可以是 cy 直接调用，也可以是 DOM 元素来调用  
 

## 正确写法

```javascript
// 整个页面往下滑动 500px
cy.scrollTo(0, 500)
// 滚动 .sidebar 元素到它的底部
cy.get('.sidebar').scrollTo('bottom')
```
**重点**

- 必须是 DOM 元素才能调用 .scrollTo()
- 可以是针对浏览器窗口
- 也可以是针对**有滚动条**的元素

 

## 错误写法

```javascript
// 不是 DOM 元素
cy.title().scrollTo('My App')
```
 

## 参数列表

#### **position 位置参数**
每个元素都有**九个** position，具体可看下图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125642886-1334346322.png)  
 

#### **坐标 x, y**
距离 DOM 元素左上角的坐标，x 是横轴，y 是竖轴  
 

#### options
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616144723940-2059611139.png)  
 

## 实际栗子

### html 代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616154155559-326373259.png)  
 

### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616153140303-1422155659.png)

#### 总结，有三种x, y的写法

1. 直接写数字，代表 px，但不用加 px
1. 百分比
1. 指定px，需要加px

 

### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616153215657-112426483.gif)  
 

> [https://www.cnblogs.com/poloyy/p/13141302.html](https://www.cnblogs.com/poloyy/p/13141302.html)

