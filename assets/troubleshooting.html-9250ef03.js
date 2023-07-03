import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as d,a as t,b as e,d as n,w as o,f as r}from"./app-3f278ba4.js";const h={},u=t("h2",{id:"browser-dependencies",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#browser-dependencies","aria-hidden":"true"},"#"),e(" Browser dependencies")],-1),p=t("p",null,[e("Playwright does self-inspection every time it runs to make sure the browsers can be launched successfully. If there are missing"),t("br"),e(" dependencies, playwright will print instructions to acquire them.")],-1),m=t("br",null,null,-1),g=t("br",null,null,-1),f=r(`<h2 id="code-transpilation-issues" tabindex="-1"><a class="header-anchor" href="#code-transpilation-issues" aria-hidden="true">#</a> Code transpilation issues</h2><ul><li>langs: js</li></ul><p>If you are using a JavaScript transpiler like babel or TypeScript, calling <code>evaluate()</code> with an async function might not work. This is because while <code>playwright</code> uses <code>Function.prototype.toString()</code> to serialize functions while transpilers could be changing the output code in such a way it&#39;s incompatible with <code>playwright</code>.</p><p>Some workarounds to this problem would be to instruct the transpiler not to mess up with the code, for example, configure TypeScript to use latest ECMAScript version (<code>&quot;target&quot;: &quot;es2018&quot;</code>). Another workaround could be using string templates instead of functions:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(async() =&gt; {
   console.log(&#39;1&#39;);
})()</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node-js-requirements" tabindex="-1"><a class="header-anchor" href="#node-js-requirements" aria-hidden="true">#</a> Node.js requirements</h2><ul><li>langs: js</li></ul><p>Playwright requires Node.js version 14 or above</p><h3 id="referenceerror-url-is-not-defined" tabindex="-1"><a class="header-anchor" href="#referenceerror-url-is-not-defined" aria-hidden="true">#</a> ReferenceError: URL is not defined</h3><p>Playwright requires Node.js 14 or higher.</p><h3 id="unknown-file-extension-ts" tabindex="-1"><a class="header-anchor" href="#unknown-file-extension-ts" aria-hidden="true">#</a> Unknown file extension &quot;.ts&quot;</h3><p>Running TypeScript tests in <code>&quot;type&quot;: &quot;module&quot;</code> project requires Node.js 16 or higher.</p><h2 id="incompatible-microsoft-edge-google-chrome-policy-settings" tabindex="-1"><a class="header-anchor" href="#incompatible-microsoft-edge-google-chrome-policy-settings" aria-hidden="true">#</a> Incompatible Microsoft Edge / Google Chrome policy settings</h2><p>It&#39;s known that Playwright is not working as expected when some Microsoft Edge / Google Chrome policy settings are set. The following shows some of them, there might be more that affect Playwright&#39;s functionalities. If you find any other policy settings that break functionality, please file an issue and we&#39;ll add it to this document. You can see a list of applied policies by running <code>chrome://policy</code> in the browser.</p>`,14),b=t("code",null,"UserDataDir",-1),w={href:"https://github.com/microsoft/playwright/issues/17448",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"ExtensionInstallForcelist",-1),_={href:"https://github.com/microsoft/playwright/issues/17299",target:"_blank",rel:"noopener noreferrer"},k=r('<h2 id="net-requirements" tabindex="-1"><a class="header-anchor" href="#net-requirements" aria-hidden="true">#</a> .NET requirements</h2><ul><li>langs: csharp</li></ul><p>Playwright is distributed as a <strong>.NET Standard 2.0</strong> library. We recommend .NET 6 or newer.</p><h2 id="python-requirements" tabindex="-1"><a class="header-anchor" href="#python-requirements" aria-hidden="true">#</a> Python requirements</h2><ul><li>langs: python</li></ul><p>Playwright requires <strong>Python 3.7</strong> or newer.</p><h2 id="java-requirements" tabindex="-1"><a class="header-anchor" href="#java-requirements" aria-hidden="true">#</a> Java requirements</h2><ul><li>langs: java</li></ul><p>Playwright requires <strong>Java 8</strong> or newer.</p><h2 id="webkit-web-inspector" tabindex="-1"><a class="header-anchor" href="#webkit-web-inspector" aria-hidden="true">#</a> WebKit Web Inspector</h2><p>Launching WebKit Inspector during the execution will prevent the Playwright script from executing any further and<br> will reset pre-configured user agent and device emulation.</p><p>This is a known limitation.</p><h2 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a> System requirements</h2><p>The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><p>Works with Windows and Windows Subsystem for Linux (WSL).</p><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h3><p>Requires 11 (Big Sur) or above.</p><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><p>Depending on your Linux distribution, you might need to install additional<br> dependencies to run the browsers.</p><div class="hint-container note"><p class="hint-container-title">注</p><p>Only Debian 11, Ubuntu 20.04 and 22.04 are officially supported.</p></div>',21),x=t("br",null,null,-1),q=t("br",null,null,-1);function v(S,j){const i=a("RouterLink"),s=a("ExternalLinkIcon");return c(),d("div",null,[u,p,t("p",null,[e("See also in the "),n(i,{to:"/book/playwright/cli.html#install-system-dependencies"},{default:o(()=>[e("Command line tools")]),_:1}),m,e(" which has a command to install all necessary dependencies automatically for Ubuntu"),g,e(" LTS releases.")]),f,t("ul",null,[t("li",null,[b,e(" - This policy is used to specify the location of the user data directory. Playwright uses a temporary directory for user data, so this policy is not compatible with Playwright. See discussion in "),t("a",w,[e("this bug"),n(s)]),e(".")]),t("li",null,[y,e(" - This policy is used to specify a list of extensions that should be installed. Playwright's browser close will not work if this policy is set. See discussion in "),t("a",_,[e("this bug"),n(s)]),e(".")])]),k,t("p",null,[e("See also in the "),n(i,{to:"/book/playwright/cli.html#install-system-dependencies"},{default:o(()=>[e("Command line tools")]),_:1}),x,e(" which has a command to install all necessary dependencies automatically for Ubuntu"),q,e(" LTS releases.")])])}const L=l(h,[["render",v],["__file","troubleshooting.html.vue"]]);export{L as default};