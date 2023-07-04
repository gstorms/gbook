import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as l,a as n,b as s,d as o,f as c}from"./app-d0fb0332.js";const i={},u=c(`<h2 id="保存iframe-html到本地" tabindex="-1"><a class="header-anchor" href="#保存iframe-html到本地" aria-hidden="true">#</a> 保存iframe.html到本地</h2><p>后面代码针对此简单页面写小案例</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>你好，小菠萝测试笔记<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iframe1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300px<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>80%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.cnblogs.com/poloyy/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>out<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>访问小菠萝测试笔记<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="iframe操作有哪些" tabindex="-1"><a class="header-anchor" href="#iframe操作有哪些" aria-hidden="true">#</a> iframe操作有哪些？</h2><ul><li>切换到iframe</li><li>切换回主页面</li></ul><p>比较简单，不展开讲了<sub>就两个方法而已</sub>直接看代码啦！</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># !/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  =
__Time__   = 2020/3/25 17:52
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>

<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

<span class="token comment"># 加载驱动，路径自己配置</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># html页面路径需要自己配置</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
    <span class="token string">&quot;file:///F:/iframe.html&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 找到iframe元素</span>
iframe1 <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;iframe1&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># ===切换至iframe===</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>frame<span class="token punctuation">(</span>iframe1<span class="token punctuation">)</span>

<span class="token comment"># 找到iframe中页面的元素</span>
<span class="token comment"># 找到搜索框</span>
inputElement <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 输入搜索内容</span>
inputElement<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;小菠萝测试笔记&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 找到搜索按钮</span>
searchElement <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;su&quot;</span><span class="token punctuation">)</span>

searchElement<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># ===切换回主页面===</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>default_content<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 点击主页面元素</span>
driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;out&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><p>WebDriver是提供了 driver.switch_to_frame()、driver.switch_to_default_content() 这两个方法的，和上面说的效果一样，<strong>只是这个已经过时了，不建议用！</strong><br> **</p>`,10),r={href:"https://www.cnblogs.com/poloyy/p/12592549.html",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=e("ExternalLinkIcon");return p(),l("div",null,[u,n("blockquote",null,[n("p",null,[s("转载："),n("a",r,[s("https://www.cnblogs.com/poloyy/p/12592549.html"),o(a)])])])])}const g=t(i,[["render",d],["__file","Selenium系列（07）---切换iframe.html.vue"]]);export{g as default};
