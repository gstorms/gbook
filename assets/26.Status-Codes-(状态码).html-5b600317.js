import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as d,a as e,b as n,d as a,f as i}from"./app-3f278ba4.js";const c={},o=e("h1",{id:"status-codes-状态码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#status-codes-状态码","aria-hidden":"true"},"#"),n(" Status Codes (状态码)")],-1),u=e("br",null,null,-1),_={href:"http://www.ietf.org/rfc/rfc2324.txt",target:"_blank",rel:"noopener noreferrer"},p=i(`<p>不建议在响应中使用裸露的状态码。REST框架包含一组可以使用以使代码更加明显和可读的命名常量。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> status
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">def</span> <span class="token function">empty_view</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    content <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;please move along&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;nothing to see here&#39;</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> Response<span class="token punctuation">(</span>content<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_404_NOT_FOUND<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面列出了 <code>state</code> 模块中包含的全套HTTP状态码。<br> 该模块还包括一组辅助函数，用于测试状态码是否在给定范围内。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> status
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>test <span class="token keyword">import</span> APITestCase
<span class="token keyword">class</span> <span class="token class-name">ExampleTestCase</span><span class="token punctuation">(</span>APITestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">test_url_root</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        url <span class="token operator">=</span> reverse<span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span>
        response <span class="token operator">=</span> self<span class="token punctuation">.</span>client<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertTrue<span class="token punctuation">(</span>status<span class="token punctuation">.</span>is_success<span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),T={href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html",target:"_blank",rel:"noopener noreferrer"},v={href:"http://tools.ietf.org/html/rfc6585",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="informational-1xx" tabindex="-1"><a class="header-anchor" href="#informational-1xx" aria-hidden="true">#</a> Informational - 1xx</h2><p>此类状态代码表示临时响应。默认情况下，REST框架中没有使用1xx状态代码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP_100_CONTINUE
HTTP_101_SWITCHING_PROTOCOLS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="successful-2xx" tabindex="-1"><a class="header-anchor" href="#successful-2xx" aria-hidden="true">#</a> Successful - 2xx</h2><p>此类状态码表示已成功接收、理解和接受客户端的请求。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP_200_OK
HTTP_201_CREATED
HTTP_202_ACCEPTED
HTTP_203_NON_AUTHORITATIVE_INFORMATION
HTTP_204_NO_CONTENT
HTTP_205_RESET_CONTENT
HTTP_206_PARTIAL_CONTENT
HTTP_207_MULTI_STATUS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redirection-3xx" tabindex="-1"><a class="header-anchor" href="#redirection-3xx" aria-hidden="true">#</a> Redirection - 3xx</h2><p>此类状态码表示用户代理需要采取进一步的操作才能完成请求。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP_300_MULTIPLE_CHOICES
HTTP_301_MOVED_PERMANENTLY
HTTP_302_FOUND
HTTP_303_SEE_OTHER
HTTP_304_NOT_MODIFIED
HTTP_305_USE_PROXY
HTTP_306_RESERVED
HTTP_307_TEMPORARY_REDIRECT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="client-error-4xx" tabindex="-1"><a class="header-anchor" href="#client-error-4xx" aria-hidden="true">#</a> Client Error - 4xx</h2><p>此类状态码用于客户端似乎出错的情况。除了响应HEAD请求时，服务器应该包含一个实体对象，其中包含对错误情况的解释，以及它是临时的还是持续的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP_400_BAD_REQUEST
HTTP_401_UNAUTHORIZED
HTTP_402_PAYMENT_REQUIRED
HTTP_403_FORBIDDEN
HTTP_404_NOT_FOUND
HTTP_405_METHOD_NOT_ALLOWED
HTTP_406_NOT_ACCEPTABLE
HTTP_407_PROXY_AUTHENTICATION_REQUIRED
HTTP_408_REQUEST_TIMEOUT
HTTP_409_CONFLICT
HTTP_410_GONE
HTTP_411_LENGTH_REQUIRED
HTTP_412_PRECONDITION_FAILED
HTTP_413_REQUEST_ENTITY_TOO_LARGE
HTTP_414_REQUEST_URI_TOO_LONG
HTTP_415_UNSUPPORTED_MEDIA_TYPE
HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE
HTTP_417_EXPECTATION_FAILED
HTTP_422_UNPROCESSABLE_ENTITY
HTTP_423_LOCKED
HTTP_424_FAILED_DEPENDENCY
HTTP_428_PRECONDITION_REQUIRED
HTTP_429_TOO_MANY_REQUESTS
HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE
HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-error-5xx" tabindex="-1"><a class="header-anchor" href="#server-error-5xx" aria-hidden="true">#</a> Server Error - 5xx</h2><p>此类响应状态码表示服务器意识到自身出错或无法执行请求的情况。除了响应HEAD请求的时候，服务器应该包含一个实体，其中包含对错误情况的解释，以及它是临时的还是持续的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP_500_INTERNAL_SERVER_ERROR
HTTP_501_NOT_IMPLEMENTED
HTTP_502_BAD_GATEWAY
HTTP_503_SERVICE_UNAVAILABLE
HTTP_504_GATEWAY_TIMEOUT
HTTP_505_HTTP_VERSION_NOT_SUPPORTED
HTTP_507_INSUFFICIENT_STORAGE
HTTP_511_NETWORK_AUTHENTICATION_REQUIRED
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="helper-functions-辅助函数" tabindex="-1"><a class="header-anchor" href="#helper-functions-辅助函数" aria-hidden="true">#</a> Helper functions （辅助函数）</h2><p>下列helper函数可用于标识响应代码的类别。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>is_informational()  # 1xx
is_success()        # 2xx
is_redirect()       # 3xx
is_client_error()   # 4xx
is_server_error()   # 5xx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function E(b,x){const s=r("ExternalLinkIcon");return l(),d("div",null,[o,e("blockquote",null,[e("p",null,[n(`418 I'm a teapot - Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.`),u,n(" — "),e("a",_,[n("RFC 2324"),a(s)]),n(", Hyper Text Coffee Pot Control Protocol")])]),p,e("p",null,[n("有关正确使用HTTP状态代码的更多信息 "),e("a",T,[n("RFC 2616"),a(s)]),n(" 和 "),e("a",v,[n("RFC 6585"),a(s)]),n(".")]),m])}const k=t(c,[["render",E],["__file","26.Status-Codes-(状态码).html.vue"]]);export{k as default};
