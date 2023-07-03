# npm全局安装

[https://blog.csdn.net/qq_41305315/article/details/90732384](https://blog.csdn.net/qq_41305315/article/details/90732384)  
今天我们来谈谈关于npm的全局安装的问题

#### 1. 全局安装命令
```
npm i webpack -g
```

#### 2. 全局安装的默认地址
默认安装地址：C:/Users/xxx/AppData/Roaming/npm

#### 3. 安装了哪些文件
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1625799164006-0fbe27ab-93ee-43df-a470-28dcd9677dbb.png#align=left&display=inline&height=110&margin=%5Bobject%20Object%5D&originHeight=110&originWidth=680&size=0&status=done&style=none&width=680)

#### 4. 有什么用
可以在命令行中直接执行webpack命令  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1625799175393-75bd5a6e-50a3-4295-8146-19da288ce88d.png#align=left&display=inline&height=125&margin=%5Bobject%20Object%5D&originHeight=125&originWidth=520&size=0&status=done&style=none&width=520)

#### 5. 为什么有用
想要在命令行中执行命令有两种方式

1. 设置环境变量（一般我们都是用设置环境变量的方式）
1. 修改注册表

其实在nodejs安装的时候，安装的过程中它会默默地在用户变量的path中增加一个配置路径  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1625799186617-4197348d-fa56-4764-b584-5c64b0e9208f.png#align=left&display=inline&height=145&margin=%5Bobject%20Object%5D&originHeight=145&originWidth=355&size=0&status=done&style=none&width=355)  
在命令行中执行命令相当于执行对应路径下面的3中类型的文件

1. .exe 文件
1. .bat 文件
1. .cmd 文件

一般安装npm全局安装一些功能的时候，会生成.cmd文件

#### 6. 如何改变npm全局安装路径

##### 1. 使用命令的方式
```
npm config set prefix  “路径”
```

##### 2. 修改某个文件
在node安装的文件夹中有一个文件夹
```
node_modules\npm
```
这个文件夹下面有一个文件
```
npmrc
```
这个文件就是记录npm全局安装的路径  
修改这个文件就可以更改npm的全局安装路径  
注意点： npmrc中设置的路径必须和环境变量中的路径保持一致

#### 7. npm run-script
我们常常会使用npm run-script的方式来触发执行命令  
配置文件如下  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1625799198328-b993fa65-5de0-4ac1-ae7d-6a7d3168ab14.png#align=left&display=inline&height=78&margin=%5Bobject%20Object%5D&originHeight=78&originWidth=662&size=0&status=done&style=none&width=662)  
执行命令
```
npm run start
```
就会执行webpack-dev-server --inline --hot --quiet命令  
既然执行的是webpack-dev-server命令，那么是不是意味着我们必须在全局安装webpack-dev-server，否则如何生效的呢？  
也许很多人都没有意识到这个问题，因为一般我们在全局已经安装过了，所以不会发现任何问题。我专门删掉了全局的webpack-dev-server，然后执行这个命令，发现依然是可用的。那么是为什么呢？
npm scripts 不是简简单单地执行 shell 语句而已，在执行之前它会将 node_modules/.bin/ 加入到环境变量 PATH 中，所以在 npm run-script 中可以直接使用那些存在于 node_modules/.bin/ 中的可执行文件。
我们来看一下我们本地项目中的node_modules/.bin/文件夹  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1625799207195-32f083f8-57e3-4cfa-b62c-4d3033831207.png#align=left&display=inline&height=256&margin=%5Bobject%20Object%5D&originHeight=256&originWidth=348&size=0&status=done&style=none&width=348)  
正是由于npm背后的这一系列的操作才能保证我们的命令能够正确执行，当npm scripts执行结束之后，会将路径从环境变量PATH中移除，所以我们执行完命令去看Path属性不会存在node_modules/.bin/
