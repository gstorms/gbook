import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,a as n,b as s,d as i,f as l}from"./app-d0fb0332.js";const c={},u=l(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><ul><li>前面几篇文章主要介绍了allure的特性，这篇文章我们就来讲下allure的标记用法</li><li>有时候我们写pytest的时候，会用到 @pytest.mark 但并不会显示在allure报告上</li><li>而allure也提供了三种类型的标记装饰器，它们是可以显示在allure报告上的</li></ul><p></p><h2 id="allure的标记装饰器" tabindex="-1"><a class="header-anchor" href="#allure的标记装饰器" aria-hidden="true">#</a> allure的标记装饰器</h2><ul><li>BDD样式的标记装饰器</li><li>优先级（严重程度）标记装饰器</li><li>自定义标记装饰器</li></ul><p></p><h2 id="bdd标记装饰器" tabindex="-1"><a class="header-anchor" href="#bdd标记装饰器" aria-hidden="true">#</a> BDD标记装饰器</h2><p>提供了三个装饰器</p><ul><li>**@allure.epic：**敏捷里面的概念，定义史诗，往下是 feature</li><li>**@allure.feature：**功能点的描述，理解成模块往下是 story</li><li>**@allure.story：**故事，往下是 title</li></ul><p></p><h2 id="栗子一-story-feature" tabindex="-1"><a class="header-anchor" href="#栗子一-story-feature" aria-hidden="true">#</a> 栗子一（story+feature）</h2><h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  =
__Time__   = 2020-04-19 14:27
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> allure


<span class="token keyword">def</span> <span class="token function">test_without_any_annotations_that_wont_be_executed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&#39;epic_1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_with_epic_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&#39;story_1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_with_story_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&#39;story_2&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_with_story_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">&#39;feature_2&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&#39;story_2&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_with_story_2_and_feature_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="无标记装饰器" tabindex="-1"><a class="header-anchor" href="#无标记装饰器" aria-hidden="true">#</a> 无标记装饰器</h4><p><strong>我们先看看没有设置标记装饰器时，allure报告是咋样的</strong><br><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200419143545313-1192847935.png" alt="" loading="lazy"><br><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200419143547509-461702889.png" alt="" loading="lazy"></p><h4 id="添加装饰器" tabindex="-1"><a class="header-anchor" href="#添加装饰器" aria-hidden="true">#</a> 添加装饰器</h4><p><strong>加了 @allure.feature 和 @allure.story 之后的 allure 报告</strong><br><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200419143646436-112943561.png" alt="" loading="lazy"><br><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200419143700757-1044518704.png" alt="" loading="lazy"></p><h4 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h4><ul><li>story 是 feature 的子集，当测试用例有 @allure.feature、@allure.story 时，在报告上会先显示 feature，点开之后再显示 story**【可以想象成，安徒生童话（feature）有很多个童话故事（story）】**</li><li>如果不加 @allure.feature、@allure.story 时，在Behaviors栏目下，测试用例都不会分类显示，当用例多的时候可能看的花里胡哨</li></ul><p></p><h2 id="栗子二" tabindex="-1"><a class="header-anchor" href="#栗子二" aria-hidden="true">#</a> 栗子二</h2><h4 id="前言-1" tabindex="-1"><a class="header-anchor" href="#前言-1" aria-hidden="true">#</a> 前言</h4><p>这里应用了包括前面所讲的全部装饰器</p><h4 id="测试代码-1" tabindex="-1"><a class="header-anchor" href="#测试代码-1" aria-hidden="true">#</a> 测试代码</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  = 
__Time__   = 2020/10/27 19:44
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> os

<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest


<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span>scope<span class="token operator">=</span><span class="token string">&quot;session&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login_fixture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;=== 前置登录 ===&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>step</span><span class="token punctuation">(</span><span class="token string">&quot;步骤1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">step_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;操作步骤---------------1&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>step</span><span class="token punctuation">(</span><span class="token string">&quot;步骤2&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">step_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;操作步骤---------------2&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>step</span><span class="token punctuation">(</span><span class="token string">&quot;步骤3&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">step_3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;操作步骤---------------3&quot;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>epic</span><span class="token punctuation">(</span><span class="token string">&quot;epic 相当于总体描述&quot;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">&quot;测试模块&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">TestAllureALL</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>testcase</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.cnblogs.com/poloyy/&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;测试用例,点我一下&#39;</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>issue</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.cnblogs.com/poloyy/p/12219145.html&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bug 链接,点我一下&#39;</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">&quot;用例的标题&quot;</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&quot;story one&quot;</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>severity</span><span class="token punctuation">(</span><span class="token string">&quot;critical&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case_1</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> login_fixture<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        小菠萝测试笔记地址：https://www.cnblogs.com/poloyy/
        &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;测试用例1&quot;</span><span class="token punctuation">)</span>
        step_1<span class="token punctuation">(</span><span class="token punctuation">)</span>
        step_2<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&quot;story two&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case_2</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> login_fixture<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;测试用例2&quot;</span><span class="token punctuation">)</span>
        step_1<span class="token punctuation">(</span><span class="token punctuation">)</span>
        step_3<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>epic</span><span class="token punctuation">(</span><span class="token string">&quot;另一个 epic&quot;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>feature</span><span class="token punctuation">(</span><span class="token string">&quot;查找模块&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">TestAllureALL2</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&quot;story three&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case_3</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> login_fixture<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;测试用例3&quot;</span><span class="token punctuation">)</span>
        step_1<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&quot;story four&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case_4</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> login_fixture<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;测试用例4&quot;</span><span class="token punctuation">)</span>
        step_3<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;-s&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-q&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;--alluredir&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./allure&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&#39;allure -c ./allure&#39;</span><span class="token punctuation">)</span>
    os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&#39;allure serve ./allure-report&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="allure-报告" tabindex="-1"><a class="header-anchor" href="#allure-报告" aria-hidden="true">#</a> allure 报告</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201027222800445-1537547444.png" alt="" loading="lazy"><br><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201027222813521-133031475.png" alt="" loading="lazy"></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>倘若是用 pytest+allure 写项目，又想用 @pytest.mark.xxx 来给不同的用例添加标记的话，可以尝试用 @allure.feature、@allure.story 替换，毕竟可以显示在报告上</p><h4 id="提出问题" tabindex="-1"><a class="header-anchor" href="#提出问题" aria-hidden="true">#</a> 提出问题</h4><p>用命令行方式运行时，可以指定运行某个story、feature、epic吗？</p><h4 id="自问自答" tabindex="-1"><a class="header-anchor" href="#自问自答" aria-hidden="true">#</a> 自问自答</h4><p>当然可以，跟 @pytest.mark.xxx 指定标签运行的方式没啥区别，添加下面的命令行参数就行</p><ul><li>--allure-epics</li><li>--allure-features</li><li>--allure-stories</li></ul><p></p><h4 id="举栗子" tabindex="-1"><a class="header-anchor" href="#举栗子" aria-hidden="true">#</a> 举栗子</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 只运行 epic 名为 test 的测试用例</span>
pytest <span class="token parameter variable">--alluredir</span> ./report/allure --allure-epics<span class="token operator">=</span>test

<span class="token comment"># 只运行 feature 名为 模块 的测试用例</span>
pytest <span class="token parameter variable">--alluredir</span> ./report/allure --allure-features<span class="token operator">=</span>模块

<span class="token comment"># 只运行 story1、story2 的测试用例（也可以不用=号 空格就行了哦）</span>
pytest tests.py --allure-stories story1,story2

<span class="token comment"># 指定 feature+story</span>
pytest tests.py --allure-features feature2 --allure-stories story2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),r={href:"https://www.cnblogs.com/poloyy/p/12725509.html",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,n("blockquote",null,[n("p",null,[s("转载："),n("a",r,[s("https://www.cnblogs.com/poloyy/p/12725509.html"),i(a)])])])])}const h=t(c,[["render",d],["__file","Pytest系列（23）--allure-打标记之-@allure.epic()、@allure.feature()、@allure.story()-的详细使用.html.vue"]]);export{h as default};
