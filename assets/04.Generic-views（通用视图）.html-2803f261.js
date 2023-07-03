import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as p,a as n,b as e,d as a,f as t}from"./app-3f278ba4.js";const c={},l=n("h1",{id:"generic-views-通用视图-generic-views",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#generic-views-通用视图-generic-views","aria-hidden":"true"},"#"),e(" Generic-views（通用视图）Generic views")],-1),d=n("br",null,null,-1),u={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/%5Bhttps://docs.djangoproject.com/en/stable/ref/class-based-views///#base-vs-generic-views%5D(https://docs.djangoproject.com/en/stable/ref/class-based-views/#base-vs-generic-views)",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>基于类的视图的主要优点之一是它们允许你组合一些可重用的行为。 REST framework通过提供许多预先构建的视图来提供常用的模式来利用这一优点。<br> REST framework 提供的通用视图允许您快速构建与数据库模型密切映射的API视图。<br> 如果通用视图不适合你的API的需求，你可以选择使用常规 <code>APIView</code> 类，或重用通用视图使用的mixins和基类来组成你自己的一组可重用的通用视图。</p><h2 id="举个例子" tabindex="-1"><a class="header-anchor" href="#举个例子" aria-hidden="true">#</a> 举个例子</h2><p>通常在使用通用视图时，你将覆盖视图，并设置多个类属性。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>models <span class="token keyword">import</span> User
<span class="token keyword">from</span> myapp<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> UserSerializer
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> generics
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>permissions <span class="token keyword">import</span> IsAdminUser
<span class="token keyword">class</span> <span class="token class-name">UserList</span><span class="token punctuation">(</span>generics<span class="token punctuation">.</span>ListCreateAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer
    permission_classes <span class="token operator">=</span> <span class="token punctuation">(</span>IsAdminUser<span class="token punctuation">,</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于更复杂的情况，您可能还想覆盖视图类上的各种方法。比如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">UserList</span><span class="token punctuation">(</span>generics<span class="token punctuation">.</span>ListCreateAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer
    permission_classes <span class="token operator">=</span> <span class="token punctuation">(</span>IsAdminUser<span class="token punctuation">,</span> <span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">list</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Note the use of \`get_queryset()\` instead of \`self.queryset\`</span>
        queryset <span class="token operator">=</span> self<span class="token punctuation">.</span>get_queryset<span class="token punctuation">(</span><span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>queryset<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于非常简单的情况，你可能想使用 <code>.as_view()</code> 方法传递任何类属性。 比如：你的URLconf可能包括类似以下条目：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url<span class="token punctuation">(</span><span class="token string">r&#39;^/users/&#39;</span><span class="token punctuation">,</span> ListCreateAPIView<span class="token punctuation">.</span>as_view\\<span class="token punctuation">(</span>queryset<span class="token operator">=</span>User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> serializer_class<span class="token operator">=</span>UserSerializer<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;user-list&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h1 id="api-reference" tabindex="-1"><a class="header-anchor" href="#api-reference" aria-hidden="true">#</a> API Reference</h1><h2 id="genericapiview" tabindex="-1"><a class="header-anchor" href="#genericapiview" aria-hidden="true">#</a> GenericAPIView</h2><p>此类扩展了REST框架的 <code>APIView</code> 类，为标准list和detail view 添加了通常需要的行为。<br> 提供的每个具体通用视图是通过将 <code>GenericAPIView</code> 与一个或多个mixin类组合来构建的。</p><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3><p><strong>基本设置</strong>:<br> 以下属性控制着基本视图的行为。</p><ul><li><code>queryset</code> - 用于从视图返回对象的查询结果集。通常，你必须设置此属性或者重写 <code>get_queryset()</code> 方法。如果你重写了一个视图的方法，重要的是你应该调用 <code>get_queryset()</code> 方法而不是直接访问该属性，因为 <code>queryset</code> 将被计算一次，这些结果将为后续请求缓存起来。</li><li><code>serializer_class</code> - 用于验证和反序列化输入以及用于序列化输出的Serializer类。 通常，你必须设置此属性或者重写<code>get_serializer_class()</code> 方法。</li><li><code>lookup_field</code> - 用于执行各个model实例的对象查找的model字段。默认为 <code>&#39;pk&#39;</code>。 请注意，在使用超链接API时，如果需要使用自定义的值，你需要确保在API视图_和_序列化类_都_设置查找字段。</li><li><code>lookup_url_kwarg</code> - 应用于对象查找的URL关键字参数。它的 URL conf 应该包括一个与这个值相对应的关键字参数。如果取消设置，默认情况下使用与 <code>lookup_field</code>相同的值。</li></ul><p><strong>Pagination</strong>:<br> 以下属性用于在与列表视图一起使用时控制分页。</p><ul><li><code>pagination_class</code> - 当分页列出结果时应使用的分页类。默认值与 <code>DEFAULT_PAGINATION_CLASS</code> 设置的值相同，即 <code>&#39;rest_framework.pagination.PageNumberPagination&#39;</code>。</li></ul><p><strong>Filtering</strong>:</p><ul><li><code>filter_backends</code> - 用于过滤查询集的过滤器后端类的列表。默认值与<code>DEFAULT_FILTER_BACKENDS</code> 设置的值相同。</li></ul><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><p><strong>Base methods</strong>:</p><h4 id="get-queryset-self" tabindex="-1"><a class="header-anchor" href="#get-queryset-self" aria-hidden="true">#</a> <code>get_queryset(self)</code></h4><p>返回列表视图中实用的查询集，该查询集还用作详细视图中的查找基础。默认返回由 <code>queryset</code> 属性指定的查询集。 这个方法应该总是被调用而不是直接访问 <code>self.queryset</code> ，因为 <code>self.queryset</code> 只会被计算一起，然后这些结果将为后续的请求缓存起来。 该方法可能会被重写以提供动态行为，比如返回基于发出请求的用户的结果集。<br> 例如:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_queryset</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    user <span class="token operator">=</span> self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user
    <span class="token keyword">return</span> user<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-object-self" tabindex="-1"><a class="header-anchor" href="#get-object-self" aria-hidden="true">#</a> <code>get_object(self)</code></h4><p>返回应用于详细视图的对象实例。默认使用 <code>lookup_field</code> 参数过滤基本的查询集。<br> 该方法可以被重写以提供更复杂的行为，例如基于多个 URL 参数的对象查找。<br> 例如:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_object</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> self<span class="token punctuation">.</span>get_queryset<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">filter</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> field <span class="token keyword">in</span> self<span class="token punctuation">.</span>multiple_lookup_fields<span class="token punctuation">:</span>
        <span class="token builtin">filter</span><span class="token punctuation">[</span>field<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>kwargs<span class="token punctuation">[</span>field<span class="token punctuation">]</span>
    obj <span class="token operator">=</span> get_object_or_404<span class="token punctuation">(</span>queryset<span class="token punctuation">,</span> <span class="token operator">**</span><span class="token builtin">filter</span><span class="token punctuation">)</span>
    self<span class="token punctuation">.</span>check_object_permissions<span class="token punctuation">(</span>self<span class="token punctuation">.</span>request<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
    <span class="token keyword">return</span> obj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，如果你的API不包含任何对象级的权限控制，你可以选择不执行<code>self.check_object_permissions</code>，简单的返回 <code>get_object_or_404</code> 查找的对象即可。</p><h4 id="filter-queryset-self-queryset" tabindex="-1"><a class="header-anchor" href="#filter-queryset-self-queryset" aria-hidden="true">#</a> <code>filter_queryset(self, queryset)</code></h4><p>给定一个queryset，使用任何过滤器后端进行过滤，返回一个新的queryset。<br> 例如:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">filter_queryset</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> queryset<span class="token punctuation">)</span><span class="token punctuation">:</span>
    filter_backends <span class="token operator">=</span> <span class="token punctuation">(</span>CategoryFilter<span class="token punctuation">,</span> <span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token string">&#39;geo_route&#39;</span> <span class="token keyword">in</span> self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>query_params<span class="token punctuation">:</span>
        filter_backends <span class="token operator">=</span> <span class="token punctuation">(</span>GeoRouteFilter<span class="token punctuation">,</span> CategoryFilter<span class="token punctuation">)</span>
    <span class="token keyword">elif</span> <span class="token string">&#39;geo_point&#39;</span> <span class="token keyword">in</span> self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>query_params<span class="token punctuation">:</span>
        filter_backends <span class="token operator">=</span> <span class="token punctuation">(</span>GeoPointFilter<span class="token punctuation">,</span> CategoryFilter<span class="token punctuation">)</span>
    <span class="token keyword">for</span> backend <span class="token keyword">in</span> <span class="token builtin">list</span><span class="token punctuation">(</span>filter_backends<span class="token punctuation">)</span><span class="token punctuation">:</span>
        queryset <span class="token operator">=</span> backend<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>filter_queryset<span class="token punctuation">(</span>self<span class="token punctuation">.</span>request<span class="token punctuation">,</span> queryset<span class="token punctuation">,</span> view<span class="token operator">=</span>self<span class="token punctuation">)</span>
    <span class="token keyword">return</span> queryset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-serializer-class-self" tabindex="-1"><a class="header-anchor" href="#get-serializer-class-self" aria-hidden="true">#</a> <code>get_serializer_class(self)</code></h4><p>返回应用于序列化的类。默认为返回 <code>serializer_class</code> 属性的值。<br> 可以被重写以提供动态的行为，例如对于读取和写入操作使用不同的序列化器，或者为不同类型的用户提供不同的序列化器。<br> 例如:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_serializer_class</span><span class="token punctuation">(</span>self\\<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">.</span>is_staff<span class="token punctuation">:</span>
        <span class="token keyword">return</span> FullAccountSerializer
    <span class="token keyword">return</span> BasicAccountSerializer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Save and deletion hooks</strong>:<br> 以下方法由mixin类提供，并提供对象保存或删除行为的简单重写。</p><ul><li><code>perform_create(self, serializer)</code> - 在保存新对象实例时由 <code>CreateModelMixin</code> 调用。</li><li><code>perform_update(self, serializer)</code> - 在保存现有对象实例时由 <code>UpdateModelMixin</code> 调用。</li><li><code>perform_destroy(self, instance)</code> - 在删除对象实例时由 <code>DestroyModelMixin</code> 调用。</li></ul><p>这些钩子对于设置请求中隐含的但不是请求数据的一部分的属性特别有用。例如，你可以根据请求用户或基于URL关键字参数在对象上设置属性。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">perform_create</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span>user<span class="token operator">=</span>self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这些可重写的关键点对于添加在保存对象之前或之后发生的行为（例如通过电子邮件发送确认或记录更新日志）也特别有用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">perform_update</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    instance <span class="token operator">=</span> serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
    send_email_confirmation<span class="token punctuation">(</span>user<span class="token operator">=</span>self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">,</span> modified<span class="token operator">=</span>instance<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以使用这些钩子通过抛出 <code>ValidationError()</code> 来提供额外的验证。当你需要在数据库保存时应用一些验证逻辑时，这会很有用。 例如:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">perform_create</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> SignupRequest<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>user<span class="token operator">=</span>self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">)</span>
    <span class="token keyword">if</span> queryset<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> ValidationError<span class="token punctuation">(</span><span class="token string">&#39;You have already signed up&#39;</span><span class="token punctuation">)</span>
    serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span>user<span class="token operator">=</span>self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>: 这些方法替换了旧版本2.x中的 <code>pre_save</code>, <code>post_save</code>, <code>pre_delete</code> 和 <code>post_delete</code> 方法，这些方法不再可用。<br><strong>其他方法</strong>:<br> 你通常并不需要重写以下方法，虽然在你使用 <code>GenericAPIView</code> 编写自定义视图的时候可能会调用它们。</p><ul><li><code>get_serializer_context(self)</code> - 返回包含应该提供给序列化程序的任何额外上下文的字典。默认包含 <code>&#39;request&#39;</code>, <code>&#39;view&#39;</code> 和 <code>&#39;format&#39;</code> 这些keys。.</li><li><code>get_serializer(self, instance=None, data=None, many=False, partial=False)</code> - 返回一个序列化器的实例。</li><li><code>get_paginated_response(self, data)</code> - 返回分页样式的 <code>Response</code> 对象。</li><li><code>paginate_queryset(self, queryset)</code> - 如果需要分页查询，返回页面对象，如果没有为此视图配置分页，则返回 <code>None</code>。</li><li><code>filter_queryset(self, queryset)</code> - 给定查询集，使用任何过滤器后端进行过滤，返回一个新的查询集。</li></ul><hr><h1 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins" aria-hidden="true">#</a> Mixins</h1><p>Mixin 类提供用于提供基本视图行为的操作。注意mixin类提供动作方法，而不是直接定义处理程序方法，例如 <code>.get()</code> 和 <code>.post()</code>， 这允许更灵活的行为组成。<br> Mixin 类可以从 <code>rest_framework.mixins</code>导入。</p><h2 id="listmodelmixin" tabindex="-1"><a class="header-anchor" href="#listmodelmixin" aria-hidden="true">#</a> ListModelMixin</h2><p>提供一个 <code>.list(request, *args, **kwargs)</code> 方法，实现列出结果集。<br> 如果查询集被填充了数据，则返回 <code>200 OK</code> 响应，将查询集的序列化表示作为响应的主体。相应数据可以任意分页。</p><h2 id="createmodelmixin" tabindex="-1"><a class="header-anchor" href="#createmodelmixin" aria-hidden="true">#</a> CreateModelMixin</h2><p>提供 <code>.create(request, *args, **kwargs)</code> 方法，实现创建和保存一个新的model实例。<br> 如果创建了一个对象，这将返回一个 <code>201 Created</code> 响应，将该对象的序列化表示作为响应的主体。如果序列化的表示中包含名为 <code>url</code>的键，则响应的 <code>Location</code> 头将填充该值。<br> 如果为创建对象提供的请求数据无效，将返回 <code>400 Bad Request</code>，其中错误详细信息作为响应的正文。</p><h2 id="retrievemodelmixin" tabindex="-1"><a class="header-anchor" href="#retrievemodelmixin" aria-hidden="true">#</a> RetrieveModelMixin</h2><p>提供一个 <code>.retrieve(request, *args, **kwargs)</code> 方法，实现返回响应中现有模型的实例。<br> 如果可以检索对象，则返回 <code>200 OK</code> 响应，将该对象的序列化表示作为响应的主体。否则将返回 <code>404 Not Found</code>。</p><h2 id="updatemodelmixin" tabindex="-1"><a class="header-anchor" href="#updatemodelmixin" aria-hidden="true">#</a> UpdateModelMixin</h2><p>提供 <code>.update(request, *args, **kwargs)</code> 方法，实现更新和保存现有模型实例。<br> 同时还提供了一个 <code>.partial_update(request, *args, **kwargs)</code> 方法，这个方法和 <code>update</code> 方法类似，但更新的所有字段都是可选的。这允许支持 HTTP <code>PATCH</code> 请求。<br> 如果一个对象被更新，这将返回一个 <code>200 OK</code> 响应，将对象的序列化表示作为响应的主体。<br> 如果为更新对象提供的请求数据无效，将返回一个 <code>400 Bad Request</code> 响应，错误详细信息作为响应的正文。</p><h2 id="destroymodelmixin" tabindex="-1"><a class="header-anchor" href="#destroymodelmixin" aria-hidden="true">#</a> DestroyModelMixin</h2><p>提供一个 <code>.destroy(request, *args, **kwargs)</code> 方法，实现删除现有模型实例。<br> 如果删除对象，则返回 <code>204 No Content</code> 响应，否则返回 <code>404 Not Found</code>。</p><hr><h1 id="concrete-view-classes" tabindex="-1"><a class="header-anchor" href="#concrete-view-classes" aria-hidden="true">#</a> Concrete View Classes</h1><p>以下类是具体的通用视图。这通常是你真正用到的那些，除非你需要深度定制的行为。<br> 这些视图类可以从 <code>rest_framework.generics</code>导入。</p><h2 id="createapiview" tabindex="-1"><a class="header-anchor" href="#createapiview" aria-hidden="true">#</a> CreateAPIView</h2>`,61),h=n("strong",null,"仅创建",-1),m=n("br",null,null,-1),_=n("code",null,"post",-1),g=n("br",null,null,-1),v={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#genericapiview",target:"_blank",rel:"noopener noreferrer"},b={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#createmodelmixin",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"listapiview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#listapiview","aria-hidden":"true"},"#"),e(" ListAPIView")],-1),w=n("strong",null,"端点以表示",-1),y=n("br",null,null,-1),x=n("code",null,"get",-1),q=n("br",null,null,-1),M={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#genericapiview",target:"_blank",rel:"noopener noreferrer"},j={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#listmodelmixin",target:"_blank",rel:"noopener noreferrer"},R=n("h2",{id:"retrieveapiview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#retrieveapiview","aria-hidden":"true"},"#"),e(" RetrieveAPIView")],-1),z=n("strong",null,"只读",-1),A=n("strong",null,"单个模型实例",-1),P=n("br",null,null,-1),D=n("code",null,"get",-1),T=n("br",null,null,-1),I={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#genericapiview",target:"_blank",rel:"noopener noreferrer"},S={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#retrievemodelmixin",target:"_blank",rel:"noopener noreferrer"},U=n("h2",{id:"destroyapiview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#destroyapiview","aria-hidden":"true"},"#"),e(" DestroyAPIView")],-1),E=n("strong",null,"只删除",-1),V=n("strong",null,"单个模型实例",-1),L=n("br",null,null,-1),C=n("code",null,"delete",-1),F=n("br",null,null,-1),G={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#genericapiview",target:"_blank",rel:"noopener noreferrer"},N={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#destroymodelmixin",target:"_blank",rel:"noopener noreferrer"},B=n("h2",{id:"updateapiview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#updateapiview","aria-hidden":"true"},"#"),e(" UpdateAPIView")],-1),K=n("strong",null,"只更新",-1),O=n("strong",null,"单个模型实例",-1),H=n("br",null,null,-1),Y=n("code",null,"put",-1),J=n("code",null,"patch",-1),Q=n("br",null,null,-1),W={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#genericapiview",target:"_blank",rel:"noopener noreferrer"},X={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#updatemodelmixin",target:"_blank",rel:"noopener noreferrer"},Z=n("h2",{id:"listcreateapiview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#listcreateapiview","aria-hidden":"true"},"#"),e(" ListCreateAPIView")],-1),$=n("strong",null,"读写端点",-1),ee=n("strong",null,"模型实例的集合",-1),ne=n("br",null,null,-1),se=n("code",null,"get",-1),ae=n("code",null,"post",-1),te=n("br",null,null,-1),oe={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#genericapiview",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#listmodelmixin",target:"_blank",rel:"noopener noreferrer"},re={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#createmodelmixin",target:"_blank",rel:"noopener noreferrer"},pe=n("h2",{id:"retrieveupdateapiview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#retrieveupdateapiview","aria-hidden":"true"},"#"),e(" RetrieveUpdateAPIView")],-1),ce=n("strong",null,"读取或更新",-1),le=n("strong",null,"单个模型实例",-1),de=n("br",null,null,-1),ue=n("code",null,"get",-1),ke=n("code",null,"put",-1),he=n("code",null,"patch",-1),me=n("br",null,null,-1),_e={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#genericapiview",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#retrievemodelmixin",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#updatemodelmixin",target:"_blank",rel:"noopener noreferrer"},be=n("h2",{id:"retrievedestroyapiview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#retrievedestroyapiview","aria-hidden":"true"},"#"),e(" RetrieveDestroyAPIView")],-1),fe=n("strong",null,"读取或删除",-1),we=n("strong",null,"单个模型实例",-1),ye=n("br",null,null,-1),xe=n("code",null,"get",-1),qe=n("code",null,"delete",-1),Me=n("br",null,null,-1),je={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#genericapiview",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#retrievemodelmixin",target:"_blank",rel:"noopener noreferrer"},ze={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#destroymodelmixin",target:"_blank",rel:"noopener noreferrer"},Ae=n("h2",{id:"retrieveupdatedestroyapiview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#retrieveupdatedestroyapiview","aria-hidden":"true"},"#"),e(" RetrieveUpdateDestroyAPIView")],-1),Pe=n("strong",null,"读写删除",-1),De=n("strong",null,"单个模型实例",-1),Te=n("br",null,null,-1),Ie=n("code",null,"get",-1),Se=n("code",null,"put",-1),Ue=n("code",null,"patch",-1),Ee=n("code",null,"delete",-1),Ve=n("br",null,null,-1),Le={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#genericapiview",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#retrievemodelmixin",target:"_blank",rel:"noopener noreferrer"},Fe={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#updatemodelmixin",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/#destroymodelmixin",target:"_blank",rel:"noopener noreferrer"},Ne=t(`<hr><h1 id="自定义通用视图" tabindex="-1"><a class="header-anchor" href="#自定义通用视图" aria-hidden="true">#</a> 自定义通用视图</h1><p>通常你会想使用现有的通用视图，但是使用一些简单的自定义的行为。如果你发现自己在多个地方重复使用了一些自定义行为，你可能想将行为重构为一个公共类，然后只需根据需要应用到任何视图或视图集。</p><h2 id="创建自定义-mixins" tabindex="-1"><a class="header-anchor" href="#创建自定义-mixins" aria-hidden="true">#</a> 创建自定义 mixins</h2><p>例如，如果你需要基于 URL conf中的多个字段查找对象，则可以创建一个如下所示的 mixin类：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MultipleFieldLookupMixin</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Apply this mixin to any view or viewset to get multiple field filtering
    based on a \`lookup_fields\` attribute, instead of the default single field filtering.
    &quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">get_object</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        queryset <span class="token operator">=</span> self<span class="token punctuation">.</span>get_queryset<span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment"># 获取基本的queryset</span>
        queryset <span class="token operator">=</span> self<span class="token punctuation">.</span>filter_queryset<span class="token punctuation">(</span>queryset<span class="token punctuation">)</span>  <span class="token comment"># 应用任何过滤器后端</span>
        <span class="token builtin">filter</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">for</span> field <span class="token keyword">in</span> self<span class="token punctuation">.</span>lookup_fields<span class="token punctuation">:</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>kwargs<span class="token punctuation">[</span>field<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token comment"># Ignore empty fields.</span>
                <span class="token builtin">filter</span><span class="token punctuation">[</span>field<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>kwargs<span class="token punctuation">[</span>field<span class="token punctuation">]</span>
        <span class="token keyword">return</span> get_object_or_404<span class="token punctuation">(</span>queryset<span class="token punctuation">,</span> <span class="token operator">**</span><span class="token builtin">filter</span><span class="token punctuation">)</span>  <span class="token comment"># 查找对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，你可以在需要应用自定义行为时随时将此mixin类应用于视图或视图集。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">RetrieveUserView</span><span class="token punctuation">(</span>MultipleFieldLookupMixin<span class="token punctuation">,</span> generics<span class="token punctuation">.</span>RetrieveAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer
    lookup_fields <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;account&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要使用自定义行为，那么使用自定义mixin是一个不错的选择。</p><h2 id="创建自定义基类" tabindex="-1"><a class="header-anchor" href="#创建自定义基类" aria-hidden="true">#</a> 创建自定义基类</h2><p>如果你在多个视图中使用mixin，你可以进一步创建你自己的一组基本视图，然后可以在整个项目中使用。举个例子:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">BaseRetrieveView</span><span class="token punctuation">(</span>MultipleFieldLookupMixin<span class="token punctuation">,</span>
                       generics<span class="token punctuation">.</span>RetrieveAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">class</span> <span class="token class-name">BaseRetrieveUpdateDestroyView</span><span class="token punctuation">(</span>MultipleFieldLookupMixin<span class="token punctuation">,</span>
                                    generics<span class="token punctuation">.</span>RetrieveUpdateDestroyAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的自定义行为始终需要在整个项目中的大量视图中重复，则使用自定义基类是一个不错的选择。</p><hr><h1 id="put-as-create" tabindex="-1"><a class="header-anchor" href="#put-as-create" aria-hidden="true">#</a> PUT as create</h1><p>在3.0版本之前，REST framework mixins 将 <code>PUT</code> 视为更新或创建操作，具体取决于对象是否已存在。<br> 允许 <code>PUT</code> 作为创建操作是有问题的，因为它必然会暴露关于对象的存在与不存在的信息。同样不明显的是，透明地允许重新创建以前删除的实例是比简单地返回<code>404</code>响应更好的默认行为。<br> 两种形式 &quot;<code>PUT</code> as 404&quot; 和 &quot;<code>PUT</code> as create&quot; 可以在不同的情况下有效，但从3.0版本起，我们现在使用 404作为默认值，因为它更简单和更明显。<br> 如果你需要通用的 PUT-as-create行为，你可能想要包括像 这个<code>AllowPUTAsCreateMixin</code> 类 一样的mixin在你的视图里。</p><hr><h1 id="第三方包" tabindex="-1"><a class="header-anchor" href="#第三方包" aria-hidden="true">#</a> 第三方包</h1><p>以下第三方包提供了其他通用视图实现。</p><h2 id="django-rest-framework-bulk" tabindex="-1"><a class="header-anchor" href="#django-rest-framework-bulk" aria-hidden="true">#</a> Django REST Framework bulk</h2>`,20),Be={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/%5Bhttps://github.com/miki725/django-rest-framework-bulk%5D(https://github.com/miki725/django-rest-framework-bulk)",target:"_blank",rel:"noopener noreferrer"},Ke=n("h2",{id:"django-rest-multiple-models",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#django-rest-multiple-models","aria-hidden":"true"},"#"),e(" Django Rest Multiple Models")],-1),Oe={href:"https://q1mi.github.io/Django-REST-framework-documentation/api-guide/generic-views_zh/%5Bhttps://github.com/Axiologue/DjangoRestMultipleModels%5D(https://github.com/Axiologue/DjangoRestMultipleModels)",target:"_blank",rel:"noopener noreferrer"};function He(Ye,Je){const s=i("ExternalLinkIcon");return r(),p("div",null,[l,n("blockquote",null,[n("p",null,[e("Django的标准 views...是为更快捷地使用常见的使用模式而开发的... 它们采用在view开发中找到的某些常见语法和模式，并对它们进行抽象，以便你可以快速写出数据的常见视图，而无需重复自己。"),d,e(" — "),n("a",u,[e("Django 文档"),a(s)])])]),k,n("p",null,[e("用于 "),h,e(" 端点。"),m,e(" 提供一个 "),_,e(" 方法处理程序。"),g,e(" 扩展: "),n("a",v,[e("GenericAPIView"),a(s)]),e(", "),n("a",b,[e("CreateModelMixin"),a(s)])]),f,n("p",null,[e("用于** 只读 "),w,e("模型实例集合 **。"),y,e(" 提供一个 "),x,e(" 方法处理程序。"),q,e(" 扩展: "),n("a",M,[e("GenericAPIView"),a(s)]),e(", "),n("a",j,[e("ListModelMixin"),a(s)])]),R,n("p",null,[e("用于"),z,e(" 端点以表示"),A,e("。"),P,e(" 提供一个 "),D,e(" 方法处理程序。"),T,e(" 扩展: "),n("a",I,[e("GenericAPIView"),a(s)]),e(", "),n("a",S,[e("RetrieveModelMixin"),a(s)])]),U,n("p",null,[e("用于"),E,e("端点以表示"),V,e("。"),L,e(" 提供一个 "),C,e(" 方法处理程序。"),F,e(" 扩展: "),n("a",G,[e("GenericAPIView"),a(s)]),e(", "),n("a",N,[e("DestroyModelMixin"),a(s)])]),B,n("p",null,[e("用于"),K,e("端点以表示"),O,e("。"),H,e(" 提供一个 "),Y,e("和"),J,e("方法处理程序。"),Q,e(" 扩展: "),n("a",W,[e("GenericAPIView"),a(s)]),e(", "),n("a",X,[e("UpdateModelMixin"),a(s)])]),Z,n("p",null,[e("用于"),$,e("以表示"),ee,e("。"),ne,e(" 提供一个 "),se,e(" 和 "),ae,e(" 方法的处理程序。"),te,e(" 扩展: "),n("a",oe,[e("GenericAPIView"),a(s)]),e(", "),n("a",ie,[e("ListModelMixin"),a(s)]),e(", "),n("a",re,[e("CreateModelMixin"),a(s)])]),pe,n("p",null,[e("用于 "),ce,e(" 端点以表示 "),le,e("。"),de,e(" 提供 "),ue,e(", "),ke,e(" 和 "),he,e(" 方法的处理程序。"),me,e(" 扩展: "),n("a",_e,[e("GenericAPIView"),a(s)]),e(", "),n("a",ge,[e("RetrieveModelMixin"),a(s)]),e(", "),n("a",ve,[e("UpdateModelMixin"),a(s)])]),be,n("p",null,[e("用于 "),fe,e(" 端点以表示 "),we,e("。"),ye,e(" 提供 "),xe,e(" 和 "),qe,e(" 方法的处理程序。"),Me,e(" 扩展: "),n("a",je,[e("GenericAPIView"),a(s)]),e(", "),n("a",Re,[e("RetrieveModelMixin"),a(s)]),e(", "),n("a",ze,[e("DestroyModelMixin"),a(s)])]),Ae,n("p",null,[e("用于 "),Pe,e(" 端点以表示 "),De,e("。"),Te,e(" 提供 "),Ie,e(", "),Se,e(", "),Ue,e(" 和 "),Ee,e("方法的处理程序。"),Ve,e(" 扩展: "),n("a",Le,[e("GenericAPIView"),a(s)]),e(", "),n("a",Ce,[e("RetrieveModelMixin"),a(s)]),e(", "),n("a",Fe,[e("UpdateModelMixin"),a(s)]),e(", "),n("a",Ge,[e("DestroyModelMixin"),a(s)])]),Ne,n("p",null,[e("The "),n("a",Be,[e("django-rest-framework-bulk package"),a(s)]),e(" 包实现通用视图mixins以及一些常见的具体通用视图，以允许通过API请求应用批量操作。")]),Ke,n("p",null,[n("a",Oe,[e("Django Rest Multiple Models"),a(s)]),e(" 提供了通过单个API请求发送多个序列化模型和/或者查询集的通用视图（和mixin）。")])])}const Xe=o(c,[["render",He],["__file","04.Generic-views（通用视图）.html.vue"]]);export{Xe as default};
