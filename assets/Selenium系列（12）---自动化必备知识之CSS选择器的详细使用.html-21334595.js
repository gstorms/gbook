import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as d,c as l,a as n,b as t,d as c,f as i}from"./app-3f278ba4.js";const o={},p=i(`<h2 id="web-ui自动化中-定位方式的优先级" tabindex="-1"><a class="header-anchor" href="#web-ui自动化中-定位方式的优先级" aria-hidden="true">#</a> <strong>Web UI自动化中，定位方式的优先级</strong></h2><ul><li>优先级最高：ID</li><li>优先级其次：name</li><li>优先级再次：CSS selector</li><li>优先级再次：Xpath</li></ul><p></p><h2 id="针对css-selector和xpath的优先级做一个简单的说明" tabindex="-1"><a class="header-anchor" href="#针对css-selector和xpath的优先级做一个简单的说明" aria-hidden="true">#</a> 针对css selector和xpath的优先级做一个简单的说明</h2><p>在项目中我们可能用的最多的是css或者xpath，那么针对这两种，我们优先选择css，原因在哪些？</p><ul><li>**原因1：**css是配合html来工作，它实现的原理是匹配对象的原理，而xpath是配合xml工作的，它实现的原理是遍历的原理，所以两者在设计上，css性能更优秀</li><li>**原因2：**语言简洁，明了，相对xpath</li><li>**原因3：**前端开发主要是使用css，不使用xpath，所以在技术上面，我们可以获得帮助的机会非常多</li></ul><p></p><h2 id="定位元素的注意事项-划重点" tabindex="-1"><a class="header-anchor" href="#定位元素的注意事项-划重点" aria-hidden="true">#</a> 定位元素的注意事项（划重点）</h2><ul><li>找到待定位元素的唯一属性</li><li>如果该元素没有唯一属性，则先找到能被唯一定位到的父元素/子元素/相邻元素，再使用 &gt; , &quot; &quot; , + 等进行辅助定位</li><li>不要使用随机唯一属性定位</li><li>最重要的是多跟研发沟通，尽量把关键元素加上ID或者name，并减少不合理的页面元素，例如重复ID这样的事情最好不要发生</li></ul><p></p><h2 id="首先-基础的css选择器" tabindex="-1"><a class="header-anchor" href="#首先-基础的css选择器" aria-hidden="true">#</a> 首先，基础的CSS选择器</h2><table><thead><tr><th>选择器</th><th>名字</th><th>例子</th><th>例子描述</th></tr></thead><tbody><tr><td><strong>基础选择器</strong></td><td></td><td></td><td></td></tr><tr><td>.class</td><td>class选择器</td><td>.intro</td><td>选择 class=&quot;intro&quot; 的所有元素。</td></tr><tr><td>#id</td><td>id选择器</td><td>#firstname</td><td>选择 id=&quot;firstname&quot; 的所有元素。</td></tr><tr><td>*</td><td>通配符</td><td></td><td>选择所有元素。</td></tr><tr><td>element</td><td>标签选择器</td><td>p</td><td>选择所有 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td><strong>多层选择器</strong></td><td></td><td></td><td></td></tr><tr><td>element,element</td><td>分组选择器</td><td>div,p</td><td>同时选择所有 <code>&lt;div&gt;</code> 元素和所有 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>element element</td><td>后端选择器</td><td>div p</td><td>选择 <code>&lt;div&gt;</code> 元素内部的所有 <code>&lt;p&gt;</code> 元素**（包括子元素、孙子元素）**</td></tr><tr><td>element&gt;element</td><td>子元素选择器</td><td>div&gt;p</td><td>选择 <code>&lt;div&gt;</code> 元素下的 <code>&lt;p&gt;</code> <strong>子元素</strong>。</td></tr><tr><td>element+element</td><td>相邻选择器</td><td>div+p</td><td>选择 <code>&lt;div&gt;</code> 元素<strong>之后的所有兄弟</strong> <code>&lt;p&gt;</code> 元素。</td></tr><tr><td><strong>属性选择器</strong></td><td></td><td></td><td></td></tr><tr><td>[attribute]</td><td>[target]</td><td></td><td>选择带有 target 属性所有元素。</td></tr><tr><td>[attribute=value]</td><td>[target=_blank]</td><td></td><td>选择 target=&quot;_blank&quot; 的所有元素。</td></tr><tr><td>[attribute~=value]</td><td>[title~=flower]</td><td></td><td>选择 title 属性包含单词 &quot;flower&quot; 的所有元素。</td></tr><tr><td>[attribute|=value]</td><td>[lang|=en]</td><td></td><td>选择 lang 属性值以 &quot;en&quot; 开头的所有元素。</td></tr></tbody></table><h3 id="html页面中-css正确写法的栗子" tabindex="-1"><a class="header-anchor" href="#html页面中-css正确写法的栗子" aria-hidden="true">#</a> html页面中，css正确写法的栗子</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* id选择器 */</span>
<span class="token selector">#abc</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #cc0000<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* class 选择器 */</span>
<span class="token selector">.down</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #66cc66<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 标签选择器 */</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> cornflowerblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 标签选择器可以与class选择器组合使用 */</span>
<span class="token selector">p.down</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 分组选择器 */</span>
<span class="token selector">ul,
div,
.up</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #cc0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 属性选择器 */</span>
<span class="token selector">[href]</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #cc6600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">span[title=&quot;hello&quot;]</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #00FFFF<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">span[title~=&quot;python&quot;]</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 后代选择器 */</span>
<span class="token selector">div li</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> forestgreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 子元素选择器 */</span>
<span class="token selector">div[id=&quot;up&quot;]&gt;ul</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #cc6600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 相邻兄弟选择器 */</span>
<span class="token selector">#down+li</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 后续兄弟选择器 */</span>
<span class="token selector">#down~li</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #cc0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="然后-伪类选择器" tabindex="-1"><a class="header-anchor" href="#然后-伪类选择器" aria-hidden="true">#</a> 然后，伪类选择器</h2><table><thead><tr><th>选择器</th><th>例子</th><th>例子描述</th></tr></thead><tbody><tr><td>:first-child</td><td>p:first-child</td><td>选择属于父元素的第一个子元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:nth-child(n)</td><td>p:nth-child(2)</td><td>选择属于其父元素的第二个子元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:nth-last-child(n)</td><td>p:nth-last-child(2)</td><td>同上，从最后一个子元素开始计数。</td></tr><tr><td>:nth-of-type(n)</td><td>p:nth-of-type(2)</td><td>选择属于其父元素第二个 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td></tr><tr><td>:nth-last-of-type(n)</td><td>p:nth-last-of-type(2)</td><td>同上，但是从最后一个子元素开始计数。</td></tr><tr><td>:last-child</td><td>p:last-child</td><td>选择属于其父元素最后一个子元素每个 <code>&lt;p&gt;</code> 元素。</td></tr></tbody></table>`,17),r={href:"https://www.cnblogs.com/poloyy/p/12629662.html",target:"_blank",rel:"noopener noreferrer"};function u(v,m){const s=e("ExternalLinkIcon");return d(),l("div",null,[p,n("blockquote",null,[n("p",null,[t("转载： "),n("a",r,[t("https://www.cnblogs.com/poloyy/p/12629662.html"),c(s)])])])])}const k=a(o,[["render",u],["__file","Selenium系列（12）---自动化必备知识之CSS选择器的详细使用.html.vue"]]);export{k as default};
