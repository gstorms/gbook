
## 作用
- 一看就知道是**清空输入框的所有内容**
- 有趣的是， .clear() 等价于 .type("{selectall}{backspace}")

 

## 语法格式
```javascript
.clear()
.clear(options)
```
 

## 正确用法
宗旨：需要先拿到 DOM 元素，且是 `<input>` 或 `<textarea >` 标签，再执行 clear() 操作
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610150722349-13277444.png)
 

## 错误写法
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610150733052-1245293381.png)
 

## options 参数
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610151655245-869690156.png)
 
**结尾**   
本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解  
大家可以参考本篇博客：[https://www.cnblogs.com/poloyy/p/13052972.html](https://www.cnblogs.com/poloyy/p/13052972.html)


> [https://www.cnblogs.com/poloyy/p/13066015.html](https://www.cnblogs.com/poloyy/p/13066015.html)

