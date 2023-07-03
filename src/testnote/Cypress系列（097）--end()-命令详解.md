
## 作用
结束命令链  
 

## 语法格式 

```javascript
.end()
```
 

## 正确用法

```javascript
// 最终返回 null 代替 ul 元素
cy.contains('ul').end()
```
 

## 错误用法

```javascript
cy.end()
```
 

## 命令返回结果
返回 null  
 

## 简单的栗子
如果要结束命令链并强制下一个命令不接收上一个命令的内容，则 .end() 很有用

#### 测试代码

#### ![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205125105694-1558127810.png)
其实在编辑器也能看到提示，第一个 res 是null，而第二个 res 是一个元素  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205125127847-1221390069.png)  
 
> [https://www.cnblogs.com/poloyy/p/14089156.html](https://www.cnblogs.com/poloyy/p/14089156.html)

