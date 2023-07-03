import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c,a as e,b as n,d as a,f as s}from"./app-3f278ba4.js";const p={},i=e("h1",{id:"responses-响应",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#responses-响应","aria-hidden":"true"},"#"),n(" Responses（响应）")],-1),l=e("br",null,null,-1),h={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/responses_zh/%5Bhttps://docs.djangoproject.com/en/stable/stable/template-response/%5D(https://docs.djangoproject.com/en/stable/stable/template-response/)",target:"_blank",rel:"noopener noreferrer"},u=s('<p>REST framework 通过提供一个 <code>Response</code> 类来支持 HTTP content negotiation，该类允许你返回可以呈现为多种内容类型的内容，具体取决于客户端的请求。<br><code>Response</code> 类是 Django中 <code>SimpleTemplateResponse</code> 类的一个子类。<code>Response</code> 对象用Python基本数据类型初始化。 然后REST framework 使用标准的HTTP content negotiation 来确定如何呈现最终的响应内容。<br> 你并不需要一定是用 <code>Response</code> 类，你可以从你的视图返回常规的 <code>HttpResponse</code> 或者 <code>StreamingHttpResponse</code> 对象。使用<code>Response</code>类只提供了一个可以呈现多种格式的更好的界面来返回 content-negotiated 的 Web API 响应。<br> 除非由于某种原因你要对 REST framework 做大量的自定义，否则你应该始终对返回对象的views使用 <code>APIView</code> 类或者 <code>@api_view</code> 函数。这样做可以确保视图在返回之前能够执行 content negotiation 并且为响应选择适当的渲染器。</p><hr><h2 id="创建-responses" tabindex="-1"><a class="header-anchor" href="#创建-responses" aria-hidden="true">#</a> 创建 responses</h2><h3 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response()</h3><p><strong>签名:</strong> <code>Response(data, status=None, template_name=None, headers=None, content_type=None)</code><br> 与常规的 <code>HttpResponse</code> 对象不同，你不能使用渲染内容来实例化一个 <code>Response</code> 对象，而是传递未渲染的数据，包含任何Python基本数据类型。<br><code>Response</code> 类使用的渲染器无法自行处理像 Django model 实例这样的复杂数据类型，因此你需要在创建 <code>Response</code> 对象之前将数据序列化为基本数据类型。<br> 你可以使用 REST framework的 <code>Serializer</code> 类来执行此类数据的序列化，或者使用你自定义的来序列化。<br> 参数:</p>',5),_=e("li",null,[e("p",null,[e("code",null,"data"),n(": response的数列化数据.")])],-1),m=e("code",null,"status",-1),b={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/status-codes/",target:"_blank",rel:"noopener noreferrer"},R=e("li",null,[e("p",null,[e("code",null,"template_name"),n(": "),e("code",null,"HTMLRenderer"),n(" 选择要使用的模板名称。")])],-1),f=e("li",null,[e("p",null,[e("code",null,"headers"),n(": A dictionary of HTTP headers to use in the response.")])],-1),g=e("li",null,[e("p",null,[e("code",null,"content_type"),n(": response的内容类型。通常由渲染器自行设置，由content negotiation确定，但是在某些情况下，你需要明确指定内容类型。")])],-1),x=s(`<hr><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> .data</h3><p><code>Request</code> 对象的未渲染内容。</p><h3 id="status-code" tabindex="-1"><a class="header-anchor" href="#status-code" aria-hidden="true">#</a> .status_code</h3><p>HTTP 响应的数字状态吗。</p><h3 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> .content</h3><p>response的呈现内容。 <code>.render()</code> 方法必须先调用才能访问 <code>.content</code> 。</p><h3 id="template-name" tabindex="-1"><a class="header-anchor" href="#template-name" aria-hidden="true">#</a> .template_name</h3><p><code>template_name</code> 只有在使用 <code>HTMLRenderer</code> 或者其他自定义模板作为response的渲染器时才需要提供该属性。</p><h3 id="accepted-renderer" tabindex="-1"><a class="header-anchor" href="#accepted-renderer" aria-hidden="true">#</a> .accepted_renderer</h3><p>将用于呈现response的render实例。<br> 自动通过 <code>APIView</code> 或者 <code>@api_view</code> 在view返回response之前设置。</p><h3 id="accepted-media-type" tabindex="-1"><a class="header-anchor" href="#accepted-media-type" aria-hidden="true">#</a> .accepted_media_type</h3><p>由 content negotiation 阶段选择的媒体类型。<br> 自动通过 <code>APIView</code> 或者 <code>@api_view</code> 在view返回response之前设置。</p><h3 id="renderer-context" tabindex="-1"><a class="header-anchor" href="#renderer-context" aria-hidden="true">#</a> .renderer_context</h3><p>一个将传递给渲染器的<code>.render()</code>方法的附加上下文信息字典。<br> 自动通过 <code>APIView</code> 或者 <code>@api_view</code> 在view返回response之前设置。</p><hr><h2 id="标准的httpresponse-属性" tabindex="-1"><a class="header-anchor" href="#标准的httpresponse-属性" aria-hidden="true">#</a> 标准的HttpResponse 属性</h2><p><code>Response</code> 类扩展了 <code>SimpleTemplateResponse</code>，并且所有常用的属性和方法都是提供的。比如你可以使用标准的方法设置response的header信息：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>response <span class="token operator">=</span> Response<span class="token punctuation">(</span><span class="token punctuation">)</span>
response<span class="token punctuation">[</span><span class="token string">&#39;Cache-Control&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;no-cache&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> .render()</h3><p><strong>Signature:</strong> <code>.render()</code><br> 和其他的 <code>TemplateResponse</code> 一样，调用该方法将response的序列化数据呈现为最终的response内容。 当 <code>.render()</code> 被调用时， response的内容将被设置成在 <code>accepted_renderer</code>实例上调用 <code>.render(data, accepted_media_type, renderer_context)</code> 方法返回的结果。<br> 你通常并不需要自己调用 <code>.render()</code> ，因为它是由Django的标准响应周期来处理的。</p>`,22);function k(T,v){const o=r("ExternalLinkIcon");return d(),c("div",null,[i,e("blockquote",null,[e("p",null,[n("与基本的HttpResponse对象不同, TemplateResponse 对象保留view提供的上下文的详细信息以计算 response. Response的最终输出直到它在稍后的响应过程中被需要才会计算。"),l,n(" — "),e("a",h,[n("Django 文档"),a(o)])])]),u,e("ul",null,[_,e("li",null,[e("p",null,[m,n(": response的状态码。默认是200. 另行参阅 "),e("a",b,[n("status codes"),a(o)]),n(".")])]),R,f,g]),x])}const S=t(p,[["render",k],["__file","02.Responses（响应）.html.vue"]]);export{S as default};
