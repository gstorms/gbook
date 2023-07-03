
## .check()
针对 `<input>` 标签的单选框或复选框，达到选中的作用  
 

### 语法格式
```javascript
// 所有匹配到的选择框都会被选中一遍
.check()
// 选中指定值的选项
.check(value)
// 选中多个选项（多选框）
.check(values)
// 所有匹配到的选择框都会被选中一遍，且带参数
.check(options)
// 选中指定值的选项，且带参数
.check(value, options)
// 选中多个选项（多选框），且带参数
.check(values, options)
```
 

### 参数讲解

#### value
要选择的 `<option>` 的 value 属性或文本内容，字符串类型  
 

#### values
要选择的 `<option>`  的 value 属性或文本内容，是多个字符串组成的数组  
 

#### options
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612122926089-46443079.png)  
   
 

### 正确用法

```javascript
// 选中所有复选框
cy.get('[type="checkbox"]').check()
// 选中第一个单选框
cy.get('[type="radio"]').first().check()
```
 

### 错误用法

```javascript
// 不能直接通过 cy 去调用 check() 命令
cy.check('[type="checkbox"]')
// check() 一定要 checkbox huo radio 元素才能调用
cy.get('p:first').check()   
重点：只有 `<input type="checkbox">`  和  `<input type="radio">` 才可以调用 .check()
```
 

## 前端 html 代码
后面的多个 .check() 栗子都以这个 html 页面为基础哦  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612112147589-1342172576.png)  
 

## .check() 的栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612112247247-36010619.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612112844533-1579145639.gif)  
 

## .check(value) 的栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612112249719-919786457.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612112854164-127642390.gif)  
 

## .check(values) 的栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612112252849-1579131619.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612112857761-1333336797.gif)  
 

## .check(options) 的栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612112258575-980285110.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612112903625-1944778086.gif)  
 

## .check() 触发的事件
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612113409402-1646588376.png)  
 

## .uncheck()

- 和 check() 作用相反，**取消选中**复选框
- **重点：**只有**复选框checkbox** 可以使用 uncheck()
- 语法格式、写法方式都和 check() 一样，只是**可调用对象只剩下复选框**，没有单选框

 

#### 小栗子
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612121406677-1291496928.png)  
   
   
**结尾**  
本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解  
对书籍感兴趣的，大家可以参考本篇博客：[https://www.cnblogs.com/poloyy/p/13052972.html](https://www.cnblogs.com/poloyy/p/13052972.html)，考虑自身需求进行购买  
 

> [https://www.cnblogs.com/poloyy/p/13065988.html](https://www.cnblogs.com/poloyy/p/13065988.html)

