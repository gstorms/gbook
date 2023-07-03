import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as l,a as n,b as a,d as i,f as o}from"./app-207e7d61.js";const c={},u=o(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>allure除了支持pytest自带的特性之外（fixture、parametrize、xfail、skip），自己本身也有强大的特性可以在pytest中使用</p><h2 id="allure-step" tabindex="-1"><a class="header-anchor" href="#allure-step" aria-hidden="true">#</a> @allure.step</h2><ul><li>allure报告最重要的一点是，它允许对每个测试用例进行非常详细的步骤说明</li><li>通过 @allure.step() 装饰器，可以让测试用例在allure报告中显示更详细的测试过程</li></ul><p></p><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  =
__Time__   = 2020-04-08 21:24
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> allure
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>step</span><span class="token punctuation">(</span><span class="token string">&quot;第一步&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">passing_step</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>step</span><span class="token punctuation">(</span><span class="token string">&quot;第二步&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">step_with_nested_steps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    nested_step<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>step</span><span class="token punctuation">(</span><span class="token string">&quot;第三步&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">nested_step</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    nested_step_with_arguments<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>step</span><span class="token punctuation">(</span><span class="token string">&quot;第四步{0}，{arg2}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">nested_step_with_arguments</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token decorator annotation punctuation">@allure<span class="token punctuation">.</span>step</span><span class="token punctuation">(</span><span class="token string">&quot;第五步&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_with_nested_steps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    passing_step<span class="token punctuation">(</span><span class="token punctuation">)</span>
    step_with_nested_steps<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试用例在allure上的显示" tabindex="-1"><a class="header-anchor" href="#测试用例在allure上的显示" aria-hidden="true">#</a> 测试用例在allure上的显示</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200417135246245-902116613.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h3><ul><li>step() 只有一个参数，就是title，你传什么，在allure上就显示什么</li><li>可以像python字符串一样，支持位置参数和关键字参数 {0}，{arg2}，可看第四步那里，如果函数的参数没有匹配成功就会报错哦</li><li>step() 的使用场景，给我感觉就是，当方法之间嵌套会比较有用，否则的话只会显示一个步骤，类似下面图</li></ul><figure><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200417133631873-1202403389.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="allure-attach-挺有用的" tabindex="-1"><a class="header-anchor" href="#allure-attach-挺有用的" aria-hidden="true">#</a> allure.attach（挺有用的）</h2><p>**作用：**allure报告还支持显示许多不同类型的附件，可以补充测试结果；自己想输出啥就输出啥，挺好的<br><strong>语法：</strong> allure.attach(body, name, attachment_type, extension)</p><h3 id="参数列表" tabindex="-1"><a class="header-anchor" href="#参数列表" aria-hidden="true">#</a> <strong>参数列表</strong></h3><ul><li><strong>body</strong>：要显示的内容（附件）</li><li><strong>name</strong>：附件名字</li><li><strong>attachment_type</strong>：附件类型，是 allure.attachment_type 里面的其中一种</li><li><strong>extension</strong>：附件的扩展名（比较少用）</li></ul><p></p><h3 id="allure-attachment-type提供了哪些附件类型" tabindex="-1"><a class="header-anchor" href="#allure-attachment-type提供了哪些附件类型" aria-hidden="true">#</a> allure.attachment_type提供了哪些附件类型？</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200417200221337-763341073.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="语法二-allure-attach-file-source-name-attachment-type-extension" tabindex="-1"><a class="header-anchor" href="#语法二-allure-attach-file-source-name-attachment-type-extension" aria-hidden="true">#</a> 语法二： allure.attach.file(source, name, attachment_type, extension)</h3><p>source：文件路径，相当于传一个文件<br> 其他参数和上面的一致</p><h3 id="其中一个测试用例的代码栗子" tabindex="-1"><a class="header-anchor" href="#其中一个测试用例的代码栗子" aria-hidden="true">#</a> 其中一个测试用例的代码栗子</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
__title__  =
__Time__   = 2020-04-08 21:24
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> allure
<span class="token keyword">import</span> pytest
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span>
<span class="token keyword">def</span> <span class="token function">attach_file_in_module_scope_fixture_with_finalizer</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    allure<span class="token punctuation">.</span>attach<span class="token punctuation">(</span><span class="token string">&#39;在fixture前置操作里面添加一个附件txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fixture前置附件&#39;</span><span class="token punctuation">,</span> allure<span class="token punctuation">.</span>attachment_type<span class="token punctuation">.</span>TEXT<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">finalizer_module_scope_fixture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        allure<span class="token punctuation">.</span>attach<span class="token punctuation">(</span><span class="token string">&#39;在fixture后置操作里面添加一个附件txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fixture后置附件&#39;</span><span class="token punctuation">,</span>
                      allure<span class="token punctuation">.</span>attachment_type<span class="token punctuation">.</span>TEXT<span class="token punctuation">)</span>
    request<span class="token punctuation">.</span>addfinalizer<span class="token punctuation">(</span>finalizer_module_scope_fixture<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_with_attacments_in_fixture_and_finalizer</span><span class="token punctuation">(</span>attach_file_in_module_scope_fixture_with_finalizer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">def</span> <span class="token function">test_multiple_attachments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    allure<span class="token punctuation">.</span>attach<span class="token punctuation">(</span><span class="token string">&#39;&lt;head&gt;&lt;/head&gt;&lt;body&gt; 一个HTML页面 &lt;/body&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Attach with HTML type&#39;</span><span class="token punctuation">,</span> allure<span class="token punctuation">.</span>attachment_type<span class="token punctuation">.</span>HTML<span class="token punctuation">)</span>
    allure<span class="token punctuation">.</span>attach<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">(</span><span class="token string">&#39;./reports.html&#39;</span><span class="token punctuation">,</span> attachment_type<span class="token operator">=</span>allure<span class="token punctuation">.</span>attachment_type<span class="token punctuation">.</span>HTML<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="运行之后看结果" tabindex="-1"><a class="header-anchor" href="#运行之后看结果" aria-hidden="true">#</a> 运行之后看结果</h3><p><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200417203657146-1495579440.png" alt="" loading="lazy"><br><strong>这是一个txt附件</strong><br>  <br><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200417204119583-92174005.png" alt="" loading="lazy"><br><strong>这是一个用了 allure.attach() 来插入一段自己写的HTML和 allure.attach.file() 来导入一个已存在的HTML文件（pytest-html报告）</strong><br> **</p>`,26),r={href:"https://www.cnblogs.com/poloyy/p/12716659.html",target:"_blank",rel:"noopener noreferrer"};function d(k,h){const s=e("ExternalLinkIcon");return p(),l("div",null,[u,n("blockquote",null,[n("p",null,[a("转载："),n("a",r,[a("https://www.cnblogs.com/poloyy/p/12716659.html"),i(s)])])])])}const v=t(c,[["render",d],["__file","Pytest系列（20）--allure的特性，@allure.step()、allure.attach的详细使用.html.vue"]]);export{v as default};
