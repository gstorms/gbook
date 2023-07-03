import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as r,c as o,a,b as i,d as t,f as l}from"./app-3f278ba4.js";const c={},p=l(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><ul><li>一个测试用例集（describe）通常包含多个测试用例（it）</li><li>当网络不稳定而引起测试失败时，我们希望仅重试失败的用例而不是重跑整个测试用例集</li><li>但测试运行器默认仅支持重试整个测试用例集</li><li>今天讲的插件就能满足我们的需求</li></ul><p></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i <span class="token operator">-</span><span class="token constant">D</span> cypress<span class="token operator">-</span>skip<span class="token operator">-</span>and<span class="token operator">-</span>only<span class="token operator">-</span>ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>在 cypress/supprt/index.js 文件，任意位置添加配置项如下<br><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200908102849179-445503099.png" alt="" loading="lazy"><br>  <br> 在 cypress/plugins/index.js  文件，任意位置添加配置如下<br><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200908104436753-664019920.png" alt="" loading="lazy"></p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><figure><img src="https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200908105922234-1839507294.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h2><p>现在新版本的 Cypress 是不支持这个插件的，但不影响真实使用，毕竟这也是调试作用居多</p>`,12),d={href:"https://www.cnblogs.com/poloyy/p/13631293.html",target:"_blank",rel:"noopener noreferrer"};function h(g,_){const e=n("ExternalLinkIcon");return r(),o("div",null,[p,a("blockquote",null,[a("p",null,[a("a",d,[i("https://www.cnblogs.com/poloyy/p/13631293.html"),t(e)])])])])}const b=s(c,[["render",h],["__file","Cypress系列（45）--cypress-skip-and-only-ui-插件详解.html.vue"]]);export{b as default};
