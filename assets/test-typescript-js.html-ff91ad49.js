import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as i,a as n,b as s,d as t,f as e}from"./app-3f278ba4.js";const l={},r={href:"https://nodejs.org/api/modules.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://nodejs.org/api/esm.html",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"typescript-with-commonjs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#typescript-with-commonjs","aria-hidden":"true"},"#"),s(" TypeScript with CommonJS")],-1),k={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"by default",-1),v=n("code",null,"'.mjs'",-1),h=n("code",null,"'.mts'",-1),g=n("code",null,'type: "module"',-1),y=n("code",null,"package.json",-1),b=e(`<p>Consider this helper module written in TypeScript:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// helper.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&#39;secret&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can import from the helper as usual:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// example.spec.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./helper&#39;</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">getByLabel</span><span class="token punctuation">(</span><span class="token string">&#39;User Name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">getByLabel</span><span class="token punctuation">(</span><span class="token string">&#39;Password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript-with-esm" tabindex="-1"><a class="header-anchor" href="#typescript-with-esm" aria-hidden="true">#</a> TypeScript with ESM</h2>`,5),f={href:"https://nodejs.org/api/esm.html",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,'type: "module"',-1),_=n("code",null,"package.json",-1),q=n("code",null,"playwright.config.ts",-1),j={href:"https://www.typescriptlang.org/docs/handbook/esm-node.html",target:"_blank",rel:"noopener noreferrer"},x=n("strong",null,"requires a file extension",-1),T=n("code",null,"'.js'",-1),S=n("code",null,"'.ts'",-1),P=e(`<p>First, enable modules in your <code>package.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-package&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then write the helper module in TypeScript as usual:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// helper.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&#39;secret&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Specify the extension when importing from a module:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// example.spec.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./helper.ts&#39;</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">getByLabel</span><span class="token punctuation">(</span><span class="token string">&#39;User Name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">getByLabel</span><span class="token punctuation">(</span><span class="token string">&#39;Password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">注</p><p>TypeScript with ESM requires Node.js 16 or higher.</p></div><h2 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json" aria-hidden="true">#</a> tsconfig.json</h2><p>Playwright will pick up <code>tsconfig.json</code> for each source file it loads. Note that Playwright <strong>only supports</strong> the following tsconfig options: <code>paths</code> and <code>baseUrl</code>.</p><p>We recommend setting up a separate <code>tsconfig.json</code> in the tests directory so that you can change some preferences specifically for the tests. Here is an example directory structure.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>src/
    source.ts

tests/
    tsconfig.json  # test-specific tsconfig
    example.spec.ts

tsconfig.json  # generic tsconfig for all typescript sources

playwright.config.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tsconfig-path-mapping" tabindex="-1"><a class="header-anchor" href="#tsconfig-path-mapping" aria-hidden="true">#</a> tsconfig path mapping</h3>`,12),N={href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"tsconfig.json",-1),B=n("code",null,"baseUrl",-1),M=e(`<p>Here is an example <code>tsconfig.json</code> that works with Playwright Test:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> <span class="token comment">// This must be specified if &quot;paths&quot; is.</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@myhelper/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;packages/myhelper/*&quot;</span><span class="token punctuation">]</span> <span class="token comment">// This mapping is relative to &quot;baseUrl&quot;.</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can now import using the mapped paths:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// example.spec.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@myhelper/credentials&#39;</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">getByLabel</span><span class="token punctuation">(</span><span class="token string">&#39;User Name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">getByLabel</span><span class="token punctuation">(</span><span class="token string">&#39;Password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="manually-compile-tests-with-typescript" tabindex="-1"><a class="header-anchor" href="#manually-compile-tests-with-typescript" aria-hidden="true">#</a> Manually compile tests with TypeScript</h2><p>Sometimes, Playwright Test will not be able to transform your TypeScript code correctly, for example when you are using experimental or very recent features of TypeScript, usually configured in <code>tsconfig.json</code>.</p><p>In this case, you can perform your own TypeScript compilation before sending the tests to Playwright.</p><p>First add a <code>tsconfig.json</code> file inside the tests directory:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Node&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../tests-out&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In <code>package.json</code>, add two scripts:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;pretest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc --incremental -p tests/tsconfig.json&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;playwright test -c tests-out&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>pretest</code> script runs typescript on the tests. <code>test</code> will run the tests that have been generated to the <code>tests-out</code> directory. The <code>-c</code> argument configures the test runner to look for tests inside the <code>tests-out</code> directory.</p><p>Then <code>npm run test</code> will build the tests and run them.</p>`,13);function C(J,L){const a=p("ExternalLinkIcon");return c(),i("div",null,[n("p",null,[s("Playwright Test supports TypeScript out of the box. You just write tests in TypeScript and Playwright Test will read them, transform to JavaScript and run. This works both with "),n("a",r,[s("CommonJS modules"),t(a)]),s(" and "),n("a",u,[s("ECMAScript modules"),t(a)]),s(".")]),d,n("p",null,[n("a",k,[s("Node.js"),t(a)]),s(" works with CommonJS modules "),m,s(". Unless you use "),v,s(" or "),h,s(" extensions, or specify "),g,s(" in your "),y,s(", Playwright Test will treat all TypeScript files as CommonJS. You can then import as usual without an extension.")]),b,n("p",null,[s("You can opt into using "),n("a",f,[s("ECMAScript modules"),t(a)]),s(" by setting "),w,s(" in your "),_,s(" file. Playwright Test will switch to the ESM mode once it reads the "),q,s(" file, so make sure you have one.")]),n("p",null,[s("Playwright Test follows the "),n("a",j,[s("experimental support for ESM in TypeScript"),t(a)]),s(" and, according to the specification, "),x,s(" when importing from a module, either "),T,s(" or "),S,s(".")]),P,n("p",null,[s("Playwright supports "),n("a",N,[s("path mapping"),t(a)]),s(" declared in the "),E,s(". Make sure that "),B,s(" is also set.")]),M])}const I=o(l,[["render",C],["__file","test-typescript-js.html.vue"]]);export{I as default};
