import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as t,a,b as r,d as o,f as l}from"./app-3f278ba4.js";const c={},d=l(`<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>写入具有指定内容的文件</p><h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> contents<span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> contents<span class="token punctuation">,</span> encoding<span class="token punctuation">)</span>
cy<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> contents<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p><h4 id="filepath" tabindex="-1"><a class="header-anchor" href="#filepath" aria-hidden="true">#</a> filePath</h4><p>项目根目录（包含默认 cypress.json 配置文件的目录）中需要写入的文件的路径</p><h4 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> contents</h4><p>要写入文件的内容，可以是字符串、数组、对象类型</p><h4 id="encoding" tabindex="-1"><a class="header-anchor" href="#encoding" aria-hidden="true">#</a> encoding</h4><p>写入时需要使用的编码</p><ul><li>ascii</li><li>base64</li><li>binary</li><li>hex</li><li>latin1</li><li><strong>utf8</strong></li><li><strong>utf-8</strong></li><li>ucs2</li><li>ucs-2</li><li>utf16le</li><li>utf-16le</li></ul><p></p><h4 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h4><ul><li>**log：**是否将命令显示到命令日志中，默认 true</li><li>**flag：**文件系统标志，默认 <strong>w</strong></li><li>**encoding：**写入文件时要使用的编码，默认 <strong>utf8</strong></li></ul><p></p><h4 id="flag-文件系统标志有哪些" tabindex="-1"><a class="header-anchor" href="#flag-文件系统标志有哪些" aria-hidden="true">#</a> flag 文件系统标志有哪些？</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128103732840-1525623897.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="正确用法" tabindex="-1"><a class="header-anchor" href="#正确用法" aria-hidden="true">#</a> 正确用法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cy<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&#39;menu.json&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="命令返回结果" tabindex="-1"><a class="header-anchor" href="#命令返回结果" aria-hidden="true">#</a> 命令返回结果</h2><ul><li>contents 参数值</li><li>但是我发现如果打印该命令返回结果会是一个 null</li></ul><p></p><h2 id="写入-txt-文件的栗子" tabindex="-1"><a class="header-anchor" href="#写入-txt-文件的栗子" aria-hidden="true">#</a> 写入 txt 文件的栗子</h2><h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128105021449-907451818.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果" aria-hidden="true">#</a> 运行结果</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128105026831-1466473393.png" alt="" loading="lazy"><br> 记住默认是 w 模式哦，是会把文件原来的内容覆盖的，若需要追加的话使用 a 哦</p><h2 id="写入-json-文件的栗子一" tabindex="-1"><a class="header-anchor" href="#写入-json-文件的栗子一" aria-hidden="true">#</a> 写入 json 文件的栗子一</h2><h4 id="测试代码-1" tabindex="-1"><a class="header-anchor" href="#测试代码-1" aria-hidden="true">#</a> 测试代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128105911995-1499059451.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="运行结果-1" tabindex="-1"><a class="header-anchor" href="#运行结果-1" aria-hidden="true">#</a> 运行结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128105920109-1038819744.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="写入-json-文件的栗子二" tabindex="-1"><a class="header-anchor" href="#写入-json-文件的栗子二" aria-hidden="true">#</a> 写入 json 文件的栗子二</h2><h4 id="测试代码-2" tabindex="-1"><a class="header-anchor" href="#测试代码-2" aria-hidden="true">#</a> 测试代码</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128105948879-869228096.png" alt="" loading="lazy"><br> 将 HTTP 请求的响应内容保存写入到本地文件中</p><h4 id="运行结果-2" tabindex="-1"><a class="header-anchor" href="#运行结果-2" aria-hidden="true">#</a> 运行结果</h4><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128110004162-1623625001.png" alt="" loading="lazy"></h4><p></p><h2 id="使用-a-模式的栗子" tabindex="-1"><a class="header-anchor" href="#使用-a-模式的栗子" aria-hidden="true">#</a> 使用 a+ 模式的栗子</h2><h4 id="测试代码-3" tabindex="-1"><a class="header-anchor" href="#测试代码-3" aria-hidden="true">#</a> 测试代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128112825960-1072553469.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="运行结果-3" tabindex="-1"><a class="header-anchor" href="#运行结果-3" aria-hidden="true">#</a> 运行结果</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201128112831389-863695901.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,45),h={href:"https://www.cnblogs.com/poloyy/p/14050772.html",target:"_blank",rel:"noopener noreferrer"};function p(u,g){const n=i("ExternalLinkIcon");return s(),t("div",null,[d,a("blockquote",null,[a("p",null,[a("a",h,[r("https://www.cnblogs.com/poloyy/p/14050772.html"),o(n)])])])])}const m=e(c,[["render",p],["__file","Cypress系列（95）--writeFile()-命令详解.html.vue"]]);export{m as default};
