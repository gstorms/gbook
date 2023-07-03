import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t,f as e}from"./app-3f278ba4.js";const o={},p=e(`<h2 id="custom-selector-engines" tabindex="-1"><a class="header-anchor" href="#custom-selector-engines" aria-hidden="true">#</a> Custom selector engines</h2><p>Playwright supports custom selector engines, registered with [<code>method: Selectors.register</code>].</p><p>Selector engine should have the following properties:</p><ul><li><code>create</code> function to create a relative selector from <code>root</code> (root is either a <code>Document</code>, <code>ShadowRoot</code> or <code>Element</code>)<br> to a <code>target</code> element.</li><li><code>query</code> function to query first element matching <code>selector</code> relative to the <code>root</code>.</li><li><code>queryAll</code> function to query all elements matching <code>selector</code> relative to the <code>root</code>.</li></ul><p>By default the engine is run directly in the frame&#39;s JavaScript context and, for example, can call an<br> application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM,<br> register the engine with <code>{contentScript: true}</code> option. Content script engine is safer because it is protected from any<br> tampering with the global objects, for example altering <code>Node.prototype</code> methods. All built-in selector engines run as<br> content scripts. Note that running as a content script is not guaranteed when the engine is used together with other<br> custom engines.</p><p>Selectors must be registered before creating the page.</p><p>An example of registering selector engine that queries elements based on a tag name:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Must be a function that evaluates to a selector engine instance.</span>
<span class="token keyword">const</span> <span class="token function-variable function">createTagNameEngine</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Returns the first element matching given selector in the root&#39;s subtree.</span>
  <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> root<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Returns all elements matching given selector in the root&#39;s subtree.</span>
  <span class="token function">queryAll</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Register selectors before any page is created.</span>
test<span class="token punctuation">.</span><span class="token function">beforeAll</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> playwright <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Register the engine. Selectors will be prefixed with &quot;tag=&quot;.</span>
  <span class="token keyword">await</span> playwright<span class="token punctuation">.</span>selectors<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;tag&#39;</span><span class="token punctuation">,</span> createTagNameEngine<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;selector engine test&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Now we can use &#39;tag=&#39; selectors.</span>
  <span class="token keyword">const</span> button <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&#39;tag=button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> button<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// We can combine it with built-in locators.</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&#39;tag=div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;Click me&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// We can use it in any methods supporting selectors.</span>
  <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&#39;tag=button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveCount</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Must be a script that evaluates to a selector engine instance.  The script is evaluated in the page context.</span>
<span class="token class-name">String</span> createTagNameEngine <span class="token operator">=</span> <span class="token string">&quot;{\\n&quot;</span> <span class="token operator">+</span>
  <span class="token string">&quot;  // Returns the first element matching given selector in the root&#39;s subtree.\\n&quot;</span> <span class="token operator">+</span>
  <span class="token string">&quot;  query(root, selector) {\\n&quot;</span> <span class="token operator">+</span>
  <span class="token string">&quot;    return root.querySelector(selector);\\n&quot;</span> <span class="token operator">+</span>
  <span class="token string">&quot;  },\\n&quot;</span> <span class="token operator">+</span>
  <span class="token string">&quot;\\n&quot;</span> <span class="token operator">+</span>
  <span class="token string">&quot;  // Returns all elements matching given selector in the root&#39;s subtree.\\n&quot;</span> <span class="token operator">+</span>
  <span class="token string">&quot;  queryAll(root, selector) {\\n&quot;</span> <span class="token operator">+</span>
  <span class="token string">&quot;    return Array.from(root.querySelectorAll(selector));\\n&quot;</span> <span class="token operator">+</span>
  <span class="token string">&quot;  }\\n&quot;</span> <span class="token operator">+</span>
  <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Register the engine. Selectors will be prefixed with &quot;tag=&quot;.</span>
playwright<span class="token punctuation">.</span><span class="token function">selectors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;tag&quot;</span><span class="token punctuation">,</span> createTagNameEngine<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Now we can use &quot;tag=&quot; selectors.</span>
<span class="token class-name">Locator</span> button <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&quot;tag=button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// We can combine it with built-in locators.</span>
page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&quot;tag=div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&quot;Click me&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// We can use it in any methods supporting selectors.</span>
<span class="token keyword">int</span> buttonCount <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&quot;tag=button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tag_selector <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
    // Must evaluate to a selector engine instance.
    {
      // Returns the first element matching given selector in the root&#39;s subtree.
      query(root, selector) {
        return root.querySelector(selector);
      },

      // Returns all elements matching given selector in the root&#39;s subtree.
      queryAll(root, selector) {
        return Array.from(root.querySelectorAll(selector));
      }
    }&quot;&quot;&quot;</span>

<span class="token comment"># register the engine. selectors will be prefixed with &quot;tag=&quot;.</span>
<span class="token keyword">await</span> playwright<span class="token punctuation">.</span>selectors<span class="token punctuation">.</span>register<span class="token punctuation">(</span><span class="token string">&quot;tag&quot;</span><span class="token punctuation">,</span> tag_selector<span class="token punctuation">)</span>

<span class="token comment"># now we can use &quot;tag=&quot; selectors.</span>
button <span class="token operator">=</span> page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&quot;tag=button&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> button<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># we can combine it with built-in locators.</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&quot;tag=div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_by_text<span class="token punctuation">(</span><span class="token string">&quot;click me&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># we can use it in any methods supporting selectors.</span>
button_count <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&quot;tag=button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tag_selector <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
    // Must evaluate to a selector engine instance.
    {
      // Returns the first element matching given selector in the root&#39;s subtree.
      query(root, selector) {
        return root.querySelector(selector);
      },

      // Returns all elements matching given selector in the root&#39;s subtree.
      queryAll(root, selector) {
        return Array.from(root.querySelectorAll(selector));
      }
    }&quot;&quot;&quot;</span>

<span class="token comment"># register the engine. selectors will be prefixed with &quot;tag=&quot;.</span>
playwright<span class="token punctuation">.</span>selectors<span class="token punctuation">.</span>register<span class="token punctuation">(</span><span class="token string">&quot;tag&quot;</span><span class="token punctuation">,</span> tag_selector<span class="token punctuation">)</span>

<span class="token comment"># now we can use &quot;tag=&quot; selectors.</span>
button <span class="token operator">=</span> page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&quot;tag=button&quot;</span><span class="token punctuation">)</span>
button<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># we can combine it with built-in locators.</span>
page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&quot;tag=div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_by_text<span class="token punctuation">(</span><span class="token string">&quot;click me&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># we can use it in any methods supporting selectors.</span>
button_count <span class="token operator">=</span> page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&quot;tag=button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function c(i,l){return s(),a("div",null,[t(" TOC "),p])}const d=n(o,[["render",c],["__file","extensibility.html.vue"]]);export{d as default};
