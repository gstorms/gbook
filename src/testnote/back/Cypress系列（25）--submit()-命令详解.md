
## 语法格式

```javascript
.submit()
.submit(options)
```
 

## 正确写法

```javascript
cy.get('form').submit()
```
**重点：**必须是 form 元素才能调用.submit()  
 

## 错误写法

```javascript
// cy 不能直接调用
cy.submit() 
// 不是 form 元素
cy.get('input').submit()
```
 

## options
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616114206982-920796172.png)  
 

## 最简单的栗子

#### html 代码

```html
<form id="contact">
  <input type="text" name="message">
  <button type="submit">Send</button>
</form>
```
 

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616114530866-1019627690.png)  
 

> [https://www.cnblogs.com/poloyy/p/13066039.html](https://www.cnblogs.com/poloyy/p/13066039.html)

