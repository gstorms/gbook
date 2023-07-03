
### 作用
- 将所有后续 cy 命令的作用域限定在此元素内
- 在特定的元素组(例如  )中工作时很有用

### 语法格式
```javascript
.within(callbackFn)
.within(options, callbackFn)
```

#### callbackFn

- 回调函数
- 第一个参数是上一条命令的返回结果(必须是元素)

#### options 参数
**log**：是否将命令显示到命令日志中，默认 true


### 正确用法
```javascript
cy.get('form').within(($form) => {
// 在回调函数里，cy 命令的作用域将限定在 form 中
})
```


### 错误用法
```javascript
// 不能直接他通过 cy 调用
cy.within(() => {})
// getCookies() 返回的不是一个元素
cy.getCookies().within(() => {})
```


### 命令返回结果
返回和上一条命令一样的结果


### 实际栗子

#### 代码
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1616402968075-3d62e83d-128d-4267-9ca1-9f7a5d1b27bb.png#align=left&display=inline&height=290&margin=%5Bobject%20Object%5D&originHeight=290&originWidth=711&size=0&status=done&style=none&width=711)  
重点：回调函数里的 cy.get() 只会从 form 表单里面找元素，而不是整个页面


#### get() 和 within() 命令的返回结果
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1616402986381-24ef373e-80dd-4bcb-a981-82c63481c25a.png#align=left&display=inline&height=162&margin=%5Bobject%20Object%5D&originHeight=162&originWidth=585&size=0&status=done&style=none&width=585)  
两个命令的返回结果都是 form 表单  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1616402995025-a34af8e1-f027-46b0-98ce-67423d079fd4.png#align=left&display=inline&height=327&margin=%5Bobject%20Object%5D&originHeight=327&originWidth=1284&size=0&status=done&style=none&width=1284)

#### 获取输入框的效果
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1616403012697-7b6ea0d7-36bd-4063-b1c0-34bce43f36da.png#align=left&display=inline&height=322&margin=%5Bobject%20Object%5D&originHeight=322&originWidth=1290&size=0&status=done&style=none&width=1290)  
————————————————  
版权声明：本文为CSDN博主「小菠萝测试笔记」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/qq_33801641/article/details/109836412](https://blog.csdn.net/qq_33801641/article/details/109836412)
