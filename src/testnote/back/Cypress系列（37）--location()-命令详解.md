
## 作用
获取当前页面的  window.location  
 

## 语法格式

```javascript
cy.location()
cy.location(key)
cy.location(options)
cy.location(key, options)
```
**options：**只有 timeout 和 log，不再展开讲了  
 

## 正确写法

```javascript
cy.location()
// 获取 host 值     
cy.location('host')
// 获取 port 值
cy.location('port')
```
 

## location 对象有哪些属性

- hash
- host
- hostname
- href
- origin
- pathname
- port
- protocol
- search
- toString

 

## 实际栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617134951547-651842511.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617134958017-836147260.png)  
 

#### location() 命令的产物
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617135006098-1330128774.png)  
 

#### 总结
cy.location("host") 这样写只会返回**对应属性的值**  
 

> [https://www.cnblogs.com/poloyy/p/13152064.html](https://www.cnblogs.com/poloyy/p/13152064.html)

