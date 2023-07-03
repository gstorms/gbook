import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c,a as n,b as a,d as p,f as o}from"./app-3f278ba4.js";const l={},r=o(`<h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><ul><li>将所有后续 cy 命令的作用域限定在此元素内</li><li>在特定的元素组(例如  )中工作时很有用</li></ul><h3 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">within</span><span class="token punctuation">(</span>callbackFn<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">within</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> callbackFn<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="callbackfn" tabindex="-1"><a class="header-anchor" href="#callbackfn" aria-hidden="true">#</a> callbackFn</h4><ul><li>回调函数</li><li>第一个参数是上一条命令的返回结果(必须是元素)</li></ul><h4 id="options-参数" tabindex="-1"><a class="header-anchor" href="#options-参数" aria-hidden="true">#</a> options 参数</h4><p><strong>log</strong>：是否将命令显示到命令日志中，默认 true</p><h3 id="正确用法" tabindex="-1"><a class="header-anchor" href="#正确用法" aria-hidden="true">#</a> 正确用法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">within</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">$form</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token comment">// 在回调函数里，cy 命令的作用域将限定在 form 中</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误用法" tabindex="-1"><a class="header-anchor" href="#错误用法" aria-hidden="true">#</a> 错误用法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不能直接他通过 cy 调用</span>
cy<span class="token punctuation">.</span><span class="token function">within</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// getCookies() 返回的不是一个元素</span>
cy<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">within</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令返回结果" tabindex="-1"><a class="header-anchor" href="#命令返回结果" aria-hidden="true">#</a> 命令返回结果</h3><p>返回和上一条命令一样的结果</p><h3 id="实际栗子" tabindex="-1"><a class="header-anchor" href="#实际栗子" aria-hidden="true">#</a> 实际栗子</h3><h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4><p><img src="https://cdn.nlark.com/yuque/0/2021/png/12492743/1616402968075-3d62e83d-128d-4267-9ca1-9f7a5d1b27bb.png#align=left&amp;display=inline&amp;height=290&amp;margin=[object Object]&amp;originHeight=290&amp;originWidth=711&amp;size=0&amp;status=done&amp;style=none&amp;width=711" alt="" loading="lazy"><br> 重点：回调函数里的 cy.get() 只会从 form 表单里面找元素，而不是整个页面</p><h4 id="get-和-within-命令的返回结果" tabindex="-1"><a class="header-anchor" href="#get-和-within-命令的返回结果" aria-hidden="true">#</a> get() 和 within() 命令的返回结果</h4><p><img src="https://cdn.nlark.com/yuque/0/2021/png/12492743/1616402986381-24ef373e-80dd-4bcb-a981-82c63481c25a.png#align=left&amp;display=inline&amp;height=162&amp;margin=[object Object]&amp;originHeight=162&amp;originWidth=585&amp;size=0&amp;status=done&amp;style=none&amp;width=585" alt="" loading="lazy"><br> 两个命令的返回结果都是 form 表单<br><img src="https://cdn.nlark.com/yuque/0/2021/png/12492743/1616402995025-a34af8e1-f027-46b0-98ce-67423d079fd4.png#align=left&amp;display=inline&amp;height=327&amp;margin=[object Object]&amp;originHeight=327&amp;originWidth=1284&amp;size=0&amp;status=done&amp;style=none&amp;width=1284" alt="" loading="lazy"></p><h4 id="获取输入框的效果" tabindex="-1"><a class="header-anchor" href="#获取输入框的效果" aria-hidden="true">#</a> 获取输入框的效果</h4>`,20),d=n("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/12492743/1616403012697-7b6ea0d7-36bd-4063-b1c0-34bce43f36da.png#align=left&display=inline&height=322&margin=[object Object]&originHeight=322&originWidth=1290&size=0&status=done&style=none&width=1290",alt:"",loading:"lazy"},null,-1),u=n("br",null,null,-1),h=n("br",null,null,-1),m=n("br",null,null,-1),g={href:"https://blog.csdn.net/qq_33801641/article/details/109836412",target:"_blank",rel:"noopener noreferrer"};function k(b,f){const s=t("ExternalLinkIcon");return i(),c("div",null,[r,n("p",null,[d,u,a(" ————————————————"),h,a(" 版权声明：本文为CSDN博主「小菠萝测试笔记」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。"),m,a(" 原文链接："),n("a",g,[a("https://blog.csdn.net/qq_33801641/article/details/109836412"),p(s)])])])}const y=e(l,[["render",k],["__file","Cypress系列（73）--within()-命令详解.html.vue"]]);export{y as default};
