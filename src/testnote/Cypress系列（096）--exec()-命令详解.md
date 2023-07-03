
## 作用
执行系统命令  
 

## 语法格式

```javascript
cy.exec(command)
cy.exec(command, options)
```
 

#### command
从项目根目录（包含默认 cypress.json 配置文件的目录）执行的系统命令  
 

#### options

- **log：**是否将命令显示到命令日志中，默认 true
- **timeout：**命令超时时间
- **failOnNonZeroExit：**如果命令返回结果的 code 属性值非 0 则返回失败
- **env：**在执行命令之前要设置的环境变量的对象（如： {USERNAME：'yy'} ），将与现有系统环境变量合并

 

## 正确用法

```javascript
cy.exec('npm run build')
```
 

## 命令返回结果
返回一个对象，包含以下属性

- **code：**0 代码成功，1 是失败  

- **stderr：**报错信息  

- **stdout：**执行命令的返回结果  


 

## 简单的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205105237160-900705386.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205105250203-493619050.png)  
 

#### 命令返回结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205105253591-985354674.png)  
 

## 结合接口响应内容的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205105552808-2041535635.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205105600823-193789608.png)  
 

#### 命令返回结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205105616992-1698658200.png)  
该系统命令没有返回结果所以为空  
 

## 设置环境变量的栗子

#### 测试代码
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205105635365-541610586.png)  
如果是 window，打印环境变量记得是 set 环境变量名  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205105641477-437257394.png)  
 

#### 命令返回结果
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205105647421-1915203894.png)  
 

## 注意事项

#### 第一
不要尝试从 cy.exec() 启动网络服务器  
 

#### 命令必须能退出

- cy.exec() 不支持不退出的命令
- 命令必须在 execTimeout 内退出，否则 Cypress 将杀死该命令的进程并导致当前测试失败

 

#### 可以自定义 execTimeout 
可以修改 execTimeout 来延长系统命令的执行时间

```javascript
Cypress.config('execTimeout', 30000)
Cypress.config('execTimeout') // => 30000
```
设置后，剩下的所有测试用例都会生效  
 

#### 在测试用例集配置项中自定义 execTimeout

```javascript
describe('has data available from database', { execTimeout: 90000 }, () => {
  before(() => {
    cy.exec('rake db:seed')
  })
  // tests
  after(() => {
    cy.exec('rake db:reset')
  })
})
```
这样就只针对该 describe 测试用例集生效了  
 

> [https://www.cnblogs.com/poloyy/p/14088138.html](https://www.cnblogs.com/poloyy/p/14088138.html)

