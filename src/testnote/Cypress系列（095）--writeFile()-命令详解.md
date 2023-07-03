
## 作用
写入具有指定内容的文件  
 

## 语法格式

```javascript
cy.writeFile(filePath, contents)
cy.writeFile(filePath, contents, encoding)
cy.writeFile(filePath, contents, options)
```
 

#### filePath
项目根目录（包含默认 cypress.json 配置文件的目录）中需要写入的文件的路径  
 

#### contents
要写入文件的内容，可以是字符串、数组、对象类型  
 

#### encoding
写入时需要使用的编码

- ascii
- base64
- binary
- hex
- latin1
- **utf8**
- **utf-8**
- ucs2
- ucs-2
- utf16le
- utf-16le

 

#### options

- **log：**是否将命令显示到命令日志中，默认 true
- **flag：**文件系统标志，默认 **w**
- **encoding：**写入文件时要使用的编码，默认 **utf8**

 

#### flag 文件系统标志有哪些？
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128103732840-1525623897.png)  
 

## 正确用法

```javascript
cy.writeFile('menu.json')
```
 

## 命令返回结果

- contents 参数值
- 但是我发现如果打印该命令返回结果会是一个 null

 

## 写入 txt 文件的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128105021449-907451818.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128105026831-1466473393.png)  
记住默认是 w 模式哦，是会把文件原来的内容覆盖的，若需要追加的话使用 a 哦  
 

## 写入 json 文件的栗子一

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128105911995-1499059451.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128105920109-1038819744.png)  
 

## 写入 json 文件的栗子二

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128105948879-869228096.png)  
将 HTTP 请求的响应内容保存写入到本地文件中  
 

#### 运行结果

#### ![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128110004162-1623625001.png)
 

## 使用 a+ 模式的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128112825960-1072553469.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128112831389-863695901.png)  
 
> [https://www.cnblogs.com/poloyy/p/14050772.html](https://www.cnblogs.com/poloyy/p/14050772.html)

