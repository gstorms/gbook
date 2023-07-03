import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-207e7d61.js";const p={},e=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>		image_dir <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>RunConfig<span class="token punctuation">.</span>NEW_REPORT<span class="token punctuation">,</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span> file_name<span class="token punctuation">)</span> <span class="token comment"># 图片地址</span>
        RunConfig<span class="token punctuation">.</span>driver<span class="token punctuation">.</span>save_screenshot<span class="token punctuation">(</span>image_dir<span class="token punctuation">)</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>image_dir<span class="token punctuation">,</span> <span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token builtin">file</span> <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
            allure<span class="token punctuation">.</span>attach<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span> <span class="token string">&quot;失败截图&quot;</span><span class="token punctuation">,</span> allure<span class="token punctuation">.</span>attachment_type<span class="token punctuation">.</span>PNG<span class="token punctuation">)</span> <span class="token comment"># 将图片附加到报告中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","Pytest系列（30）--allure添加失败错误截图.html.vue"]]);export{k as default};
