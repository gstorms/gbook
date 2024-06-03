import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,a as s,b as n,d as i,f as l}from"./app-cfbf85c1.js";const c={},u=l(`<h2 id="_1-请求对象" tabindex="-1"><a class="header-anchor" href="#_1-请求对象" aria-hidden="true">#</a> 1. 请求对象</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>request扩展的对象HttpRequest
核心功能， request<span class="token punctuation">.</span>data属性，和request<span class="token punctuation">.</span>POST类似
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-响应对象" tabindex="-1"><a class="header-anchor" href="#_2-响应对象" aria-hidden="true">#</a> 2. 响应对象</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Response对象，按指定的congtent<span class="token operator">-</span><span class="token builtin">type</span>渲染数据，并返回给客户端

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-状态码-status" tabindex="-1"><a class="header-anchor" href="#_3-状态码-status" aria-hidden="true">#</a> 3. 状态码（status）</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">100</span>继续请求者应当继续提出请求。服务器已收到请求的一部分，正在等待其余部分。
<span class="token number">101</span>切换协议请求者已要求服务器切换协议，服务器已确认并准备切换。
<span class="token number">200</span>成功服务器已成功处理了请求。
<span class="token number">201</span>已创建请求成功并且服务器创建了新的资源。
<span class="token number">202</span>已接受服务器已接受请求，但尚未处理。
<span class="token number">203</span>非授权信息服务器已成功处理了请求，但返回的信息可能来自另一来源。
<span class="token number">204</span>无内容服务器成功处理了请求，但没有返回任何内容。
<span class="token number">205</span>重置内容服务器成功处理了请求，内容被重置。
<span class="token number">206</span>部分内容服务器成功处理了部分请求。
<span class="token number">300</span>多种选择针对请求，服务器可执行多种操作。
<span class="token number">301</span>永久移动请求的网页已永久移动到新位置，即永久重定向。
<span class="token number">302</span>临时移动请求的网页暂时跳转到其他页面，即暂时重定向。
<span class="token number">303</span>查看其他位置如果原来的请求是 POST，重定向目标文档应该通过 GET 提取。
<span class="token number">304</span>未修改此次请求返回的网页未修改，继续使用上次的资源。
<span class="token number">305</span>使用代理请求者应该使用代理访问该网页。
<span class="token number">307</span>临时重定向请求的资源临时从其他位置响应。
<span class="token number">400</span>错误请求服务器无法解析该请求。
<span class="token number">401</span>未授权请求没有进行身份验证或验证未通过。
<span class="token number">403</span>禁止访问服务器拒绝此请求。
<span class="token number">404</span>未找到服务器找不到请求的网页。
<span class="token number">405</span>方法禁用服务器禁用了请求中指定的方法。
<span class="token number">406</span>不接受无法使用请求的内容响应请求的网页。
<span class="token number">407</span>需要代理授权请求者需要使用代理授权。
<span class="token number">408</span>请求超时服务器请求超时。
<span class="token number">409</span>冲突服务器在完成请求时发生冲突。
<span class="token number">410</span>已删除请求的资源已永久删除。
<span class="token number">411</span>需要有效长度服务器不接受不含有效内容长度标头字段的请求。
<span class="token number">412</span>未满足前提条件服务器未满足请求者在请求中设置的其中一个前提条件。
<span class="token number">413</span>请求实体过大请求实体过大，超出服务器的处理能力。
<span class="token number">414</span>请求 URI 过长请求网址过长，服务器无法处理。
<span class="token number">415</span>不支持类型请求的格式不受请求页面的支持。
<span class="token number">416</span>请求范围不符页面无法提供请求的范围。
<span class="token number">417</span>未满足期望值服务器未满足期望请求标头字段的要求。
<span class="token number">500</span>服务器内部错误服务器遇到错误，无法完成请求。
<span class="token number">501</span>未实现服务器不具备完成请求的功能。
<span class="token number">502</span>错误网关服务器作为网关或代理，从上游服务器收到无效响应。
<span class="token number">503</span>服务不可用服务器目前无法使用。
<span class="token number">504</span>网关超时服务器作为网关或代理，但是没有及时从上游服务器收到请求。
505HTTP 版本不支持服务器不支持请求中所用的 HTTP 协议版本。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-包装api视图" tabindex="-1"><a class="header-anchor" href="#_4-包装api视图" aria-hidden="true">#</a> 4. 包装API视图</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>两种方法：利用@api_view装饰器，装饰函数，另一种是基于类的APIView<span class="token punctuation">.</span>
装饰器提供了少量的功能，如确保接收Request，和添加内容到Response对象中，也提供了一些常见的异常响应对象，当接收的数据request<span class="token punctuation">.</span>data出现错误时，如<span class="token number">405</span> Method Not Allowed，

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-使用实例" tabindex="-1"><a class="header-anchor" href="#_5-使用实例" aria-hidden="true">#</a> 5. 使用实例</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 利用qpp_view装饰器时，不再需要JSONResponse对象</span>
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> status
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>decorators <span class="token keyword">import</span> api_view
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">from</span> snippets<span class="token punctuation">.</span>models <span class="token keyword">import</span> Snippet
<span class="token keyword">from</span> snippets<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> SnippetSerializer


<span class="token decorator annotation punctuation">@api_view</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">snippet_list</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">:</span>
        snippets <span class="token operator">=</span> Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> SnippetSerializer<span class="token punctuation">(</span>snippets<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

    <span class="token keyword">elif</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">:</span>
        serializer <span class="token operator">=</span> SnippetSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">if</span> serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_201_CREATED<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>errors<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_400_BAD_REQUEST<span class="token punctuation">)</span>


<span class="token comment"># 单独对象，使用方法&#39;GET&#39;, &#39;PUT&#39;, &#39;DELETE&#39;（终于有用了！！！）</span>
<span class="token decorator annotation punctuation">@api_view</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">snippet_detail</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Retrieve, update or delete a snippet instance.
    &quot;&quot;&quot;</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        snippet <span class="token operator">=</span> Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>
    <span class="token keyword">except</span> Snippet<span class="token punctuation">.</span>DoesNotExist<span class="token punctuation">:</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_404_NOT_FOUND<span class="token punctuation">)</span>

    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">:</span>
        serializer <span class="token operator">=</span> SnippetSerializer<span class="token punctuation">(</span>snippet<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

    <span class="token keyword">elif</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">:</span>
        serializer <span class="token operator">=</span> SnippetSerializer<span class="token punctuation">(</span>snippet<span class="token punctuation">,</span> data<span class="token operator">=</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">if</span> serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>errors<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_400_BAD_REQUEST<span class="token punctuation">)</span>

    <span class="token keyword">elif</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">:</span>
        snippet<span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_204_NO_CONTENT<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-为网址添加后缀-format参数" tabindex="-1"><a class="header-anchor" href="#_6-为网址添加后缀-format参数" aria-hidden="true">#</a> 6. 为网址添加后缀（format参数）</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">snippet_list</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token keyword">def</span> <span class="token function">snippet_detail</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> pk<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token comment">#更新urls.py</span>
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
url<span class="token punctuation">(</span><span class="token string">r&#39;^snippets/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>snippet_list<span class="token punctuation">)</span><span class="token punctuation">,</span>
url<span class="token punctuation">(</span><span class="token string">r&#39;^snippets/(?P&lt;pk&gt;[0-9]+)$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>snippet_detail<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token comment"># 设置后缀</span>
urlpatterns <span class="token operator">=</span> format_suffix_patterns<span class="token punctuation">(</span>urlpatterns<span class="token punctuation">)</span>


<span class="token comment"># 在网页端，我们利用Accept设置接收数据的格式</span>
http http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8000</span><span class="token operator">/</span>snippets<span class="token operator">/</span> Accept<span class="token punctuation">:</span>application<span class="token operator">/</span>json  <span class="token comment"># Request JSON</span>
http http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8000</span><span class="token operator">/</span>snippets<span class="token operator">/</span> Accept<span class="token punctuation">:</span>text<span class="token operator">/</span>html         <span class="token comment"># Request HTML</span>
<span class="token comment"># 或者在服务器端为网址添上后缀</span>
http http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8000</span><span class="token operator">/</span>snippets<span class="token punctuation">.</span>json  <span class="token comment"># JSON suffix</span>
http http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8000</span><span class="token operator">/</span>snippets<span class="token punctuation">.</span>api   <span class="token comment"># Browsable API suffix</span>
<span class="token comment"># 所以我们向浏览器返回的其实是可浏览的HTML表示</span>

<span class="token comment"># 网页端利用Content-Type请求头设置，来格式化向服务器请求的数据</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-常用的method" tabindex="-1"><a class="header-anchor" href="#_7-常用的method" aria-hidden="true">#</a> 7. 常用的method</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>GET <span class="token operator">/</span>zoos：列出所有动物园
POST <span class="token operator">/</span>zoos：新建一个动物园
GET <span class="token operator">/</span>zoos<span class="token operator">/</span>ID：获取某个指定动物园的信息
PUT <span class="token operator">/</span>zoos<span class="token operator">/</span>ID：更新某个指定动物园的信息（必须提供该动物园的全部信息）
PATCH <span class="token operator">/</span>zoos<span class="token operator">/</span>ID：更新某个指定动物园的信息（只需提供该动物园的部分信息），所以一般更新使用patch
DELETE <span class="token operator">/</span>zoos<span class="token operator">/</span>ID：删除某个动物园
GET <span class="token operator">/</span>zoos<span class="token operator">/</span>ID<span class="token operator">/</span>animals：列出某个指定动物园的所有动物
DELETE <span class="token operator">/</span>zoos<span class="token operator">/</span>ID<span class="token operator">/</span>animals<span class="token operator">/</span>ID：删除某个指定动物园的指定动物

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),r=s("br",null,null,-1),d=s("br",null,null,-1),k={href:"https://blog.csdn.net/runnoob_1115/article/details/78479120",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=p("ExternalLinkIcon");return t(),o("div",null,[u,s("p",null,[n("————————————————"),r,n(" 版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。"),d,n(" 原文链接："),s("a",k,[n("https://blog.csdn.net/runnoob_1115/article/details/78479120"),i(a)])])])}const y=e(c,[["render",v],["__file","Django-restframework03-请求和响应（request和response）.html.vue"]]);export{y as default};
