
## 前言
- 前面介绍 Cypress 如何通过命令行运行，就是采用 cypress run 或 cypress open 命令，但这不是 Cypress 唯一的运行方式
- Cypress 还允许你将它视为一个 Node Module 来运行，然后通过Node.js运行Cypress，这种方式可以更加灵活地定制测试行为
- 当想在运行后直接访问测试结果时，此功能很有用

 

#### 如何有用

- 挑选测试用例运行
- 整合所有测试用例，提供一份完整HTML格式的测试报告
- 重新运行单个失败的 spec 文件
- 发送有关测试失败的通知，包括附带的屏幕截图
- 启动其他构建行为或脚本

 

#### 重点
模块 API支持两个命令： cypress.run() 和 cypress.open()  
 

## cypress.run() 命令详解

### 栗子

#### 代码

```javascript
// 导入 cypress 模块
const cypress = require('cypress')
// 执行 run 命令
cypress.run({
    spec: './cypress/integration/00_examples/actions.spec.js'
})
.then((results) => {
    // 打印结果
    console.log(results)
})
.catch((err) => {
    // 抓取错误信息并打印
    console.error(err)
})
```
 

#### 运行命令
可以在 cmd 窗口或 npm 脚本中运行下列命令

```javascript
node 1_run.js
```
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201023142807413-351299372.png)  
最终运行的是 actions.spec.js 这个测试用例文件  
 

### 参数列表
和 cypress run 命令行运行的参数一样  
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201023151418764-371740775.png)  
 

### 命令返回结果
cypress.run() 返回一个Promise对象，该 Promise 包含测试结果对象（类似 json 格式的数据），典型的运行可能会返回以下内容：

