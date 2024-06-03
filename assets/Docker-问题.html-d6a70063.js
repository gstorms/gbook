import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-cfbf85c1.js";const t={},l=e(`<h1 id="docker-问题" tabindex="-1"><a class="header-anchor" href="#docker-问题" aria-hidden="true">#</a> Docker-问题</h1><h3 id="_1-docker创建node环境-angular" tabindex="-1"><a class="header-anchor" href="#_1-docker创建node环境-angular" aria-hidden="true">#</a> 1.docker创建node环境（angular）</h3><p>Dockerfile：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM node:12-alpine

RUN npm config set registry https://registry.npm.taobao.org --global\\
    npm config set disturl https://npm.taobao.org/dist --global
RUN npm install -g cnpm @angular/cli
EXPOSE 4200 49153
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">ntest</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> node12
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> ntest
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 4200<span class="token punctuation">:</span><span class="token number">4200</span>
      <span class="token punctuation">-</span> 49153<span class="token punctuation">:</span><span class="token number">49153</span>
    <span class="token key atrule">working_dir</span><span class="token punctuation">:</span> /ntest
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ts
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> node_modules12<span class="token punctuation">:</span>/ntest/node_modules
      <span class="token punctuation">-</span> E<span class="token punctuation">:</span>/projects/ntest<span class="token punctuation">:</span>/ntest
    <span class="token comment"># tty: true</span>
    <span class="token comment"># stdin_open: true</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token string">&#39;npm run start&#39;</span>
    <span class="token comment"># restart: unless-stopped</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">node_modules12</span><span class="token punctuation">:</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">ts</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-docker运行angular应用-在本机不能访问" tabindex="-1"><a class="header-anchor" href="#_2-docker运行angular应用-在本机不能访问" aria-hidden="true">#</a> 2.docker运行angular应用，在本机不能访问</h3><p>如果仅使用<code>ng serve</code>在容器内运行angular app，则将不允许其他主机访问它.<br> 相反，应该使用<code>ng serve --host 0.0.0.0 --port 4200</code>运行它</p><h3 id="_3-docker容器不会重新加载angular应用程序-热更新不起作用" tabindex="-1"><a class="header-anchor" href="#_3-docker容器不会重新加载angular应用程序-热更新不起作用" aria-hidden="true">#</a> 3.Docker容器不会重新加载Angular应用程序(热更新不起作用）</h3><ol><li>inotify-&gt;只需package.json在&quot;scripts&quot;以下行中进行编辑：&quot;start&quot;: &quot;ng serve --host 0.0.0.0 --poll&quot;，仅Windows主机需要，</li></ol><p>--poll 200每200毫秒积极寻找文件更改</p><ol start="2"><li>热重载- &gt;添加expose 49153在Dockerfile和端口- &#39;49153:49153&#39;在docker-compose.yml像@kstromeiraos提及。</li></ol><h3 id="_4-docker启动mysql容器-挂载配置文件出错" tabindex="-1"><a class="header-anchor" href="#_4-docker启动mysql容器-挂载配置文件出错" aria-hidden="true">#</a> 4.Docker启动mysql容器，挂载配置文件出错</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql: <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> World-writable config <span class="token function">file</span> <span class="token string">&#39;/etc/mysql/my.cnf&#39;</span> is ignored.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是因为mysql考虑安全原因，对权限是<code>777</code>的配置文件自动忽略</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">...</span>
<span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>5.7.25
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3306<span class="token punctuation">:</span><span class="token number">3306</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=<span class="token important">****</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> E<span class="token punctuation">:</span>/projects/my.cnf<span class="token punctuation">:</span>/etc/mysql/my.cnf<span class="token punctuation">:</span>ro <span class="token comment">#在最后加个“ro”只读</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/</p>`,16),i=[l];function c(o,p){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","Docker-问题.html.vue"]]);export{d as default};
