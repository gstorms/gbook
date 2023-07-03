import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-207e7d61.js";const t={},p=e(`<p>A [Page] can have one or more [Frame] objects attached to it. Each page has a main frame and page-level interactions<br> (like <code>click</code>) are assumed to operate in the main frame.</p><p>A page can have additional frames attached with the <code>iframe</code> HTML tag. These frames can be accessed for interactions<br> inside the frame.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Locate element inside frame</span>
<span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">frameLocator</span><span class="token punctuation">(</span><span class="token string">&#39;.frame-class&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByLabel</span><span class="token punctuation">(</span><span class="token string">&#39;User Name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> username<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Locate element inside frame</span>
<span class="token class-name">Locator</span> username <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">frameLocator</span><span class="token punctuation">(</span><span class="token string">&quot;.frame-class&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByLabel</span><span class="token punctuation">(</span><span class="token string">&quot;User Name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
username<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Locate element inside frame</span>
username <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span>frame_locator<span class="token punctuation">(</span><span class="token string">&#39;.frame-class&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_by_label<span class="token punctuation">(</span><span class="token string">&#39;User Name&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> username<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Locate element inside frame</span>
<span class="token comment"># Get frame using any other selector</span>
username <span class="token operator">=</span> page<span class="token punctuation">.</span>frame_locator<span class="token punctuation">(</span><span class="token string">&#39;.frame-class&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_by_label<span class="token punctuation">(</span><span class="token string">&#39;User Name&#39;</span><span class="token punctuation">)</span>
username<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Locate element inside frame</span>
<span class="token class-name"><span class="token keyword">var</span></span> username <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">FrameLocator</span><span class="token punctuation">(</span><span class="token string">&quot;.frame-class&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetByLabel</span><span class="token punctuation">(</span><span class="token string">&quot;User Name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> username<span class="token punctuation">.</span><span class="token function">FillAsync</span><span class="token punctuation">(</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="frame-objects" tabindex="-1"><a class="header-anchor" href="#frame-objects" aria-hidden="true">#</a> Frame objects</h2><p>One can access frame objects using the [<code>method: Page.frame</code>] API:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Get frame using the frame&#39;s name attribute</span>
<span class="token keyword">const</span> frame <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span><span class="token string">&#39;frame-login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get frame using frame&#39;s URL</span>
<span class="token keyword">const</span> frame <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.*domain.*</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Interact with the frame</span>
<span class="token keyword">await</span> frame<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;#username-input&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Get frame using the frame&quot;s name attribute</span>
<span class="token class-name">Frame</span> frame <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span><span class="token string">&quot;frame-login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get frame using frame&quot;s URL</span>
<span class="token class-name">Frame</span> frame <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">frameByUrl</span><span class="token punctuation">(</span><span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;.*domain.*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Interact with the frame</span>
frame<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&quot;#username-input&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Get frame using the frame&#39;s name attribute</span>
frame <span class="token operator">=</span> page<span class="token punctuation">.</span>frame<span class="token punctuation">(</span><span class="token string">&#39;frame-login&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Get frame using frame&#39;s URL</span>
frame <span class="token operator">=</span> page<span class="token punctuation">.</span>frame<span class="token punctuation">(</span>url<span class="token operator">=</span><span class="token string">r&#39;.*domain.*&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Interact with the frame</span>
<span class="token keyword">await</span> frame<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token string">&#39;#username-input&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Get frame using the frame&#39;s name attribute</span>
frame <span class="token operator">=</span> page<span class="token punctuation">.</span>frame<span class="token punctuation">(</span><span class="token string">&#39;frame-login&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Get frame using frame&#39;s URL</span>
frame <span class="token operator">=</span> page<span class="token punctuation">.</span>frame<span class="token punctuation">(</span>url<span class="token operator">=</span><span class="token string">r&#39;.*domain.*&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Interact with the frame</span>
frame<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token string">&#39;#username-input&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Create a page.</span>
<span class="token class-name"><span class="token keyword">var</span></span> page <span class="token operator">=</span> <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">NewPageAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get frame using the frame&#39;s name attribute</span>
<span class="token class-name"><span class="token keyword">var</span></span> frame <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">Frame</span><span class="token punctuation">(</span><span class="token string">&quot;frame-login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get frame using frame&#39;s URL</span>
<span class="token class-name"><span class="token keyword">var</span></span> frame <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">FrameByUrl</span><span class="token punctuation">(</span><span class="token string">&quot;*domain.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get frame using any other selector</span>
<span class="token class-name"><span class="token keyword">var</span></span> frameElementHandle <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">EvaluateAsync</span><span class="token punctuation">(</span><span class="token string">&quot;window.frames[1]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> frame <span class="token operator">=</span> <span class="token keyword">await</span> frameElementHandle<span class="token punctuation">.</span><span class="token function">ContentFrameAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Interact with the frame</span>
<span class="token keyword">await</span> frame<span class="token punctuation">.</span><span class="token function">FillAsync</span><span class="token punctuation">(</span><span class="token string">&quot;#username-input&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[p];function c(i,l){return s(),a("div",null,o)}const m=n(t,[["render",c],["__file","frames.html.vue"]]);export{m as default};