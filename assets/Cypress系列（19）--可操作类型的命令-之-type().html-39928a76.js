import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as i,a as n,b as e,d as t,f as s}from"./app-3f278ba4.js";const c={},p=n("h2",{id:"前端-html-代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前端-html-代码","aria-hidden":"true"},"#"),e(" 前端 html 代码")],-1),d=n("br",null,null,-1),h={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609171148942-1837716832.png",target:"_blank",rel:"noopener noreferrer"},u=s(`<h2 id="type-基础介绍" tabindex="-1"><a class="header-anchor" href="#type-基础介绍" aria-hidden="true">#</a> .type() 基础介绍</h2><p>在 DOM 元素中输入内容</p><h3 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 输入文本</span>
<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token comment">// 带参数输入文本</span>
<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="正确写法" tabindex="-1"><a class="header-anchor" href="#正确写法" aria-hidden="true">#</a> 正确写法</h3>`,6),_=n("br",null,null,-1),g={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609171237738-1944279772.png",target:"_blank",rel:"noopener noreferrer"},b=n("h3",{id:"错误写法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#错误写法","aria-hidden":"true"},"#"),e(" 错误写法")],-1),m={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609171241107-1721745842.png",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),k=s('<h2 id="type-基础的栗子" tabindex="-1"><a class="header-anchor" href="#type-基础的栗子" aria-hidden="true">#</a> .type() 基础的栗子</h2><h3 id="输入正常文本的栗子" tabindex="-1"><a class="header-anchor" href="#输入正常文本的栗子" aria-hidden="true">#</a> 输入正常文本的栗子</h3><h4 id="测试文件代码" tabindex="-1"><a class="header-anchor" href="#测试文件代码" aria-hidden="true">#</a> 测试文件代码</h4>',3),y={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609173219575-563788659.png",target:"_blank",rel:"noopener noreferrer"},v=n("h4",{id:"测试结果",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#测试结果","aria-hidden":"true"},"#"),e(" 测试结果")],-1),x={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609173222866-1028399779.png",target:"_blank",rel:"noopener noreferrer"},w=n("h3",{id:"输入特殊字符的栗子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#输入特殊字符的栗子","aria-hidden":"true"},"#"),e(" 输入特殊字符的栗子")],-1),q={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609173225917-1239039991.png",target:"_blank",rel:"noopener noreferrer"},j=n("h4",{id:"那么还支持哪些特殊字符呢",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#那么还支持哪些特殊字符呢","aria-hidden":"true"},"#"),e(" 那么还支持哪些特殊字符呢？")],-1),C={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609193136468-975790546.png",target:"_blank",rel:"noopener noreferrer"},S=n("h3",{id:"带参数输入文本的栗子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#带参数输入文本的栗子","aria-hidden":"true"},"#"),e(" 带参数输入文本的栗子")],-1),D=n("h4",{id:"有哪些参数可以传递呢",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#有哪些参数可以传递呢","aria-hidden":"true"},"#"),e(" 有哪些参数可以传递呢？")],-1),M={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609200122028-252507160.png",target:"_blank",rel:"noopener noreferrer"},N=n("h4",{id:"测试文件代码-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#测试文件代码-1","aria-hidden":"true"},"#"),e(" 测试文件代码")],-1),O={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609194902715-1711424878.png",target:"_blank",rel:"noopener noreferrer"},V=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 单个参数</span>
<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">&quot;{selectall}&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">parseSpecialCharSequences</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 多个参数</span>
<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">log</span><span class="token operator">:</span><span class="token boolean">false</span> <span class="token punctuation">,</span> <span class="token literal-property property">parseSpecialCharSequences</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="测试结果-1" tabindex="-1"><a class="header-anchor" href="#测试结果-1" aria-hidden="true">#</a> 测试结果</h4>`,3),B={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200609194839929-1370217966.png",target:"_blank",rel:"noopener noreferrer"},E=n("h2",{id:"type-更多的栗子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#type-更多的栗子","aria-hidden":"true"},"#"),e(" .type() 更多的栗子")],-1),I=n("h3",{id:"html-代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#html-代码","aria-hidden":"true"},"#"),e(" html 代码")],-1),L=n("br",null,null,-1),T={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134042073-1504155041.png",target:"_blank",rel:"noopener noreferrer"},Q=n("h3",{id:"textarea-标签的栗子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#textarea-标签的栗子","aria-hidden":"true"},"#"),e(),n("code",null,"<textarea>"),e(" 标签的栗子")],-1),z=n("h4",{id:"测试文件代码-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#测试文件代码-2","aria-hidden":"true"},"#"),e(" 测试文件代码")],-1),A={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134204256-87948926.png",target:"_blank",rel:"noopener noreferrer"},F=n("h4",{id:"测试结果-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#测试结果-2","aria-hidden":"true"},"#"),e(" 测试结果")],-1),G={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134049244-230880653.png",target:"_blank",rel:"noopener noreferrer"},H=n("h3",{id:"option-标签的栗子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#option-标签的栗子","aria-hidden":"true"},"#"),e(),n("code",null,"<option>"),e(" 标签的栗子")],-1),J=n("h4",{id:"测试文件代码-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#测试文件代码-3","aria-hidden":"true"},"#"),e(" 测试文件代码")],-1),K={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134238300-376473364.png",target:"_blank",rel:"noopener noreferrer"},P=n("h4",{id:"测试结果-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#测试结果-3","aria-hidden":"true"},"#"),e(" 测试结果")],-1),R={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134054816-1175415488.png",target:"_blank",rel:"noopener noreferrer"},U=s('<h3 id="type-时间类型的-input-标签的栗子" tabindex="-1"><a class="header-anchor" href="#type-时间类型的-input-标签的栗子" aria-hidden="true">#</a> type = 时间类型的 input 标签的栗子</h3><ul><li><code>&lt;input type=&quot;date&quot;&gt;</code></li><li><code>&lt;input type=&quot;month&quot;&gt;</code></li><li><code>&lt;input type=&quot;week&quot;&gt;</code></li><li><code>&lt;input type=&quot;time&quot;&gt;</code></li></ul><h4 id="测试文件代码-4" tabindex="-1"><a class="header-anchor" href="#测试文件代码-4" aria-hidden="true">#</a> 测试文件代码</h4>',3),W={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134308930-205439625.png",target:"_blank",rel:"noopener noreferrer"},X=n("h4",{id:"测试结果-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#测试结果-4","aria-hidden":"true"},"#"),e(" 测试结果")],-1),Y={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610134140485-1651870715.png",target:"_blank",rel:"noopener noreferrer"},Z=n("h2",{id:"type-结合键盘键的栗子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#type-结合键盘键的栗子","aria-hidden":"true"},"#"),e(),n("code",null,".type()"),e(" 结合键盘键的栗子")],-1),$=n("p",null,"继续以上面栗子的 html 页面为基础",-1),nn=n("h4",{id:"有哪些键盘架可以结合呢",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#有哪些键盘架可以结合呢","aria-hidden":"true"},"#"),e(" 有哪些键盘架可以结合呢？")],-1),en=n("ul",null,[n("li",{alt:""}),n("li",{shift:""}),n("li",{ctrl:""})],-1),an=s(`<p></p><h4 id="具体用法" tabindex="-1"><a class="header-anchor" href="#具体用法" aria-hidden="true">#</a> 具体用法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 等同于按 shift + alt + q</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">&#39;{shift}{alt}Q&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 按住 shift，然后输入 test</span>
cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">&#39;{shift}test&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说实话，我试过感觉没生效啊，按道理按住 shift 键输入内容应该是大写的，但是实际还是小写，后面再研究一波**（感觉有点鸡肋，实际场景比较少用到又要按键盘又要输入内容，了解即可）**</p><h2 id="type-支持哪些元素调用" tabindex="-1"><a class="header-anchor" href="#type-支持哪些元素调用" aria-hidden="true">#</a> .type() 支持哪些元素调用</h2><p><code>&lt;body&gt;</code><br><code>&lt;textarea&gt;</code><br><code>&lt;input&gt;</code> 标签，且 type 属性是以下其中一个</p><ul><li>text</li><li>password</li><li>email</li><li>number</li><li>date</li><li>week</li><li>month</li><li>time</li><li>datetime-local</li><li>search</li><li>url</li><li>tel</li></ul><p></p><h2 id="type-会触发的事件-event" tabindex="-1"><a class="header-anchor" href="#type-会触发的事件-event" aria-hidden="true">#</a> .type() 会触发的事件 event</h2>`,9),tn={href:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200610143748486-1171943451.png",target:"_blank",rel:"noopener noreferrer"},sn=n("br",null,null,-1),on=n("strong",null,"特殊字符、键盘键",-1),rn=n("br",null,null,-1),ln=n("strong",null,"内容字符",-1),cn=n("ol",null,[n("li",null,"keydown"),n("li",null,"keypress"),n("li",null,"textInput"),n("li",null,"input"),n("li",null,"keyup")],-1),pn=n("strong",null,"结尾",-1),dn=n("br",null,null,-1),hn=n("br",null,null,-1),un={href:"https://www.cnblogs.com/poloyy/p/13052972.html",target:"_blank",rel:"noopener noreferrer"},_n={href:"https://www.cnblogs.com/poloyy/p/13066011.html",target:"_blank",rel:"noopener noreferrer"};function gn(bn,mn){const a=r("ExternalLinkIcon");return l(),i("div",null,[p,n("p",null,[e("后面栗子主要以这个页面为主哦"),d,n("a",h,[t(a)])]),u,n("p",null,[e("**宗旨：**先获取 DOM 元素，再对 DOM 元素进行 type 操作"),_,n("a",g,[t(a)])]),b,n("p",null,[n("a",m,[t(a)]),f,e(" 调用 type() 命令的都不是 DOM 元素，所以错误！")]),k,n("p",null,[n("a",y,[t(a)])]),v,n("p",null,[n("a",x,[t(a)])]),w,n("p",null,[n("a",q,[t(a)])]),j,n("p",null,[n("a",C,[t(a)])]),S,D,n("p",null,[n("a",M,[t(a)])]),N,n("p",null,[n("a",O,[t(a)])]),V,n("p",null,[n("a",B,[t(a)])]),E,I,n("p",null,[e("下面举的栗子以这个 html 页面的元素为基础哦"),L,n("a",T,[t(a)])]),Q,z,n("p",null,[n("a",A,[t(a)])]),F,n("p",null,[n("a",G,[t(a)])]),H,J,n("p",null,[n("a",K,[t(a)])]),P,n("p",null,[n("a",R,[t(a)])]),U,n("p",null,[n("a",W,[t(a)])]),X,n("p",null,[n("a",Y,[t(a)])]),Z,$,nn,en,an,n("p",null,[n("a",tn,[t(a)]),sn,e(" 当传入了"),on,e("时，只触发了 keydown 事件"),rn,e(" 当传入了"),ln,e("时，每个字符都会触发一系列的事件")]),cn,n("p",null,[pn,dn,e(" 本文是博主基于对蔡超老师的《Cypress 从入门到精通》阅读理解完后输出的博文，并附上了自己的理解"),hn,e(" 对书籍感兴趣的，大家可以参考本篇博客："),n("a",un,[e("https://www.cnblogs.com/poloyy/p/13052972.html"),t(a)]),e("，考虑自身需求进行购买")]),n("blockquote",null,[n("p",null,[n("a",_n,[e("https://www.cnblogs.com/poloyy/p/13066011.html"),t(a)])])])])}const yn=o(c,[["render",gn],["__file","Cypress系列（19）--可操作类型的命令-之-type().html.vue"]]);export{yn as default};
