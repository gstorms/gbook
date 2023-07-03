import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as u,a as s,b as n,d as a,w as e,f as o}from"./app-207e7d61.js";const r={},d=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> Page<span class="token punctuation">,</span> expect


<span class="token keyword">def</span> <span class="token function">test_homepage_has_Playwright_in_title_and_get_started_link_linking_to_the_intro_page</span><span class="token punctuation">(</span>page<span class="token punctuation">:</span> Page<span class="token punctuation">)</span><span class="token punctuation">:</span>
    page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;https://playwright.dev/&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># Expect a title &quot;to contain&quot; a substring.</span>
    expect<span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_title<span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">&quot;Playwright&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># create a locator</span>
    get_started <span class="token operator">=</span> page<span class="token punctuation">.</span>get_by_role<span class="token punctuation">(</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&quot;Get started&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># Expect an attribute &quot;to be strictly equal&quot; to the value.</span>
    expect<span class="token punctuation">(</span>get_started<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_attribute<span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/docs/intro&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># Click the get started link.</span>
    get_started<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># Expects the URL to contain intro.</span>
    expect<span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_url<span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">&quot;.*intro&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="assertions" tabindex="-1"><a class="header-anchor" href="#assertions" aria-hidden="true">#</a> Assertions</h3>`,2),k=s("code",null,"expect",-1),h=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> expect

expect<span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_title<span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">&quot;Playwright&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="locators" tabindex="-1"><a class="header-anchor" href="#locators" aria-hidden="true">#</a> Locators</h3>`,2),v=s("code",null,".click",-1),m=s("code",null,".fill",-1),g=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> expect

get_started <span class="token operator">=</span> page<span class="token punctuation">.</span>get_by_role<span class="token punctuation">(</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&quot;Get started&quot;</span><span class="token punctuation">)</span>

expect<span class="token punctuation">(</span>get_started<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_attribute<span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/docs/installation&quot;</span><span class="token punctuation">)</span>
get_started<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test-isolation" tabindex="-1"><a class="header-anchor" href="#test-isolation" aria-hidden="true">#</a> Test Isolation</h3>`,2),b=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> Page

<span class="token keyword">def</span> <span class="token function">test_basic_test</span><span class="token punctuation">(</span>page<span class="token punctuation">:</span> Page<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token comment"># ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="using-test-hooks" tabindex="-1"><a class="header-anchor" href="#using-test-hooks" aria-hidden="true">#</a> Using Test Hooks</h3>`,2),_={href:"https://docs.pytest.org/en/6.2.x/fixture.html#autouse-fixtures-fixtures-you-don-t-have-to-request",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"function",-1),w=s("code",null,"module",-1),f=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pytest
<span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> Page


<span class="token decorator annotation punctuation">@pytest<span class="token punctuation">.</span>fixture</span><span class="token punctuation">(</span>scope<span class="token operator">=</span><span class="token string">&quot;function&quot;</span><span class="token punctuation">,</span> autouse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">before_each_after_each</span><span class="token punctuation">(</span>page<span class="token punctuation">:</span> Page<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;beforeEach&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># Go to the starting url before each test.</span>
    page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;https://playwright.dev/&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;afterEach&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">test_main_navigation</span><span class="token punctuation">(</span>page<span class="token punctuation">:</span> Page<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Assertions use the expect API.</span>
    expect<span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_url<span class="token punctuation">(</span><span class="token string">&quot;https://playwright.dev/&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="what-s-next" tabindex="-1"><a class="header-anchor" href="#what-s-next" aria-hidden="true">#</a> What&#39;s Next</h2>`,2);function x(q,P){const t=i("RouterLink"),p=i("ExternalLinkIcon");return l(),u("div",null,[s("p",null,[n("Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met. Playwright comes with "),a(t,{to:"/book/playwright/actionability.html"},{default:e(()=>[n("auto-wait")]),_:1}),n(" built in meaning it waits for elements to be actionable prior to performing actions. Playwright provides an "),a(t,{to:"/book/playwright/test-assertions.html"},{default:e(()=>[n("expect")]),_:1}),n(" function to write assertions.")]),s("p",null,[n("Take a look at the example test below to see how to write a test using "),a(t,{to:"/book/playwright/locators.html"},{default:e(()=>[n("locators")]),_:1}),n(" and web first assertions.")]),d,s("p",null,[n("Playwright provides the "),a(t,{to:"/book/playwright/test-assertions.html"},{default:e(()=>[k]),_:1}),n(" function which will wait until the expected condition is met.")]),h,s("p",null,[a(t,{to:"/book/playwright/locators.html"},{default:e(()=>[n("Locators")]),_:1}),n(" are the central piece of Playwright's auto-waiting and retry-ability. Locators represent a way to find element(s) on the page at any moment and are used to perform actions on elements such as "),v,n(),m,n(" etc.")]),g,s("p",null,[n("The Playwright Pytest plugin is based on the concept of test fixtures such as the "),a(t,{to:"/book/playwright/test-runners.html"},{default:e(()=>[n("built in page fixture")]),_:1}),n(", which is passed into your test. Pages are isolated between tests due to the Browser Context, which is equivalent to a brand new browser profile, where every test gets a fresh environment, even when multiple tests run in a single Browser.")]),b,s("p",null,[n("You can use various "),s("a",_,[n("fixtures"),a(p)]),n(" to execute code before or after your tests and to share objects between them. A "),y,n(" scoped fixture e.g. with autouse behaves like a beforeEach/afterEach. And a "),w,n(" scoped fixture with autouse behaves like a beforeAll/afterAll which runs before all and after all the tests.")]),f,s("ul",null,[s("li",null,[a(t,{to:"/book/playwright/running-tests-python.html"},{default:e(()=>[n("Run single test, multiple tests, headed mode")]),_:1})]),s("li",null,[a(t,{to:"/book/playwright/codegen.html"},{default:e(()=>[n("Generate tests with Codegen")]),_:1})]),s("li",null,[a(t,{to:"/book/playwright/trace-viewer-intro.html"},{default:e(()=>[n("See a trace of your tests")]),_:1})])])])}const A=c(r,[["render",x],["__file","writing-tests-python.html.vue"]]);export{A as default};
