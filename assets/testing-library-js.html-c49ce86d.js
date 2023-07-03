import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,e as r,a as n,b as s,d as a,w as p,f as u}from"./app-207e7d61.js";const d={},k=n("h2",{id:"migration-principles",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#migration-principles","aria-hidden":"true"},"#"),s(" Migration principles")],-1),h=n("a",{href:"./test-components"},"Experimental Component Testing",-1),m={href:"https://testing-library.com/docs/dom-testing-library/intro/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://testing-library.com/docs/react-testing-library/intro/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://testing-library.com/docs/vue-testing-library/intro",target:"_blank",rel:"noopener noreferrer"},v={href:"https://testing-library.com/docs/svelte-testing-library/intro",target:"_blank",rel:"noopener noreferrer"},f=n("div",{class:"hint-container note"},[n("p",{class:"hint-container-title"},"注"),n("p",null,[s("If you use DOM Testing Library in the browser (for example, you bundle end-to-end tests with webpack), you can switch directly to Playwright Test. Examples below are focused on component tests, but for end-to-end test you just need to replace "),n("code",null,"await mount"),s(" with "),n("code",null,"await page.goto('http://localhost:3000/')"),s(" to open the page under test.")])],-1),b=n("h2",{id:"cheat-sheet",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cheat-sheet","aria-hidden":"true"},"#"),s(" Cheat Sheet")],-1),w=n("thead",null,[n("tr",null,[n("th",null,"Testing Library"),n("th",null,"Playwright")])],-1),_={href:"https://testing-library.com/docs/queries/about#screen",target:"_blank",rel:"noopener noreferrer"},x=n("td",null,[n("a",{href:"./api/class-page"},"page"),s(" and "),n("a",{href:"./api/class-locator"},"component")],-1),T={href:"https://testing-library.com/docs/queries/about",target:"_blank",rel:"noopener noreferrer"},B=n("td",null,[n("a",{href:"./locators"},"locators")],-1),P={href:"https://testing-library.com/docs/dom-testing-library/api-async",target:"_blank",rel:"noopener noreferrer"},L=n("td",null,[n("a",{href:"./test-assertions"},"assertions")],-1),j={href:"https://testing-library.com/docs/user-event/intro",target:"_blank",rel:"noopener noreferrer"},q=n("td",null,[n("a",{href:"./api/class-locator"},"actions")],-1),R=n("tr",null,[n("td",null,[n("code",null,"await user.click(screen.getByText('Click me'))")]),n("td",null,[n("code",null,"await component.getByText('Click me').click()")])],-1),S=n("tr",null,[n("td",null,[n("code",null,"await user.click(await screen.findByText('Click me'))")]),n("td",null,[n("code",null,"await component.getByText('Click me').click()")])],-1),C=n("tr",null,[n("td",null,[n("code",null,"await user.type(screen.getByLabel('Password'), 'secret')")]),n("td",null,[n("code",null,"await component.getByLabel('Password').fill('secret')")])],-1),E=n("tr",null,[n("td",null,[n("code",null,"expect(screen.getByLabel('Password')).toHaveValue('secret')")]),n("td",null,[n("code",null,"await expect(component.getByLabel('Password')).toHaveValue('secret')")])],-1),V=n("tr",null,[n("td",null,[n("code",null,"screen.findByText('...')")]),n("td",null,[n("code",null,"component.getByText('...')")])],-1),I=n("tr",null,[n("td",null,[n("code",null,"screen.getByTestId('...')")]),n("td",null,[n("code",null,"component.getByTestId('...')")])],-1),F=n("tr",null,[n("td",null,[n("code",null,"screen.queryByPlaceholderText('...')")]),n("td",null,[n("code",null,"component.getByPlaceholder('...')")])],-1),M=n("tr",null,[n("td",null,[n("code",null,"screen.getByRole('button', { pressed: true })")]),n("td",null,[n("code",null,"component.getByRole('button', { pressed: true })")])],-1),W=u(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Testing Library:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@testing-library/react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">&#39;@testing-library/user-event&#39;</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should sign in&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Setup the page.</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> userEvent<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>SignInPage <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Perform actions.</span>
  <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabel</span><span class="token punctuation">(</span><span class="token string">&#39;Username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabel</span><span class="token punctuation">(</span><span class="token string">&#39;Password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;secret&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;Sign in&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Verify signed in state by waiting until &quot;Welcome&quot; message appears.</span>
  <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByText</span><span class="token punctuation">(</span><span class="token string">&#39;Welcome, John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Line-by-line migration to Playwright Test:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@playwright/experimental-ct-react&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should sign in&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page<span class="token punctuation">,</span> mount <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 2</span>
  <span class="token comment">// Setup the page.</span>
  <span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>SignInPage <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>

  <span class="token comment">// Perform actions.</span>
  <span class="token keyword">await</span> component<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;Username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
  <span class="token keyword">await</span> component<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;Password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;secret&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> component<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;Sign in&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Verify signed in state by waiting until &quot;Welcome&quot; message appears.</span>
  <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;Welcome, John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Migration highlights (see inline comments in the Playwright Test code snippet):</p><ol><li>Import everything from <code>@playwright/experimental-ct-react</code> (or -vue, -svelte) for component tests, or from <code>@playwright/test</code> for end-to-end tests.</li><li>Test function is given a <code>page</code> that is isolated from other tests, and <code>mount</code> that renders a component in this page. These are two of the <a href="./api/class-fixtures">useful fixtures</a> in Playwright Test.</li><li>Replace <code>render</code> with <code>mount</code> that returns a <a href="./locators">component locator</a>.</li><li>Use locators created with [<code>method: Locator.locator</code>] or [<code>method: Page.locator</code>] to perform most of the actions.</li><li>Use <a href="./test-assertions">assertions</a> to verify the state.</li></ol><h2 id="migrating-queries" tabindex="-1"><a class="header-anchor" href="#migrating-queries" aria-hidden="true">#</a> Migrating queries</h2><p>All queries like <code>getBy...</code>, <code>findBy...</code>, <code>queryBy...</code> and their multi-element counterparts are replaced with <code>component.getBy...</code> locators. Locators always auto-wait and retry when needed, so you don&#39;t have to worry about choosing the right method. When you want to do a <a href="./locators#lists">list operation</a>, e.g. assert a list of texts, Playwright automatically performs multi-element operations.</p><h2 id="replacing-waitfor" tabindex="-1"><a class="header-anchor" href="#replacing-waitfor" aria-hidden="true">#</a> Replacing <code>waitFor</code></h2><p>Playwright includes <a href="./test-assertions">assertions</a> that automatically wait for the condition, so you don&#39;t usually need an explicit <code>waitFor</code>/<code>waitForElementToBeRemoved</code> call.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Testing Library</span>
<span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;the lion king&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> <span class="token function">waitForElementToBeRemoved</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">queryByText</span><span class="token punctuation">(</span><span class="token string">&#39;the mummy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// Playwright</span>
<span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;the lion king&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;the mummy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeHidden</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you cannot find a suitable assertion, use <a href="./test-assertions#polling"><code>expect.poll</code></a> instead.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> expect<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;https://api.example.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="replacing-within" tabindex="-1"><a class="header-anchor" href="#replacing-within" aria-hidden="true">#</a> Replacing <code>within</code></h2><p>You can create a locator inside another locator with [<code>method: Locator.locator</code>] method.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Testing Library</span>
<span class="token keyword">const</span> messages <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;messages&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> helloMessage <span class="token operator">=</span> <span class="token function">within</span><span class="token punctuation">(</span>messages<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// Playwright</span>
<span class="token keyword">const</span> messages <span class="token operator">=</span> component<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">&#39;id=messages&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> helloMessage <span class="token operator">=</span> messages<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="playwright-test-super-powers" tabindex="-1"><a class="header-anchor" href="#playwright-test-super-powers" aria-hidden="true">#</a> Playwright Test Super Powers</h2><p>Once you&#39;re on Playwright Test, you get a lot!</p><ul><li>Full zero-configuration TypeScript support</li><li>Run tests across <strong>all web engines</strong> (Chrome, Firefox, Safari) on <strong>any popular operating system</strong> (Windows, macOS, Ubuntu)</li><li>Full support for multiple origins, <a href="./api/class-frame">(i)frames</a>, <a href="./pages">tabs and contexts</a></li><li>Run tests in isolation in parallel across multiple browsers</li><li>Built-in test artifact collection: <a href="./test-configuration#record-video">video recording</a>, <a href="./test-configuration#automatic-screenshots">screenshots</a> and <a href="./test-configuration#record-test-trace">playwright traces</a></li></ul><p>You also get all these ✨ awesome tools ✨ that come bundled with Playwright Test:</p>`,21),J=n("li",null,[n("a",{href:"./auth#code-generation"},"Playwright Test Code generation")],-1),N=n("li",null,[n("a",{href:"./trace-viewer"},"Playwright Tracing"),s(" for post-mortem debugging")],-1),O=n("h2",{id:"further-reading",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#further-reading","aria-hidden":"true"},"#"),s(" Further Reading")],-1),U=n("p",null,"Learn more about Playwright Test runner:",-1),A=n("li",null,[n("a",{href:"./intro"},"Getting Started")],-1),D=n("li",null,[n("a",{href:"./test-components"},"Experimental Component Testing")],-1),H=n("li",null,[n("a",{href:"./test-assertions"},"Assertions")],-1),Y=n("li",null,[n("a",{href:"./actionability"},"Auto-waiting")],-1);function z(G,K){const t=o("ExternalLinkIcon"),e=o("RouterLink");return i(),l("div",null,[r(" TOC "),k,n("p",null,[s("This guide describes migration to Playwright's "),h,s(" from "),n("a",m,[s("DOM Testing Library"),a(t)]),s(", "),n("a",g,[s("React Testing Library"),a(t)]),s(", "),n("a",y,[s("Vue Testing Library"),a(t)]),s(" and "),n("a",v,[s("Svelte Testing Library"),a(t)]),s(".")]),f,b,n("table",null,[w,n("tbody",null,[n("tr",null,[n("td",null,[n("a",_,[s("screen"),a(t)])]),x]),n("tr",null,[n("td",null,[n("a",T,[s("queries"),a(t)])]),B]),n("tr",null,[n("td",null,[n("a",P,[s("async helpers"),a(t)])]),L]),n("tr",null,[n("td",null,[n("a",j,[s("user events"),a(t)])]),q]),R,S,C,E,V,I,F,M])]),W,n("ul",null,[n("li",null,[a(e,{to:"/book/playwright/debug.html"},{default:p(()=>[s("Playwright Inspector")]),_:1})]),J,N]),O,U,n("ul",null,[A,D,n("li",null,[a(e,{to:"/book/playwright/locators.html"},{default:p(()=>[s("Locators")]),_:1})]),H,Y])])}const Z=c(d,[["render",z],["__file","testing-library-js.html.vue"]]);export{Z as default};