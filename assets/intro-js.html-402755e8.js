import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as u,c,a as e,d as a,w as s,b as t,f as o}from"./app-3f278ba4.js";const p={},g=e("p",null,"Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.",-1),m=e("p",null,[e("strong",null,"You will learn")],-1),w=e("h2",{id:"installing-playwright",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-playwright","aria-hidden":"true"},"#"),t(" Installing Playwright")],-1),b=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),t(` init playwright@latest
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),t(` create playwright
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),t(` dlx create-playwright
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),v=o(`<p>Run the install command and select the following to get started:</p><ul><li>Choose between TypeScript or JavaScript (default is TypeScript)</li><li>Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)</li><li>Add a GitHub Actions workflow to easily run tests on CI</li><li>Install Playwright browsers (default is true)</li></ul><h2 id="what-s-installed" tabindex="-1"><a class="header-anchor" href="#what-s-installed" aria-hidden="true">#</a> What&#39;s Installed</h2><p>Playwright will download the browsers needed as well as create the following files.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>playwright.config.ts
package.json
package-lock.json
tests/
  example.spec.ts
tests-examples/
  demo-todo-app.spec.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),_=e("code",null,"package.json",-1),x=e("p",null,[t("The "),e("code",null,"tests"),t(" folder contains a basic example test to help you get started with testing. For a more detailed example check out the "),e("code",null,"tests-examples"),t(" folder which contains tests written to test a todo app.")],-1),k=e("h2",{id:"running-the-example-test",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-the-example-test","aria-hidden":"true"},"#"),t(" Running the Example Test")],-1),T=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx playwright <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),j=e("h2",{id:"html-test-reports",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#html-test-reports","aria-hidden":"true"},"#"),t(" HTML Test Reports")],-1),A=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx playwright show-report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img width="1392" alt="HTML Reporter" src="https://user-images.githubusercontent.com/13063165/212743312-edf1e8ed-3fc2-48aa-9c93-24ae3e36504d.png"><h2 id="what-s-next" tabindex="-1"><a class="header-anchor" href="#what-s-next" aria-hidden="true">#</a> What&#39;s next</h2>`,3);function R(C,H){const n=r("RouterLink"),d=r("Tabs");return u(),c("div",null,[g,m,e("ul",null,[e("li",null,[a(n,{to:"/book/playwright/intro-js.html#installing-playwright"},{default:s(()=>[t("How to install Playwright")]),_:1})]),e("li",null,[a(n,{to:"/book/playwright/intro-js.html#whats-installed"},{default:s(()=>[t("What's Installed")]),_:1})]),e("li",null,[a(n,{to:"/book/playwright/intro-js.html#running-the-example-test"},{default:s(()=>[t("How to run the example test")]),_:1})]),e("li",null,[a(n,{to:"/book/playwright/intro-js.html#html-test-reports"},{default:s(()=>[t("How to open the HTML test report")]),_:1})])]),w,e("p",null,[t("Get started by installing Playwright using npm or yarn. Alternatively you can also get started and run your tests using the "),a(n,{to:"/book/playwright/getting-started-vscode.html"},{default:s(()=>[t("VS Code Extension")]),_:1}),t(".")]),a(d,{id:"34",data:[{id:"npm"},{id:"yarn"},{id:"pnpm"}]},{title0:s(({value:l,isActive:i})=>[t("npm")]),title1:s(({value:l,isActive:i})=>[t("yarn")]),title2:s(({value:l,isActive:i})=>[t("pnpm")]),tab0:s(({value:l,isActive:i})=>[b]),tab1:s(({value:l,isActive:i})=>[f]),tab2:s(({value:l,isActive:i})=>[y]),_:1}),v,e("p",null,[t("The "),a(n,{to:"/book/playwright/test-configuration.html"},{default:s(()=>[t("playwright.config")]),_:1}),t(" is where you can add configuration for Playwright including modifying which browsers you would like to run Playwright on. If you are running tests inside an already existing project then dependencies will be added directly to your "),_,t(".")]),x,k,e("p",null,[t("By default tests will be run on all 3 browsers, chromium, firefox and webkit using 3 workers. This can be configured in the "),a(n,{to:"/book/playwright/test-configuration.html"},{default:s(()=>[t("playwright.config file")]),_:1}),t(". Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal.")]),T,e("p",null,[t("See our doc on "),a(n,{to:"/book/playwright/running-tests-js.html"},{default:s(()=>[t("Running Tests")]),_:1}),t(" to learn more about running tests in headed mode, running multiple tests, running specific tests etc.")]),j,e("p",null,[t("Once your test has finished running a "),a(n,{to:"/book/playwright/test-reporters.html#html-reporter"},{default:s(()=>[t("HTML Reporter")]),_:1}),t(" will have been created which shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. You can click on each test and explore the test's errors as well as each step of the test. By default, the HTML report is opened automatically if some of the tests failed.")]),A,e("ul",null,[e("li",null,[a(n,{to:"/book/playwright/writing-tests-js.html"},{default:s(()=>[t("Write tests using web first assertions, page fixtures and locators")]),_:1})]),e("li",null,[a(n,{to:"/book/playwright/running-tests-js.html"},{default:s(()=>[t("Run single test, multiple tests, headed mode")]),_:1})]),e("li",null,[a(n,{to:"/book/playwright/codegen-intro.html"},{default:s(()=>[t("Generate tests with Codegen")]),_:1})]),e("li",null,[a(n,{to:"/book/playwright/trace-viewer-intro.html"},{default:s(()=>[t("See a trace of your tests")]),_:1})])])])}const L=h(p,[["render",R],["__file","intro-js.html.vue"]]);export{L as default};