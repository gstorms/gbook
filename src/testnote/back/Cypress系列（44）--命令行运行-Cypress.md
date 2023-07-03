
## 前言
前面也介绍过 Cypress 命令行，先来看看它的语法格式

```javascript
cypress <command> [options]
```

- **command：**必选参数，可以是：open、run、install、verify、cache、help、version
- **options：**可选参数，不同 command 有不同的 options

 

## cypress open 简介

### 简介

- 在交互模式下打开 Cypress 测试运行器（Test Runner）
- 在测试用例的运行过程中，测试用例的每一条命令，每一个操作都将显式地显示在测试运行器中

 

### 最简单的命令
进入项目根目录下

```javascript
yarn run cypress open
```
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907115026299-921072230.png)  
 

### 通过 package.json 指定 scripts

```javascript
"cypress:open": "cypress open"
```
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907122859879-244397599.png)  
 

#### yarn 运行

```bash
yarn cypress:open
```
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907123119079-2019877294.png)  
 

#### npm 运行

```bash
npm run cypress:open
```
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907123226190-929086546.png)  
 

## cypress open 详解

#### 前言

- cypress open 运行时支持指定多个参数，指定的参数将自动应用于你通过测试运行器打开的项目
- 这些参数将应用于每一次测试运行，直到关闭测试运行器为止
- 指定的参数将会覆盖配置文件 cypress.json 中的相同参数

 

### 可选参数列表
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907160214716-159873791.png)  
 

### --browser
默认情况下，Cypress 会自动查找你系统中可使用的浏览器，但是目前只有 Chrome 家族的浏览器才支持

```bash
cypress open --browser /usr/bin/chromium
```
 

### --config

```bash
cypress open --config pageLoadTimeout=100000,watchForFileChanges=false
```
 

### --config-file
默认情况下，所有的配置项都定义在 cypress.json 文件中

```bash
cypress open --config-file tests/cypress-config.json
```
 

### --env

```bash
# 单个环境变量
cypress open --env host=api.dev.local
# 多个环境变量
cypress open --env host=api.dev.local,port=4222
# 值为 json 字符串
cypress open --env flags='{"feature-a":true,"feature-b":false}'
```
 

### --global
允许在多个嵌套项目中共享同一个安装好的 Cypress 版本

```javascript
cypress open --global
```
 

### --port

```javascript
cypress open --port 8080
```
 

### --project
用来指定待运行的项目，如果你的项目包含多个子项目，可以用此参数来运行指定的子项目（包括加载对应项目的配置）

```javascript
cypress open --project ./some/nested/folder
```
 

## Cypress run 详解

### 作用
默认情况下，Cypress 会将 electron 作为**无头浏览器**运行完所有的测试用例  
 

### 可选参数列表
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907190340032-907531360.png)  
 

### --browser
只要系统上可以检测到，browser 参数可以被设置为 chrome ，canary，chromium，electron，Cypress 会试图自动找到已经装好的浏览器

```javascript
cypress run --browser chrome
```
 

### --config、--config-file、--env、--port、--help、--project
和上面 cypress open 用法一致  
 

### --spec

- 指定运行哪些测试文件夹/文件
- 如果不指定测试文件夹，Cypress 将为你自动运行所有存在 Integration 文件夹下的测试用例

 

#### 栗子
运行某个单独的测试文件而不是所有的测试用例

```javascript
cypress run --spec "cypress/integration/examples/actions.spec.js"
```
   
运行*号匹配到的文件目录（注意：推荐使用双星号**）

```javascript
cypress run --spec "cypress/integration/login/**/*"
```
   
运行指定多个测试文件

```javascript
cypress run --spec "cypress/integration/examples/actions.spec.js,cypress/integration/examples/files.spec.js"
```
 

### --record --key
在测试运行时录制视频

```javascript
cypress run --record --key
```
如果在 cypress.json 中设置了环境变量 CYPRESS_RECORD_KEY，你可以忽略 --key 参数。  
 

### --ci-build-id
用于分组运行或者并行运行，它通过指定一个唯一的标识符来实现，必须配合参数 --group 或 --parallel 才能使用

```javascript
cypress run --ci-build-id BUILD_NUMBER
```
   
通常这个标识符被设置为持续集成环境的环境变量  
 

### --group
在一次运行中，把符合条件的测试用例分组展示

```javascript
cypress run --group admin-tests --spec 'cypress/integration/admin/**/*'
```
 

### --parallel
在多台机器上并行运行测试文件（后面文章再展开详解）

```javascript
cypress run --record --parallel --group e2e-staging-specs
```
结合 --group 使用  
 

### --headed

```javascript
cypress run --headed chrome
```
默认是无头模式，加上就是使用 chrome 浏览器运行  
 

### --no-exit

```javascript
cypress run --headed --no-exit
```
结合 --headed 来指定测试运行时显示及在运行后查看命令日志  
 

### --reporter、--reporter-options

- 用来指定 Mocha 的 reporter
- 在测试报告文章中有详细讲解过，[https://www.cnblogs.com/poloyy/p/13030898.html](https://www.cnblogs.com/poloyy/p/13030898.html)

 

## cypress verify 详解

#### 作用
验证 Cypress 安装正确并可用  
 

#### 实际

```bash
C:\Users\user\Desktop\py\MyCypress>yarn run cypress verify
yarn run v1.22.4
$ C:\Users\user\Desktop\py\MyCypress\node_modules\.bin\cypress verify
  √  Verified Cypress! C:\Users\user\AppData\Local\Cypress\Cache\5.1.0\Cypress
Done in 3.99s.
```
 

## cypress verison 详解
查看版本信息

```bash
C:\Users\user\Desktop\py\MyCypress>yarn run cypress version
yarn run v1.22.4
$ C:\Users\user\Desktop\py\MyCypress\node_modules\.bin\cypress version
Cypress package version: 5.1.0
Cypress binary version: 5.1.0
Done in 0.69s.
```
 
> [https://www.cnblogs.com/poloyy/p/13626189.html](https://www.cnblogs.com/poloyy/p/13626189.html)

