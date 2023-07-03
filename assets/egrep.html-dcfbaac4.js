import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as i}from"./app-207e7d61.js";const a={},d=i(`<h1 id="egrep" tabindex="-1"><a class="header-anchor" href="#egrep" aria-hidden="true">#</a> egrep</h1><p><code>egrep</code>命令用于显示匹配正则模式的行，与<code>grep -E</code>命令等价。<br> 下面是<code>example.txt</code>文件的内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Lorem ipsum
dolor sit amet, 
consetetur
sadipscing elitr,
sed diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, sed
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>egrep</code>命令显示包括<code>Lorem</code>或<code>dolor</code>的行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">egrep</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
<span class="token comment"># 或者</span>
$ <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
Lorem ipsum
dolor sit amet,
et dolore magna
duo dolores et ea
sanctus est Lorem
ipsum dolor sit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[d];function r(o,c){return n(),s("div",null,l)}const v=e(a,[["render",r],["__file","egrep.html.vue"]]);export{v as default};
