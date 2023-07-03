import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as e,c,a as n,b as a,d as t,f as l}from"./app-3f278ba4.js";const i={},u={href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"alert",-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm",target:"_blank",rel:"noopener noreferrer"},r=n("code",null,"confirm",-1),g={href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"prompt",-1),m={href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"beforeunload",-1),h=l(`<h2 id="alert-confirm-prompt-dialogs" tabindex="-1"><a class="header-anchor" href="#alert-confirm-prompt-dialogs" aria-hidden="true">#</a> alert(), confirm(), prompt() dialogs</h2><p>By default, dialogs are auto-dismissed by Playwright, so you don&#39;t have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either [<code>method: Dialog.accept</code>] or [<code>method: Dialog.dismiss</code>] it.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>page<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;dialog&#39;</span><span class="token punctuation">,</span> <span class="token parameter">dialog</span> <span class="token operator">=&gt;</span> dialog<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>page<span class="token punctuation">.</span><span class="token function">onDialog</span><span class="token punctuation">(</span>dialog <span class="token operator">-&gt;</span> dialog<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
page<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token class-name">AriaRole</span><span class="token punctuation">.</span><span class="token constant">BUTTON</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span> <span class="token keyword">lambda</span> dialog<span class="token punctuation">:</span> dialog<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span>get_by_role<span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span> <span class="token keyword">lambda</span> dialog<span class="token punctuation">:</span> dialog<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
page<span class="token punctuation">.</span>get_by_role<span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>page<span class="token punctuation">.</span>Dialog <span class="token operator">+=</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> dialog<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> dialog<span class="token punctuation">.</span><span class="token function">AcceptAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">GetByRole</span><span class="token punctuation">(</span>AriaRole<span class="token punctuation">.</span>Button<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ClickAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">注</p><p>[<code>event: Page.dialog</code>] listener <strong>must handle</strong> the dialog. Otherwise your action will stall, be it [<code>method: Locator.click</code>] or something else. That&#39;s because dialogs in Web are modals and therefore block further page execution until they are handled.</p></div><p>As a result, the following snippet will never resolve:</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>WRONG!</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>page<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;dialog&#39;</span><span class="token punctuation">,</span> <span class="token parameter">dialog</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dialog<span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Will hang here</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>page<span class="token punctuation">.</span><span class="token function">onDialog</span><span class="token punctuation">(</span>dialog <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dialog<span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
page<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token class-name">AriaRole</span><span class="token punctuation">.</span><span class="token constant">BUTTON</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Will hang here</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span> <span class="token keyword">lambda</span> dialog<span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span>dialog<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span>get_by_role<span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># Will hang here</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span> <span class="token keyword">lambda</span> dialog<span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span>dialog<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span>
page<span class="token punctuation">.</span>get_by_role<span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># Will hang here</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>page<span class="token punctuation">.</span>Dialog <span class="token operator">+=</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> dialog<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>dialog<span class="token punctuation">.</span>Message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">GetByRole</span><span class="token punctuation">(</span>AriaRole<span class="token punctuation">.</span>Button<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ClickAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Will hang here</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">注</p><p>If there is no listener for [<code>event: Page.dialog</code>], all dialogs are automatically dismissed.</p></div><h2 id="beforeunload-dialog" tabindex="-1"><a class="header-anchor" href="#beforeunload-dialog" aria-hidden="true">#</a> beforeunload dialog</h2><p>When [<code>method: Page.close</code>] is invoked with the truthy [<code>option: runBeforeUnload</code>] value, the page runs its unload handlers. This is the only case when [<code>method: Page.close</code>] does not wait for the page to actually close, because it might be that the page stays open in the end of the operation.</p><p>You can register a dialog handler to handle the <code>beforeunload</code> dialog yourself:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>page<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;dialog&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token parameter">dialog</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">assert</span><span class="token punctuation">(</span>dialog<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;beforeunload&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> dialog<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">runBeforeUnload</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>page<span class="token punctuation">.</span><span class="token function">onDialog</span><span class="token punctuation">(</span>dialog <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;beforeunload&quot;</span><span class="token punctuation">,</span> dialog<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dialog<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
page<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Page<span class="token punctuation">.</span>CloseOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setRunBeforeUnload</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">handle_dialog</span><span class="token punctuation">(</span>dialog<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> dialog<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> <span class="token string">&#39;beforeunload&#39;</span>
    <span class="token keyword">await</span> dialog<span class="token punctuation">.</span>dismiss<span class="token punctuation">(</span><span class="token punctuation">)</span>

page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;dialog&#39;</span><span class="token punctuation">,</span> <span class="token keyword">lambda</span><span class="token punctuation">:</span> handle_dialog<span class="token punctuation">)</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span>close<span class="token punctuation">(</span>run_before_unload<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">handle_dialog</span><span class="token punctuation">(</span>dialog<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> dialog<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> <span class="token string">&#39;beforeunload&#39;</span>
    dialog<span class="token punctuation">.</span>dismiss<span class="token punctuation">(</span><span class="token punctuation">)</span>

page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;dialog&#39;</span><span class="token punctuation">,</span> <span class="token keyword">lambda</span><span class="token punctuation">:</span> handle_dialog<span class="token punctuation">)</span>
page<span class="token punctuation">.</span>close<span class="token punctuation">(</span>run_before_unload<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>page<span class="token punctuation">.</span>Dialog <span class="token operator">+=</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> dialog<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    Assert<span class="token punctuation">.</span><span class="token function">AreEqual</span><span class="token punctuation">(</span><span class="token string">&quot;beforeunload&quot;</span><span class="token punctuation">,</span> dialog<span class="token punctuation">.</span>Type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    dialog<span class="token punctuation">.</span><span class="token function">DismissAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">CloseAsync</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">runBeforeUnload</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function f(y,w){const s=o("ExternalLinkIcon");return e(),c("div",null,[n("p",null,[a("Playwright can interact with the web page dialogs such as "),n("a",u,[d,t(s)]),a(", "),n("a",k,[r,t(s)]),a(", "),n("a",g,[v,t(s)]),a(" as well as "),n("a",m,[b,t(s)]),a(" confirmation.")]),h])}const q=p(i,[["render",f],["__file","dialogs.html.vue"]]);export{q as default};
