import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-3f278ba4.js";const t={},p=e(`<h1 id="drf20-validators验证类" tabindex="-1"><a class="header-anchor" href="#drf20-validators验证类" aria-hidden="true">#</a> DRF20-Validators验证类</h1><p>Validators可以在不同的字段验证时重复使用</p><h2 id="_1-rest框架中的模型验证" tabindex="-1"><a class="header-anchor" href="#_1-rest框架中的模型验证" aria-hidden="true">#</a> 1 REST框架中的模型验证</h2><p>REST框架中的模型验证与Django的ModelForm表单验证有少量不同：<br> ModelForm中的验证部分在form中，部分由模型验证，而在REST框架中则完全由序列化类验证<br> 优点：</p><ol><li>让代码的行为变得更明显</li><li>ModelSerializer与Serializer类互相转化很轻松</li><li>使用repr方法就能看到明确的验证规则</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">CustomerReportRecord</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time_raised <span class="token operator">=</span> models<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>default<span class="token operator">=</span>timezone<span class="token punctuation">.</span>now<span class="token punctuation">,</span> editable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    reference <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> max_length<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>
    description <span class="token operator">=</span> models<span class="token punctuation">.</span>TextField<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">CustomerReportSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> CustomerReportRecord
<span class="token comment"># 查看字段验证信息</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> project<span class="token punctuation">.</span>example<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> CustomerReportSerializer
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> serializer <span class="token operator">=</span> CustomerReportSerializer<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">repr</span><span class="token punctuation">(</span>serializer<span class="token punctuation">)</span><span class="token punctuation">)</span>
CustomerReportSerializer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> IntegerField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span> read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    time_raised <span class="token operator">=</span> DateTimeField<span class="token punctuation">(</span>read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    reference <span class="token operator">=</span> CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> validators<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">&lt;</span>UniqueValidator<span class="token punctuation">(</span>queryset<span class="token operator">=</span>CustomerReportRecord<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    description <span class="token operator">=</span> CharField<span class="token punctuation">(</span>style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;textarea&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># reference字段的唯一性验证被明确表示。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-自带验证器" tabindex="-1"><a class="header-anchor" href="#_2-自带验证器" aria-hidden="true">#</a> 2 自带验证器</h2><h3 id="_1-uniquevalidator" tabindex="-1"><a class="header-anchor" href="#_1-uniquevalidator" aria-hidden="true">#</a> 1 UniqueValidator</h3><p>用于验证unique=True的字段，常用参数：</p><ul><li>queryset： required，用于明确验证唯一性集合，必须设置</li><li>message：当验证失败时的提示信息</li><li>lookup：用于查找已经存在的实例，默认为’exact’。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>validators <span class="token keyword">import</span> UniqueValidator

slug <span class="token operator">=</span> SlugField<span class="token punctuation">(</span>
    max_length<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span>
    validators<span class="token operator">=</span><span class="token punctuation">[</span>UniqueValidator<span class="token punctuation">(</span>queryset<span class="token operator">=</span>BlogPost<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-uniquetogethervalidator" tabindex="-1"><a class="header-anchor" href="#_2-uniquetogethervalidator" aria-hidden="true">#</a> 2 UniqueTogetherValidator</h3><p>queryset：required，用于明确验证唯一性集合，必须设置<br> fields: required，字段列表或者元组，字段必须是序列化类中存在的字段<br> message：当验证失败时的提示信息<br> UniqueTogetherValidator有一个隐性要求就是验证的字段必须要提供值，除非设置了一个默认值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>validators <span class="token keyword">import</span> UniqueTogetherValidator

<span class="token keyword">class</span> <span class="token class-name">ExampleSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        validators <span class="token operator">=</span> <span class="token punctuation">[</span>
            UniqueTogetherValidator<span class="token punctuation">(</span>
                queryset<span class="token operator">=</span>ToDoItem<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                fields<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;position&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-uniquefordatevalidator-uniqueformonthvalidator-uniqueforyearvalidator" tabindex="-1"><a class="header-anchor" href="#_3-uniquefordatevalidator-uniqueformonthvalidator-uniqueforyearvalidator" aria-hidden="true">#</a> 3 UniqueForDateValidator UniqueForMonthValidator UniqueForYearValidator</h3><p>用于验证模型中的unique_for_date, unique_for_month 和unique_for_year字段</p><ul><li>queryset： required，用于明确验证唯一性集合，必须设置</li><li>message：当验证失败时的提示信息</li><li>date_field：required， 用于确定时间范围必须是在序列化中已经存在的字段</li><li>field：required，用于验证唯一性的字段名。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>validators <span class="token keyword">import</span> UniqueForYearValidator

<span class="token keyword">class</span> <span class="token class-name">ExampleSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># ...</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        <span class="token comment"># Blog posts should have a slug that is unique for the current year.</span>
        validators <span class="token operator">=</span> <span class="token punctuation">[</span>
            UniqueForYearValidator<span class="token punctuation">(</span>
                queryset<span class="token operator">=</span>BlogPostItem<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                field<span class="token operator">=</span><span class="token string">&#39;slug&#39;</span><span class="token punctuation">,</span>
                date_field<span class="token operator">=</span><span class="token string">&#39;published&#39;</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>date_field必须是序列化类中已经存在的类，不能简单的设置一个默认值，因为，默认值是在数据通过验证之后才会生成的。<br> 使用一个可写的时间字段：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>published <span class="token operator">=</span> serializers<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>required<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用一个只读的时间字段</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>published <span class="token operator">=</span> serializers<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> default<span class="token operator">=</span>timezone<span class="token punctuation">.</span>now<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用一个隐藏的时间字段</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>published <span class="token operator">=</span> serializers<span class="token punctuation">.</span>HiddenField<span class="token punctuation">(</span>default<span class="token operator">=</span>timezone<span class="token punctuation">.</span>now<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-高级的字段默认值" tabindex="-1"><a class="header-anchor" href="#_4-高级的字段默认值" aria-hidden="true">#</a> 4 高级的字段默认值</h3><p>验证函数需要验证多个字段，但是有时需要验证一个字段，不是由API客户端输入的但又是一个可用的输入。</p><ol><li>对于这种验证有两种实现方式：</li></ol><ul><li>利用HiddenField，该字段会传递给validated_data，但是不会被序列化输出给用户</li><li>使用read_only=True和default=…参数。</li></ul><ol start="2"><li>CurrentUserDefault</li></ol><p>为了使用CurrentUserDefault，’request’中必须包含上下文字典，以供序列化类初始化使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>owner <span class="token operator">=</span> serializers<span class="token punctuation">.</span>HiddenField<span class="token punctuation">(</span>
    default<span class="token operator">=</span>serializers<span class="token punctuation">.</span>CurrentUserDefault<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>CreateOnlyDefault<br> 只在创建时使用的默认类，其接受一个参数，可以是一个默认值，也可以是一个可调用的对象</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>created_at <span class="token operator">=</span> serializers<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>
    read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    default<span class="token operator">=</span>serializers<span class="token punctuation">.</span>CreateOnlyDefault<span class="token punctuation">(</span>timezone<span class="token punctuation">.</span>now<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-validators的局限性" tabindex="-1"><a class="header-anchor" href="#_5-validators的局限性" aria-hidden="true">#</a> 5 validators的局限性</h3><p>对于默写模糊不清的字段，由ModelSerializer会自动生成比自己明确设置好<br> 也可以设置validators=[],禁用验证函数</p><ol><li>可选字段<br> 对于”unique together”默认强制设置了required=True，有时对于其中一个字段，需要required=False，此时验证行为就不清晰了<br> 对于未设置验证函数的对象，可以在.validate()或者视图函数中使用其他的验证逻辑</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">BillingRecordSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">validate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Apply custom validation either here, or in the view.</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        fields <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;client&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;amount&#39;</span><span class="token punctuation">)</span>
        extra_kwargs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;client&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;required&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;False&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
        validators <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment"># Remove a default &quot;unique together&quot; constraint.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新可选对象<br> 当更新一个已经存在的实例时，唯一性检查会将目前的实例排除。因为他是作为序列化类的一个属性instance=…。在更新嵌套序列化类时，就不会被排除了。<br> 这时你就需要明确的移除这个验证函数，然后编写.validate()方法或者在views中明确。</p><p>调式复杂情况<br> ModelSerializer使用repr方法</p><h3 id="_6-编写一个自定义验证函数" tabindex="-1"><a class="header-anchor" href="#_6-编写一个自定义验证函数" aria-hidden="true">#</a> 6 编写一个自定义验证函数</h3><p>可以利用已经存在的验证函数，或者编写自定义验证类</p><ol><li>基础函数</li></ol><p>验证可能抛出serializers.ValidationError异常<br> .validate_可以提供一个字段验证</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">even_number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> value <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> serializers<span class="token punctuation">.</span>ValidationError<span class="token punctuation">(</span><span class="token string">&#39;This field must be an even number.&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>基础类<br> 使用<strong>call</strong>方法，允许使用传参，和重用行为</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MultipleOf</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> base<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>base <span class="token operator">=</span> base

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> value <span class="token operator">%</span> self<span class="token punctuation">.</span>base <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
            message <span class="token operator">=</span> <span class="token string">&#39;This field must be a multiple of %d.&#39;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>base
            <span class="token keyword">raise</span> serializers<span class="token punctuation">.</span>ValidationError<span class="token punctuation">(</span>message<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以为验证类添加附加的请求上下文。可以在基础验证类中使用set_context方法。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">set_context</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> serializer_field<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 判断这是一个更新还是一个创建操作</span>
    self<span class="token punctuation">.</span>is_update <span class="token operator">=</span> serializer_field<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>instance <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),o=[p];function l(i,c){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","Django-restframework20-Validators验证类.html.vue"]]);export{d as default};
