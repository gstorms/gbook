import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as o,a,b as l,d as c,f as i}from"./app-207e7d61.js";const r={},h=i(`<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><ul><li>在 Cypress 中，保存一个值或者引用的最好方式是使用闭包</li><li>then() 就是 Cypress 对闭包的一个典型应用</li><li>then() 返回的是上一个命令的结果，并将其注入到下一个命令中</li></ul><p></p><h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>callbackFn<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> callbackFn<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h4><ul><li>**options：**只有 timeout，4000ms</li><li>**callbackFn：**回调函数，需要将上一个命令的结果作为参数进行传递</li></ul><p></p><h2 id="实际栗子" tabindex="-1"><a class="header-anchor" href="#实际栗子" aria-hidden="true">#</a> 实际栗子</h2><h3 id="then-回调函数最简单的两种写法" tabindex="-1"><a class="header-anchor" href="#then-回调函数最简单的两种写法" aria-hidden="true">#</a> then 回调函数最简单的两种写法</h3><p><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200915100031495-1290902387.png" alt="" loading="lazy"><br> 第一种是箭头函数，第二种就是普通声明函数的方式</p><h3 id="通过-then-和-should-比较文本是否相等" tabindex="-1"><a class="header-anchor" href="#通过-then-和-should-比较文本是否相等" aria-hidden="true">#</a> 通过 then 和 should 比较文本是否相等</h3><p><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200915101838883-2005361100.png" alt="" loading="lazy"><br>  <br> 待补充内容</p>`,14),p={href:"https://www.cnblogs.com/poloyy/p/13671895.html",target:"_blank",rel:"noopener noreferrer"};function d(u,_){const n=s("ExternalLinkIcon");return t(),o("div",null,[h,a("blockquote",null,[a("p",null,[a("a",p,[l("https://www.cnblogs.com/poloyy/p/13671895.html"),c(n)])])])])}const f=e(r,[["render",d],["__file","Cypress系列（046）--then()-命令详解.html.vue"]]);export{f as default};
