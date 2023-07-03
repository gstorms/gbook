
## 作用　　
- 获取页面当前的 url 的哈希值
- 等价于 cy.location('hash')

 

## 语法格式

```javascript
cy.hash()
cy.hash(options)
```
**options：**只有 timeout 和 log，不再展开讲了  
 

## 正确写法

```javascript
cy.hash()
```

## 实际栗子

#### html 代码

```html
<ul id="users">
        <li>
            
        </li>
    </ul>
```
 

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617102111059-899809479.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617102114324-405565986.png)  
 

#### 总结
感觉这方法应该用的不多，如果是普通的链接，是不会返回哈希值的  
 
> [https://www.cnblogs.com/poloyy/p/13150936.html](https://www.cnblogs.com/poloyy/p/13150936.html)

