
## 作用
- 这是用于控制打印到命令日志的内部API
- 在编写自己的自定义命令时很有用（ Cypress.Commands ）

 

## 语法格式

```javascript
Cypress.log(options)
```
 

#### options 说明
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123155705139-2079973447.png)  
 

## 实际栗子

#### support/commands.js 的代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123160155258-1186533939.png)  
 

#### 测试用例代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123160207763-1399416800.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123160234676-1249222130.png)  
 

#### 开发者工具（F12）Console 面板
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123160253537-1225878237.png)  
 

#### 开发者工具（F12）Application 面板
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201123160305257-168249294.png)  
保存值成功

> [https://www.cnblogs.com/poloyy/p/14025013.html](https://www.cnblogs.com/poloyy/p/14025013.html)

