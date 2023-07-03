
## .select()
在 `<select>` 中选择一个 `<option> ` 
 

### 语法格式

```javascript
// 选中指定值的选项
.select(value)
// 选中指定值的多个选项
.select(values)
// 选中指定值的选项，且带参数
.select(value, options)
// 选中指定值的多个选项，且带参数
.select(values, options)
```
 

### 参数讲解
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612122932507-306070729.png)  
 

### 正确用法

```javascript
// 选择 值=user的 option
cy.get('select').select('user')
```
 

### 错误用法

```javascript
// 不能直接通过 cy 调用
cy.select('John Adams')
// location 并不是 select 元素
cy.location().select()
```
 

## 前端 html 代码
后面的多个 .select() 栗子都以这个 html 页面为基础哦  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612140804481-1702586284.png)  
 

## .select(value) 的栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612140529131-1645827920.png)

#### 重点
.select() 可以传 value 属性（“1”），或者文本内容（“oranges”）  
 

## .select(values) 的栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612140626891-1448455151.png)

- 后面再讲 .invoke()
- 需要注意，如果要**选多个 option** 的话， `<select>` 必须这样写 `<select multiple>`

 

## .select(value, options) 的栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612140757303-1066591774.png)

#### 重点
因为第二个 `<select>` 默认是不可见状态，所以不加 {force:true} 会报错，如下图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612140859457-1950453148.png)

- 它的错误提示也很明显指明了解决方案
- use {force : true} to disable error checking**【通过 { force : true } 来禁止错误检查】**

 

#### 再来看看元素不可见时，命令会提示啥

- this element is not visible
- 简直不要太人性化好吧

![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612141115871-1635708029.png)  
 

## .select(values, options) 的栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612141212330-1548337003.png)  
 

## 特殊场景

#### html 代码

```html
<select disabled>
    <option value="sz">深圳</option>
    <option value="gz">广州</option>
</select>
```
重点是 select 加了 disabled  
 

#### 测试代码
```javascript
cy.get("select").eq(2).select("sz", {force: true})
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612142311645-1717309490.png)  
即使加了 {force : true} ，也不会禁止检查 `<select>` 是否可以选择 option，如果加了disabled，代表不可选择，所以仍然报错  
   
**结尾**  
本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解  
对书籍感兴趣的，大家可以参考本篇博客：[https://www.cnblogs.com/poloyy/p/13052972.html](https://www.cnblogs.com/poloyy/p/13052972.html)，考虑自身需求进行购买  
 
> [https://www.cnblogs.com/poloyy/p/13066025.html](https://www.cnblogs.com/poloyy/p/13066025.html)

