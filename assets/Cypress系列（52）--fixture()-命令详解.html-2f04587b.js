import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as i,c as t,a as n,b as p,d as c,f as l}from"./app-207e7d61.js";const o={},r=l(`<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>加载位于文件中的一组固定数据</p><h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">fixture</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">fixture</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> encoding<span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">fixture</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">fixture</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> encoding<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3><h4 id="filepath" tabindex="-1"><a class="header-anchor" href="#filepath" aria-hidden="true">#</a> filePath</h4><p>文件路径，默认会从 cypress/fixtures 文件夹下找文件</p><h4 id="encoding" tabindex="-1"><a class="header-anchor" href="#encoding" aria-hidden="true">#</a> encoding</h4><p>读取文件时使用的编码</p><ul><li>ascii</li><li>base64</li><li>binary</li><li>hex</li><li>latin1</li><li>utf8</li><li>utf-8</li><li>ucs2</li><li>ucs-2</li><li>utf16le</li><li>utf-16le</li></ul><p></p><h2 id="正确用法" tabindex="-1"><a class="header-anchor" href="#正确用法" aria-hidden="true">#</a> 正确用法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 从 users.json 文件中加载数据</span>
cy<span class="token punctuation">.</span><span class="token function">fixture</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&#39;usersJson&#39;</span><span class="token punctuation">)</span> 
cy<span class="token punctuation">.</span><span class="token function">fixture</span><span class="token punctuation">(</span><span class="token string">&#39;logo.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">logo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 加载 logo.png</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="不指定文件后缀名的栗子" tabindex="-1"><a class="header-anchor" href="#不指定文件后缀名的栗子" aria-hidden="true">#</a> 不指定文件后缀名的栗子</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">fixture</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&#39;adminJSON&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>读取文件的格式将会以下面的顺序进行解析</p><ol><li>cypress/fixtures/admin.json</li><li>cypress/fixtures/admin.js</li><li>cypress/fixtures/admin.coffee</li><li>cypress/fixtures/admin.html</li><li>cypress/fixtures/admin.txt</li><li>cypress/fixtures/admin.csv、</li><li>cypress/fixtures/admin.png</li><li>cypress/fixtures/admin.jpg</li><li>cypress/fixtures/admin.jpeg</li><li>cypress/fixtures/admin.gif</li><li>cypress/fixtures/admin.tif</li><li>cypress/fixtures/admin.tiff</li><li>cypress/fixtures/admin.zip</li></ol><p></p><h2 id="读取的数据的栗子" tabindex="-1"><a class="header-anchor" href="#读取的数据的栗子" aria-hidden="true">#</a> 读取的数据的栗子</h2><h4 id="需要读取-cypress-fixture-users-json-文件的数据" tabindex="-1"><a class="header-anchor" href="#需要读取-cypress-fixture-users-json-文件的数据" aria-hidden="true">#</a> 需要读取 cypress/fixture/users.json 文件的数据</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200924102548311-1646951539.png" alt="" loading="lazy"><br> 数组+字典组成的数据结构</p><h4 id="cypress-代码" tabindex="-1"><a class="header-anchor" href="#cypress-代码" aria-hidden="true">#</a> cypress 代码</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200924102626976-1402155337.png" alt="" loading="lazy"><br> 怎么取 json 的数据，这里就怎么写</p><h4 id="cypress-测试结果" tabindex="-1"><a class="header-anchor" href="#cypress-测试结果" aria-hidden="true">#</a> cypress 测试结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200924102631502-432997828.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,27),u={href:"https://www.cnblogs.com/poloyy/p/13714430.html",target:"_blank",rel:"noopener noreferrer"};function d(h,f){const s=e("ExternalLinkIcon");return i(),t("div",null,[r,n("blockquote",null,[n("p",null,[n("a",u,[p("https://www.cnblogs.com/poloyy/p/13714430.html"),c(s)])])])])}const g=a(o,[["render",d],["__file","Cypress系列（52）--fixture()-命令详解.html.vue"]]);export{g as default};
