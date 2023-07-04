import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as p,a as n,b as s,d as l,f as c}from"./app-d0fb0332.js";const o={},u=c(`<h2 id="有什么键盘操作" tabindex="-1"><a class="header-anchor" href="#有什么键盘操作" aria-hidden="true">#</a> 有什么键盘操作？</h2><ul><li>删除键</li><li>空格键</li><li>制表键</li><li>回退键</li><li>回车键</li><li>全选</li><li>复制</li><li>剪切</li><li>粘贴</li><li>F1-F12</li><li>......其实就是所有键盘都能模拟，包括alt、shift、insert、delete、home等等等...这里就不举例了，看源码很容易懂</li></ul><p></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  = 
__Time__   = 2020/3/27 20:33
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep

<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>keys <span class="token keyword">import</span> Keys

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 访问网址</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 找到搜索框</span>
inputElement <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 输入搜索内容</span>
inputElement<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;小菠萝测试笔记&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># ctrl+a全选</span>
inputElement<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL<span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># ctrl+c 复制输入框内容</span>
inputElement<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL<span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># ctrl+x 剪切输入框内容</span>
inputElement<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL<span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># ctrl+v 粘贴输入框内容</span>
inputElement<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>CONTROL<span class="token punctuation">,</span> <span class="token string">&#39;v&#39;</span><span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 空格键</span>
inputElement<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>SPACE<span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 后退键</span>
inputElement<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>BACKSPACE<span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># tab键</span>
inputElement<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>TAB<span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 回车键</span>
inputElement<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>ENTER<span class="token punctuation">)</span>

<span class="token comment"># 刷新页面</span>
inputElement<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span>Keys<span class="token punctuation">.</span>F5<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h3><p>若要看还有什么操作，直接ctrl+点击 Keys 就能查看源码啦</p>`,7),d={href:"https://www.cnblogs.com/poloyy/p/12586940.html",target:"_blank",rel:"noopener noreferrer"};function r(m,v){const a=t("ExternalLinkIcon");return i(),p("div",null,[u,n("blockquote",null,[n("p",null,[s("转载： "),n("a",d,[s("https://www.cnblogs.com/poloyy/p/12586940.html"),l(a)])])])])}const _=e(o,[["render",r],["__file","Selenium系列（05）---详细解读键盘操作.html.vue"]]);export{_ as default};
