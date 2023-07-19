import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-731a6e06.js";const t={},i=e(`<h1 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h1><h3 id="创建db" tabindex="-1"><a class="header-anchor" href="#创建db" aria-hidden="true">#</a> 创建DB</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>5.7.26
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> db_mysql
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3306<span class="token punctuation">:</span><span class="token number">3306</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=root
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> E<span class="token punctuation">:</span>/projects/db/mysql<span class="token punctuation">:</span>/var/lib/mysql
      <span class="token punctuation">-</span> E<span class="token punctuation">:</span>/projects/db/my.cnf<span class="token punctuation">:</span>/etc/mysql/my.cnf<span class="token punctuation">:</span>ro
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ws

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">ws</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gogs-开源代码托管" tabindex="-1"><a class="header-anchor" href="#gogs-开源代码托管" aria-hidden="true">#</a> gogs(开源代码托管）</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">gogs</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> gogs/gogs
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gogs
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 10022<span class="token punctuation">:</span><span class="token number">22</span>
      <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span><span class="token number">3000</span>
    <span class="token comment"># working_dir: /gogs</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db_ws
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./gogs/data<span class="token punctuation">:</span>/data
    <span class="token comment"># tty: true</span>
    <span class="token comment"># stdin_open: true</span>
    <span class="token comment"># command: &#39;ionic serve --poll&#39;</span>
    <span class="token comment"># restart: unless-stopped</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">db_ws</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node12a8" tabindex="-1"><a class="header-anchor" href="#node12a8" aria-hidden="true">#</a> node12a8</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM node:12-alpine

RUN npm config set registry https://registry.npm.taobao.org --global\\
    npm config set disturl https://npm.taobao.org/dist --global
RUN npm install -g cnpm @angular/cli@8.x ionic@4.x
# RUN npm install -g cnpm
EXPOSE 4200 8100 49153
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM node:14-alpine

RUN npm config set registry https://registry.npm.taobao.org --global\\
    npm config set disturl https://npm.taobao.org/dist --global
RUN npm install -g cnpm @angular/cli
EXPOSE 4200 49153
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nt" tabindex="-1"><a class="header-anchor" href="#nt" aria-hidden="true">#</a> nt</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">xxxx</span><span class="token punctuation">:</span>
  <span class="token comment"># v12.22.6 </span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> gstorms/node<span class="token punctuation">:</span>12<span class="token punctuation">-</span>a8
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> xxxx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8200<span class="token punctuation">:</span><span class="token number">8100</span>
      <span class="token comment"># - 49153:49153</span>
    <span class="token key atrule">working_dir</span><span class="token punctuation">:</span> /xxxx
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ntt
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> vxxxx<span class="token punctuation">:</span>/xxxx/node_modules
      <span class="token punctuation">-</span> E<span class="token punctuation">:</span>/test/xxxx<span class="token punctuation">:</span>/xxxx
    <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># command: &#39;ionic serve --poll&#39;</span>
    <span class="token comment"># restart: unless-stopped</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">vxxxx</span><span class="token punctuation">:</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">ntt</span><span class="token punctuation">:</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[i];function p(c,o){return s(),a("div",null,l)}const r=n(t,[["render",p],["__file","Dockerfile.html.vue"]]);export{r as default};
