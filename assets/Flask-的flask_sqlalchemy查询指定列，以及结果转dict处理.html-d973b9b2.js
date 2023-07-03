import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-207e7d61.js";const p={},e=t(`<h1 id="flask-的flask-sqlalchemy查询指定列-以及结果转dict处理" tabindex="-1"><a class="header-anchor" href="#flask-的flask-sqlalchemy查询指定列-以及结果转dict处理" aria-hidden="true">#</a> Flask-的flask_sqlalchemy查询指定列，以及结果转dict处理</h1><p>通过使用with_entities()方法来获取要查询的列</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 正常查询全部字段</span>
result <span class="token operator">=</span> User<span class="token punctuation">.</span>query<span class="token punctuation">.</span>order_by<span class="token punctuation">(</span>User<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">.</span>desc<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> User<span class="token punctuation">.</span>query<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 查询指定的id列</span>
result <span class="token operator">=</span> User<span class="token punctuation">.</span>query<span class="token punctuation">.</span>with_entities<span class="token punctuation">(</span>User<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">)</span>  <span class="token comment"># 返回BaseQuery</span>

<span class="token comment"># 返回指定的两列</span>
result <span class="token operator">=</span> User<span class="token punctuation">.</span>query<span class="token punctuation">.</span>with_entities<span class="token punctuation">(</span>User<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">,</span> User<span class="token punctuation">.</span>name<span class="token punctuation">)</span>  
result <span class="token operator">=</span> db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>query<span class="token punctuation">(</span>User<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">,</span> User<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果处理(转dict)：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">model_to_dict</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;正常查询结果转dict&#39;&#39;&#39;</span>
    <span class="token keyword">from</span> collections <span class="token keyword">import</span> Iterable
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span><span class="token punctuation">:</span>
            tmp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>__dict__<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>__dict__<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> res <span class="token keyword">in</span> result<span class="token punctuation">]</span>
            <span class="token keyword">for</span> t <span class="token keyword">in</span> tmp<span class="token punctuation">:</span>
                t<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token string">&#39;_sa_instance_state&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            tmp <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>__dict__<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span>__dict__<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            tmp<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token string">&#39;_sa_instance_state&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> tmp
    <span class="token keyword">except</span> BaseException <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> TypeError<span class="token punctuation">(</span><span class="token string">&#39;Type error of parameter&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">model_to_dict_nosa</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;指定查询字段时，查询结果转dict&#39;&#39;&#39;</span>
    <span class="token keyword">from</span> collections <span class="token keyword">import</span> Iterable
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span><span class="token punctuation">:</span>
            tmp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> res <span class="token keyword">in</span> result<span class="token punctuation">]</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            tmp <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> tmp
    <span class="token keyword">except</span> BaseException <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> TypeError<span class="token punctuation">(</span><span class="token string">&#39;Type error of parameter&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","Flask-的flask_sqlalchemy查询指定列，以及结果转dict处理.html.vue"]]);export{r as default};
