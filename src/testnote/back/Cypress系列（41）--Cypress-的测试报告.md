
## 前言
- Cypress 的测试报告模块脱胎于 Mocha 的测试报告，故任何 Mocha 支持的测试报告均可直接用于 Cypress
- 下面将利用 Cypress-example 提供的 web 应用程序作为例子，需要先启动本地服务

进入被测应用 logging-in__html-web-forms 的目录

```javascript
C:\Users\user\Desktop\py\cypress-example-recipes\examples\logging-in__html-web-forms
```
   
启动本地服务

```javascript
npm start
```
   
启动成功后，cmd窗口将显示服务器的地址和端口  
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200531134112456-898585859.png)  
 

## 内置的测试报告
内置的测试报告包括 Mocha 的内置测试报告和直接嵌入在 Cypress 中的测试报告，主要有以下几种

1. spec 格式报告
1. json 格式报告
1. junit 格式报告

#### **准备工作**
确保  package.json  文件的 scripts 模块加入了如下键值对  "cypress:run":"cypress run"

- cypress run  是以无头浏览器模式跑测试用例文件夹下的所有测试用例
- cypress open  会打开测试用例集的界面，需要手动运行

 

### spec 格式报告

#### 简介
spec 格式是 Mocha 的内置报告，它的输出是一个**嵌套的分级视图**  
 

#### 如何使用
在 Cypress 中使用 spec 格式的报告非常简单，在命令行运行时加上 --reporter=spec  
 

#### 运行测试
进入 Cypress 安装的目录，cmd敲

```javascript
yarn cypress:run --reorter=spec
```
   
运行完成后，测试报告如下图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200602162308863-1238512329.png)  
 

### json 格式报告

#### 简介
json 测试报告格式将输出一个大的 JSON 对象  
 

#### 如何使用
在 Cypress 中使用 json 格式的报告非常简单，在命令行运行时加上  --reporter=json  
 

#### 运行测试
进入 Cypress 安装的目录，cmd敲

```javascript
yarn cypress:run --reporter=json --reporter-options "toConsole=true"
```
   
运行完成后，测试报告如下图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200602162317216-464126208.png)  
 

### junit 格式报告

#### 简介
junit 测试报告格式将输出一个 xml 文件  
 

#### 如何使用
在 Cypress 中使用 xml 格式的报告非常简单，在命令行运行时加上   --reporter=junit  
 

#### 运行测试
进入 Cypress 安装的目录，cmd敲

```javascript
yarn cypress:run --reporter junit --reporter-options "mochaFile=results/test_output.xml,toConsole=true"
```
   
运行完成后，测试报告如下图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200602162402721-361734928.png)  
 

## 自定义的测试报告
除了内置的测试报告，Cypress 也支持用户自动以报告格式  
 

#### Mochawesome 报告介绍

- Mochawesome 是与 JavaScript 测试框架 Mocha 一起使用的自定义报告程序，它运行在 Node.js（≥8）上
- 并与 mochawesome-report-generatir 结合使用生成独立的 HTML/CSS 报告，以帮助可视化测试运行

 

### 在 Cypress 中使用 Mochawesome 报告的步骤

#### 第一步

- 将 Mocha、Mochawesome 添加至项目中（看下面命令）

```javascript
npm install --save-dev mocha
npm install --save-dev mochawesome
```
**注意坑**

- 先看看 node_modules 目录下**是否有** mocha 文件夹，如果有直接装 mochawesome
- 如果安装 mocha 失败，出现很古怪的错误，譬如 mkdirp 版本不行（如：  mkdirp@0.5.1: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x.  ）
- 尝试先 update mkdirp 库，如果也报错，则 uninstall mkdirp 库，如果仍然报错；则把 Cypress 目录下的 node_modules **整个文件夹删掉**，重新执行 npm install ，大概率可以解决问题了

（别问我怎么知道这些坑...）  
 

