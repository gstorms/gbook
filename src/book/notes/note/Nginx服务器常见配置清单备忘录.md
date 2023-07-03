# Nginx服务器常见配置清单备忘录

> 转载：[https://segmentfault.com/a/1190000040717509](https://segmentfault.com/a/1190000040717509)


# 写在前面
Nginx是高性能轻量级WEB服务器的优秀代表，由于其提供HTTP代理和反向代理、负载均衡、缓存等一系列重要特性，从而广泛应用于当今的Web后端服务之中，而且各大互联网公司也都在重度使用，所以作为一个开发者，学会Nginx的使用和配置很有必要。  
在本文中，我们将会从一份示例配置清单开始，来简单梳理一下Nginx服务器的各种常见配置指令的作用和用法。  
话不多说，上菜！
> 本文在GitHub开源仓库「**编程之路**」 [https://github.com/rd2coding/Road2Coding](https://link.segmentfault.com/?url=https%3A%2F%2Fgithub.com%2Frd2coding%2FRoad2Coding) 中已经收录，里面有我整理的**6大编程方向(岗位)的自学路线+知识点大梳理**、**面试考点**、**我的简历**、**几本硬核pdf笔记**，以及**我的程序员人生**，欢迎鉴赏。


---


## Nginx配置文件的整体结构
这里直接画一幅图就一目了然了，几个大的配置模块看得就很清楚。  
![1.png](https://cdn.nlark.com/yuque/0/2021/png/12492743/1632972243175-efebb797-e13b-4b29-9aee-edc7f0ab86d8.png#clientId=ua6657e1b-8c82-4&from=ui&id=u162c0165&margin=%5Bobject%20Object%5D&name=1.png&originHeight=732&originWidth=524&originalType=binary&ratio=1&size=51957&status=done&style=none&taskId=ua1e4f06a-7c0d-422a-84d3-cce4c98fe0f)  
从图中可以看出主要包含以下几大部分内容：

### 1. 全局块
该部分配置主要影响Nginx全局，通常包括下面几个部分：

- 配置运行Nginx服务器用户（组）
- worker进程数
- Nginx进程PID存放路径
- 错误日志的存放路径
- 配置文件的引入
- ...

### 2. events块
该部分配置主要影响Nginx服务器与用户的网络连接，主要包括：

- 设置网络连接的序列化
- 是否允许同时接收多个网络连接
- 事件驱动模型的选择
- 最大连接数的配置
- ...

### 3. http块

- 定义MIMI-Type
- 自定义服务日志
- 是否允许sendfile方式传输文件
- 连接超时时间
- 单连接请求数上限
- ...

### 4. server块

- 配置网络端口监听
- 访问日志和错误页
- 基于名称的虚拟主机配置
- 基于IP的虚拟主机配置
- location块配置
- ...

### 5. location块

- location配置
- 请求根目录配置
- 更改location的URI
- 网站默认首页配置
- ...

---


## 一份配置清单例析
这里给出了一份简要的Nginx配置清单举例：  
![2.png](https://cdn.nlark.com/yuque/0/2021/png/12492743/1632972269465-cc50e03c-90d7-4b83-a872-6ff21bd696ea.png#clientId=ua6657e1b-8c82-4&from=ui&id=u39bd5213&margin=%5Bobject%20Object%5D&name=2.png&originHeight=732&originWidth=567&originalType=binary&ratio=1&size=305267&status=done&style=none&taskId=u5801cd5b-f59c-45a9-9281-bd59da2559a)  
配置代码如下：
```nginx
user  nobody  nobody;
worker_processes  3;
error_log  logs/error.log;
pid  logs/nginx.pid;

events {
    use epoll;
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  logs/access.log  main;
    sendfile  on;
    keepalive_timeout  65;

    server {
        listen       8088;
        server_name  codesheep;
        access_log  /codesheep/webserver/server1/log/access.log;
        error_page  404  /404.html;

        location /server1/location1 {
            root   /codesheep/webserver;
            index  index.server2-location1.htm;
        }

        location /server1/location2 {
        root   /codesheep/webserver;
            index  index.server2-location2.htm;
        }

    }

    server {
        listen       8089;
        server_name  192.168.31.177;
        access_log  /codesheep/webserver/server2/log/access.log;
        error_page  404  /404.html;
        
        location /server2/location1 {
            root   /codesheep/webserver;
            index  index.server2-location1.htm;
        }

        location /srv2/loc2 {
            alias   /codesheep/webserver/server2/location2/;
            index  index.server2-location2.htm;
        }
        
        location = /404.html {
            root /codesheep/webserver/;
            index 404.html;
        }
        
    }

}

```

接下来就对照这份示例配置清单来详细剖析一下配置文件中几个主要指令的含义及用法。

---


# Nginx用户(组)配置
配置项格式：user user [group];

- user：指定可以运行Nginx的用户
- group：指定可以运行Nginx的用户组（可选项）

如果user指令不配置或者配置为 user nobody nobody ，则默认所有用户都可以启动Nginx进程。

---


# worker进程数配置
这是Nginx服务器实现并发处理的关键配置，配置项格式为：  
worker_processes number数;

- number：Nginx进程最多可以产生的worker process数
- 如果设置为auto，则Nginx将进行自动检测

按照上文中的配置清单的实验，我们给worker_processes配置的数目是：3，启动Nginx服务器后，我们可以后台看一下主机上的Nginx进程情况：
```shell
ps -aux | grep nginx
```

很明显，理解 worker_processes 这个指令的含义就很容易了  
![3.png](https://cdn.nlark.com/yuque/0/2021/png/12492743/1632972317075-708933cf-3343-4b51-9c18-f42325c81caf.png#clientId=ua6657e1b-8c82-4&from=ui&id=ua65a380a&margin=%5Bobject%20Object%5D&name=3.png&originHeight=146&originWidth=721&originalType=binary&ratio=1&size=162099&status=done&style=none&taskId=uf5212431-4423-42b8-9ed4-8b53d790f88)

---


# error日志路径配置
配置项格式：error_log file [可选日志级别];

- file：指定日志输出到某个文件file
- 常见的可选日志级别包括：info、debug、warn、error...等

---


# Nginx进程PID存放路径配置
由于Nginx进程是作为系统守护进程在后台运行，所以该选项用于自定义配置PID文件的保存路径。  
配置项格式：pid file;

- file：指定其存放路径+文件名称
- 如果不指定默认置于路径 logs/nginx.pid

---


# 事件驱动模型配置
配置项格式：use model;

- model模型可选择项包括：select、poll、kqueue、epoll、rtsig等......

---


# 最大连接数配置
配置项格式：worker_connections number数;

- number默认值为512，表示允许每一个worker进程可以同时开启的最大连接数。

---


# 配置文件的引入
该配置主要用于引入其他或者第三方的Nginx配置文件到当前的主配置文件中  
配置项格式：include conf_file;

---


# 网络连接的序列化配置
配置项格式：accept_mutex on;

- 该配置默认为on状态，表示会对多个Nginx工作进程接收连接进行序列化，防止多个worker进程对连接的争抢。

说到该指令，首先得阐述一下什么是所谓的“惊群问题”。就Nginx的场景来解释的话大致的意思就是：当一个新网络连接来到时，多个worker进程会被同时唤醒，但仅仅只有一个进程可以真正获得连接并处理之。如果每次唤醒的进程数目过多的话，其实是会影响一部分性能的。  
所以在这里，如果accept_mutex on，那么多个worker将是以串行方式来处理，其中有一个worker会被唤醒；反之若accept_mutex off，那么所有的worker都会被唤醒，不过只有一个worker能获取新连接，其它的worker会重新进入休眠状态。  
这个值的开关与否其实是要和具体场景挂钩的，一定程度上会影响系统的吞吐量。Nginx默认打开了accept_mutex，也算是一种保守的做法。

---


# 多网络连接 接收配置
配置项格式：multi_accept off;

- 该配置默认为off，意指每个worker进程一次只能接收一个新到达的网络连接。如果想让每个Nginx的worker process都能同时接收多个网络连接，则需要开启此配置。

---


# MIME-Type定义
MIME-Type指的是网络资源的媒体类型，也即前端请求的资源类型。  
配置项格式：
```nginx
include mime.types; 
default_type type类型;
```

- include配置用于将mime.types文件包含进来

可以用cat mime.types 来查看mime.types的文件内容，我们发现其就是一个types结构，里面包含了各种浏览器能够识别的MIME类型以及对应类型的文件后缀名，如下所示：  
![4.png](https://cdn.nlark.com/yuque/0/2021/png/12492743/1632972343558-713f8b90-70df-4a29-ac5e-63af5a01751e.png#clientId=ua6657e1b-8c82-4&from=ui&id=uf94efb72&margin=%5Bobject%20Object%5D&name=4.png&originHeight=428&originWidth=732&originalType=binary&ratio=1&size=110610&status=done&style=none&taskId=u36c71958-578b-4b45-907e-927fca48f99)

---


# 访问日志配置
配置项格式：
```nginx
access_log path [format];
```

- path：自定义访问日志的路径+名称
- format：自定义服务日志的格式（可选项）。

---


# 连接超时配置
配置项格式：keepalive_timeout timeout [header_timeout];

- timeout 表示server端对连接的保持时间
- header_timeout表示在应答报文头部的 Keep-Alive 域设置超时时间，可选项。

---


# sendfile配置
配置项格式：
```nginx
sendfile on;
```

- sendfile配置用于开启或关闭使用sendfile()系统调用来传输文件，默认off
- 注：在很多Web Server中，都引入了 sendfile的机制，来实现高性能文件传输。

---


# 网络地址监听配置
配置项格式：

- 第一种：配置监听的IP地址：listen IP[:PORT];
- 第二种：配置监听的端口：listen PORT;

实际举例：
```nginx
listen 192.168.31.177:8080; # 监听特定IP和端口上的连接 
listen 192.168.31.177;      # 监听特定IP上所有端口的连接 
listen 8080;                # 监听特定端口上的所有IP的连接
```

---


# 基于名称或IP的虚拟主机配置
配置项格式：server_name name1 name2 ...

- name可以有多个并列名称，而且此处的name支持正则表达式书写

实际举例：
```nginx
server_name ~^www\.codesheep\d+\.com$;
```
至于基于IP的虚拟主机配置就更简单了：  
配置项格式：server_name IP地址

---


# location配置
配置项格式为：location [ = | ~ | ~* | ^~ ] /uri/ {...}

- 这里的uri可包含正则表达式的模糊匹配。

uri前面的方括号中的内容是可选项，几种常见的情形如下：

- “=”：用于标准uri，进行字符串的精确匹配
- “~”：用于正则uri，表示区分大小写的匹配
- “~*”：用于正则uri，表示不区分大小写的匹配
- “^~”：用于标准uri，^进行前缀匹配，~表示区分大小写

---


# 根目录配置
配置项格式：root path;

- path：表示Nginx接收到请求以后查找资源的根目录路径

当然，也还可以通过alias指令来更改location接收到的URI请求路径，指令为：
```nginx
alias path;  # path为修改后的根路径 
```

---


# 默认首页配置
配置项格式：index index_file ......

- index_file可以包含多个用空格隔开的文件名，首先找到哪个页面，就使用哪个进行响应。

---


# 后记
> 本文在GitHub开源仓库「**编程之路**」 [https://github.com/rd2coding/Road2Coding](https://link.segmentfault.com/?url=https%3A%2F%2Fgithub.com%2Frd2coding%2FRoad2Coding) 中已经收录，里面有我整理的**6大编程方向(岗位)的自学路线+知识点大梳理**、**面试考点**、**我的简历**、**几本硬核pdf笔记**，以及**我的程序员人生**，欢迎鉴赏。

