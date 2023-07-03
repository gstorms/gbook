
## 常见的环境变量设置方式
可参考这篇文章：[https://www.cnblogs.com/poloyy/p/13056393.html](https://www.cnblogs.com/poloyy/p/13056393.html)  
 

#### 前言

- 里面写的设置方式针对的是单个环境
- 但实际项目可能会存在多个环境（开发、测试、预发、生产），不同环境的环境变量就会不一样
- 如果还是单纯只用上面讲到的方式，切换不同环境时，还得手动修改环境变量，极其不方便

 

## 使用 cypress.env.json

#### 前言

- Cypress 允许针对不同测试环境使用多个配置文件并且在运行时动态指定
- 从而免除每切换一次环境，就需要更改环境变量值的情况

 

### 具体操作步骤

#### 创建文件夹和文件

- 在 cypress安装目录下创建一个 config 文件夹
- 文件夹下建立两个文件，分别命名为 cypress.dev.json，cypress.qa.json

![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201019122832250-660222662.png)  
 

#### cypress.dev.json 代码

```json
{
  "baseUrl": "http://localhost:7077/login",
  "env": {
    "username": "jane.lane",
    "password": "password123"
  }
}
```
 

#### cypress.qa.json 代码

```json
{
  "baseUrl": "http://localhost:7077/login",
  "env": {
    "username": "wrongUser",
    "password": "wrongPwd"
  }
}
```
 

#### 在 cypress 安装目录/plugins/index.js 中更改配置如下
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201019140312384-539288717.png)  
 

#### index.js 的代码
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201019143647112-274468775.png)  
 

#### 测试用例代码
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201019143650215-1577692824.png)  
 

#### 命令行运行 cypress 命令

yarn cypress:open --env configFile=qa

- 上述命令打开 cypress 运行器（Test Runner）
- 当然 configFile 作为环境变量可以有多种方式传递，参照一开始的文章哦

 

#### 查看运行器的配置项
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201019143750678-927465158.png)  
 

#### 测试结果
点击即可运行测试用例文件  
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201019143811680-1843605095.png)  
 

## 运行时动态指定环境变量

- 上面讲的使用 cypress.env.json 可以指定测试环境运行，但需要额外创建文件
- 除 cypress.env.json 外，在运行时指定测试环境的同时仍然可以使用 cypress.json 文件

 

#### cypress.json 代码

```json
"targetEnv": "dev",
  "env": {
    "dev": {
      "username": "iTesting",
      "password": "weChat",
      "Url": "http://localhost:5883"
    },
    "qa": {
      "username": "wrongUser",
      "password": "wrongPassword",
      "Url": "http://www.test.com:5883"
    }
  }
```
 

#### support/index.js 代码
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201019151823092-1201723260.png)  
 

#### 命令行运行 cypress 命令
指定需要运行的测试环境

```json
yarn cypress:open --env testEnv=qa
```
 
> [https://www.cnblogs.com/poloyy/p/13840462.html](https://www.cnblogs.com/poloyy/p/13840462.html)

