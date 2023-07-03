import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as n,b as s,d as t,f as l}from"./app-3f278ba4.js";const c={},u=n("h2",{id:"实战题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实战题目","aria-hidden":"true"},"#"),s(),n("strong",null,"实战题目")],-1),r={href:"https://m.weibo.cn/",target:"_blank",rel:"noopener noreferrer"},d=n("li",null,"点击：大家都在搜",-1),k=n("li",null,"点击：微博热搜榜",-1),m=n("li",null,"找到：实时热点，每分钟更新一次",-1),v=n("li",null,"将其中带有 热、沸、新字样的热搜信息获取到，并注明属于三种当中的哪一种",-1),_=l(`<p><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404103836177-637854191.png" alt="" loading="lazy"><br><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404104020048-1095324090.png" alt="" loading="lazy"></p><h2 id="代码思路-人为测试时的操作步骤" tabindex="-1"><a class="header-anchor" href="#代码思路-人为测试时的操作步骤" aria-hidden="true">#</a> 代码思路（人为测试时的操作步骤）</h2><p>主要是第五步可能会有点困难</p><ol><li>首先，定位到热点列表</li><li>循环，先获取热点文本</li><li>然后，后面的图标都是在放在 span 标签里面的，所以要获取span标签</li><li>最后，获取 img 标签，通过图片路径 src 属性判断是属于哪种热点新闻</li></ol><p></p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  = 
__Time__   = 2020/3/25 14:08
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep

<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

<span class="token comment"># 需要将驱动路径改成自己的路径哦</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>executable_path<span class="token operator">=</span><span class="token string">r&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>

url <span class="token operator">=</span> <span class="token string">&quot;https://m.weibo.cn/&quot;</span>

driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>

<span class="token comment"># 点击搜索框</span>
driver<span class="token punctuation">.</span>find_element_by_class_name<span class="token punctuation">(</span><span class="token string">&quot;m-search&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment"># 点击【微博实时搜索】</span>
driver<span class="token punctuation">.</span>find_element_by_class_name<span class="token punctuation">(</span><span class="token string">&quot;card-main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find_elements_by_class_name<span class="token punctuation">(</span><span class="token string">&quot;m-item-box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment"># 查找list</span>
lists <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element_by_class_name<span class="token punctuation">(</span><span class="token string">&quot;card11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find_element_by_class_name<span class="token punctuation">(</span><span class="token string">&quot;card-list&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find_elements_by_class_name<span class="token punctuation">(</span><span class="token string">&quot;card4&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 循环热搜列表</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> lists<span class="token punctuation">:</span>
    text <span class="token operator">=</span> i<span class="token punctuation">.</span>find_element_by_class_name<span class="token punctuation">(</span><span class="token string">&quot;main-text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text
    span <span class="token operator">=</span> i<span class="token punctuation">.</span>find_elements_by_class_name<span class="token punctuation">(</span><span class="token string">&quot;m-link-icon&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> span<span class="token punctuation">:</span>
        src <span class="token operator">=</span> span<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>find_element_by_tag_name<span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token string">&quot;hot&quot;</span> <span class="token keyword">in</span> src<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span><span class="token string"> 是 很热的头条&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> <span class="token string">&quot;new&quot;</span> <span class="token keyword">in</span> src<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span><span class="token string"> 是 新的头条&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> <span class="token string">&quot;fei&quot;</span> <span class="token keyword">in</span> src<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span><span class="token string"> 是 沸腾的头条&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> <span class="token string">&quot;recom&quot;</span> <span class="token keyword">in</span> src<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span><span class="token string"> 是 推荐的头条&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span><span class="token string"> 是 普通的头条&quot;</span></span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),b={href:"https://www.cnblogs.com/poloyy/p/12630752.html",target:"_blank",rel:"noopener noreferrer"};function g(h,q){const a=p("ExternalLinkIcon");return o(),i("div",null,[u,n("ol",null,[n("li",null,[s("访问："),n("a",r,[s("https://m.weibo.cn/"),t(a)])]),d,k,m,v]),_,n("blockquote",null,[n("p",null,[s("转载： "),n("a",b,[s("https://www.cnblogs.com/poloyy/p/12630752.html"),t(a)])])])])}const w=e(c,[["render",g],["__file","Selenium系列（14）---Web-UI-自动化基础实战（1）.html.vue"]]);export{w as default};
