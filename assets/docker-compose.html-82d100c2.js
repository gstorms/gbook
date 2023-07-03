import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-3f278ba4.js";const t={},c=e(`<h1 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker-compose</h1><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">centos</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> centos<span class="token punctuation">:</span><span class="token number">7</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> centos
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 4001<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ws
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> E<span class="token punctuation">:</span>/volume/centos/etc<span class="token punctuation">:</span>/etc
      <span class="token punctuation">-</span> E<span class="token punctuation">:</span>/volume/centos/opt<span class="token punctuation">:</span>/opt
      <span class="token punctuation">-</span> E<span class="token punctuation">:</span>/volume/centos/var<span class="token punctuation">:</span>/var
      <span class="token punctuation">-</span> E<span class="token punctuation">:</span>/volume/centos/usr<span class="token punctuation">:</span>/usr
    <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># restart: unless-stopped</span>
    
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">ws</span><span class="token punctuation">:</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[c];function o(l,i){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","docker-compose.html.vue"]]);export{d as default};
