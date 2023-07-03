
## 作用
- 将数组拆分为多个参数
- 有点像 py 里面的 *array

 

## 语法格式

```javascript
.spread(callbackFn)
.spread(options, callbackFn)
```
 

#### callbackFn

- 回调函数
- 将数组拆分后作为函数的多个参数

 

#### options 参数
**timeout：**命令超时时间  
 

## 正确用法

```javascript
cy.getCookies().spread(() => {})
```
 

## 错误用法

```javascript
// 不能直接他通过 cy 调用
cy.spread(() => {})
// locations() 返回的不是一个数组
cy.location().spread(() => {})
```
 

## 命令返回结果
返回回调函数的返回值  
 

## 实际栗子

#### 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201120112823753-391532514.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201120112826957-1709083028.png)  
可以看到

- spread 命令不会出现在命令日志中
- spread 命令的回调函数的**参数个数**无论是多了还是少了都不会报错，少了不会获取后面的值，多了则是一个空值

 
> [https://www.cnblogs.com/poloyy/p/14007116.html](https://www.cnblogs.com/poloyy/p/14007116.html)

