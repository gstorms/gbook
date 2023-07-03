import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as n}from"./app-207e7d61.js";const l={},i=n(`<h1 id="bash-简介" tabindex="-1"><a class="header-anchor" href="#bash-简介" aria-hidden="true">#</a> Bash-简介</h1><p>Bash 是 Unix 系统和 Linux 系统的一种 Shell（命令行环境），是目前绝大多数 Linux 发行版的默认 Shell。</p><h2 id="shell-的含义" tabindex="-1"><a class="header-anchor" href="#shell-的含义" aria-hidden="true">#</a> Shell 的含义</h2><p>学习 Bash，首先需要理解 Shell 是什么。Shell 这个单词的原意是“外壳”，跟 kernel（内核）相对应，比喻内核外面的一层，即用户跟内核交互的对话界面。<br> 具体来说，Shell 这个词有多种含义。<br> 首先，Shell 是一个程序，提供一个与用户对话的环境。这个环境只有一个命令提示符，让用户从键盘输入命令，所以又称为命令行环境（command line interface，简写为 CLI）。Shell 接收到用户输入的命令，将命令送入操作系统执行，并将结果返回给用户。本书中，除非特别指明，Shell 指的就是命令行环境。<br> 其次，Shell 是一个命令解释器，解释用户输入的命令。它支持变量、条件判断、循环操作等语法，所以用户可以用 Shell 命令写出各种小程序，又称为脚本（script）。这些脚本都通过 Shell 的解释执行，而不通过编译。<br> 最后，Shell 是一个工具箱，提供了各种小工具，供用户方便地使用操作系统的功能。</p><h2 id="shell-的种类" tabindex="-1"><a class="header-anchor" href="#shell-的种类" aria-hidden="true">#</a> Shell 的种类</h2><p>Shell 有很多种，只要能给用户提供命令行环境的程序，都可以看作是 Shell。<br> 历史上，主要的 Shell 有下面这些。</p><ul><li>Bourne Shell（sh）</li><li>Bourne Again shell（bash）</li><li>C Shell（csh）</li><li>TENEX C Shell（tcsh）</li><li>Korn shell（ksh）</li><li>Z Shell（zsh）</li><li>Friendly Interactive Shell（fish）</li></ul><p>Bash 是目前最常用的 Shell，除非特别指明，下文的 Shell 和 Bash 当作同义词使用，可以互换。<br> 下面的命令可以查看当前运行的 Shell。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的命令可以查看当前的 Linux 系统安装的所有 Shell。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/shells
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面两个命令中，<code>$</code>是命令行环境的提示符，用户只需要输入提示符后面的内容。<br> Linux 允许每个用户使用不同的 Shell，用户的默认 Shell 一般都是 Bash，或者与 Bash 兼容。</p><h2 id="命令行环境" tabindex="-1"><a class="header-anchor" href="#命令行环境" aria-hidden="true">#</a> 命令行环境</h2><h3 id="终端模拟器" tabindex="-1"><a class="header-anchor" href="#终端模拟器" aria-hidden="true">#</a> 终端模拟器</h3><p>如果是不带有图形环境的 Linux 系统（比如专用于服务器的系统），启动后就直接是命令行环境。<br> 不过，现在大部分的 Linux 发行版，尤其是针对普通用户的发行版，都是图形环境。用户登录系统后，自动进入图形环境，需要自己启动终端模拟器，才能进入命令行环境。<br> 所谓“终端模拟器”（terminal emulator）就是一个模拟命令行窗口的程序，让用户在一个窗口中使用命令行环境，并且提供各种附加功能，比如调整颜色、字体大小、行距等等。<br> 不同 Linux 发行版（准确地说是不同的桌面环境）带有的终端程序是不一样的，比如 KDE 桌面环境的终端程序是 konsole，Gnome 桌面环境的终端程序是 gnome-terminal，用户也可以安装第三方的终端程序。所有终端程序，尽管名字不同，基本功能都是一样的，就是让用户可以进入命令行环境，使用 Shell。</p><h3 id="命令行提示符" tabindex="-1"><a class="header-anchor" href="#命令行提示符" aria-hidden="true">#</a> 命令行提示符</h3><p>进入命令行环境以后，用户会看到 Shell 的提示符。提示符往往是一串前缀，最后以一个美元符号<code>$</code>结尾，用户可以在这个符号后面输入各种命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>user@hostname<span class="token punctuation">]</span> $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面例子中，完整的提示符是<code>[user@hostname] $</code>，其中前缀是用户名（<code>user</code>）加上<code>@</code>，再加主机名（<code>hostname</code>）。比如，用户名是<code>bill</code>，主机名是<code>home-machine</code>，前缀就是<code>bill@home-machine</code>。<br> 注意，根用户（root）的提示符，不以美元符号（<code>$</code>）结尾，而以井号（<code>#</code>）结尾，用来提醒用户，现在具有根权限，可以执行各种操作，务必小心，不要出现误操作。这个符号是可以自己定义的，详见《命令提示符》一章。<br> 为了简洁，后文的命令行提示符都只使用<code>$</code>表示。</p><h3 id="进入和退出方法" tabindex="-1"><a class="header-anchor" href="#进入和退出方法" aria-hidden="true">#</a> 进入和退出方法</h3><p>进入命令行环境以后，一般就已经打开 Bash 了。如果你的 Shell 不是 Bash，可以输入<code>bash</code>命令启动 Bash。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>退出 Bash 环境，可以使用<code>exit</code>命令，也可以同时按下<code>Ctrl + d</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Bash 的基本用法就是在命令行输入各种命令，非常直观。作为练习，可以试着输入<code>pwd</code>命令。按下回车键，就会显示当前所在的目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">pwd</span>
/home/me
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不小心输入了<code>pwe</code>，会返回一个提示，表示输入出错，没有对应的可执行程序。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pwe
bash: pwe：未找到命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-和-bash-的历史" tabindex="-1"><a class="header-anchor" href="#shell-和-bash-的历史" aria-hidden="true">#</a> Shell 和 Bash 的历史</h2><p>Shell 伴随着 Unix 系统的诞生而诞生。<br> 1969年，Ken Thompson 和 Dennis Ritchie 开发了第一版的 Unix。<br> 1971年，Ken Thompson 编写了最初的 Shell，称为 Thompson shell，程序名是<code>sh</code>，方便用户使用 Unix。<br> 1973年至1975年间，John R. Mashey 扩展了最初的 Thompson shell，添加了编程功能，使得 Shell 成为一种编程语言。这个版本的 Shell 称为 Mashey shell。<br> 1976年，Stephen Bourne 结合 Mashey shell 的功能，重写一个新的 Shell，称为 Bourne shell。<br> 1978年，加州大学伯克利分校的 Bill Joy 开发了 C shell，为 Shell 提供 C 语言的语法，程序名是<code>csh</code>。它是第一个真正替代<code>sh</code>的 UNIX shell，被合并到 Berkeley UNIX 的 2BSD 版本中。<br> 1979年，UNIX 第七版发布，内置了 Bourne Shell，导致它成为 Unix 的默认 Shell。注意，Thompson shell、Mashey shell 和 Bourne shell 都是贝尔实验室的产品，程序名都是<code>sh</code>。对于用户来说，它们是同一个东西，只是底层代码不同而已。<br> 1983年，David Korn 开发了Korn shell，程序名是<code>ksh</code>。<br> 1985年，Richard Stallman 成立了自由软件基金会（FSF），由于 Shell 的版权属于贝尔公司，所以他决定写一个自由版权的、使用 GNU 许可证的 Shell 程序，避免 Unix 的版权争议。<br> 1988年，自由软件基金会的第一个付薪程序员 Brian Fox 写了一个 Shell，功能基本上是 Bourne shell 的克隆，叫做 Bourne-Again SHell，简称 Bash，程序名为<code>bash</code>，任何人都可以免费使用。后来，它逐渐成为 Linux 系统的标准 Shell。<br> 1989年，Bash 发布1.0版。<br> 1996年，Bash 发布2.0版。<br> 2004年，Bash 发布3.0版。<br> 2009年，Bash 发布4.0版。<br> 2019年，Bash 发布5.0版。<br> 用户可以通过<code>bash</code>命令的<code>--version</code>参数或者环境变量<code>$BASH_VERSION</code>，查看本机的 Bash 版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> <span class="token parameter variable">--version</span>
GNU bash，版本 <span class="token number">5.0</span>.3<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>-release <span class="token punctuation">(</span>x86_64-pc-linux-gnu<span class="token punctuation">)</span>
<span class="token comment"># 或者</span>
$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$BASH_VERSION</span>
<span class="token number">5.0</span>.3<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),h=[i];function d(c,r){return a(),s("div",null,h)}const u=e(l,[["render",d],["__file","Bash-简介.html.vue"]]);export{u as default};
