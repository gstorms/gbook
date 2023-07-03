
## Cypress 简介
- 基于 **JavaScript** 的前端测试工具，可以对浏览器中运行的任何内容进行快速、简单、可靠的测试
- Cypress 是**自集成**的，提供了一套完整的端到端测试，无须借助其他外部工具，安装后即可快速地创建、编写、运行测试用例，**且对每一步操作都支持回看**
- 不同于其他只能测试 UI 层的前端测试工具，Cypress 允许编写所有类型的测试，覆盖了测试金字塔模型的所有测试类型**【界面测试，集成测试，单元测试】**
- Cypress 底层协议**不采用** WebDriver

![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200526133558556-1578884405.jpg)  
 

## Cypress 原理

#### Webdriver 运行的方式

- 大多数测试工具（如：Selenium/webdriver）通过在**外部浏览器运行**并在网络上执行远程命令来运行
- 因为 Webdriver 底层通信协议基于 JSON Wire Protocol，运行需要网络通信

 

#### Cypress 运行的方式
Cypress 和 Webdriver 方式完全相反，它与应用程序在相同的生命周期里执行  
 

#### Cypress 运行测试的大致流程

1. 运行测试后，Cypress 使用 **webpack** 将测试代码中的**所有模块 bundle** 到一个 js 文件中
1. 然后，运行浏览器，并且将测试代码注入到一个空白页中，然后它将在浏览器中运行测试代码【**可以理解成：**Cypress 将测试代码放到一个 **iframe** 中运行】

 

#### Cypress 运行测试的技术流程

1. 每次测试首次加载 Cypress 时，内部 Cypress Web 应用程序先把自己**托管**在本地的一个随机端口上**【如：http://localhost:65874】**
1. 在识别出测试中发出的第一个  cy.visit()  命令后，Cypress 会更改本地 URL 以匹配你远程应用程序的 Origin**【满足同源策略】**，这使得你的**测试代码和应用程序**可以在**同一个 Run Loop 中运行  **

 

#### Cypress 运行更快的根本原因

- Cypress 测试代码和应用程序均运行在由 Cypress 全权控制的浏览器中
- 且它们运行**在同一个Domain 下的不同 iframe 中**，所以 Cypress 的测试代码可以直接操作 DOM、Window Objects、Local Storages而**无须通过网络访问**

 

#### Cypress 稳定性、可靠性更高的原因

- Cypress 还可以在网络层进行**即时读取和更改网络流量**的操作
- Cypress 背后是 **Node.js Process 控制的 Proxy 进行转发**，这使得 Cypress 不仅可以修改进出浏览器的所有内容，还可以更改可能影响自动化操作的代码
- Cypress 相对于其他测试工具来说，能从根本上**控制整个自动化测试的流程**

 

## Cypress 架构图
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200526144722327-571556348.png)  
 

## Cypress 的特性

### 时间穿梭【历史记录】

- Cypress 在测试代码**运行时会自动拍照**
- 等测试运行结束后，用户可在 Cypress 提供的 **Test Runner** 里，通过悬停在命令上的方式查看运行时每一步都发生了什么

 

### 实时重新加载
当测试代码修改保存后，Cypress 会自动加载改动地方，并重新运行测试  
 

### Spies（间谍）、Stubs（存根）、Clock（时钟）

- Cypress 允许你验证并控制函数行为，Mock 服务器的响应，更改系统时间
- 单元测试触手可及！

 

### 运行结果一致性
Cypress 架构不使用 Selenium 或 Webdriver，在运行速度、可靠性测试、测试结果一致性上均有良好保障  
 

### 可调试性
当测试失败时，可以直接从开发者工具（F12 Chrome DevTools）进行调试，这熟悉吧？？  
 

### 自动等待

- 使用Cypress，永远无须在测试中添加 强制等待、隐性等待、显性等待
- Cypress 会自动等待元素至可靠操作状态时才执行命令或断言
- 异步操作触手可及！

 

### 网络流量控制
Cypress 可以 Mock 服务器返回的结果，无须依赖后端服务器，即可实现模拟网络请求  
 

### 截图和视频
Cypress 在测试运行失败时会自动截图，在无头运行时（无GUI界面）会录制整个测试套件的视频  
 

## Cypress 优势的总结
像我们在用 Selenium 时，需要集成单元测试框架（unittest、pytest），想要好看的测试报告还得集成（allure），想要 Mock 还得引入对应的 Mock 库  
而 Cypress 是开箱即用！啥意思？看下图！  
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200526155620721-2112939345.png)  
 
> [https://www.cnblogs.com/poloyy/p/12966125.html](https://www.cnblogs.com/poloyy/p/12966125.html)