#### 第二步
进入 Cypress 安装目录，cmd执行下面命令

```javascript
yarn cypress:run --reporter mochawesome
```
   
运行完成后，可以看到下图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200602173006289-1234991306.png)  
   
测试报告文件夹 mochawesome-report 会生成在项目根目录下  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200602173011292-1628670138.png)  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200602173042368-342334244.png)  
   
点击 html 查看可视化报告  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200602173106133-1659955324.png)  
 

### 用户自定义报告的步骤

#### 第一步：配置 reporter 选项

- cypress.json  文件中配置  reporter 选项，指定 reporter 文件位置
- 在本栗子中，把 reporter 定义在 custom_reporter.js 文件中

 

#### 第二步：编写自定义报告文件

1. 进入 Cypress 安装目录下的 cypress 目录下（本案例在： C:\Users\user\Desktop\py\MyCypress\cypress ）
1. 创建 reporter 文件夹，然后创建一个 custom_reporter.js 文件
1. 写以下代码（此自定义报告扩展了内置报告，仅更改了成功的显示样式）
```javascript
var mocha = require('mocha');
module.exports = MyReporter;
function MyReporter(runner) {
    mocha.reporters.Base.call(this, runner)
    var passes = 0
    var failures = 0
    runner.on('pass', function (test) {
        passes++
        console.log('pass:%s', test.fullTitle())
    })
    runner.on('fail', function (test, err) {
        failures++
        console.log('fail:%s -- error:%s', test.fullTitle(), err.message)
    })
    runner.on('end', function () {
        console.log('用户自定义报告：%d/%d', passes, passes + failures)
    })
}
```
 

#### 第三步：运行测试
进入 Cypress 安装目录，cmd敲下面命令

```javascript
yarn cypress:run --reporter ../cypress/reporters/custom_reporter.js
```
   
运行完成后，测试报告如下图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200602210941236-1743756962.png)  
 

## 生成混合测试报告

### 前言

- Cypress 除了支持单个测试报告，还支持混合测试报告
- 老板或者管理者一般都喜欢看到多种不一样样式的报告，比如测试在 CI 中运行时，又想生成 junit 格式的报告，又想在运行时实时看到测试输出
- Cypress 官方推荐使用 mocha-multi-reporters 来生成混合测试报告（[https://github.com/stanleyhlng/mocha-multi-reporters](https://github.com/stanleyhlng/mocha-multi-reporters)）

 

### 使用 mocha-multi-reporters 的测试步骤

#### 第一步：安装所需库

```javascript
npm install --save-dev mocha-multi-reporters mocha-junit-reporter
```
 

#### 第二步：创建 json 文件
在 cypress/reporters 文件夹下，创建一个 custom.json 文件，增加如下内容：

```javascript
{
  "reporterEnabled": "spec,json, mocha-junit-reporter",
  "reporterOptions": {
    "mochaFile": "cypress/results/results-[hash].xml"
  }
}
```
 

#### 第三步：运行测试
进入 Cypress 安装目录，cmd敲下面命令

```javascript
yarn cypress run --reporter mocha-multi-reporters  --reporter-options configFile=cypress/reporters/custom.json --spec cypress/integration/testLogin.js
```
   
运行完成后，测试报告如下图  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200602224559084-825877064.png)  
   
测试报告文件夹 results 会生成在 Cypress安装路径/cypress  目录下  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200602224830648-1058138810.png)  
 

### 总结

- 当我们运行完一次测试（可能包含多个 spec），我们更希望看到**一个完整的测试报告文件，而不是分开的独立文件**
- 特别对于 HTML 格式报告来说，整合到同一个 HTML 报告中是更加直观的
- Cypress 为了解决此问题也提供了高阶的方法，将在后续的 Cypress 进阶部分进行详细介绍

> [https://www.cnblogs.com/poloyy/p/13030898.html](https://www.cnblogs.com/poloyy/p/13030898.html)

