import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as i,a,b as c,d as r,f as o}from"./app-207e7d61.js";const d={},l=o(`<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>结束命令链</p><h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="正确用法" tabindex="-1"><a class="header-anchor" href="#正确用法" aria-hidden="true">#</a> 正确用法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 最终返回 null 代替 ul 元素</span>
cy<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="错误用法" tabindex="-1"><a class="header-anchor" href="#错误用法" aria-hidden="true">#</a> 错误用法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="命令返回结果" tabindex="-1"><a class="header-anchor" href="#命令返回结果" aria-hidden="true">#</a> 命令返回结果</h2><p>返回 null</p><h2 id="简单的栗子" tabindex="-1"><a class="header-anchor" href="#简单的栗子" aria-hidden="true">#</a> 简单的栗子</h2><p>如果要结束命令链并强制下一个命令不接收上一个命令的内容，则 .end() 很有用</p><h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205125105694-1558127810.png" alt="" loading="lazy"></h4><p>其实在编辑器也能看到提示，第一个 res 是null，而第二个 res 是一个元素</p><h4 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果" aria-hidden="true">#</a> 运行结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201205125127847-1221390069.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,20),p={href:"https://www.cnblogs.com/poloyy/p/14089156.html",target:"_blank",rel:"noopener noreferrer"};function u(h,m){const n=s("ExternalLinkIcon");return t(),i("div",null,[l,a("blockquote",null,[a("p",null,[a("a",p,[c("https://www.cnblogs.com/poloyy/p/14089156.html"),r(n)])])])])}const b=e(d,[["render",u],["__file","Cypress系列（097）--end()-命令详解.html.vue"]]);export{b as default};
