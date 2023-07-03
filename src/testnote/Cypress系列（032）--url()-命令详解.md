
## 作用
- 获取页面当前的 url
- 等价于 cy.location('href')

 

## 语法格式

```javascript
cy.url()
cy.url(options)
```
**options：**只有 timeout 和 log，不再展开讲了  
 

## 正确写法

```javascript
cy.url()
```
 

## 实际栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616225137214-519213432.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616225138714-1038687244.png)  
 

#### url() 命令在 console 会输出啥
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616225219200-1396351095.png)  
 

#### location(href) 命令在 console 会输出啥
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616225223694-12834602.png)  
 

#### 结论

- 可以看到 cy.url() 和 cy.location('href') 是等价效果的
- 其实还有更多等价的写法，看下面

 

## 三种等价的断言方式

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616225701038-1030510771.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616225701053-242865656.png)  
 

> [https://www.cnblogs.com/poloyy/p/13149710.html](https://www.cnblogs.com/poloyy/p/13149710.html)

