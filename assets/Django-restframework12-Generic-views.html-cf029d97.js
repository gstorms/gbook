import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as i,a as s,b as n,d as o,f as l}from"./app-3f278ba4.js";const c={},r=l(`<h1 id="drf12-generic-views" tabindex="-1"><a class="header-anchor" href="#drf12-generic-views" aria-hidden="true">#</a> DRF12-Generic-views</h1><h2 id="_1-引语" tabindex="-1"><a class="header-anchor" href="#_1-引语" aria-hidden="true">#</a> 1.引语</h2><p>Django的通用视图已经发展成一种常见的使用模式的快捷方式，他们采取在视图开发中发现一些常见习语和模式，并将其抽象出来，以便于可以快速编写数据的常见视图，而不需要重复编写。</p><h2 id="_2-简介" tabindex="-1"><a class="header-anchor" href="#_2-简介" aria-hidden="true">#</a> 2.简介</h2><p>基于类的视图允许自由设计组合可重用的模式，REST框架通过提供许多常用模式的预构建视图来利用这一点，如RETIRVEUPDATEAPIVIEW等<br> REST提供的通用视图可以快速构建与数据库模型紧密对应的API视图<br> 如果通用视图不满足需求，可以使用常规APIView,然后自由组合各种Mixin类，来构建自己的使用模式</p><h2 id="_3-使用示例" tabindex="-1"><a class="header-anchor" href="#_3-使用示例" aria-hidden="true">#</a> 3.使用示例</h2><p>如果使用通用视图类，意味着你需要重写视图函数和几个类属性。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>models <span class="token keyword">import</span> User
<span class="token keyword">from</span> myapp<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> UserSerializer
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> generics
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>permissions <span class="token keyword">import</span> IsAdminUser

<span class="token keyword">class</span> <span class="token class-name">UserList</span><span class="token punctuation">(</span>generics<span class="token punctuation">.</span>ListCreateAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer
    permission_classes <span class="token operator">=</span> <span class="token punctuation">(</span>IsAdminUser<span class="token punctuation">,</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于更加复杂的例子，你可能想在你的视图类中重写不同的方法，例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">UserList</span><span class="token punctuation">(</span>generics<span class="token punctuation">.</span>ListCreateAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer
    permission_classes <span class="token operator">=</span> <span class="token punctuation">(</span>IsAdminUser<span class="token punctuation">,</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">list</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Note the use of \`get_queryset()\` instead of \`self.queryset\`</span>
        queryset <span class="token operator">=</span> self<span class="token punctuation">.</span>get_queryset<span class="token punctuation">(</span><span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>queryset<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于非常相似的情形，你可以利用.as_view()函数，只需要传入相应的参数就行</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url<span class="token punctuation">(</span><span class="token string">r&#39;^/users/&#39;</span><span class="token punctuation">,</span> ListCreateAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span>queryset<span class="token operator">=</span>User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> serializer_class<span class="token operator">=</span>UserSerializer<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;user-list&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-genericapiview" tabindex="-1"><a class="header-anchor" href="#_4-genericapiview" aria-hidden="true">#</a> 4.GenericAPIView</h2><p>继承了REST框架的APIView,为标准list添加了一些行为和具体的视图<br> 其他的通用视图，都是由GenericAPIView结合一个或多个Mixin类扩展而成</p><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><h4 id="基本设置" tabindex="-1"><a class="header-anchor" href="#基本设置" aria-hidden="true">#</a> 基本设置：</h4><ul><li>queyset</li></ul><p>查询集，用于返回查询对象，一般你必须设置这个属性，或者重写get_queryset()方法。如果你重写了视图方法，就需要使用get_queryset()方法代替直接使用这个属性。因为        queryset只会评估一次，然后就存入缓存cache中，以供后来的请求使用。</p><ul><li>serializer_class</li></ul><p>serializer_class被用来验证和反序列化输入，序列化输出。一般来说，你要么设置这个属性，要么重写get_serializer_class()方法</p><ul><li>lookup_field</li></ul><p>用于查找单个模型实例的模型字段，默认为’pk’<br> 注意：当时用超链接API时，如果需要使用自定义字段，必须在API views和序列化类中都设置lookup_field值。</p><ul><li>lookup_url_kwarg</li></ul><p>也是用于查找某个对象，但是url配置时，必须设置相应的值，如果没有设置默认值，那么默认使用lookup_field的值。</p><h3 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h3><ul><li>pagination_class</li></ul><p>当需要分页显示获取的 list结果时使用。默认值与DEFAULT_PAGINATION_CLASS（’rest_framework.pagination.PageNumberPagination’）相同，设置pagination_class=None        将会禁用分页功能。</p><h3 id="过滤" tabindex="-1"><a class="header-anchor" href="#过滤" aria-hidden="true">#</a> 过滤</h3><ul><li>filter_backends</li></ul><p>用于过滤查询集，默认值与DEFAULT_FILTER_BACKENDS设置值相同方法</p><h3 id="基本方法" tabindex="-1"><a class="header-anchor" href="#基本方法" aria-hidden="true">#</a> 基本方法</h3><ul><li>get_queryset(self)</li></ul><p>返回查询集结果，是获取详细查询的基础。默认返回queryset属性指定的查询集结果<br> 通常不是用于获取queryset，而是重写之后用于获取动态的查询集,如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_queryset</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    user <span class="token operator">=</span> self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user
    <span class="token keyword">return</span> user<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>get_object(self)<br> 用于detail查询函数中，默认值是利用lookup_field参数过滤基础的queryset查询集<br> 可以重写用于更加复杂的查询，例如在url链接中有多个查询参数的时候，如：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_object</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> self<span class="token punctuation">.</span>get_queryset<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">filter</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> field <span class="token keyword">in</span> self<span class="token punctuation">.</span>multiple_lookup_fields<span class="token punctuation">:</span>
        <span class="token builtin">filter</span><span class="token punctuation">[</span>field<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>kwargs<span class="token punctuation">[</span>field<span class="token punctuation">]</span>

    obj <span class="token operator">=</span> get_object_or_404<span class="token punctuation">(</span>queryset<span class="token punctuation">,</span> <span class="token operator">**</span><span class="token builtin">filter</span><span class="token punctuation">)</span>
    <span class="token comment"># 用于检查权限</span>
    self<span class="token punctuation">.</span>check_object_permissions<span class="token punctuation">(</span>self<span class="token punctuation">.</span>request<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
    <span class="token keyword">return</span> obj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的接口没有设置权限等级，self.check_object_permissions(self.request, obj)这一句就可以删除掉。</p><ul><li>filter_queryset(self, queryset)<br> 通过提供一个查询集，然后根据设置的filter_backends进行过滤，然后返回一个新的查询集，如：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">filter_queryset</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> queryset<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 默认的过滤类，如何写过滤类？？？</span>
    filter_backends <span class="token operator">=</span> <span class="token punctuation">(</span>CategoryFilter<span class="token punctuation">,</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token string">&#39;geo_route&#39;</span> <span class="token keyword">in</span> self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>query_params<span class="token punctuation">:</span>
        <span class="token comment"># 新添加的过滤类</span>
        filter_backends <span class="token operator">=</span> <span class="token punctuation">(</span>GeoRouteFilter<span class="token punctuation">,</span> CategoryFilter<span class="token punctuation">)</span>
    <span class="token keyword">elif</span> <span class="token string">&#39;geo_point&#39;</span> <span class="token keyword">in</span> self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>query_params<span class="token punctuation">:</span>
        filter_backends <span class="token operator">=</span> <span class="token punctuation">(</span>GeoPointFilter<span class="token punctuation">,</span> CategoryFilter<span class="token punctuation">)</span>

    <span class="token keyword">for</span> backend <span class="token keyword">in</span> <span class="token builtin">list</span><span class="token punctuation">(</span>filter_backends<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># backend()，  view=self？？？</span>
        queryset <span class="token operator">=</span> backend<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>filter_queryset<span class="token punctuation">(</span>self<span class="token punctuation">.</span>request<span class="token punctuation">,</span> queryset<span class="token punctuation">,</span> view<span class="token operator">=</span>self<span class="token punctuation">)</span>
    <span class="token keyword">return</span> queryset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>get_serializer_class(self)<br> 返回串行化器（将串行数据变为并行数据），默认返回serializer_class属性，也可以重写成动态的，例如利用不同的串行化器去进行读写操作，或者提供不同的串行化器给不同类型的用户。如：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_serializer_class</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">.</span>is_staff<span class="token punctuation">:</span>
        <span class="token comment"># 需要自行编写不同的串行化器</span>
        <span class="token keyword">return</span> FullAccountSerializer
    <span class="token keyword">return</span> BasicAccountSerializer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="保存和删除钩子" tabindex="-1"><a class="header-anchor" href="#保存和删除钩子" aria-hidden="true">#</a> 保存和删除钩子</h4><p>由mixin类提供，易于重写对象的保存删除操作</p><ul><li>perform_create(self, serializer)：CreateModelMixin，保存一个新的对象实例</li><li>perform_update(self, serializer)：UpdateModelMixin，保存一个存在的对象实例</li><li>perform_destroy(self, instance)：DestroyModelMixin，删除一个存在的实例</li></ul><p>这些钩子在为request设置隐性属性时 特别有用。例如，你可以为一个对象设置属性，基于请求的用户，或者基于url关键字参数数据。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">perform_create</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span>user<span class="token operator">=</span>self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以在保存一个对象之前或者之后添加一些行为，例如在创建用户之后，发送一封邮件，或者更新一个对象之后，用日志记录更新信息</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">perform_update</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    instance <span class="token operator">=</span> serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
    send_email_confirmation<span class="token punctuation">(</span>user<span class="token operator">=</span>self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">,</span> modified<span class="token operator">=</span>instance<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要利用钩子提供用户验证，如果没有通过就抛出ValidationError()。比如在数据库进行保存操作时：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">perform_create</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 用于验证用户是否已经登录</span>
    queryset <span class="token operator">=</span> SignupRequest<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>user<span class="token operator">=</span>self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">)</span>
    <span class="token keyword">if</span> queryset<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> ValidationError<span class="token punctuation">(</span><span class="token string">&#39;You have already signed up&#39;</span><span class="token punctuation">)</span>
    serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span>user<span class="token operator">=</span>self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些方法代替了2.x版本中pre_save, post_save, pre_delete 和 post_delete方法，它们不在能被使用。</p><h4 id="其他方法" tabindex="-1"><a class="header-anchor" href="#其他方法" aria-hidden="true">#</a> 其他方法</h4><p>尽管你在编写定制化视图时需要调用它们，但是一般来说以下的方法不用重写</p><ul><li>get_serializer_context(self) ： 包含一些需要额外提供给序列化器的上下文字典，默认包含’request’, ‘view’ 和 ‘format’；</li><li>get_serializer(self, instance=None, data=None, many=False, partial=False)：返回一个序列化实例；</li><li>get_paginated_response(self, data)：返回一个分好页的响应对象；</li><li>paginate_queryset(self, queryset)： 分页查询集，如果要求，则返回已分页的查询集对象，否则返回None；</li><li>filter_queryset(self, queryset)：如果设置了过滤类，那就返回过滤后的queryset对象，否则返回queryset。</li></ul><h2 id="_5-mixins" tabindex="-1"><a class="header-anchor" href="#_5-mixins" aria-hidden="true">#</a> 5. Mixins</h2><p>mixin类只是提供一些基础的视图操作，并没有定义处理函数，如.get() and .post()等，这样有便于灵活的组装这些操作</p><h3 id="listmodelmixin" tabindex="-1"><a class="header-anchor" href="#listmodelmixin" aria-hidden="true">#</a> ListModelMixin</h3><p>提供.list(request, *args, **kwargs)方法，如果获取到查询结果，就序列化为响应主体，选择性分页后，返回给用户一个200的响应对象</p><h3 id="createmodelmixin" tabindex="-1"><a class="header-anchor" href="#createmodelmixin" aria-hidden="true">#</a> CreateModelMixin</h3><p>提供.create(request, *args, **kwargs)，用于创建，保存一个实例，如果对象创建成功就返回一个201 Created的对象，序列化之后作为响应主体，如果显示字段包含url，那么就用该值填充Location的header，如果数据不合法，就返回400 Bad Request响应对象，响应对象主体为错误的详细信息</p><h3 id="retrievemodelmixin" tabindex="-1"><a class="header-anchor" href="#retrievemodelmixin" aria-hidden="true">#</a> RetrieveModelMixin</h3><p>提供.retrieve(request, *args, **kwargs) 方法，实现返回一个数据库中已经存在的模型实例，返回200 OK response， 或者404 Not Found</p><h3 id="updatemodelmixin" tabindex="-1"><a class="header-anchor" href="#updatemodelmixin" aria-hidden="true">#</a> UpdateModelMixin</h3><p>提供.update(request, *args, **kwargs)方法，实现了更新并保存一个已经存在的实例（必须提供全部字段值）<br> .partial_update(request, *args, **kwargs) 部分更新，允许PATCH方法<br> 返回200 OK response或者400 Bad Request response</p><h3 id="destroymodelmixin" tabindex="-1"><a class="header-anchor" href="#destroymodelmixin" aria-hidden="true">#</a> DestroyModelMixin</h3><p>提供了一个.destroy(request, *args, **kwargs)用于删除已经存在的模型实例<br> 返回204 No Content response或者404 Not Found</p><h2 id="_6-复合视图类" tabindex="-1"><a class="header-anchor" href="#_6-复合视图类" aria-hidden="true">#</a> 6.复合视图类</h2><ul><li>CreateAPIView： post+create</li><li>ListAPIView: get + list</li><li>RetrieveAPIView: get + retrieve</li><li>DestroyAPIView: delete + destory</li><li>UpdateAPIView: upadate + put + patch</li><li>ListCreateAPIView: list + create + get + put + patch</li><li>RetrieveDestroyAPIView: retrieve + destory + get + delete</li><li>RetrieveUpdateDestroyAPIView: retreve + destroy + update + get + put + patch + delete</li></ul><h2 id="_7-自定义通用视图" tabindex="-1"><a class="header-anchor" href="#_7-自定义通用视图" aria-hidden="true">#</a> 7.自定义通用视图</h2><p>当你在通用视图基础上添加一些自定义的行为时，如果发现在许多地方都要使用此行为，你可以将其抽象成一个mixin类，哪里需要就添加到哪里！<br> 比如说你利用从url中获取的多个参数来查询对象，你可以创建一个mixin类</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 创建一个mixin类</span>
<span class="token keyword">class</span> <span class="token class-name">MultipleFieldLookupMixin</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Apply this mixin to any view or viewset to get multiple field filtering
    based on a \`lookup_fields\` attribute, instead of the default single field filtering.
    &quot;&quot;&quot;</span>
    <span class="token comment"># 重写get_object方法</span>
    <span class="token keyword">def</span> <span class="token function">get_object</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        queryset <span class="token operator">=</span> self<span class="token punctuation">.</span>get_queryset<span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment"># Get the base queryset</span>
        queryset <span class="token operator">=</span> self<span class="token punctuation">.</span>filter_queryset<span class="token punctuation">(</span>queryset<span class="token punctuation">)</span>  <span class="token comment"># Apply any filter backends</span>
        <span class="token builtin">filter</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">for</span> field <span class="token keyword">in</span> self<span class="token punctuation">.</span>lookup_fields<span class="token punctuation">:</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>kwargs<span class="token punctuation">[</span>field<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token comment"># Ignore empty fields.</span>
                <span class="token builtin">filter</span><span class="token punctuation">[</span>field<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>kwargs<span class="token punctuation">[</span>field<span class="token punctuation">]</span>
        <span class="token keyword">return</span> get_object_or_404<span class="token punctuation">(</span>queryset<span class="token punctuation">,</span> <span class="token operator">**</span><span class="token builtin">filter</span><span class="token punctuation">)</span>  <span class="token comment"># Lookup the object</span>

<span class="token comment"># 使用mixin类</span>
<span class="token keyword">class</span> <span class="token class-name">RetrieveUserView</span><span class="token punctuation">(</span>MultipleFieldLookupMixin<span class="token punctuation">,</span> generics<span class="token punctuation">.</span>RetrieveAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer
    lookup_fields <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;account&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要大量应用自定义的mixin类时，你可以创建一个基础的APIView:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">BaseRetrieveView</span><span class="token punctuation">(</span>MultipleFieldLookupMixin<span class="token punctuation">,</span>
                       generics<span class="token punctuation">.</span>RetrieveAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">BaseRetrieveUpdateDestroyView</span><span class="token punctuation">(</span>MultipleFieldLookupMixin<span class="token punctuation">,</span>
                                    generics<span class="token punctuation">.</span>RetrieveUpdateDestroyAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-使用put方法创造put-as-create-or-put-as-404" tabindex="-1"><a class="header-anchor" href="#_8-使用put方法创造put-as-create-or-put-as-404" aria-hidden="true">#</a> 8.使用PUT方法创造PUT as create or PUT as 404</h2><p>在3.0之前，REST框架利用PUT方法根据对象是否存在进行created或者update。<br> 利用PUT方法进行创建操作是有问题的，因为PUT肯定会暴露已存在和正在进行创建的对象信息<br> 但是另一方面，允许创建已经删除的对象比默认的只是简单的返回一个404 Response更好。<br> PUT as create or PUT as 404这两种形式都是合法的，但是从3.X版本以后使用PUT as 404作为默认值，因为其更加简单而且明显。<br> 如果想使用PUT as create,你可以在创建视图类时，使用AllowPUTAsCreateMixin类。</p><h2 id="_9-第三方包" tabindex="-1"><a class="header-anchor" href="#_9-第三方包" aria-hidden="true">#</a> 9.第三方包</h2><ul><li>Django REST Framework bulk</li></ul><p>实现了一些mixin类，和一些扩展的复合视图类</p><ul><li>Django Rest Multiple Models</li></ul><p>允许在一个API视图中返回多个序列化模型</p>`,80),u=s("br",null,null,-1),d=s("br",null,null,-1),k={href:"https://blog.csdn.net/runnoob_1115/article/details/78486871",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=t("ExternalLinkIcon");return p(),i("div",null,[r,s("p",null,[n("————————————————"),u,n(" 版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。"),d,n(" 原文链接："),s("a",k,[n("https://blog.csdn.net/runnoob_1115/article/details/78486871"),o(a)])])])}const y=e(c,[["render",v],["__file","Django-restframework12-Generic-views.html.vue"]]);export{y as default};
