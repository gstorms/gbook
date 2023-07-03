import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as o,a as n,b as a,d as t,f as i}from"./app-3f278ba4.js";const p={},r=i(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><ul><li>啥是可操作类型？就是可以和 DOM 元素交互的命令，比如：点击，双击.....等等等</li><li>这些命令<strong>模拟用户和应用程序交互</strong>，Cypress 会触发浏览器事件，进而触发应用程序绑定的时间</li></ul><p>这一篇着重讲<strong>点击</strong>操作，一共有三个命令</p><ol><li>click：单击</li><li>dbclick：双击</li><li>rightclick：右键</li></ol><p></p><h2 id="click-的语法和用法" tabindex="-1"><a class="header-anchor" href="#click-的语法和用法" aria-hidden="true">#</a> .click() 的语法和用法</h2><p>单击某个元素</p><h3 id="六种基础语法格式" tabindex="-1"><a class="header-anchor" href="#六种基础语法格式" aria-hidden="true">#</a> 六种基础语法格式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 单击某个元素</span>
<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 带参数的单击</span>
<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>

<span class="token comment">// 在某个位置点击</span>
<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span>

<span class="token comment">// 在某个位置点击，且带参数</span>
<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> options<span class="token punctuation">)</span>

<span class="token comment">// 根据页面坐标点击</span>
<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>

