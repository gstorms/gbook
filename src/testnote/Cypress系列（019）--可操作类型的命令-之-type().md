
## 前端 html 代码
后面栗子主要以这个页面为主哦  
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609171148942-1837716832.png)
  

## .type() 基础介绍
在 DOM 元素中输入内容
  

### 语法格式

```javascript
// 输入文本
.type(text)
// 带参数输入文本
.type(text, options)
```
 

### 正确写法
**宗旨：**先获取 DOM 元素，再对 DOM 元素进行 type 操作  
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609171237738-1944279772.png)
  

### 错误写法
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609171241107-1721745842.png)  
调用 type() 命令的都不是 DOM 元素，所以错误！
  

## .type() 基础的栗子

### 输入正常文本的栗子

#### 测试文件代码
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609173219575-563788659.png)
  

#### 测试结果
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609173222866-1028399779.png)
  

### 输入特殊字符的栗子
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609173225917-1239039991.png)
  

#### 那么还支持哪些特殊字符呢？

[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609193136468-975790546.png)
  

### 带参数输入文本的栗子 

#### 有哪些参数可以传递呢？
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609200122028-252507160.png)
  

#### 测试文件代码
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609194902715-1711424878.png)

```javascript
// 单个参数
.type("{selectall}", {parseSpecialCharSequences: false})
// 多个参数
.type("1234", {log:false , parseSpecialCharSequences: false})
```
 

#### 测试结果
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609194839929-1370217966.png)
  

## .type() 更多的栗子

### html 代码
下面举的栗子以这个 html 页面的元素为基础哦  
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134042073-1504155041.png)
  

### `<textarea>` 标签的栗子

#### 测试文件代码
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134204256-87948926.png)
  

#### 测试结果
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134049244-230880653.png)
  

### `<option>` 标签的栗子

#### 测试文件代码
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134238300-376473364.png)
  

#### 测试结果
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134054816-1175415488.png)
  

### type = 时间类型的 input 标签的栗子

- `<input type="date">`
- `<input type="month">`
- `<input type="week">`
- `<input type="time">`

#### 测试文件代码
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134308930-205439625.png)
  

#### 测试结果
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134140485-1651870715.png)
  

## `.type()` 结合键盘键的栗子
继续以上面栗子的 html 页面为基础

#### 有哪些键盘架可以结合呢？

- {alt}
- {shift}
- {ctrl}

 

#### 具体用法

```javascript
// 等同于按 shift + alt + q
cy.get('input').type('{shift}{alt}Q')
// 按住 shift，然后输入 test
cy.get('input').type('{shift}test')
```
说实话，我试过感觉没生效啊，按道理按住 shift 键输入内容应该是大写的，但是实际还是小写，后面再研究一波**（感觉有点鸡肋，实际场景比较少用到又要按键盘又要输入内容，了解即可）**
  

## .type() 支持哪些元素调用
`<body>`
`<textarea>`
`<input>` 标签，且 type 属性是以下其中一个

- text
- password
- email
- number
- date
- week
- month
- time
- datetime-local
- search
- url
- tel

 

## .type() 会触发的事件 event
[](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610143748486-1171943451.png)  
当传入了**特殊字符、键盘键**时，只触发了 keydown 事件  
当传入了**内容字符**时，每个字符都会触发一系列的事件  

1. keydown
1. keypress
1. textInput
1. input
1. keyup

 
**结尾**  
本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解  
对书籍感兴趣的，大家可以参考本篇博客：[https://www.cnblogs.com/poloyy/p/13052972.html](https://www.cnblogs.com/poloyy/p/13052972.html)，考虑自身需求进行购买
  

> [https://www.cnblogs.com/poloyy/p/13066011.html](https://www.cnblogs.com/poloyy/p/13066011.html)

