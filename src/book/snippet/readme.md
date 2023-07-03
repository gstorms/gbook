# 代码片段

[python](./python.md)

[JS](./JS.md)

[FastAPI](./FastAPI.md)

[vue](./vue.md)

### pip升级

```bash
python.exe -m pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### git pull 强制覆盖本地代码

```bash
$ git fetch --all
$ git reset --hard origin/master
$ git pull

# 使用master分支覆盖本地。使用其它分支，则更改第二条命令的参数。
```

### Git常用命令

![](/image/common_commands.webp)

### 根据端口查找占用的进程（windows）

```bash
netstat -nao | findstr port #列出所有占用该端口的进程，找到pid
tasklist /V | findstr pid #根据pid找到占用的进程名字

```

### poetry生成requirements

```bash
poetry export --output requirements.txt
```

### Ubuntu安装zbar

```bash
sudo apt-get install libzbar-dev
yum install zbar-devel #？

```

### git操作设置不用每次都输入密码

```bash
git config --global credential.helper store
```

### waitress部署fastapi

```bash
部署fastapi
```