<span class="token comment">// 根据页面坐标点击，且带参数</span>
<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="正确用法" tabindex="-1"><a class="header-anchor" href="#正确用法" aria-hidden="true">#</a> 正确用法</h3><p>**宗旨：**先获取 DOM 元素，再对 DOM 元素操作<br><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609103728000-1978281579.png" alt="" loading="lazy"></p><h3 id="错误用法" tabindex="-1"><a class="header-anchor" href="#错误用法" aria-hidden="true">#</a> 错误用法</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609103731456-1041895300.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="position-位置参数" tabindex="-1"><a class="header-anchor" href="#position-位置参数" aria-hidden="true">#</a> position 位置参数</h3><p>每个元素都有<strong>九个</strong> position，具体可看下图<br><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125642886-1334346322.png" alt="" loading="lazy"></p><h3 id="坐标-x-y" tabindex="-1"><a class="header-anchor" href="#坐标-x-y" aria-hidden="true">#</a> 坐标 x, y</h3><p>距离 DOM 元素左上角的坐标，x 是横轴，y 是竖轴</p><h3 id="options-可选参数" tabindex="-1"><a class="header-anchor" href="#options-可选参数" aria-hidden="true">#</a> options 可选参数</h3><p>共有四个<br><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610110633065-2126203965.png" alt="" loading="lazy"></p><h4 id="如何传-options" tabindex="-1"><a class="header-anchor" href="#如何传-options" aria-hidden="true">#</a> 如何传 options ？</h4><ul><li>.click({ multiple: true })</li><li>.click({ multiple: true , force: true})</li></ul><p></p><h3 id="force-true-的作用" tabindex="-1"><a class="header-anchor" href="#force-true-的作用" aria-hidden="true">#</a> force: true 的作用</h3><h4 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h4><ul><li>Cypress 可以通过 Test Runner 的快照找到阻止 DOM 元素交互的情况，但某些情况下可能会阻碍测试的进行</li><li>**比如：**有一个嵌套的导航结构，用户必须将鼠标 hover 在一个非常特定的模式中，才能拿到所需的链接</li><li>当测试时，其实我们只是想获取链接而已，前面过多的繁琐操作可能会导致测试失败</li></ul><p></p><h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h4><ul><li>当设置了 force: true 时，Cypress 会<strong>强制操作命令的发生</strong>，避开前面的所有检查</li><li>你可以传递 { force: true } 给大多数操作命令</li></ul><p></p><h4 id="栗子" tabindex="-1"><a class="header-anchor" href="#栗子" aria-hidden="true">#</a> 栗子</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 强制点击，和所有后续事件</span>
<span class="token comment">// 即使该元素 “不可操作”，也会触发点击操作</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="当使用-force-时-将执行这些操作" tabindex="-1"><a class="header-anchor" href="#当使用-force-时-将执行这些操作" aria-hidden="true">#</a> 当使用 force 时，将<strong>执行</strong>这些操作</h4><ul><li>继续执行所有默认操作</li><li>强制在元素上触发事件</li></ul><p></p><h4 id="当使用-force-时-将不会执行这些操作" tabindex="-1"><a class="header-anchor" href="#当使用-force-时-将不会执行这些操作" aria-hidden="true">#</a> 当使用 force 时，将<strong>不会执行</strong>这些操作</h4><ul><li>滚动到视图中</li><li>确保可见</li><li>确保未禁用</li><li>确保没有分离</li><li>确保它不是只读的</li><li>确保它没有动画</li><li>确保未覆盖</li><li>向后代触发事件</li></ul><p></p><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><p>总而言之， { force: true } 跳过检查，它将<strong>始终</strong>在所需元素处<strong>触发事件</strong></p><h2 id="click-具体的栗子" tabindex="-1"><a class="header-anchor" href="#click-具体的栗子" aria-hidden="true">#</a> .click() 具体的栗子</h2><h3 id="click-的栗子" tabindex="-1"><a class="header-anchor" href="#click-的栗子" aria-hidden="true">#</a> .click() 的栗子</h3><h4 id="测试文件代码" tabindex="-1"><a class="header-anchor" href="#测试文件代码" aria-hidden="true">#</a> 测试文件代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125133790-1477301722.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125136913-250315971.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="click-position" tabindex="-1"><a class="header-anchor" href="#click-position" aria-hidden="true">#</a> .click(position)</h3><h4 id="测试文件代码-1" tabindex="-1"><a class="header-anchor" href="#测试文件代码-1" aria-hidden="true">#</a> 测试文件代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125341508-232215186.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试结果-1" tabindex="-1"><a class="header-anchor" href="#测试结果-1" aria-hidden="true">#</a> 测试结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125355259-746507057.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="click-x-y" tabindex="-1"><a class="header-anchor" href="#click-x-y" aria-hidden="true">#</a> .click(x, y)</h3><h4 id="测试文件代码-2" tabindex="-1"><a class="header-anchor" href="#测试文件代码-2" aria-hidden="true">#</a> 测试文件代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125140668-1743988925.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试结果-2" tabindex="-1"><a class="header-anchor" href="#测试结果-2" aria-hidden="true">#</a> 测试结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609125155518-339061130.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="force-true-的栗子" tabindex="-1"><a class="header-anchor" href="#force-true-的栗子" aria-hidden="true">#</a> {force: true} 的栗子</h3><h4 id="click-options" tabindex="-1"><a class="header-anchor" href="#click-options" aria-hidden="true">#</a> .click(options)</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609131947286-1432317796.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="click-position-options" tabindex="-1"><a class="header-anchor" href="#click-position-options" aria-hidden="true">#</a> .click(position, options)</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609133224019-1657684599.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="click-x-y-options" tabindex="-1"><a class="header-anchor" href="#click-x-y-options" aria-hidden="true">#</a> .click(x, y, options)</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609133225843-1132896598.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="multiple-true-的栗子" tabindex="-1"><a class="header-anchor" href="#multiple-true-的栗子" aria-hidden="true">#</a> {multiple : true } 的栗子</h3><h4 id="测试文件代码-3" tabindex="-1"><a class="header-anchor" href="#测试文件代码-3" aria-hidden="true">#</a> 测试文件代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609133209902-813046454.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试结果-3" tabindex="-1"><a class="header-anchor" href="#测试结果-3" aria-hidden="true">#</a> 测试结果</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609133206635-591090008.gif" alt="" loading="lazy"><br> cy.get(&#39; ul &gt; li &#39;) 共匹配四个 DOM 元素，他们均触发单击操作</p><h3 id="单击组合键" tabindex="-1"><a class="header-anchor" href="#单击组合键" aria-hidden="true">#</a> 单击组合键</h3><p>.click() 命令还可以与 .type() 命令结合使用修饰符来触发组合键操作，以便在单击时结合键盘操作，例如ALT + click</p><h4 id="以下修饰符可以和-click-结合使用" tabindex="-1"><a class="header-anchor" href="#以下修饰符可以和-click-结合使用" aria-hidden="true">#</a> 以下修饰符可以和 .click() 结合使用</h4>`,72),d=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"修饰符"),n("th",{style:{"text-align":"left"}},"作用"),n("th",{style:{"text-align":"left"}},"别名")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"{alt}`"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}})]),n("tr",{option:""},[n("td",{style:{"text-align":"left"}},"`"),n("td",{style:{"text-align":"left"}},"等价于 alt 键"),n("td",{style:{"text-align":"left"}})]),n("tr",{control:""},[n("td",{style:{"text-align":"left"},ctrl:""}),n("td",{style:{"text-align":"left"}},"等价于 ctrl 键"),n("td",{style:{"text-align":"left"}})]),n("tr",null,[n("td",{style:{"text-align":"left"},shift:""}),n("td",{style:{"text-align":"left"}},"等价于 shift 键"),n("td",{style:{"text-align":"left"}})])])],-1),u=i(`<p></p><h4 id="栗子-1" tabindex="-1"><a class="header-anchor" href="#栗子-1" aria-hidden="true">#</a> 栗子</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609143824557-1777663242.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="dblclick" tabindex="-1"><a class="header-anchor" href="#dblclick" aria-hidden="true">#</a> .dblclick()</h2><p>双击，跟 click() 的语法 &amp; 用法一致，只是变成了<strong>双击</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;#main1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dblclick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;#main1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dblclick</span><span class="token punctuation">(</span><span class="token string">&quot;top&quot;</span><span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;#main1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dblclick</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="rightclick" tabindex="-1"><a class="header-anchor" href="#rightclick" aria-hidden="true">#</a> .rightclick()</h2><p>右键，跟 click() 的语法 &amp; 用法一致，只是变成了<strong>右键点击</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;#li1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightclick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;#li1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightclick</span><span class="token punctuation">(</span><span class="token string">&quot;top&quot;</span><span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;#li1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightclick</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="click-注意事项" tabindex="-1"><a class="header-anchor" href="#click-注意事项" aria-hidden="true">#</a> .click() 注意事项</h2><h4 id="可操作性" tabindex="-1"><a class="header-anchor" href="#可操作性" aria-hidden="true">#</a> 可操作性</h4><p>执行 .click()  必须是 DOM 元素达到了可操作状态</p><h4 id="关于断言" tabindex="-1"><a class="header-anchor" href="#关于断言" aria-hidden="true">#</a> 关于断言</h4><p>.click() 将自动等待元素达到可操作状态。<br> .click() 将自动等待后面链接的断言通过</p><h4 id="超时时间" tabindex="-1"><a class="header-anchor" href="#超时时间" aria-hidden="true">#</a> 超时时间</h4><p>.click() 如果 DOM 元素一直<strong>达不到</strong>可操作状态，可能会超时<br> .click() 如果后面链接的断言一直<strong>不通过</strong>，可能会超时</p><h2 id="click-会触发的鼠标事件" tabindex="-1"><a class="header-anchor" href="#click-会触发的鼠标事件" aria-hidden="true">#</a> .click() 会触发的鼠标事件</h2>`,19),h=n("img",{src:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610115639872-1507349703.png",alt:"",loading:"lazy"},null,-1),g=n("br",null,null,-1),k=n("br",null,null,-1),b=n("img",{src:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610115411276-1971435896.png",alt:"",loading:"lazy"},null,-1),f=n("br",null,null,-1),m=n("br",null,null,-1),x=n("strong",null,"结尾",-1),v=n("br",null,null,-1),y=n("br",null,null,-1),_={href:"https://www.cnblogs.com/poloyy/p/13052972.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.cnblogs.com/poloyy/p/13066005.html",target:"_blank",rel:"noopener noreferrer"};function q(j,w){const s=c("ExternalLinkIcon");return l(),o("div",null,[r,d,u,n("p",null,[h,g,a(" 在命令日志中单击 click 时，控制台console 将输出以下鼠标事件"),k,b,f,a("  "),m,x,v,a(" 本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解"),y,a(" 对书籍感兴趣的，大家可以参考本篇博客："),n("a",_,[a("https://www.cnblogs.com/poloyy/p/13052972.html"),t(s)]),a("，考虑自身需求进行购买")]),n("blockquote",null,[n("p",null,[n("a",z,[a("https://www.cnblogs.com/poloyy/p/13066005.html"),t(s)])])])])}const O=e(p,[["render",q],["__file","Cypress系列（18）--可操作类型的命令-之-点击命令.html.vue"]]);export{O as default};
