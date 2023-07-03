import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as i,a as n,b as o,d as c,f as p}from"./app-207e7d61.js";const l={},r=p(`<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><ul><li>返回传递给它的对象</li><li>返回的是一个 Promise 对象，可以直接接 Cypress 其他命令</li><li>如果传递给它的就是一个 Promise 对象，则返回它的值</li></ul><p></p><h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>subject<span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>subject<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="subject" tabindex="-1"><a class="header-anchor" href="#subject" aria-hidden="true">#</a> <strong>subject</strong></h4><p>需要返回的对象</p><h4 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> <strong>options</strong></h4><p></p><ul><li>**log：**是否将命令显示到命令日志中，默认 true</li><li>**timeout：**命令超时时间</li></ul><p></p><h2 id="最简单的栗子" tabindex="-1"><a class="header-anchor" href="#最简单的栗子" aria-hidden="true">#</a> 最简单的栗子</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明一个整数</span>
cy<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;eq&#39;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span>
<span class="token comment">// 声明一个字符串</span>
cy<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token string">&#39;contain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="声明一个对象的栗子" tabindex="-1"><a class="header-anchor" href="#声明一个对象的栗子" aria-hidden="true">#</a> 声明一个对象的栗子</h2><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200917163531442-789595049.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="对象属性值是函数的栗子" tabindex="-1"><a class="header-anchor" href="#对象属性值是函数的栗子" aria-hidden="true">#</a> 对象属性值是函数的栗子</h2><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200917163541801-1899514044.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="页面元素-element-的栗子" tabindex="-1"><a class="header-anchor" href="#页面元素-element-的栗子" aria-hidden="true">#</a> 页面元素 Element 的栗子</h2><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200917163648966-327615995.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,21),u={href:"https://www.cnblogs.com/poloyy/p/13672255.html",target:"_blank",rel:"noopener noreferrer"};function d(h,g){const a=e("ExternalLinkIcon");return t(),i("div",null,[r,n("blockquote",null,[n("p",null,[n("a",u,[o("https://www.cnblogs.com/poloyy/p/13672255.html"),c(a)])])])])}const b=s(l,[["render",d],["__file","Cypress系列（050）--wrap()-命令详解.html.vue"]]);export{b as default};
