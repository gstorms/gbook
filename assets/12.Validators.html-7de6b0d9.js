import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as p,a,b as e,d as s,f as t}from"./app-d0fb0332.js";const r={},c=a("h1",{id:"validators",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#validators","aria-hidden":"true"},"#"),e(" Validators")],-1),d=a("br",null,null,-1),u={href:"https://docs.djangoproject.com/en/stable/ref/validators/",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>Most of the time you&#39;re dealing with validation in REST framework you&#39;ll simply be relying on the default field validation, or writing explicit validation methods on serializer or field classes.<br> However, sometimes you&#39;ll want to place your validation logic into reusable components, so that it can easily be reused throughout your codebase. This can be achieved by using validator functions and validator classes.</p><h2 id="validation-in-rest-framework" tabindex="-1"><a class="header-anchor" href="#validation-in-rest-framework" aria-hidden="true">#</a> Validation in REST framework</h2><p>Validation in Django REST framework serializers is handled a little differently to how validation works in Django&#39;s <code>ModelForm</code> class.<br> With <code>ModelForm</code> the validation is performed partially on the form, and partially on the model instance. With REST framework the validation is performed entirely on the serializer class. This is advantageous for the following reasons:</p><ul><li>It introduces a proper separation of concerns, making your code behavior more obvious.</li><li>It is easy to switch between using shortcut <code>ModelSerializer</code> classes and using explicit <code>Serializer</code> classes. Any validation behavior being used for <code>ModelSerializer</code> is simple to replicate.</li><li>Printing the <code>repr</code> of a serializer instance will show you exactly what validation rules it applies. There&#39;s no extra hidden validation behavior being called on the model instance.</li></ul><p>When you&#39;re using <code>ModelSerializer</code> all of this is handled automatically for you. If you want to drop down to using <code>Serializer</code> classes instead, then you need to define the validation rules explicitly.</p><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><p>As an example of how REST framework uses explicit validation, we&#39;ll take a simple model class that has a field with a uniqueness constraint.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">CustomerReportRecord</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time_raised <span class="token operator">=</span> models<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>default<span class="token operator">=</span>timezone<span class="token punctuation">.</span>now<span class="token punctuation">,</span> editable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    reference <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> max_length<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>
    description <span class="token operator">=</span> models<span class="token punctuation">.</span>TextField<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here&#39;s a basic <code>ModelSerializer</code> that we can use for creating or updating instances of <code>CustomerReportRecord</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">CustomerReportSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> CustomerReportRecord
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If we open up the Django shell using <code>manage.py shell</code> we can now</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> project<span class="token punctuation">.</span>example<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> CustomerReportSerializer
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> serializer <span class="token operator">=</span> CustomerReportSerializer<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">repr</span><span class="token punctuation">(</span>serializer<span class="token punctuation">)</span><span class="token punctuation">)</span>
CustomerReportSerializer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> IntegerField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span> read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    time_raised <span class="token operator">=</span> DateTimeField<span class="token punctuation">(</span>read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    reference <span class="token operator">=</span> CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> validators<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">&lt;</span>UniqueValidator<span class="token punctuation">(</span>queryset<span class="token operator">=</span>CustomerReportRecord<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    description <span class="token operator">=</span> CharField<span class="token punctuation">(</span>style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;textarea&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The interesting bit here is the <code>reference</code> field. We can see that the uniqueness constraint is being explicitly enforced by a validator on the serializer field.<br> Because of this more explicit style REST framework includes a few validator classes that are not available in core Django. These classes are detailed below.</p><hr><h2 id="uniquevalidator" tabindex="-1"><a class="header-anchor" href="#uniquevalidator" aria-hidden="true">#</a> UniqueValidator</h2><p>This validator can be used to enforce the <code>unique=True</code> constraint on model fields. It takes a single required argument, and an optional <code>messages</code> argument:</p><ul><li><code>queryset</code> <em>required</em> - This is the queryset against which uniqueness should be enforced.</li><li><code>message</code> - The error message that should be used when validation fails.</li><li><code>lookup</code> - The lookup used to find an existing instance with the value being validated. Defaults to <code>&#39;exact&#39;</code>.</li></ul><p>This validator should be applied to <em>serializer fields</em>, like so:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>validators <span class="token keyword">import</span> UniqueValidator
slug <span class="token operator">=</span> SlugField<span class="token punctuation">(</span>
    max_length<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span>
    validators<span class="token operator">=</span><span class="token punctuation">[</span>UniqueValidator<span class="token punctuation">(</span>queryset<span class="token operator">=</span>BlogPost<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uniquetogethervalidator" tabindex="-1"><a class="header-anchor" href="#uniquetogethervalidator" aria-hidden="true">#</a> UniqueTogetherValidator</h2><p>This validator can be used to enforce <code>unique_together</code> constraints on model instances. It has two required arguments, and a single optional <code>messages</code> argument:</p><ul><li><code>queryset</code> <em>required</em> - This is the queryset against which uniqueness should be enforced.</li><li><code>fields</code> <em>required</em> - A list or tuple of field names which should make a unique set. These must exist as fields on the serializer class.</li><li><code>message</code> - The error message that should be used when validation fails.</li></ul><p>The validator should be applied to <em>serializer classes</em>, like so:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>validators <span class="token keyword">import</span> UniqueTogetherValidator
<span class="token keyword">class</span> <span class="token class-name">ExampleSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># ...</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        <span class="token comment"># ToDo items belong to a parent list, and have an ordering defined</span>
        <span class="token comment"># by the &#39;position&#39; field. No two items in a given list may share</span>
        <span class="token comment"># the same position.</span>
        validators <span class="token operator">=</span> <span class="token punctuation">[</span>
            UniqueTogetherValidator<span class="token punctuation">(</span>
                queryset<span class="token operator">=</span>ToDoItem<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                fields<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;position&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>Note</strong>: The <code>UniqueTogetherValidator</code> class always imposes an implicit constraint that all the fields it applies to are always treated as required. Fields with <code>default</code> values are an exception to this as they always supply a value even when omitted from user input.</p><hr><h2 id="uniquefordatevalidator" tabindex="-1"><a class="header-anchor" href="#uniquefordatevalidator" aria-hidden="true">#</a> UniqueForDateValidator</h2><h2 id="uniqueformonthvalidator" tabindex="-1"><a class="header-anchor" href="#uniqueformonthvalidator" aria-hidden="true">#</a> UniqueForMonthValidator</h2><h2 id="uniqueforyearvalidator" tabindex="-1"><a class="header-anchor" href="#uniqueforyearvalidator" aria-hidden="true">#</a> UniqueForYearValidator</h2><p>These validators can be used to enforce the <code>unique_for_date</code>, <code>unique_for_month</code> and <code>unique_for_year</code> constraints on model instances. They take the following arguments:</p><ul><li><code>queryset</code> <em>required</em> - This is the queryset against which uniqueness should be enforced.</li><li><code>field</code> <em>required</em> - A field name against which uniqueness in the given date range will be validated. This must exist as a field on the serializer class.</li><li><code>date_field</code> <em>required</em> - A field name which will be used to determine date range for the uniqueness constrain. This must exist as a field on the serializer class.</li><li><code>message</code> - The error message that should be used when validation fails.</li></ul><p>The validator should be applied to <em>serializer classes</em>, like so:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>validators <span class="token keyword">import</span> UniqueForYearValidator
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The date field that is used for the validation is always required to be present on the serializer class. You can&#39;t simply rely on a model class <code>default=...</code>, because the value being used for the default wouldn&#39;t be generated until after the validation has run.<br> There are a couple of styles you may want to use for this depending on how you want your API to behave. If you&#39;re using <code>ModelSerializer</code> you&#39;ll probably simply rely on the defaults that REST framework generates for you, but if you are using <code>Serializer</code> or simply want more explicit control, use on of the styles demonstrated below.</p><h4 id="using-with-a-writable-date-field" tabindex="-1"><a class="header-anchor" href="#using-with-a-writable-date-field" aria-hidden="true">#</a> Using with a writable date field.</h4><p>If you want the date field to be writable the only thing worth noting is that you should ensure that it is always available in the input data, either by setting a <code>default</code> argument, or by setting <code>required=True</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>published <span class="token operator">=</span> serializers<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>required<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="using-with-a-read-only-date-field" tabindex="-1"><a class="header-anchor" href="#using-with-a-read-only-date-field" aria-hidden="true">#</a> Using with a read-only date field.</h4><p>If you want the date field to be visible, but not editable by the user, then set <code>read_only=True</code> and additionally set a <code>default=...</code> argument.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>published <span class="token operator">=</span> serializers<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> default<span class="token operator">=</span>timezone<span class="token punctuation">.</span>now<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="using-with-a-hidden-date-field" tabindex="-1"><a class="header-anchor" href="#using-with-a-hidden-date-field" aria-hidden="true">#</a> Using with a hidden date field.</h4><p>If you want the date field to be entirely hidden from the user, then use <code>HiddenField</code>. This field type does not accept user input, but instead always returns its default value to the <code>validated_data</code> in the serializer.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>published <span class="token operator">=</span> serializers<span class="token punctuation">.</span>HiddenField<span class="token punctuation">(</span>default<span class="token operator">=</span>timezone<span class="token punctuation">.</span>now<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><p><strong>Note</strong>: The <code>UniqueFor&lt;Range&gt;Validator</code> classes impose an implicit constraint that the fields they are applied to are always treated as required. Fields with <code>default</code> values are an exception to this as they always supply a value even when omitted from user input.</p><hr><h1 id="advanced-field-defaults" tabindex="-1"><a class="header-anchor" href="#advanced-field-defaults" aria-hidden="true">#</a> Advanced field defaults</h1><p>Validators that are applied across multiple fields in the serializer can sometimes require a field input that should not be provided by the API client, but that <em>is</em> available as input to the validator.<br> Two patterns that you may want to use for this sort of validation include:</p><ul><li>Using <code>HiddenField</code>. This field will be present in <code>validated_data</code> but <em>will not</em> be used in the serializer output representation.</li><li>Using a standard field with <code>read_only=True</code>, but that also includes a <code>default=…</code> argument. This field <em>will</em> be used in the serializer output representation, but cannot be set directly by the user.</li></ul><p>REST framework includes a couple of defaults that may be useful in this context.</p><h4 id="currentuserdefault" tabindex="-1"><a class="header-anchor" href="#currentuserdefault" aria-hidden="true">#</a> CurrentUserDefault</h4><p>A default class that can be used to represent the current user. In order to use this, the &#39;request&#39; must have been provided as part of the context dictionary when instantiating the serializer.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>owner <span class="token operator">=</span> serializers<span class="token punctuation">.</span>HiddenField<span class="token punctuation">(</span>
    default<span class="token operator">=</span>serializers<span class="token punctuation">.</span>CurrentUserDefault<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="createonlydefault" tabindex="-1"><a class="header-anchor" href="#createonlydefault" aria-hidden="true">#</a> CreateOnlyDefault</h4><p>A default class that can be used to <em>only set a default argument during create operations</em>. During updates the field is omitted.<br> It takes a single argument, which is the default value or callable that should be used during create operations.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>created_at <span class="token operator">=</span> serializers<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>
    default<span class="token operator">=</span>serializers<span class="token punctuation">.</span>CreateOnlyDefault<span class="token punctuation">(</span>timezone<span class="token punctuation">.</span>now<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="limitations-of-validators" tabindex="-1"><a class="header-anchor" href="#limitations-of-validators" aria-hidden="true">#</a> Limitations of validators</h1><p>There are some ambiguous cases where you&#39;ll need to instead handle validation explicitly, rather than relying on the default serializer classes that <code>ModelSerializer</code> generates.<br> In these cases you may want to disable the automatically generated validators, by specifying an empty list for the serializer <code>Meta.validators</code> attribute.</p><h2 id="optional-fields" tabindex="-1"><a class="header-anchor" href="#optional-fields" aria-hidden="true">#</a> Optional fields</h2><p>By default &quot;unique together&quot; validation enforces that all fields be <code>required=True</code>. In some cases, you might want to explicit apply <code>required=False</code> to one of the fields, in which case the desired behaviour of the validation is ambiguous.<br> In this case you will typically need to exclude the validator from the serializer class, and instead write any validation logic explicitly, either in the <code>.validate()</code> method, or else in the view.<br> For example:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">BillingRecordSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">validate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> attrs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Apply custom validation either here, or in the view.</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;client&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;amount&#39;</span><span class="token punctuation">]</span>
        extra_kwargs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;client&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;required&#39;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
        validators <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment"># Remove a default &quot;unique together&quot; constraint.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updating-nested-serializers" tabindex="-1"><a class="header-anchor" href="#updating-nested-serializers" aria-hidden="true">#</a> Updating nested serializers</h2><p>When applying an update to an existing instance, uniqueness validators will exclude the current instance from the uniqueness check. The current instance is available in the context of the uniqueness check, because it exists as an attribute on the serializer, having initially been passed using <code>instance=...</code> when instantiating the serializer.<br> In the case of update operations on <em>nested</em> serializers there&#39;s no way of applying this exclusion, because the instance is not available.<br> Again, you&#39;ll probably want to explicitly remove the validator from the serializer class, and write the code the for the validation constraint explicitly, in a <code>.validate()</code> method, or in the view.</p><h2 id="debugging-complex-cases" tabindex="-1"><a class="header-anchor" href="#debugging-complex-cases" aria-hidden="true">#</a> Debugging complex cases</h2><p>If you&#39;re not sure exactly what behavior a <code>ModelSerializer</code> class will generate it is usually a good idea to run <code>manage.py shell</code>, and print an instance of the serializer, so that you can inspect the fields and validators that it automatically generates for you.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> serializer <span class="token operator">=</span> MyComplexModelSerializer<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>serializer<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyComplexModelSerializer</span><span class="token punctuation">:</span>
    my_fields <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Also keep in mind that with complex cases it can often be better to explicitly define your serializer classes, rather than relying on the default <code>ModelSerializer</code> behavior. This involves a little more code, but ensures that the resulting behavior is more transparent.</p><hr><h1 id="writing-custom-validators" tabindex="-1"><a class="header-anchor" href="#writing-custom-validators" aria-hidden="true">#</a> Writing custom validators</h1><p>You can use any of Django&#39;s existing validators, or write your own custom validators.</p><h2 id="function-based" tabindex="-1"><a class="header-anchor" href="#function-based" aria-hidden="true">#</a> Function based</h2><p>A validator may be any callable that raises a <code>serializers.ValidationError</code> on failure.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">even_number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> value <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> serializers<span class="token punctuation">.</span>ValidationError<span class="token punctuation">(</span><span class="token string">&#39;This field must be an even number.&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="field-level-validation" tabindex="-1"><a class="header-anchor" href="#field-level-validation" aria-hidden="true">#</a> Field-level validation</h4>`,76),k=a("code",null,".validate_<field_name>",-1),m=a("code",null,"Serializer",-1),v={href:"https://www.django-rest-framework.org/api-guide/serializers/#field-level-validation",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="class-based" tabindex="-1"><a class="header-anchor" href="#class-based" aria-hidden="true">#</a> Class-based</h2><p>To write a class-based validator, use the <code>__call__</code> method. Class-based validators are useful as they allow you to parameterize and reuse behavior.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MultipleOf</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> base<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>base <span class="token operator">=</span> base
    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> value <span class="token operator">%</span> self<span class="token punctuation">.</span>base <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
            message <span class="token operator">=</span> <span class="token string">&#39;This field must be a multiple of %d.&#39;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>base
            <span class="token keyword">raise</span> serializers<span class="token punctuation">.</span>ValidationError<span class="token punctuation">(</span>message<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="accessing-the-context" tabindex="-1"><a class="header-anchor" href="#accessing-the-context" aria-hidden="true">#</a> Accessing the context</h4><p>In some advanced cases you might want a validator to be passed the serializer field it is being used with as additional context. You can do so by setting a <code>requires_context = True</code> attribute on the validator. The <code>__call__</code> method will then be called with the <code>serializer_field</code> or <code>serializer</code> as an additional argument.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>requires_context <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">,</span> serializer_field<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function f(g,y){const n=o("ExternalLinkIcon");return l(),p("div",null,[c,a("blockquote",null,[a("p",null,[e("Validators can be useful for re-using validation logic between different types of fields."),d,e(" — "),a("a",u,[e("Django documentation"),s(n)])])]),h,a("p",null,[e("You can specify custom field-level validation by adding "),k,e(" methods to your "),m,e(" subclass. This is documented in the "),a("a",v,[e("Serializer docs"),s(n)])]),b])}const _=i(r,[["render",f],["__file","12.Validators.html.vue"]]);export{_ as default};