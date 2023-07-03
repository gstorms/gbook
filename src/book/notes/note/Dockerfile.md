# Dockerfile


### 创建DB
```yaml
version: "3"

services:
  db:
    image: mysql:5.7.26
    container_name: db_mysql
    ports:
      - 3306:3306
    environment:
      - MYSQL_ROOT_PASSWORD=root
    volumes:
      - E:/projects/db/mysql:/var/lib/mysql
      - E:/projects/db/my.cnf:/etc/mysql/my.cnf:ro
    restart: unless-stopped
    networks:
      - ws

networks:
  ws:
    driver: bridge

```

### gogs(开源代码托管）
```yaml
version: '3'

services:
  gogs:
    image: gogs/gogs
    container_name: gogs
    ports:
      - 10022:22
      - 3000:3000
    # working_dir: /gogs
    networks:
      - db_ws
    volumes:
      - ./gogs/data:/data
    # tty: true
    # stdin_open: true
    # command: 'ionic serve --poll'
    # restart: unless-stopped
    depends_on:
      - db

networks:
  db_ws:
    external: true
```

### node12a8
```
FROM node:12-alpine

RUN npm config set registry https://registry.npm.taobao.org --global\
    npm config set disturl https://npm.taobao.org/dist --global
RUN npm install -g cnpm @angular/cli@8.x ionic@4.x
# RUN npm install -g cnpm
EXPOSE 4200 8100 49153
```

```
FROM node:14-alpine

RUN npm config set registry https://registry.npm.taobao.org --global\
    npm config set disturl https://npm.taobao.org/dist --global
RUN npm install -g cnpm @angular/cli
EXPOSE 4200 49153
```

### nt
```yaml
version: '3'

services:
  xxxx:
  # v12.22.6 
    image: gstorms/node:12-a8
    container_name: xxxx
    ports:
      - 8200:8100
      # - 49153:49153
    working_dir: /xxxx
    networks:
      - ntt
    volumes:
      - vxxxx:/xxxx/node_modules
      - E:/test/xxxx:/xxxx
    tty: true
    stdin_open: true
    # command: 'ionic serve --poll'
    # restart: unless-stopped

volumes:
  vxxxx:

networks:
  ntt:

```
