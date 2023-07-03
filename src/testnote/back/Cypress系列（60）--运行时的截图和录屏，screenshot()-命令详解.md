
## 背景
- 在测试运行时截图和录屏能够在测试错误时快速定位到问题所在
- Cypress 截图和录屏功能强大

 

## 无须配置，自动截图
以 cypress run 方式运行测试时，当测试发生错误时，Cypress 会自动截图，并默认保存在 cypress/screenshots 文件夹下，而录屏会保存在 cypress/video 文件夹下  
 

#### 命令行运行结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927160810785-1360288750.png)  
console 会看到错误截图和录屏的生成路径  
 

#### 生成截图和录屏的目录
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927160836191-218752750.png)  
 

## 自定义截图，.screenshot() 方法

### 作用
截取被测应用程序的屏幕快照，以及 Cypress 命令日志的屏幕快照  
 

### 语法格式

```javascript
.screenshot()
.screenshot(fileName)
.screenshot(options)
.screenshot(fileName, options)
// ---or---
cy.screenshot()
cy.screenshot(fileName)
cy.screenshot(options)
cy.screenshot(fileName, options)
```
 

#### fileName

- 待保存图片的名称
- 图片默认保存在 cypress/screenshots 文件夹下，可以在 cypress.json 修改默认文件夹路径（配置项 screenshotsFolder ）

 

#### options 详解
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927191730584-578699108.png)  
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927172204537-391158457.png)  
通过 onBeforeScreenshot、onAfterScreenshot，可以在截图发生前或发生后应用自定义的行为  
 

### 正确用法

```javascript
// 直接截图整个页面
cy.screenshot()
// 只截图某个特定元素
cy.get('.post').screenshot()
```
 

### 命令返回结果
返回上一条命令相同的结果  
 

## .screenshot() 栗子

#### 测试代码

```javascript
it('简单的栗子', function () {
    // 截图整个页面
    cy.screenshot()
});
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927174221935-1002897527.png)  
为什么截图这么长呢？  
因为 capture 默认值就是 fullpage，代表整个页面  
 

## .screenshot(filename) 栗子

#### 测试代码

```javascript
it('文件名', function () {
    cy.screenshot('文件名')
});
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927174807830-1402396436.png)  
 

## .screenshot(options) 栗子

### capture:viewport 的栗子

#### 测试代码

```javascript
cy.screenshot({
     capture: 'viewport'
})
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927184944595-957045456.png)  
 

### capture:runner 的栗子

#### 测试代码

```javascript
cy.screenshot({
     capture: 'runner'
})
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927184932384-871583946.png)  
 

## .screenshot() 命令日志
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200928085830543-589955926.png)  
 可以看到各配置项（options）的默认值  
 

## onBeforeScreenshot 的栗子

### 截图某个元素

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200928103524014-1754107427.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200928103528842-1338380678.png)  
$el 是当前元素  
 

#### 截图结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200928103559205-1752489582.png)  
 

### 截图整个页面

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200928103623590-1568579976.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200928103633690-81793974.png)  
$el 是页面根标签  
 

## onAfterScreenshot 的栗子

### 截图某个元素

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200928104732355-294744892.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200928104737969-655149890.png)  
可以看到 props 是当前的一些属性，后面有需要可以获取对应的属性值（格式：props.path）  
 

#### onAfterScreenshot 源码
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200928104758140-995193044.png)  
可以看到不同属性的数据类型  
   
待补充知识点链接  
[https://docs.cypress.io/api/commands/screenshot.html#after-screenshot-plugin-event](https://docs.cypress.io/api/commands/screenshot.html#after-screenshot-plugin-event)

> [https://www.cnblogs.com/poloyy/p/13743099.html](https://www.cnblogs.com/poloyy/p/13743099.html)

