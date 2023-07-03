import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,a as n,b as s,d as e,f as t}from"./app-3f278ba4.js";const c={},r=t(`<h1 id="drf05-用户认证和权限管理" tabindex="-1"><a class="header-anchor" href="#drf05-用户认证和权限管理" aria-hidden="true">#</a> DRF05-用户认证和权限管理</h1><h2 id="_1-目的" tabindex="-1"><a class="header-anchor" href="#_1-目的" aria-hidden="true">#</a> 1. 目的</h2><ul><li>实例对象始终与创建者相关联</li><li>只有通过身份验证的用户可以创建实例</li><li>只有对象的创建者能够更新和删除该对象</li><li>未认证用户应该只有只读权限</li></ul><h2 id="_2-数据库中字段的on-update-和-on-delete参数" tabindex="-1"><a class="header-anchor" href="#_2-数据库中字段的on-update-和-on-delete参数" aria-hidden="true">#</a> 2. 数据库中字段的on update 和 on delete参数</h2><ul><li>数据库外键定义的可选项，用来设置当主键表中的被参考列的数据发生变化时，外键表中响应字段的变化规则。update则是主键表中被参考字段的值更新，delete是指在主键表中删除一条记录</li><li>on_update 和 on_delete的值有四个：DO_NOTHING ， SET_NULL ， SET_DEFAULT ，CASCADE，PROTECT</li><li>no action 表示不做任何操作</li><li>set null 表示在外件表中将相应字段设置为null</li><li>set default 表示设置默认值</li><li>cascade 表示级联操作，如果主键表中被参考字段更新，外键表中也更新，主键表中的记录被删除，外键表中该行也相应删除</li></ul><h2 id="_3-删除原数据库和迁移记录" tabindex="-1"><a class="header-anchor" href="#_3-删除原数据库和迁移记录" aria-hidden="true">#</a> 3. 删除原数据库和迁移记录</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rm <span class="token operator">-</span>f tmp<span class="token punctuation">.</span>db db<span class="token punctuation">.</span>sqlite3
rm <span class="token operator">-</span>r snippets<span class="token operator">/</span>migrations

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-添加用户控制入口" tabindex="-1"><a class="header-anchor" href="#_4-添加用户控制入口" aria-hidden="true">#</a> 4.添加用户控制入口</h2><ul><li>首先在模型文件中设置关联外键</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>owner <span class="token operator">=</span> models<span class="token punctuation">.</span>ForeignKey<span class="token punctuation">(</span><span class="token string">&#39;auth.User&#39;</span><span class="token punctuation">,</span> related_name<span class="token operator">=</span><span class="token string">&#39;snippets&#39;</span><span class="token punctuation">,</span> on_delete<span class="token operator">=</span>models<span class="token punctuation">.</span>CASCADE<span class="token punctuation">)</span>
    highlighted <span class="token operator">=</span> models<span class="token punctuation">.</span>TextField<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置文本高亮，重写保存方法</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">def</span> <span class="token function">save</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        利用pygments，创建高亮的html文本呈现code块
        &quot;&quot;&quot;</span>
        lexer <span class="token operator">=</span> get_lexer_by_name<span class="token punctuation">(</span>self<span class="token punctuation">.</span>language<span class="token punctuation">)</span>
        linenos <span class="token operator">=</span> self<span class="token punctuation">.</span>linenos <span class="token keyword">and</span> <span class="token string">&#39;table&#39;</span> <span class="token keyword">or</span> <span class="token boolean">False</span>
        options <span class="token operator">=</span> self<span class="token punctuation">.</span>title <span class="token keyword">and</span> <span class="token punctuation">{</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>title<span class="token punctuation">}</span> <span class="token keyword">or</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        formatter <span class="token operator">=</span> HtmlFormatter<span class="token punctuation">(</span>style<span class="token operator">=</span>self<span class="token punctuation">.</span>style<span class="token punctuation">,</span> linenos<span class="token operator">=</span>linenos<span class="token punctuation">,</span>
                                  full<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token operator">**</span>options<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>highlighted <span class="token operator">=</span> highlight<span class="token punctuation">(</span>self<span class="token punctuation">.</span>code<span class="token punctuation">,</span> lexer<span class="token punctuation">,</span> formatter<span class="token punctuation">)</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>Snippet<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-设置断点" tabindex="-1"><a class="header-anchor" href="#_5-设置断点" aria-hidden="true">#</a> 5. 设置断点</h2><h3 id="_1-在serializers-py中添加userserializer" tabindex="-1"><a class="header-anchor" href="#_1-在serializers-py中添加userserializer" aria-hidden="true">#</a> 1.在serializers.py中添加UserSerializer</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>models <span class="token keyword">import</span> User

<span class="token keyword">class</span> <span class="token class-name">UserSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    snippets <span class="token operator">=</span> serializers<span class="token punctuation">.</span>PrimaryKeyRelatedField<span class="token punctuation">(</span>many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> queryset<span class="token operator">=</span>Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> User
        fields <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;snippets&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># snippets为反向引用，不会被默认包含，所以需要添加显示字段</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-在views-py中使用只读属性" tabindex="-1"><a class="header-anchor" href="#_2-在views-py中使用只读属性" aria-hidden="true">#</a> 2.在views.py中使用只读属性</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>models <span class="token keyword">import</span> User
<span class="token keyword">from</span> snippets<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> UserSerializer

<span class="token keyword">class</span> <span class="token class-name">UserList</span><span class="token punctuation">(</span>generics<span class="token punctuation">.</span>ListAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer


<span class="token keyword">class</span> <span class="token class-name">UserDetail</span><span class="token punctuation">(</span>generics<span class="token punctuation">.</span>RetrieveAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-添加url" tabindex="-1"><a class="header-anchor" href="#_3-添加url" aria-hidden="true">#</a> 3.添加url</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>url<span class="token punctuation">(</span><span class="token string">r&#39;^users/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>UserList<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
url<span class="token punctuation">(</span><span class="token string">r&#39;^users/(?P&lt;pk&gt;[0-9]+)/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>UserDetail<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-连接snippets和users" tabindex="-1"><a class="header-anchor" href="#_4-连接snippets和users" aria-hidden="true">#</a> 4.连接Snippets和Users</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 通过重写perform_create()方法</span>
<span class="token keyword">def</span> <span class="token function">perform_create</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span>owner<span class="token operator">=</span>self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-更新serializer" tabindex="-1"><a class="header-anchor" href="#_6-更新serializer" aria-hidden="true">#</a> 6. 更新serializer</h2><p>添加一行，另外在meta类中也要添加’owner’字段</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 只被用于序列化呈现，而不会被用于更新模型实例</span>
owner <span class="token operator">=</span> serializers<span class="token punctuation">.</span>ReadOnlyField<span class="token punctuation">(</span>source<span class="token operator">=</span><span class="token string">&#39;owner.username&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-为我们的视图函数添加权限认证" tabindex="-1"><a class="header-anchor" href="#_7-为我们的视图函数添加权限认证" aria-hidden="true">#</a> 7.为我们的视图函数添加权限认证</h2><ul><li>IsAuthenticatedOrReadOnly： 确保认证用户拥有读写权限，匿名用户只读</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> permissions
<span class="token comment"># 在SnippetList and SnippetDetail视图函数类中添加</span>
permission_classes <span class="token operator">=</span> <span class="token punctuation">(</span>permissions<span class="token punctuation">.</span>IsAuthenticatedOrReadOnly<span class="token punctuation">,</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-添加登录窗口url-rest-framework自带" tabindex="-1"><a class="header-anchor" href="#_8-添加登录窗口url-rest-framework自带" aria-hidden="true">#</a> 8. 添加登录窗口url,rest_framework自带</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>urlpatterns <span class="token operator">+=</span> <span class="token punctuation">[</span>
    <span class="token comment"># 前面正则表达式，可以随便怎么写，但是namespace,必须要是&#39;rest_framework&#39;</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^api-auth/&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token string">&#39;rest_framework.urls&#39;</span><span class="token punctuation">,</span>
                               namespace<span class="token operator">=</span><span class="token string">&#39;rest_framework&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-用户权限内等级管理" tabindex="-1"><a class="header-anchor" href="#_9-用户权限内等级管理" aria-hidden="true">#</a> 9. 用户权限内等级管理</h2>`,30),u={href:"http://xn--apppermissions-ir7vz10c5hu0f6a.py",target:"_blank",rel:"noopener noreferrer"},d=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> permissions


