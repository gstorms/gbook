import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as i,a,b as e,d,f as t}from"./app-207e7d61.js";const o={},p=t(`<h2 id="先看看-allure-命令的帮助文档" tabindex="-1"><a class="header-anchor" href="#先看看-allure-命令的帮助文档" aria-hidden="true">#</a> 先看看 allure 命令的帮助文档</h2><p>cmd 敲</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>allure <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h4 id="allure-命令的语法格式" tabindex="-1"><a class="header-anchor" href="#allure-命令的语法格式" aria-hidden="true">#</a> allure 命令的语法格式</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>allure <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span> <span class="token punctuation">[</span>command options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h4 id="options-列表" tabindex="-1"><a class="header-anchor" href="#options-列表" aria-hidden="true">#</a> options 列表</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Options:
    <span class="token parameter variable">--help</span> 命令行帮助文档
    -q, <span class="token parameter variable">--quiet</span>
      切换至安静模式
      Default: <span class="token boolean">false</span>
    -v, <span class="token parameter variable">--verbose</span>
      切换至冗长模式
      Default: <span class="token boolean">false</span>
    <span class="token parameter variable">--version</span>
      版本信息
      Default: <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="command-列表" tabindex="-1"><a class="header-anchor" href="#command-列表" aria-hidden="true">#</a> command 列表</h4><ol><li>generate</li><li>serve</li><li>open</li><li>plugin</li></ol><p>这里只讲前三个常用的</p><h2 id="generate-命令行参数" tabindex="-1"><a class="header-anchor" href="#generate-命令行参数" aria-hidden="true">#</a> generate 命令行参数</h2><h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h4><p>生成 allure 的html 报告</p><h4 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h4><div class="language-erlang line-numbers-mode" data-ext="erlang"><pre class="language-erlang"><code><span class="token atom">generate</span> <span class="token punctuation">[</span><span class="token atom">options</span><span class="token punctuation">]</span>  <span class="token atom">allure</span> 结果目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**注：**allure 结果目录就是运行 pytest 命令，--alluredir 跟的那个目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest <span class="token parameter variable">-sq</span> <span class="token parameter variable">--alluredir</span><span class="token operator">=</span> ./allure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h4 id="命令选项" tabindex="-1"><a class="header-anchor" href="#命令选项" aria-hidden="true">#</a> 命令选项</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028123446680-921838785.png" alt="" loading="lazy"><br> 主要就是用  -c 、 -o  两个参数</p><h2 id="open-命令行参数" tabindex="-1"><a class="header-anchor" href="#open-命令行参数" aria-hidden="true">#</a> open 命令行参数</h2><h4 id="作用-1" tabindex="-1"><a class="header-anchor" href="#作用-1" aria-hidden="true">#</a> 作用</h4><p>打开生成的 allure 报告，就是打开 generate 命令生成的报告</p><h4 id="语法格式-1" tabindex="-1"><a class="header-anchor" href="#语法格式-1" aria-hidden="true">#</a> 语法格式</h4><div class="language-erlang line-numbers-mode" data-ext="erlang"><pre class="language-erlang"><code><span class="token atom">open</span> <span class="token punctuation">[</span><span class="token atom">options</span><span class="token punctuation">]</span> <span class="token atom">allure</span>报告目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**注：**allure 报告目录就是运行 allure generate 命令，-o 跟的那个目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>allure generate <span class="token parameter variable">-o</span> ./allure-report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h4 id="命令选项-1" tabindex="-1"><a class="header-anchor" href="#命令选项-1" aria-hidden="true">#</a> 命令选项</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028141707575-281214400.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="serve-命令行参数" tabindex="-1"><a class="header-anchor" href="#serve-命令行参数" aria-hidden="true">#</a> serve 命令行参数</h2><h4 id="作用-2" tabindex="-1"><a class="header-anchor" href="#作用-2" aria-hidden="true">#</a> 作用</h4><p>打开 allure 报告</p><h4 id="语法格式-2" tabindex="-1"><a class="header-anchor" href="#语法格式-2" aria-hidden="true">#</a> 语法格式</h4><div class="language-erlang line-numbers-mode" data-ext="erlang"><pre class="language-erlang"><code><span class="token atom">serve</span> <span class="token punctuation">[</span><span class="token atom">options</span><span class="token punctuation">]</span> <span class="token atom">allure</span> 结果目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**注：**allure 结果目录就是运行 pytest 命令，--alluredir 跟的那个目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest <span class="token parameter variable">-sq</span> <span class="token parameter variable">--alluredir</span><span class="token operator">=</span> ./allure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h4 id="命令选项-2" tabindex="-1"><a class="header-anchor" href="#命令选项-2" aria-hidden="true">#</a> 命令选项</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028142713421-258584445.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="浏览器打开-allure-报告的两种方式" tabindex="-1"><a class="header-anchor" href="#浏览器打开-allure-报告的两种方式" aria-hidden="true">#</a> 浏览器打开 allure 报告的两种方式</h2><h3 id="allure-serve" tabindex="-1"><a class="header-anchor" href="#allure-serve" aria-hidden="true">#</a> allure serve</h3><p>标准写法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行 pytest，指定 allure 结果目录</span>
pytest <span class="token parameter variable">-sq</span> <span class="token parameter variable">--alluredir</span><span class="token operator">=</span>./allure

<span class="token comment"># 打开 allure 报告</span>
allure serve ./allure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="allure-generate-allure-open" tabindex="-1"><a class="header-anchor" href="#allure-generate-allure-open" aria-hidden="true">#</a> allure generate + allure open</h3><p>标准写法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行 pytest，指定 allure 结果目录</span>
pytest <span class="token parameter variable">-sq</span> <span class="token parameter variable">--alluredir</span><span class="token operator">=</span>./allure

<span class="token comment"># 生成 allure 的 html 报告</span>
allure generate <span class="token parameter variable">-c</span> <span class="token parameter variable">-o</span> ./allure-report ./allure

<span class="token comment"># 打开 allure 报告</span>
allure <span class="token function">open</span> ./allure-report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然不写 -o 也可以</p><h4 id="看看-allure-report-的目录结构" tabindex="-1"><a class="header-anchor" href="#看看-allure-report-的目录结构" aria-hidden="true">#</a> 看看 allure-report 的目录结构</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028143452978-709464647.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>这种方式的目录会好看很多，不只是一堆 json 文件</li><li>而且直接打开 index.html 也是能看到 allure 报告的</li></ul>`,55),c={href:"https://www.cnblogs.com/poloyy/p/13890986.html",target:"_blank",rel:"noopener noreferrer"};function u(h,m){const n=l("ExternalLinkIcon");return r(),i("div",null,[p,a("blockquote",null,[a("p",null,[e("转载： "),a("a",c,[e("https://www.cnblogs.com/poloyy/p/13890986.html"),d(n)])])])])}const g=s(o,[["render",u],["__file","Pytest系列（27）--allure-命令行参数.html.vue"]]);export{g as default};
