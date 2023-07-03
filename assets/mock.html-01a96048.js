import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as u,c as i,a as s,b as n,d as a,w as o,f as c}from"./app-3f278ba4.js";const r={},k=s("strong",null,"mock",-1),d=s("strong",null,"modify",-1),v={href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"},m=s("br",null,null,-1),g={href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",target:"_blank",rel:"noopener noreferrer"},b=s("h2",{id:"mock-api-requests",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mock-api-requests","aria-hidden":"true"},"#"),n(" Mock API requests")],-1),h=s("p",null,[n("Following code will intercept all the calls to "),s("code",null,"https://dog.ceo/api/breeds/list/all"),n(" and will return"),s("br"),n(" the test data instead. No requests to the "),s("code",null,"https://dog.ceo/api/breeds/list/all"),n(" endpoint will be made.")],-1),f=c(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;https://dog.ceo/api/breeds/list/all&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token parameter">route</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;test_breed&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> route<span class="token punctuation">.</span><span class="token function">fulfill</span><span class="token punctuation">(</span><span class="token punctuation">{</span> json <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">handle</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">:</span>
    json <span class="token operator">=</span> <span class="token punctuation">{</span> message<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;test_breed&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    <span class="token keyword">await</span> route<span class="token punctuation">.</span>fulfill<span class="token punctuation">(</span>json<span class="token operator">=</span>json<span class="token punctuation">)</span>

<span class="token keyword">await</span> page<span class="token punctuation">.</span>route<span class="token punctuation">(</span><span class="token string">&quot;https://dog.ceo/api/breeds/list/all&quot;</span><span class="token punctuation">,</span> handle<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">handle</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">:</span>
    json <span class="token operator">=</span> <span class="token punctuation">{</span> message<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;test_breed&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    route<span class="token punctuation">.</span>fulfill<span class="token punctuation">(</span>json<span class="token operator">=</span>json<span class="token punctuation">)</span>

page<span class="token punctuation">.</span>route<span class="token punctuation">(</span><span class="token string">&quot;https://dog.ceo/api/breeds/list/all&quot;</span><span class="token punctuation">,</span> handle<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">RouteAsync</span><span class="token punctuation">(</span><span class="token string">&quot;https://dog.ceo/api/breeds/list/all&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> route <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> json <span class="token operator">=</span> <span class="token comment">/* JsonElement with the test payload */</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> route<span class="token punctuation">.</span><span class="token function">FulfillAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Json<span class="token punctuation">:</span> json <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>page<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&quot;https://dog.ceo/api/breeds/list/all&quot;</span><span class="token punctuation">,</span> route <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
  route<span class="token punctuation">.</span><span class="token function">fulfill</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Route<span class="token punctuation">.</span>FulfillOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setBody</span><span class="token punctuation">(</span><span class="token string">&quot;{\\&quot;message\\&quot;:{\\&quot;test_breed\\&quot;:[]}}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modify-api-responses" tabindex="-1"><a class="header-anchor" href="#modify-api-responses" aria-hidden="true">#</a> Modify API responses</h2><p>Sometimes, it is essential to make an API request, but response needs to be patched to<br> allow for reproducible testing. In that case, instead of mocking the request, one<br> can perform the request and fulfill it with the modified response.</p>`,7),w=c(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;https://dog.ceo/api/breeds/list/all&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token parameter">route</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> route<span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  json<span class="token punctuation">.</span>message<span class="token punctuation">[</span><span class="token string">&#39;big_red_dog&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// Fulfill using the original response, while patching the response body</span>
  <span class="token comment">// with the given JSON object.</span>
  <span class="token keyword">await</span> route<span class="token punctuation">.</span><span class="token function">fulfill</span><span class="token punctuation">(</span><span class="token punctuation">{</span> response<span class="token punctuation">,</span> json <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">handle</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">:</span>
    response <span class="token operator">=</span> <span class="token keyword">await</span> route<span class="token punctuation">.</span>fulfill<span class="token punctuation">(</span><span class="token punctuation">)</span>
    json <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
    json<span class="token punctuation">[</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;big_red_dog&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment"># Fulfill using the original response, while patching the response body</span>
    <span class="token comment"># with the given JSON object.</span>
    <span class="token keyword">await</span> route<span class="token punctuation">.</span>fulfill<span class="token punctuation">(</span>response<span class="token operator">=</span>response<span class="token punctuation">,</span> json<span class="token operator">=</span>json<span class="token punctuation">)</span>

<span class="token keyword">await</span> page<span class="token punctuation">.</span>route<span class="token punctuation">(</span><span class="token string">&quot;https://dog.ceo/api/breeds/list/all&quot;</span><span class="token punctuation">,</span> handle<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">handle</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">:</span>
    response <span class="token operator">=</span> route<span class="token punctuation">.</span>fulfill<span class="token punctuation">(</span><span class="token punctuation">)</span>
    json <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
    json<span class="token punctuation">[</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;big_red_dog&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment"># Fulfill using the original response, while patching the response body</span>
    <span class="token comment"># with the given JSON object.</span>
    route<span class="token punctuation">.</span>fulfill<span class="token punctuation">(</span>response<span class="token operator">=</span>response<span class="token punctuation">,</span> json<span class="token operator">=</span>json<span class="token punctuation">)</span>

page<span class="token punctuation">.</span>route<span class="token punctuation">(</span><span class="token string">&quot;https://dog.ceo/api/breeds/list/all&quot;</span><span class="token punctuation">,</span> handle<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">RouteAsync</span><span class="token punctuation">(</span><span class="token string">&quot;https://dog.ceo/api/breeds/list/all&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> route <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token keyword">await</span> route<span class="token punctuation">.</span><span class="token function">FetchAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">dynamic</span></span> json <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">JsonAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    json<span class="token punctuation">.</span>message<span class="token punctuation">.</span>big_red_dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// Fulfill using the original response, while patching the response body</span>
    <span class="token comment">// with the given JSON object.</span>
    <span class="token keyword">await</span> route<span class="token punctuation">.</span><span class="token function">FulfillAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Response <span class="token operator">=</span> response<span class="token punctuation">,</span> Json <span class="token operator">=</span> json <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>page<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&quot;https://dog.ceo/api/breeds/list/all&quot;</span><span class="token punctuation">,</span> route <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
  <span class="token class-name">APIResponse</span> response <span class="token operator">=</span> route<span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">JsonObject</span> json <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">JsonObject</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">JsonObject</span> message <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAsJsonObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  message<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;big_red_dog&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">JsonArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Fulfill using the original response, while patching the response body</span>
  <span class="token comment">// with the given JSON object.</span>
  route<span class="token punctuation">.</span><span class="token function">fulfill</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Route<span class="token punctuation">.</span>FulfillOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setBody</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function y(_,j){const t=e("ExternalLinkIcon"),p=e("RouterLink");return u(),i("div",null,[s("p",null,[n("Web APIs are usually implemented as HTTP endpoints. Playwright provides APIs to "),k,n(" and "),d,n(" network traffic, both HTTP and HTTPS. Any requests that a page does, including "),s("a",v,[n("XHRs"),a(t)]),n(" and"),m,s("a",g,[n("fetch"),a(t)]),n(" requests, can be tracked, modified and mocked.")]),b,h,s("p",null,[n("Read more about "),a(p,{to:"/book/playwright/network.html"},{default:o(()=>[n("advanced networking")]),_:1}),n(".")]),f,s("p",null,[n("Read more about "),a(p,{to:"/book/playwright/network.html"},{default:o(()=>[n("advanced networking")]),_:1}),n(".")]),w])}const A=l(r,[["render",y],["__file","mock.html.vue"]]);export{A as default};
