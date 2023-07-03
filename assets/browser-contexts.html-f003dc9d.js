import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,a as c,b as n,d as i,w as l,f as s}from"./app-3f278ba4.js";const u={},r=s(`<p>Tests written with Playwright execute in isolated clean-slate environments called browser contexts. This isolation model improves reproducibility and prevents cascading test failures.</p><h2 id="what-is-test-isolation" tabindex="-1"><a class="header-anchor" href="#what-is-test-isolation" aria-hidden="true">#</a> What is Test Isolation?</h2><p>Test Isolation is when each test is completely isolated from another test. Every test runs independently from any other test. This means that each test has it&#39;s own local storage, session storage, cookies etc. Playwright achieves this using [BrowserContext]s which are equivalent to incognito-like profiles. They are fast and cheap to create and are completely isolated, even when running in a single browser. Playwright creates a context for each test, and provides a default [Page] in that context.</p><h2 id="why-is-test-isolation-important" tabindex="-1"><a class="header-anchor" href="#why-is-test-isolation-important" aria-hidden="true">#</a> Why is Test Isolation Important?</h2><ul><li>No failure carry-over. If one test fails it doesn&#39;t affect the other test.</li><li>Easy to debug errors or flakiness, because you can run just a single test as many times as you&#39;d like.</li><li>Don&#39;t have to think about the order when running in parallel, sharding, etc.</li></ul><h2 id="two-ways-of-test-isolation" tabindex="-1"><a class="header-anchor" href="#two-ways-of-test-isolation" aria-hidden="true">#</a> Two Ways of Test Isolation</h2><p>There are two different strategies when it comes to Test Isolation: start from scratch or cleanup in between. The problem with cleaning up in between tests is that it can be easy to forget to clean up and some things are impossible to clean up such as &quot;visited links&quot;. State from one test can leak into the next test which could cause your test to fail and make debugging harder as the problem comes from another test. Starting from scratch means everything is new, so if the test fails you only have to look within that test to debug.</p><h2 id="how-playwright-achieves-test-isolation" tabindex="-1"><a class="header-anchor" href="#how-playwright-achieves-test-isolation" aria-hidden="true">#</a> How Playwright Achieves Test Isolation</h2><p>Playwright uses browser contexts to achieve Test Isolation. Each test has it&#39;s own Browser Context. Running the test creates a new browser context each time. When using Playwright as a Test Runner, browser contexts are created by default. Otherwise, you can create browser contexts manually.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> test <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;example test&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page<span class="token punctuation">,</span> context <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// &quot;context&quot; is an isolated BrowserContext, created for this specific test.</span>
  <span class="token comment">// &quot;page&quot; belongs to this context.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;another test&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page<span class="token punctuation">,</span> context <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// &quot;context&quot; and &quot;page&quot; in this second test are completely</span>
  <span class="token comment">// isolated from the first test.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> test <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;example test&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page<span class="token punctuation">,</span> context <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// &quot;context&quot; is an isolated BrowserContext, created for this specific test.</span>
  <span class="token comment">// &quot;page&quot; belongs to this context.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;another test&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page<span class="token punctuation">,</span> context <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// &quot;context&quot; and &quot;page&quot; in this second test are completely</span>
  <span class="token comment">// isolated from the first test.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> chromium<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Browser</span> browser <span class="token operator">=</span> chromium<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BrowserContext</span> context <span class="token operator">=</span> browser<span class="token punctuation">.</span><span class="token function">newContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Page</span> page <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>browser <span class="token operator">=</span> <span class="token keyword">await</span> playwright<span class="token punctuation">.</span>chromium<span class="token punctuation">.</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
context <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span>new_context<span class="token punctuation">(</span><span class="token punctuation">)</span>
page <span class="token operator">=</span> <span class="token keyword">await</span> context<span class="token punctuation">.</span>new_page<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>browser <span class="token operator">=</span> playwright<span class="token punctuation">.</span>chromium<span class="token punctuation">.</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
context <span class="token operator">=</span> browser<span class="token punctuation">.</span>new_context<span class="token punctuation">(</span><span class="token punctuation">)</span>
page <span class="token operator">=</span> context<span class="token punctuation">.</span>new_page<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">await</span> <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> browser <span class="token operator">=</span> playwright<span class="token punctuation">.</span>Chromium<span class="token punctuation">.</span><span class="token function">LaunchAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> context <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">NewContextAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> page <span class="token operator">=</span> <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">NewPageAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),k=s(`<h2 id="multiple-contexts-in-a-single-test" tabindex="-1"><a class="header-anchor" href="#multiple-contexts-in-a-single-test" aria-hidden="true">#</a> Multiple Contexts in a Single Test</h2><p>Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like a chat.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> test <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;admin and user&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> browser <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Create two isolated browser contexts</span>
  <span class="token keyword">const</span> adminContext <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> userContext <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// Create pages and interact with contexts independently</span>
  <span class="token keyword">const</span> adminPage <span class="token operator">=</span> <span class="token keyword">await</span> adminContext<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> userPage <span class="token operator">=</span> <span class="token keyword">await</span> userContext<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> test <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;admin and user&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> browser <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Create two isolated browser contexts</span>
  <span class="token keyword">const</span> adminContext <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> userContext <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// Create pages and interact with contexts independently</span>
  <span class="token keyword">const</span> adminPage <span class="token operator">=</span> <span class="token keyword">await</span> adminContext<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> userPage <span class="token operator">=</span> <span class="token keyword">await</span> userContext<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> chromium <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;playwright&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Create a Chromium browser instance</span>
<span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> chromium<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Create two isolated browser contexts</span>
<span class="token keyword">const</span> userContext <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> adminContext <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Create pages and interact with contexts independently</span>
<span class="token keyword">const</span> adminPage <span class="token operator">=</span> <span class="token keyword">await</span> adminContext<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> userPage <span class="token operator">=</span> <span class="token keyword">await</span> userContext<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>microsoft<span class="token punctuation">.</span>playwright<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Playwright</span> playwright <span class="token operator">=</span> <span class="token class-name">Playwright</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">BrowserType</span> chromium <span class="token operator">=</span> playwright<span class="token punctuation">.</span><span class="token function">chromium</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// Create a Chromium browser instance</span>
      <span class="token class-name">Browser</span> browser <span class="token operator">=</span> chromium<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// Create two isolated browser contexts</span>
      <span class="token class-name">BrowserContext</span> userContext <span class="token operator">=</span> browser<span class="token punctuation">.</span><span class="token function">newContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">BrowserContext</span> adminContext <span class="token operator">=</span> browser<span class="token punctuation">.</span><span class="token function">newContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// Create pages and interact with contexts independently</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">from</span> playwright<span class="token punctuation">.</span>async_api <span class="token keyword">import</span> async_playwright

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>playwright<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># create a chromium browser instance</span>
    chromium <span class="token operator">=</span> playwright<span class="token punctuation">.</span>chromium
    browser <span class="token operator">=</span> <span class="token keyword">await</span> chromium<span class="token punctuation">.</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># create two isolated browser contexts</span>
    user_context <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span>new_context<span class="token punctuation">(</span><span class="token punctuation">)</span>
    admin_context <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span>new_context<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># create pages and interact with contexts independently</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> async_playwright<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> playwright<span class="token punctuation">:</span>
        <span class="token keyword">await</span> run<span class="token punctuation">(</span>playwright<span class="token punctuation">)</span>
asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> sync_playwright

<span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>playwright<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># create a chromium browser instance</span>
    chromium <span class="token operator">=</span> playwright<span class="token punctuation">.</span>chromium
    browser <span class="token operator">=</span> chromium<span class="token punctuation">.</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># create two isolated browser contexts</span>
    user_context <span class="token operator">=</span> browser<span class="token punctuation">.</span>new_context<span class="token punctuation">(</span><span class="token punctuation">)</span>
    admin_context <span class="token operator">=</span> browser<span class="token punctuation">.</span>new_context<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># create pages and interact with contexts independently</span>

<span class="token keyword">with</span> sync_playwright<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> playwright<span class="token punctuation">:</span>
    run<span class="token punctuation">(</span>playwright<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>Playwright</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> playwright <span class="token operator">=</span> <span class="token keyword">await</span> Playwright<span class="token punctuation">.</span><span class="token function">CreateAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Create a Chromium browser instance</span>
        <span class="token keyword">await</span> <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> browser <span class="token operator">=</span> <span class="token keyword">await</span> playwright<span class="token punctuation">.</span>Chromium<span class="token punctuation">.</span><span class="token function">LaunchAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">await</span> <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> userContext <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">NewContextAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">await</span> <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> adminContext <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">NewContextAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Create pages and interact with contexts independently.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function d(m,v){const a=e("RouterLink");return p(),o("div",null,[r,c("p",null,[n("Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme. Check out our "),i(a,{to:"/book/playwright/emulation.html"},{default:l(()=>[n("Emulation")]),_:1}),n(" guide for more details.")]),k])}const h=t(u,[["render",d],["__file","browser-contexts.html.vue"]]);export{h as default};
