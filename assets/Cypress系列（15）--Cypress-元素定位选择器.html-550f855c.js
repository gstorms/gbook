import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as l,a,b as n,d as e,f as o}from"./app-207e7d61.js";const p={},r=o(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><ul><li>做 UI 自动化测试，每个测试用例都会包含对元素的操作</li><li>健壮、可靠的元素定位策略可以保障测试成功率的提高</li><li>相对于其他测试框架来说，Cypress 提供了特别的定位策略，让你无须过多担心因定位失败而导致的测试失败</li></ul><p></p><h2 id="做元素定位时-你是否曾遇到过以下难题" tabindex="-1"><a class="header-anchor" href="#做元素定位时-你是否曾遇到过以下难题" aria-hidden="true">#</a> 做元素定位时，你是否曾遇到过以下难题</h2><ul><li>元素 ID 或 class 是动态生成的</li><li>你使用了 CSS选择器去定位，但开发把元素CSS样式改掉了</li></ul><p>这种情况下通常会测试失败</p><h2 id="cypress-如何解决上述难题" tabindex="-1"><a class="header-anchor" href="#cypress-如何解决上述难题" aria-hidden="true">#</a> Cypress 如何解决上述难题</h2><p>提供了 data-* 属性，包含了下面三个定位器</p><ol><li>data-cy</li><li>data-test</li><li>data-testid</li></ol><p></p><h4 id="重点" tabindex="-1"><a class="header-anchor" href="#重点" aria-hidden="true">#</a> 重点</h4><ul><li>它们都是 Cypress 专有的定位器，<strong>仅用来测试</strong></li><li>data-* 属性和<strong>元素的行为或样式无关</strong>，意味着即使 CSS 样式或 JS 行为改变，也不会导致测试失败</li><li>**注意：*<em>在实际项目中，需要自己将 data-</em> 属性加到元素中，意味着你得有权限修改代码</li></ul><p></p><h4 id="html-前端代码" tabindex="-1"><a class="header-anchor" href="#html-前端代码" aria-hidden="true">#</a> html 前端代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608162207388-82872216.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试文件代码" tabindex="-1"><a class="header-anchor" href="#测试文件代码" aria-hidden="true">#</a> 测试文件代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608162214786-1249129841.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="常规选择器" tabindex="-1"><a class="header-anchor" href="#常规选择器" aria-hidden="true">#</a> 常规选择器</h2><p>会点前端的童鞋应该都知道，在 css 里面怎么写， 这里就怎么写，敲简单 的啦</p><h3 id="id-选择器" tabindex="-1"><a class="header-anchor" href="#id-选择器" aria-hidden="true">#</a> #id 选择器</h3><p>通过元素的 id 属性来定位</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;#main1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="class-选择器" tabindex="-1"><a class="header-anchor" href="#class-选择器" aria-hidden="true">#</a> .class 选择器</h3><p>通过元素的 class 属性来定位</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;.btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h3><p>通过元素的各种属性来定位</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;button[id=&#39;main2&#39;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="nth-child-n-选择器" tabindex="-1"><a class="header-anchor" href="#nth-child-n-选择器" aria-hidden="true">#</a> :nth-child(n) 选择器</h3><h4 id="html-代码栗子" tabindex="-1"><a class="header-anchor" href="#html-代码栗子" aria-hidden="true">#</a> html 代码栗子</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200608164654434-2593250.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ul&gt;li:nth-child(2)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="cypress-定位器" tabindex="-1"><a class="header-anchor" href="#cypress-定位器" aria-hidden="true">#</a> Cypress.$定位器</h3><p>针对难以用普通方式定位的元素，Cypress 还提供了 JQuery 选择器（对我来说简直是福音）<br><strong>格式：</strong> Cypress.$(selector)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Cypress<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#main2&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 等价于</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;#main2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h3>`,42),d={href:"https://www.cnblogs.com/poloyy/p/12629662.html",target:"_blank",rel:"noopener noreferrer"},u=a("br",null,null,-1),h=a("strong",null,"选择器",-1),g=a("br",null,null,-1),m=a("br",null,null,-1),b=a("strong",null,"结尾",-1),k=a("br",null,null,-1),f=a("br",null,null,-1),_={href:"https://www.cnblogs.com/poloyy/p/13052972.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/poloyy/p/13066714.html",target:"_blank",rel:"noopener noreferrer"};function y(x,w){const s=i("ExternalLinkIcon");return c(),l("div",null,[r,a("p",null,[n("对于更多的 css 选择器写法，可以看看这篇文章："),a("a",d,[n("https://www.cnblogs.com/poloyy/p/12629662.html"),e(s)]),u,n(" 只需要关注"),h,n("那一列就好啦"),g,n("  "),m,b,k,n(" 本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解"),f,n(" 对书籍感兴趣的，大家可以参考本篇博客："),a("a",_,[n("https://www.cnblogs.com/poloyy/p/13052972.html"),e(s)]),n("，考虑自身需求进行购买")]),a("blockquote",null,[a("p",null,[a("a",v,[n("https://www.cnblogs.com/poloyy/p/13066714.html"),e(s)])])])])}const q=t(p,[["render",y],["__file","Cypress系列（15）--Cypress-元素定位选择器.html.vue"]]);export{q as default};
