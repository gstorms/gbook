import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as s,b as n,d as e,f as c}from"./app-207e7d61.js";const l={},u={id:"_1-基于类的视图函数-views-py",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#_1-基于类的视图函数-views-py","aria-hidden":"true"},"#",-1),k={href:"http://views.py",target:"_blank",rel:"noopener noreferrer"},d=c(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> snippets<span class="token punctuation">.</span>models <span class="token keyword">import</span> Snippet
<span class="token keyword">from</span> snippets<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> SnippetSerializer
<span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> Http404
<span class="token comment"># APIView </span>
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>views <span class="token keyword">import</span> APIView
<span class="token comment"># 返回对象</span>
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token comment"># 状态码</span>
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> status

<span class="token comment"># 多个对象</span>
<span class="token keyword">class</span> <span class="token class-name">SnippetList</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        snippets <span class="token operator">=</span> Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> SnippetSerializer<span class="token punctuation">(</span>snippets<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        serializer <span class="token operator">=</span> SnippetSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">if</span> serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_201_CREATED<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>errors<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_400_BAD_REQUEST<span class="token punctuation">)</span>


<span class="token comment"># 单个对象的部分修改（APIView提供了一些request和response对象）</span>
<span class="token keyword">class</span> <span class="token class-name">SnippetDetail</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    检索，更新或删除一个实例
    &quot;&quot;&quot;</span>
    <span class="token comment"># 首先获取对象， 发生异常就抛出404页面</span>
    <span class="token keyword">def</span> <span class="token function">get_object</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>
        <span class="token keyword">except</span> Snippet<span class="token punctuation">.</span>DoesNotExist<span class="token punctuation">:</span>
            <span class="token keyword">raise</span> Http404

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        snippet <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span>pk<span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> SnippetSerializer<span class="token punctuation">(</span>snippet<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">put</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        snippet <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span>pk<span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> SnippetSerializer<span class="token punctuation">(</span>snippet<span class="token punctuation">,</span> data<span class="token operator">=</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">if</span> serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>errors<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_400_BAD_REQUEST<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        snippet <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span>pk<span class="token punctuation">)</span>
        snippet<span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_204_NO_CONTENT<span class="token punctuation">)</span>

<span class="token comment"># 重构urls.py</span>
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^snippets/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>SnippetList<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^snippets/(?P&lt;pk&gt;[0-9]+)/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>SnippetDetail<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token comment"># 后缀</span>
urlpatterns <span class="token operator">=</span> format_suffix_patterns<span class="token punctuation">(</span>urlpatterns<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-基于mixin类重构视图类" tabindex="-1"><a class="header-anchor" href="#_2-基于mixin类重构视图类" aria-hidden="true">#</a> 2. 基于Mixin类重构视图类</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> snippets<span class="token punctuation">.</span>models <span class="token keyword">import</span> Snippet
<span class="token keyword">from</span> snippets<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> SnippetSerializer
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> mixins
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> generics

<span class="token keyword">class</span> <span class="token class-name">SnippetList</span><span class="token punctuation">(</span>mixins<span class="token punctuation">.</span>ListModelMixin<span class="token punctuation">,</span>
                  mixins<span class="token punctuation">.</span>CreateModelMixin<span class="token punctuation">,</span>
                  generics<span class="token punctuation">.</span>GenericAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 雷打不动，必须的</span>
    queryset <span class="token operator">=</span> Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> SnippetSerializer

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">list</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>create<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CreateModelMixin: 定义了创建一个序列对象的方法create(self, request, *args, **kwargs)，保存方法perform_create(self, serializer)，成功获取请求头的方法：get_success_headers(self, data)</li><li>ListModelMixin： 定义了一个获取查询集的方法, many=True：list(self, request, *args, **kwargs)</li><li>RetrieveModelMixin: 定义了一个检索方法，retrieve(self, request, *args, **kwargs)</li><li>UpdateModelMixin： 更新一个模型实例，update(self, request, *args, **kwargs)</li><li>DestroyModelMixin： 删除一个模型实例，方法destroy(self, request, *args, **kwargs)</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> snippets<span class="token punctuation">.</span>models <span class="token keyword">import</span> Snippet
<span class="token keyword">from</span> snippets<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> SnippetSerializer
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> mixins
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> generics
<span class="token comment"># 重构单个实例处理方法</span>
<span class="token keyword">class</span> <span class="token class-name">SnippetList</span><span class="token punctuation">(</span>mixins<span class="token punctuation">.</span>ListModelMixin<span class="token punctuation">,</span>
                  mixins<span class="token punctuation">.</span>CreateModelMixin<span class="token punctuation">,</span>
                  generics<span class="token punctuation">.</span>GenericAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> SnippetSerializer

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">list</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>create<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-复合功能的view类" tabindex="-1"><a class="header-anchor" href="#_3-复合功能的view类" aria-hidden="true">#</a> 3.复合功能的View类</h2><ol><li>GenericAPIView：基本的View类，定义了一些常用的方法 <ol><li>get_queryset： 获取所有查询集，返回序列器中指定queryset模型的全部对象</li><li>get_object： 根据传入的查询参数（lookup_url_kwarg or lookup_field)获取查询对象，然后返回， 一般进行联合查询时， 需要重写此方法</li><li>get_serializer: 获取序列化实例，传入的参数需要通过验证</li><li>get_serializer_context： 返回序列化的类，api视图中看到的那一大串</li><li>paginate_queryset： 进行分页，返回分页后的单页结果集</li><li>get_paginated_response：返回分也好的结果集到前台</li></ol></li><li>CreateAPIView</li><li>ListAPIView</li><li>RetrieveAPIView</li><li>DestroyAPIView</li><li>UpdateAPIView</li><li>ListCreateAPIView</li><li>RetrieveUpdateAPIView</li><li>RetrieveDestroyAPIView</li><li>RetrieveUpdateDestroyAPIView</li></ol>`,7),v=s("br",null,null,-1),m=s("br",null,null,-1),b={href:"https://blog.csdn.net/runnoob_1115/article/details/78479127",target:"_blank",rel:"noopener noreferrer"};function w(f,_){const a=p("ExternalLinkIcon");return o(),i("div",null,[s("h2",u,[r,n(" 1. 基于类的视图函数（"),s("a",k,[n("views.py"),e(a)]),n(")")]),d,s("p",null,[n("————————————————"),v,n(" 版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。"),m,n(" 原文链接："),s("a",b,[n("https://blog.csdn.net/runnoob_1115/article/details/78479127"),e(a)])])])}const h=t(l,[["render",w],["__file","Django-restframework04-基于类视图的视图函数.html.vue"]]);export{h as default};
