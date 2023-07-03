
## 前言
- 自动化测试中，**数据驱动**是很重要的一个点
- 实际项目中，肯定会出现这种情况：多条测试用例的执行步骤，断言步骤完全一致，**只有输入和输出数据不一样**
- 这个时候依靠数据驱动（数据参数化）来解决这个问题可以提升我们的测试效率
- 在 Cypress，可以**通过数据来动态生成测试用例**，以达到数据驱动的效果

 

## 动态生成测试用例的步骤

### 前提
这边用的还是 Cypress 提供的被测应用哦

```bash
# 进入被测应用的目录
cd C:\Users\user\Desktop\py\cypress-example-recipes\examples\logging-in__html-web-forms
# 启动本地服务
npm start
```
 
启动成功后，cmd窗口将显示服务器的地址和端口
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200531134112456-898585859.png)
 

### 创建一个数据文件
在 Cypress安装目录/cypress/integration 文件夹下，创建一个子目录 datas ，在该目录下创建一个 testLogin.data.js 文件，代码如下

```javascript
export const testLoginUser = [
    {
        summary: "登录成功",
        username:"jane.lane",
        password:"password123"
    },
    {
        summary: "登录失败",
        username:"iTesting",
        password:"iTesting"
    },
]
```
 

### 创建测试文件
在 integration 文件夹下创建一个 testLogin.js 文件，代码如下  

![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200604113020130-1541177866.png)
 

### 运行测试文件
进入 Cypress 安装文件夹，cmd执行命令

```javascript
yarn cypress:open
```
 
**单击 testLogin.js**，Cypress 会启动 Test  Runner 运行测试，运行成功后，将看到运行结果页面

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200604113150446-1330914688.png)
可以看到第一条用例是测试通过，第二条用例是执行失败了（因为账号密码是错的，失败理所当然）
 

## 总结

- 根据测试数据动态生成测试用例，是一种数据驱动的做法
- 可以提升我们的测试效率，当我们测试数据本身改变时，无须更改测试代码，只要改测试数据文件

 
> [https://www.cnblogs.com/poloyy/p/13042466.html](https://www.cnblogs.com/poloyy/p/13042466.html)

