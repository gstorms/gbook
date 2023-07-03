import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as p,a as n,b as c,d as i,f as o}from"./app-207e7d61.js";const l={},r=o(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><ul><li>为了绕开同源策略的限制而实现的方案，使得  Cypress 不能支持在一个测试用例文件里访问多个不同域名的 URL</li><li>如果访问了多个不同域名的站点，Cypress 会直接报错</li></ul><p></p><h2 id="避免访问多个站点" tabindex="-1"><a class="header-anchor" href="#避免访问多个站点" aria-hidden="true">#</a> 避免访问多个站点</h2><h4 id="访问相同超域" tabindex="-1"><a class="header-anchor" href="#访问相同超域" aria-hidden="true">#</a> 访问相同超域</h4><p>如果访问的是同一个超域下的不同子域，则 Cypress 允许你正常访问</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;访问同一超域下的不同子域&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&#39;https://example.cypress.io&#39;</span><span class="token punctuation">)</span>
    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.cypress.io/features&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927111646659-1158048691.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="访问不同超域" tabindex="-1"><a class="header-anchor" href="#访问不同超域" aria-hidden="true">#</a> 访问不同超域</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;访问不同超域，会报错&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&#39;https://example.cypress.io&#39;</span><span class="token punctuation">)</span>
    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.cnblogs.com/poloyy/&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="测试结果-1" tabindex="-1"><a class="header-anchor" href="#测试结果-1" aria-hidden="true">#</a> 测试结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927111704468-2123238922.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,15),u={href:"https://www.cnblogs.com/poloyy/p/13738361.html",target:"_blank",rel:"noopener noreferrer"};function d(h,k){const s=t("ExternalLinkIcon");return e(),p("div",null,[r,n("blockquote",null,[n("p",null,[n("a",u,[c("https://www.cnblogs.com/poloyy/p/13738361.html"),i(s)])])])])}const v=a(l,[["render",d],["__file","Cypress系列（56）--避免访问多个站点.html.vue"]]);export{v as default};
