import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-d0fb0332.js";const i={},t=e(`<h1 id="drf33-status-codes" tabindex="-1"><a class="header-anchor" href="#drf33-status-codes" aria-hidden="true">#</a> DRF33-Status-Codes</h1><h2 id="一、status-codes" tabindex="-1"><a class="header-anchor" href="#一、status-codes" aria-hidden="true">#</a> 一、Status Codes</h2><h3 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1.简介</h3><p>不建议在你的Response中使用裸露的状态码。REST框架包括一组命名常量，您可以使用这些常量来使更多的代码更加明显和可读。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> status
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response

<span class="token keyword">def</span> <span class="token function">empty_view</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    content <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;please move along&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;nothing to see here&#39;</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> Response<span class="token punctuation">(</span>content<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_404_NOT_FOUND<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面列出了status模块中包含的完整的HTTP状态代码。<br> 该模块还包括一组帮助函数，用于测试状态代码是否在给定范围内。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> status
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>test <span class="token keyword">import</span> APITestCase

<span class="token keyword">class</span> <span class="token class-name">ExampleTestCase</span><span class="token punctuation">(</span>APITestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">test_url_root</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        url <span class="token operator">=</span> reverse<span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span>
        response <span class="token operator">=</span> self<span class="token punctuation">.</span>client<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertTrue<span class="token punctuation">(</span>status<span class="token punctuation">.</span>is_success<span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-informational-1xx" tabindex="-1"><a class="header-anchor" href="#_2-informational-1xx" aria-hidden="true">#</a> 2.Informational - 1xx</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>HTTP_100_CONTINUE
HTTP_101_SWITCHING_PROTOCOLS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-successful-2xx" tabindex="-1"><a class="header-anchor" href="#_3-successful-2xx" aria-hidden="true">#</a> 3.Successful - 2xx</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>HTTP_200_OK
HTTP_201_CREATED
HTTP_202_ACCEPTED
HTTP_203_NON_AUTHORITATIVE_INFORMATION
HTTP_204_NO_CONTENT
HTTP_205_RESET_CONTENT
HTTP_206_PARTIAL_CONTENT
HTTP_207_MULTI_STATUS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-redirection-3xx" tabindex="-1"><a class="header-anchor" href="#_4-redirection-3xx" aria-hidden="true">#</a> 4.Redirection - 3xx</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>HTTP_300_MULTIPLE_CHOICES
HTTP_301_MOVED_PERMANENTLY
HTTP_302_FOUND
HTTP_303_SEE_OTHER
HTTP_304_NOT_MODIFIED
HTTP_305_USE_PROXY
HTTP_306_RESERVED
HTTP_307_TEMPORARY_REDIRECT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-client-error-4xx" tabindex="-1"><a class="header-anchor" href="#_5-client-error-4xx" aria-hidden="true">#</a> 5.Client Error - 4xx</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>HTTP_400_BAD_REQUEST
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-server-error-5xx" tabindex="-1"><a class="header-anchor" href="#_5-server-error-5xx" aria-hidden="true">#</a> 5.Server Error - 5xx</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>HTTP_500_INTERNAL_SERVER_ERROR
HTTP_501_NOT_IMPLEMENTED
HTTP_502_BAD_GATEWAY
HTTP_503_SERVICE_UNAVAILABLE
HTTP_504_GATEWAY_TIMEOUT
HTTP_505_HTTP_VERSION_NOT_SUPPORTED
HTTP_507_INSUFFICIENT_STORAGE
HTTP_511_NETWORK_AUTHENTICATION_REQUIRED
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-helper-functions" tabindex="-1"><a class="header-anchor" href="#_6-helper-functions" aria-hidden="true">#</a> 6.Helper functions</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>is_informational<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 1xx</span>
is_success<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 2xx</span>
is_redirect<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># 3xx</span>
is_client_error<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 4xx</span>
is_server_error<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 5xx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),l=[t];function d(c,r){return s(),a("div",null,l)}const u=n(i,[["render",d],["__file","Django-restframework33-Status-Codes.html.vue"]]);export{u as default};
