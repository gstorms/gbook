
## 作用
- 在测试中获取并设置环境变量
- 环境变量详解的文章可看：[https://www.cnblogs.com/poloyy/p/13056393.html](https://www.cnblogs.com/poloyy/p/13056393.html)

 

#### 作用范围

- 使用 Cypress.env 设置的环境变量**仅在**当前规范文件（js 测试文件）的范围内生效
- Cypress 隔离运行每个测试文件：在一个测试文件中更改的环境变量在其他测试文件中**不可见**

 

## 语法格式

```javascript
Cypress.env()
Cypress.env(name)
Cypress.env(name, value)
Cypress.env(object)
```
 

#### name
要获取或设置的环境变量名称  
 

#### value
要设置的环境变量值  
 

#### object
使用对象属性（ {} 的格式）设置多个环境变量  
 

## 实际栗子

#### 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124163719869-1280243131.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124163819097-867243906.png)  
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124163828217-1703346171.png)  
 

## 重点
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124164053757-2132605451.png)

- 获取的环境变量是依照上图的 env 来拿的
- 使用 Cypress.env 设置环境变量会覆盖已有的环境变量

 

## 注意事项
首次运行当前测试文件后设置的环境变量会一直保存到结束测试（关闭浏览器或 Stop），什么意思？？  
 

#### 测试用例代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124164932238-76068962.png)  
我将会删掉 user 这个变量以及修改 pwd 这个变量名  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124164948584-832397757.png)  
共 10 个环境变量  
 

#### 修改后的测试用例代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124165002875-677769874.png)  
已经删掉了 user 和改了 pwd  
 

#### 修改后的运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124165022655-515448536.png)  
共 11 个环境变量，pwd 和 user 还在  
 

#### 总结
只有 Stop 和手动关闭浏览器然后再次开始测试才会重置环境变量

> [https://www.cnblogs.com/poloyy/p/14031174.html](https://www.cnblogs.com/poloyy/p/14031174.html)

