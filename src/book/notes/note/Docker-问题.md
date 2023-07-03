# Docker-问题


### 1.docker创建node环境（angular）
Dockerfile：

```
FROM node:12-alpine

RUN npm config set registry https://registry.npm.taobao.org --global\
    npm config set disturl https://npm.taobao.org/dist --global
RUN npm install -g cnpm @angular/cli
EXPOSE 4200 49153
```

```yaml
version: '3'

services:
  ntest:
    image: node12
    container_name: ntest
    ports:
      - 4200:4200
      - 49153:49153
    working_dir: /ntest
    networks:
      - ts
    volumes:
      - node_modules12:/ntest/node_modules
      - E:/projects/ntest:/ntest
    # tty: true
    # stdin_open: true
    command: 'npm run start'
    # restart: unless-stopped

volumes:
  node_modules12:

networks:
  ts:
```

### 2.docker运行angular应用，在本机不能访问
如果仅使用`ng serve`在容器内运行angular app，则将不允许其他主机访问它.  
相反，应该使用`ng serve --host 0.0.0.0 --port 4200`运行它

### 3.Docker容器不会重新加载Angular应用程序(热更新不起作用）

   1. inotify->只需package.json在"scripts"以下行中进行编辑："start": "ng serve --host 0.0.0.0 --poll"，仅Windows主机需要，

--poll 200每200毫秒积极寻找文件更改

   2. 热重载- >添加expose 49153在Dockerfile和端口- '49153:49153'在docker-compose.yml像@kstromeiraos提及。

### 4.Docker启动mysql容器，挂载配置文件出错
```bash
mysql: [Warning] World-writable config file '/etc/mysql/my.cnf' is ignored.
```
这是因为mysql考虑安全原因，对权限是`777`的配置文件自动忽略
```yaml
...
mysql:
    image: mysql:5.7.25
    ports:
      - 3306:3306
    environment:
      - MYSQL_ROOT_PASSWORD=****
    volumes:
      - E:/projects/my.cnf:/etc/mysql/my.cnf:ro #在最后加个“ro”只读
```
/
