
## 前端页面代码
后面写的 Cypress 代码，都会基于这个 html 页面来定位元素哦，文件位置随意放，代码需要手动自己敲一遍  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608171251363-1265580230.png)  
 

## .get(selector)
该用法用来在 DOM 树中查找 selector 对应的 DOM 元素  
 

#### 两种语法格式

```javascript
// 以选择器定位
cy.get(selector)
// 以别名定位，后续会讲到
cy.get(alias)
```
 

#### 简单的栗子
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608181955809-659961592.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608182004690-667461826.png)  
如果可以匹配多个元素，则返回多个元素  
 

## .find(selector)
该定位方法用来在 DOM 树中搜索**已被定位到的元素的后代**，并将匹配到的元素**返回为一个新的 jQuery 对象【注意，不是返回元素对象】**  
 

#### 实际栗子-测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608173756092-2002681261.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608173810474-1412207891.png)  
 

#### 解析错误信息（重点，懂了这个就不会再犯同样的错误了）

- **英文：**A child command must be chained after a parent because it operates on a previous subject
- **中文：**子命令需要链接到父命令之后，因为他需要作用于上一个对象
- **通俗理解：**需要找到元素才能对元素执行某些命令**【针对元素的操作】**
- **重点：**很多命令都需要通过元素去调用的，所以需要先定位到元素，才能调用那些命令，否则元素都没有，怎么操作元素呢

 

## .contains()
该方法可用来获取包含指定文本的 DOM 元素  
 

#### 两种语法格式

```javascript
.contains(content)
.contains(selector, content)
```
 

#### 实际栗子-测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200618164439302-1921802285.png)  
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608183624800-507269515.png)  
**重点：**只会返回第一个匹配到的元素  
   
**结尾**  
本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解  
对书籍感兴趣的，大家可以参考本篇博客：[https://www.cnblogs.com/poloyy/p/13052972.html](https://www.cnblogs.com/poloyy/p/13052972.html)，考虑自身需求进行购买  
 
> [https://www.cnblogs.com/poloyy/p/13065990.html](https://www.cnblogs.com/poloyy/p/13065990.html)

