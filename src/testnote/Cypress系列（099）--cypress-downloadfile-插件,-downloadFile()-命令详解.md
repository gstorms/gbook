
## 官方地址
[https://github.com/Xvier/cypress-downloadfile](https://github.com/Xvier/cypress-downloadfile)  
 

## 安装方式

#### npm

```javascript
npm install cypress-downloadfile
```
 

## 项目导入插件
在 cypress/support/commands.js 文件下添加下面语句

```javascript
require('cypress-downloadfile/lib/downloadFileCommand')
```
   
在 cypress/plugins/index.js 文件下写下面语句即可

```javascript
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) => {
  on('task', {downloadFile})
}
```
 

## 注意事项
如果测试文件中自动补全代码功能无法立即使用，可以在文件上方添加下面语句

```javascript
/// <reference types="cypress-downloadfile"/>
```
 

## 命令源码

```javascript
Cypress.Commands.add('downloadFile', (url, dir, fileName, userAgent) => {
    return cy.getCookies().then(cookies => {
        return cy.task('downloadFile', {
            url: url,
            directory: dir,
            cookies: cookies,
            fileName: fileName,
            userAgent: userAgent,
        })
    })
})
```

- 通过 cy.task 完成下载文件的操作
- 暂时没搞懂这个 Cookie 有啥用

 

## 实际栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201207100633188-1566144010.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201207100638820-2113216084.png)  
 

#### Console 查看命令
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201207100653745-1040121306.png)  
 

#### 文件下载目录
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201207100818717-741791214.png)  
如果文件夹不存在，则在 cypress 安装目录（和 cypress.json 同级目录）下生成一个文件夹

> [https://www.cnblogs.com/poloyy/p/14095799.html](https://www.cnblogs.com/poloyy/p/14095799.html)

