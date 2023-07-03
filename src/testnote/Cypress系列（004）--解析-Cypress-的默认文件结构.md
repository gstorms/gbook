
## 默认文件结构
在使用 cypress open 命令首次打开 Cypress，Cypress 会自动进行初始化配置并**生成一个默认的文件夹结构**，如下图  
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200531194547131-932676163.png)  
 

## 前言
 这里先介绍文件结构中每种文件的作用是啥，后面再具体写代码的栗子  
 

## fixtures 测试夹具

#### 简介

- 测试夹具通常配合 cy.fixture() 使用
- 主要用来**存储**测试用例的**外部静态数据**
- fixtures 默认就在 cypress/fixtures 目录下，但也可以配置到另一个目录

 

#### 外部静态数据的详解

- 测试夹具的静态数据通常存储在 .json 文件中，如自动生成的 examples.json
- 静态数据通常是某个**网络请求对应的响应部分**，包括HTTP状态码和返回值，一般是复制过来更改而不是自己手工填写

 

#### fixtures 的实际应用场景
如果你的测试需要对某些**外部接口**进行访问并**依赖它的返回值**，则可以使用测试夹具而无须真正访问这个接口**（有点类似 mock）**  
 

#### 使用测试夹具的好处

- 消除了对外部功能模块的依赖
- 已编写的测试用例可以使用测试夹具**提供的固定返回值**，并且你确切知道这个返回值是你想要的
- 因为无须真正地发送网络请求，所以测试更快

 

#### 命令示例
要查看 Cypress 中每个命令的示例，可以打开  cypress/integration/examples ，里面都是官方提供的栗子  
 

## test file 测试文件

#### 简介
测试文件就是**测试用例**，默认位于 cypress/integration ，但也可以配置到另一个目录  
 

#### 测试文件格式
所有在 integration 文件下，且文件格式是以下的文件都将被 Cypress 识别为测试文件

- .js ：普通的JavaScript 编写的文件**【最常用啦】**
- .jsx ：带有扩展的 JavaScript 文件，其中可以包含处理 XML 的 ECMAScript
- .coffee ：一套 JavaScript 转译的语言。有更严格的语法
- .cjsx ：CoffeeScript 中的 jsx 文件

创建好后，Cypress 的 Test  Runner 刷新之后就可以看到对应测试文件了  
 

## plugin file 插件文件

#### 前言

- Cypress 独有优点就是**测试代码运行在浏览器之内**，使得 Cypress 跟其他的测试框架相比，有显著的架构优势
- 这优点虽然提供了可靠性测试，但也使得和在浏览器之外进行通信更加困难**【痛点：和外部通信困难】**

 

#### 插件文件的诞生

- Cypress 为了解决上述痛点提供了一些现成的插件，使你可以**修改或扩展 Cypress 的内部行为**（如：动态修改配置信息和环境变量等），也可以自定义自己的插件
- 默认情况，插件位于 cypress/plugins/index.js 中，但可以配置到另一个目录
- 为了方便，每个**测试文件运行之前**，Cypress 都会**自动加载插件文件** cypress/plugins/index.js

 

#### 插件的应用场景　　

- 动态更改来自 cypress.json，cypress.env.json，CLI或系统环境变量的**已解析配置和环境变量**
- 修改特定浏览器的启动参数
- 将消息直接从测试代码传递到后端

后面再详解插件在项目中的实际运用  
 

## support file 支持文件

#### 简介

- 支持文件目录是放置可重用配置项，如**底层通用函数或全局默认配置 **
- 支持文件默认位于 cypress/support/index.js 中，但可以配置到另一个目录
- 为了方便，每个**测试文件运行之前**，Cypress 都会**自动加载支持文件** cypress/support/index.js

 

#### 如何使用支持文件
只需要在 cypress/support/index.js 文件里添加 beforeEach() 函数即可，如下面例子  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200601111945395-1591493126.png)  
这将能实现每次测试运行前打印出所有的环境变量信息

> [https://www.cnblogs.com/poloyy/p/13022249.html](https://www.cnblogs.com/poloyy/p/13022249.html)

