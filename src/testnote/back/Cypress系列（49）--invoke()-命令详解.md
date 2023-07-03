
## 作用
对前一条命令返回的结果进行调用方法  
 

## 语法格式

```javascript
.invoke(functionName)
.invoke(options, functionName)
.invoke(functionName, args...)
.invoke(options, functionName, args...)
```
 

#### 参数说明

- **functionName：**需要调用的方法名
- **options：**log 和 timeout
- **args：**传递给函数的参数，数量没有限制

 

## 正确使用的小栗子

```javascript
// 调用 animate 方法
cy.wrap({ animate: fn }).invoke('animate')
// 找到.modal 元素并调用 show 方法
cy.get('.modal').invoke('show')
```
 

## 栗子

#### 断言函数的返回值
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200917093351157-1600439476.png)  
 

#### 调用函数并传递参数
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200917093341193-799638269.png)  
 

#### 作为函数的属性被调用
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200917093417148-1098971651.png)  
 

> [https://www.cnblogs.com/poloyy/p/13680832.html](https://www.cnblogs.com/poloyy/p/13680832.html)

