import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as e,a as n,b as o,d as c,f as i}from"./app-3f278ba4.js";const l={},u=i(`<h2 id="po-模式" tabindex="-1"><a class="header-anchor" href="#po-模式" aria-hidden="true">#</a> PO 模式</h2><p>PageObject（页面对象）模式是自动化测试中的一个最佳实践，相信很多小伙伴都知道的</p><h4 id="po-模式特征" tabindex="-1"><a class="header-anchor" href="#po-模式特征" aria-hidden="true">#</a> PO 模式特征</h4><ul><li>将每个页面（或者待测试对象）封装成一个（class），类里面包含了页面上所有元素及它们的操作方法（单步操作或功能集合）</li><li>测试代码和被测页面代码解耦，使用 PO 模式后，当页面发生改变，无须改变测试代码，仅改页面代码</li></ul><p>接下来就讲解下 Cypress 下如何使用 PO 模式</p><h2 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备" aria-hidden="true">#</a> 前期准备</h2><h4 id="启动-cypress-提供的演示项目" tabindex="-1"><a class="header-anchor" href="#启动-cypress-提供的演示项目" aria-hidden="true">#</a> 启动 Cypress 提供的演示项目</h4><p>cmd 窗口进入下面的文件夹<br><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012144320306-1408993875.png" alt="" loading="lazy"><br>  <br> 执行下面的命令</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="po-模式代码" tabindex="-1"><a class="header-anchor" href="#po-模式代码" aria-hidden="true">#</a> PO 模式代码</h2><h3 id="简单的-pageobject-模型栗子" tabindex="-1"><a class="header-anchor" href="#简单的-pageobject-模型栗子" aria-hidden="true">#</a> 简单的 PageObject 模型栗子</h3><h4 id="待测试页面代码" tabindex="-1"><a class="header-anchor" href="#待测试页面代码" aria-hidden="true">#</a> 待测试页面代码</h4><p>在 C:\\Users\\user\\Desktop\\py\\cypress-example-recipes\\examples\\logging-in__html-web-forms\\cypress 文件夹下新建 pages 文件夹，并创建一个 login.js 待测试页面文件，代码如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// login.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">LoginPage</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userName <span class="token operator">=</span> <span class="token string">&#39;input[name=username]&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">&#39;input[name=password]&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>form <span class="token operator">=</span> <span class="token string">&#39;form&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token string">&#39;http://localhost:7077/login&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token function">isTargetPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
        cy<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;eq&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> pwd</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
        cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>pwd<span class="token punctuation">)</span>
        cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="测试用例文件" tabindex="-1"><a class="header-anchor" href="#测试用例文件" aria-hidden="true">#</a> 测试用例文件</h4><p>在 C:\\Users\\user\\Desktop\\py\\cypress-example-recipes\\examples\\logging-in__html-web-forms\\cypress\\integration 文件夹下，创建一个 testLogin.js 测试用例文件，代码如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> LoginPage <span class="token keyword">from</span> <span class="token string">&quot;../pages/login&quot;</span>
<span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;登录测试，PO 模式&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token string">&#39;jane.lane&#39;</span>
    <span class="token keyword">const</span> pwd <span class="token operator">=</span> <span class="token string">&#39;password123&#39;</span>
    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建 po 实例</span>
        <span class="token keyword">const</span> loginInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoginPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        loginInstance<span class="token punctuation">.</span><span class="token function">isTargetPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        loginInstance<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span>
        cy<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;include&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012172549102-752015452.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="总结下" tabindex="-1"><a class="header-anchor" href="#总结下" aria-hidden="true">#</a> 总结下</h4><p>这样的 PageObject 模式代码只是把定位元素的元素定位表达式给剥离出来，并没有针对元素本身进行封装</p><h3 id="针对元素本身进行封装的栗子" tabindex="-1"><a class="header-anchor" href="#针对元素本身进行封装的栗子" aria-hidden="true">#</a> 针对元素本身进行封装的栗子</h3><h4 id="待测试页面代码-1" tabindex="-1"><a class="header-anchor" href="#待测试页面代码-1" aria-hidden="true">#</a> 待测试页面代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// login.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">LoginPage</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userNameLocator <span class="token operator">=</span> <span class="token string">&#39;input[name=username]&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>passwordLocator <span class="token operator">=</span> <span class="token string">&#39;input[name=password]&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>formLocator <span class="token operator">=</span> <span class="token string">&#39;form&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token string">&#39;http://localhost:7077/login&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token function">username</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userNameLocator<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token function">password</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>passwordLocator<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>formLocator<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">isTargetPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
        cy<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;eq&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> pwd</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>username<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>pwd<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="跳转页面代码" tabindex="-1"><a class="header-anchor" href="#跳转页面代码" aria-hidden="true">#</a> 跳转页面代码</h4><p>当登录成功后，页面将跳转至 mainPage 页面，上面只写了 login 页面，这里写下跳转后的页面</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// login.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">mainPage</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>h1Locator <span class="token operator">=</span> <span class="token string">&#39;h1&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token string">&#39;http://localhost:7077/dashboard&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token function">welComeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>h1Locator<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">isTargetPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cy<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;eq&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="测试用例代码" tabindex="-1"><a class="header-anchor" href="#测试用例代码" aria-hidden="true">#</a> 测试用例代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;登录测试，PO 模式&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token string">&#39;jane.lane&#39;</span>
    <span class="token keyword">const</span> pwd <span class="token operator">=</span> <span class="token string">&#39;password123&#39;</span>
    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建 po 实例</span>
        <span class="token keyword">const</span> loginInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoginPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        loginInstance<span class="token punctuation">.</span><span class="token function">visitPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        loginInstance<span class="token punctuation">.</span><span class="token function">isTargetPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        cy<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span>
        cy<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;include&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> manInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mainPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        manInstance<span class="token punctuation">.</span><span class="token function">isTargetPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        manInstance<span class="token punctuation">.</span>welComeText<span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;contain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jane.lane&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="测试结果-1" tabindex="-1"><a class="header-anchor" href="#测试结果-1" aria-hidden="true">#</a> 测试结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201012173323239-2021160090.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="总结下-1" tabindex="-1"><a class="header-anchor" href="#总结下-1" aria-hidden="true">#</a> 总结下</h4><ul><li>login.js 和 mainPage.js 两个页面对象都有一个 isTargetPage() 函数来判断当前页面 URL 是否正确</li><li>那这里就将每个 page 都共用的部分再次剥离，放到一个新的 common page</li><li>然后每个 page 都继承自 common page（类似 selenium po 模式的 BasePage）</li></ul><p></p><h3 id="使用-common-page-的栗子" tabindex="-1"><a class="header-anchor" href="#使用-common-page-的栗子" aria-hidden="true">#</a> 使用 common page 的栗子</h3><h4 id="commonpage-js-的代码" tabindex="-1"><a class="header-anchor" href="#commonpage-js-的代码" aria-hidden="true">#</a> commonPage.js 的代码</h4><p>它也在 pages 文件夹下创建</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">commanPage</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 构造函数可以为空</span>
        <span class="token comment">// 如果不为空 应该是所有 page 都会用到的变量</span>
    <span class="token punctuation">}</span>
    <span class="token function">isTargetPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cy<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;eq&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="login-js-的代码" tabindex="-1"><a class="header-anchor" href="#login-js-的代码" aria-hidden="true">#</a> login.js 的代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// login.js</span>
<span class="token keyword">import</span> commanPage <span class="token keyword">from</span> <span class="token string">&quot;./commonPage&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 继承 commonPage</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">LoginPage</span> <span class="token keyword">extends</span> <span class="token class-name">commanPage</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用父类的构造方法</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userNameLocator <span class="token operator">=</span> <span class="token string">&#39;input[name=username]&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>passwordLocator <span class="token operator">=</span> <span class="token string">&#39;input[name=password]&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>formLocator <span class="token operator">=</span> <span class="token string">&#39;form&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token string">&#39;http://localhost:7077/login&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token function">username</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userNameLocator<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token function">password</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>passwordLocator<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>formLocator<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">visitPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> pwd</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>username<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>pwd<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="mainpage-js-的代码" tabindex="-1"><a class="header-anchor" href="#mainpage-js-的代码" aria-hidden="true">#</a> mainPage.js 的代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// login.js</span>
<span class="token keyword">import</span> commonPage <span class="token keyword">from</span> <span class="token string">&quot;./commonPage&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 继承 commonPage</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">mainPage</span> <span class="token keyword">extends</span> <span class="token class-name">commonPage</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>h1Locator <span class="token operator">=</span> <span class="token string">&#39;h1&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token string">&#39;http://localhost:7077/dashboard&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token function">welComeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>h1Locator<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="测试结果-2" tabindex="-1"><a class="header-anchor" href="#测试结果-2" aria-hidden="true">#</a> 测试结果</h4><p>测试结果和上面的栗子一样</p><h2 id="cypress-使用-po-模式的总结" tabindex="-1"><a class="header-anchor" href="#cypress-使用-po-模式的总结" aria-hidden="true">#</a> Cypress 使用 PO 模式的总结</h2><ul><li>Cypress 完全支持 PageObject 模式</li><li>但存在一个<strong>问题</strong>，如果一个测试需要访问多个页面对象，就意味着测试中要<strong>初始化多个页面对象实例（new Page()）</strong></li><li>如果一个页面对象需要登录才能访问（大部分场景都是这样），则每次初始化都需要先登录再访问（只有登录后才能重用 cookie），这无形增加了测试运行的时间</li><li>Cypress 不认为 PO 模式是一个好模式，它认为跨页面共享逻辑是一个反逻辑，因为 Cypress 的实现原理与其他工具完全不同</li><li>那 Cypress 用什么方式来替代 PO 模式呢？答案就是下一篇要讲到的 Custom Commons</li></ul>`,55),r={href:"https://www.cnblogs.com/poloyy/p/13804226.html",target:"_blank",rel:"noopener noreferrer"};function k(d,m){const s=t("ExternalLinkIcon");return p(),e("div",null,[u,n("blockquote",null,[n("p",null,[n("a",r,[o("https://www.cnblogs.com/poloyy/p/13804226.html"),c(s)])])])])}const h=a(l,[["render",k],["__file","Cypress系列（62）--改造-PageObject-模式.html.vue"]]);export{h as default};
