import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c as i,a as n,b as s,d as t,f as u}from"./app-d0fb0332.js";const c={},l=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),r={href:"https://www.cnblogs.com/poloyy/p/12675457.html",target:"_blank",rel:"noopener noreferrer"},d=n("li",null,[s("默认 allure 报告上的测试用例标题不设置"),n("strong",null,"默认"),s("就是用例名称，这样可读性不高")],-1),k=n("li",null,[s("当"),n("strong",null,"结合"),s(" @pytest.mark.parametrize 参数化完成数据驱动时，如果标题写死，这样可读性也不高")],-1),v=n("li",null,"所以我们希望标题可以动态的生成，来看看如何做吧",-1),m=u(`<p></p><h2 id="参数化无标题的栗子" tabindex="-1"><a class="header-anchor" href="#参数化无标题的栗子" aria-hidden="true">#</a> 参数化无标题的栗子</h2><h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  = 
__Time__   = 2020/10/28 15:08
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest


<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;登录&quot;&quot;&quot;</span>
    param <span class="token operator">=</span> request<span class="token punctuation">.</span>param
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;账号是：</span><span class="token interpolation"><span class="token punctuation">{</span>param<span class="token punctuation">[</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">，密码是：</span><span class="token interpolation"><span class="token punctuation">{</span>param<span class="token punctuation">[</span><span class="token string">&#39;pwd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token comment"># 返回</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;success!&quot;</span><span class="token punctuation">}</span>

datas <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;name1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pwd1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;name2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pwd2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;name3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pwd3&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&#39;登录功能&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span> datas<span class="token punctuation">,</span> indirect<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_login1</span><span class="token punctuation">(</span>login<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    登录测试用例1
    &quot;&quot;&quot;</span>
    <span class="token keyword">assert</span> login<span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="allure-报告" tabindex="-1"><a class="header-anchor" href="#allure-报告" aria-hidden="true">#</a> allure 报告</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028155125698-768492106.png" alt="" loading="lazy"><br> 标题就是方法名+参数化的数据，看着可读性就不咋滴</p><h2 id="参数化有标题写死的栗子" tabindex="-1"><a class="header-anchor" href="#参数化有标题写死的栗子" aria-hidden="true">#</a> 参数化有标题写死的栗子</h2><h4 id="测试代码-1" tabindex="-1"><a class="header-anchor" href="#测试代码-1" aria-hidden="true">#</a> 测试代码</h4><p>将上面的测试代码添加一个 @allure.title 就可以了</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&#39;登录功能&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">&#39;登录测试用例2&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span> datas<span class="token punctuation">,</span> indirect<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_login2</span><span class="token punctuation">(</span>login<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    登录测试用例2
    &quot;&quot;&quot;</span>
    <span class="token keyword">assert</span> login<span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="allure-报告-1" tabindex="-1"><a class="header-anchor" href="#allure-报告-1" aria-hidden="true">#</a> allure 报告</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028155328645-761365730.png" alt="" loading="lazy"><br> 因为参数化可以生成三条用例，所以三条用例都用了同一个 title，可读性也不咋滴</p><h2 id="参数化使用-ids-的栗子" tabindex="-1"><a class="header-anchor" href="#参数化使用-ids-的栗子" aria-hidden="true">#</a> 参数化使用 ids 的栗子</h2><h4 id="测试代码-2" tabindex="-1"><a class="header-anchor" href="#测试代码-2" aria-hidden="true">#</a> 测试代码</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  = 
__Time__   = 2020/10/28 15:08
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest


<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;登录&quot;&quot;&quot;</span>
    param <span class="token operator">=</span> request<span class="token punctuation">.</span>param
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;账号是：</span><span class="token interpolation"><span class="token punctuation">{</span>param<span class="token punctuation">[</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">，密码是：</span><span class="token interpolation"><span class="token punctuation">{</span>param<span class="token punctuation">[</span><span class="token string">&#39;pwd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token comment"># 返回</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;success!&quot;</span><span class="token punctuation">}</span>

datas <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;name1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pwd1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;name2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pwd2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;name3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pwd3&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>

ids <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;username is name1,pwd is pwd1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;username is name2,pwd is pwd2&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;username is name3,pwd is pwd3&quot;</span>
<span class="token punctuation">]</span>

<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&#39;登录功能&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span> datas<span class="token punctuation">,</span> ids<span class="token operator">=</span>ids<span class="token punctuation">,</span> indirect<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_login1</span><span class="token punctuation">(</span>login<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    登录测试用例1
    &quot;&quot;&quot;</span>
    <span class="token keyword">assert</span> login<span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="allure-报告-2" tabindex="-1"><a class="header-anchor" href="#allure-报告-2" aria-hidden="true">#</a> allure 报告</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028162540505-406268594.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="参数化动态生成标题的栗子" tabindex="-1"><a class="header-anchor" href="#参数化动态生成标题的栗子" aria-hidden="true">#</a> 参数化动态生成标题的栗子</h2><h4 id="测试代码-3" tabindex="-1"><a class="header-anchor" href="#测试代码-3" aria-hidden="true">#</a> 测试代码</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  = 
__Time__   = 2020/10/28 15:08
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest


<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;登录&quot;&quot;&quot;</span>
    param <span class="token operator">=</span> request<span class="token punctuation">.</span>param
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;账号是：</span><span class="token interpolation"><span class="token punctuation">{</span>param<span class="token punctuation">[</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">，密码是：</span><span class="token interpolation"><span class="token punctuation">{</span>param<span class="token punctuation">[</span><span class="token string">&#39;pwd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token comment"># 返回</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;success!&quot;</span><span class="token punctuation">}</span>


datas <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;name1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pwd1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;name2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pwd2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;name3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pwd3&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>

data2 <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token string">&quot;name1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&quot;name2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&quot;name3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&#39;分别传值&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">&#39;登录测试用例2-账号是：{username}-密码是：{pwd}&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">&#39;username,pwd&#39;</span><span class="token punctuation">,</span> data2<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_login1</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    登录测试用例1
    &quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&#39;字典参数化&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">&#39;登录测试用例2-{dict}&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">&#39;dict&#39;</span><span class="token punctuation">,</span> datas<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_login2</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    登录测试用例1
    &quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token string">&#39;pwd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&#39;传值进fixture&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">&#39;登录测试用例2{login}&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span> datas<span class="token punctuation">,</span> indirect<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_login3</span><span class="token punctuation">(</span>login<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    登录测试用例2
    &quot;&quot;&quot;</span>
    <span class="token keyword">assert</span> login<span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="allure-报告-3" tabindex="-1"><a class="header-anchor" href="#allure-报告-3" aria-hidden="true">#</a> allure 报告</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028172244852-1230193094.png" alt="" loading="lazy"><br> 传入的如果是一个字典则显示完整字典值</p><h2 id="参数化动态生成标题最优方案的栗子" tabindex="-1"><a class="header-anchor" href="#参数化动态生成标题最优方案的栗子" aria-hidden="true">#</a> 参数化动态生成标题最优方案的栗子</h2><h4 id="测试代码-4" tabindex="-1"><a class="header-anchor" href="#测试代码-4" aria-hidden="true">#</a> 测试代码</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  = 
__Time__   = 2020/10/28 15:08
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest

data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token string">&quot;name1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name1 登录成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&quot;name2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name2 登录失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&quot;name3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name3 登录成功&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>


<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>story</span><span class="token punctuation">(</span><span class="token string">&#39;分别传值&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>title</span><span class="token punctuation">(</span><span class="token string">&#39;登录测试用例-{title}&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>parametrize</span><span class="token punctuation">(</span><span class="token string">&#39;username,pwd,title&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_login1</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> pwd<span class="token punctuation">,</span> title<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    登录测试用例1
    &quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="allure-报告-4" tabindex="-1"><a class="header-anchor" href="#allure-报告-4" aria-hidden="true">#</a> allure 报告</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028173259929-297643896.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="这种做法的优点" tabindex="-1"><a class="header-anchor" href="#这种做法的优点" aria-hidden="true">#</a> 这种做法的优点</h4><ul><li>可以自定义各式各样的标题</li><li>单独一个值去维护标题值</li><li>可读性比较好，容易维护</li></ul><p></p>`,34),b={href:"https://www.cnblogs.com/poloyy/p/13891265.html",target:"_blank",rel:"noopener noreferrer"};function g(q,h){const a=e("ExternalLinkIcon");return o(),i("div",null,[l,n("ul",null,[n("li",null,[s("参数化 @pytest.mark.parametrize 的学习："),n("a",r,[s("https://www.cnblogs.com/poloyy/p/12675457.html"),t(a)])]),d,k,v]),m,n("blockquote",null,[n("p",null,[s("转载： "),n("a",b,[s("https://www.cnblogs.com/poloyy/p/13891265.html"),t(a)])])])])}const w=p(c,[["render",g],["__file","Pytest系列（28）--参数化-parametrize-_-@allure.title()-动态生成标题.html.vue"]]);export{w as default};
