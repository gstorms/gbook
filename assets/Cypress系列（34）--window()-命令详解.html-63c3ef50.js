import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as t,a,b as o,d as c,f as r}from"./app-207e7d61.js";const d={},l=r(`<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>获取当前页面的 window 对象</p><h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">window</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">window</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>**options：**只有 timeout 和 log，不再展开讲了</p><h2 id="正确写法" tabindex="-1"><a class="header-anchor" href="#正确写法" aria-hidden="true">#</a> 正确写法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">window</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="实际栗子" tabindex="-1"><a class="header-anchor" href="#实际栗子" aria-hidden="true">#</a> 实际栗子</h2><h4 id="测试文件代码" tabindex="-1"><a class="header-anchor" href="#测试文件代码" aria-hidden="true">#</a> 测试文件代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617104546982-1900788219.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617104551414-546048760.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="window-命令的产物" tabindex="-1"><a class="header-anchor" href="#window-命令的产物" aria-hidden="true">#</a> .window() 命令的产物</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200617104621742-729013463.png" alt="" loading="lazy"><br> 可以看到，window 对象包含了很多属性值</p>`,15),p={href:"https://www.cnblogs.com/poloyy/p/13151135.html",target:"_blank",rel:"noopener noreferrer"};function h(u,g){const n=s("ExternalLinkIcon");return i(),t("div",null,[l,a("blockquote",null,[a("p",null,[a("a",p,[o("https://www.cnblogs.com/poloyy/p/13151135.html"),c(n)])])])])}const f=e(d,[["render",h],["__file","Cypress系列（34）--window()-命令详解.html.vue"]]);export{f as default};
