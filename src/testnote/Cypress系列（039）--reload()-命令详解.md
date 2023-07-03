
## 作用
刷新页面  
 

## 语法格式

```javascript
cy.reload()
cy.reload(forceReload)
cy.reload(options)
cy.reload(forceReload, options)
```
**options：**只有 timeout 和 log，不再展开讲了  
 

#### forceReload

- 是否在**不使用缓存**的情况下重新加载当前页面
- true 表示强制重新加载而不使用缓存，所有资源文件都会重新拉取一遍，**好处**就是可从取服务器获取最新的资源文件，**坏处**就是加载时间会变长

 

## 正确格式

```javascript
cy.reload()
```
 

## 实际栗子

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200621213350989-1164753908.png)  
   
**结尾**  
我的博客即将同步至腾讯云+社区，邀请大家一同入驻：[https://cloud.tencent.com/developer/support-plan?invite_code=12vd92hxgwgj1](https://cloud.tencent.com/developer/support-plan?invite_code=12vd92hxgwgj1)

> [https://www.cnblogs.com/poloyy/p/13173533.html](https://www.cnblogs.com/poloyy/p/13173533.html)

