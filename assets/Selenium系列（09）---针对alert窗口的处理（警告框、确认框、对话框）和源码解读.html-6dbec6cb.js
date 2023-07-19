import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c,a as n,b as s,d as l,f as o}from"./app-731a6e06.js";const i={},u=o(`<h2 id="首先-将下面html代码保存到一个文件中" tabindex="-1"><a class="header-anchor" href="#首先-将下面html代码保存到一个文件中" aria-hidden="true">#</a> <strong>首先，将下面html代码保存到一个文件中</strong></h2><p>后续的代码小案例都是访问此html的</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>警告框处理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">function</span> <span class="token function">duihua</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;这个窗口是对话框！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;你点击了确认&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">function</span> <span class="token function">queren</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> se <span class="token operator">=</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&quot;确认框!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>se <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;你点击了确认1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;你点击了取消1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">function</span> <span class="token function">tishi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> se <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您的反馈意见&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;测试&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>se <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;你点击了确认2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;你点击了取消2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
<span class="token comment">//            if (t != null &amp;&amp; t != &quot;&quot;) {</span>
<span class="token comment">//                document.write(&quot;刷新回到初始界面&quot;)</span>
<span class="token comment">//            }</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
            dom<span class="token punctuation">.</span>innerText <span class="token operator">=</span> text
            document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bu1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">duihua</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>点击显示对话框<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bu2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">queren</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>点击显示确认框<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bu3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">tishi</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>点击显示提示框<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="alert窗口的类型" tabindex="-1"><a class="header-anchor" href="#alert窗口的类型" aria-hidden="true">#</a> alert窗口的类型</h2><ul><li>警告框</li><li>确认框</li><li>对话框</li></ul><h3 id="警告框" tabindex="-1"><a class="header-anchor" href="#警告框" aria-hidden="true">#</a> 警告框</h3><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="https://img2020.cnblogs.com/blog/1896874/202003/1896874-20200330191645384-273099975.png" alt="" loading="lazy"></h3><p></p><h3 id="确认框" tabindex="-1"><a class="header-anchor" href="#确认框" aria-hidden="true">#</a> 确认框</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202003/1896874-20200330191654993-47935397.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="对话框" tabindex="-1"><a class="header-anchor" href="#对话框" aria-hidden="true">#</a> 对话框</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202003/1896874-20200330191703244-948506019.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="操作alert窗口" tabindex="-1"><a class="header-anchor" href="#操作alert窗口" aria-hidden="true">#</a> 操作alert窗口</h1><ul><li>切换至alert窗口</li><li>获取alert窗口的值</li><li>确定</li><li>取消</li><li>输入值</li></ul><p></p><h2 id="警告框的栗子" tabindex="-1"><a class="header-anchor" href="#警告框的栗子" aria-hidden="true">#</a> 警告框的栗子</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># !/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  =
__Time__   = 2020/3/25 17:52
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>

<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># html文件路径需要自己替换哦</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;file:///C:/警告框.html&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 警告框</span>
alert1 <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;bu1&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 先点击，得先弹出警告框</span>
alert1<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 切换至警告框</span>
alert1 <span class="token operator">=</span> driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>alert

<span class="token comment"># 获取alert窗口的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>alert1<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

<span class="token comment"># 点击 确定</span>
alert1<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="确认框的栗子" tabindex="-1"><a class="header-anchor" href="#确认框的栗子" aria-hidden="true">#</a> 确认框的栗子</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>alert2 <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;bu2&quot;</span><span class="token punctuation">)</span>
alert2<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 切换至对话框</span>
alert2_ <span class="token operator">=</span> driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>alert

<span class="token comment"># 获取窗口值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>alert2_<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

<span class="token comment"># 点击 取消</span>
alert2_<span class="token punctuation">.</span>dismiss<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 点击 确认</span>
<span class="token comment"># alert2_.accept()</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="对话框的栗子" tabindex="-1"><a class="header-anchor" href="#对话框的栗子" aria-hidden="true">#</a> 对话框的栗子</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>alert3 <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;bu3&quot;</span><span class="token punctuation">)</span>
alert3<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 切换至对话框</span>
alert3_ <span class="token operator">=</span> driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>alert

<span class="token comment"># 获取窗口值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>alert3_<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

<span class="token comment"># 输入值到对话框中</span>
alert3_<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;输入对话框&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 点击 确认</span>
alert2_<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="switch-to-alert源码解读" tabindex="-1"><a class="header-anchor" href="#switch-to-alert源码解读" aria-hidden="true">#</a> switch_to.alert源码解读</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">alert</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Switches focus to an alert on the page.

        :Usage:
            alert = driver.switch_to.alert
        &quot;&quot;&quot;</span>
        alert <span class="token operator">=</span> Alert<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_driver<span class="token punctuation">)</span>
        alert<span class="token punctuation">.</span>text
        <span class="token keyword">return</span> alert

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h3><ul><li>alert是一个属性，不是一个方法</li><li>最终返回一个 Alert 实例，所以我们需要有变量去接住它，后续通过这个变量去操作alert窗口</li><li>操作alert窗口的方法都 Alert 的方法</li></ul><p></p>`,30),r={href:"https://www.cnblogs.com/poloyy/p/12600700.html",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const a=p("ExternalLinkIcon");return e(),c("div",null,[u,n("blockquote",null,[n("p",null,[s("转载： "),n("a",r,[s("https://www.cnblogs.com/poloyy/p/12600700.html"),l(a)])])])])}const g=t(i,[["render",d],["__file","Selenium系列（09）---针对alert窗口的处理（警告框、确认框、对话框）和源码解读.html.vue"]]);export{g as default};
