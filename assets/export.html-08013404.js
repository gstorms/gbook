import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,f as n}from"./app-207e7d61.js";const l={},i=n(`<h1 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> export</h1><p><code>export</code>命令用于向子Shell输出变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">hotellogs</span><span class="token operator">=</span><span class="token string">&quot;/workspace/hotel-api/storage/logs&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后执行下面的命令，新建一个子 Shell。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span>
$ <span class="token builtin class-name">cd</span> hotellogs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令的执行结果会进入<code>hotellogs</code>变量指向的目录。<br><code>export</code>命令还可以显示所有环境变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span>
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/zsh
<span class="token assign-left variable">AWS_HOME</span><span class="token operator">=</span>/Users/adnanadnan/.aws
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8
<span class="token assign-left variable">LC_CTYPE</span><span class="token operator">=</span>en_US.UTF-8
<span class="token assign-left variable">LESS</span><span class="token operator">=</span>-R
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想查看单个变量，使用<code>echo $VARIABLE_NAME</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/usr/bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[i];function t(c,r){return a(),e("div",null,o)}const v=s(l,[["render",t],["__file","export.html.vue"]]);export{v as default};
