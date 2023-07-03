import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,a as n,b as a,d as s,f as r}from"./app-3f278ba4.js";const l={},p=n("h2",{id:"作用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#作用","aria-hidden":"true"},"#"),a(" 作用")],-1),d=n("li",null,"在测试中获取并设置配置选项",-1),h={href:"https://docs.cypress.io/guides/references/configuration.html",target:"_blank",rel:"noopener noreferrer"},u=n("li",null,"后面再自己写配置项的博客",-1),g=r(`<p></p><h4 id="作用范围" tabindex="-1"><a class="header-anchor" href="#作用范围" aria-hidden="true">#</a> 作用范围</h4><ul><li>使用 Cypress.config 设置的配置项<strong>仅在</strong>当前规范文件（js 测试文件）的范围内生效</li><li>Cypress 隔离运行每个测试文件：在一个测试文件中更改的配置在其他测试文件中<strong>不可见</strong></li></ul><p></p><h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Cypress<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
Cypress<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
Cypress<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
Cypress<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h4><p>要获取或设置的配置的名称</p><h4 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> value</h4><p>要设置的配置值</p><h4 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> object</h4><p>使用对象属性（ {} 的格式）设置多个配置项</p><h2 id="实际栗子" tabindex="-1"><a class="header-anchor" href="#实际栗子" aria-hidden="true">#</a> 实际栗子</h2><h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124144436807-935690094.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果" aria-hidden="true">#</a> 运行结果</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124165923528-1403332894.png" alt="" loading="lazy"><br><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124170012757-1788491737.png" alt="" loading="lazy"><br> 可以看到统一修改的配置项</p><h2 id="重点" tabindex="-1"><a class="header-anchor" href="#重点" aria-hidden="true">#</a> 重点</h2><figure><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124170657892-257252918.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>获取的配置项是依照上图的 Configuration 来拿的</li><li>使用 Cypress.config 设置配置项会覆盖已有的配置项</li></ul><p></p>`,22),f={href:"https://www.cnblogs.com/poloyy/p/14030243.html",target:"_blank",rel:"noopener noreferrer"};function m(_,b){const e=i("ExternalLinkIcon");return o(),c("div",null,[p,n("ul",null,[d,n("li",null,[a("配置项官方文章可看："),n("a",h,[a("https://docs.cypress.io/guides/references/configuration.html"),s(e)])]),u]),g,n("blockquote",null,[n("p",null,[n("a",f,[a("https://www.cnblogs.com/poloyy/p/14030243.html"),s(e)])])])])}const y=t(l,[["render",m],["__file","Cypress系列（91）--Cypress.config-命令详解.html.vue"]]);export{y as default};
