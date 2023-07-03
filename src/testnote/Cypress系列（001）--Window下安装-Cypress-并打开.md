**如果想从头学起Cypress，可以看下面的系列文章哦**  
[https://www.cnblogs.com/poloyy/category/1768839.html](https://www.cnblogs.com/poloyy/category/1768839.html)  
 

## 系统要求
Cypress 是一个被安装在你电脑上的桌面应用，你的操作系统需要满足如下条件才能正常安装

- Mac OS 10.9+（仅提供64位二进制文件）
- Linux Ubuntu 12.04+, Fedora 21, Debian 8的64位二进制文件
- Windows 7+

 

## 下载
Cypress 当前支持如下版本的下载：

1. Windows 64
1. Windows 32，从3.3.0版本开始支持
1. Linux 64
1. macOS 64

 

## 直接下载安装

#### 可以直接访问下面的地址下载
[https://download.cypress.io/](https://download.cypress.io/)  
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200519203644280-1422885624.png)  
该网站会根据你的操作系统，自动下载最合适的版本；下载完后，解压文件，双击就可以使用 Cypress 了！  
 

#### 选择版本下载
访问：[https://download.cypress.io/desktop.json](https://download.cypress.io/desktop.json)，获取可下载的版本列表  
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200519203650821-569627991.png)

#### 直接下载的问题
Cypress 无法运行 DashBoard 服务，直接下载仅用作快速尝试 Cypress；**所以，不推荐此方式！虽然很快捷！**  
 

## 推荐安装方式一：npm

#### 安装 Node.js
[http://nodejs.cn/download/](http://nodejs.cn/download/)，下载msi后直接安装就可以使用了  
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200519204237106-1951140473.png)

#### 验证 Node.js 和 npm
**备注：**npm已经集成在新版的Node.js中了  
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200519204334409-1784443481.png)

#### 生成 package.json 文件

1. 首先进入你要安装的Cypress的目录，然后运行 npm init 命令
1. 一路回车就可以了，最后输入yes
1. 然后会在你的 Cypress 文件夹下生成  package.json  文件
1. 这个文件也可以自己创建，通常存在于项目的根目录下，**它定义了这个项目所需要的各种模块、配置信息（如：名称、版本、依赖、脚本等）**

![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200519204615937-1050570402.png)

#### 安装 Cypress
执行以下命令即可

```javascript
npm install cypress --save-dev
```

#### 推荐npm安装方式的原因

- npm（Node Package Manager），是基于Node.js的包管理工具**，npm 使 JavaScript 代码的分享和重用更加容易**
- 可以和其它任何依赖项一样控制 Cypress 的版本
- npm **简化了**在持续集成中运行 Cypress 的过程

 

## 推荐安装方式二：yarn

#### 安装 yarn
[https://classic.yarnpkg.com/zh-Hans/docs/install](https://classic.yarnpkg.com/zh-Hans/docs/install)，下载安装即可  
 

#### 验证 yarn 安装情况
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200520093808122-244665034.png)

#### 进入要安装 Cypress 的文件夹，输入下面命令安装 Cypress

```javascript
yarn add cypress --dev
```
 

## 打开 Cypress
安装好 Cypress 后，可以通过以下方式之一打开 Cypress

#### 方式一
进入 Cypress安装目录\node_modules\.bin 目录，输入

```javascript
cypress open
```
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200526131421440-1311639469.png)  
**备注：**正常应该在 Cypress 安装目录下输入即可，即 MyCypress 目录，到后面 .bin 目录下的 cypress 安装目录是要删除的  
 

#### 方式二
进入 Cypress 安装目录，输入

```javascript
yarn run cypress open
```
 

#### 方式三
管理员模式打开 cmd 窗口

```javascript
npx cypress open
```
 

#### Cypress 运行成功并打开的界面，如下
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200526131404302-829244004.png)  
 

## Cypress 设置
Cypress 允许配置  package.json 文件的 scripts 字段，来定义打开方式  
首先，进入 Cypress安装目录 ，打开 package.json  
在  scripts 下，添加 "cypress:open":"cypress open"   
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200526131801222-1165650384.png)  
后面就可以在命令行通过下面命令打开Cypress了

yarn cypress:open  
![](https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200526131844779-370292366.png)  
 
> [https://www.cnblogs.com/poloyy/p/12919454.html](https://www.cnblogs.com/poloyy/p/12919454.html)

