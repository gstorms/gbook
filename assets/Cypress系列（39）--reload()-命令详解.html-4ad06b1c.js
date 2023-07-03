import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as a,d as s,f as r}from"./app-3f278ba4.js";const i={},p=r(`<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>刷新页面</p><h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span>forceReload<span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span>forceReload<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**options：**只有 timeout 和 log，不再展开讲了</p><h4 id="forcereload" tabindex="-1"><a class="header-anchor" href="#forcereload" aria-hidden="true">#</a> forceReload</h4><ul><li>是否在<strong>不使用缓存</strong>的情况下重新加载当前页面</li><li>true 表示强制重新加载而不使用缓存，所有资源文件都会重新拉取一遍，<strong>好处</strong>就是可从取服务器获取最新的资源文件，<strong>坏处</strong>就是加载时间会变长</li></ul><p></p><h2 id="正确格式" tabindex="-1"><a class="header-anchor" href="#正确格式" aria-hidden="true">#</a> 正确格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="实际栗子" tabindex="-1"><a class="header-anchor" href="#实际栗子" aria-hidden="true">#</a> 实际栗子</h2><h4 id="测试文件代码" tabindex="-1"><a class="header-anchor" href="#测试文件代码" aria-hidden="true">#</a> 测试文件代码</h4>`,13),d=n("img",{src:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200621213350989-1164753908.png",alt:"",loading:"lazy"},null,-1),u=n("br",null,null,-1),h=n("br",null,null,-1),_=n("strong",null,"结尾",-1),m=n("br",null,null,-1),v={href:"https://cloud.tencent.com/developer/support-plan?invite_code=12vd92hxgwgj1",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.cnblogs.com/poloyy/p/13173533.html",target:"_blank",rel:"noopener noreferrer"};function f(k,b){const e=o("ExternalLinkIcon");return c(),l("div",null,[p,n("p",null,[d,u,a("  "),h,_,m,a(" 我的博客即将同步至腾讯云+社区，邀请大家一同入驻："),n("a",v,[a("https://cloud.tencent.com/developer/support-plan?invite_code=12vd92hxgwgj1"),s(e)])]),n("blockquote",null,[n("p",null,[n("a",g,[a("https://www.cnblogs.com/poloyy/p/13173533.html"),s(e)])])])])}const j=t(i,[["render",f],["__file","Cypress系列（39）--reload()-命令详解.html.vue"]]);export{j as default};
