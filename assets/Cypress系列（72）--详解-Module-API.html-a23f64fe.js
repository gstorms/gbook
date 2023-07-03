import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as t,a as n,b as o,d as i,f as l}from"./app-207e7d61.js";const c={},r=l(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><ul><li>前面介绍 Cypress 如何通过命令行运行，就是采用 cypress run 或 cypress open 命令，但这不是 Cypress 唯一的运行方式</li><li>Cypress 还允许你将它视为一个 Node Module 来运行，然后通过Node.js运行Cypress，这种方式可以更加灵活地定制测试行为</li><li>当想在运行后直接访问测试结果时，此功能很有用</li></ul><p></p><h4 id="如何有用" tabindex="-1"><a class="header-anchor" href="#如何有用" aria-hidden="true">#</a> 如何有用</h4><ul><li>挑选测试用例运行</li><li>整合所有测试用例，提供一份完整HTML格式的测试报告</li><li>重新运行单个失败的 spec 文件</li><li>发送有关测试失败的通知，包括附带的屏幕截图</li><li>启动其他构建行为或脚本</li></ul><p></p><h4 id="重点" tabindex="-1"><a class="header-anchor" href="#重点" aria-hidden="true">#</a> 重点</h4><p>模块 API支持两个命令： cypress.run() 和 cypress.open()</p><h2 id="cypress-run-命令详解" tabindex="-1"><a class="header-anchor" href="#cypress-run-命令详解" aria-hidden="true">#</a> cypress.run() 命令详解</h2><h3 id="栗子" tabindex="-1"><a class="header-anchor" href="#栗子" aria-hidden="true">#</a> 栗子</h3><h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入 cypress 模块</span>
<span class="token keyword">const</span> cypress <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cypress&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 执行 run 命令</span>
cypress<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">spec</span><span class="token operator">:</span> <span class="token string">&#39;./cypress/integration/00_examples/actions.spec.js&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 打印结果</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 抓取错误信息并打印</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="运行命令" tabindex="-1"><a class="header-anchor" href="#运行命令" aria-hidden="true">#</a> 运行命令</h4><p>可以在 cmd 窗口或 npm 脚本中运行下列命令</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>node 1_run<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h4 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果" aria-hidden="true">#</a> 运行结果</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201023142807413-351299372.png" alt="" loading="lazy"><br> 最终运行的是 actions.spec.js 这个测试用例文件</p><h3 id="参数列表" tabindex="-1"><a class="header-anchor" href="#参数列表" aria-hidden="true">#</a> 参数列表</h3><p>和 cypress run 命令行运行的参数一样<br><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201023151418764-371740775.png" alt="" loading="lazy"></p><h3 id="命令返回结果" tabindex="-1"><a class="header-anchor" href="#命令返回结果" aria-hidden="true">#</a> 命令返回结果</h3><p>cypress.run() 返回一个Promise对象，该 Promise 包含测试结果对象（类似 json 格式的数据），典型的运行可能会返回以下内容：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  startedTestsAt<span class="token operator">:</span> &#39;<span class="token number">2020</span><span class="token number">-10</span>-23T06<span class="token operator">:</span><span class="token number">22</span><span class="token operator">:</span><span class="token number">53</span>.210Z&#39;<span class="token punctuation">,</span>
  endedTestsAt<span class="token operator">:</span> &#39;<span class="token number">2020</span><span class="token number">-10</span>-23T06<span class="token operator">:</span><span class="token number">23</span><span class="token operator">:</span><span class="token number">23</span>.342Z&#39;<span class="token punctuation">,</span>
  totalDuration<span class="token operator">:</span> <span class="token number">30132</span><span class="token punctuation">,</span>
  totalSuites<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  totalTests<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  totalFailed<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  totalPassed<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  totalPending<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  totalSkipped<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  runs<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      stats<span class="token operator">:</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span><span class="token punctuation">,</span>
      reporter<span class="token operator">:</span> &#39;cypress/reporters/custom_reporter.js&#39;<span class="token punctuation">,</span>
      reporterStats<span class="token operator">:</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span><span class="token punctuation">,</span>
      hooks<span class="token operator">:</span> <span class="token punctuation">[</span>Array<span class="token punctuation">]</span><span class="token punctuation">,</span>
      tests<span class="token operator">:</span> <span class="token punctuation">[</span>Array<span class="token punctuation">]</span><span class="token punctuation">,</span>
      error<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      video<span class="token operator">:</span> &#39;C<span class="token operator">:</span>\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress\\\\videos\\\\00_examples\\\\actions.spec.js.mp4&#39;<span class="token punctuation">,</span>
      spec<span class="token operator">:</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span><span class="token punctuation">,</span>
      shouldUploadVideo<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  browserPath<span class="token operator">:</span> &#39;&#39;<span class="token punctuation">,</span>
  browserName<span class="token operator">:</span> &#39;electron&#39;<span class="token punctuation">,</span>
  browserVersion<span class="token operator">:</span> &#39;<span class="token number">85.0</span>.<span class="token number">4183.121</span>&#39;<span class="token punctuation">,</span>
  osName<span class="token operator">:</span> &#39;win32&#39;<span class="token punctuation">,</span>
  osVersion<span class="token operator">:</span> &#39;<span class="token number">10.0</span>.<span class="token number">18363</span>&#39;<span class="token punctuation">,</span>
  cypressVersion<span class="token operator">:</span> &#39;<span class="token number">5.4</span>.<span class="token number">0</span>&#39;<span class="token punctuation">,</span>
  config<span class="token operator">:</span> <span class="token punctuation">{</span>
    defaultCommandTimeout<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    env<span class="token operator">:</span> <span class="token punctuation">{</span>
      ENVIRONMENT<span class="token operator">:</span> &#39;staging&#39;<span class="token punctuation">,</span>
      dev<span class="token operator">:</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span><span class="token punctuation">,</span>
      qa<span class="token operator">:</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span><span class="token punctuation">,</span>
      foor<span class="token operator">:</span> &#39;bar&#39;<span class="token punctuation">,</span>
      key<span class="token operator">:</span> &#39;系统环境变量哦&#39;<span class="token punctuation">,</span>
      host<span class="token operator">:</span> &#39;test&#39;<span class="token punctuation">,</span>
      api_server<span class="token operator">:</span> &#39;http<span class="token operator">:</span><span class="token comment">//localhost:8888/api/v1/&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    configFile<span class="token operator">:</span> &#39;C<span class="token operator">:</span>\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress.json&#39;<span class="token punctuation">,</span>
    version<span class="token operator">:</span> &#39;<span class="token number">5.4</span>.<span class="token number">0</span>&#39;<span class="token punctuation">,</span>
    reporter<span class="token operator">:</span> &#39;cypress/reporters/custom_reporter.js&#39;<span class="token punctuation">,</span>
    baseUrls<span class="token operator">:</span> &#39;http<span class="token operator">:</span><span class="token comment">//localhost:7077/&#39;,</span>
    retries<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    targetEnv<span class="token operator">:</span> &#39;dev&#39;<span class="token punctuation">,</span>
    projectRoot<span class="token operator">:</span> &#39;C<span class="token operator">:</span>\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress&#39;<span class="token punctuation">,</span>
    projectName<span class="token operator">:</span> &#39;MyCypress&#39;<span class="token punctuation">,</span>
    morgan<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    isTextTerminal<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    socketId<span class="token operator">:</span> &#39;wj65e&#39;<span class="token punctuation">,</span>
    report<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    browsers<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    animationDistanceThreshold<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    autoOpen<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    baseUrl<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    blockHosts<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    chromeWebSecurity<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    clientRoute<span class="token operator">:</span> &#39;/__/&#39;<span class="token punctuation">,</span>
    componentFolder<span class="token operator">:</span> &#39;C<span class="token operator">:</span>\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress\\\\component&#39;<span class="token punctuation">,</span>
    execTimeout<span class="token operator">:</span> <span class="token number">60000</span><span class="token punctuation">,</span>
    experimentalSourceRewriting<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    experimentalComponentTesting<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    experimentalFetchPolyfill<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    experimentalNetworkStubbing<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    fileServerFolder<span class="token operator">:</span> &#39;C<span class="token operator">:</span>\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress&#39;<span class="token punctuation">,</span>
    firefoxGcInterval<span class="token operator">:</span> <span class="token punctuation">{</span> runMode<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> openMode<span class="token operator">:</span> <span class="token null keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    fixturesFolder<span class="token operator">:</span> &#39;C<span class="token operator">:</span>\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress\\\\fixtures&#39;<span class="token punctuation">,</span>
    hosts<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    ignoreTestFiles<span class="token operator">:</span> &#39;*.hot-update.js&#39;<span class="token punctuation">,</span>
    includeShadowDom<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    integrationFolder<span class="token operator">:</span> &#39;C<span class="token operator">:</span>\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress\\\\integration&#39;<span class="token punctuation">,</span>
    javascripts<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    modifyObstructiveCode<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    namespace<span class="token operator">:</span> &#39;__cypress&#39;<span class="token punctuation">,</span>
    nodeVersion<span class="token operator">:</span> &#39;default&#39;<span class="token punctuation">,</span>
    numTestsKeptInMemory<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    pageLoadTimeout<span class="token operator">:</span> <span class="token number">60000</span><span class="token punctuation">,</span>
    pluginsFile<span class="token operator">:</span> &#39;C<span class="token operator">:</span>\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress\\\\plugins\\\\index.js&#39;<span class="token punctuation">,</span>
    port<span class="token operator">:</span> <span class="token number">59756</span><span class="token punctuation">,</span>
    projectId<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    reporterOptions<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    reporterRoute<span class="token operator">:</span> &#39;/__cypress/reporter&#39;<span class="token punctuation">,</span>
    requestTimeout<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
    responseTimeout<span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
    screenshotOnRunFailure<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    screenshotsFolder<span class="token operator">:</span> &#39;C<span class="token operator">:</span>\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress\\\\screenshots&#39;<span class="token punctuation">,</span>
    socketIoRoute<span class="token operator">:</span> &#39;/__socket.io&#39;<span class="token punctuation">,</span>
    socketIoCookie<span class="token operator">:</span> &#39;__socket.io&#39;<span class="token punctuation">,</span>
    supportFile<span class="token operator">:</span> &#39;C<span class="token operator">:</span>\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress\\\\support\\\\index.js&#39;<span class="token punctuation">,</span>
    taskTimeout<span class="token operator">:</span> <span class="token number">60000</span><span class="token punctuation">,</span>
    testFiles<span class="token operator">:</span> &#39;**<span class="token comment">/*.*&#39;,
    trashAssetsBeforeRuns: true,
    userAgent: null,
    video: true,
    videoCompression: 32,
    videosFolder: &#39;C:\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress\\\\videos&#39;,
    videoUploadOnPasses: true,
    viewportHeight: 660,
    viewportWidth: 1000,
    waitForAnimations: true,
    watchForFileChanges: false,
    xhrRoute: &#39;/xhrs/&#39;,
    cypressEnv: &#39;production&#39;,
    resolved: {
      animationDistanceThreshold: [Object],
      baseUrl: [Object],
      blockHosts: [Object],
      browsers: [Object],
      chromeWebSecurity: [Object],
      componentFolder: [Object],
      defaultCommandTimeout: [Object],
      env: [Object],
      execTimeout: [Object],
      experimentalSourceRewriting: [Object],
      experimentalComponentTesting: [Object],
      experimentalFetchPolyfill: [Object],
      experimentalNetworkStubbing: [Object],
      fileServerFolder: [Object],
      firefoxGcInterval: [Object],
      fixturesFolder: [Object],
      hosts: [Object],
      ignoreTestFiles: [Object],
      includeShadowDom: [Object],
      integrationFolder: [Object],
      modifyObstructiveCode: [Object],
      nodeVersion: [Object],
      numTestsKeptInMemory: [Object],
      pageLoadTimeout: [Object],
      pluginsFile: [Object],
      port: [Object],
      projectId: [Object],
      reporter: [Object],
      reporterOptions: [Object],
      requestTimeout: [Object],
      responseTimeout: [Object],
      retries: [Object],
      screenshotOnRunFailure: [Object],
      screenshotsFolder: [Object],
      supportFile: [Object],
      taskTimeout: [Object],
      testFiles: [Object],
      trashAssetsBeforeRuns: [Object],
      userAgent: [Object],
      video: [Object],
      videoCompression: [Object],
      videosFolder: [Object],
      videoUploadOnPasses: [Object],
      viewportHeight: [Object],
      viewportWidth: [Object],
      waitForAnimations: [Object],
      watchForFileChanges: [Object],
      configFile: [Object],
      version: [Object]
    },
    parentTestsFolder: &#39;C:\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress&#39;,
    parentTestsFolderDisplay: &#39;MyCypress\\\\cypress&#39;,
    supportFolder: &#39;C:\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress\\\\support&#39;,
    integrationExampleName: &#39;examples&#39;,
    integrationExamplePath: &#39;C:\\\\Users\\\\user\\\\Desktop\\\\py\\\\MyCypress\\\\cypress\\\\integration\\\\examples&#39;,
    scaffoldedFiles: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object]
    ],
    resolvedNodeVersion: &#39;12.16.3&#39;,
    state: {},
    proxyUrl: &#39;http://localhost:59756&#39;,
    browserUrl: &#39;http://localhost:59756/__/&#39;,
    reporterUrl: &#39;http://localhost:59756/__cypress/reporter&#39;,
    xhrUrl: &#39;__cypress/xhrs/&#39;
  }
}

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="cypress-open-命令详解" tabindex="-1"><a class="header-anchor" href="#cypress-open-命令详解" aria-hidden="true">#</a> cypress.open() 命令详解</h2><h3 id="栗子-1" tabindex="-1"><a class="header-anchor" href="#栗子-1" aria-hidden="true">#</a> 栗子</h3><h4 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入 cypress 模块</span>
<span class="token keyword">const</span> cypress <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cypress&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 执行 open 命令</span>
cypress<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 命令参数列表</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">login_url</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">products_url</span><span class="token operator">:</span> <span class="token string">&#39;/products&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="运行命令-1" tabindex="-1"><a class="header-anchor" href="#运行命令-1" aria-hidden="true">#</a> 运行命令</h4><p>可以在 cmd 窗口或 npm 脚本中运行下列命令</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>node 2_open<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h4 id="运行结果-1" tabindex="-1"><a class="header-anchor" href="#运行结果-1" aria-hidden="true">#</a> 运行结果</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201023162937980-1333067131.png" alt="" loading="lazy"><br> 在 2_open.js 设置的 config 或 env 会当成 CLI 模式下设置的</p><h3 id="参数列表-1" tabindex="-1"><a class="header-anchor" href="#参数列表-1" aria-hidden="true">#</a> 参数列表</h3><p>和 cypress open 命令行运行的参数一样<br><img src="https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201023162557621-701723287.png" alt="" loading="lazy"><br>  <br> 待更新<br> 完整的 module api 项目</p>`,38),u={href:"https://www.cnblogs.com/poloyy/p/13858431.html",target:"_blank",rel:"noopener noreferrer"};function d(v,k){const s=e("ExternalLinkIcon");return p(),t("div",null,[r,n("blockquote",null,[n("p",null,[n("a",u,[o("https://www.cnblogs.com/poloyy/p/13858431.html"),i(s)])])])])}const h=a(c,[["render",d],["__file","Cypress系列（72）--详解-Module-API.html.vue"]]);export{h as default};
