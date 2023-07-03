import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a,b as t,d as r,f as n}from"./app-207e7d61.js";const p={},i=n(`<h1 id="class-framelocator" tabindex="-1"><a class="header-anchor" href="#class-framelocator" aria-hidden="true">#</a> class: FrameLocator</h1><ul><li>since: v1.17</li></ul><p>FrameLocator represents a view to the <code>iframe</code> on the page. It captures the logic sufficient to retrieve the <code>iframe</code> and locate elements in that iframe. FrameLocator can be created with either [<code>method: Page.frameLocator</code>] or [<code>method: Locator.frameLocator</code>] method.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> locator <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">frameLocator</span><span class="token punctuation">(</span><span class="token string">&#39;#my-frame&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;Submit&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> locator<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Locator</span> locator <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">frameLocator</span><span class="token punctuation">(</span><span class="token string">&quot;#my-frame&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&quot;Submit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
locator<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>locator <span class="token operator">=</span> page<span class="token punctuation">.</span>frame_locator<span class="token punctuation">(</span><span class="token string">&quot;#my-frame&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_by_text<span class="token punctuation">(</span><span class="token string">&quot;Submit&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> locator<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>locator <span class="token operator">=</span> page<span class="token punctuation">.</span>frame_locator<span class="token punctuation">(</span><span class="token string">&quot;my-frame&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_by_text<span class="token punctuation">(</span><span class="token string">&quot;Submit&quot;</span><span class="token punctuation">)</span>
locator<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> locator <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">FrameLocator</span><span class="token punctuation">(</span><span class="token string">&quot;#my-frame&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetByText</span><span class="token punctuation">(</span><span class="token string">&quot;Submit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> locator<span class="token punctuation">.</span><span class="token function">ClickAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Strictness</strong></p><p>Frame locators are strict. This means that all operations on frame locators will throw if more than one element matches a given selector.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Throws if there are several frames in DOM:</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">frameLocator</span><span class="token punctuation">(</span><span class="token string">&#39;.result-frame&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Works because we explicitly tell locator to pick the first frame:</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">frameLocator</span><span class="token punctuation">(</span><span class="token string">&#39;.result-frame&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Throws if there are several frames in DOM:</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span>frame_locator<span class="token punctuation">(</span><span class="token string">&#39;.result-frame&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_by_role<span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Works because we explicitly tell locator to pick the first frame:</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span>frame_locator<span class="token punctuation">(</span><span class="token string">&#39;.result-frame&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>first<span class="token punctuation">.</span>get_by_role<span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Throws if there are several frames in DOM:</span>
page<span class="token punctuation">.</span>frame_locator<span class="token punctuation">(</span><span class="token string">&#39;.result-frame&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_by_role<span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Works because we explicitly tell locator to pick the first frame:</span>
page<span class="token punctuation">.</span>frame_locator<span class="token punctuation">(</span><span class="token string">&#39;.result-frame&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>first<span class="token punctuation">.</span>get_by_role<span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Throws if there are several frames in DOM:</span>
page<span class="token punctuation">.</span><span class="token function">frame_locator</span><span class="token punctuation">(</span><span class="token string">&quot;.result-frame&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token class-name">AriaRole</span><span class="token punctuation">.</span><span class="token constant">BUTTON</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Works because we explicitly tell locator to pick the first frame:</span>
page<span class="token punctuation">.</span><span class="token function">frame_locator</span><span class="token punctuation">(</span><span class="token string">&quot;.result-frame&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token class-name">AriaRole</span><span class="token punctuation">.</span><span class="token constant">BUTTON</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Throws if there are several frames in DOM:</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">FrameLocator</span><span class="token punctuation">(</span><span class="token string">&quot;.result-frame&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetByRole</span><span class="token punctuation">(</span>AriaRole<span class="token punctuation">.</span>Button<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ClickAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Works because we explicitly tell locator to pick the first frame:</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">FrameLocator</span><span class="token punctuation">(</span><span class="token string">&quot;.result-frame&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>First<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span>AriaRole<span class="token punctuation">.</span>Button<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ClickAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Converting Locator to FrameLocator</strong></p>`,16),u=a("code",null,"iframe",-1),d={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:scope",target:"_blank",rel:"noopener noreferrer"},m=a("code",null,":scope",-1),h=n(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> frameLocator <span class="token operator">=</span> locator<span class="token punctuation">.</span><span class="token function">frameLocator</span><span class="token punctuation">(</span><span class="token string">&#39;:scope&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Locator</span> frameLocator <span class="token operator">=</span> locator<span class="token punctuation">.</span><span class="token function">frameLocator</span><span class="token punctuation">(</span><span class="token char">&#39;:scope&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>frameLocator <span class="token operator">=</span> locator<span class="token punctuation">.</span>frame_locator<span class="token punctuation">(</span><span class="token string">&quot;:scope&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>frameLocator <span class="token operator">=</span> locator<span class="token punctuation">.</span>frame_locator<span class="token punctuation">(</span><span class="token string">&quot;:scope&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> frameLocator <span class="token operator">=</span> locator<span class="token punctuation">.</span><span class="token function">FrameLocator</span><span class="token punctuation">(</span><span class="token string">&quot;:scope&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="method-framelocator-first" tabindex="-1"><a class="header-anchor" href="#method-framelocator-first" aria-hidden="true">#</a> method: FrameLocator.first</h2><ul><li>since: v1.17</li></ul><ul><li>returns: &lt;[FrameLocator]&gt;</li></ul><p>Returns locator to the first matching frame.</p><h2 id="method-framelocator-framelocator" tabindex="-1"><a class="header-anchor" href="#method-framelocator-framelocator" aria-hidden="true">#</a> method: FrameLocator.frameLocator</h2><ul><li>since: v1.17</li></ul><ul><li>returns: &lt;[FrameLocator]&gt;</li></ul><p>When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements<br> in that iframe.</p><h3 id="param-framelocator-framelocator-selector-find-selector" tabindex="-1"><a class="header-anchor" href="#param-framelocator-framelocator-selector-find-selector" aria-hidden="true">#</a> param: FrameLocator.frameLocator.selector = %%-find-selector-%%</h3><ul><li>since: v1.17</li></ul><h2 id="method-framelocator-getbyalttext" tabindex="-1"><a class="header-anchor" href="#method-framelocator-getbyalttext" aria-hidden="true">#</a> method: FrameLocator.getByAltText</h2><ul><li>since: v1.27</li></ul><ul><li>returns: &lt;[Locator]&gt;</li></ul><p>%%-template-locator-get-by-alt-text-%%</p><h3 id="param-framelocator-getbyalttext-text-locator-get-by-text-text" tabindex="-1"><a class="header-anchor" href="#param-framelocator-getbyalttext-text-locator-get-by-text-text" aria-hidden="true">#</a> param: FrameLocator.getByAltText.text = %%-locator-get-by-text-text-%%</h3><h3 id="option-framelocator-getbyalttext-exact-locator-get-by-text-exact" tabindex="-1"><a class="header-anchor" href="#option-framelocator-getbyalttext-exact-locator-get-by-text-exact" aria-hidden="true">#</a> option: FrameLocator.getByAltText.exact = %%-locator-get-by-text-exact-%%</h3><h2 id="method-framelocator-getbylabel" tabindex="-1"><a class="header-anchor" href="#method-framelocator-getbylabel" aria-hidden="true">#</a> method: FrameLocator.getByLabel</h2><ul><li>since: v1.27</li></ul><ul><li>returns: &lt;[Locator]&gt;</li></ul><p>%%-template-locator-get-by-label-text-%%</p><h3 id="param-framelocator-getbylabel-text-locator-get-by-text-text" tabindex="-1"><a class="header-anchor" href="#param-framelocator-getbylabel-text-locator-get-by-text-text" aria-hidden="true">#</a> param: FrameLocator.getByLabel.text = %%-locator-get-by-text-text-%%</h3><h3 id="option-framelocator-getbylabel-exact-locator-get-by-text-exact" tabindex="-1"><a class="header-anchor" href="#option-framelocator-getbylabel-exact-locator-get-by-text-exact" aria-hidden="true">#</a> option: FrameLocator.getByLabel.exact = %%-locator-get-by-text-exact-%%</h3><h2 id="method-framelocator-getbyplaceholder" tabindex="-1"><a class="header-anchor" href="#method-framelocator-getbyplaceholder" aria-hidden="true">#</a> method: FrameLocator.getByPlaceholder</h2><ul><li>since: v1.27</li></ul><ul><li>returns: &lt;[Locator]&gt;</li></ul><p>%%-template-locator-get-by-placeholder-text-%%</p><h3 id="param-framelocator-getbyplaceholder-text-locator-get-by-text-text" tabindex="-1"><a class="header-anchor" href="#param-framelocator-getbyplaceholder-text-locator-get-by-text-text" aria-hidden="true">#</a> param: FrameLocator.getByPlaceholder.text = %%-locator-get-by-text-text-%%</h3><h3 id="option-framelocator-getbyplaceholder-exact-locator-get-by-text-exact" tabindex="-1"><a class="header-anchor" href="#option-framelocator-getbyplaceholder-exact-locator-get-by-text-exact" aria-hidden="true">#</a> option: FrameLocator.getByPlaceholder.exact = %%-locator-get-by-text-exact-%%</h3><h2 id="method-framelocator-getbyrole" tabindex="-1"><a class="header-anchor" href="#method-framelocator-getbyrole" aria-hidden="true">#</a> method: FrameLocator.getByRole</h2><ul><li>since: v1.27</li></ul><ul><li>returns: &lt;[Locator]&gt;</li></ul><p>%%-template-locator-get-by-role-%%</p><h3 id="param-framelocator-getbyrole-role-locator-get-by-role-role" tabindex="-1"><a class="header-anchor" href="#param-framelocator-getbyrole-role-locator-get-by-role-role" aria-hidden="true">#</a> param: FrameLocator.getByRole.role = %%-locator-get-by-role-role-%%</h3><h3 id="option-framelocator-getbyrole-inline-locator-get-by-role-option-list-v1-27" tabindex="-1"><a class="header-anchor" href="#option-framelocator-getbyrole-inline-locator-get-by-role-option-list-v1-27" aria-hidden="true">#</a> option: FrameLocator.getByRole.-inline- = %%-locator-get-by-role-option-list-v1.27-%%</h3><ul><li>since: v1.27</li></ul><h3 id="option-framelocator-getbyrole-exact-locator-get-by-role-option-exact" tabindex="-1"><a class="header-anchor" href="#option-framelocator-getbyrole-exact-locator-get-by-role-option-exact" aria-hidden="true">#</a> option: FrameLocator.getByRole.exact = %%-locator-get-by-role-option-exact-%%</h3><h2 id="method-framelocator-getbytestid" tabindex="-1"><a class="header-anchor" href="#method-framelocator-getbytestid" aria-hidden="true">#</a> method: FrameLocator.getByTestId</h2><ul><li>since: v1.27</li></ul><ul><li>returns: &lt;[Locator]&gt;</li></ul><p>%%-template-locator-get-by-test-id-%%</p><h3 id="param-framelocator-getbytestid-testid-locator-get-by-test-id-test-id" tabindex="-1"><a class="header-anchor" href="#param-framelocator-getbytestid-testid-locator-get-by-test-id-test-id" aria-hidden="true">#</a> param: FrameLocator.getByTestId.testId = %%-locator-get-by-test-id-test-id-%%</h3><ul><li>since: v1.27</li></ul><h2 id="method-framelocator-getbytext" tabindex="-1"><a class="header-anchor" href="#method-framelocator-getbytext" aria-hidden="true">#</a> method: FrameLocator.getByText</h2><ul><li>since: v1.27</li></ul><ul><li>returns: &lt;[Locator]&gt;</li></ul><p>%%-template-locator-get-by-text-%%</p><h3 id="param-framelocator-getbytext-text-locator-get-by-text-text" tabindex="-1"><a class="header-anchor" href="#param-framelocator-getbytext-text-locator-get-by-text-text" aria-hidden="true">#</a> param: FrameLocator.getByText.text = %%-locator-get-by-text-text-%%</h3><h3 id="option-framelocator-getbytext-exact-locator-get-by-text-exact" tabindex="-1"><a class="header-anchor" href="#option-framelocator-getbytext-exact-locator-get-by-text-exact" aria-hidden="true">#</a> option: FrameLocator.getByText.exact = %%-locator-get-by-text-exact-%%</h3><h2 id="method-framelocator-getbytitle" tabindex="-1"><a class="header-anchor" href="#method-framelocator-getbytitle" aria-hidden="true">#</a> method: FrameLocator.getByTitle</h2><ul><li>since: v1.27</li></ul><ul><li>returns: &lt;[Locator]&gt;</li></ul><p>%%-template-locator-get-by-title-%%</p><h3 id="param-framelocator-getbytitle-text-locator-get-by-text-text" tabindex="-1"><a class="header-anchor" href="#param-framelocator-getbytitle-text-locator-get-by-text-text" aria-hidden="true">#</a> param: FrameLocator.getByTitle.text = %%-locator-get-by-text-text-%%</h3><h3 id="option-framelocator-getbytitle-exact-locator-get-by-text-exact" tabindex="-1"><a class="header-anchor" href="#option-framelocator-getbytitle-exact-locator-get-by-text-exact" aria-hidden="true">#</a> option: FrameLocator.getByTitle.exact = %%-locator-get-by-text-exact-%%</h3><h2 id="method-framelocator-last" tabindex="-1"><a class="header-anchor" href="#method-framelocator-last" aria-hidden="true">#</a> method: FrameLocator.last</h2><ul><li>since: v1.17</li></ul><ul><li>returns: &lt;[FrameLocator]&gt;</li></ul><p>Returns locator to the last matching frame.</p><h2 id="method-framelocator-locator" tabindex="-1"><a class="header-anchor" href="#method-framelocator-locator" aria-hidden="true">#</a> method: FrameLocator.locator</h2><ul><li>since: v1.17</li></ul><ul><li>returns: &lt;[Locator]&gt;</li></ul><p>%%-template-locator-locator-%%</p><h3 id="param-framelocator-locator-selector-find-selector" tabindex="-1"><a class="header-anchor" href="#param-framelocator-locator-selector-find-selector" aria-hidden="true">#</a> param: FrameLocator.locator.selector = %%-find-selector-%%</h3><ul><li>since: v1.17</li></ul><h3 id="option-framelocator-locator-inline-locator-options-list-v1-14" tabindex="-1"><a class="header-anchor" href="#option-framelocator-locator-inline-locator-options-list-v1-14" aria-hidden="true">#</a> option: FrameLocator.locator.-inline- = %%-locator-options-list-v1.14-%%</h3><ul><li>since: v1.17</li></ul><h2 id="method-framelocator-nth" tabindex="-1"><a class="header-anchor" href="#method-framelocator-nth" aria-hidden="true">#</a> method: FrameLocator.nth</h2><ul><li>since: v1.17</li></ul><ul><li>returns: &lt;[FrameLocator]&gt;</li></ul><p>Returns locator to the n-th matching frame. It&#39;s zero based, <code>nth(0)</code> selects the first frame.</p><h3 id="param-framelocator-nth-index" tabindex="-1"><a class="header-anchor" href="#param-framelocator-nth-index" aria-hidden="true">#</a> param: FrameLocator.nth.index</h3><ul><li>since: v1.17</li></ul><ul><li><code>index</code> &lt;[int]&gt;</li></ul>`,78);function k(g,f){const e=o("ExternalLinkIcon");return c(),l("div",null,[i,a("p",null,[t("If you have a [Locator] object pointing to an "),u,t(" it can be converted to [FrameLocator] using "),a("a",d,[m,r(e)]),t(" CSS selector:")]),h])}const x=s(p,[["render",k],["__file","class-framelocator.html.vue"]]);export{x as default};
