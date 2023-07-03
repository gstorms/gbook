import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,f as r}from"./app-207e7d61.js";const t={},h=r('<h1 id="获取某列最后一个包含数据的单元格所在行的行号或值" tabindex="-1"><a class="header-anchor" href="#获取某列最后一个包含数据的单元格所在行的行号或值" aria-hidden="true">#</a> 获取某列最后一个包含数据的单元格所在行的行号或值</h1><p>要获取某列最后一个包含数据的单元格所在行的行号，可以用下面的几个数组公式<br> （注意是数组哦，Shift+Ctrl+Enter），以A列为例：</p><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一：</h3><p><code>=MAX(NOT(ISBLANK(A1:A65535))*ROW(1:65535)) </code> <br> 公式输入完毕按 <code>Ctrl+Shift+Enter</code> 结束（下同），<br> 该公式对 <code>A</code> 列中每个包含数据的单元格指定其行号，对空单元格返回“0”，并用 <code>MAX</code> 函数得到最后一行的行号。</p><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二：</h3><p><code>=LOOKUP(2,1/NOT(ISBLANK(A1:A65535)),ROW(A1:A65535)) </code> <br><code>“1/NOT(ISBLANK(A1:A65535))”</code> 返回一个由“1”和错误值组成的数组（false=0，true=1，1除以1等于1，1除以0当然是错误喽），其中非空单元格返回“1”，空单元格返回错误，LOOKUP函数的第一个参数为“2”，由于在上述数组中找不到，会返回第三个参数 <code>“ROW(A1:A65535)”</code> 中最后一个“1”对应的值，即最后一行的行号。</p><h3 id="方法三" tabindex="-1"><a class="header-anchor" href="#方法三" aria-hidden="true">#</a> 方法三：</h3><p><code>=MATCH(2,1/NOT(ISBLANK(A1:A65535))) </code> <br><code>MATCH</code> 函数的第三参数省略，将查找小于或等于“2”的最大值，返回最后一个“1”的位置，即最后一行的行号。</p><h3 id="方法四" tabindex="-1"><a class="header-anchor" href="#方法四" aria-hidden="true">#</a> 方法四：</h3><p>如果A列中包含数值，下面的数组公式返回最后一个数值所在的行号，而忽略最后一个数值后面的文本、错误值等：<br><code>=MATCH(9E+307,A:A)</code></p><h3 id="方法五" tabindex="-1"><a class="header-anchor" href="#方法五" aria-hidden="true">#</a> 方法五：</h3><p>A列最后有值的单元格的行号<br><code>=MAX(IF((A:A)&lt;&gt;&quot;&quot;,ROW(A:A)))</code><br> A列最后一个值等于“a”的单元格行号<br><code>=MAX(IF((A:A)=&quot;a&quot;,ROW(A:A)))</code><br> 然后按Ctrl+Shift+Enter完成<br><img src="https://cdn.nlark.com/yuque/0/2021/png/12492743/1614303288202-8f030db8-a3bf-408e-b290-e74b0bdbff2b.png#align=left&amp;display=inline&amp;height=427&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=427&amp;originWidth=515&amp;size=17538&amp;status=done&amp;style=none&amp;width=515" alt="image.png" loading="lazy"></p><h3 id="类似的方法还可以得到最后一行的值" tabindex="-1"><a class="header-anchor" href="#类似的方法还可以得到最后一行的值" aria-hidden="true">#</a> 类似的方法还可以得到最后一行的值：</h3><h4 id="方法一-1" tabindex="-1"><a class="header-anchor" href="#方法一-1" aria-hidden="true">#</a> 方法一：</h4><p><code>=LOOKUP(2,1/(A1:A65536&lt;&gt;&quot;&quot;),A1:A65536) </code></p><h4 id="方法二-1" tabindex="-1"><a class="header-anchor" href="#方法二-1" aria-hidden="true">#</a> 方法二：</h4><p><code>=LOOKUP(2,1/(NOT(ISBLANK(A1:A65536))),A1:A65536) </code></p><h4 id="方法三-1" tabindex="-1"><a class="header-anchor" href="#方法三-1" aria-hidden="true">#</a> 方法三：</h4><p><code>=OFFSET(A1,MAX((A1:A65536&lt;&gt;&quot;&quot;)*ROW(A1:A65536))-1,) </code></p>',19),o=[h];function c(i,n){return a(),d("div",null,o)}const _=e(t,[["render",c],["__file","获取某列最后一个包含数据的单元格所在行的行号或值.html.vue"]]);export{_ as default};
