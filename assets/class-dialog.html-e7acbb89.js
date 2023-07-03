import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a as n,b as s,d as i,f as a}from"./app-3f278ba4.js";const l={},u=a(`<h1 id="class-dialog" tabindex="-1"><a class="header-anchor" href="#class-dialog" aria-hidden="true">#</a> class: Dialog</h1><ul><li>since: v1.8</li></ul><p>[Dialog] objects are dispatched by page via the [<code>event: Page.dialog</code>] event.</p><p>An example of using <code>Dialog</code> class:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> chromium <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;playwright&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Or &#39;firefox&#39; or &#39;webkit&#39;.</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> chromium<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  page<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;dialog&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token parameter">dialog</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dialog<span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> dialog<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>microsoft<span class="token punctuation">.</span>playwright<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Playwright</span> playwright <span class="token operator">=</span> <span class="token class-name">Playwright</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">BrowserType</span> chromium <span class="token operator">=</span> playwright<span class="token punctuation">.</span><span class="token function">chromium</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">Browser</span> browser <span class="token operator">=</span> chromium<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">Page</span> page <span class="token operator">=</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      page<span class="token punctuation">.</span><span class="token function">onDialog</span><span class="token punctuation">(</span>dialog <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dialog<span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dialog<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      page<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token string">&quot;alert(&#39;1&#39;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">from</span> playwright<span class="token punctuation">.</span>async_api <span class="token keyword">import</span> async_playwright

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">handle_dialog</span><span class="token punctuation">(</span>dialog<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>dialog<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token keyword">await</span> dialog<span class="token punctuation">.</span>dismiss<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>playwright<span class="token punctuation">)</span><span class="token punctuation">:</span>
    chromium <span class="token operator">=</span> playwright<span class="token punctuation">.</span>chromium
    browser <span class="token operator">=</span> <span class="token keyword">await</span> chromium<span class="token punctuation">.</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
    page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span>new_page<span class="token punctuation">(</span><span class="token punctuation">)</span>
    page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span> handle_dialog<span class="token punctuation">)</span>
    page<span class="token punctuation">.</span>evaluate<span class="token punctuation">(</span><span class="token string">&quot;alert(&#39;1&#39;)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> browser<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> async_playwright<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> playwright<span class="token punctuation">:</span>
        <span class="token keyword">await</span> run<span class="token punctuation">(</span>playwright<span class="token punctuation">)</span>
asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> sync_playwright

<span class="token keyword">def</span> <span class="token function">handle_dialog</span><span class="token punctuation">(</span>dialog<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>dialog<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    dialog<span class="token punctuation">.</span>dismiss<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>playwright<span class="token punctuation">)</span><span class="token punctuation">:</span>
    chromium <span class="token operator">=</span> playwright<span class="token punctuation">.</span>chromium
    browser <span class="token operator">=</span> chromium<span class="token punctuation">.</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
    page <span class="token operator">=</span> browser<span class="token punctuation">.</span>new_page<span class="token punctuation">(</span><span class="token punctuation">)</span>
    page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span> handle_dialog<span class="token punctuation">)</span>
    page<span class="token punctuation">.</span>evaluate<span class="token punctuation">(</span><span class="token string">&quot;alert(&#39;1&#39;)&quot;</span><span class="token punctuation">)</span>
    browser<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> sync_playwright<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> playwright<span class="token punctuation">:</span>
    run<span class="token punctuation">(</span>playwright<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>Playwright</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">DialogExample</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> playwright <span class="token operator">=</span> <span class="token keyword">await</span> Playwright<span class="token punctuation">.</span><span class="token function">CreateAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">await</span> <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> browser <span class="token operator">=</span> <span class="token keyword">await</span> playwright<span class="token punctuation">.</span>Chromium<span class="token punctuation">.</span><span class="token function">LaunchAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">NewPageAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        page<span class="token punctuation">.</span>Dialog <span class="token operator">+=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> dialog<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        <span class="token punctuation">{</span>
            System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>dialog<span class="token punctuation">.</span>Message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">await</span> dialog<span class="token punctuation">.</span><span class="token function">DismissAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">EvaluateAsync</span><span class="token punctuation">(</span><span class="token string">&quot;alert(&#39;1&#39;);&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r={class:"hint-container note"},d=n("p",{class:"hint-container-title"},"注",-1),k=n("code",null,"event: Page.dialog",-1),v=n("br",null,null,-1),m=n("strong",null,"must",-1),g=n("code",null,"method: Dialog.accept",-1),h=n("code",null,"method: Dialog.dismiss",-1),y={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking",target:"_blank",rel:"noopener noreferrer"},w=a('<h2 id="async-method-dialog-accept" tabindex="-1"><a class="header-anchor" href="#async-method-dialog-accept" aria-hidden="true">#</a> async method: Dialog.accept</h2><ul><li>since: v1.8</li></ul><p>Returns when the dialog has been accepted.</p><h3 id="param-dialog-accept-prompttext" tabindex="-1"><a class="header-anchor" href="#param-dialog-accept-prompttext" aria-hidden="true">#</a> param: Dialog.accept.promptText</h3><ul><li>since: v1.8</li></ul><ul><li><code>promptText</code> ?&lt;[string]&gt;</li></ul><p>A text to enter in prompt. Does not cause any effects if the dialog&#39;s <code>type</code> is not prompt. Optional.</p><h2 id="method-dialog-defaultvalue" tabindex="-1"><a class="header-anchor" href="#method-dialog-defaultvalue" aria-hidden="true">#</a> method: Dialog.defaultValue</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[string]&gt;</li></ul><p>If dialog is prompt, returns default prompt value. Otherwise, returns empty string.</p><h2 id="async-method-dialog-dismiss" tabindex="-1"><a class="header-anchor" href="#async-method-dialog-dismiss" aria-hidden="true">#</a> async method: Dialog.dismiss</h2><ul><li>since: v1.8</li></ul><p>Returns when the dialog has been dismissed.</p><h2 id="method-dialog-message" tabindex="-1"><a class="header-anchor" href="#method-dialog-message" aria-hidden="true">#</a> method: Dialog.message</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[string]&gt;</li></ul><p>A message displayed in the dialog.</p><h2 id="method-dialog-type" tabindex="-1"><a class="header-anchor" href="#method-dialog-type" aria-hidden="true">#</a> method: Dialog.type</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[string]&gt;</li></ul><p>Returns dialog&#39;s type, can be one of <code>alert</code>, <code>beforeunload</code>, <code>confirm</code> or <code>prompt</code>.</p>',22);function b(f,_){const t=e("ExternalLinkIcon");return o(),c("div",null,[u,n("div",r,[d,n("p",null,[s("Dialogs are dismissed automatically, unless there is a ["),k,s("] listener."),v,s(" When listener is present, it "),m,s(" either ["),g,s("] or ["),h,s("] the dialog - otherwise the page will "),n("a",y,[s("freeze"),i(t)]),s(" waiting for the dialog, and actions like click will never finish.")])]),w])}const q=p(l,[["render",b],["__file","class-dialog.html.vue"]]);export{q as default};