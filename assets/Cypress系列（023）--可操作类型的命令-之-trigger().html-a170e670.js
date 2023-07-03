import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as i,a as n,b as a,d as e,f as c}from"./app-3f278ba4.js";const r={},l=c(`<h2 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> .trigger()</h2><p>在DOM元素上触发指定事件</p><h3 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> position<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> position<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="参数讲解" tabindex="-1"><a class="header-anchor" href="#参数讲解" aria-hidden="true">#</a> 参数讲解</h3><h4 id="eventname" tabindex="-1"><a class="header-anchor" href="#eventname" aria-hidden="true">#</a> eventName</h4><p>需要触发事件名称</p><h4 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h4><p>每个元素都有<strong>九个</strong> position，具体可看下图<br><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125642886-1334346322.png" alt="" loading="lazy"></p><h4 id="x-y" tabindex="-1"><a class="header-anchor" href="#x-y" aria-hidden="true">#</a> x , y</h4><p>距离 DOM 元素左上角的坐标，x 是横轴，y 是竖轴</p><h4 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200612185828956-377897261.png" alt="" loading="lazy"><br>  <br> 除了上述的通用 option，还有一些事件特有的 options<br><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200613214748720-2135157489.png" alt="" loading="lazy"></p><ul><li>clientX、clientY：相对于<strong>浏览器</strong>左上角的距离</li><li>pageX、pageY：相对于<strong>整个页面</strong>左上角的距离</li><li>screenX、screenY：相对于<strong>电脑屏幕</strong>左上角的距离</li></ul><p></p><h3 id="正确用法" tabindex="-1"><a class="header-anchor" href="#正确用法" aria-hidden="true">#</a> 正确用法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  在 a 标签上触发 mousedown 事件</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="错误用法" tabindex="-1"><a class="header-anchor" href="#错误用法" aria-hidden="true">#</a> 错误用法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不能直接通过 cy 调用</span>
cy<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// location 并不是 DOM 元素</span>
cy<span class="token punctuation">.</span><span class="token function">location</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h2 id="鼠标事件的栗子" tabindex="-1"><a class="header-anchor" href="#鼠标事件的栗子" aria-hidden="true">#</a> 鼠标事件的栗子</h2><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>在 DOM 元素上触发事件之前，DOM 元素必须处于【可交互】状态（必须可见并 且不能禁用）</p><h3 id="hover-的栗子" tabindex="-1"><a class="header-anchor" href="#hover-的栗子" aria-hidden="true">#</a> hover 的栗子</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200613210854190-728232953.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="长按的栗子" tabindex="-1"><a class="header-anchor" href="#长按的栗子" aria-hidden="true">#</a> 长按的栗子</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200613210906291-577160499.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="不同的鼠标按钮" tabindex="-1"><a class="header-anchor" href="#不同的鼠标按钮" aria-hidden="true">#</a> 不同的鼠标按钮</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200613211015123-1585956842.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="添加-options-的栗子" tabindex="-1"><a class="header-anchor" href="#添加-options-的栗子" aria-hidden="true">#</a> 添加 options 的栗子</h2><h4 id="指定事件不应该冒泡" tabindex="-1"><a class="header-anchor" href="#指定事件不应该冒泡" aria-hidden="true">#</a> 指定事件不应该冒泡</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;#s-usersetting-top&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;mouseover&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">bubbles</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，指定的事件将在 DOM 树中冒泡。false 可以防止事件冒泡</p><h4 id="设置-clientx-和-clienty" tabindex="-1"><a class="header-anchor" href="#设置-clientx-和-clienty" aria-hidden="true">#</a> 设置 clientX 和 clientY</h4><p>这将覆盖基于元素本身的默认自动定位（x、y），对于  mousemove  之类的事件很有用，可能需要将元素<strong>拖动到元素本身之外的地方</strong>，基于浏览器本身的X、Y坐标</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">clientX</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token literal-property property">clientY</span><span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,39),u=n("strong",null,"结尾",-1),d=n("br",null,null,-1),h=n("br",null,null,-1),g={href:"https://www.cnblogs.com/poloyy/p/13052972.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.cnblogs.com/poloyy/p/13066031.html",target:"_blank",rel:"noopener noreferrer"};function m(b,v){const s=o("ExternalLinkIcon");return p(),i("div",null,[l,n("p",null,[u,d,a(" 本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解"),h,a(" 对书籍感兴趣的，大家可以参考本篇博客："),n("a",g,[a("https://www.cnblogs.com/poloyy/p/13052972.html"),e(s)]),a("，考虑自身需求进行购买")]),n("blockquote",null,[n("p",null,[n("a",k,[a("https://www.cnblogs.com/poloyy/p/13066031.html"),e(s)])])])])}const x=t(r,[["render",m],["__file","Cypress系列（023）--可操作类型的命令-之-trigger().html.vue"]]);export{x as default};
