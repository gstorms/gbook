import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,a as n,b as s,d as e,f as p}from"./app-cfbf85c1.js";const c={},u=n("h2",{id:"实战题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实战题目","aria-hidden":"true"},"#"),s(" 实战题目")],-1),r={href:"https://www.toutiao.com/",target:"_blank",rel:"noopener noreferrer"},d=n("li",null,"获取到下图所有黑框里的内容并打印出来",-1),m=p(`<figure><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404140109518-2015769824.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="代码思路-人为测试时的操作步骤" tabindex="-1"><a class="header-anchor" href="#代码思路-人为测试时的操作步骤" aria-hidden="true">#</a> 代码思路（人为测试时的操作步骤）</h2><ol><li>找到列表，循环列表，打印文本</li><li>鼠标悬浮到【更多】</li><li>待悬浮窗口可见时，获取窗口内的列表</li><li>循环列表，打印文本</li></ol><p></p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  = 
__Time__   = 2020/3/27 14:35
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver <span class="token keyword">import</span> ActionChains

<span class="token comment"># 需要将驱动路径改成自己的路径哦</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>
chains <span class="token operator">=</span> ActionChains<span class="token punctuation">(</span>driver<span class="token punctuation">)</span>

<span class="token comment"># 打开头条</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://www.toutiao.com/&quot;</span><span class="token punctuation">)</span>

driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 找到外层</span>
channel <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;div.bui-left.index-channel&gt;div&gt;div&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 找到元素列表</span>
lis <span class="token operator">=</span> channel<span class="token punctuation">.</span>find_elements_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;ul &gt; li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">13</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;==第一次打印列表==&quot;</span><span class="token punctuation">)</span>
more <span class="token operator">=</span> <span class="token boolean">None</span>
<span class="token keyword">for</span> li <span class="token keyword">in</span> lis<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>li<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    more <span class="token operator">=</span> li
<span class="token comment"># hover</span>
chains<span class="token punctuation">.</span>move_to_element<span class="token punctuation">(</span>more<span class="token punctuation">)</span><span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 找到更多hover层窗口</span>
layer <span class="token operator">=</span> more<span class="token punctuation">.</span>find_element_by_class_name<span class="token punctuation">(</span><span class="token string">&quot;channel-more-layer&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 如果可见</span>
<span class="token keyword">if</span> layer<span class="token punctuation">.</span>is_displayed<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    lis <span class="token operator">=</span> layer<span class="token punctuation">.</span>find_elements_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;ul &gt; li&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;==第二次打印列表==&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> li <span class="token keyword">in</span> lis<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>li<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v={href:"https://www.cnblogs.com/poloyy/p/12631620.html",target:"_blank",rel:"noopener noreferrer"};function k(_,b){const a=o("ExternalLinkIcon");return i(),l("div",null,[u,n("ol",null,[n("li",null,[s("访问："),n("a",r,[s("https://www.toutiao.com/"),e(a)])]),d]),m,n("blockquote",null,[n("p",null,[s("转载："),n("a",v,[s("https://www.cnblogs.com/poloyy/p/12631620.html"),e(a)])])])])}const w=t(c,[["render",k],["__file","Selenium系列（15）---Web-UI-自动化基础实战（2）.html.vue"]]);export{w as default};
