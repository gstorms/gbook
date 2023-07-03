
### 作用
遍历数组数据结构(具有 length 属性的数组或对象)


### 语法格式
```javascript
.each(callbackFn)
```


### callbackFn

- 回调函数
- 可以拥有三个参数：value、index、collection

### 正确用法
```javascript
// 遍历每个 li 元素
cy.get('ul>li').each(() => {...})
// 遍历每个 cookie 
cy.getCookies().each(() => {...})
```


### 错误用法
```javascript
// 不能直接通过 cy 调用
cy.each(() => {...})   
// location() 返回的结果不是一个数组
cy.location().each(() => {...})
```


### 命令返回结果
返回和上一条命令一样的结果


### 实际栗子

#### 代码
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1616402616891-0eb8cc66-5140-4963-9392-09d483743f18.png#align=left&display=inline&height=565&margin=%5Bobject%20Object%5D&originHeight=565&originWidth=634&size=0&status=done&style=none&width=634)

#### 栗子一的结果
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1616402635565-602d3b6d-dd64-4d2c-b125-23caad496af7.png#align=left&display=inline&height=254&margin=%5Bobject%20Object%5D&originHeight=254&originWidth=1303&size=0&status=done&style=none&width=1303)  
遍历三次，每次都可以获取 li 元素和索引值(从 0 开始)


#### 栗子二的结果
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1616402677176-e484b983-f09f-4d8d-855a-69d45992dc57.png#align=left&display=inline&height=363&margin=%5Bobject%20Object%5D&originHeight=363&originWidth=1718&size=0&status=done&style=none&width=1718)

- 若想提前结束遍历，可以通过判断然后直接 return false 
- 若想在 .each() 命令后继续操作原始数组(未遍历前)，可以直接在 .each() 命令后接 .then() 命令进行操作

> [https://www.cnblogs.com/poloyy/p/14006831.html](https://www.cnblogs.com/poloyy/p/14006831.html)

