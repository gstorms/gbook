
## .trigger()
在DOM元素上触发指定事件  
 

### 语法格式

```javascript
.trigger(eventName)
.trigger(eventName, position)
.trigger(eventName, options)
.trigger(eventName, x, y)
.trigger(eventName, position, options)
.trigger(eventName, x, y, options)
```
 

### 参数讲解

#### eventName
需要触发事件名称  
 

#### position
每个元素都有**九个** position，具体可看下图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125642886-1334346322.png)  
 

#### x , y
距离 DOM 元素左上角的坐标，x 是横轴，y 是竖轴  
 

#### options
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612185828956-377897261.png)  
   
除了上述的通用 option，还有一些事件特有的 options  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200613214748720-2135157489.png)　　  
 

- clientX、clientY：相对于**浏览器**左上角的距离
- pageX、pageY：相对于**整个页面**左上角的距离
- screenX、screenY：相对于**电脑屏幕**左上角的距离

 

### 正确用法

```javascript
//  在 a 标签上触发 mousedown 事件
cy.get('a').trigger('mousedown')
```
 

### 错误用法

```javascript
// 不能直接通过 cy 调用
cy.trigger('mousedown')
// location 并不是 DOM 元素
cy.location().trigger('mousedown')
```
 

##  

## 鼠标事件的栗子

### 前言
在 DOM 元素上触发事件之前，DOM 元素必须处于【可交互】状态（必须可见并 且不能禁用）  
 

### hover 的栗子
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200613210854190-728232953.png)  
 

### 长按的栗子
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200613210906291-577160499.png)  
 

### 不同的鼠标按钮
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200613211015123-1585956842.png)  
 

## 添加 options 的栗子

#### 指定事件不应该冒泡

```javascript
cy.get('#s-usersetting-top').trigger('mouseover', {bubbles: false})
```
默认情况下，指定的事件将在 DOM 树中冒泡。false 可以防止事件冒泡  
 

#### 设置 clientX 和 clientY
这将覆盖基于元素本身的默认自动定位（x、y），对于  mousemove  之类的事件很有用，可能需要将元素**拖动到元素本身之外的地方**，基于浏览器本身的X、Y坐标

```javascript
cy.get('button').trigger('mousemove', { clientX: 200, clientY: 300 })
```
   
**结尾**  
本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解  
对书籍感兴趣的，大家可以参考本篇博客：[https://www.cnblogs.com/poloyy/p/13052972.html](https://www.cnblogs.com/poloyy/p/13052972.html)，考虑自身需求进行购买  
 
> [https://www.cnblogs.com/poloyy/p/13066031.html](https://www.cnblogs.com/poloyy/p/13066031.html)

