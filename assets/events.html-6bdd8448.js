import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-207e7d61.js";const p={},e=t(`<p>Playwright allows listening to various types of events happening on the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events such as waiting for events or adding or removing event listeners.</p><h2 id="waiting-for-event" tabindex="-1"><a class="header-anchor" href="#waiting-for-event" aria-hidden="true">#</a> Waiting for event</h2><p>Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns.</p><p>Wait for a request with the specified url using [<code>method: Page.waitForRequest</code>]:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Start waiting for request before goto. Note no await.</span>
<span class="token keyword">const</span> requestPromise <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">waitForRequest</span><span class="token punctuation">(</span><span class="token string">&#39;**/*logo*.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&#39;https://wikipedia.org&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">await</span> requestPromise<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// The callback lambda defines scope of the code that is expected to</span>
<span class="token comment">// trigger request.</span>
<span class="token class-name">Request</span> request <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">waitForRequest</span><span class="token punctuation">(</span><span class="token string">&quot;**/*logo*.png&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
  page<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">with</span> page<span class="token punctuation">.</span>expect_request<span class="token punctuation">(</span><span class="token string">&quot;**/*logo*.png&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> first<span class="token punctuation">:</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span>
first_request <span class="token operator">=</span> <span class="token keyword">await</span> first<span class="token punctuation">.</span>value
<span class="token keyword">print</span><span class="token punctuation">(</span>first_request<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> page<span class="token punctuation">.</span>expect_request<span class="token punctuation">(</span><span class="token string">&quot;**/*logo*.png&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> first<span class="token punctuation">:</span>
  page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>first<span class="token punctuation">.</span>value<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> waitForRequestTask <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">WaitForRequestAsync</span><span class="token punctuation">(</span><span class="token string">&quot;**/*logo*.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">GotoAsync</span><span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> request <span class="token operator">=</span> <span class="token keyword">await</span> waitForRequestTask<span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>Url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Wait for popup window:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Start waiting for popup before clicking. Note no await.</span>
<span class="token keyword">const</span> popupPromise <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">waitForEvent</span><span class="token punctuation">(</span><span class="token string">&#39;popup&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;open the popup&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> popup <span class="token operator">=</span> <span class="token keyword">await</span> popupPromise<span class="token punctuation">;</span>
<span class="token keyword">await</span> popup<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&#39;https://wikipedia.org&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// The callback lambda defines scope of the code that is expected to</span>
<span class="token comment">// create popup window.</span>
<span class="token class-name">Page</span> popup <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">waitForPopup</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
  page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&quot;open the popup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
popup<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">with</span> page<span class="token punctuation">.</span>expect_popup<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> popup<span class="token punctuation">:</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span>get_by_text<span class="token punctuation">(</span><span class="token string">&quot;open the popup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
child_page <span class="token operator">=</span> <span class="token keyword">await</span> popup<span class="token punctuation">.</span>value
<span class="token keyword">await</span> child_page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> page<span class="token punctuation">.</span>expect_popup<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> popup<span class="token punctuation">:</span>
  page<span class="token punctuation">.</span>get_by_text<span class="token punctuation">(</span><span class="token string">&quot;open the popup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
popup<span class="token punctuation">.</span>value<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> popup <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">RunAndWaitForPopupAsync</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">GetByText</span><span class="token punctuation">(</span><span class="token string">&quot;open the popup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ClickAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> popup<span class="token punctuation">.</span><span class="token function">GotoAsync</span><span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adding-removing-event-listener" tabindex="-1"><a class="header-anchor" href="#adding-removing-event-listener" aria-hidden="true">#</a> Adding/removing event listener</h2><p>Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>page<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span> <span class="token parameter">request</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Request sent: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>request<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">listener</span> <span class="token operator">=</span> <span class="token parameter">request</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Request finished: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>request<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
page<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;requestfinished&#39;</span><span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&#39;https://wikipedia.org&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

page<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;requestfinished&#39;</span><span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.openstreetmap.org/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>page<span class="token punctuation">.</span><span class="token function">onRequest</span><span class="token punctuation">(</span>request <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Request sent: &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Request</span><span class="token punctuation">&gt;</span></span> listener <span class="token operator">=</span> request <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Request finished: &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
page<span class="token punctuation">.</span><span class="token function">onRequestFinished</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
page<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Remove previously added listener, each on* method has corresponding off*</span>
page<span class="token punctuation">.</span><span class="token function">offRequestFinished</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
page<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.openstreetmap.org/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">print_request_sent</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Request sent: &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">print_request_finished</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Request finished: &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> print_request_sent<span class="token punctuation">)</span>
page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;requestfinished&quot;</span><span class="token punctuation">,</span> print_request_finished<span class="token punctuation">)</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span>

page<span class="token punctuation">.</span>remove_listener<span class="token punctuation">(</span><span class="token string">&quot;requestfinished&quot;</span><span class="token punctuation">,</span> print_request_finished<span class="token punctuation">)</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;https://www.openstreetmap.org/&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">print_request_sent</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Request sent: &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">print_request_finished</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Request finished: &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span> print_request_sent<span class="token punctuation">)</span>
page<span class="token punctuation">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;requestfinished&quot;</span><span class="token punctuation">,</span> print_request_finished<span class="token punctuation">)</span>
page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span>

page<span class="token punctuation">.</span>remove_listener<span class="token punctuation">(</span><span class="token string">&quot;requestfinished&quot;</span><span class="token punctuation">,</span> print_request_finished<span class="token punctuation">)</span>
page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;https://www.openstreetmap.org/&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>page<span class="token punctuation">.</span>Request <span class="token operator">+=</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> request<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Request sent: &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>Url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">listener</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">IRequest</span> request<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Request finished: &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>Url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
page<span class="token punctuation">.</span>RequestFinished <span class="token operator">+=</span> listener<span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">GotoAsync</span><span class="token punctuation">(</span><span class="token string">&quot;https://wikipedia.org&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Remove previously added listener.</span>
page<span class="token punctuation">.</span>RequestFinished <span class="token operator">-=</span> listener<span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">GotoAsync</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.openstreetmap.org/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adding-one-off-listeners" tabindex="-1"><a class="header-anchor" href="#adding-one-off-listeners" aria-hidden="true">#</a> Adding one-off listeners</h2><ul><li>langs: js, python, java</li></ul><p>If a certain event needs to be handled once, there is a convenience API for that:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>page<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;dialog&#39;</span><span class="token punctuation">,</span> <span class="token parameter">dialog</span> <span class="token operator">=&gt;</span> dialog<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&quot;2021&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token string">&quot;prompt(&#39;Enter a number:&#39;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>page<span class="token punctuation">.</span><span class="token function">onceDialog</span><span class="token punctuation">(</span>dialog <span class="token operator">-&gt;</span> dialog<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&quot;2021&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
page<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token string">&quot;prompt(&#39;Enter a number:&#39;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>page<span class="token punctuation">.</span>once<span class="token punctuation">(</span><span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span> <span class="token keyword">lambda</span> dialog<span class="token punctuation">:</span> dialog<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token string">&quot;2021&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span>evaluate<span class="token punctuation">(</span><span class="token string">&quot;prompt(&#39;Enter a number:&#39;)&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>page<span class="token punctuation">.</span>once<span class="token punctuation">(</span><span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span> <span class="token keyword">lambda</span> dialog<span class="token punctuation">:</span> dialog<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token string">&quot;2021&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
page<span class="token punctuation">.</span>evaluate<span class="token punctuation">(</span><span class="token string">&quot;prompt(&#39;Enter a number:&#39;)&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,29),o=[e];function c(i,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","events.html.vue"]]);export{k as default};