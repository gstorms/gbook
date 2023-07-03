# 修改Yarn的全局安装和缓存位置

在CMD命令行中执行


### 1.改变 yarn 全局安装位置
```bash
yarn config  set global-folder "你的磁盘路径"
```

然后你会在你的用户目录找到 `.yarnrc` 的文件，打开它，找到 `global-folder` ，改为 `--global-folder` 

##### 这里是我的路径
```bash
yarn config  set global-folder "D:\Software\yarn\global"
```


### 2. 改变 yarn 缓存位置
```bash
yarn config set cache-folder "你的磁盘路径"
```

#### 这里是我的路径
```bash
yarn config set cache-folder "D:\Software\yarn\cache"
```
在我们使用 全局安装 包的时候，会在 “D:\Software\yarn\global” 下 生成 node_modules\.bin 目录

我们需要将 D:\Software\yarn\global\node_modules\.bin 整个目录 添加到系统环境变量中去，否则通过yarn 添加的全局包 在cmd 中是找不到的。


### 检查当前yarn 的 bin的 位置
```bash
yarn global bin
```

### 检查当前 yarn 的 全局安装位置
```bash
yarn global dir
```

