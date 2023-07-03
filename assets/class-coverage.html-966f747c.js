import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as t}from"./app-3f278ba4.js";const e={},o=t(`<h1 id="class-coverage" tabindex="-1"><a class="header-anchor" href="#class-coverage" aria-hidden="true">#</a> class: Coverage</h1><ul><li>since: v1.11</li><li>langs: js</li></ul><p>Coverage gathers information about parts of JavaScript and CSS that were used by the page.</p><p>An example of using JavaScript coverage to produce Istanbul report for page load:</p><div class="hint-container note"><p class="hint-container-title">注</p><p>Coverage APIs are only supported on Chromium-based browsers.</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> chromium <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;playwright&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> v8toIstanbul <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;v8-to-istanbul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> chromium<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span>coverage<span class="token punctuation">.</span><span class="token function">startJSCoverage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&#39;https://chromium.org&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> coverage <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span>coverage<span class="token punctuation">.</span><span class="token function">stopJSCoverage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> entry <span class="token keyword">of</span> coverage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> converter <span class="token operator">=</span> <span class="token function">v8toIstanbul</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">source</span><span class="token operator">:</span> entry<span class="token punctuation">.</span>source <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> converter<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    converter<span class="token punctuation">.</span><span class="token function">applyCoverage</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>functions<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>converter<span class="token punctuation">.</span><span class="token function">toIstanbul</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async-method-coverage-startcsscoverage" tabindex="-1"><a class="header-anchor" href="#async-method-coverage-startcsscoverage" aria-hidden="true">#</a> async method: Coverage.startCSSCoverage</h2><ul><li>since: v1.11</li></ul><p>Returns coverage is started</p><h3 id="option-coverage-startcsscoverage-resetonnavigation" tabindex="-1"><a class="header-anchor" href="#option-coverage-startcsscoverage-resetonnavigation" aria-hidden="true">#</a> option: Coverage.startCSSCoverage.resetOnNavigation</h3><ul><li>since: v1.11</li></ul><ul><li><code>resetOnNavigation</code> &lt;[boolean]&gt;</li></ul><p>Whether to reset coverage on every navigation. Defaults to <code>true</code>.</p><h2 id="async-method-coverage-startjscoverage" tabindex="-1"><a class="header-anchor" href="#async-method-coverage-startjscoverage" aria-hidden="true">#</a> async method: Coverage.startJSCoverage</h2><ul><li>since: v1.11</li></ul><p>Returns coverage is started</p><div class="hint-container note"><p class="hint-container-title">注</p><p>Anonymous scripts are ones that don&#39;t have an associated url. These are scripts that are dynamically created<br> on the page using <code>eval</code> or <code>new Function</code>. If [<code>option: reportAnonymousScripts</code>] is set to <code>true</code>, anonymous scripts<br> will have <code>__playwright_evaluation_script__</code> as their URL.</p></div><h3 id="option-coverage-startjscoverage-resetonnavigation" tabindex="-1"><a class="header-anchor" href="#option-coverage-startjscoverage-resetonnavigation" aria-hidden="true">#</a> option: Coverage.startJSCoverage.resetOnNavigation</h3><ul><li>since: v1.11</li></ul><ul><li><code>resetOnNavigation</code> &lt;[boolean]&gt;</li></ul><p>Whether to reset coverage on every navigation. Defaults to <code>true</code>.</p><h3 id="option-coverage-startjscoverage-reportanonymousscripts" tabindex="-1"><a class="header-anchor" href="#option-coverage-startjscoverage-reportanonymousscripts" aria-hidden="true">#</a> option: Coverage.startJSCoverage.reportAnonymousScripts</h3><ul><li>since: v1.11</li></ul><ul><li><code>reportAnonymousScripts</code> &lt;[boolean]&gt;</li></ul><p>Whether anonymous scripts generated by the page should be reported. Defaults to <code>false</code>.</p><h2 id="async-method-coverage-stopcsscoverage" tabindex="-1"><a class="header-anchor" href="#async-method-coverage-stopcsscoverage" aria-hidden="true">#</a> async method: Coverage.stopCSSCoverage</h2><ul><li>since: v1.11</li></ul><ul><li>returns: &lt;[Array]&lt;[Object]&gt;&gt; <ul><li><code>url</code> &lt;[string]&gt; StyleSheet URL</li><li><code>text</code> ?&lt;[string]&gt; StyleSheet content, if available.</li><li><code>ranges</code> &lt;[Array]&lt;[Object]&gt;&gt; StyleSheet ranges that were used. Ranges are sorted and non-overlapping. <ul><li><code>start</code> &lt;[int]&gt; A start offset in text, inclusive</li><li><code>end</code> &lt;[int]&gt; An end offset in text, exclusive</li></ul></li></ul></li></ul><p>Returns the array of coverage reports for all stylesheets</p><div class="hint-container note"><p class="hint-container-title">注</p><p>CSS Coverage doesn&#39;t include dynamically injected style tags without sourceURLs.</p></div><h2 id="async-method-coverage-stopjscoverage" tabindex="-1"><a class="header-anchor" href="#async-method-coverage-stopjscoverage" aria-hidden="true">#</a> async method: Coverage.stopJSCoverage</h2><ul><li>since: v1.11</li></ul><ul><li>returns: &lt;[Array]&lt;[Object]&gt;&gt; <ul><li><code>url</code> &lt;[string]&gt; Script URL</li><li><code>scriptId</code> &lt;[string]&gt; Script ID</li><li><code>source</code> ?&lt;[string]&gt; Script content, if applicable.</li><li><code>functions</code> &lt;[Array]&lt;[Object]&gt;&gt; V8-specific coverage format. <ul><li><code>functionName</code> &lt;[string]&gt;</li><li><code>isBlockCoverage</code> &lt;[boolean]&gt;</li><li><code>ranges</code> &lt;[Array]&lt;[Object]&gt;&gt; <ul><li><code>count</code> &lt;[int]&gt;</li><li><code>startOffset</code> &lt;[int]&gt;</li><li><code>endOffset</code> &lt;[int]&gt;</li></ul></li></ul></li></ul></li></ul><p>Returns the array of coverage reports for all scripts</p><div class="hint-container note"><p class="hint-container-title">注</p><p>JavaScript Coverage doesn&#39;t include anonymous scripts by default. However, scripts with sourceURLs are<br> reported.</p></div>`,35),c=[o];function p(i,r){return a(),s("div",null,c)}const d=n(e,[["render",p],["__file","class-coverage.html.vue"]]);export{d as default};