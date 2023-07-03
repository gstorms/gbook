import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as n,b as s,d as t,f as c}from"./app-3f278ba4.js";const l={},u=n("h2",{id:"实战题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实战题目","aria-hidden":"true"},"#"),s(" 实战题目")],-1),r={href:"https://kyfw.12306.cn/otn/leftTicket/init",target:"_blank",rel:"noopener noreferrer"},d=n("li",null,"出发城市 填写 ‘南京南’， 到达城市 填写 ‘杭州东'",-1),k=n("li",null,"发车时间 选 06:00--12:00",-1),m=n("li",null,"发车日期选当前时间的下一天，也就是日期标签栏的，第二个标签",-1),v=n("li",null,"我们要查找的是所有 二等座还有票的车次，打印出这些有票的车次的信息，结果如下：",-1),b=c(`<p>G7641<br> G1505<br> G7393<br> G7689<br><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404155242213-448029833.png" alt="" loading="lazy"></p><h2 id="代码思路-人为测试时的操作步骤" tabindex="-1"><a class="header-anchor" href="#代码思路-人为测试时的操作步骤" aria-hidden="true">#</a> 代码思路（人为测试时的操作步骤）</h2><ol><li>点击【出发城市】，输入并点击南京南</li><li>点击【到达城市】，输入并点击杭州东</li><li>选择发车时间 06:00--12:00</li><li>选择第二个日期标签</li><li>获取到车次列表</li><li>循环列表，获取车次号和二等座那一列的数据</li><li>正则匹配是否有坐</li><li>输出车次号</li></ol><p></p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  =
__Time__   = 2020-03-31 21:30
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> re
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support<span class="token punctuation">.</span>select <span class="token keyword">import</span> Select
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>by <span class="token keyword">import</span> By
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support <span class="token keyword">import</span> expected_conditions <span class="token keyword">as</span> ec
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support<span class="token punctuation">.</span>wait <span class="token keyword">import</span> WebDriverWait

driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>


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
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://kyfw.12306.cn/otn/leftTicket/init&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 出发城市 填写 ‘南京南’，</span>
from_ <span class="token operator">=</span> wait_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;input#fromStationText&quot;</span><span class="token punctuation">)</span>
from_<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
from_<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;南京南&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 选择南京南</span>
driver<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;div#citem_0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 到达城市 填写 ‘杭州东’</span>
to <span class="token operator">=</span> wait_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;input#toStationText&quot;</span><span class="token punctuation">)</span>
to<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
to<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;杭州东&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 选择杭州东</span>
driver<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;div#citem_0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 发车时间 选 06:00--12:00</span>
select <span class="token operator">=</span> Select<span class="token punctuation">(</span>driver<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;select#cc_start_time&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 选择</span>
select<span class="token punctuation">.</span>select_by_visible_text<span class="token punctuation">(</span><span class="token string">&quot;06:00--12:00&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 发车日期选当前时间的下一天，也就是日期标签栏的，第二个标签</span>
date_range <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_elements_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;div#date_range&gt;ul&gt;li&quot;</span><span class="token punctuation">)</span>
date_range<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 数据列表</span>
lists <span class="token operator">=</span> wait_elements<span class="token punctuation">(</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;tbody#queryLeftTable&gt;tr&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>lists<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#  循环数据</span>
<span class="token keyword">for</span> data <span class="token keyword">in</span> lists<span class="token punctuation">:</span>
    number <span class="token operator">=</span> data<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;td&gt;div&gt;div.train a.number&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text
    two <span class="token operator">=</span> data<span class="token punctuation">.</span>find_elements_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;td&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text
    <span class="token keyword">if</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&quot;有|\\d+&quot;</span><span class="token punctuation">,</span> two<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>`,7),_={href:"https://www.cnblogs.com/poloyy/p/12632138.html",target:"_blank",rel:"noopener noreferrer"};function y(w,f){const a=p("ExternalLinkIcon");return o(),i("div",null,[u,n("ol",null,[n("li",null,[s("打开 12306 网站 "),n("a",r,[s("https://kyfw.12306.cn/otn/leftTicket/init"),t(a)])]),d,k,m,v]),b,n("blockquote",null,[n("p",null,[s("转载："),n("a",_,[s("https://www.cnblogs.com/poloyy/p/12632138.html"),t(a)])])])])}const q=e(l,[["render",y],["__file","Selenium系列（18）---Web-UI-自动化基础实战（5）.html.vue"]]);export{q as default};
