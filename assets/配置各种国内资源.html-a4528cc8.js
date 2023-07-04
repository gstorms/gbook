import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as t,a as n,b as e,d as s,f as l}from"./app-d0fb0332.js";const c={},o=n("h1",{id:"配置各种国内资源",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置各种国内资源","aria-hidden":"true"},"#"),e(" 配置各种国内资源")],-1),u=n("h1",{id:"配置conda、pip国内资源",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置conda、pip国内资源","aria-hidden":"true"},"#"),e(" 配置conda、pip国内资源")],-1),p={href:"http://mirrors.aliyun.com/pypi/simple/",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),h={href:"http://pypi.douban.com/simple/",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),b={href:"https://pypi.tuna.tsinghua.edu.cn/simple/",target:"_blank",rel:"noopener noreferrer"},g=n("br",null,null,-1),_={href:"https://pypi.mirrors.ustc.edu.cn/simple/",target:"_blank",rel:"noopener noreferrer"},x=l(`<h3 id="conda-国内镜像源设置" tabindex="-1"><a class="header-anchor" href="#conda-国内镜像源设置" aria-hidden="true">#</a> conda 国内镜像源设置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#  设置清华大学镜像源

conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/

conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/

conda config --set show_channel_urls yes

# 设置SSL验证
conda config --set ssl_verify  yes

# 查看镜像源
conda config --show-sources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pip国内镜像源设置" tabindex="-1"><a class="header-anchor" href="#pip国内镜像源设置" aria-hidden="true">#</a> pip国内镜像源设置</h3><hr><h4 id="国内热门镜像源" tabindex="-1"><a class="header-anchor" href="#国内热门镜像源" aria-hidden="true">#</a> 国内热门镜像源</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>新版ubuntu要求使用https源，要注意。

清华：https://pypi.tuna.tsinghua.edu.cn/simple

阿里云：http://mirrors.aliyun.com/pypi/simple/

中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/

华中理工大学：http://pypi.hustunique.com/

山东理工大学：http://pypi.sdutlinux.org/ 

豆瓣：http://pypi.douban.com/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="linux-环境" tabindex="-1"><a class="header-anchor" href="#linux-环境" aria-hidden="true">#</a> Linux 环境</h4><p>修改 <code>~/.pip/pip.conf </code> 如果没有该文件，则新建一个对应的配置文件，添加如下配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]

trusted-host=mirrors.aliyun.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="windows-环境" tabindex="-1"><a class="header-anchor" href="#windows-环境" aria-hidden="true">#</a> Windows 环境</h4><p>windows下，直接在user目录中创建一个pip目录，如：<code>C:\\Users\\xx\\pip</code>，新建文件<code>pip.ini</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]

trusted-host=mirrors.aliyun.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="配置npm淘宝镜像" tabindex="-1"><a class="header-anchor" href="#配置npm淘宝镜像" aria-hidden="true">#</a> 配置<strong>npm淘宝镜像</strong></h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后正常使用<code>npm</code>命令<code>npm install</code>就行,速度飞起。</p>`,15);function f(y,k){const i=d("ExternalLinkIcon");return r(),t("div",null,[o,u,n("p",null,[e("阿里云："),n("a",p,[e("http://mirrors.aliyun.com/pypi/simple/"),s(i)]),e("  "),m,e(" 豆瓣："),n("a",h,[e("http://pypi.douban.com/simple/"),s(i)]),e("  "),v,e(" 清华大学："),n("a",b,[e("https://pypi.tuna.tsinghua.edu.cn/simple/"),s(i)]),e("  "),g,e(" 中国科学技术大学："),n("a",_,[e("https://pypi.mirrors.ustc.edu.cn/simple/"),s(i)])]),x])}const N=a(c,[["render",f],["__file","配置各种国内资源.html.vue"]]);export{N as default};
