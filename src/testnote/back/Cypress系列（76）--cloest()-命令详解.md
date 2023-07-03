
## 作用
获取匹配到的第一个DOM元素（无论是它本身还是它的祖先之一）  
 

## 语法格式

```javascript
.closest(selector)
.closest(selector, options)
```
 

#### options 参数

- **log：**是否将命令显示到命令日志中，默认 true
- **timeout：**命令超时时间

 

## 正确用法

```javascript
// 找到离 td 标签元素最近的 .filled 元素
cy.get('td').closest('.filled')
```
上一条命令返回的必须是一个 DOM 元素  
 

## 错误用法

```javascript
// 不能通过 cy 直接调用
cy.closest('.active')
// url() 返回的并不是 DOM 元素
cy.url().closest()
```
 

## 命令返回结果
匹配成功的 DOM 元素  
 

## 实际栗子

#### 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201120124459646-1198172468.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201120124510445-2101654972.png)  
cy.get()  找到的是一个 span 标签  
   
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201120124504409-2126649711.png)  
 

> [https://www.cnblogs.com/poloyy/p/14010281.html](https://www.cnblogs.com/poloyy/p/14010281.html)

