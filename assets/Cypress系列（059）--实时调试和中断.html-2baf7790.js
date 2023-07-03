import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as p,a as n,b as c,d as i,f as o}from"./app-207e7d61.js";const l={},u=o(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>Cypress 提供了两种方式的 debug</p><h2 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> .debug()</h2><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><ul><li>在定位问题时，可以使用 .debug() 来调试，查看此时系统的状态</li><li>记得需要打开浏览器开发者工具哦（F12），才能让调试生效</li></ul><p></p><h3 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token comment">// ---or---</span>
cy<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="命令返回结果" tabindex="-1"><a class="header-anchor" href="#命令返回结果" aria-hidden="true">#</a> 命令返回结果</h3><p>返回上一条命令产生的结果</p><h3 id="正确用法" tabindex="-1"><a class="header-anchor" href="#正确用法" aria-hidden="true">#</a> 正确用法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在命令开头就进行调试</span>
cy<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 调试 get 命令</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;nav&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="栗子" tabindex="-1"><a class="header-anchor" href="#栗子" aria-hidden="true">#</a> 栗子</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;have.attr&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h4 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h4><p>主要看 F12<br><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927153447978-2043375828.png" alt="" loading="lazy"></p><h2 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger" aria-hidden="true">#</a> debugger</h2><h3 id="作用-1" tabindex="-1"><a class="header-anchor" href="#作用-1" aria-hidden="true">#</a> 作用</h3><p>Cypress 测试代码和被测应用运行在同一个循环中，意味着有访问和控制页面上运行着的代码的权利</p><h3 id="栗子一" tabindex="-1"><a class="header-anchor" href="#栗子一" aria-hidden="true">#</a> 栗子一</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;debugger&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">debugger</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>记得需要打开浏览器开发者工具哦（F12）</p><h4 id="测试结果-1" tabindex="-1"><a class="header-anchor" href="#测试结果-1" aria-hidden="true">#</a> 测试结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200927151337621-1001918168.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="命令执行流程" tabindex="-1"><a class="header-anchor" href="#命令执行流程" aria-hidden="true">#</a> 命令执行流程</h4><p>上面的代码整个工作流程如下</p><ul><li>cy.visit() 访问页面，Cypress 等待加载</li><li>查询该元素（a 标签），如果没有立即找到它，Cypress会自动等待并重试一会儿</li><li>.get()  执行结果传递给 .then() 函数</li><li>在 .then() 函数的上下文中，调用 debugger 调试器，停止运行测试代码并调用 Developer Tools 的焦点</li><li>检查应用程序的状态，执行 debugger</li></ul><p></p>`,31),r={href:"https://www.cnblogs.com/poloyy/p/13739864.html",target:"_blank",rel:"noopener noreferrer"};function d(h,k){const a=e("ExternalLinkIcon");return t(),p("div",null,[u,n("blockquote",null,[n("p",null,[n("a",r,[c("https://www.cnblogs.com/poloyy/p/13739864.html"),i(a)])])])])}const v=s(l,[["render",d],["__file","Cypress系列（059）--实时调试和中断.html.vue"]]);export{v as default};
