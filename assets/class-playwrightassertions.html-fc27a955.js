import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as t}from"./app-3f278ba4.js";const e={},p=t(`<h1 id="class-playwrightassertions" tabindex="-1"><a class="header-anchor" href="#class-playwrightassertions" aria-hidden="true">#</a> class: PlaywrightAssertions</h1><ul><li>langs: js, java, csharp</li><li>since: v1.17</li></ul><p>Playwright gives you Web-First Assertions with convenience methods for creating assertions that will wait and retry until the expected condition is met.</p><p>Consider the following example:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;status becomes submitted&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&#39;#submit-button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&#39;.status&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveText</span><span class="token punctuation">(</span><span class="token string">&#39;Submitted&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> playwright<span class="token punctuation">.</span>async_api <span class="token keyword">import</span> Page<span class="token punctuation">,</span> expect

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">test_status_becomes_submitted</span><span class="token punctuation">(</span>page<span class="token punctuation">:</span> Page<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token comment"># ..</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&quot;#submit-button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> expect<span class="token punctuation">(</span>page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&quot;.status&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_text<span class="token punctuation">(</span><span class="token string">&quot;Submitted&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> Page<span class="token punctuation">,</span> expect

<span class="token keyword">def</span> <span class="token function">test_status_becomes_submitted</span><span class="token punctuation">(</span>page<span class="token punctuation">:</span> Page<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token comment"># ..</span>
    page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&quot;#submit-button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
    expect<span class="token punctuation">(</span>page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&quot;.status&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_text<span class="token punctuation">(</span><span class="token string">&quot;Submitted&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">com<span class="token punctuation">.</span>microsoft<span class="token punctuation">.</span>playwright<span class="token punctuation">.</span>assertions<span class="token punctuation">.</span></span><span class="token class-name">PlaywrightAssertions</span><span class="token punctuation">.</span><span class="token static">assertThat</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestExample</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">statusBecomesSubmitted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&quot;#submit-button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&quot;.status&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasText</span><span class="token punctuation">(</span><span class="token string">&quot;Submitted&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>Playwright<span class="token punctuation">.</span>NUnit</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">NUnit<span class="token punctuation">.</span>Framework</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">PlaywrightTests</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">TestFixture</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExampleTests</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">PageTest</span></span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Test</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">StatusBecomesSubmitted</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">await</span> Page<span class="token punctuation">.</span><span class="token function">Locator</span><span class="token punctuation">(</span><span class="token string">&quot;#submit-button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ClickAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">await</span> <span class="token function">Expect</span><span class="token punctuation">(</span>Page<span class="token punctuation">.</span><span class="token function">Locator</span><span class="token punctuation">(</span><span class="token string">&quot;.status&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToHaveTextAsync</span><span class="token punctuation">(</span><span class="token string">&quot;Submitted&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Playwright will be re-testing the node with the selector <code>.status</code> until fetched Node has the <code>&quot;Submitted&quot;</code><br> text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is<br> reached. You can pass this timeout as an option.</p><p>By default, the timeout for assertions is set to 5 seconds.</p><h2 id="method-playwrightassertions-expectapiresponse" tabindex="-1"><a class="header-anchor" href="#method-playwrightassertions-expectapiresponse" aria-hidden="true">#</a> method: PlaywrightAssertions.expectAPIResponse</h2><ul><li>since: v1.18</li><li>langs: <ul><li>alias-java: assertThat</li><li>alias-python: expect</li><li>alias-js: expect</li><li>alias-csharp: Expect</li></ul></li></ul><ul><li>returns: &lt;[APIResponseAssertions]&gt;</li></ul><p>Creates a [APIResponseAssertions] object for the given [APIResponse].</p><p><strong>Usage</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">PlaywrightAssertions</span><span class="token punctuation">.</span><span class="token function">assertThat</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isOK</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="param-playwrightassertions-expectapiresponse-response" tabindex="-1"><a class="header-anchor" href="#param-playwrightassertions-expectapiresponse-response" aria-hidden="true">#</a> param: PlaywrightAssertions.expectAPIResponse.response</h3><ul><li>since: v1.18</li></ul><ul><li><code>response</code> &lt;[APIResponse]&gt;</li></ul><p>[APIResponse] object to use for assertions.</p><h2 id="method-playwrightassertions-expectgeneric" tabindex="-1"><a class="header-anchor" href="#method-playwrightassertions-expectgeneric" aria-hidden="true">#</a> method: PlaywrightAssertions.expectGeneric</h2><ul><li>since: v1.9</li><li>langs: js <ul><li>alias-js: expect</li></ul></li></ul><ul><li>returns: &lt;[GenericAssertions]&gt;</li></ul><p>Creates a [GenericAssertions] object for the given value.</p><h3 id="param-playwrightassertions-expectgeneric-value" tabindex="-1"><a class="header-anchor" href="#param-playwrightassertions-expectgeneric-value" aria-hidden="true">#</a> param: PlaywrightAssertions.expectGeneric.value</h3><ul><li>since: v1.9</li><li>langs: js</li></ul><ul><li><code>value</code> &lt;[any]&gt;</li></ul><p>Value that will be asserted.</p><h2 id="method-playwrightassertions-expectlocator" tabindex="-1"><a class="header-anchor" href="#method-playwrightassertions-expectlocator" aria-hidden="true">#</a> method: PlaywrightAssertions.expectLocator</h2><ul><li>since: v1.18</li><li>langs: <ul><li>alias-java: assertThat</li><li>alias-python: expect</li><li>alias-js: expect</li><li>alias-csharp: Expect</li></ul></li></ul><ul><li>returns: &lt;[LocatorAssertions]&gt;</li></ul><p>Creates a [LocatorAssertions] object for the given [Locator].</p><p><strong>Usage</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">PlaywrightAssertions</span><span class="token punctuation">.</span><span class="token function">assertThat</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">await</span> <span class="token function">Expect</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToBeVisibleAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="param-playwrightassertions-expectlocator-locator" tabindex="-1"><a class="header-anchor" href="#param-playwrightassertions-expectlocator-locator" aria-hidden="true">#</a> param: PlaywrightAssertions.expectLocator.locator</h3><ul><li>since: v1.18</li></ul><ul><li><code>locator</code> &lt;[Locator]&gt;</li></ul><p>[Locator] object to use for assertions.</p><h2 id="method-playwrightassertions-expectpage" tabindex="-1"><a class="header-anchor" href="#method-playwrightassertions-expectpage" aria-hidden="true">#</a> method: PlaywrightAssertions.expectPage</h2><ul><li>since: v1.18</li><li>langs: <ul><li>alias-java: assertThat</li><li>alias-python: expect</li><li>alias-js: expect</li><li>alias-csharp: Expect</li></ul></li></ul><ul><li>returns: &lt;[PageAssertions]&gt;</li></ul><p>Creates a [PageAssertions] object for the given [Page].</p><p><strong>Usage</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">PlaywrightAssertions</span><span class="token punctuation">.</span><span class="token function">assertThat</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasTitle</span><span class="token punctuation">(</span><span class="token string">&quot;News&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">await</span> <span class="token function">Expect</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToHaveTitleAsync</span><span class="token punctuation">(</span><span class="token string">&quot;News&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="param-playwrightassertions-expectpage-page" tabindex="-1"><a class="header-anchor" href="#param-playwrightassertions-expectpage-page" aria-hidden="true">#</a> param: PlaywrightAssertions.expectPage.page</h3><ul><li>since: v1.18</li></ul><ul><li><code>page</code> &lt;[Page]&gt;</li></ul><p>[Page] object to use for assertions.</p><h2 id="method-playwrightassertions-setdefaultassertiontimeout" tabindex="-1"><a class="header-anchor" href="#method-playwrightassertions-setdefaultassertiontimeout" aria-hidden="true">#</a> method: PlaywrightAssertions.setDefaultAssertionTimeout</h2><ul><li>since: v1.25</li><li>langs: java</li></ul><p>Changes default timeout for Playwright assertions from 5 seconds to the specified value.</p><p><strong>Usage</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">PlaywrightAssertions</span><span class="token punctuation">.</span><span class="token function">setDefaultAssertionTimeout</span><span class="token punctuation">(</span><span class="token number">30_000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="param-playwrightassertions-setdefaultassertiontimeout-timeout" tabindex="-1"><a class="header-anchor" href="#param-playwrightassertions-setdefaultassertiontimeout-timeout" aria-hidden="true">#</a> param: PlaywrightAssertions.setDefaultAssertionTimeout.timeout</h3><ul><li>since: v1.25</li></ul><ul><li><code>timeout</code> &lt;[float]&gt;</li></ul><p>Timeout in milliseconds.</p>`,60),o=[p];function i(c,l){return n(),a("div",null,o)}const d=s(e,[["render",i],["__file","class-playwrightassertions.html.vue"]]);export{d as default};
