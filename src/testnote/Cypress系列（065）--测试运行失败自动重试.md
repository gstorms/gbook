
## 重试的介绍

#### 学习前的三问

1. 什么是重试测试
1. 为什么重试很重要
1. 如何使用重试

 

#### 为什么要重试

- 使用 Cypress 进行自动化测试时，仍然会存在一些难以验证的行为，并使得测试变得不稳定（不可靠）
- 有时会由于不可以预测的情况（如，外部依赖项中断，随机网络错误等）而导致测试失败

 

#### 其他导致不可靠测试的因素

- 前端动画
- API 调用
- 测试服务器/数据库的可用性
- 依赖资源的可用性
- 网络问题

 

#### 重试的优势

- 通过重试，Cypress 能够重试失败的测试用例，以帮助减少测试脆弱性和持续集成（CI）构建失败的情况
-  从而节省团队宝贵的时间和资源，使团队可以专注于最重要的事情

 

#### 备注

- Cypress 5.0 之前需要通过插件 cypress-plugin-retries 来完成重试的作用
- Cypress 5.0 开始就自带重试的配置项了

 

## 通过插件来完成重试

#### 安装 cypress-plugin-retries

```bash
npm install -D cypress-plugin-retries
```
 

#### 在 cypress/support/index.js 下增加如下代码

```bash
require('cypress-plugin-retries’)
```
 

#### 在 package.json 的 scripts 代码块下增加如下代码

```bash
{
   "scripts" : {
        "retryCases":"CYPRESS_RETRIES=2 cypress run"
   }  
}
```
 

#### 使用
在 Cypress 安装目录下运行下面命令，所有测试用例若失败都会自动重试 2 次

```bash
yarn retryCases
```
 

## Cypress 自带的重试功能介绍

### 前言

- 默认情况下，测试将在失败时不重试，需要在**配置中启用**测试重试才能使用此功能
- 启用测试重试后，可以将测试配置为具有 X 次重试次数
- 例如，测试重试配置了2次重试，则 Cypress 将最多重试2次（共运行3次），然后再标记为失败测试

 

#### 注意
当再次运行每个测试时，以下 hook 函数也将重新运行

1. beforeEach
1. afterEach

但 before 和 after 不会触发  
 

### 重试的工作流程
假设 Cypress 设置了重试两次

- 第一次运行时若成功，则继续往下运行其他的测试用例
- 第一次运行若失败  ，则会重试运行第一次
- 重试运行第一次若成功，则继续往下运行其他的测试用例
- 若重试运行第一次还失败，则重试运行第二次
- 若重试运行第二次仍然失败，则将此 测试用例标记为失败

**注：**能够在命令日志中**查看尝试的次数**，并根据需要扩展每次尝试以进行检查和调试  
 

## 配置重试功能

### 全局配置

#### 前言

- 通常需要为 cypress run 和 cypress open 分开定义不同的重试次数
- 默认在 cypress.json 中进行配置
- **runMode：**定义运行 cypress run 时的重试次数
- **openMode：**定义运行 cypress open 时的重试次数

 

#### cypress.json 分开定义
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201015142257265-1056428370.png)  
 

#### cypress.json 合并定义
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201015142420050-769488827.png)  
这样无论是 cypress run 命令还是 cypress open 命令，重试次数都是 2  
 

### 自定义配置

#### 测试用例级别
```bash
context('测试用例级别', function () {
    it('栗子1', {
        // 无论是 runMode 还是 openMode 都重试 2 次
        retries: 2,
        defaultCommandTimeout: 1000
    }, function () {
        cy.get('#id')
    });
    it('栗子2', {
        // 分开指定重试次数
        retries: {
            runMode: 2,
            openMode: 1
        },
        defaultCommandTimeout: 1000
    }, function () {
        cy.get('#id')
    });
})
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201015155421626-1605923295.png)  
栗子1 重试 2 次，栗子2 重试 1次，测试不通过就会打 ×，点击可以查看详细错误信息  
（不得不说，这按钮 UI 真好看...）  
 

#### 测试用例集级别
```bash
context('测试用例集级别', {
        // 此 context 下面的所有测试用例（it）重试次数都是 1
        retries: 1,
        defaultCommandTimeout: 1000
    }, function () {
        it('栗子1', function () {
            cy.get('#id')
        })
        it('栗子2', function () {
            cy.get('#id')
        })
    }
)
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201015163037154-1591190252.png)  
 

## 重试功能 + .screenshot() 的栗子

#### 测试代码

```bash
context('截图的栗子', function () {
    it('栗子', {
        retries: 2,
        defaultCommandTimeout: 1000
    }, function () {
        cy.screenshot('user-login-errors')
        cy.get('#id')
    });
})
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201015172838626-1112095752.png)  
重试是的截图图片名称会包含 attempt  
 
> [https://www.cnblogs.com/poloyy/p/13821860.html](https://www.cnblogs.com/poloyy/p/13821860.html)

