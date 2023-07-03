import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as p,a as n,b as o,d as c,f as i}from"./app-207e7d61.js";const l={},u=i(`<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="正确写法" tabindex="-1"><a class="header-anchor" href="#正确写法" aria-hidden="true">#</a> 正确写法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**重点：**必须是 form 元素才能调用.submit()</p><h2 id="错误写法" tabindex="-1"><a class="header-anchor" href="#错误写法" aria-hidden="true">#</a> 错误写法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// cy 不能直接调用</span>
cy<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token comment">// 不是 form 元素</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h2><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616114206982-920796172.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="最简单的栗子" tabindex="-1"><a class="header-anchor" href="#最简单的栗子" aria-hidden="true">#</a> 最简单的栗子</h2><h4 id="html-代码" tabindex="-1"><a class="header-anchor" href="#html-代码" aria-hidden="true">#</a> html 代码</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Send<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="测试文件代码" tabindex="-1"><a class="header-anchor" href="#测试文件代码" aria-hidden="true">#</a> 测试文件代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200616114530866-1019627690.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,17),r={href:"https://www.cnblogs.com/poloyy/p/13066039.html",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=t("ExternalLinkIcon");return e(),p("div",null,[u,n("blockquote",null,[n("p",null,[n("a",r,[o("https://www.cnblogs.com/poloyy/p/13066039.html"),c(a)])])])])}const v=s(l,[["render",d],["__file","Cypress系列（25）--submit()-命令详解.html.vue"]]);export{v as default};
