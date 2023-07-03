import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as p,a as n,b as c,d as o,f as i}from"./app-3f278ba4.js";const l={},u=i(`<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><ul><li>创建一个断言，断言将自动重试，直到它们通过或超时</li><li>和 should() 一个用法</li></ul><p></p><h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>chainers<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>chainers<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>chainers<span class="token punctuation">,</span> method<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>callbackFn<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h4><ul><li>**chainers：**断言器</li><li>**value：**需要断言的值</li><li>**method：**需要调用到的方法</li><li>**callbackFn：**回调方法，可以满足自己想要断言的内容；且总是返回前一个 cy 命令返回的结果，方法内的 return 是无效的；会一直运行直到里面没有断言</li></ul><p></p><h2 id="and-返回的结果" tabindex="-1"><a class="header-anchor" href="#and-返回的结果" aria-hidden="true">#</a> and() 返回的结果</h2><p>在大多数情况下，.and() 返回与上一个命令相同的结果</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;nav&#39;</span><span class="token punctuation">)</span>                       <span class="token comment">// 返回 &lt;nav&gt;</span>
  <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;be.visible&#39;</span><span class="token punctuation">)</span>             <span class="token comment">// 返回 &lt;nav&gt;</span>
  <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token string">&#39;have.class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;open&#39;</span><span class="token punctuation">)</span>        <span class="token comment">// 返回 &lt;nav&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，某些 chainer 会改变返回的结果</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;nav&#39;</span><span class="token punctuation">)</span>                       <span class="token comment">// 返回 &lt;nav&gt;</span>
  <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;be.visible&#39;</span><span class="token punctuation">)</span>             <span class="token comment">// 返回 &lt;nav&gt;</span>
  <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token string">&#39;have.css&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;font-family&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// 返回 &#39;sans-serif&#39;</span>
  <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token string">&#39;match&#39;</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">serif</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>            <span class="token comment">// 返回 &#39;sans-serif&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="简单的栗子" tabindex="-1"><a class="header-anchor" href="#简单的栗子" aria-hidden="true">#</a> 简单的栗子</h2><h3 id="对同一结果操作的栗子-button-元素" tabindex="-1"><a class="header-anchor" href="#对同一结果操作的栗子-button-元素" aria-hidden="true">#</a> 对同一结果操作的栗子（button 元素）</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;have.class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token string">&#39;not.be.disabled&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="chainer-改变返回结果的栗子" tabindex="-1"><a class="header-anchor" href="#chainer-改变返回结果的栗子" aria-hidden="true">#</a> chainer 改变返回结果的栗子</h3><h4 id="html-代码" tabindex="-1"><a class="header-anchor" href="#html-代码" aria-hidden="true">#</a> html 代码</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>users/123/edit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Edit User<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="cypress-代码" tabindex="-1"><a class="header-anchor" href="#cypress-代码" aria-hidden="true">#</a> cypress 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;contain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Edit User&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 返回的是 &lt;a&gt;</span>
  <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token string">&#39;have.attr&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span>       <span class="token comment">// 返回的是 href 的值</span>
  <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token string">&#39;match&#39;</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">users</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>          <span class="token comment">// 返回的是 href 的值</span>
  <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token string">&#39;not.include&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span>        <span class="token comment">// 返回的是 href 的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="method-value-参数的栗子" tabindex="-1"><a class="header-anchor" href="#method-value-参数的栗子" aria-hidden="true">#</a> method + value 参数的栗子</h3><p>断言 href 属性值是否等于 /users</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;have.class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token string">&#39;have.attr&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;href&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),r={href:"https://www.cnblogs.com/poloyy/p/13678233.html",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=t("ExternalLinkIcon");return e(),p("div",null,[u,n("blockquote",null,[n("p",null,[n("a",r,[c("https://www.cnblogs.com/poloyy/p/13678233.html"),o(s)])])])])}const g=a(l,[["render",d],["__file","Cypress系列（48）--and()-命令详解.html.vue"]]);export{g as default};
