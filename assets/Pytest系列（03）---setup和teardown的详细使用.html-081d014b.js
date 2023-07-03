import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,b as s,d as c,f as i}from"./app-3f278ba4.js";const l={},u=i(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>用过unittest的童鞋都知道，有两个前置方法，两个后置方法；分别是</p><ul><li>setup()</li><li>setupClass()</li><li>teardown()</li><li>teardownClass()</li></ul><p>Pytest也贴心的提供了类似setup、teardown的方法，并且还超过四个，一共有十种</p><ul><li>**模块级别：**setup_module、teardown_module</li><li>**函数级别：**setup_function、teardown_function，不在类中的方法</li><li>**类级别：**setup_class、teardown_class</li><li>**方法级别：**setup_method、teardown_method</li><li>**方法细化级别：**setup、teardown</li></ul><p></p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><p>用过unittest的童鞋，对这个前置、后置方法应该不陌生了，我们直接来看代码和运行结果</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  =
__Time__   = 2020-04-06 11:40
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> pytest
<span class="token keyword">def</span> <span class="token function">setup_module</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;=====整个.py模块开始前只执行一次:打开浏览器=====&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">teardown_module</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;=====整个.py模块结束后只执行一次:关闭浏览器=====&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">setup_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;===每个函数级别用例开始前都执行setup_function===&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">teardown_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;===每个函数级别用例结束后都执行teardown_function====&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_one</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_two</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;two&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">TestCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">setup_class</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;====整个测试类开始前只执行一次setup_class====&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">teardown_class</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;====整个测试类结束后只执行一次teardown_class====&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">setup_method</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;==类里面每个用例执行前都会执行setup_method==&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">teardown_method</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;==类里面每个用例结束后都会执行teardown_method==&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">setup</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;=类里面每个用例执行前都会执行setup=&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">teardown</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;=类里面每个用例结束后都会执行teardown=&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_three</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;three&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test_four</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;four&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;-q&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-ra&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;setup_teardown.py&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行结果" tabindex="-1"><a class="header-anchor" href="#执行结果" aria-hidden="true">#</a> 执行结果</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200406142633570-607433520.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,13),d={href:"https://www.cnblogs.com/poloyy/p/12641991.html",target:"_blank",rel:"noopener noreferrer"};function r(k,v){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("blockquote",null,[n("p",null,[s("转载："),n("a",d,[s("https://www.cnblogs.com/poloyy/p/12641991.html"),c(a)])])])])}const f=t(l,[["render",r],["__file","Pytest系列（03）---setup和teardown的详细使用.html.vue"]]);export{f as default};
