import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as s,b as a,d as r,f as c}from"./app-207e7d61.js";const l={},i=c(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>pytest中可以用python的assert断言，也可以写多个断言，但一个失败，后面的断言将不再执行</p><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 <span class="token function">install</span> pytest-assume <span class="token parameter variable">-i</span> http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="assert多重断言" tabindex="-1"><a class="header-anchor" href="#assert多重断言" aria-hidden="true">#</a> assert多重断言</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test_add1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">==</span> <span class="token number">5</span>
    <span class="token keyword">assert</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">3</span>
    <span class="token keyword">assert</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">7</span>
    <span class="token keyword">assert</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">9</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;测试完成&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行结果" tabindex="-1"><a class="header-anchor" href="#执行结果" aria-hidden="true">#</a> 执行结果</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200415132322553-569119361.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h3><p>可以看到，第二行断言失败之后，后面的断言也不会执行，包括正常的代码</p><h2 id="pytest-assume多重断言" tabindex="-1"><a class="header-anchor" href="#pytest-assume多重断言" aria-hidden="true">#</a> pytest.assume多重断言</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test_add2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    pytest<span class="token punctuation">.</span>assume<span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span>
    pytest<span class="token punctuation">.</span>assume<span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>
    pytest<span class="token punctuation">.</span>assume<span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">7</span><span class="token punctuation">)</span>
    pytest<span class="token punctuation">.</span>assume<span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;测试完成&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行结果-1" tabindex="-1"><a class="header-anchor" href="#执行结果-1" aria-hidden="true">#</a> 执行结果</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200415132847122-1838621760.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="结论-1" tabindex="-1"><a class="header-anchor" href="#结论-1" aria-hidden="true">#</a> 结论</h3><ul><li>可以看到，第二行即使断言失败，后面的断言还是会继续执行</li><li>这有助于我们分析和查看到底一共有哪些断言是失败的</li><li>而且最后的代码也还会正常执行，比直接用assert更高效</li></ul><p></p>`,18),u={href:"https://www.cnblogs.com/poloyy/p/12704658.html",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const n=t("ExternalLinkIcon");return p(),o("div",null,[i,s("blockquote",null,[s("p",null,[a("转载："),s("a",u,[a("https://www.cnblogs.com/poloyy/p/12704658.html"),r(n)])])])])}const v=e(l,[["render",d],["__file","Pytest系列（15）--多重校验插件之pytest-assume的详细使用.html.vue"]]);export{v as default};
