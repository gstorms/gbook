
## 作用
使读取文件并返回内容  
 

## 语法格式

```javascript
cy.readFile(filePath)
cy.readFile(filePath, encoding)
cy.readFile(filePath, options)
cy.readFile(filePath, encoding, options)
```
 

#### filePath
项目根目录（包含默认 cypress.json 配置文件的目录）中需要读取的文件的路径  
 

#### encoding
读取时需要使用的编码

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
- **timeout：**命令超时时间

 

## 正确用法

```javascript
cy.readFile('users.json')
```
 

## 命令返回结果
文件内容  
 

## 读取 txt 文件的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125230959827-786657574.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201127131759720-2106076131.png)  
 

## 读取 json 文件的栗子

#### json 文件数据

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  }
}
```
 

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125231004873-1416800459.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201127131948112-1597854850.png)  
读取出来是一个属性对象  
 

## 读取 yaml 文件的栗子

#### yaml 文件
```yaml
- 1
- 2
- 3
```
   


#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128114151153-764789546.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128114155287-1445768983.png)  
 

#### yaml 扩展使用

```javascript
YAML = require('yamljs');
 
// 解析 YAML 文件
nativeObject = YAML.parse(yamlString);
 
// 生成 YAML 字符串
yamlString = YAML.stringify(nativeObject, 4);
 
// 加载 YAML 文件
nativeObject = YAML.load('myfile.yml');
```
 

## 读取图片的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125231018428-293184615.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201127132009887-705307940.png)  
 

## 读取 mp3 文件的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125231022590-957933149.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201127132018432-809767985.png)  
 

## 读取 mp4 文件的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201125231026949-1043990035.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201127132023655-1395027671.png)  
 
> [https://www.cnblogs.com/poloyy/p/14039551.html](https://www.cnblogs.com/poloyy/p/14039551.html)

