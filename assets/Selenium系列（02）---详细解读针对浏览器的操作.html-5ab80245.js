import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as i,a as n,b as s,d as o,f as c}from"./app-3f278ba4.js";const l={},r=c(`<h2 id="控制浏览器有哪些操作" tabindex="-1"><a class="header-anchor" href="#控制浏览器有哪些操作" aria-hidden="true">#</a> <strong>控制浏览器有哪些操作？</strong></h2><ul><li>最大化、最小化浏览器</li><li>控制、获取浏览器大小</li><li>获取当前标签页title、url</li><li>前进、后退、刷新</li><li>执行js语句</li><li>打开、关闭新标签页</li><li>滚动页面</li></ul><p>**点击右边目录即可跳转哦！ --------------&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; **</p><h2 id="最大化、最小化浏览器" tabindex="-1"><a class="header-anchor" href="#最大化、最小化浏览器" aria-hidden="true">#</a> 最大化、最小化浏览器</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> time <span class="token keyword">import</span> sleep
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

<span class="token comment"># 加载浏览器驱动</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 访问网址</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 最大化浏览器</span>
driver<span class="token punctuation">.</span>maximize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>
sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># 最小化浏览器</span>
driver<span class="token punctuation">.</span>minimize_window<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="控制、获取浏览器大小" tabindex="-1"><a class="header-anchor" href="#控制、获取浏览器大小" aria-hidden="true">#</a> 控制、获取浏览器大小</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 加载浏览器驱动</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 访问网址</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 获取浏览器大小</span>
size <span class="token operator">=</span> driver<span class="token punctuation">.</span>get_window_size<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;浏览器大小:</span><span class="token interpolation"><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># 设置浏览器大小</span>
driver<span class="token punctuation">.</span>set_window_size<span class="token punctuation">(</span><span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行结果" tabindex="-1"><a class="header-anchor" href="#执行结果" aria-hidden="true">#</a> 执行结果</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>浏览器大小<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">:</span> <span class="token number">1936</span><span class="token punctuation">,</span> <span class="token string">&#39;height&#39;</span><span class="token punctuation">:</span> <span class="token number">1056</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h3><p>get_window_size() 返回的是字典</p><h2 id="获取当前标签页title、url" tabindex="-1"><a class="header-anchor" href="#获取当前标签页title、url" aria-hidden="true">#</a> 获取当前标签页title、url</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 加载浏览器驱动</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">&quot;../resources/chromedriver.exe&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 访问网址</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 获取当前标签页的title</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;标签页title：</span><span class="token interpolation"><span class="token punctuation">{</span>driver<span class="token punctuation">.</span>title<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 获取当前标签页的url</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;标签页url：</span><span class="token interpolation"><span class="token punctuation">{</span>driver<span class="token punctuation">.</span>current_url<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 获取当前浏览器的名称（不常用）</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;标签页name：</span><span class="token interpolation"><span class="token punctuation">{</span>driver<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 获取当前页面完整的HTML代码</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（不常用）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;标签页page_source：</span><span class="token interpolation"><span class="token punctuation">{</span>driver<span class="token punctuation">.</span>page_source<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="执行结果-1" tabindex="-1"><a class="header-anchor" href="#执行结果-1" aria-hidden="true">#</a> 执行结果</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>标签页title：百度一下，你就知道
标签页url：https<span class="token punctuation">:</span><span class="token operator">//</span>www<span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com<span class="token operator">/</span>
标签页name：chrome
标签页page_source：<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="前进、后退、刷新" tabindex="-1"><a class="header-anchor" href="#前进、后退、刷新" aria-hidden="true">#</a> 前进、后退、刷新</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 前进</span>
driver<span class="token punctuation">.</span>forward<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 后退</span>
driver<span class="token punctuation">.</span>back<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 刷新</span>
driver<span class="token punctuation">.</span>refresh<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="执行js语句" tabindex="-1"><a class="header-anchor" href="#执行js语句" aria-hidden="true">#</a> 执行js语句</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 同步执行js</span>
js<span class="token operator">=</span><span class="token string">&#39;console.log(2)&#39;</span>
driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span>js<span class="token punctuation">)</span>

<span class="token comment"># 异步执行js</span>
driver<span class="token punctuation">.</span>execute_async_script<span class="token punctuation">(</span><span class="token string">&quot;alert(2)&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="打开、关闭新标签页" tabindex="-1"><a class="header-anchor" href="#打开、关闭新标签页" aria-hidden="true">#</a> 打开、关闭新标签页</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 打开新的标签页</span>
js <span class="token operator">=</span> <span class="token string">&#39;window.open(&quot;https://www.baidu.com/&quot;)&#39;</span>
driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span>js<span class="token punctuation">)</span>

<span class="token comment"># 获取当前标签页句柄</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>current_window_handle<span class="token punctuation">)</span>

<span class="token comment"># 获取浏览器所有标签页句柄</span>
handles <span class="token operator">=</span> driver<span class="token punctuation">.</span>window_handles
<span class="token keyword">print</span><span class="token punctuation">(</span>handles<span class="token punctuation">)</span>

<span class="token comment"># 切换标签页</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>handles<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 关闭当前标签页</span>
driver<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行结果-2" tabindex="-1"><a class="header-anchor" href="#执行结果-2" aria-hidden="true">#</a> 执行结果</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>CDwindow<span class="token operator">-</span>24C58D8D81CCC95D5D55E887402B7E0A
<span class="token punctuation">[</span><span class="token string">&#39;CDwindow-24C58D8D81CCC95D5D55E887402B7E0A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CDwindow-04C35D93CD4A04351BAC1CFFA36378CA&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CDwindow-AC59AC67423FB8463AF0C534C7A47098&#39;</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="知识点-1" tabindex="-1"><a class="header-anchor" href="#知识点-1" aria-hidden="true">#</a> 知识点</h3><ul><li>打开新的标签页只能通过 js 来操作</li><li>可以根据标签页的<strong>句柄</strong>来切换标签页</li><li>操作标签页的好处就是，可以只打开一个浏览器但可以访问多个不同的网页；这在后续集成单元测试框架（unittest、pytest）的时候会有很大的帮助</li></ul><p></p><h2 id="滚动页面" tabindex="-1"><a class="header-anchor" href="#滚动页面" aria-hidden="true">#</a> 滚动页面</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 滚动随机高度</span>
js <span class="token operator">=</span> <span class="token string">&quot;var q=document.documentElement.scrollTop=&quot;</span> <span class="token operator">+</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">999</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span>js<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="知识点-2" tabindex="-1"><a class="header-anchor" href="#知识点-2" aria-hidden="true">#</a> 知识点</h3><p>这里暂时只介绍js的滚动方法，滚动其实有几种高级方法的，后续有空补上</p>`,36),u={href:"https://www.cnblogs.com/poloyy/p/12574439.html",target:"_blank",rel:"noopener noreferrer"};function d(v,k){const a=t("ExternalLinkIcon");return p(),i("div",null,[r,n("blockquote",null,[n("p",null,[s("转载： "),n("a",u,[s("https://www.cnblogs.com/poloyy/p/12574439.html"),o(a)])])])])}const b=e(l,[["render",d],["__file","Selenium系列（02）---详细解读针对浏览器的操作.html.vue"]]);export{b as default};
