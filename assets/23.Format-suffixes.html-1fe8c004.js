import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as p,a as n,b as s,d as e,f as r}from"./app-207e7d61.js";const c={},l=n("h1",{id:"format-suffixes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#format-suffixes","aria-hidden":"true"},"#"),s(" Format suffixes")],-1),u=n("br",null,null,-1),d={href:"http://tech.groups.yahoo.com/group/rest-discuss/message/5857",target:"_blank",rel:"noopener noreferrer"},m={href:"http://example.com/api/users.json",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),h=r(`<h2 id="format-suffix-patterns" tabindex="-1"><a class="header-anchor" href="#format-suffix-patterns" aria-hidden="true">#</a> format_suffix_patterns</h2><p><strong>Signature</strong>: format_suffix_patterns(urlpatterns, suffix_required=False, allowed=None)<br> Returns a URL pattern list which includes format suffix patterns appended to each of the URL patterns provided.<br> Arguments:</p><ul><li><strong>urlpatterns</strong>: Required. A URL pattern list.</li><li><strong>suffix_required</strong>: Optional. A boolean indicating if suffixes in the URLs should be optional or mandatory. Defaults to <code>False</code>, meaning that suffixes are optional by default.</li><li><strong>allowed</strong>: Optional. A list or tuple of valid format suffixes. If not provided, a wildcard format suffix pattern will be used.</li></ul><p>Example:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>urlpatterns <span class="token keyword">import</span> format_suffix_patterns
<span class="token keyword">from</span> blog <span class="token keyword">import</span> views
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>apt_root<span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^comments/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>comment_list<span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^comments/(?P&lt;pk&gt;[0-9]+)/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>comment_detail<span class="token punctuation">)</span>
<span class="token punctuation">]</span>
urlpatterns <span class="token operator">=</span> format_suffix_patterns<span class="token punctuation">(</span>urlpatterns<span class="token punctuation">,</span> allowed<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When using <code>format_suffix_patterns</code>, you must make sure to add the <code>&#39;format&#39;</code> keyword argument to the corresponding views. For example:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@api_view</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">comment_list</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># do stuff...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or with class-based views:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">CommentList</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># do stuff...</span>
    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># do stuff...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The name of the kwarg used may be modified by using the <code>FORMAT_SUFFIX_KWARG</code> setting.<br> Also note that <code>format_suffix_patterns</code> does not support descending into <code>include</code> URL patterns.</p><h3 id="using-with-i18n-patterns" tabindex="-1"><a class="header-anchor" href="#using-with-i18n-patterns" aria-hidden="true">#</a> Using with <code>i18n_patterns</code></h3><p>If using the <code>i18n_patterns</code> function provided by Django, as well as <code>format_suffix_patterns</code> you should make sure that the <code>i18n_patterns</code> function is applied as the final, or outermost function. For example:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url patterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    …
<span class="token punctuation">]</span>
urlpatterns <span class="token operator">=</span> i18n_patterns<span class="token punctuation">(</span>
    format_suffix_patterns<span class="token punctuation">(</span>urlpatterns<span class="token punctuation">,</span> allowed<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="query-parameter-formats" tabindex="-1"><a class="header-anchor" href="#query-parameter-formats" aria-hidden="true">#</a> Query parameter formats</h2><p>An alternative to the format suffixes is to include the requested format in a query parameter. REST framework provides this option by default, and it is used in the browsable API to switch between differing available representations.<br> To select a representation using its short format, use the <code>format</code> query parameter. For example: <code>[http://example.com/organizations/?format=csv](http://example.com/organizations/?format=csv)</code>.<br> The name of this query parameter can be modified using the <code>URL_FORMAT_OVERRIDE</code> setting. Set the value to <code>None</code> to disable this behavior.</p><hr><h2 id="accept-headers-vs-format-suffixes" tabindex="-1"><a class="header-anchor" href="#accept-headers-vs-format-suffixes" aria-hidden="true">#</a> Accept headers vs. format suffixes</h2>`,18),k=n("code",null,"HTTP Accept",-1),v=n("br",null,null,-1),b=n("br",null,null,-1),g={href:"https://groups.yahoo.com/neo/groups/rest-discuss/conversations/topics/14844",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1);function x(y,w){const a=o("ExternalLinkIcon");return i(),p("div",null,[l,n("blockquote",null,[n("p",null,[s("Section 6.2.1 does not say that content negotiation should be used all the time."),u,s(" — Roy Fielding, "),n("a",d,[s("REST discuss mailing list"),e(a)])])]),n("p",null,[s("A common pattern for Web APIs is to use filename extensions on URLs to provide an endpoint for a given media type. For example, '"),n("a",m,[s("http://example.com/api/users.json"),e(a)]),s("' to serve a JSON representation."),f,s(" Adding format-suffix patterns to each individual entry in the URLconf for your API is error-prone and non-DRY, so REST framework provides a shortcut to adding these patterns to your URLConf.")]),h,n("p",null,[s("There seems to be a view among some of the Web community that filename extensions are not a RESTful pattern, and that "),k,s(" headers should always be used instead."),v,s(" It is actually a misconception. For example, take the following quote from Roy Fielding discussing the relative merits of query parameter media-type indicators vs. file extension media-type indicators:"),b,s(" “That's why I always prefer extensions. Neither choice has anything to do with REST.” — Roy Fielding, "),n("a",g,[s("REST discuss mailing list"),e(a)]),_,s(" The quote does not mention Accept headers, but it does make it clear that format suffixes should be considered an acceptable pattern.")])])}const A=t(c,[["render",x],["__file","23.Format-suffixes.html.vue"]]);export{A as default};
