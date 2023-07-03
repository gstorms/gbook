# 【转】盘点提高国内访问-GitHub-的速度的-9-种方案

- GitHub 镜像访问
- GitHub文件加速
- Github 加速下载
- 加速你的 Github
- 谷歌浏览器 GitHub 加速插件(推荐)
- GitHub raw 加速
- GitHub + Jsdelivr
- 通过 Gitee 中转 fork 仓库下载
- 通过修改 HOSTS 文件进行加速

为什么 github 下载速度这么慢？  
如何提高 github 的下载速度？

## 1. GitHub 镜像访问
这里提供两个最常用的镜像地址：

- [https://github.com.cnpmjs.org](https://github.com.cnpmjs.org)
- [https://hub.fastgit.org](https://hub.fastgit.org)

也就是说上面的镜像就是一个克隆版的 GitHub，你可以访问上面的镜像网站，网站的内容跟 GitHub 是完整同步的镜像，然后在这个网站里面进行下载克隆等操作。

## 2. GitHub 文件加速
利用 Cloudflare Workers 对 github release 、archive 以及项目文件进行加速，部署无需服务器且自带CDN.

- [https://gh.api.99988866.xyz](https://gh.api.99988866.xyz)
- [https://g.ioiox.com](https://g.ioiox.com)

以上网站为演示站点，如无法打开可以查看开源项目：gh-proxy-GitHub(https://hunsh.net/archives/23/) 文件加速自行部署。

## 3. Github 加速下载
只需要复制当前 GitHub 地址粘贴到输入框中就可以代理加速下载！  
地址：[http://toolwa.com/github/](http://toolwa.com/github/)  
![](https://cdn.nlark.com/yuque/0/2022/png/12492743/1644303595537-dff2f1d2-559e-40e6-84c9-a72ec92f5115.png#clientId=u3dad913c-876a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uddf3e6cc&margin=%5Bobject%20Object%5D&originHeight=577&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u33897195-2317-4b23-886e-073655a58b2&title=)

## 4. 加速你的 Github
[https://github.zhlh6.cn](https://github.zhlh6.cn)  
输入 Github 仓库地址，使用生成的地址进行 git ssh 等操作

## 5. 谷歌浏览器 GitHub 加速插件(推荐)
![](https://cdn.nlark.com/yuque/0/2022/png/12492743/1644303596112-78392d71-a825-4358-9f5d-9dd3f0f9f4f8.png#clientId=u3dad913c-876a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uc7cfa38f&margin=%5Bobject%20Object%5D&originHeight=266&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uefc71501-b1c5-4fc2-80fd-fced94e43c8&title=)  
如果小伙伴在线安装不便，可以在公众号后台回复 github加速。  
![](https://cdn.nlark.com/yuque/0/2022/png/12492743/1644303595544-d8d88b8d-8654-462f-a68a-ca016ce40292.png#clientId=u3dad913c-876a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u198677f9&margin=%5Bobject%20Object%5D&originHeight=443&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u625c3e11-72e4-491f-8e92-799b15df25d&title=)

## 6. GitHub raw 加速
GitHub raw 域名并非 github.com 而是 raw.githubusercontent.com，上方的 GitHub 加速如果不能加速这个域名，那么可以使用 Static CDN 提供的反代服务。  
将 raw.githubusercontent.com 替换为 raw.staticdn.net 即可加速。

## 7. GitHub + Jsdelivr
jsdelivr 唯一美中不足的就是它不能获取 exe 文件以及 Release 处附加的 exe 和 dmg 文件。  
也就是说如果 exe 文件是附加在 Release 处但是没有在 code 里面的话是无法获取的。所以只能当作静态文件 cdn 用途，而不能作为 Release 加速下载的用途。

## 8. 通过 Gitee 中转 fork 仓库下载
网上有很多相关的教程，这里简要的说明下操作。  
访问 gitee 网站：https://gitee.com/ 并登录，在顶部选择“从 GitHub/GitLab 导入仓库” 如下：  
![](https://cdn.nlark.com/yuque/0/2022/png/12492743/1644303595638-8bcaf41e-7a21-45e4-a59a-4cf3c74ba760.png#clientId=u3dad913c-876a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uf0b12f11&margin=%5Bobject%20Object%5D&originHeight=290&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u99273b48-3ceb-4039-a3c8-f98002c7e65&title=)  
在导入页面中粘贴你的Github仓库地址，点击导入即可：  
![](https://cdn.nlark.com/yuque/0/2022/png/12492743/1644303595679-49fa704e-e878-49da-807e-47c941d34263.png#clientId=u3dad913c-876a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ubf6e27da&margin=%5Bobject%20Object%5D&originHeight=802&originWidth=1028&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u09a1807d-e3fa-40dc-be60-450b382e4ee&title=)  
等待导入操作完成，然后在导入的仓库中下载浏览对应的该 GitHub 仓库代码，你也可以点击仓库顶部的“刷新”按钮进行 Github 代码仓库的同步。  
![](https://cdn.nlark.com/yuque/0/2022/png/12492743/1644303596089-263f81aa-5b72-42df-b14e-a557d4f4c715.png#clientId=u3dad913c-876a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u4d8f036e&margin=%5Bobject%20Object%5D&originHeight=449&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ucb175795-93bf-4537-bfd2-3b210cee045&title=)

## 9. 通过修改 HOSTS 文件进行加速
手动把cdn和ip地址绑定。  
第一步：获取 github 的 global.ssl.fastly 地址访问：  
[http://github.global.ssl.fastly.net.ipaddress.com/#ipinfo](http://github.global.ssl.fastly.net.ipaddress.com/#ipinfo) 获取cdn和ip域名：  
![](https://cdn.nlark.com/yuque/0/2022/png/12492743/1644303596382-f8bd154a-6a73-45fa-b025-b9a1453ba399.png#clientId=u3dad913c-876a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u82c155b7&margin=%5Bobject%20Object%5D&originHeight=335&originWidth=640&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u03aa5b7a-690b-4164-a66f-4e6f77be2d5&title=)  
得到：199.232.69.194 https://github.global.ssl.fastly.net  
第二步：获取github.com地址  
访问：https://github.com.ipaddress.com/#ipinfo 获取cdn和ip：  
![](https://cdn.nlark.com/yuque/0/2022/png/12492743/1644303596392-d1638b63-3692-4b43-853c-ff855b6ccc49.png#clientId=u3dad913c-876a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ud938e084&margin=%5Bobject%20Object%5D&originHeight=397&originWidth=640&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u1142d490-266d-4fd4-aeb5-bdbdbe032dd&title=)  
得到：140.82.114.4 http://github.com  
第三步：修改 host 文件映射上面查找到的 IP  
windows系统：  
1、修改C:WindowsSystem32driversetchosts文件的权限，指定可写入：右击->hosts->属性->安全->编辑->点击Users->在Users的权限“写入”后面打勾。如下：  
![](https://cdn.nlark.com/yuque/0/2022/png/12492743/1644303596496-60facc16-5c43-456d-8241-637b00d50708.png#clientId=u3dad913c-876a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ua5424bc1&margin=%5Bobject%20Object%5D&originHeight=671&originWidth=528&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&taskId=u00e8fdde-b621-4555-bab9-2a7d664e613&title=)  
然后点击确定。  
2、右击->hosts->打开方式->选定记事本（或者你喜欢的编辑器）->在末尾处添加以下内容：  
199.232.69.194 github.global.ssl.fastly.net

140.82.114.4 github.com

> 转自：[https://baijiahao.baidu.com/s?id=1716908235884183504](https://baijiahao.baidu.com/s?id=1716908235884183504)

