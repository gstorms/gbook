import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as i,c as o,a as t,b as n,d as e,f as r}from"./app-3f278ba4.js";const p={},c=r(`<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>控制浏览器窗口的尺寸和方向</p><h4 id="重点" tabindex="-1"><a class="header-anchor" href="#重点" aria-hidden="true">#</a> 重点</h4><ul><li>也可以通过在配置项中定义 viewportWidth 和 viewportHeight 来全局设置浏览器窗口的宽度和高度</li><li>**默认宽高：**1000px * 660px</li></ul><p></p><h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">viewport</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">viewport</span><span class="token punctuation">(</span>preset<span class="token punctuation">,</span> orientation<span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">viewport</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">viewport</span><span class="token punctuation">(</span>preset<span class="token punctuation">,</span> orientation<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h2 id="参数讲解" tabindex="-1"><a class="header-anchor" href="#参数讲解" aria-hidden="true">#</a> 参数讲解</h2><h4 id="width、height" tabindex="-1"><a class="header-anchor" href="#width、height" aria-hidden="true">#</a> width、height</h4><ul><li>必须为非负数</li><li>像素单位 px</li></ul><p></p><h4 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h4><p>只有 log，不再展开讲了</p><h4 id="orientation" tabindex="-1"><a class="header-anchor" href="#orientation" aria-hidden="true">#</a> orientation</h4><ul><li>屏幕的方向</li><li>**默认：**纵向， portrait</li><li>可改横向， landscape</li></ul><p></p><h4 id="preset" tabindex="-1"><a class="header-anchor" href="#preset" aria-hidden="true">#</a> preset</h4><p>预设值，Cypress 提供了以下的预设值</p><table><thead><tr><th><strong>预设值</strong></th><th><strong>宽度</strong></th><th><strong>高度</strong></th></tr></thead><tbody><tr><td>ipad-2</td><td>768</td><td>1024</td></tr><tr><td>ipad-mini</td><td>768</td><td>1024</td></tr><tr><td>iphone-3</td><td>320</td><td>480</td></tr><tr><td>iphone-4</td><td>320</td><td>480</td></tr><tr><td>iphone-5</td><td>320</td><td>568</td></tr><tr><td>iphone-6</td><td>375</td><td>667</td></tr><tr><td>iphone-6+</td><td>414</td><td>736</td></tr><tr><td>iphone-x</td><td>375</td><td>812</td></tr><tr><td>iphone-xr</td><td>414</td><td>896</td></tr><tr><td>macbook-11</td><td>1366</td><td>768</td></tr><tr><td>macbook-13</td><td>1280</td><td>800</td></tr><tr><td>macbook-15</td><td>1440</td><td>900</td></tr><tr><td>samsung-note9</td><td>414</td><td>846</td></tr><tr><td>samsung-s10</td><td>360</td><td>760</td></tr></tbody></table><p></p><h2 id="正确格式" tabindex="-1"><a class="header-anchor" href="#正确格式" aria-hidden="true">#</a> 正确格式</h2><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622093308296-283791512.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="重要事项" tabindex="-1"><a class="header-anchor" href="#重要事项" aria-hidden="true">#</a> 重要事项</h2><h4 id="独立命令" tabindex="-1"><a class="header-anchor" href="#独立命令" aria-hidden="true">#</a> 独立命令</h4><p>cy.viewport() 后面不能再链接其他命令</p><h4 id="自动缩放" tabindex="-1"><a class="header-anchor" href="#自动缩放" aria-hidden="true">#</a> 自动缩放</h4><ul><li>默认情况下，如果屏幕不够大，无法显示应用程序所有像素，则 Cypress 会<strong>将应用程序缩放并居中</strong>，以适应 Cypress Test Runner</li><li>缩放应用程序<strong>不会影响</strong>应用程序的任何计算或行为</li><li>**自动缩放好处：**无论屏幕大小如何，测试都始终通过或失败；测试最终在 CI 中运行，因此无论 Cypress 在什么计算机上运行，所有 viewports 都将相同</li></ul><p></p><h3 id="cypress-config" tabindex="-1"><a class="header-anchor" href="#cypress-config" aria-hidden="true">#</a> Cypress.config()</h3>`,30),l=t("br",null,null,-1),h=t("img",{src:"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622093304295-676238682.png",alt:"",loading:"lazy"},null,-1),u=t("br",null,null,-1),g=t("br",null,null,-1),_=t("strong",null,"结尾",-1),b=t("br",null,null,-1),f={href:"https://cloud.tencent.com/developer/support-plan?invite_code=12vd92hxgwgj1",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/poloyy/p/13174388.html",target:"_blank",rel:"noopener noreferrer"};function v(k,x){const a=d("ExternalLinkIcon");return i(),o("div",null,[c,t("p",null,[n("也可以通过此命令来设置全局 viewport 宽高"),l,h,u,n("  "),g,_,b,n(" 我的博客即将同步至腾讯云+社区，邀请大家一同入驻："),t("a",f,[n("https://cloud.tencent.com/developer/support-plan?invite_code=12vd92hxgwgj1"),e(a)])]),t("blockquote",null,[t("p",null,[t("a",m,[n("https://www.cnblogs.com/poloyy/p/13174388.html"),e(a)])])])])}const C=s(p,[["render",v],["__file","Cypress系列（40）--viewport()-命令详解.html.vue"]]);export{C as default};
