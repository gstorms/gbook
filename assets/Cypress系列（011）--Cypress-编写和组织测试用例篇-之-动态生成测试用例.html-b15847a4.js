import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as p,a as s,b as r,d as o,f as i}from"./app-3f278ba4.js";const l={},c=i(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><ul><li>自动化测试中，<strong>数据驱动</strong>是很重要的一个点</li><li>实际项目中，肯定会出现这种情况：多条测试用例的执行步骤，断言步骤完全一致，<strong>只有输入和输出数据不一样</strong></li><li>这个时候依靠数据驱动（数据参数化）来解决这个问题可以提升我们的测试效率</li><li>在 Cypress，可以<strong>通过数据来动态生成测试用例</strong>，以达到数据驱动的效果</li></ul><p></p><h2 id="动态生成测试用例的步骤" tabindex="-1"><a class="header-anchor" href="#动态生成测试用例的步骤" aria-hidden="true">#</a> 动态生成测试用例的步骤</h2><h3 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h3><p>这边用的还是 Cypress 提供的被测应用哦</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入被测应用的目录</span>
<span class="token builtin class-name">cd</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>cypress-example-recipes<span class="token punctuation">\\</span>examples<span class="token punctuation">\\</span>logging-in__html-web-forms
<span class="token comment"># 启动本地服务</span>
<span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动成功后，cmd窗口将显示服务器的地址和端口<br><img src="https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200531134112456-898585859.png" alt="" loading="lazy"></p><h3 id="创建一个数据文件" tabindex="-1"><a class="header-anchor" href="#创建一个数据文件" aria-hidden="true">#</a> 创建一个数据文件</h3><p>在 Cypress安装目录/cypress/integration 文件夹下，创建一个子目录 datas ，在该目录下创建一个 testLogin.data.js 文件，代码如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> testLoginUser <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">summary</span><span class="token operator">:</span> <span class="token string">&quot;登录成功&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;jane.lane&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">&quot;password123&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">summary</span><span class="token operator">:</span> <span class="token string">&quot;登录失败&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;iTesting&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">&quot;iTesting&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="创建测试文件" tabindex="-1"><a class="header-anchor" href="#创建测试文件" aria-hidden="true">#</a> 创建测试文件</h3><p>在 integration 文件夹下创建一个 testLogin.js 文件，代码如下</p><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200604113020130-1541177866.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="运行测试文件" tabindex="-1"><a class="header-anchor" href="#运行测试文件" aria-hidden="true">#</a> 运行测试文件</h3><p>进入 Cypress 安装文件夹，cmd执行命令</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn cypress<span class="token operator">:</span>open
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>单击 testLogin.js</strong>，Cypress 会启动 Test  Runner 运行测试，运行成功后，将看到运行结果页面</p><h4 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200604113150446-1330914688.png" alt="" loading="lazy"><br> 可以看到第一条用例是测试通过，第二条用例是执行失败了（因为账号密码是错的，失败理所当然）</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li>根据测试数据动态生成测试用例，是一种数据驱动的做法</li><li>可以提升我们的测试效率，当我们测试数据本身改变时，无须更改测试代码，只要改测试数据文件</li></ul><p></p>`,24),d={href:"https://www.cnblogs.com/poloyy/p/13042466.html",target:"_blank",rel:"noopener noreferrer"};function u(h,m){const n=e("ExternalLinkIcon");return t(),p("div",null,[c,s("blockquote",null,[s("p",null,[s("a",d,[r("https://www.cnblogs.com/poloyy/p/13042466.html"),o(n)])])])])}const v=a(l,[["render",u],["__file","Cypress系列（011）--Cypress-编写和组织测试用例篇-之-动态生成测试用例.html.vue"]]);export{v as default};
