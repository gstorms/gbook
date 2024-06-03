import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as a}from"./app-cfbf85c1.js";const d={},s=a(`<h1 id="自己的镜像" tabindex="-1"><a class="header-anchor" href="#自己的镜像" aria-hidden="true">#</a> 自己的镜像</h1><h3 id="ubuntu-base" tabindex="-1"><a class="header-anchor" href="#ubuntu-base" aria-hidden="true">#</a> ubuntu:base</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM ubuntu:20.04

# update apt-get
RUN apt-get update &amp;&amp; \\
    yes|apt-get upgrade &amp;&amp; \\
    apt-get install -y wget

CMD [&quot;/bin/bash&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node-base" tabindex="-1"><a class="header-anchor" href="#node-base" aria-hidden="true">#</a> node:base</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM ubuntu:base

# Install Redis
# RUN apt-get -y -qq install python redis-server

# Install Node
RUN   \\
  cd /opt &amp;&amp; \\
  wget https://nodejs.org/dist/v16.13.2/node-v16.13.2.tar.gz &amp;&amp; \\
  tar -xzf node-v16.13.2.tar.gz &amp;&amp; \\
  mv node-v16.13.2 node &amp;&amp; \\
  cd /usr/local/bin &amp;&amp; \\
  ln -s /opt/node/bin/* . &amp;&amp; \\
  rm -f /opt/node-v16.13.2.tar.gz

# Set the working directory
WORKDIR   /src
 
CMD [&quot;/bin/bash&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[s];function t(r,v){return n(),i("div",null,l)}const m=e(d,[["render",t],["__file","自己的镜像.html.vue"]]);export{m as default};
