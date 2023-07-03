import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,b as s,d as c,f as i}from"./app-207e7d61.js";const l={},u=i(`<h2 id="首先-将下面html代码保存到一个文件中" tabindex="-1"><a class="header-anchor" href="#首先-将下面html代码保存到一个文件中" aria-hidden="true">#</a> 首先，将下面html代码保存到一个文件中</h2><p>后续<strong>第一种上传文件方式</strong>的代码小案例都是访问此html的</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pic<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pic<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="方式一-input标签上传文件" tabindex="-1"><a class="header-anchor" href="#方式一-input标签上传文件" aria-hidden="true">#</a> 方式一：input标签上传文件</h2><p>比较简单，可以定位input标签后，直接 .send_keys() 就可以了</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># !/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  =
__Time__   = 2020/3/25 17:52
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 需要自己修改路径</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;file:///C://上传文件.html&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 定位上传文件元素input[type=file]</span>
pic <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;pic&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 上传文件</span>
pic<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">r&quot;C:/上传文件.html&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方式二-非input标签上传文件" tabindex="-1"><a class="header-anchor" href="#方式二-非input标签上传文件" aria-hidden="true">#</a> 方式二：非input标签上传文件</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 打开上传网站</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://tinypng.com/&quot;</span><span class="token punctuation">)</span>
paths <span class="token operator">=</span> Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>parent

<span class="token comment"># 触发文件上传的操作</span>
driver<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;section.target&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># 一级顶层窗口</span>
dialog <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>FindWindow<span class="token punctuation">(</span><span class="token string">&quot;#32770&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;打开&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 二级窗口</span>
comboBoxEx32 <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>FindWindowEx<span class="token punctuation">(</span>dialog<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;ComboBoxEx32&quot;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>

<span class="token comment"># 三级窗口</span>
comboBox <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>FindWindowEx<span class="token punctuation">(</span>comboBoxEx32<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;ComboBox&quot;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>

<span class="token comment"># 四级窗口 -- 文件路径输入区域</span>
edit <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>FindWindowEx<span class="token punctuation">(</span>comboBox<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;Edit&quot;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>

<span class="token comment"># 二级窗口 -- 打开按钮</span>
button <span class="token operator">=</span> win32gui<span class="token punctuation">.</span>FindWindowEx<span class="token punctuation">(</span>dialog<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;Button&quot;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>

<span class="token comment"># 1、输入文件路径</span>
filepath <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>paths<span class="token punctuation">}</span></span><span class="token string">\\\\resources\\\\11.png&quot;</span></span>
win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>edit<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>WM_SETTEXT<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> filepath<span class="token punctuation">)</span>

<span class="token comment"># 2、点击打开按钮</span>
win32gui<span class="token punctuation">.</span>SendMessage<span class="token punctuation">(</span>dialog<span class="token punctuation">,</span> win32con<span class="token punctuation">.</span>WM_COMMAND<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> button<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个是写死的方法，直接照搬即可，因为涉及了第三方工具去定位Window元素，暂时不展开详解</p>`,10),d={href:"https://www.cnblogs.com/poloyy/p/12607930.html",target:"_blank",rel:"noopener noreferrer"};function r(k,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("blockquote",null,[n("p",null,[s("转载： "),n("a",d,[s("https://www.cnblogs.com/poloyy/p/12607930.html"),c(a)])])])])}const g=t(l,[["render",r],["__file","Selenium系列（11）---针对两种上传文件方式的实现方案.html.vue"]]);export{g as default};
