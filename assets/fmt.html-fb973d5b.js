import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as a}from"./app-207e7d61.js";const i={},t=a(`<h1 id="fmt" tabindex="-1"><a class="header-anchor" href="#fmt" aria-hidden="true">#</a> fmt</h1><p><code>fmt</code>命令用于对文本指定样式。<br> 下面是<code>example.txt</code>的内容，是非常长的一行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>fmt</code>可以将其输出为每行80个字符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">fmt</span> <span class="token parameter variable">-w</span> <span class="token number">20</span>
Lorem ipsum
dolor sit amet,
consetetur
sadipscing elitr,
<span class="token function">sed</span> diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, <span class="token function">sed</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[t];function l(r,o){return n(),s("div",null,d)}const u=e(i,[["render",l],["__file","fmt.html.vue"]]);export{u as default};