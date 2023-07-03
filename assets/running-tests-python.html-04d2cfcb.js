import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c,a as s,b as e,d as a,w as t,f as l}from"./app-207e7d61.js";const u={},p=s("p",null,[e("You can run a single test, a set of tests or all tests. Tests can be run on one browser or multiple browsers. By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal. If you prefer you can run your tests in headed mode by using the "),s("code",null,"--headed"),e(" flag.")],-1),h=l(`<li><p>Running tests on Chromium</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Running a single test file</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest test_login.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Run a set of test files</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest tests/todo-page/ tests/landing-page/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Run the test with the function name</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest <span class="token parameter variable">-k</span> <span class="token string">&quot;test_add_a_todo_item&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Running tests in headed mode</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest <span class="token parameter variable">--headed</span> test_login.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Running Tests on specific browsers</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest test_login.py <span class="token parameter variable">--browser</span> webkit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Running Tests on multiple browsers</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest test_login.py <span class="token parameter variable">--browser</span> webkit <span class="token parameter variable">--browser</span> firefox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,7),g=l(`<p>Running Tests in parallel</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pytest <span class="token parameter variable">--numprocesses</span> auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),b=s("code",null,"pytest-xdist",-1),m={href:"https://docs.pytest.org/en/stable/usage.html",target:"_blank",rel:"noopener noreferrer"},v=s("h2",{id:"running-tests",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#running-tests","aria-hidden":"true"},"#"),e(" Running Tests")],-1),w={href:"https://code.visualstudio.com/docs/python/python-tutorial",target:"_blank",rel:"noopener noreferrer"},y=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">PWDEBUG</span><span class="token operator">=</span><span class="token number">1</span> pytest <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code><span class="token command"><span class="token keyword">set</span> <span class="token variable">PWDEBUG</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="token command"><span class="token keyword">pytest</span> <span class="token parameter attr-name">-s</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token variable">$env</span>:PWDEBUG=1
pytest <span class="token operator">-</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img width="712" alt="Playwright Inspector" src="https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png">`,4),_=s("h2",{id:"what-s-next",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#what-s-next","aria-hidden":"true"},"#"),e(" What's Next")],-1);function k(f,x){const n=r("RouterLink"),i=r("ExternalLinkIcon");return d(),c("div",null,[p,s("ul",null,[h,s("li",null,[g,s("p",null,[e("(This assumes "),b,e(" is installed. For more information see "),a(n,{to:"/book/playwright/test-runners.html#parallelism-running-multiple-tests-at-once"},{default:t(()=>[e("here")]),_:1}),e(".)")])])]),s("p",null,[e("For more information see "),a(n,{to:"/book/playwright/test-runners.html"},{default:t(()=>[e("Playwright Pytest usage")]),_:1}),e(" or the Pytest documentation for "),s("a",m,[e("general CLI usage"),a(i)]),e(".")]),v,s("p",null,[e("Since Playwright runs in Python, you can debug it with your debugger of choice with e.g. the "),s("a",w,[e("Python extension"),a(i)]),e(" in Visual Studio Code. Playwright comes with the Playwright Inspector which allows you to step through Playwright API calls, see their debug logs and explore "),a(n,{to:"/book/playwright/locators.html"},{default:t(()=>[e("locators")]),_:1}),e(".")]),y,s("p",null,[e("Check out our "),a(n,{to:"/book/playwright/debug.html"},{default:t(()=>[e("debugging guide")]),_:1}),e(" to learn more about the "),a(n,{to:"/book/playwright/debug.html#playwright-inspector"},{default:t(()=>[e("Playwright Inspector")]),_:1}),e(" as well as debugging with "),a(n,{to:"/book/playwright/debug.html#browser-developer-tools"},{default:t(()=>[e("Browser Developer tools")]),_:1}),e(".")]),_,s("ul",null,[s("li",null,[a(n,{to:"/book/playwright/codegen.html"},{default:t(()=>[e("Generate tests with Codegen")]),_:1})]),s("li",null,[a(n,{to:"/book/playwright/trace-viewer-intro.html"},{default:t(()=>[e("See a trace of your tests")]),_:1})])])])}const B=o(u,[["render",k],["__file","running-tests-python.html.vue"]]);export{B as default};
