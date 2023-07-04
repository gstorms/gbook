import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,f as a}from"./app-d0fb0332.js";const r={},i=a(`<h1 id="vue前端接收日期数据的格式化" tabindex="-1"><a class="header-anchor" href="#vue前端接收日期数据的格式化" aria-hidden="true">#</a> Vue前端接收日期数据的格式化</h1><p><code>npm i moment --save</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import moment from &#39;moment&#39;  
Vue.filter(&#39;dateFormat&#39;, function (dateStr,pattern = &quot;YYYY-MM-DD HH:mm:ss&quot;) {  
  return moment(dateStr).format(pattern);  
})  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在一个组件的选项中定义本地的过滤器<br> 或者在创建 Vue 实例之前全局定义过滤器<br> 当全局过滤器和局部过滤器重名时，会采用局部过滤器。</p>`,4),d=[i];function o(s,c){return t(),n("div",null,d)}const l=e(r,[["render",o],["__file","Vue前端接收日期数据的格式化.html.vue"]]);export{l as default};