<span class="token keyword">class</span> <span class="token class-name">IsOwnerOrReadOnly</span><span class="token punctuation">(</span>permissions<span class="token punctuation">.</span>BasePermission<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    设置权限只允许创建者编辑
    &quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">has_object_permission</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> view<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Read permissions are allowed to any request,</span>
        <span class="token comment"># so we&#39;ll always allow GET, HEAD or OPTIONS requests.</span>
        <span class="token comment"># 为不同的请求设置权限，GET, HEAD or OPTIONS 为安全请求</span>
        <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token keyword">in</span> permissions<span class="token punctuation">.</span>SAFE_METHODS<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>

        <span class="token comment"># Write permissions are only allowed to the owner of the snippet.</span>
        <span class="token comment"># 写权限只有代码拥有者有，判断拥有者和请求者是否是同一个用户</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">.</span>owner <span class="token operator">==</span> request<span class="token punctuation">.</span>user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>然后在SnippetDetail视图类中，设置权限类</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> snippets<span class="token punctuation">.</span>permissions <span class="token keyword">import</span> IsOwnerOrReadOnly
permission_classes <span class="token operator">=</span> <span class="token punctuation">(</span>permissions<span class="token punctuation">.</span>IsAuthenticatedOrReadOnly<span class="token punctuation">,</span>
                      IsOwnerOrReadOnly<span class="token punctuation">,</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-用户认证" tabindex="-1"><a class="header-anchor" href="#_10-用户认证" aria-hidden="true">#</a> 10. 用户认证</h2><p>（SessionAuthentication and BasicAuthentication）</p>`,5),k=n("br",null,null,-1),m=n("br",null,null,-1),v={href:"https://blog.csdn.net/runnoob_1115/article/details/78479139",target:"_blank",rel:"noopener noreferrer"};function h(b,_){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[s("在app中创建permissions.py"),e(a)])])]),d,n("p",null,[s("————————————————"),k,s(" 版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。"),m,s(" 原文链接："),n("a",v,[s("https://blog.csdn.net/runnoob_1115/article/details/78479139"),e(a)])])])}const f=p(c,[["render",h],["__file","Django-restframework05-用户认证和权限管理.html.vue"]]);export{f as default};
