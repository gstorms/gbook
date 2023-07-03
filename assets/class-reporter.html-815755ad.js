import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as r,a as e,b as n,d as i,w as l,f as t}from"./app-207e7d61.js";const c={},u=t(`<h1 id="class-reporter" tabindex="-1"><a class="header-anchor" href="#class-reporter" aria-hidden="true">#</a> class: Reporter</h1><ul><li>since: v1.10</li><li>langs: js</li></ul><p>Test runner notifies the reporter about various events during test execution. All methods of the reporter are optional.</p><p>You can create a custom reporter by implementing a class with some of the reporter methods. Make sure to export this class as default.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// my-awesome-reporter.js</span>
<span class="token comment">// @ts-check</span>

<span class="token doc-comment comment">/** <span class="token keyword">@implements</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@playwright/test/reporter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Reporter<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">class</span> <span class="token class-name">MyReporter</span> <span class="token punctuation">{</span>
  <span class="token function">onBegin</span><span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> suite</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Starting the run with </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>suite<span class="token punctuation">.</span><span class="token function">allTests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> tests</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">onTestBegin</span><span class="token punctuation">(</span><span class="token parameter">test</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Starting test </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>test<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">onTestEnd</span><span class="token punctuation">(</span><span class="token parameter">test<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Finished test </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>test<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">onEnd</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Finished the run: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyReporter<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// my-awesome-reporter.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Reporter<span class="token punctuation">,</span> FullConfig<span class="token punctuation">,</span> Suite<span class="token punctuation">,</span> TestCase<span class="token punctuation">,</span> TestResult<span class="token punctuation">,</span> FullResult <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@playwright/test/reporter&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyReporter</span> <span class="token keyword">implements</span> <span class="token class-name">Reporter</span> <span class="token punctuation">{</span>
  <span class="token function">onBegin</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">config</span><span class="token operator">:</span> FullConfig<span class="token punctuation">,</span> <span class="token literal-property property">suite</span><span class="token operator">:</span> Suite</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Starting the run with </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>suite<span class="token punctuation">.</span><span class="token function">allTests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> tests</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">onTestBegin</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">test</span><span class="token operator">:</span> TestCase</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Starting test </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>test<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">onTestEnd</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">test</span><span class="token operator">:</span> TestCase<span class="token punctuation">,</span> <span class="token literal-property property">result</span><span class="token operator">:</span> TestResult</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Finished test </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>test<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">onEnd</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">result</span><span class="token operator">:</span> FullResult</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Finished the run: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> MyReporter<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=e("code",null,"property: TestConfig.reporter",-1),h=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// playwright.config.js</span>
<span class="token comment">// @ts-check</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">reporter</span><span class="token operator">:</span> <span class="token string">&#39;./my-awesome-reporter.js&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// playwright.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">reporter</span><span class="token operator">:</span> <span class="token string">&#39;./my-awesome-reporter.ts&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is a typical order of reporter calls:</p><ul><li>[<code>method: Reporter.onBegin</code>] is called once with a root suite that contains all other suites and tests. Learn more about [suites hierarchy][Suite].</li><li>[<code>method: Reporter.onTestBegin</code>] is called for each test run. It is given a [TestCase] that is executed, and a [TestResult] that is almost empty. Test result will be populated while the test runs (for example, with steps and stdio) and will get final <code>status</code> once the test finishes.</li><li>[<code>method: Reporter.onStepBegin</code>] and [<code>method: Reporter.onStepEnd</code>] are called for each executed step inside the test. When steps are executed, test run has not finished yet.</li><li>[<code>method: Reporter.onTestEnd</code>] is called when test run has finished. By this time, [TestResult] is complete and you can use [<code>property: TestResult.status</code>], [<code>property: TestResult.error</code>] and more.</li><li>[<code>method: Reporter.onEnd</code>] is called once after all tests that should run had finished.</li></ul><p>Additionally, [<code>method: Reporter.onStdOut</code>] and [<code>method: Reporter.onStdErr</code>] are called when standard output is produced in the worker process, possibly during a test execution,<br> and [<code>method: Reporter.onError</code>] is called when something went wrong outside of the test execution.</p><p>If your custom reporter does not print anything to the terminal, implement [<code>method: Reporter.printsToStdio</code>] and return <code>false</code>. This way, Playwright will use one of the standard terminal reporters in addition to your custom reporter to enhance user experience.</p><h2 id="optional-method-reporter-onbegin" tabindex="-1"><a class="header-anchor" href="#optional-method-reporter-onbegin" aria-hidden="true">#</a> optional method: Reporter.onBegin</h2><ul><li>since: v1.10</li></ul><p>Called once before running tests. All tests have been already discovered and put into a hierarchy of [Suite]s.</p><h3 id="param-reporter-onbegin-config" tabindex="-1"><a class="header-anchor" href="#param-reporter-onbegin-config" aria-hidden="true">#</a> param: Reporter.onBegin.config</h3><ul><li>since: v1.10</li></ul><ul><li><code>config</code> &lt;[TestConfig]&gt;</li></ul><p>Resolved configuration.</p><h3 id="param-reporter-onbegin-suite" tabindex="-1"><a class="header-anchor" href="#param-reporter-onbegin-suite" aria-hidden="true">#</a> param: Reporter.onBegin.suite</h3><ul><li>since: v1.10</li></ul><ul><li><code>suite</code> &lt;[Suite]&gt;</li></ul><p>The root suite that contains all projects, files and test cases.</p><h2 id="optional-async-method-reporter-onend" tabindex="-1"><a class="header-anchor" href="#optional-async-method-reporter-onend" aria-hidden="true">#</a> optional async method: Reporter.onEnd</h2><ul><li>since: v1.10</li></ul><p>Called after all tests has been run, or testing has been interrupted. Note that this method may return a [Promise] and Playwright Test will await it.</p><h3 id="param-reporter-onend-result" tabindex="-1"><a class="header-anchor" href="#param-reporter-onend-result" aria-hidden="true">#</a> param: Reporter.onEnd.result</h3><ul><li>since: v1.10</li></ul><ul><li><code>result</code> &lt;[Object]&gt; <ul><li><code>status</code> &lt;[FullStatus]&lt;&quot;passed&quot;|&quot;failed&quot;|&quot;timedout&quot;|&quot;interrupted&quot;&gt;&gt;</li></ul></li></ul><p>Result of the full test run.</p><ul><li><code>&#39;passed&#39;</code> - Everything went as expected.</li><li><code>&#39;failed&#39;</code> - Any test has failed.</li><li><code>&#39;timedout&#39;</code> - The [<code>property: TestConfig.globalTimeout</code>] has been reached.</li><li><code>&#39;interrupted&#39;</code> - Interrupted by the user.</li></ul><h2 id="optional-method-reporter-onerror" tabindex="-1"><a class="header-anchor" href="#optional-method-reporter-onerror" aria-hidden="true">#</a> optional method: Reporter.onError</h2><ul><li>since: v1.10</li></ul><p>Called on some global error, for example unhandled exception in the worker process.</p><h3 id="param-reporter-onerror-error" tabindex="-1"><a class="header-anchor" href="#param-reporter-onerror-error" aria-hidden="true">#</a> param: Reporter.onError.error</h3><ul><li>since: v1.10</li></ul><ul><li><code>error</code> &lt;[TestError]&gt;</li></ul><p>The error.</p><h2 id="optional-method-reporter-onstderr" tabindex="-1"><a class="header-anchor" href="#optional-method-reporter-onstderr" aria-hidden="true">#</a> optional method: Reporter.onStdErr</h2><ul><li>since: v1.10</li></ul><p>Called when something has been written to the standard error in the worker process.</p><h3 id="param-reporter-onstderr-chunk" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstderr-chunk" aria-hidden="true">#</a> param: Reporter.onStdErr.chunk</h3><ul><li>since: v1.10</li></ul><ul><li><code>chunk</code> &lt;[string]|[Buffer]&gt;</li></ul><p>Output chunk.</p><h3 id="param-reporter-onstderr-test" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstderr-test" aria-hidden="true">#</a> param: Reporter.onStdErr.test</h3><ul><li>since: v1.10</li></ul><ul><li><code>test</code> &lt;[void]|[TestCase]&gt;</li></ul><p>Test that was running. Note that output may happen when no test is running, in which case this will be [void].</p><h3 id="param-reporter-onstderr-result" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstderr-result" aria-hidden="true">#</a> param: Reporter.onStdErr.result</h3><ul><li>since: v1.10</li></ul><ul><li><code>result</code> &lt;[void]|[TestResult]&gt;</li></ul><p>Result of the test run, this object gets populated while the test runs.</p><h2 id="optional-method-reporter-onstdout" tabindex="-1"><a class="header-anchor" href="#optional-method-reporter-onstdout" aria-hidden="true">#</a> optional method: Reporter.onStdOut</h2><ul><li>since: v1.10</li></ul><p>Called when something has been written to the standard output in the worker process.</p><h3 id="param-reporter-onstdout-chunk" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstdout-chunk" aria-hidden="true">#</a> param: Reporter.onStdOut.chunk</h3><ul><li>since: v1.10</li></ul><ul><li><code>chunk</code> &lt;[string]|[Buffer]&gt;</li></ul><p>Output chunk.</p><h3 id="param-reporter-onstdout-test" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstdout-test" aria-hidden="true">#</a> param: Reporter.onStdOut.test</h3><ul><li>since: v1.10</li></ul><ul><li><code>test</code> &lt;[void]|[TestCase]&gt;</li></ul><p>Test that was running. Note that output may happen when no test is running, in which case this will be [void].</p><h3 id="param-reporter-onstdout-result" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstdout-result" aria-hidden="true">#</a> param: Reporter.onStdOut.result</h3><ul><li>since: v1.10</li></ul><ul><li><code>result</code> &lt;[void]|[TestResult]&gt;</li></ul><p>Result of the test run, this object gets populated while the test runs.</p><h2 id="optional-method-reporter-onstepbegin" tabindex="-1"><a class="header-anchor" href="#optional-method-reporter-onstepbegin" aria-hidden="true">#</a> optional method: Reporter.onStepBegin</h2><ul><li>since: v1.10</li></ul><p>Called when a test step started in the worker process.</p><h3 id="param-reporter-onstepbegin-test" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstepbegin-test" aria-hidden="true">#</a> param: Reporter.onStepBegin.test</h3><ul><li>since: v1.10</li></ul><ul><li><code>test</code> &lt;[TestCase]&gt;</li></ul><p>Test that the step belongs to.</p><h3 id="param-reporter-onstepbegin-result" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstepbegin-result" aria-hidden="true">#</a> param: Reporter.onStepBegin.result</h3><ul><li>since: v1.10</li></ul><ul><li><code>result</code> &lt;[TestResult]&gt;</li></ul><p>Result of the test run, this object gets populated while the test runs.</p><h3 id="param-reporter-onstepbegin-step" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstepbegin-step" aria-hidden="true">#</a> param: Reporter.onStepBegin.step</h3><ul><li>since: v1.10</li></ul><ul><li><code>step</code> &lt;[TestStep]&gt;</li></ul><p>Test step instance that has started.</p><h2 id="optional-method-reporter-onstepend" tabindex="-1"><a class="header-anchor" href="#optional-method-reporter-onstepend" aria-hidden="true">#</a> optional method: Reporter.onStepEnd</h2><ul><li>since: v1.10</li></ul><p>Called when a test step finished in the worker process.</p><h3 id="param-reporter-onstepend-test" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstepend-test" aria-hidden="true">#</a> param: Reporter.onStepEnd.test</h3><ul><li>since: v1.10</li></ul><ul><li><code>test</code> &lt;[TestCase]&gt;</li></ul><p>Test that the step belongs to.</p><h3 id="param-reporter-onstepend-result" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstepend-result" aria-hidden="true">#</a> param: Reporter.onStepEnd.result</h3><ul><li>since: v1.10</li></ul><ul><li><code>result</code> &lt;[TestResult]&gt;</li></ul><p>Result of the test run.</p><h3 id="param-reporter-onstepend-step" tabindex="-1"><a class="header-anchor" href="#param-reporter-onstepend-step" aria-hidden="true">#</a> param: Reporter.onStepEnd.step</h3><ul><li>since: v1.10</li></ul><ul><li><code>step</code> &lt;[TestStep]&gt;</li></ul><p>Test step instance that has finished.</p><h2 id="optional-method-reporter-ontestbegin" tabindex="-1"><a class="header-anchor" href="#optional-method-reporter-ontestbegin" aria-hidden="true">#</a> optional method: Reporter.onTestBegin</h2><ul><li>since: v1.10</li></ul><p>Called after a test has been started in the worker process.</p><h3 id="param-reporter-ontestbegin-test" tabindex="-1"><a class="header-anchor" href="#param-reporter-ontestbegin-test" aria-hidden="true">#</a> param: Reporter.onTestBegin.test</h3><ul><li>since: v1.10</li></ul><ul><li><code>test</code> &lt;[TestCase]&gt;</li></ul><p>Test that has been started.</p><h3 id="param-reporter-ontestbegin-result" tabindex="-1"><a class="header-anchor" href="#param-reporter-ontestbegin-result" aria-hidden="true">#</a> param: Reporter.onTestBegin.result</h3><ul><li>since: v1.10</li></ul><ul><li><code>result</code> &lt;[TestResult]&gt;</li></ul><p>Result of the test run, this object gets populated while the test runs.</p><h2 id="optional-method-reporter-ontestend" tabindex="-1"><a class="header-anchor" href="#optional-method-reporter-ontestend" aria-hidden="true">#</a> optional method: Reporter.onTestEnd</h2><ul><li>since: v1.10</li></ul><p>Called after a test has been finished in the worker process.</p><h3 id="param-reporter-ontestend-test" tabindex="-1"><a class="header-anchor" href="#param-reporter-ontestend-test" aria-hidden="true">#</a> param: Reporter.onTestEnd.test</h3><ul><li>since: v1.10</li></ul><ul><li><code>test</code> &lt;[TestCase]&gt;</li></ul><p>Test that has been finished.</p><h3 id="param-reporter-ontestend-result" tabindex="-1"><a class="header-anchor" href="#param-reporter-ontestend-result" aria-hidden="true">#</a> param: Reporter.onTestEnd.result</h3><ul><li>since: v1.10</li></ul><ul><li><code>result</code> &lt;[TestResult]&gt;</li></ul><p>Result of the test run.</p><h2 id="optional-method-reporter-printstostdio" tabindex="-1"><a class="header-anchor" href="#optional-method-reporter-printstostdio" aria-hidden="true">#</a> optional method: Reporter.printsToStdio</h2><ul><li>since: v1.10</li></ul><ul><li>returns: &lt;[boolean]&gt;</li></ul><p>Whether this reporter uses stdio for reporting. When it does not, Playwright Test could add some output to enhance user experience. If your reporter does not print to the terminal, it is strongly recommended to return <code>false</code>.</p>`,118);function k(m,g){const s=o("RouterLink");return p(),r("div",null,[u,e("p",null,[n("Now use this reporter with ["),d,n("]. Learn more about "),i(s,{to:"/book/playwright/test-reporters.html"},{default:l(()=>[n("using reporters")]),_:1}),n(".")]),h])}const f=a(c,[["render",k],["__file","class-reporter.html.vue"]]);export{f as default};