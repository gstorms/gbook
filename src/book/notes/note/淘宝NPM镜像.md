# 淘宝NPM镜像

> 原文：[https://developer.aliyun.com/mirror/NPM?from=tnpm](https://developer.aliyun.com/mirror/NPM?from=tnpm)



## 这是一个完整 `npmjs.org` 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

- 当前 [registry.npm.taobao.org](https://registry.npm.taobao.org/) 是从 [r.cnpmjs.org](https://r.cnpmjs.org/) 进行全量同步的.
- 当前 [npm.taobao.org](https://developer.aliyun.com/) 运行版本是: [cnpmjs.org](http://cnpmjs.org/)@3.0.0-rc.40
- 本系统运行在 [Node.js](https://nodejs.org/)@v12.8.1 上.
- 开源镜像: [http://npm.taobao.org/mirrors](http://npm.taobao.org/mirrors)
- Node.js 镜像: [http://npm.taobao.org/mirrors/node](http://npm.taobao.org/mirrors/node)
- alinode 镜像: [http://npm.taobao.org/mirrors/alinode](http://npm.taobao.org/mirrors/alinode)
- phantomjs 镜像: [http://npm.taobao.org/mirrors/phantomjs](http://npm.taobao.org/mirrors/phantomjs)
- ChromeDriver 镜像: [http://npm.taobao.org/mirrors/chromedriver](http://npm.taobao.org/mirrors/chromedriver)
- OperaDriver 镜像: [http://npm.taobao.org/mirrors/operadriver](http://npm.taobao.org/mirrors/operadriver)
- Selenium 镜像: [http://npm.taobao.org/mirrors/selenium](http://npm.taobao.org/mirrors/selenium)
- Node.js 文档镜像: [http://npm.taobao.org/mirrors/node/latest/docs/api/index.html](http://npm.taobao.org/mirrors/node/latest/docs/api/index.html)
- NPM 镜像: [https://npm.taobao.org/mirrors/npm/](https://npm.taobao.org/mirrors/npm/)
- electron 镜像: [https://npm.taobao.org/mirrors/electron/](https://npm.taobao.org/mirrors/electron/)
- node-inspector 镜像: [https://npm.taobao.org/mirrors/node-inspector/](https://npm.taobao.org/mirrors/node-inspector/)
| 1558164 | 个模块 | 17840232 | 个模块版本 | 318 | 次删除 |
| --- | --- | --- | --- | --- | --- |
| 4440336 | 次本日下载 | 146788394 | 次本周下载 | 1012601097 | 次本月下载 |
| 75117114 | 次昨日下载 | 240320236 | 次上周下载 | 1682194781 | 次上月下载 |


## Version Badge
Default style is `flat-square`.  
Badge URL: `[https://npm.taobao.org/badge/v/cnpmjs.org.svg](https://npm.taobao.org/badge/v/cnpmjs.org.svg)`![](https://cdn.nlark.com/yuque/0/2021/svg/12492743/1614160295394-ac733b1b-dd0b-4bc9-b194-b6e303398189.svg#height=20&id=rByL0&originHeight=20&originWidth=99&originalType=binary&ratio=1&size=0&status=done&style=none&width=99)

- `<0.1.0 & >=0.0.0`: ![](https://img.shields.io/badge/cnpm-0.0.1-red.svg?style=flat-square#height=20&id=pJi1P&originHeight=20&originWidth=80&originalType=binary&ratio=1&status=done&style=none&width=80)
- `<1.0.0 & >=0.1.0`: ![](https://img.shields.io/badge/cnpm-0.1.0-green.svg?style=flat-square#height=20&id=JyCI5&originHeight=20&originWidth=80&originalType=binary&ratio=1&status=done&style=none&width=80)
- `>=1.0.0`: ![](https://img.shields.io/badge/cnpm-1.0.0-blue.svg?style=flat-square#height=20&id=uBCEJ&originHeight=20&originWidth=80&originalType=binary&ratio=1&status=done&style=none&width=80)

## 使用说明
你可以使用我们定制的 [cnpm](https://github.com/cnpm/cnpm) (gzip 压缩支持) 命令行工具代替默认的 `npm`:
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
或者你直接通过添加 `npm` 参数 `alias` 一个新命令:
```
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"
# Or alias it in .bashrc or .zshrc
$ echo '\n#alias for cnpm\nalias cnpm="npm --registry=https://registry.npm.taobao.org \
  --cache=$HOME/.npm/.cache/cnpm \
  --disturl=https://npm.taobao.org/dist \
  --userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc
```

### 安装模块
从 [registry.npm.taobao.org](https://registry.npm.taobao.org/) 安装所有模块. 当安装的时候发现安装的模块还没有同步过来, 淘宝 NPM 会自动在后台进行同步, 并且会让你从官方 NPM [registry.npmjs.org](https://registry.npmjs.org/) 进行安装. 下次你再安装这个模块的时候, 就会直接从 淘宝 NPM 安装了.
```
$ cnpm install [name]
```

### 同步模块
直接通过 `sync` 命令马上同步一个模块, 只有 `cnpm` 命令行才有此功能:
```
$ cnpm sync connect
```
当然, 你可以直接通过 web 方式来同步: [/sync/connect](https://developer.aliyun.com/sync/connect)
```
$ open https://npm.taobao.org/sync/connect
```

### 其它命令
支持 `npm` 除了 `publish` 之外的所有命令, 如:
```
$ cnpm info connect
```
