import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a,b as s,d as n,f as r}from"./app-3f278ba4.js";const t={},l=r(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>前面也介绍过 Cypress 命令行，先来看看它的语法格式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>**command：**必选参数，可以是：open、run、install、verify、cache、help、version</li><li>**options：**可选参数，不同 command 有不同的 options</li></ul><p></p><h2 id="cypress-open-简介" tabindex="-1"><a class="header-anchor" href="#cypress-open-简介" aria-hidden="true">#</a> cypress open 简介</h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><ul><li>在交互模式下打开 Cypress 测试运行器（Test Runner）</li><li>在测试用例的运行过程中，测试用例的每一条命令，每一个操作都将显式地显示在测试运行器中</li></ul><p></p><h3 id="最简单的命令" tabindex="-1"><a class="header-anchor" href="#最简单的命令" aria-hidden="true">#</a> 最简单的命令</h3><p>进入项目根目录下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn run cypress open
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907115026299-921072230.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="通过-package-json-指定-scripts" tabindex="-1"><a class="header-anchor" href="#通过-package-json-指定-scripts" aria-hidden="true">#</a> 通过 package.json 指定 scripts</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;cypress:open&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cypress open&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907122859879-244397599.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="yarn-运行" tabindex="-1"><a class="header-anchor" href="#yarn-运行" aria-hidden="true">#</a> yarn 运行</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> cypress:open
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907123119079-2019877294.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="npm-运行" tabindex="-1"><a class="header-anchor" href="#npm-运行" aria-hidden="true">#</a> npm 运行</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run cypress:open
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907123226190-929086546.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="cypress-open-详解" tabindex="-1"><a class="header-anchor" href="#cypress-open-详解" aria-hidden="true">#</a> cypress open 详解</h2><h4 id="前言-1" tabindex="-1"><a class="header-anchor" href="#前言-1" aria-hidden="true">#</a> 前言</h4><ul><li>cypress open 运行时支持指定多个参数，指定的参数将自动应用于你通过测试运行器打开的项目</li><li>这些参数将应用于每一次测试运行，直到关闭测试运行器为止</li><li>指定的参数将会覆盖配置文件 cypress.json 中的相同参数</li></ul><p></p><h3 id="可选参数列表" tabindex="-1"><a class="header-anchor" href="#可选参数列表" aria-hidden="true">#</a> 可选参数列表</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907160214716-159873791.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="browser" tabindex="-1"><a class="header-anchor" href="#browser" aria-hidden="true">#</a> --browser</h3><p>默认情况下，Cypress 会自动查找你系统中可使用的浏览器，但是目前只有 Chrome 家族的浏览器才支持</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cypress <span class="token function">open</span> <span class="token parameter variable">--browser</span> /usr/bin/chromium
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> --config</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cypress <span class="token function">open</span> <span class="token parameter variable">--config</span> <span class="token assign-left variable">pageLoadTimeout</span><span class="token operator">=</span><span class="token number">100000</span>,watchForFileChanges<span class="token operator">=</span>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file" aria-hidden="true">#</a> --config-file</h3><p>默认情况下，所有的配置项都定义在 cypress.json 文件中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cypress <span class="token function">open</span> --config-file tests/cypress-config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> --env</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单个环境变量</span>
cypress <span class="token function">open</span> <span class="token parameter variable">--env</span> <span class="token assign-left variable">host</span><span class="token operator">=</span>api.dev.local
<span class="token comment"># 多个环境变量</span>
cypress <span class="token function">open</span> <span class="token parameter variable">--env</span> <span class="token assign-left variable">host</span><span class="token operator">=</span>api.dev.local,port<span class="token operator">=</span><span class="token number">4222</span>
<span class="token comment"># 值为 json 字符串</span>
cypress <span class="token function">open</span> <span class="token parameter variable">--env</span> <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token string">&#39;{&quot;feature-a&quot;:true,&quot;feature-b&quot;:false}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> --global</h3><p>允许在多个嵌套项目中共享同一个安装好的 Cypress 版本</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress open <span class="token operator">--</span>global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="port" tabindex="-1"><a class="header-anchor" href="#port" aria-hidden="true">#</a> --port</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress open <span class="token operator">--</span>port <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="project" tabindex="-1"><a class="header-anchor" href="#project" aria-hidden="true">#</a> --project</h3><p>用来指定待运行的项目，如果你的项目包含多个子项目，可以用此参数来运行指定的子项目（包括加载对应项目的配置）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress open <span class="token operator">--</span>project <span class="token punctuation">.</span><span class="token operator">/</span>some<span class="token operator">/</span>nested<span class="token operator">/</span>folder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="cypress-run-详解" tabindex="-1"><a class="header-anchor" href="#cypress-run-详解" aria-hidden="true">#</a> Cypress run 详解</h2><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><p>默认情况下，Cypress 会将 electron 作为<strong>无头浏览器</strong>运行完所有的测试用例</p><h3 id="可选参数列表-1" tabindex="-1"><a class="header-anchor" href="#可选参数列表-1" aria-hidden="true">#</a> 可选参数列表</h3><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200907190340032-907531360.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="browser-1" tabindex="-1"><a class="header-anchor" href="#browser-1" aria-hidden="true">#</a> --browser</h3><p>只要系统上可以检测到，browser 参数可以被设置为 chrome ，canary，chromium，electron，Cypress 会试图自动找到已经装好的浏览器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress run <span class="token operator">--</span>browser chrome
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="config、-config-file、-env、-port、-help、-project" tabindex="-1"><a class="header-anchor" href="#config、-config-file、-env、-port、-help、-project" aria-hidden="true">#</a> --config、--config-file、--env、--port、--help、--project</h3><p>和上面 cypress open 用法一致</p><h3 id="spec" tabindex="-1"><a class="header-anchor" href="#spec" aria-hidden="true">#</a> --spec</h3><ul><li>指定运行哪些测试文件夹/文件</li><li>如果不指定测试文件夹，Cypress 将为你自动运行所有存在 Integration 文件夹下的测试用例</li></ul><p></p><h4 id="栗子" tabindex="-1"><a class="header-anchor" href="#栗子" aria-hidden="true">#</a> 栗子</h4><p>运行某个单独的测试文件而不是所有的测试用例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress run <span class="token operator">--</span>spec <span class="token string">&quot;cypress/integration/examples/actions.spec.js&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行*号匹配到的文件目录（注意：推荐使用双星号**）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress run <span class="token operator">--</span>spec <span class="token string">&quot;cypress/integration/login/**/*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行指定多个测试文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress run <span class="token operator">--</span>spec <span class="token string">&quot;cypress/integration/examples/actions.spec.js,cypress/integration/examples/files.spec.js&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="record-key" tabindex="-1"><a class="header-anchor" href="#record-key" aria-hidden="true">#</a> --record --key</h3><p>在测试运行时录制视频</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress run <span class="token operator">--</span>record <span class="token operator">--</span>key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果在 cypress.json 中设置了环境变量 CYPRESS_RECORD_KEY，你可以忽略 --key 参数。</p><h3 id="ci-build-id" tabindex="-1"><a class="header-anchor" href="#ci-build-id" aria-hidden="true">#</a> --ci-build-id</h3><p>用于分组运行或者并行运行，它通过指定一个唯一的标识符来实现，必须配合参数 --group 或 --parallel 才能使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress run <span class="token operator">--</span>ci<span class="token operator">-</span>build<span class="token operator">-</span>id <span class="token constant">BUILD_NUMBER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通常这个标识符被设置为持续集成环境的环境变量</p><h3 id="group" tabindex="-1"><a class="header-anchor" href="#group" aria-hidden="true">#</a> --group</h3><p>在一次运行中，把符合条件的测试用例分组展示</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress run <span class="token operator">--</span>group admin<span class="token operator">-</span>tests <span class="token operator">--</span>spec <span class="token string">&#39;cypress/integration/admin/**/*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h3 id="parallel" tabindex="-1"><a class="header-anchor" href="#parallel" aria-hidden="true">#</a> --parallel</h3><p>在多台机器上并行运行测试文件（后面文章再展开详解）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress run <span class="token operator">--</span>record <span class="token operator">--</span>parallel <span class="token operator">--</span>group e2e<span class="token operator">-</span>staging<span class="token operator">-</span>specs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结合 --group 使用</p><h3 id="headed" tabindex="-1"><a class="header-anchor" href="#headed" aria-hidden="true">#</a> --headed</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress run <span class="token operator">--</span>headed chrome
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认是无头模式，加上就是使用 chrome 浏览器运行</p><h3 id="no-exit" tabindex="-1"><a class="header-anchor" href="#no-exit" aria-hidden="true">#</a> --no-exit</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cypress run <span class="token operator">--</span>headed <span class="token operator">--</span>no<span class="token operator">-</span>exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结合 --headed 来指定测试运行时显示及在运行后查看命令日志</p><h3 id="reporter、-reporter-options" tabindex="-1"><a class="header-anchor" href="#reporter、-reporter-options" aria-hidden="true">#</a> --reporter、--reporter-options</h3>`,98),d=a("li",null,"用来指定 Mocha 的 reporter",-1),u={href:"https://www.cnblogs.com/poloyy/p/13030898.html",target:"_blank",rel:"noopener noreferrer"},h=r(`<p></p><h2 id="cypress-verify-详解" tabindex="-1"><a class="header-anchor" href="#cypress-verify-详解" aria-hidden="true">#</a> cypress verify 详解</h2><h4 id="作用-1" tabindex="-1"><a class="header-anchor" href="#作用-1" aria-hidden="true">#</a> 作用</h4><p>验证 Cypress 安装正确并可用</p><h4 id="实际" tabindex="-1"><a class="header-anchor" href="#实际" aria-hidden="true">#</a> 实际</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>MyCypress<span class="token operator">&gt;</span>yarn run cypress verify
<span class="token function">yarn</span> run v1.22.4
$ C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>MyCypress<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>.bin<span class="token punctuation">\\</span>cypress verify
  √  Verified Cypress<span class="token operator">!</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Local<span class="token punctuation">\\</span>Cypress<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span><span class="token number">5.1</span>.0<span class="token punctuation">\\</span>Cypress
Done <span class="token keyword">in</span> <span class="token number">3</span>.99s.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="cypress-verison-详解" tabindex="-1"><a class="header-anchor" href="#cypress-verison-详解" aria-hidden="true">#</a> cypress verison 详解</h2><p>查看版本信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>MyCypress<span class="token operator">&gt;</span>yarn run cypress version
<span class="token function">yarn</span> run v1.22.4
$ C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>MyCypress<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>.bin<span class="token punctuation">\\</span>cypress version
Cypress package version: <span class="token number">5.1</span>.0
Cypress binary version: <span class="token number">5.1</span>.0
Done <span class="token keyword">in</span> <span class="token number">0</span>.69s.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>`,11),v={href:"https://www.cnblogs.com/poloyy/p/13626189.html",target:"_blank",rel:"noopener noreferrer"};function g(b,m){const e=p("ExternalLinkIcon");return o(),c("div",null,[l,a("ul",null,[d,a("li",null,[s("在测试报告文章中有详细讲解过，"),a("a",u,[s("https://www.cnblogs.com/poloyy/p/13030898.html"),n(e)])])]),h,a("blockquote",null,[a("p",null,[a("a",v,[s("https://www.cnblogs.com/poloyy/p/13626189.html"),n(e)])])])])}const f=i(t,[["render",g],["__file","Cypress系列（044）--命令行运行-Cypress.html.vue"]]);export{f as default};
