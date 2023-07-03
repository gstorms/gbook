
## 动态生成测试用例
直接看这篇文章哦：[https://www.cnblogs.com/poloyy/p/13042466.html](https://www.cnblogs.com/poloyy/p/13042466.html)  
 

## 静态挑选待运行测试用例
是指给测试用例添加关键字如：.only()、.skip()、或者指定 runFlag 且在运行时指定 runFlag 的值  
具体学习可以看这两篇文章

- [https://www.cnblogs.com/poloyy/p/13040113.html](https://www.cnblogs.com/poloyy/p/13040113.html)
- [https://www.cnblogs.com/poloyy/p/13039624.html](https://www.cnblogs.com/poloyy/p/13039624.html)

 

## 动态挑选待运行测试用例

#### 什么是动态挑选待运行测试用例
指给测试用例添加一个或多个相应描述关键字，在运行时，指定相应的关键字，运行或排斥测试用例  
 

#### 如何动态挑选待运行测试用例

- 使用 cypress-select-tests 插件
- 官方：[https://github.com/bahmutov/cypress-select-tests](https://github.com/bahmutov/cypress-select-tests)

 

### 安装插件
进入 cypress 安装目录下，cmd 执行：

```javascript
npm install --save-dev cypress-select-tests
```
 

### 设置插件
在 cypress/plugins/index.js 文件中输入以下代码

```javascript
const selectTestsWithGrep = require('cypress-select-tests/grep')
module.exports = (on, config) => {
  on('file:preprocessor', selectTestsWithGrep(config))
}
```
 

### 指定测试用例运行的栗子

#### 测试代码

```javascript
context('指定测试用例运行的栗子', function () {
    it('[smoke] 登录用例1', function () {
        cy.log('登录成功')
    });
    it('[e2e,smoke] 登录用例1', function () {
        cy.log('登录成功')
    });
})
```
 

#### 执行以下命令

```javascript
yarn cypress:open --env grep=e2e
```
 

- 打开 Cypress 运行器，运行测试用例文件
- **--env grep=e2e 的作用：**指定包含 e2e 标签的测试用例运行

 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201016160827681-399266918.png)  
 

### 使用该插件的重点
其实就是【写标签，通过各种方式传递环境变量】，以下是通过 CLI 方式传递环境变量的几种写法和对应的作用

```bash
# 仅运行带有 works 标签的测试用例
yarn cypress open --env grep = works
# 仅运行文件名中带有 foo 的文件
yarn cypress open --env fgrep = foo
# 仅运行文件名中带有 foo 的文件，且仅运行文件中带有 works 标签的测试用例
yarn cypress open --env fgrep = foo，grep = works
# 仅运行带有 '功能A' 标签的测试用例
yarn cypress open --env grep ='功能A'
#仅运行文件名中不带有 foo 的文件
yarn cypress open --env fgrep = foo，invert = true
#仅运行不带有 works 标签的测试用例
yarn cypress open --env grep = works，invert = true
```
 
> [https://www.cnblogs.com/poloyy/p/13830031.html](https://www.cnblogs.com/poloyy/p/13830031.html)