```json
{
  startedTestsAt: '2020-10-23T06:22:53.210Z',
  endedTestsAt: '2020-10-23T06:23:23.342Z',
  totalDuration: 30132,
  totalSuites: 1,
  totalTests: 14,
  totalFailed: 0,
  totalPassed: 14,
  totalPending: 0,
  totalSkipped: 0,
  runs: [
    {
      stats: [Object],
      reporter: 'cypress/reporters/custom_reporter.js',
      reporterStats: [Object],
      hooks: [Array],
      tests: [Array],
      error: null,
      video: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress\\videos\\00_examples\\actions.spec.js.mp4',
      spec: [Object],
      shouldUploadVideo: true
    }
  ],
  browserPath: '',
  browserName: 'electron',
  browserVersion: '85.0.4183.121',
  osName: 'win32',
  osVersion: '10.0.18363',
  cypressVersion: '5.4.0',
  config: {
    defaultCommandTimeout: 10000,
    env: {
      ENVIRONMENT: 'staging',
      dev: [Object],
      qa: [Object],
      foor: 'bar',
      key: '系统环境变量哦',
      host: 'test',
      api_server: 'http://localhost:8888/api/v1/'
    },
    configFile: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress.json',
    version: '5.4.0',
    reporter: 'cypress/reporters/custom_reporter.js',
    baseUrls: 'http://localhost:7077/',
    retries: 2,
    targetEnv: 'dev',
    projectRoot: 'C:\\Users\\user\\Desktop\\py\\MyCypress',
    projectName: 'MyCypress',
    morgan: false,
    isTextTerminal: true,
    socketId: 'wj65e',
    report: true,
    browsers: [ [Object], [Object], [Object], [Object] ],
    animationDistanceThreshold: 5,
    autoOpen: false,
    baseUrl: null,
    blockHosts: null,
    chromeWebSecurity: true,
    clientRoute: '/__/',
    componentFolder: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress\\component',
    execTimeout: 60000,
    experimentalSourceRewriting: false,
    experimentalComponentTesting: false,
    experimentalFetchPolyfill: false,
    experimentalNetworkStubbing: false,
    fileServerFolder: 'C:\\Users\\user\\Desktop\\py\\MyCypress',
    firefoxGcInterval: { runMode: 1, openMode: null },
    fixturesFolder: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress\\fixtures',
    hosts: null,
    ignoreTestFiles: '*.hot-update.js',
    includeShadowDom: false,
    integrationFolder: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress\\integration',
    javascripts: [],
    modifyObstructiveCode: true,
    namespace: '__cypress',
    nodeVersion: 'default',
    numTestsKeptInMemory: 0,
    pageLoadTimeout: 60000,
    pluginsFile: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress\\plugins\\index.js',
    port: 59756,
    projectId: null,
    reporterOptions: null,
    reporterRoute: '/__cypress/reporter',
    requestTimeout: 5000,
    responseTimeout: 30000,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress\\screenshots',
    socketIoRoute: '/__socket.io',
    socketIoCookie: '__socket.io',
    supportFile: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress\\support\\index.js',
    taskTimeout: 60000,
    testFiles: '**/*.*',
    trashAssetsBeforeRuns: true,
    userAgent: null,
    video: true,
    videoCompression: 32,
    videosFolder: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress\\videos',
    videoUploadOnPasses: true,
    viewportHeight: 660,
    viewportWidth: 1000,
    waitForAnimations: true,
    watchForFileChanges: false,
    xhrRoute: '/xhrs/',
    cypressEnv: 'production',
    resolved: {
      animationDistanceThreshold: [Object],
      baseUrl: [Object],
      blockHosts: [Object],
      browsers: [Object],
      chromeWebSecurity: [Object],
      componentFolder: [Object],
      defaultCommandTimeout: [Object],
      env: [Object],
      execTimeout: [Object],
      experimentalSourceRewriting: [Object],
      experimentalComponentTesting: [Object],
      experimentalFetchPolyfill: [Object],
      experimentalNetworkStubbing: [Object],
      fileServerFolder: [Object],
      firefoxGcInterval: [Object],
      fixturesFolder: [Object],
      hosts: [Object],
      ignoreTestFiles: [Object],
      includeShadowDom: [Object],
      integrationFolder: [Object],
      modifyObstructiveCode: [Object],
      nodeVersion: [Object],
      numTestsKeptInMemory: [Object],
      pageLoadTimeout: [Object],
      pluginsFile: [Object],
      port: [Object],
      projectId: [Object],
      reporter: [Object],
      reporterOptions: [Object],
      requestTimeout: [Object],
      responseTimeout: [Object],
      retries: [Object],
      screenshotOnRunFailure: [Object],
      screenshotsFolder: [Object],
      supportFile: [Object],
      taskTimeout: [Object],
      testFiles: [Object],
      trashAssetsBeforeRuns: [Object],
      userAgent: [Object],
      video: [Object],
      videoCompression: [Object],
      videosFolder: [Object],
      videoUploadOnPasses: [Object],
      viewportHeight: [Object],
      viewportWidth: [Object],
      waitForAnimations: [Object],
      watchForFileChanges: [Object],
      configFile: [Object],
      version: [Object]
    },
    parentTestsFolder: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress',
    parentTestsFolderDisplay: 'MyCypress\\cypress',
    supportFolder: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress\\support',
    integrationExampleName: 'examples',
    integrationExamplePath: 'C:\\Users\\user\\Desktop\\py\\MyCypress\\cypress\\integration\\examples',
    scaffoldedFiles: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object]
    ],
    resolvedNodeVersion: '12.16.3',
    state: {},
    proxyUrl: 'http://localhost:59756',
    browserUrl: 'http://localhost:59756/__/',
    reporterUrl: 'http://localhost:59756/__cypress/reporter',
    xhrUrl: '__cypress/xhrs/'
  }
}

```
 

## cypress.open() 命令详解

### 栗子

#### 代码

```javascript
// 导入 cypress 模块
const cypress = require('cypress')
// 执行 open 命令
cypress.open({
    // 命令参数列表
    config: {
        baseUrl: 'http://localhost:8080',
    },
    env: {
        login_url: '/login',
        products_url: '/products',
    }
})
```
 

#### 运行命令
可以在 cmd 窗口或 npm 脚本中运行下列命令

```javascript
node 2_open.js
```
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201023162937980-1333067131.png)  
在 2_open.js 设置的 config 或 env 会当成 CLI 模式下设置的  
 

### 参数列表
和 cypress open 命令行运行的参数一样  
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201023162557621-701723287.png)  
   
待更新  
完整的 module api 项目

> [https://www.cnblogs.com/poloyy/p/13858431.html](https://www.cnblogs.com/poloyy/p/13858431.html)

