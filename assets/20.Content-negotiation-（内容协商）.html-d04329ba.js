import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as p,a as n,b as e,d as a,f as t}from"./app-3f278ba4.js";const l={},r=n("h1",{id:"content-negotiation-内容协商",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#content-negotiation-内容协商","aria-hidden":"true"},"#"),e(" Content negotiation （内容协商）")],-1),d=n("br",null,null,-1),u={href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec12.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>内容协商是根据用户端或服务器的首选项，从多个可能的表示方法中选择一个返回给客户端的过程。</p><h2 id="determining-the-accepted-renderer-确定可接受的渲染器" tabindex="-1"><a class="header-anchor" href="#determining-the-accepted-renderer-确定可接受的渲染器" aria-hidden="true">#</a> Determining the accepted renderer （确定可接受的渲染器）</h2><p>REST框架使用一种简单的内容协商方式，根据可用的渲染器、每个渲染器的优先级以及客户端的 <code>Accept:</code> 头来确定应该将哪个媒体类型返回给客户端。使用的方式部分是客户端驱动的，部分是服务器驱动的。</p><ol><li>更具体的媒体类型优先于不太具体的媒体类型。</li><li>如果多个媒体类型具有相同的特异性，则根据为给定视图配置的渲染器的顺序优先选择。</li></ol><p>例如，给定以下 <code>Accept</code> 头：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>application/json; indent=4, application/json, application/yaml, text/html, */*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每种给定媒体类型的优先级为：</p><ul><li><code>application/json; indent=4</code></li><li><code>application/json</code>, <code>application/yaml</code> and <code>text/html</code></li><li><code>*/*</code></li></ul>`,8),m=n("code",null,"YAML",-1),v=n("code",null,"HTML",-1),_=n("code",null,"renderer_classes",-1),h=n("code",null,"DEFAULT_RENDERER_CLASSES",-1),g=n("br",null,null,-1),b=n("code",null,"HTTP Accept",-1),f={href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html",target:"_blank",rel:"noopener noreferrer"},w=t(`<hr><p><strong>Note</strong>: REST框架在确定优先级时不考虑“q”值。“q”值的使用会对缓存产生负面影响，在作者看来，它们是一种不必要的、过于复杂的内容协商方法。<br> 这是一种有效的方法，因为HTTP规范未明确说明服务器应该如何权衡基于服务器的首选项和基于客户端的首选项。</p><hr><h1 id="custom-content-negotiation-自定义内容协商" tabindex="-1"><a class="header-anchor" href="#custom-content-negotiation-自定义内容协商" aria-hidden="true">#</a> Custom content negotiation （自定义内容协商）</h1><p>您不太可能希望为REST框架提供一个定制的内容协商方案，但如果需要，您可以这样做。若要应用自定义内容协商方案，请重写 <code>BaseContentNegotiation</code>。<br> REST框架的内容协商类处理对请求的适当解析器和响应的适当渲染器的选择，因此您应该同时应用 <code>.select_parser(request, parsers)</code> 和 <code>.select_renderer(request, renderers, format_suffix)</code> 方法。<br><code>select_parser()</code> 方法应该从可用解析器列表中返回一个解析器实例，如果没有解析器能够处理传入的请求，则返回 <code>None</code>。<br><code>select_renderer()</code> 方法应返回一个双元组（渲染器实例，媒体类型），或抛出 <code>NotAcceptable</code> 异常。</p><h2 id="example-举个例子" tabindex="-1"><a class="header-anchor" href="#example-举个例子" aria-hidden="true">#</a> Example （举个例子）</h2><p>下面是一个自定义内容协商类，它在选择适当的解析器或渲染器时忽略客户端请求。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>negotiation <span class="token keyword">import</span> BaseContentNegotiation
<span class="token keyword">class</span> <span class="token class-name">IgnoreClientContentNegotiation</span><span class="token punctuation">(</span>BaseContentNegotiation<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">select_parser</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> parsers<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Select the first parser in the \`.parser_classes\` list.
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> parsers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">def</span> <span class="token function">select_renderer</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> renderers<span class="token punctuation">,</span> format_suffix<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Select the first renderer in the \`.renderer_classes\` list.
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>renderers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> renderers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>media_type<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setting-the-content-negotiation-设置内容协商" tabindex="-1"><a class="header-anchor" href="#setting-the-content-negotiation-设置内容协商" aria-hidden="true">#</a> Setting the content negotiation （设置内容协商）</h2><p>可以使用<code>DEFAULT_CONTENT_NEGOTIATION_CLASS</code> 设置来全局设置默认的“内容协商”类。例如，以下设置将使用示例<code>IgnoreClientContentNegotiation</code>类。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;DEFAULT_CONTENT_NEGOTIATION_CLASS&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;myapp.negotiation.IgnoreClientContentNegotiation&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以对使用基于 <code>APIView</code> 类的视图设置用于单个视图或视图集的内容协商。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> myapp<span class="token punctuation">.</span>negotiation <span class="token keyword">import</span> IgnoreClientContentNegotiation
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>views <span class="token keyword">import</span> APIView
<span class="token keyword">class</span> <span class="token class-name">NoNegotiationView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    An example view that does not perform content negotiation.
    &quot;&quot;&quot;</span>
    content_negotiation_class <span class="token operator">=</span> IgnoreClientContentNegotiation
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">&#39;accepted media type&#39;</span><span class="token punctuation">:</span> request<span class="token punctuation">.</span>accepted_renderer<span class="token punctuation">.</span>media_type
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function y(q,N){const s=i("ExternalLinkIcon");return c(),p("div",null,[r,n("blockquote",null,[n("p",null,[e("HTTP为“内容协商” ——即当存在多个可用表示方法时，为给定响应选择最佳表示的过程，提供了多种机制。"),d,e(" — "),n("a",u,[e("RFC 2616"),a(s)]),e(", Fielding 等人.")])]),k,n("p",null,[e("如果被请求的视图只配置了 "),m,e(" 和 "),v,e(" 的渲染器，那么REST framework将选择"),_,e(" 列表或默认的 "),h,e(" 设置中最先列出的渲染器。"),g,e(" 有关 "),b,e(" 头的更多信息，请参见"),n("a",f,[e("RFC 2616"),a(s)])]),w])}const T=o(l,[["render",y],["__file","20.Content-negotiation-（内容协商）.html.vue"]]);export{T as default};
