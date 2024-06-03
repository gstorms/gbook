import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as n,b as s,d as t,f as l}from"./app-cfbf85c1.js";const c={},u=n("h2",{id:"实战题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实战题目","aria-hidden":"true"},"#"),s(" 实战题目")],-1),r={href:"http://www.51job.com",target:"_blank",rel:"noopener noreferrer"},d=n("br",null,null,-1),k=n("br",null,null,-1),m=n("br",null,null,-1),v=n("br",null,null,-1),_=n("br",null,null,-1),b=n("br",null,null,-1),h=n("img",{src:"https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404151943919-365233368.png",alt:"",loading:"lazy"},null,-1),y=n("br",null,null,-1),w=n("br",null,null,-1),g=n("img",{src:"https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404151941903-66431783.png",alt:"",loading:"lazy"},null,-1),q=l(`<h2 id="代码思路" tabindex="-1"><a class="header-anchor" href="#代码思路" aria-hidden="true">#</a> 代码思路</h2><ol><li>定位搜索框，输入python</li><li>点击【地区】</li><li>显式等待，定位所有默认已选中的城市</li><li>取消选中它们</li><li>点击【北京】</li><li>点击【确定】</li><li>点击【搜索】</li><li>定位职位列表，除了第一行</li><li>循环职位列表，获取每一行的信息存入列表</li><li>格式化输出</li></ol><p></p><h2 id="代码-人为测试时的操作步骤" tabindex="-1"><a class="header-anchor" href="#代码-人为测试时的操作步骤" aria-hidden="true">#</a> 代码（人为测试时的操作步骤）</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># !/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  =
__Time__   = 2020/3/25 17:52
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support<span class="token punctuation">.</span>wait <span class="token keyword">import</span> WebDriverWait
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>by <span class="token keyword">import</span> By


<span class="token comment"># 设置元素等待实例，最多等10秒，每0.5秒查找一次</span>
<span class="token keyword">def</span> <span class="token function">wait_element</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> by_<span class="token punctuation">,</span> element_<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    element <span class="token operator">=</span> WebDriverWait<span class="token punctuation">(</span>driver<span class="token operator">=</span>driver<span class="token punctuation">,</span> timeout<span class="token operator">=</span>timeout<span class="token punctuation">)</span><span class="token punctuation">.</span>until<span class="token punctuation">(</span>
        <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>by<span class="token operator">=</span>by_<span class="token punctuation">,</span> value<span class="token operator">=</span>element_<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> element


<span class="token comment"># 设置元素等待实例，最多等10秒，每0.5秒查找一次</span>
<span class="token keyword">def</span> <span class="token function">wait_elements</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> by_<span class="token punctuation">,</span> element_<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    element <span class="token operator">=</span> WebDriverWait<span class="token punctuation">(</span>driver<span class="token operator">=</span>driver<span class="token punctuation">,</span> timeout<span class="token operator">=</span>timeout<span class="token punctuation">)</span><span class="token punctuation">.</span>until<span class="token punctuation">(</span>
        <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>by<span class="token operator">=</span>by_<span class="token punctuation">,</span> value<span class="token operator">=</span>element_<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> element


<span class="token comment"># 加载驱动</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 打开网站</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.51job.com&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 搜索框</span>
wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;#kwdselectid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;python&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 地区按钮</span>
wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;#work_position_input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 热门城市列表</span>
city_lists <span class="token operator">=</span> wait_elements<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;div#work_position_click_center_right_list_000000 td em.on&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 选中北京，取消选中其他城市</span>
<span class="token keyword">for</span> city <span class="token keyword">in</span> city_lists<span class="token punctuation">:</span>
    sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    city<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;em#work_position_click_center_right_list_category_000000_010000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 确定按钮</span>
driver<span class="token punctuation">.</span>find_element_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;#work_position_click_bottom_save&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 搜索按钮点击</span>
wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;div.top_wrap button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 找到职位列表</span>
lists <span class="token operator">=</span> wait_elements<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;div#resultList&gt;div.el&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> data <span class="token keyword">in</span> lists<span class="token punctuation">:</span>
    spans <span class="token operator">=</span> <span class="token punctuation">[</span>i<span class="token punctuation">.</span>text <span class="token keyword">for</span> i <span class="token keyword">in</span> data<span class="token punctuation">.</span>find_elements_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot; | &quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>spans<span class="token punctuation">)</span><span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment"># 退出浏览器</span>
driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),f={href:"https://www.cnblogs.com/poloyy/p/12631987.html",target:"_blank",rel:"noopener noreferrer"};function S(x,E){const a=p("ExternalLinkIcon");return o(),i("div",null,[u,n("p",null,[s("1、访问："),n("a",r,[s("http://www.51job.com"),t(a)]),d,s(' 2、输入搜索关键词 "python"， 地区选择 "北京"（注意，如果所在地已经选中其他地区，要去掉）'),k,s(" 3、搜索最新发布的职位， 抓取页面信息。 得到如下的格式化信息"),m,s(" Python开发工程师 | 杭州纳帕科技有限公司 | 杭州 | 0.8-1.6万/月 | 04-27"),v,s(" Python高级开发工程师 | 中浙信科技咨询有限公司 | 杭州 | 1-1.5万/月 | 04-27"),_,s(" 高级Python开发工程师 | 杭州新思维计算机有限公司 | 杭州-西湖区 | 1-1.5万/月 | 04-27"),b,h,y,s("  "),w,g]),q,n("blockquote",null,[n("p",null,[s("转载："),n("a",f,[s("https://www.cnblogs.com/poloyy/p/12631987.html"),t(a)])])])])}const L=e(c,[["render",S],["__file","Selenium系列（16）---Web-UI-自动化基础实战（3）.html.vue"]]);export{L as default};
