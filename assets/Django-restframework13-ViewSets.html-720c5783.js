import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as s,b as n,d as i,f as c}from"./app-207e7d61.js";const l={},u=c(`<h1 id="drf13-viewsets" tabindex="-1"><a class="header-anchor" href="#drf13-viewsets" aria-hidden="true">#</a> DRF13-ViewSets</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1.简介</h2><p>路由系统是用于接收合适的请求，然后返回相应的响应<br> REST框架允许将一系列相关的业务逻辑函数写在一起，称为ViewSet.在其他框架中，相似的实现也被称为’Resources’或者’Controllers’.<br> 一个ViewSet类也是一个基础的View类，不提供任何请求处理函数，如get或post,只提供类似list和created这样的方法<br> 一个ViewSet类，通过.as_view() method绑定到相应的url上</p><ul><li>一般不需要在路由管理器中另外注册视图函数，只需要注册这个viewset类就够了，然后就会自动帮你处理，例如：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 定义一个简单的list和retrieve视图</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>models <span class="token keyword">import</span> User
<span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> get_object_or_404
<span class="token keyword">from</span> myapps<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> UserSerializer
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> viewsets
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response

<span class="token keyword">class</span> <span class="token class-name">UserViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    A simple ViewSet for listing or retrieving users.
    &quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">list</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>queryset<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">retrieve</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        user <span class="token operator">=</span> get_object_or_404<span class="token punctuation">(</span>queryset<span class="token punctuation">,</span> pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>user<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们需要可以提取出来成为两个单独的部分，需要传入参数，方法名：函数名</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>user_list <span class="token operator">=</span> UserViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
user_detail <span class="token operator">=</span> UserViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;retrieve&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一般我们使用Router类自动帮我们处理路由</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> myapp<span class="token punctuation">.</span>views <span class="token keyword">import</span> UserViewSet
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>routers <span class="token keyword">import</span> DefaultRouter

router <span class="token operator">=</span> DefaultRouter<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 默认使用model小写复数， base_name为小写单数</span>
router<span class="token punctuation">.</span>register<span class="token punctuation">(</span><span class="token string">r&#39;users&#39;</span><span class="token punctuation">,</span> UserViewSet<span class="token punctuation">,</span> base_name<span class="token operator">=</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>
urlpatterns <span class="token operator">=</span> router<span class="token punctuation">.</span>urls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ViewSet和View视图类的区别 <ul><li>重复的逻辑函数应该被写进一个单独的类中，我们仅需要指定queryset一次，然后就可以被多个函数使用</li><li>利用路由管理器，我们就不再需要亲自写url了</li><li>所以使用URL confs更明确，有更多的控制， ViewSets编写速度更快，需要使url一致时，应该被使用。</li></ul></li></ul><h2 id="_2-为路由添加额外的功能" tabindex="-1"><a class="header-anchor" href="#_2-为路由添加额外的功能" aria-hidden="true">#</a> 2. 为路由添加额外的功能</h2><p>REST框架默认提供了create/retrieve/update/destroy等操作</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">UserViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    一个空的演示实例，将会被路由类处理

    如果使用过了后缀，确保每一个函数后面有一个\`format=None\`参数
    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">list</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">create</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">retrieve</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">update</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">partial_update</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">destroy</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果临时有一个方法需要被路由处理，可以使用@detail_route或 @list_route装饰器<br> @detail_route包含一个pk，此方法为操作单个实例的方法<br> @list_route，是操作一系列对象的方法，如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>models <span class="token keyword">import</span> User
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> status
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> viewsets
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>decorators <span class="token keyword">import</span> detail_route<span class="token punctuation">,</span> list_route
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">from</span> myapp<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> UserSerializer<span class="token punctuation">,</span> PasswordSerializer

<span class="token keyword">class</span> <span class="token class-name">UserViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    A viewset that provides the standard actions
    &quot;&quot;&quot;</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer

    <span class="token decorator annotation punctuation">@detail_route</span><span class="token punctuation">(</span>methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">set_password</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        user <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> PasswordSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">if</span> serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            user<span class="token punctuation">.</span>set_password<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token string">&#39;password&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            user<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;status&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;password set&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>errors<span class="token punctuation">,</span>
                            status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_400_BAD_REQUEST<span class="token punctuation">)</span>

    <span class="token comment"># 最近登录的用户</span>
    <span class="token decorator annotation punctuation">@list_route</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">recent_users</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        recent_users <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>order<span class="token punctuation">(</span><span class="token string">&#39;-last_login&#39;</span><span class="token punctuation">)</span>

        page <span class="token operator">=</span> self<span class="token punctuation">.</span>paginate_queryset<span class="token punctuation">(</span>recent_users<span class="token punctuation">)</span>
        <span class="token comment"># page为分页好的一些列对象</span>
        <span class="token keyword">if</span> page <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            serializer <span class="token operator">=</span> self<span class="token punctuation">.</span>get_serializer<span class="token punctuation">(</span>page<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>get_paginated_response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

        serializer <span class="token operator">=</span> self<span class="token punctuation">.</span>get_serializer<span class="token punctuation">(</span>recent_users<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此装饰器也能为路由视图添加额外的视图。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@detail_route</span><span class="token punctuation">(</span>methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> permission_classes<span class="token operator">=</span><span class="token punctuation">[</span>IsAdminOrIsSelf<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">set_password</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>装饰器默认处理get请求，但也通过methods参数接受其他请求方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 删除密码</span>
<span class="token decorator annotation punctuation">@detail_route</span><span class="token punctuation">(</span>methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">unset_password</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个新的函数的路由地址为：<br> ^users/{pk}/set_password/和users/pk/unsetpassword/</p><h2 id="_3-api参考" tabindex="-1"><a class="header-anchor" href="#_3-api参考" aria-hidden="true">#</a> 3. API参考</h2><ul><li>ViewSet</li></ul><p>继承自APIView，利用permission_classes, authentication_classes等来控制API策略<br> 一般都需要重写此类中的方法</p><ul><li>GenericViewSet</li></ul><p>GenericViewSet继承自GenericAPIView，提供了一系列如get_object, get_queryset方法，如果使用此类，需要重写此类或者与mixin类进行组合</p><ul><li>ModelViewSet</li></ul><p>也是继承自GenericAPIView，通过mixin类，实现了一些具体的操作，.list(), .retrieve(), .create(), .update(), .partial_update(), 和 .destroy()。<br> 例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">AccountViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    A simple ViewSet for viewing and editing accounts.
    &quot;&quot;&quot;</span>
    queryset <span class="token operator">=</span> Account<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> AccountSerializer
    permission_classes <span class="token operator">=</span> <span class="token punctuation">[</span>IsAccountAdminOrReadOnly<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以对GenericAPIView提供的各种方法和属性进行重写。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">AccountViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    A simple ViewSet for viewing and editing the accounts
    associated with the user.
    &quot;&quot;&quot;</span>
    serializer_class <span class="token operator">=</span> AccountSerializer
    permission_classes <span class="token operator">=</span> <span class="token punctuation">[</span>IsAccountAdminOrReadOnly<span class="token punctuation">]</span>

    <span class="token comment"># 动态的获取查询集，视图类中必须提供get_queryset方法或者queryset属性</span>
    <span class="token keyword">def</span> <span class="token function">get_queryset</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：当我们删除ViewSet的queryset属性时， 任何与此相关的路由都自动无法获得数据库模型的base_name，所以在路由注册时，我们必须设置base_name参数。<br> 虽然类视图默认提供了各种create/list/retrieve/update/destroy操作，你也可以通过permission_classes管理用户操作权限</p><ul><li>ReadOnlyModelViewSet<br> 也是继承自GenericAPIView，仅提供只读操作，.list()和.retrieve().如：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">AccountViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ReadOnlyModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> Account<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> AccountSerializer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-自定义个性化视图实例" tabindex="-1"><a class="header-anchor" href="#_4-自定义个性化视图实例" aria-hidden="true">#</a> 4. 自定义个性化视图实例</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> mixins

<span class="token keyword">class</span> <span class="token class-name">CreateListRetrieveViewSet</span><span class="token punctuation">(</span>mixins<span class="token punctuation">.</span>CreateModelMixin<span class="token punctuation">,</span>
                                mixins<span class="token punctuation">.</span>ListModelMixin<span class="token punctuation">,</span>
                                mixins<span class="token punctuation">.</span>RetrieveModelMixin<span class="token punctuation">,</span>
                                viewsets<span class="token punctuation">.</span>GenericViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    A viewset that provides \`retrieve\`, \`create\`, and \`list\` actions.

    To use it, override the class and set the \`.queryset\` and
    \`.serializer_class\` attributes.
    &quot;&quot;&quot;</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),r=s("br",null,null,-1),d=s("br",null,null,-1),k={href:"https://blog.csdn.net/runnoob_1115/article/details/78486891",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,s("p",null,[n("————————————————"),r,n(" 版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。"),d,n(" 原文链接："),s("a",k,[n("https://blog.csdn.net/runnoob_1115/article/details/78486891"),i(a)])])])}const g=e(l,[["render",v],["__file","Django-restframework13-ViewSets.html.vue"]]);export{g as default};
