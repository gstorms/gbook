import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as l,a as n,b as s,d as o,f as p}from"./app-731a6e06.js";const c={},u=p(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><ul><li>平时写测试用例也会划分优先级</li><li>同样，allure 也提供用例级别，在 allure 报告可以清晰看到不同级别用例的缺陷数量</li></ul><p></p><h2 id="用例等级介绍" tabindex="-1"><a class="header-anchor" href="#用例等级介绍" aria-hidden="true">#</a> 用例等级介绍</h2><h4 id="allure-提供的枚举类" tabindex="-1"><a class="header-anchor" href="#allure-提供的枚举类" aria-hidden="true">#</a> allure 提供的枚举类</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028101707576-1311685517.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="等级介绍" tabindex="-1"><a class="header-anchor" href="#等级介绍" aria-hidden="true">#</a> 等级介绍</h4><ul><li>blocker：阻塞缺陷（功能未实现，无法下一步）</li><li>critical：严重缺陷（功能点缺失）</li><li>normal： 一般缺陷（边界情况，格式错误）</li><li>minor：次要缺陷（界面错误与ui需求不符）</li><li>trivial： 轻微缺陷（必须项无提示，或者提示不规范）</li></ul><p></p><h2 id="实际栗子" tabindex="-1"><a class="header-anchor" href="#实际栗子" aria-hidden="true">#</a> 实际栗子</h2><h3 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  =
__Time__   = 2020-04-19 14:50
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> allure


<span class="token keyword">def</span> <span class="token function">test_with_no_severity_label</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span>allure<span class="token punctuation">.</span>severity_level<span class="token punctuation">.</span>TRIVIAL<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_with_trivial_severity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span>allure<span class="token punctuation">.</span>severity_level<span class="token punctuation">.</span>NORMAL<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_with_normal_severity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span>allure<span class="token punctuation">.</span>severity_level<span class="token punctuation">.</span>NORMAL<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">TestClassWithNormalSeverity</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_inside_the_normal_severity_test_class</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; 测试类优先级 normal；看看测试用例是否会自动继承优先级 &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span>allure<span class="token punctuation">.</span>severity_level<span class="token punctuation">.</span>CRITICAL<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_inside_the_normal_severity_test_class_with_overriding_critical_severity</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        测试类优先级 normal
        测试用例优先级 critical
        &quot;&quot;&quot;</span>
        <span class="token keyword">pass</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">&quot;normal&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; normal 级别测试用例 &quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test case 11111111&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">&quot;critical&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; critical 级别测试用例 &quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test case 222222222&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">&quot;blocker&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; blocker 级别测试用例 &quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test case 4444444&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">&quot;minor&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; minor 级别测试用例 &quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test case 11111111&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test_case_5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 没标记 severity 的用例默认为 normal&quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test case 5555555555&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="allure-报告" tabindex="-1"><a class="header-anchor" href="#allure-报告" aria-hidden="true">#</a> allure 报告</h3><h4 id="测试用例详情" tabindex="-1"><a class="header-anchor" href="#测试用例详情" aria-hidden="true">#</a> 测试用例详情</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028102517170-1478952294.png" alt="" loading="lazy"><br> 多了个  severity 字段</p><h4 id="统计图表" tabindex="-1"><a class="header-anchor" href="#统计图表" aria-hidden="true">#</a> 统计图表</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028102539419-243158042.png" alt="" loading="lazy"><br> 可以看到不同 severity 测试用例运行的统计数据</p><h3 id="必然测试失败的测试代码" tabindex="-1"><a class="header-anchor" href="#必然测试失败的测试代码" aria-hidden="true">#</a> 必然测试失败的测试代码</h3><p>将上面代码的三个测试用例故意让它测试失败</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">&quot;normal&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; normal 级别测试用例 &quot;&quot;&quot;</span>
    <span class="token keyword">assert</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">&quot;critical&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; critical 级别测试用例 &quot;&quot;&quot;</span>
    <span class="token keyword">assert</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">&quot;blocker&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_case_3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; blocker 级别测试用例 &quot;&quot;&quot;</span>
    <span class="token keyword">assert</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="再来看看-allure-报告的统计图表" tabindex="-1"><a class="header-anchor" href="#再来看看-allure-报告的统计图表" aria-hidden="true">#</a> 再来看看 allure 报告的统计图表</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028102738341-707019425.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>这里用的是中文报告，其实可以看到 severity 官方是翻译为优先级，但是如果自己去翻译软件翻译的话是严重程度，我个人更偏向于理解为优先级</li><li>会同时显示同一个优先级的失败、通过用例数，以及哪条用例是失败、通过的</li></ul><p></p><h2 id="命令行参数-allure-severities" tabindex="-1"><a class="header-anchor" href="#命令行参数-allure-severities" aria-hidden="true">#</a> 命令行参数 allure-severities</h2><p>当然，也可以根据优先级选择需要运行的测试用例</p><h4 id="具体栗子" tabindex="-1"><a class="header-anchor" href="#具体栗子" aria-hidden="true">#</a> 具体栗子</h4><p>仍然是上面的代码，打开 cmd</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 只运行 severity=blocker、critical 的测试用例</span>
pytest test_severity.py <span class="token parameter variable">-sq</span> <span class="token parameter variable">--alluredir</span><span class="token operator">=</span>./allure --allure-severities<span class="token operator">=</span>blocker,critical

<span class="token comment"># 写法二</span>
pytest test_severity.py <span class="token parameter variable">-sq</span> <span class="token parameter variable">--alluredir</span><span class="token operator">=</span>./allure --allure-severities blocker,critical

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果" aria-hidden="true">#</a> 运行结果</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028103226885-438391816.png" alt="" loading="lazy"><br> severi=blocker、critical 的测试用例就三条，可以看看上面的代码</p>`,34),r={href:"https://www.cnblogs.com/poloyy/p/13889635.html",target:"_blank",rel:"noopener noreferrer"};function d(v,k){const a=t("ExternalLinkIcon");return i(),l("div",null,[u,n("blockquote",null,[n("p",null,[s("转载："),n("a",r,[s("https://www.cnblogs.com/poloyy/p/13889635.html"),o(a)])])])])}const h=e(c,[["render",d],["__file","Pytest系列（25）--@allure.severity-标记用例级别.html.vue"]]);export{h as default};
