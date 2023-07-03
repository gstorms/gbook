
## 前言
- 环境变量，其实就是根据环境的变化，变量会有不同的值
- 比如最常见的：开发环境、测试环境、生产环境的 URL 肯定不一样，我们可以根据不同的环境选择不同的环境变量
- 这就是为什么我们要学习环境变量的原因

 

## 环境变量在以下情况会很有用

- 不同开发人员，对应的值也可能不同
- 不同环境下的值是不同的，如：dev、test、prod
- 某些值会频繁变化，而且高度动态
- 环境变量很容易会更改，尤其是在持续集成（CI）中运行时

 

#### 栗子
不要在测试中进行硬编码（写死，常量），需要改的时候需要动代码，比如：

```javascript
cy.request('https://api.acme.corp') // 这将在其他环境中无法使
```
   
使用环境变量后

```javascript
cy.request(Cypress.env('EXTERNAL_API')) // 指向动态环境变量
```
   
当不同环境运行时，如果需要访问不同的 URL 我们只需要改环境变量即可了，而不用动到代码  
 

## baseUrl

- 前面我们说到可以通过**环境变量**设置测试套件访问的 URL，这是其中一种方式
- 而 Cypress 早就替我们想好了如何解决这问题，可以通过配置 baseUrl 来取代环境变量的方式
- 当你配置了 baseUrl ，测试套件中的 cy.visit() 、 cy.request() 都会自动以 baseUrl 的值作为前缀
- 并且，当你需要**访问某些网址**或者**发起接口请求**时，在代码中就可以不用再指定请求的 host 或者 url 了

 

### 如何配置 baseUrl

- 细心的小伙伴已经知道，前面我讲 Cypress 全局配置项的时候已经提到过 baseUrl 了
- 只需要在 cypress.json 文件进行配置就可以啦，如下

![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608095054970-1798178040.png)  
 

### 代码中调用

```javascript
cy.visit("")

// 错误写法  cy.visit()
```
**记住**调用 visit 或 request 时，再怎么样也要传个空字符串 "" ，不能啥都不填哦  
 

### 通过环境变量来覆盖 baseUrl
即使配置了 baseUrl ，我们也可以通过环境变量来覆盖它

```javascript
CYPRESS_baseUrl=https://staging.app.com cypress run
```
 

## 设置环境变量

#### 一共有六种方式

1. 在 cypress.json 文件中设置
1. 创建一个 cypress.env.json 文件
1. 导出为 CYPRESS_*
1. 在 CLI 中传递为 --env （命令行运行中添加）
1. 在插件中设置一个环境变量
1. 可以通过 test configuration 设置环境变量

   
**----------------------------->>>>>>>>>>>>>>>>>>> 点击右侧目录即可跳转**  
 

#### 最常见的做法

- 使用一种策略进行本地开发，但在 CI（持续集成）中运行时使用另一种策略
- 在测试运行时，可以使用 Cypress.env() 访问环境变量的值

** **

### cypress.json 中设置
在 cypress.json 的 env 键下设置的任何 key:value 都是环境变量  
 

#### cypress.json 代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608101919851-721016188.png)  
 

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608101930159-2001124214.png)

