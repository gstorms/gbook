import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,f as a}from"./app-207e7d61.js";const s={},d=a(`<h1 id="python-中文排序" tabindex="-1"><a class="header-anchor" href="#python-中文排序" aria-hidden="true">#</a> Python-中文排序</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from pypinyin import lazy_pinyin

a = [&#39;中国&#39;, &#39;啊&#39;, &#39;你好&#39;, &#39;1您&#39;,&#39;台球&#39;,&#39;bu是&#39;]
# [&#39;中国&#39;, &#39;啊&#39;, &#39;你好&#39;, &#39;1您&#39;, &#39;台球&#39;, &#39;bu是&#39;]
b = [&#39;&#39;.join(lazy_pinyin(_)) for _ in a]
# [&#39;zhongguo&#39;, &#39;a&#39;, &#39;nihao&#39;, &#39;1nin&#39;, &#39;taiwan&#39;, &#39;bushi&#39;]
aa = dict(zip(b,a))
# {&#39;zhongguo&#39;: &#39;中国&#39;, &#39;a&#39;: &#39;啊&#39;, &#39;nihao&#39;: &#39;你好&#39;, &#39;1nin&#39;: &#39;1您&#39;, &#39;taiwan&#39;: &#39;台球&#39;, &#39;bushi&#39;: &#39;bu是&#39;}
ss = sorted(aa.items(), key=lambda aa:aa[0])
# [(&#39;1nin&#39;, &#39;1您&#39;), (&#39;a&#39;, &#39;啊&#39;), (&#39;bushi&#39;, &#39;bu是&#39;), (&#39;nihao&#39;, &#39;你好&#39;), (&#39;taiwan&#39;, &#39;台球&#39;), (&#39;zhongguo&#39;, &#39;中国&#39;)]
sa = dict(ss)
res = list(sa.values())
# [&#39;1您&#39;, &#39;啊&#39;, &#39;bu是&#39;, &#39;你好&#39;, &#39;台球&#39;, &#39;中国&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function t(r,o){return i(),e("div",null,l)}const v=n(s,[["render",t],["__file","Python-中文排序.html.vue"]]);export{v as default};
