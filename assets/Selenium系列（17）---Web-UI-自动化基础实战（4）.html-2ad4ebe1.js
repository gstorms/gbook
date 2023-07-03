import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as n,b as s,d as t,f as c}from"./app-3f278ba4.js";const l={},u=n("h2",{id:"实战题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实战题目","aria-hidden":"true"},"#"),s(),n("strong",null,"实战题目")],-1),r={href:"http://www.51job.com",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,"点击高级搜索",-1),d=n("li",null,"输入搜索关键词 python",-1),v=n("li",null,"地区选择 杭州",-1),m=n("li",null,"职能类别 选 计算机软件 -> 高级软件工程师",-1),_=n("li",null,"公司性质 选 上市公司",-1),b=n("li",null,"工作年限 选 1-3 年",-1),y=n("li",null,"搜索最新发布的职位， 抓取页面信息。 得到如下的格式化信息",-1),w=c(`<p>Python开发工程师 | 杭州纳帕科技有限公司 | 杭州 | 0.8-1.6万/月 | 04-27<br> Python高级开发工程师 | 中浙信科技咨询有限公司 | 杭州 | 1-1.5万/月 | 04-27<br><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404153204134-1221596404.png" alt="" loading="lazy"><br><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200404153204066-1501201737.png" alt="" loading="lazy"></p><h2 id="代码思路-人为测试时的操作步骤" tabindex="-1"><a class="header-anchor" href="#代码思路-人为测试时的操作步骤" aria-hidden="true">#</a> 代码思路（人为测试时的操作步骤）</h2><ol><li>点击【高级搜索】</li><li>关键字输入python</li><li>点击城市</li><li>显式等待，定位所有默认已选中的城市</li><li>取消选中它们</li><li>点击【北京】</li><li>点击【确定】</li><li>发现关键字输入框下方出现关键字历史记录，需要点击任意地方才能取消显示，所以随便找一个可点击元素进行点击</li><li>点击【职能类别输入框】</li><li>显式等待，点击【后端开发】</li><li>点击【高级软件工程师】</li><li>点击【确定】</li><li>点击【工作年限】，选择1-3年</li><li>点击【公司性质】，选择上市公式</li><li>点击【搜索】</li><li>定位职位列表，除了第一行</li><li>循环职位列表，获取每一行的信息存入列表</li><li>格式化输出</li></ol><p></p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># !/usr/bin/env python</span>
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
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>support <span class="token keyword">import</span> expected_conditions <span class="token keyword">as</span> ec

<span class="token comment"># 加载驱动</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">wait_element</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> by_<span class="token punctuation">,</span> element_<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    element <span class="token operator">=</span> WebDriverWait<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> timeout<span class="token operator">=</span>timeout<span class="token punctuation">)</span><span class="token punctuation">.</span>until<span class="token punctuation">(</span>
        ec<span class="token punctuation">.</span>presence_of_element_located<span class="token punctuation">(</span>
            <span class="token punctuation">(</span>by_<span class="token punctuation">,</span> element_<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> element


<span class="token keyword">def</span> <span class="token function">wait_elements</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> by_<span class="token punctuation">,</span> element_<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    element <span class="token operator">=</span> WebDriverWait<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> timeout<span class="token operator">=</span>timeout<span class="token punctuation">)</span><span class="token punctuation">.</span>until<span class="token punctuation">(</span>
        ec<span class="token punctuation">.</span>presence_of_all_elements_located<span class="token punctuation">(</span>
            <span class="token punctuation">(</span>by_<span class="token punctuation">,</span> element_<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> element


<span class="token comment"># 加载驱动</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 打开网站</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.51job.com&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 高级搜索</span>
more_btn <span class="token operator">=</span> wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CLASS_NAME<span class="token punctuation">,</span> <span class="token string">&quot;more&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 职位框</span>
wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;kwdselectid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;python&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 城市按钮</span>
driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;work_position_click&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># layer</span>
layer <span class="token operator">=</span> wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;work_position_layer&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 城市列表</span>
city_list <span class="token operator">=</span> wait_elements<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;div#work_position_click_center_right_list_000000 table em.on&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> city <span class="token keyword">in</span> city_list<span class="token punctuation">:</span>
    sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    city<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 杭州</span>
wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;work_position_click_center_right_list_category_000000_080200&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 确认</span>
wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;work_position_click_bottom_save&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># form</span>
wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;div#historylist&gt;div.r1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 职能类别</span>
wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;funtype_click&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 职能弹窗</span>
type_layer <span class="token operator">=</span> wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;funtype_layer&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 后端开发</span>
wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;funtype_click_center_right_list_category_0100_0100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># f如果有已选列表，取消选择</span>
flag <span class="token operator">=</span> wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;funtype_click_multiple_selected&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> flag<span class="token punctuation">.</span>text<span class="token punctuation">:</span>
    <span class="token comment"># 已选列表</span>
    type_list <span class="token operator">=</span> wait_elements<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;div#funtype_click_multiple_selected&gt;span&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> types <span class="token keyword">in</span> type_list<span class="token punctuation">:</span>
        <span class="token keyword">if</span> types<span class="token punctuation">.</span>text <span class="token operator">==</span> <span class="token string">&quot;高级软件工程师&quot;</span><span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
        em <span class="token operator">=</span> types<span class="token punctuation">.</span>find_element_by_tag_name<span class="token punctuation">(</span><span class="token string">&quot;em&quot;</span><span class="token punctuation">)</span>
        em<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 高级软件工程师</span>
wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;funtype_click_center_right_list_sub_category_each_0100_0106&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 确定</span>
driver<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&quot;funtype_click_bottom_save&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 公司性质</span>
company <span class="token operator">=</span> wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;cottype_list&quot;</span><span class="token punctuation">)</span>
company<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 列表</span>
ctype_list <span class="token operator">=</span> company<span class="token punctuation">.</span>find_elements_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;div.ul &gt; span&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> ctype <span class="token keyword">in</span> ctype_list<span class="token punctuation">:</span>
    <span class="token comment"># 外资（欧美）没有数据</span>
    <span class="token keyword">if</span> ctype<span class="token punctuation">.</span>text <span class="token operator">==</span> <span class="token string">&quot;上市公司&quot;</span><span class="token punctuation">:</span>
        ctype<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>

<span class="token comment"># 工作年限</span>
workyear_list <span class="token operator">=</span> wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>ID<span class="token punctuation">,</span> <span class="token string">&quot;workyear_list&quot;</span><span class="token punctuation">)</span>
workyear_list<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 列表</span>
wlist <span class="token operator">=</span> workyear_list<span class="token punctuation">.</span>find_elements_by_css_selector<span class="token punctuation">(</span><span class="token string">&quot;div.ul &gt; span&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> wtype <span class="token keyword">in</span> wlist<span class="token punctuation">:</span>
    <span class="token keyword">if</span> wtype<span class="token punctuation">.</span>text <span class="token operator">==</span> <span class="token string">&quot;1-3年&quot;</span><span class="token punctuation">:</span>
        wtype<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>

<span class="token comment"># 搜索按钮</span>
wait_element<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;div.btnbox &gt; span.p_but&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 职位列表</span>
resultList <span class="token operator">=</span> wait_elements<span class="token punctuation">(</span>driver<span class="token punctuation">,</span> By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> <span class="token string">&quot;div#resultList&gt;div.el&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> res <span class="token keyword">in</span> resultList<span class="token punctuation">:</span>
    spans <span class="token operator">=</span> res<span class="token punctuation">.</span>find_elements_by_tag_name<span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">)</span>
    texts <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token punctuation">.</span>text <span class="token keyword">for</span> x <span class="token keyword">in</span> spans<span class="token punctuation">]</span>
    <span class="token comment"># 最终输出</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot; | &quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>texts<span class="token punctuation">)</span><span class="token punctuation">)</span>

sleep<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),g={href:"https://www.cnblogs.com/poloyy/p/12632106.html",target:"_blank",rel:"noopener noreferrer"};function q(h,f){const a=p("ExternalLinkIcon");return o(),i("div",null,[u,n("ol",null,[n("li",null,[s("登录 "),n("a",r,[s("http://www.51job.com"),t(a)])]),k,d,v,m,_,b,y]),w,n("blockquote",null,[n("p",null,[s("转载： "),n("a",g,[s("https://www.cnblogs.com/poloyy/p/12632106.html"),t(a)])])])])}const S=e(l,[["render",q],["__file","Selenium系列（17）---Web-UI-自动化基础实战（4）.html.vue"]]);export{S as default};
