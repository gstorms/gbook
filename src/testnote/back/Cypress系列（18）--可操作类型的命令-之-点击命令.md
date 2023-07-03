
## 前言
- 啥是可操作类型？就是可以和 DOM 元素交互的命令，比如：点击，双击.....等等等
- 这些命令**模拟用户和应用程序交互**，Cypress 会触发浏览器事件，进而触发应用程序绑定的时间

这一篇着重讲**点击**操作，一共有三个命令

1. click：单击
1. dbclick：双击
1. rightclick：右键

 

## .click() 的语法和用法
单击某个元素  
 

### 六种基础语法格式

```javascript
// 单击某个元素
.click()

// 带参数的单击
.click(options)

// 在某个位置点击
.click(position)

// 在某个位置点击，且带参数
.click(position, options)

// 根据页面坐标点击
.click(x, y)

// 根据页面坐标点击，且带参数
.click(x, y, options)
```
 

### 正确用法
**宗旨：**先获取 DOM 元素，再对 DOM 元素操作  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609103728000-1978281579.png)  
 

### 错误用法
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609103731456-1041895300.png)  
 

### position 位置参数
每个元素都有**九个** position，具体可看下图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125642886-1334346322.png)  
 

### 坐标 x, y
距离 DOM 元素左上角的坐标，x 是横轴，y 是竖轴  
 

### options 可选参数
共有四个  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610110633065-2126203965.png)  
   
 

#### 如何传 options ？

- .click({ multiple: true })
- .click({ multiple: true , force: true})

 

### force: true 的作用

#### 背景

- Cypress 可以通过 Test Runner 的快照找到阻止 DOM 元素交互的情况，但某些情况下可能会阻碍测试的进行
- **比如：**有一个嵌套的导航结构，用户必须将鼠标 hover 在一个非常特定的模式中，才能拿到所需的链接
- 当测试时，其实我们只是想获取链接而已，前面过多的繁琐操作可能会导致测试失败

 

#### 作用

- 当设置了 force: true 时，Cypress 会**强制操作命令的发生**，避开前面的所有检查
- 你可以传递 { force: true } 给大多数操作命令

 

#### 栗子

```javascript
// 强制点击，和所有后续事件
// 即使该元素 “不可操作”，也会触发点击操作
cy.get('button').click({ force: true })
```
 

#### 当使用 force 时，将**执行**这些操作

- 继续执行所有默认操作
- 强制在元素上触发事件

 

#### 当使用 force 时，将**不会执行**这些操作

- 滚动到视图中
- 确保可见
- 确保未禁用
- 确保没有分离
- 确保它不是只读的
- 确保它没有动画
- 确保未覆盖
- 向后代触发事件

 

#### 总结
总而言之， { force: true } 跳过检查，它将**始终**在所需元素处**触发事件**  
 

## .click() 具体的栗子

### .click() 的栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125133790-1477301722.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125136913-250315971.png)  
 

### .click(position)

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125341508-232215186.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125355259-746507057.gif)  
 

### .click(x, y)

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125140668-1743988925.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125155518-339061130.png)  
 

### {force: true} 的栗子

#### .click(options)
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609131947286-1432317796.png)  
 

#### .click(position, options)
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609133224019-1657684599.png)  
 

#### .click(x, y, options)
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609133225843-1132896598.png)  
 

### {multiple : true } 的栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609133209902-813046454.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609133206635-591090008.gif)  
cy.get(' ul > li ') 共匹配四个 DOM 元素，他们均触发单击操作  
 

### 单击组合键
.click() 命令还可以与 .type() 命令结合使用修饰符来触发组合键操作，以便在单击时结合键盘操作，例如ALT + click  
 

#### 以下修饰符可以和 .click() 结合使用
| 修饰符 | 作用 | 别名 |
| :--- | :--- | :--- |
| {alt}`  
` | 等价于 alt 键 | {option} |
| {ctrl} | 等价于 ctrl 键 | {control} |
| {shift} | 等价于 shift 键 |   |

 

#### 栗子
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609143824557-1777663242.png)  
 

## .dblclick()
双击，跟 click() 的语法 & 用法一致，只是变成了**双击**

```javascript
cy.get("#main1").dblclick()
cy.get("#main1").dblclick("top")
cy.get("#main1").dblclick(15, 15)
```
 

## .rightclick()
右键，跟 click() 的语法 & 用法一致，只是变成了**右键点击**

```javascript
cy.get("#li1").rightclick()
cy.get("#li1").rightclick("top")
cy.get("#li1").rightclick(15, 15)
```
 

## .click() 注意事项

#### 可操作性
执行 .click()  必须是 DOM 元素达到了可操作状态  
 

#### 关于断言
.click() 将自动等待元素达到可操作状态。  
.click() 将自动等待后面链接的断言通过  
 

#### 超时时间
.click() 如果 DOM 元素一直**达不到**可操作状态，可能会超时  
.click() 如果后面链接的断言一直**不通过**，可能会超时  
 

## .click() 会触发的鼠标事件
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610115639872-1507349703.png)  
在命令日志中单击 click 时，控制台console 将输出以下鼠标事件  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610115411276-1971435896.png)  
   
**结尾**  
本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解  
对书籍感兴趣的，大家可以参考本篇博客：[https://www.cnblogs.com/poloyy/p/13052972.html](https://www.cnblogs.com/poloyy/p/13052972.html)，考虑自身需求进行购买  
 

> [https://www.cnblogs.com/poloyy/p/13066005.html](https://www.cnblogs.com/poloyy/p/13066005.html)

