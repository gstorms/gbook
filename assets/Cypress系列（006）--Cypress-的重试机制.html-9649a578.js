import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as l,a as e,b as r,d as s,f as t}from"./app-3f278ba4.js";const h={},c=t('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>重试（Retry-ability）是 Cypress 的核心概念之一，有助于我们写出更加健壮的测试</p><h2 id="命令和断言" tabindex="-1"><a class="header-anchor" href="#命令和断言" aria-hidden="true">#</a> 命令和断言</h2><p>Cypress 测试中经常被调用的两种类型，仍以前面说到的 testLogin.js 为栗子<br><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200601191630451-2133069584.png" alt="" loading="lazy"></p><h4 id="最后的断言解析" tabindex="-1"><a class="header-anchor" href="#最后的断言解析" aria-hidden="true">#</a> 最后的断言解析</h4><p>检查标签为 h1 的元素是否包含 jane.lane</p><h4 id="断言的一般步骤" tabindex="-1"><a class="header-anchor" href="#断言的一般步骤" aria-hidden="true">#</a> 断言的一般步骤</h4><ol><li>用 cy.get() 查询应用程序的DOM，找到元素</li><li>针对元素或元素列表进行<strong>断言尝试</strong> ，我们示例中为 .should(&quot;contain&quot;, &quot;jane.lane&quot;)</li></ol><p></p><h4 id="关于实际工作中的灵魂拷问" tabindex="-1"><a class="header-anchor" href="#关于实际工作中的灵魂拷问" aria-hidden="true">#</a> 关于实际工作中的灵魂拷问</h4><p>现在的 web 应用基本都是异步的，如果出现以下情况又应该怎么处理呢？</p><ol><li>如果断言发生时，应用程序<strong>尚未更新DOM</strong>怎么办？</li><li>如果断言发生时，应用程序<strong>正在等待其后端响应</strong>，而导致页面暂无结果怎么办？</li><li>如果断言发生时，应用程序<strong>正在进行密集计算</strong>，而导致页面未及时更新怎么办？</li></ol><p>上述情况在测试中经常会发生，一般处理方法是在断言前价格固定等待时间（或像 selenium 一样显式、隐式等待），但仍有可能会发生测试失败</p><h4 id="cypress-如何优美的解决上述问题" tabindex="-1"><a class="header-anchor" href="#cypress-如何优美的解决上述问题" aria-hidden="true">#</a> Cypress 如何优美的解决上述问题</h4><ol><li>cy.get() 命令之后的<strong>断言通过</strong>，则该命令成功执行完成</li><li>cy.get() 命令之后的<strong>断言失败</strong>，则 cy.get() 命令会自动<strong>重新查询 web 应用程序的 DOM 树</strong>，然后 Cypress 将再次尝试对 cy.get() 返回的元素进行断言</li><li>如果断言仍然失败， cy.get() 仍然会重新查询 DOM 树....以此类推</li><li>直到断言成功 或 cy.get() 命令超时</li></ol><p><strong>总结</strong></p><ul><li>其实很像selenium 的显式等待，只不过 Cypress 是全局的，不用针对元素去单独识别</li><li>Cypress 这种自动重试机制避免了在测试代码中编写硬编码等待（强制等待），使测试代码更加健壮</li></ul><p></p><h2 id="多重断言" tabindex="-1"><a class="header-anchor" href="#多重断言" aria-hidden="true">#</a> 多重断言</h2><ul><li>在日常测试中，有时候需要多重断言，即获取元素后跟多个断言</li><li>在多重断言中，Cypress 将<strong>按顺序进行断言</strong>，即当第一个断言通过后，会进行第二个断言，通过后进行第三个断言...以此类推</li></ul><p></p><h4 id="列表的栗子" tabindex="-1"><a class="header-anchor" href="#列表的栗子" aria-hidden="true">#</a> 列表的栗子</h4><p><strong>需求</strong></p><ul><li>假设一个下拉列表，存在两个选项，第一个选项是“iTesting”，第二个选项是“testerTalk”</li><li>我们需要验证<strong>两个选项的存在，并且顺序正确</strong>，代码片段如下</li></ul><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200601201613595-183496488.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="代码解析" tabindex="-1"><a class="header-anchor" href="#代码解析" aria-hidden="true">#</a> <strong>代码解析</strong></h4><ol><li>总共有三个断言：一个 should() ，两个 expect()</li><li>and() 断言实际上是 should() 断言的别名，它是 should() 的自定义回调断言，其中包含两个 expect() 断言</li><li>在测试执行过程中，如果第二个断言失败了，那第三个断言永远不会执行</li><li>如果导致第二个断言失败的原因被找到且修复了，且此时<strong>整个命令还没有超时</strong>，则在进行第三个断言时，还会再次重试第一、第二个断言</li></ol><p></p><h2 id="重试-retry-ability-的条件" tabindex="-1"><a class="header-anchor" href="#重试-retry-ability-的条件" aria-hidden="true">#</a> 重试（Retry-ability）的条件</h2><h4 id="前言-1" tabindex="-1"><a class="header-anchor" href="#前言-1" aria-hidden="true">#</a> 前言</h4>',30),d=e("li",null,[r("Cypress 并不会重试所有命令，当命令可能"),e("strong",null,"改变被测应用程序的状态"),r("时，该命令将不会重试（如： click() ，毕竟要点击）")],-1),p=e("li",null,[r("Cypress 仅会重试那些"),e("strong",null,"查询 DOM 的命令"),r("： cy.get() 、 find() 、 contains() 等")],-1),g=e("strong",null,"Assertions",-1),u={href:"https://docs.cypress.io/zh-cn/guides/references/assertions.html#Chai",target:"_blank",rel:"noopener noreferrer"},y=t('<p></p><h4 id="常用的可重试命令" tabindex="-1"><a class="header-anchor" href="#常用的可重试命令" aria-hidden="true">#</a> 常用的可重试命令</h4><figure><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200601205540074-1645040304.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="重点啦" tabindex="-1"><a class="header-anchor" href="#重点啦" aria-hidden="true">#</a> 重点啦！</h4><p>重试的超时时间默认是 4秒，对应的配置项是： defaultCommondTimeout ，如果想改重试的超时时间，在 cypress.json 文件改对应的字段值即可</p>',5),_={href:"https://www.cnblogs.com/poloyy/p/13027421.html",target:"_blank",rel:"noopener noreferrer"};function f(b,m){const a=n("ExternalLinkIcon");return o(),l("div",null,[c,e("ul",null,[d,p,e("li",null,[r("可以通过官方文档 "),g,r(" 部分来检查是否重试了特定命令："),e("a",u,[r("https://docs.cypress.io/zh-cn/guides/references/assertions.html#Chai"),s(a)])])]),y,e("blockquote",null,[e("p",null,[e("a",_,[r("https://www.cnblogs.com/poloyy/p/13027421.html"),s(a)])])])])}const k=i(h,[["render",f],["__file","Cypress系列（006）--Cypress-的重试机制.html.vue"]]);export{k as default};
