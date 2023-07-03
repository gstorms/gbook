import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,a,b as s,d as r,f as l}from"./app-3f278ba4.js";const c={},i=l(`<h2 id="环境前提" tabindex="-1"><a class="header-anchor" href="#环境前提" aria-hidden="true">#</a> 环境前提</h2><p>以下先决条件才能使用pytest-rerunfailures</p><ul><li>Python 3.5, 最高 3.8, or PyPy3</li><li>pytest 5.0或更高版本</li></ul><p></p><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> pytest-rerunfailures <span class="token parameter variable">-i</span> http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="提前了解重点" tabindex="-1"><a class="header-anchor" href="#提前了解重点" aria-hidden="true">#</a> 提前了解重点</h2><p><strong>命令行参数：</strong>--reruns n（重新运行次数），--reruns-delay m（等待运行秒数）<br> **装饰器参数：**reruns=n（重新运行次数），reruns_delay=m（等待运行秒数）</p><h2 id="重新运行所有失败的用例" tabindex="-1"><a class="header-anchor" href="#重新运行所有失败的用例" aria-hidden="true">#</a> 重新运行所有失败的用例</h2><p>要重新运行所有测试失败，使用 --reruns 命令行选项，并指定要运行测试的最大次数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest <span class="token parameter variable">--reruns</span> <span class="token number">5</span> <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h3><p>运行失败的fixture或setup_class也将重新执行</p><h3 id="添加重新运行的延时" tabindex="-1"><a class="header-anchor" href="#添加重新运行的延时" aria-hidden="true">#</a> 添加重新运行的延时</h3><p>要在两次重试之间增加延迟时间，使用 --reruns-delay 命令行选项，指定下次测试重新开始之前等待的秒数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest <span class="token parameter variable">--reruns</span> <span class="token number">5</span> --reruns-delay <span class="token number">10</span> <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="重新运行指定的测试用例" tabindex="-1"><a class="header-anchor" href="#重新运行指定的测试用例" aria-hidden="true">#</a> 重新运行指定的测试用例</h2><p>要将单个测试用例添加flaky装饰器 @pytest.mark.flaky(reruns=5) ，并在测试失败时自动重新运行，需要指定最大重新运行的次数</p><h3 id="小栗子" tabindex="-1"><a class="header-anchor" href="#小栗子" aria-hidden="true">#</a> 小栗子</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pytest
<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>flaky</span><span class="token punctuation">(</span>reruns<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">import</span> random
    <span class="token keyword">assert</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行结果" tabindex="-1"><a class="header-anchor" href="#执行结果" aria-hidden="true">#</a> 执行结果</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>collecting <span class="token punctuation">..</span>. collected <span class="token number">1</span> item
11_reruns.py::test_example RERUN                                         <span class="token punctuation">[</span><span class="token number">100</span>%<span class="token punctuation">]</span>
11_reruns.py::test_example PASSED                                        <span class="token punctuation">[</span><span class="token number">100</span>%<span class="token punctuation">]</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> <span class="token number">1</span> passed, <span class="token number">1</span> rerun <span class="token keyword">in</span> <span class="token number">0</span>.05s <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="同样的-这个也可以指定重新运行的等待时间" tabindex="-1"><a class="header-anchor" href="#同样的-这个也可以指定重新运行的等待时间" aria-hidden="true">#</a> 同样的，这个也可以指定重新运行的等待时间</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>mark<span class="token punctuation">.</span>flaky</span><span class="token punctuation">(</span>reruns<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> reruns_delay<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test_example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">import</span> random
    <span class="token keyword">assert</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><p>如果指定了用例的重新运行次数，则在命令行添加--reruns对这些用例是不会生效的</p><h2 id="兼容性问题" tabindex="-1"><a class="header-anchor" href="#兼容性问题" aria-hidden="true">#</a> 兼容性问题</h2><ul><li>不可以和fixture装饰器一起使用： @pytest.fixture()</li><li>该插件与pytest-xdist的 --looponfail 标志不兼容</li><li>该插件与核心--pdb标志不兼容</li></ul>`,32),d={href:"https://www.cnblogs.com/poloyy/p/12687308.html",target:"_blank",rel:"noopener noreferrer"};function u(k,h){const n=p("ExternalLinkIcon");return t(),o("div",null,[i,a("blockquote",null,[a("p",null,[s("转载："),a("a",d,[s("https://www.cnblogs.com/poloyy/p/12687308.html"),r(n)])])])])}const v=e(c,[["render",u],["__file","Pytest系列（11）--失败重跑插件pytest-rerunfailures的详细使用.html.vue"]]);export{v as default};
