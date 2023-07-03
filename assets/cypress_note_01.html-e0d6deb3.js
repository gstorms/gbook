import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as r,d as u,w as s,f as d,b as t,e,a as o}from"./app-207e7d61.js";const v={},m=d(`<h1 id="cypress-的鼠标悬浮等事件不生效-mouseover等-解决方法" tabindex="-1"><a class="header-anchor" href="#cypress-的鼠标悬浮等事件不生效-mouseover等-解决方法" aria-hidden="true">#</a> Cypress-的鼠标悬浮等事件不生效（mouseover等）解决方法</h1><p>页面有个元素需要鼠标悬停才会显示出来，写用例的时候死活写不出来，看cypress文档说使用<code>.trigger(&quot;mouseover&quot;)</code> ,但是没有用！！！<br> 最终在<code>https://github.com/cypress-io/cypress/issues/10</code>，这里有个人分享了一个插件，试了下终于OK了<br> 插件地址：<br><code>https://github.com/dmtrKovalenko/cypress-real-events</code><br> 安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> cypress-real-events

<span class="token function">yarn</span> <span class="token function">add</span> cypress-real-events
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册指令：<br> 在文件<code>cypress/support/index.{js,ts}</code>中引入一下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;cypress-real-events/support&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">realHover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">realHover</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),b=o("p",null,"111",-1),k=o("p",null,"222",-1),_=o("p",null,"333",-1);function h(g,f){const c=p("Tabs");return l(),r("div",null,[m,u(c,{id:"15",data:[{id:"标题 1"},{id:"标题 2"},{id:"标题 3"}],active:2},{title0:s(({value:n,isActive:a})=>[t("标题 1")]),title1:s(({value:n,isActive:a})=>[t("标题 2")]),title2:s(({value:n,isActive:a})=>[t("标题 3")]),tab0:s(({value:n,isActive:a})=>[b,e(" tab 1 内容 ")]),tab1:s(({value:n,isActive:a})=>[k,e(" tab 2 内容 ")]),tab2:s(({value:n,isActive:a})=>[_,e(" tab 3 将会被默认激活 "),e(" tab 3 内容 ")]),_:1})])}const q=i(v,[["render",h],["__file","cypress_note_01.html.vue"]]);export{q as default};
