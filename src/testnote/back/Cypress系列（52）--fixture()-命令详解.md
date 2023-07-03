
## 作用
加载位于文件中的一组固定数据  
 

## 语法格式

```javascript
cy.fixture(filePath)
cy.fixture(filePath, encoding)
cy.fixture(filePath, options)
cy.fixture(filePath, encoding, options)
```
 

### 参数说明

#### filePath
文件路径，默认会从 cypress/fixtures 文件夹下找文件  
 

#### encoding
读取文件时使用的编码

- ascii
- base64
- binary
- hex
- latin1
- utf8
- utf-8
- ucs2
- ucs-2
- utf16le
- utf-16le

 

## 正确用法

```javascript
// 从 users.json 文件中加载数据
cy.fixture('users').as('usersJson') 
cy.fixture('logo.png').then((logo) => {
  // 加载 logo.png
})
```
 

## 不指定文件后缀名的栗子

```javascript
cy.fixture('admin').as('adminJSON')
```
读取文件的格式将会以下面的顺序进行解析

1. cypress/fixtures/admin.json
1. cypress/fixtures/admin.js
1. cypress/fixtures/admin.coffee
1. cypress/fixtures/admin.html
1. cypress/fixtures/admin.txt
1. cypress/fixtures/admin.csv、
1. cypress/fixtures/admin.png
1. cypress/fixtures/admin.jpg
1. cypress/fixtures/admin.jpeg
1. cypress/fixtures/admin.gif
1. cypress/fixtures/admin.tif
1. cypress/fixtures/admin.tiff
1. cypress/fixtures/admin.zip

 

## 读取的数据的栗子

#### 需要读取 cypress/fixture/users.json 文件的数据
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200924102548311-1646951539.png)  
数组+字典组成的数据结构  
 

#### cypress 代码
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200924102626976-1402155337.png)  
怎么取 json 的数据，这里就怎么写  
 

#### cypress 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200924102631502-432997828.png)  
   
 
> [https://www.cnblogs.com/poloyy/p/13714430.html](https://www.cnblogs.com/poloyy/p/13714430.html)

