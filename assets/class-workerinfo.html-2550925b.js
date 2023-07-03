import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as l,a,b as n,d as t,w as e,f as o}from"./app-207e7d61.js";const c={},u=o(`<h1 id="class-workerinfo" tabindex="-1"><a class="header-anchor" href="#class-workerinfo" aria-hidden="true">#</a> class: WorkerInfo</h1><ul><li>since: v1.10</li><li>langs: js</li></ul><p><code>WorkerInfo</code> contains information about the worker that is running tests. It is available to [<code>method: Test.beforeAll</code>] and [<code>method: Test.afterAll</code>] hooks and worker-scoped fixtures.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

test<span class="token punctuation">.</span><span class="token function">beforeAll</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> browserName <span class="token punctuation">}</span><span class="token punctuation">,</span> workerInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Running </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>browserName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> in worker #</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>workerInfo<span class="token punctuation">.</span>workerIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@playwright/test&#39;</span><span class="token punctuation">;</span>

test<span class="token punctuation">.</span><span class="token function">beforeAll</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> browserName <span class="token punctuation">}</span><span class="token punctuation">,</span> workerInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Running </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>browserName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> in worker #</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>workerInfo<span class="token punctuation">.</span>workerIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="property-workerinfo-config" tabindex="-1"><a class="header-anchor" href="#property-workerinfo-config" aria-hidden="true">#</a> property: WorkerInfo.config</h2><ul><li>since: v1.10</li></ul><ul><li>type: &lt;[TestConfig]&gt;</li></ul>`,8),d=o('<h2 id="property-workerinfo-parallelindex" tabindex="-1"><a class="header-anchor" href="#property-workerinfo-parallelindex" aria-hidden="true">#</a> property: WorkerInfo.parallelIndex</h2><ul><li>since: v1.10</li></ul><ul><li>type: &lt;[int]&gt;</li></ul><p>The index of the worker between <code>0</code> and <code>workers - 1</code>. It is guaranteed that workers running at the same time have a different <code>parallelIndex</code>. When a worker is restarted, for example after a failure, the new worker process has the same <code>parallelIndex</code>.</p>',4),k=a("code",null,[n("p"),a("wbr"),n("rocess.env.TEST_PARALLEL_INDEX")],-1),h=a("h2",{id:"property-workerinfo-project",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#property-workerinfo-project","aria-hidden":"true"},"#"),n(" property: WorkerInfo.project")],-1),f=a("ul",null,[a("li",null,"since: v1.10")],-1),w=a("ul",null,[a("li",null,"type: <[TestProject]>")],-1),m=a("h2",{id:"property-workerinfo-workerindex",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#property-workerinfo-workerindex","aria-hidden":"true"},"#"),n(" property: WorkerInfo.workerIndex")],-1),g=a("ul",null,[a("li",null,"since: v1.10")],-1),v=a("ul",null,[a("li",null,"type: <[int]>")],-1),_=a("p",null,[n("The unique index of the worker process that is running the test. When a worker is restarted, for example after a failure, the new worker process gets a new unique "),a("code",null,"workerIndex"),n(".")],-1),b=a("code",null,[n("p"),a("wbr"),n("rocess.env.TEST_WORKER_INDEX")],-1);function y(x,I){const s=i("RouterLink");return r(),l("div",null,[u,a("p",null,[n("Processed configuration from the "),t(s,{to:"/book/playwright/test-configuration.html"},{default:e(()=>[n("configuration file")]),_:1}),n(".")]),d,a("p",null,[n("Also available as "),k,n(". Learn more about "),t(s,{to:"/book/playwright/test-parallel.html"},{default:e(()=>[n("parallelism and sharding")]),_:1}),n(" with Playwright Test.")]),h,f,w,a("p",null,[n("Processed project configuration from the "),t(s,{to:"/book/playwright/test-configuration.html"},{default:e(()=>[n("configuration file")]),_:1}),n(".")]),m,g,v,_,a("p",null,[n("Also available as "),b,n(". Learn more about "),t(s,{to:"/book/playwright/test-parallel.html"},{default:e(()=>[n("parallelism and sharding")]),_:1}),n(" with Playwright Test.")])])}const N=p(c,[["render",y],["__file","class-workerinfo.html.vue"]]);export{N as default};