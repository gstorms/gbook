import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as e}from"./app-cfbf85c1.js";const t={},i=e(`<h1 id="cypress笔记" tabindex="-1"><a class="header-anchor" href="#cypress笔记" aria-hidden="true">#</a> Cypress笔记</h1><h3 id="使用cypress报错" tabindex="-1"><a class="header-anchor" href="#使用cypress报错" aria-hidden="true">#</a> 使用cypress报错</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Error: Webpack Compilation Error
./cypress/integration/main/login-page.test.js
Module build failed <span class="token punctuation">(</span>from C:/Users/user/AppData/Local/Cypress/Cache/5.4.0/Cypress/resources/app/packages/server/node_modules/babel-loader/lib/index.js<span class="token punctuation">)</span>:
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token punctuation">\\</span>IdeaProjects<span class="token punctuation">\\</span>admin<span class="token punctuation">\\</span>project<span class="token punctuation">\\</span>project-ui<span class="token punctuation">\\</span>browserslist:1
<span class="token comment"># This file is used by the build system to adjust CSS and JS output to support the specified browsers below.</span>
^

SyntaxError: Invalid or unexpected token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法（待确认）</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">&quot;&gt; 0.5%&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;Firefox ESR&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;not dead&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;not IE 9-11&quot;</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[i];function p(r,c){return n(),a("div",null,o)}const d=s(t,[["render",p],["__file","Cypress笔记.html.vue"]]);export{d as default};
