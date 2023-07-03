import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as n,a as e,b as t,d as l,f as h}from"./app-3f278ba4.js";const o={},d=h('<h2 id="默认文件结构" tabindex="-1"><a class="header-anchor" href="#默认文件结构" aria-hidden="true">#</a> 默认文件结构</h2><p>在使用 cypress open 命令首次打开 Cypress，Cypress 会自动进行初始化配置并<strong>生成一个默认的文件夹结构</strong>，如下图<br><img src="https://img2020.cnblogs.com/blog/1896874/202005/1896874-20200531194547131-932676163.png" alt="" loading="lazy"></p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>这里先介绍文件结构中每种文件的作用是啥，后面再具体写代码的栗子</p><h2 id="fixtures-测试夹具" tabindex="-1"><a class="header-anchor" href="#fixtures-测试夹具" aria-hidden="true">#</a> fixtures 测试夹具</h2><h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h4><ul><li>测试夹具通常配合 cy.fixture() 使用</li><li>主要用来<strong>存储</strong>测试用例的<strong>外部静态数据</strong></li><li>fixtures 默认就在 cypress/fixtures 目录下，但也可以配置到另一个目录</li></ul><p></p><h4 id="外部静态数据的详解" tabindex="-1"><a class="header-anchor" href="#外部静态数据的详解" aria-hidden="true">#</a> 外部静态数据的详解</h4><ul><li>测试夹具的静态数据通常存储在 .json 文件中，如自动生成的 examples.json</li><li>静态数据通常是某个<strong>网络请求对应的响应部分</strong>，包括HTTP状态码和返回值，一般是复制过来更改而不是自己手工填写</li></ul><p></p><h4 id="fixtures-的实际应用场景" tabindex="-1"><a class="header-anchor" href="#fixtures-的实际应用场景" aria-hidden="true">#</a> fixtures 的实际应用场景</h4><p>如果你的测试需要对某些<strong>外部接口</strong>进行访问并<strong>依赖它的返回值</strong>，则可以使用测试夹具而无须真正访问这个接口**（有点类似 mock）**</p><h4 id="使用测试夹具的好处" tabindex="-1"><a class="header-anchor" href="#使用测试夹具的好处" aria-hidden="true">#</a> 使用测试夹具的好处</h4><ul><li>消除了对外部功能模块的依赖</li><li>已编写的测试用例可以使用测试夹具<strong>提供的固定返回值</strong>，并且你确切知道这个返回值是你想要的</li><li>因为无须真正地发送网络请求，所以测试更快</li></ul><p></p><h4 id="命令示例" tabindex="-1"><a class="header-anchor" href="#命令示例" aria-hidden="true">#</a> 命令示例</h4><p>要查看 Cypress 中每个命令的示例，可以打开  cypress/integration/examples ，里面都是官方提供的栗子</p><h2 id="test-file-测试文件" tabindex="-1"><a class="header-anchor" href="#test-file-测试文件" aria-hidden="true">#</a> test file 测试文件</h2><h4 id="简介-1" tabindex="-1"><a class="header-anchor" href="#简介-1" aria-hidden="true">#</a> 简介</h4><p>测试文件就是<strong>测试用例</strong>，默认位于 cypress/integration ，但也可以配置到另一个目录</p><h4 id="测试文件格式" tabindex="-1"><a class="header-anchor" href="#测试文件格式" aria-hidden="true">#</a> 测试文件格式</h4><p>所有在 integration 文件下，且文件格式是以下的文件都将被 Cypress 识别为测试文件</p><ul><li>.js ：普通的JavaScript 编写的文件**【最常用啦】**</li><li>.jsx ：带有扩展的 JavaScript 文件，其中可以包含处理 XML 的 ECMAScript</li><li>.coffee ：一套 JavaScript 转译的语言。有更严格的语法</li><li>.cjsx ：CoffeeScript 中的 jsx 文件</li></ul><p>创建好后，Cypress 的 Test  Runner 刷新之后就可以看到对应测试文件了</p><h2 id="plugin-file-插件文件" tabindex="-1"><a class="header-anchor" href="#plugin-file-插件文件" aria-hidden="true">#</a> plugin file 插件文件</h2><h4 id="前言-1" tabindex="-1"><a class="header-anchor" href="#前言-1" aria-hidden="true">#</a> 前言</h4><ul><li>Cypress 独有优点就是<strong>测试代码运行在浏览器之内</strong>，使得 Cypress 跟其他的测试框架相比，有显著的架构优势</li><li>这优点虽然提供了可靠性测试，但也使得和在浏览器之外进行通信更加困难**【痛点：和外部通信困难】**</li></ul><p></p><h4 id="插件文件的诞生" tabindex="-1"><a class="header-anchor" href="#插件文件的诞生" aria-hidden="true">#</a> 插件文件的诞生</h4><ul><li>Cypress 为了解决上述痛点提供了一些现成的插件，使你可以<strong>修改或扩展 Cypress 的内部行为</strong>（如：动态修改配置信息和环境变量等），也可以自定义自己的插件</li><li>默认情况，插件位于 cypress/plugins/index.js 中，但可以配置到另一个目录</li><li>为了方便，每个<strong>测试文件运行之前</strong>，Cypress 都会<strong>自动加载插件文件</strong> cypress/plugins/index.js</li></ul><p></p><h4 id="插件的应用场景" tabindex="-1"><a class="header-anchor" href="#插件的应用场景" aria-hidden="true">#</a> 插件的应用场景</h4><ul><li>动态更改来自 cypress.json，cypress.env.json，CLI或系统环境变量的<strong>已解析配置和环境变量</strong></li><li>修改特定浏览器的启动参数</li><li>将消息直接从测试代码传递到后端</li></ul><p>后面再详解插件在项目中的实际运用</p><h2 id="support-file-支持文件" tabindex="-1"><a class="header-anchor" href="#support-file-支持文件" aria-hidden="true">#</a> support file 支持文件</h2><h4 id="简介-2" tabindex="-1"><a class="header-anchor" href="#简介-2" aria-hidden="true">#</a> 简介</h4><ul><li>支持文件目录是放置可重用配置项，如**底层通用函数或全局默认配置 **</li><li>支持文件默认位于 cypress/support/index.js 中，但可以配置到另一个目录</li><li>为了方便，每个<strong>测试文件运行之前</strong>，Cypress 都会<strong>自动加载支持文件</strong> cypress/support/index.js</li></ul><p></p><h4 id="如何使用支持文件" tabindex="-1"><a class="header-anchor" href="#如何使用支持文件" aria-hidden="true">#</a> 如何使用支持文件</h4><p>只需要在 cypress/support/index.js 文件里添加 beforeEach() 函数即可，如下面例子<br><img src="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200601111945395-1591493126.png" alt="" loading="lazy"><br> 这将能实现每次测试运行前打印出所有的环境变量信息</p>',41),p={href:"https://www.cnblogs.com/poloyy/p/13022249.html",target:"_blank",rel:"noopener noreferrer"};function c(u,g){const r=s("ExternalLinkIcon");return i(),n("div",null,[d,e("blockquote",null,[e("p",null,[e("a",p,[t("https://www.cnblogs.com/poloyy/p/13022249.html"),l(r)])])])])}const _=a(o,[["render",c],["__file","Cypress系列（4）--解析-Cypress-的默认文件结构.html.vue"]]);export{_ as default};
