
## 作用
- 在 Cypress 中，保存一个值或者引用的最好方式是使用闭包
- then() 就是 Cypress 对闭包的一个典型应用
- then() 返回的是上一个命令的结果，并将其注入到下一个命令中

 

## 语法格式
```javascript
.then(callbackFn)
.then(options, callbackFn)
```
 

#### 参数说明

- **options：**只有 timeout，4000ms
- **callbackFn：**回调函数，需要将上一个命令的结果作为参数进行传递

 

## 实际栗子

### then 回调函数最简单的两种写法
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200915100031495-1290902387.png)  
第一种是箭头函数，第二种就是普通声明函数的方式  
 

### 通过 then 和 should 比较文本是否相等
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200915101838883-2005361100.png)  
   
待补充内容

> [https://www.cnblogs.com/poloyy/p/13671895.html](https://www.cnblogs.com/poloyy/p/13671895.html)

