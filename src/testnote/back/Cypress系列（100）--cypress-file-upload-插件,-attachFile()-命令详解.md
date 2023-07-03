
## 官方地址
[https://github.com/abramenal/cypress-file-upload](https://github.com/abramenal/cypress-file-upload)  
 

## 安装方式

#### npm

```javascript
npm install --save-dev cypress-file-upload
```
 

## 项目导入插件
在 cypress/support/commands.js 文件下添加下面语句

```javascript
import 'cypress-file-upload';
```
 

## 实际栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201207105738255-786691206.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201207105742745-783482116.png)  
 

#### 注意事项

- 因为这里用的是 mock，命令是 cy.route() ，但如果换成最新的 cy.intercept() 会失败
- 可以观察下实际项目中是否存在这个问题（主要是上传文件的接口的域名需要和网站同源）

> [https://www.cnblogs.com/poloyy/p/14096085.html](https://www.cnblogs.com/poloyy/p/14096085.html)

