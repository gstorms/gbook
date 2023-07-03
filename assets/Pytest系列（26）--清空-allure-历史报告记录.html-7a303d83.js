import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as l,a as n,b as a,d as r,f as p}from"./app-3f278ba4.js";const o={},c=p(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><ul><li>pytest 运行 测试用例生成 allure 报告时，当测试用例名称修改后重新运行，会保留历史运行记录</li><li>又或者分开运行两个测试用例文件，但是 allure 报告生成目录是同一个，那么 allure 报告会同时显示两个文件的测试用例运行情况</li><li>咱们来看看这种情况</li></ul><p></p><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><p>下面两个栗子都是这个目录结构<br><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028110652149-1920030839.png" alt="" loading="lazy"></p><h3 id="修改名称的栗子" tabindex="-1"><a class="header-anchor" href="#修改名称的栗子" aria-hidden="true">#</a> 修改名称的栗子</h3><h4 id="test-1-py-的代码" tabindex="-1"><a class="header-anchor" href="#test-1-py-的代码" aria-hidden="true">#</a> test_1.py 的代码</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  = 
__Time__   = 2020/10/28 11:03
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">def</span> <span class="token function">test_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test_1 文件的测试用例1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test_1 文件的测试用例2&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="运行命令" tabindex="-1"><a class="header-anchor" href="#运行命令" aria-hidden="true">#</a> 运行命令</h4><p>进入该目录下，cmd 运行</p><p>pytest test_1.py --alluredir=./allure</p><h4 id="allure-报告" tabindex="-1"><a class="header-anchor" href="#allure-报告" aria-hidden="true">#</a> allure 报告</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028111346609-886062831.png" alt="" loading="lazy"><br> 只有两条用例</p><h4 id="修改后的-test-1-py-的代码" tabindex="-1"><a class="header-anchor" href="#修改后的-test-1-py-的代码" aria-hidden="true">#</a> 修改后的 test_1.py 的代码</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test_11</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test_1 文件的测试用例1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_22</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test_1 文件的测试用例2&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="再次运行命令-查看-allure-报告" tabindex="-1"><a class="header-anchor" href="#再次运行命令-查看-allure-报告" aria-hidden="true">#</a> 再次运行命令，查看 allure 报告</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028111355331-1963122828.png" alt="" loading="lazy"><br> 四条用例，包含了历史的两条，这不是我们希望看到的</p><h3 id="分开运行测试用例文件的栗子" tabindex="-1"><a class="header-anchor" href="#分开运行测试用例文件的栗子" aria-hidden="true">#</a> 分开运行测试用例文件的栗子</h3><h4 id="test-2-py-的代码" tabindex="-1"><a class="header-anchor" href="#test-2-py-的代码" aria-hidden="true">#</a> test_2.py 的代码</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  = 
__Time__   = 2020/10/28 11:03
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>


<span class="token keyword">def</span> <span class="token function">test_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test_1 文件的测试用例1&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test_1 文件的测试用例2&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="分开运行-test-1-和-test-2-两个测试用例文件" tabindex="-1"><a class="header-anchor" href="#分开运行-test-1-和-test-2-两个测试用例文件" aria-hidden="true">#</a> 分开运行 test_1 和 test_2 两个测试用例文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先运行第一个</span>
pytest test_1.py <span class="token parameter variable">--alluredir</span><span class="token operator">=</span>./allure

<span class="token comment"># 再运行第二个，此时应该希望 allure 报告只有 test_2.py 的测试用例</span>
pytest test_2.py <span class="token parameter variable">--alluredir</span><span class="token operator">=</span>./allure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="查看-allure-报告" tabindex="-1"><a class="header-anchor" href="#查看-allure-报告" aria-hidden="true">#</a> 查看 allure 报告</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028112004419-420743254.png" alt="" loading="lazy"><br> 出现了 test_1.py 的测试用例，这不是想要的结果</p><h2 id="clean-alluredir-参数" tabindex="-1"><a class="header-anchor" href="#clean-alluredir-参数" aria-hidden="true">#</a> --clean-alluredir 参数</h2><h4 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h4><ul><li>pytest 提供了 --clean-alluredir 参数可以清空 allure 报告生成的目录</li><li>可以看看 pytest 的说明文档</li></ul><p></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028112503115-1419060590.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="将上面的栗子重新运行" tabindex="-1"><a class="header-anchor" href="#将上面的栗子重新运行" aria-hidden="true">#</a> 将上面的栗子重新运行</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先运行第一个</span>
pytest test_1.py <span class="token parameter variable">--alluredir</span><span class="token operator">=</span>./allure

<span class="token comment"># 再运行第二个，此时应该希望 allure 报告只有 test_2.py 的测试用例</span>
pytest test_2.py <span class="token parameter variable">--alluredir</span><span class="token operator">=</span>./allure --clean-alluredir

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果" aria-hidden="true">#</a> 运行结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028113553241-1279045150.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,38),d={href:"https://www.cnblogs.com/poloyy/p/13890086.html",target:"_blank",rel:"noopener noreferrer"};function u(h,v){const s=t("ExternalLinkIcon");return i(),l("div",null,[c,n("blockquote",null,[n("p",null,[a("转载："),n("a",d,[a("https://www.cnblogs.com/poloyy/p/13890086.html"),r(s)])])])])}const k=e(o,[["render",u],["__file","Pytest系列（26）--清空-allure-历史报告记录.html.vue"]]);export{k as default};
