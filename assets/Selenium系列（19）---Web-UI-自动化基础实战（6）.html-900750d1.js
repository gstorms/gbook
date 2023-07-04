import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as n,b as s,d as t,f as l}from"./app-d0fb0332.js";const c={},u=n("p",null,[n("strong",null,"注意，目前的实战都是流水账式写的，后面才会结合框架+PO模式"),n("br"),n("strong",null,"目的是为了掌握所学的Selenium基础")],-1),r=n("h2",{id:"实战题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实战题目","aria-hidden":"true"},"#"),s(" 实战题目")],-1),d={href:"https://www.vmall.com/",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,"获取一级菜单下包含哪些二级菜单，不包含查看全部",-1),v=n("li",null,"然后获取下面，热销单品中所有 顶部 带有 爆款字样的产品名称及价格",-1),m=l(`<p><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404161251385-1078085909.png" alt="" loading="lazy"><br><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404161309032-1166720637.png" alt="" loading="lazy"></p><h2 id="代码思路-人为测试时的操作步骤" tabindex="-1"><a class="header-anchor" href="#代码思路-人为测试时的操作步骤" aria-hidden="true">#</a> 代码思路（人为测试时的操作步骤）</h2><ol><li>定位一级菜单的选项列表</li><li>循环列表，每次都将鼠标悬浮在当前选项上，然后打印二级菜单的列表</li><li>热销单品在页面下方，需要滑动页面</li><li>定位热销单品列表</li><li>循环，获取标题和价格，打印爆款</li></ol><p></p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  = 
__Time__   = 2020/4/2 20:04
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep

<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>by <span class="token keyword">import</span> By
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support <span class="token keyword">import</span> expected_conditions <span class="token keyword">as</span> ec
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support<span class="token punctuation">.</span>wait <span class="token keyword">import</span> WebDriverWait
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>action_chains <span class="token keyword">import</span> ActionChains

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>
action <span class="token operator">=</span> ActionChains<span class="token punctuation">(</span>driver<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">wait_element</span><span class="token punctuation">(</span>by_<span class="token punctuation">,</span> element_<span class="token punctuation">)</span><span class="token punctuation">:</span>
    element <span class="token operator">=</span> WebDriverWait<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span>until<span class="token punctuation">(</span>
        ec<span class="token punctuation">.</span>presence_of_element_located<span class="token punctuation">(</span><span class="token punctuation">(</span>by_<span class="token punctuation">,</span> element_<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> element


<span class="token keyword">def</span> <span class="token function">wait_elements</span><span class="token punctuation">(</span>by_<span class="token punctuation">,</span> element_<span class="token punctuation">)</span><span class="token punctuation">:</span>
    element <span class="token operator">=</span> WebDriverWait<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span>until<span class="token punctuation">(</span>
        ec<span class="token punctuation">.</span>presence_of_all_elements_located<span class="token punctuation">(</span><span class="token punctuation">(</span>by_<span class="token punctuation">,</span> element_<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> element


<span class="token comment"># 打开网站</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://www.vmall.com/&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 列表</span>
lists <span class="token operator">=</span> wait_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> <span class="token string">&#39;//div[@id=&quot;category-block&quot;]/div/ol/li&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> one <span class="token keyword">in</span> lists<span class="token punctuation">:</span>
    one_v <span class="token operator">=</span> one<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span><span class="token string">&quot;./input[2]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;一级菜单：</span><span class="token interpolation"><span class="token punctuation">{</span>one_v<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token comment"># hover</span>
    action<span class="token punctuation">.</span>move_to_element<span class="token punctuation">(</span>one<span class="token punctuation">)</span><span class="token punctuation">.</span>perform<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># hover出来的面板</span>
    items <span class="token operator">=</span> one<span class="token punctuation">.</span>find_elements_by_xpath<span class="token punctuation">(</span><span class="token string">&#39;./div[contains(@class,&quot;category-panels&quot;)]/ul/li[@class=&quot;subcate-item&quot;]&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> item <span class="token keyword">in</span> items<span class="token punctuation">:</span>
        value <span class="token operator">=</span> item<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span><span class="token string">&#39;./input[1]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;\\t</span><span class="token interpolation"><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 往下滚动1000px</span>
js <span class="token operator">=</span> <span class="token string">&quot;document.documentElement.scrollTop = 1000&quot;</span>
driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span>js<span class="token punctuation">)</span>

<span class="token comment"># 打印爆款</span>
hot_lists <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements_by_xpath<span class="token punctuation">(</span>
    <span class="token string">&#39;//div[contains(@class,&quot;home-hot-goods&quot;)]//ul[@class=&quot;grid-list clearfix&quot;]/li&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> hot <span class="token keyword">in</span> hot_lists<span class="token punctuation">:</span>
    title <span class="token operator">=</span> hot<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span><span class="token string">&#39;./a/div[@class=&quot;grid-title&quot;]&#39;</span><span class="token punctuation">)</span>
    price <span class="token operator">=</span> hot<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span><span class="token string">&#39;./a/p[@class=&quot;grid-price&quot;]&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;爆款：</span><span class="token interpolation"><span class="token punctuation">{</span>title<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span><span class="token string">, 价格：</span><span class="token interpolation"><span class="token punctuation">{</span>price<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>`,7),b={href:"https://www.cnblogs.com/poloyy/p/12632293.html",target:"_blank",rel:"noopener noreferrer"};function _(h,g){const a=p("ExternalLinkIcon");return o(),i("div",null,[u,r,n("ol",null,[n("li",null,[s("访问: "),n("a",d,[s("https://www.vmall.com/"),t(a)])]),k,v]),m,n("blockquote",null,[n("p",null,[s("转载： "),n("a",b,[s("https://www.cnblogs.com/poloyy/p/12632293.html"),t(a)])])])])}const f=e(c,[["render",_],["__file","Selenium系列（19）---Web-UI-自动化基础实战（6）.html.vue"]]);export{f as default};
