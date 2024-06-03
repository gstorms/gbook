import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as o,a as n,b as s,d as l,f as c}from"./app-cfbf85c1.js";const p={},r=c(`<h2 id="截图操作" tabindex="-1"><a class="header-anchor" href="#截图操作" aria-hidden="true">#</a> <strong>截图操作</strong></h2><ul><li>截取整个页面</li><li>截取指定元素</li></ul><p>只有两个方法，比较简单，直接上代码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># !/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  =
__Time__   = 2020/3/25 17:52
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>

<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>

driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 截取整个页面</span>
driver<span class="token punctuation">.</span>get_screenshot_as_file<span class="token punctuation">(</span><span class="token string">&quot;test.png&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>save_screenshot<span class="token punctuation">(</span><span class="token string">&quot;tests.png&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 找到搜索框</span>
inputElement <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 截取搜索框元素</span>
inputElement<span class="token punctuation">.</span>screenshot<span class="token punctuation">(</span><span class="token string">&quot;inputElement.png&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h3><ul><li>get_screenshot_as_file()、save_screenshot() 效果一样， save_screenshot() 最终调用的函数就是前者</li><li>后缀名建议写 .png ，否则会有Warning提示</li></ul>`,6),u={href:"https://www.cnblogs.com/poloyy/p/12592745.html",target:"_blank",rel:"noopener noreferrer"};function d(v,_){const e=t("ExternalLinkIcon");return i(),o("div",null,[r,n("blockquote",null,[n("p",null,[s("转载： "),n("a",u,[s("https://www.cnblogs.com/poloyy/p/12592745.html"),l(e)])])])])}const b=a(p,[["render",d],["__file","Selenium系列（08）---截取完整页面和截取指定元素并保存为图片.html.vue"]]);export{b as default};
