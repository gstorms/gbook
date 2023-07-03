import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as n,c as t,a,b as o,d as h,f as s}from"./app-3f278ba4.js";const l={},d=s('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><ul><li>在做自动化测试中，<strong>跳过执行</strong>某些测试用例，或<strong>只运行某些指定</strong>的测试用例，这种情况是很常见的</li><li>Cypress 中也提供了这种功能</li></ul><p></p><h2 id="跳过执行测试套件或测试用例" tabindex="-1"><a class="header-anchor" href="#跳过执行测试套件或测试用例" aria-hidden="true">#</a> 跳过执行测试套件或测试用例</h2><p>通过 .skip() 可以完成，简洁明了</p><h3 id="跳过执行测试套件的栗子" tabindex="-1"><a class="header-anchor" href="#跳过执行测试套件的栗子" aria-hidden="true">#</a> 跳过执行测试套件的栗子</h3><h4 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h4><p>通过 describe.skip() 或者 context.skip() 来跳过不需要执行的测试套件</p><h4 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603155851179-1047663944.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603160031483-928919485.png" alt="" loading="lazy"><br> 可以看到，只有第二个测试套件里面的第一个 it() 执行了，其他两个 it() 均标记为未执行<img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603160237788-580772982.png" alt="" loading="lazy"></p><h3 id="跳过执行测试用例的栗子" tabindex="-1"><a class="header-anchor" href="#跳过执行测试用例的栗子" aria-hidden="true">#</a> 跳过执行测试用例的栗子</h3><h4 id="知识点-1" tabindex="-1"><a class="header-anchor" href="#知识点-1" aria-hidden="true">#</a> 知识点</h4><p>通过 it.skip()  来跳过不需要执行的测试用例</p><h4 id="测试代码-1" tabindex="-1"><a class="header-anchor" href="#测试代码-1" aria-hidden="true">#</a> 测试代码</h4><p>这里我们结合 beforeEach() ，看看对跳过执行的用例会不会也生效<br><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603160734520-2111506811.png" alt="" loading="lazy"></p><h4 id="测试结果-1" tabindex="-1"><a class="header-anchor" href="#测试结果-1" aria-hidden="true">#</a> 测试结果</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603161035655-1898471637.png" alt="" loading="lazy"><br>  可以看到，跳过执行的测试用例是不会执行前置操作或后置操作的</p><h2 id="指定执行测试套件或测试用例" tabindex="-1"><a class="header-anchor" href="#指定执行测试套件或测试用例" aria-hidden="true">#</a> 指定执行测试套件或测试用例</h2><p>通过 .ony()  可以完成，简洁明了<br><strong>重点：<strong>当存在 .only() 指定某个测试套件或测试用例时，只有这个测试套件或测试用例</strong>会被执行</strong>，其他<strong>未加</strong> .only() 的测试套件或测试用例<strong>都不会执行</strong></p><h3 id="指定执行测试套件的栗子" tabindex="-1"><a class="header-anchor" href="#指定执行测试套件的栗子" aria-hidden="true">#</a> 指定执行测试套件的栗子</h3><h4 id="知识点-2" tabindex="-1"><a class="header-anchor" href="#知识点-2" aria-hidden="true">#</a> 知识点</h4><p>通过 describe.only() 或者 context.only() 来指定需要执行的测试套件</p><h4 id="测试代码-2" tabindex="-1"><a class="header-anchor" href="#测试代码-2" aria-hidden="true">#</a> 测试代码</h4><ul><li>结合 it.skip() 测试一下效果</li><li>然后在第二个 describe （没有添加 .only() ）里面的 context 测试套件添加 .only()</li></ul><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603175949907-1105268135.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试结果-2" tabindex="-1"><a class="header-anchor" href="#测试结果-2" aria-hidden="true">#</a> 测试结果</h4><p>这里 Cypress 的 Test  Runner显示的有点问题，我们来看 headless 模式下的运行情况<br><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603175956814-1454432379.png" alt="" loading="lazy"></p><ul><li>添加了 .only() 的子套件，即使父套件没有添加，它也会执行</li><li>添加了 .only() 的套件，该套件下<strong>所有测试用例默认都会执行（即使不加 .only() ）</strong>，除非加了 .skip() ，不过会处于 pending （待定）状态【我也不知道为啥...】</li></ul><p></p><h3 id="指定执行测试用例的栗子" tabindex="-1"><a class="header-anchor" href="#指定执行测试用例的栗子" aria-hidden="true">#</a> 指定执行测试用例的栗子</h3><h4 id="知识点-3" tabindex="-1"><a class="header-anchor" href="#知识点-3" aria-hidden="true">#</a> 知识点</h4><p>通过 it.only()  来指定需要执行的测试用例</p><h4 id="测试代码-3" tabindex="-1"><a class="header-anchor" href="#测试代码-3" aria-hidden="true">#</a> 测试代码</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603202441905-1979688325.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试结果-3" tabindex="-1"><a class="header-anchor" href="#测试结果-3" aria-hidden="true">#</a> 测试结果</h4><p><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603202454703-209700583.png" alt="" loading="lazy"><br>  <br><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603202456256-1460459760.png" alt="" loading="lazy"></p><ul><li>如果当前测试套件下有 it.only() ，那么即使存在测试套件添加了 .only() ，该测试套件<strong>也不会执行</strong>（如上面的：该套件不会运行）</li><li>同个测试套件系啊有多个 it.only() 时，都会执行（有些地方可能会说只执行最后一个）</li></ul><p></p>',40),c={href:"https://www.cnblogs.com/poloyy/p/13039624.html",target:"_blank",rel:"noopener noreferrer"};function g(p,b){const e=i("ExternalLinkIcon");return n(),t("div",null,[d,a("blockquote",null,[a("p",null,[a("a",c,[o("https://www.cnblogs.com/poloyy/p/13039624.html"),h(e)])])])])}const f=r(l,[["render",g],["__file","Cypress系列（9）--Cypress-编写和组织测试用例篇-之-.skip()-和-.only()-的详细使用.html.vue"]]);export{f as default};
