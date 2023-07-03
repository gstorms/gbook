
## 作用
将指定  DOM 元素滑动到可视视图中的**左上角**  
 

## 语法格式

```javascript
.scrollIntoView()
.scrollIntoView(options)
```
 

## 正确写法

```javascript
// 将 footer 元素 滚动到视图中
cy.get('footer').scrollIntoView()
```
 

## 错误写法

```javascript
// cy 不能直接调用
cy.scrollIntoView('footer') 
// 必须是 DOM 元素调用
cy.window().scrollIntoView()
```
 

## options
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616133949827-1820457756.png)  
 

## 实际栗子

#### html 代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616135905778-1328817916.png)  
 

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616135903331-1434634543.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616135847532-1328668388.gif)  
   
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616135935657-116057544.gif)  
   
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616135940411-1723729281.gif)  
 

## 注意
Cypress 运行的命令快照不会显示滚动的过程，如果要查看滚动的过程，需要用 .pause() 遍历每个命令，或者通过观察测试运行的视频  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616140447423-1833358270.png)  
 

> [https://www.cnblogs.com/poloyy/p/13140634.html](https://www.cnblogs.com/poloyy/p/13140634.html)