```javascript
// 打印所有环境变量
Cypress.env()
// 打印某个环境变量的值
Cypress.env("foor")
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608101932404-1865034842.png)  
 

#### 优缺点
| 优点 | 缺点 |
| --- | --- |
| 适用于需要源码托管（git）并在所有计算机保持相同的值 | 只适用于在所有计算机上应该有相同的值 |

 

### 创建 cypress.env.json 文件

#### 该文件的描述

- 可以创建自己的 cypress.env.json 文件，Cypress 将会自动检查它
- 并且里面的值会**覆盖** cypress.json 中**重名的环境变量**
- 它创建在 cypress.json 同级目录下

 

#### 用这个文件有啥用
如果将cypress.env.json 添加到.gitgnore文件中，那么文件中的值对于每个开发人员的计算机都是不同的  
 

#### cypress.env.json 文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608110706749-942931715.png)  
 

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608110631280-45349058.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608110640702-3563312.png)  
在 cypress.json 中也有一个 key 的环境变量，所以在 cypress.env.json 的 key 的值覆盖了它的值  
 

#### 优缺点
| 优点 | 缺点 |
| --- | --- |
| 专用文件，只存放环境变量 | 需要单独多处理一个新的文件 |
| 可以从其他构建过程中生成此文件 | 可能会过度干预 1 或 2 个环境变量 |
| 不同计算机的环境变量可能不同 |   |
| 支持嵌套字段，如：{ testUser: { name: '...', email: '...' } } |   |

 

### CYPRESS_*

#### 重点

- 计算机中任何以 CYPRESS_ 或 cypress_ 开头的环境变量都会自动被 Cypress 识别出来
- 会直接覆盖 cypress.json 和 cypress.env.json 文件中重名的环境变量
- Cypress在添加环境变量时，会自动去掉 CYPRESS_ 前缀
- 用户级别环境变量的优先级会高于系统变量哦

 

#### 在系统添加环境变量
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201016101522917-981605218.png)  
 

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201016101704201-960251321.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201016101708679-1423363483.png)  
 

### --env

#### 重点

- 可以通过命令行将环境变量作为**命令行参数**传进来
- 它的**优先级最高**，会覆盖其他地方设置的重名环境变量 
- 可以为 cypress open 或 cypress run 添加 --env 参数

 

#### cmd 命令
在 Cypress 安装目录下，cmd敲

```javascript
yarn cypress:open --env host=poloyy.com,key=命令行参数环境变量
```
或

```javascript
yarn cypress:run --env host=poloyy.com,key=命令行参数环境变量
```
 

#### 测试文件代码
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608132413061-217421131.png)  
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608132423572-1205953513.png)  
 

#### 优缺点
| 优点 | 缺点 |
| --- | --- |
| 不需要对文件或配置项进行任何更改 | 使用 --env 并不友好 |
| 简单明了的设置环境变量 | 不支持嵌套字段 |
| 优先级最高，覆盖其他形式设置的环境变量 |   |
| 允许不同机器之间存在动态的值 |   |

 

### plugins 中声明环境变量

#### 介绍

- 可以使用 plugins 通过 Node 代码动态设置它们，而不必在文件中设置环境变量
- plugins 具体如何使用可以看这篇文章：待更新

 

#### 优缺点
| 优点 | 缺点 |
| --- | --- |
| 最大程度的灵活性 | 需要使用Node编写知识 |
| 可以根据需要管理配置 | 更具挑战性 |

 

### test configuration 设置环境变量

#### 介绍

- 可以给测试用例或测试用例集单独设置环境变量
- 会覆盖其他方式设置的环境变量

 

#### 测试文件代码
```javascript
context('test configuration 设置环境变量', {
    env: {
        'key': '测试配置项',
        'host': 'www.poloyy.com'
    }
}, function () {
    it('test configuration 测试用例设置', function () {
        cy.log(`环境变量有${JSON.stringify(Cypress.env())}`)
        cy.log(`key 环境变量的值是${JSON.stringify(Cypress.env("key"))}`)
        cy.log(`host 环境变量的值是${JSON.stringify(Cypress.env("host"))}`)
    });
    it('test configuration 测试用例设置2', {
        env: {
            'key': '测试用例级别配置项',
            'host': 'edit.poloyy.com'
        }
    }, function () {
        cy.log(`环境变量有${JSON.stringify(Cypress.env())}`)
        cy.log(`key 环境变量的值是${JSON.stringify(Cypress.env("key"))}`)
        cy.log(`host 环境变量的值是${JSON.stringify(Cypress.env("host"))}`)
    });
})
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201016104323729-495160631.png)  
测试用例级别设置的环境变量优先级更大  
 

#### 另外
更多 test configuration 的使用可以看这篇文章：待更新  
 
> [https://www.cnblogs.com/poloyy/p/13056393.html](https://www.cnblogs.com/poloyy/p/13056393.html)

