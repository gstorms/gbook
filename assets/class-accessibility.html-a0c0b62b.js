import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c,a as n,b as s,d as e,f as t}from"./app-3f278ba4.js";const l={},u=n("h1",{id:"class-accessibility",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#class-accessibility","aria-hidden":"true"},"#"),s(" class: Accessibility")],-1),d=n("li",null,"since: v1.8",-1),r=n("li",null,"langs: csharp, js, python",-1),k={href:"https://www.deque.com/axe/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://playwright.dev/docs/accessibility-testing",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),v={href:"https://en.wikipedia.org/wiki/Screen_reader",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),f={href:"https://en.wikipedia.org/wiki/Switch_access",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[s("Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might"),n("br"),s(" have wildly different output.")],-1),y=n("p",null,[s('Rendering engines of Chromium, Firefox and WebKit have a concept of "accessibility tree", which is then translated into different'),n("br"),s(" platform-specific APIs. Accessibility namespace gives access to this Accessibility Tree.")],-1),w=n("p",null,[s("Most of the accessibility tree gets filtered out when converting from internal browser AX Tree to Platform-specific AX-Tree or by"),n("br"),s(" assistive technologies themselves. By default, Playwright tries to approximate this filtering, exposing only the"),n("br"),s(' "interesting" nodes of the tree.')],-1),_=n("h2",{id:"async-method-accessibility-snapshot",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#async-method-accessibility-snapshot","aria-hidden":"true"},"#"),s(" async method: Accessibility.snapshot")],-1),x=n("li",null,"since: v1.8",-1),A={href:"https://www.deque.com/axe/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://playwright.dev/docs/accessibility-testing",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"role",-1),j={href:"https://www.w3.org/TR/wai-aria/#usage_intro",target:"_blank",rel:"noopener noreferrer"},T=t("<li><code>name</code> &lt;[string]&gt; A human readable name for the node.</li><li><code>value</code> &lt;[string]|[float]&gt; The current value of the node, if applicable.</li><li><code>description</code> &lt;[string]&gt; An additional human readable description of the node, if applicable.</li><li><code>keyshortcuts</code> &lt;[string]&gt; Keyboard shortcuts associated with this node, if applicable.</li><li><code>roledescription</code> &lt;[string]&gt; A human readable alternative to the role, if applicable.</li><li><code>valuetext</code> &lt;[string]&gt; A description of the current value, if applicable.</li><li><code>disabled</code> &lt;[boolean]&gt; Whether the node is disabled, if applicable.</li><li><code>expanded</code> &lt;[boolean]&gt; Whether the node is expanded or collapsed, if applicable.</li><li><code>focused</code> &lt;[boolean]&gt; Whether the node is focused, if applicable.</li>",9),W=n("code",null,"modal",-1),N={href:"https://en.wikipedia.org/wiki/Modal_window",target:"_blank",rel:"noopener noreferrer"},C=t("<li><code>multiline</code> &lt;[boolean]&gt; Whether the node text input supports multiline, if applicable.</li><li><code>multiselectable</code> &lt;[boolean]&gt; Whether more than one child can be selected, if applicable.</li><li><code>readonly</code> &lt;[boolean]&gt; Whether the node is read only, if applicable.</li><li><code>required</code> &lt;[boolean]&gt; Whether the node is required, if applicable.</li><li><code>selected</code> &lt;[boolean]&gt; Whether the node is selected in its parent node, if applicable.</li><li><code>checked</code> &lt;[boolean]|&quot;mixed&quot;&gt; Whether the checkbox is checked, or &quot;mixed&quot;, if applicable.</li><li><code>pressed</code> &lt;[boolean]|&quot;mixed&quot;&gt; Whether the toggle button is checked, or &quot;mixed&quot;, if applicable.</li><li><code>level</code> &lt;[int]&gt; The level of a heading, if applicable.</li><li><code>valuemin</code> &lt;[float]&gt; The minimum value in a node, if applicable.</li><li><code>valuemax</code> &lt;[float]&gt; The maximum value in a node, if applicable.</li><li><code>autocomplete</code> &lt;[string]&gt; What kind of autocomplete is supported by a control, if applicable.</li><li><code>haspopup</code> &lt;[string]&gt; What kind of popup is currently being shown for a node, if applicable.</li><li><code>invalid</code> &lt;[string]&gt; Whether and in what way this node&#39;s value is invalid, if applicable.</li><li><code>orientation</code> &lt;[string]&gt; Whether the node is oriented horizontally or vertically, if applicable.</li><li><code>children</code> &lt;[Array]&lt;[Object]&gt;&gt; Child nodes, if any, if applicable.</li>",15),O=t(`<p>Captures the current state of the accessibility tree. The returned object represents the root accessible node of the<br> page.</p><div class="hint-container note"><p class="hint-container-title">注</p><p>The Chromium accessibility tree contains nodes that go unused on most platforms and by most screen readers. Playwright<br> will discard them as well for an easier to process tree, unless [<code>option: interestingOnly</code>] is set to <code>false</code>.</p></div><p><strong>Usage</strong></p><p>An example of dumping the entire accessibility tree:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> snapshot <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span>accessibility<span class="token punctuation">.</span><span class="token function">snapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>snapshot<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> snapshot <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">accessibility</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">snapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>snapshot<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>snapshot <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span>accessibility<span class="token punctuation">.</span>snapshot<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>snapshot<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>snapshot <span class="token operator">=</span> page<span class="token punctuation">.</span>accessibility<span class="token punctuation">.</span>snapshot<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>snapshot<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> accessibilitySnapshot <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span>Accessibility<span class="token punctuation">.</span><span class="token function">SnapshotAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>System<span class="token punctuation">.</span>Text<span class="token punctuation">.</span>Json<span class="token punctuation">.</span>JsonSerializer<span class="token punctuation">.</span><span class="token function">Serialize</span><span class="token punctuation">(</span>accessibilitySnapshot<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>An example of logging the focused node&#39;s name:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> snapshot <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span>accessibility<span class="token punctuation">.</span><span class="token function">snapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token function">findFocusedNode</span><span class="token punctuation">(</span>snapshot<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">findFocusedNode</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>focused<span class="token punctuation">)</span>
    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> child <span class="token keyword">of</span> node<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> foundNode <span class="token operator">=</span> <span class="token function">findFocusedNode</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>foundNode<span class="token punctuation">)</span>
      <span class="token keyword">return</span> foundNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> accessibilitySnapshot <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span>Accessibility<span class="token punctuation">.</span><span class="token function">SnapshotAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>System<span class="token punctuation">.</span>Text<span class="token punctuation">.</span>Json<span class="token punctuation">.</span>JsonSerializer<span class="token punctuation">.</span><span class="token function">Serialize</span><span class="token punctuation">(</span>accessibilitySnapshot<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// FIXME</span>
<span class="token class-name">String</span> snapshot <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">accessibility</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">snapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">find_focused_node</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;focused&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> node
    <span class="token keyword">for</span> child <span class="token keyword">in</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;children&quot;</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        found_node <span class="token operator">=</span> find_focused_node<span class="token punctuation">(</span>child<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>found_node<span class="token punctuation">)</span>
            <span class="token keyword">return</span> found_node
    <span class="token keyword">return</span> <span class="token boolean">None</span>

snapshot <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span>accessibility<span class="token punctuation">.</span>snapshot<span class="token punctuation">(</span><span class="token punctuation">)</span>
node <span class="token operator">=</span> find_focused_node<span class="token punctuation">(</span>snapshot<span class="token punctuation">)</span>
<span class="token keyword">if</span> node<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>node<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">find_focused_node</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;focused&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> node
    <span class="token keyword">for</span> child <span class="token keyword">in</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;children&quot;</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        found_node <span class="token operator">=</span> find_focused_node<span class="token punctuation">(</span>child<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>found_node<span class="token punctuation">)</span>
            <span class="token keyword">return</span> found_node
    <span class="token keyword">return</span> <span class="token boolean">None</span>

snapshot <span class="token operator">=</span> page<span class="token punctuation">.</span>accessibility<span class="token punctuation">.</span>snapshot<span class="token punctuation">(</span><span class="token punctuation">)</span>
node <span class="token operator">=</span> find_focused_node<span class="token punctuation">(</span>snapshot<span class="token punctuation">)</span>
<span class="token keyword">if</span> node<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>node<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async-method-accessibility-snapshot-1" tabindex="-1"><a class="header-anchor" href="#async-method-accessibility-snapshot-1" aria-hidden="true">#</a> async method: Accessibility.snapshot</h2><ul><li>since: v1.8</li><li>langs: java</li></ul><ul><li>returns: &lt;[null]|[string]&gt;</li></ul><h2 id="async-method-accessibility-snapshot-2" tabindex="-1"><a class="header-anchor" href="#async-method-accessibility-snapshot-2" aria-hidden="true">#</a> async method: Accessibility.snapshot</h2><ul><li>since: v1.8</li><li>langs: csharp</li></ul><ul><li>returns: &lt;[null]|[JsonElement]&gt;</li></ul><h3 id="option-accessibility-snapshot-interestingonly" tabindex="-1"><a class="header-anchor" href="#option-accessibility-snapshot-interestingonly" aria-hidden="true">#</a> option: Accessibility.snapshot.interestingOnly</h3><ul><li>since: v1.8</li></ul><ul><li><code>interestingOnly</code> &lt;[boolean]&gt;</li></ul><p>Prune uninteresting nodes from the tree. Defaults to <code>true</code>.</p><h3 id="option-accessibility-snapshot-root" tabindex="-1"><a class="header-anchor" href="#option-accessibility-snapshot-root" aria-hidden="true">#</a> option: Accessibility.snapshot.root</h3><ul><li>since: v1.8</li></ul><ul><li><code>root</code> &lt;[ElementHandle]&gt;</li></ul><p>The root DOM element for the snapshot. Defaults to the whole page.</p>`,29);function P(E,z){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,n("ul",null,[d,r,n("li",null,[s("deprecated: This class is deprecated. Please use other libraries such as "),n("a",k,[s("Axe"),e(a)]),s(" if you need to test page accessibility. See our Node.js "),n("a",h,[s("guide"),e(a)]),s(" for integration with Axe.")])]),n("p",null,[s("The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by"),b,s(" assistive technology such as "),n("a",v,[s("screen readers"),e(a)]),s(" or"),m,n("a",f,[s("switches"),e(a)]),s(".")]),g,y,w,_,n("ul",null,[x,n("li",null,[s("deprecated: This method is deprecated. Please use other libraries such as "),n("a",A,[s("Axe"),e(a)]),s(" if you need to test page accessibility. See our Node.js "),n("a",q,[s("guide"),e(a)]),s(" for integration with Axe.")])]),n("ul",null,[n("li",null,[s("returns: <[null]|[Object]> "),n("ul",null,[n("li",null,[S,s(" <[string]> The "),n("a",j,[s("role"),e(a)]),s(".")]),T,n("li",null,[W,s(" <[boolean]> Whether the node is "),n("a",N,[s("modal"),e(a)]),s(", if applicable.")]),C])])]),O])}const B=o(l,[["render",P],["__file","class-accessibility.html.vue"]]);export{B as default};
