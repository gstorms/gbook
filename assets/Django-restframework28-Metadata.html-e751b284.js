import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-cfbf85c1.js";const e={},p=t(`<h1 id="drf28-metadata" tabindex="-1"><a class="header-anchor" href="#drf28-metadata" aria-hidden="true">#</a> DRF28-Metadata</h1><p>OPTIONS允许客户端确定与资源相关的选项和/或需求，而无需暗示资源操作或启动资源检索。</p><h2 id="一、metadata" tabindex="-1"><a class="header-anchor" href="#一、metadata" aria-hidden="true">#</a> 一、Metadata</h2><p>简介<br> REST框架包含一个可配置的机制，用于确定API如何响应OPTIONS可选请求。允许你返回API模式或者其他资源信息<br> 目前还没有任何广泛采用的约定来返回HTTP OPTIONS 请求的响应样式，因此我们提供了一种特殊的样式，返回一些有用的信息。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 默认返回的response信息</span>
HTTP <span class="token number">200</span> OK
Allow<span class="token punctuation">:</span> GET<span class="token punctuation">,</span> POST<span class="token punctuation">,</span> HEAD<span class="token punctuation">,</span> OPTIONS
Content<span class="token operator">-</span>Type<span class="token punctuation">:</span> application<span class="token operator">/</span>json

<span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;To Do List&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;List existing &#39;To Do&#39; items, or create a new item.&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;renders&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;text/html&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;parses&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;multipart/form-data&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;actions&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;POST&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;note&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;required&quot;</span><span class="token punctuation">:</span> false<span class="token punctuation">,</span>
                <span class="token string">&quot;read_only&quot;</span><span class="token punctuation">:</span> false<span class="token punctuation">,</span>
                <span class="token string">&quot;label&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;max_length&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>设置元数据模式<br> REST框架仅包含一种元数据模式：SimpleMetadata，如果想使用其他的需要自定义元数据类</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;DEFAULT_METADATA_CLASS&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;rest_framework.metadata.SimpleMetadata&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">APIRoot</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    metadata_class <span class="token operator">=</span> APIRootMetadata

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>创建模式端点</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@list_route</span><span class="token punctuation">(</span>methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">schema</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    meta <span class="token operator">=</span> self<span class="token punctuation">.</span>metadata_class<span class="token punctuation">(</span><span class="token punctuation">)</span>
    data <span class="token operator">=</span> meta<span class="token punctuation">.</span>determine_metadata<span class="token punctuation">(</span>request<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
    <span class="token keyword">return</span> Response<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最好使用这种方法，因为OPTIONS响应不可以缓存</p><h2 id="二、自定义元类" tabindex="-1"><a class="header-anchor" href="#二、自定义元类" aria-hidden="true">#</a> 二、自定义元类</h2><p>继承重写BaseMetadata<br> 实现determine_metadata(self, request, view)方法<br> 您可能想要做的有用的事情包括返回模式信息，使用JSON模式之类的格式，或者将调试信息返回给admin用户。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 限制信息仅返回给OPTIONS请求</span>
<span class="token keyword">class</span> <span class="token class-name">MinimalMetadata</span><span class="token punctuation">(</span>BaseMetadata<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Don&#39;t include field and other information for \`OPTIONS\` requests.
    Just return the name and description.
    &quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">determine_metadata</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> view<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> view<span class="token punctuation">.</span>get_view_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">&#39;description&#39;</span><span class="token punctuation">:</span> view<span class="token punctuation">.</span>get_view_description<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

<span class="token comment"># 配置</span>
REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;DEFAULT_METADATA_CLASS&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;myproject.apps.core.MinimalMetadata&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、三方包" tabindex="-1"><a class="header-anchor" href="#三、三方包" aria-hidden="true">#</a> 三、三方包</h2><ol><li>DRF-schema-adapter<br> drf-schema-adapter是一组工具，它使向前端框架和库提供模式信息变得更加容易。它提供了一个metadata mixin，以及两个元数据类和几个适合生成json-schema的适配器，以及各种库可读的模式信息。</li></ol>`,15),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","Django-restframework28-Metadata.html.vue"]]);export{r as default};
