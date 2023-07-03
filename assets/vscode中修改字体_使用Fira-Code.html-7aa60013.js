import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as a,c as d,a as e,b as n,d as l,f as s}from"./app-3f278ba4.js";const r={},c=s(`<h1 id="vscode中修改字体-使用fira-code" tabindex="-1"><a class="header-anchor" href="#vscode中修改字体-使用fira-code" aria-hidden="true">#</a> vscode中修改字体,使用Fira-Code</h1><p>vscode默认字体感觉不好看，想换个字体，介绍下换字体的方法：<br> 首先，打开设置页面，搜索<code>font</code>，如图：<br><img src="https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257918-b2c4300f-f63b-4353-9f45-98558c5978a5.png#align=left&amp;display=inline&amp;height=682&amp;margin=[object Object]&amp;originHeight=682&amp;originWidth=1240&amp;size=0&amp;status=done&amp;style=none&amp;width=1240" alt="" loading="lazy"></p><p>设置中的下面几个属性与字体有关：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 控制字体系列。
  &quot;editor.fontFamily&quot;: &quot;Consolas, &#39;Courier New&#39;, monospace&quot;,

  // 启用字体连字
  &quot;editor.fontLigatures&quot;: false,

  // 以像素为单位控制字号。
  &quot;editor.fontSize&quot;: 14,

  // 控制字体粗细。
  &quot;editor.fontWeight&quot;: &quot;normal&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在右侧的用户设置中添加对应设置(记得在添加之前先加个逗号分隔)：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;editor.fontFamily&quot;: &quot;Fira Code&quot;,//后边的引号中写上要设置的字体类型，个人比较喜欢Fira Code
&quot;editor.fontLigatures&quot;: true,//这个控制是否启用字体连字，true启用，false不启用，这里选择启用
  &quot;editor.fontSize&quot;: 14,//设置字体大小，这个不多说都明白
&quot;editor.fontWeight&quot;: &quot;normal&quot;,//这个设置字体粗细，可选normal,bold,&quot;100&quot;~&quot;900&quot;等，选择合适的就行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u=e("br",null,null,-1),g=e("br",null,null,-1),m=e("br",null,null,-1),b={href:"https://github.com/tonsky/FiraCode",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),p=e("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257929-96e64451-04b5-40b3-88b2-c24bd75874e1.png#align=left&display=inline&height=515&margin=[object Object]&originHeight=515&originWidth=1088&size=0&status=done&style=none&width=1088",alt:"",loading:"lazy"},null,-1),v=e("p",null,[n("点击就可以下载字体安装包，是个zip压缩包，加压后找到ttf文件夹，会看到几个ttf文件"),e("br"),e("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257773-3dfe4188-713c-4d63-aea3-d9ecf50c49d4.png#align=left&display=inline&height=206&margin=[object Object]&originHeight=206&originWidth=572&size=0&status=done&style=none&width=572",alt:"",loading:"lazy"}),e("br"),n(" 全选，右键安装就可以了，在windows的控制面板，字体中就可以看到该字体了，安装完成。")],-1),f=e("p",null,[n("查看windows的字体：进入控制面板，修改查看方式为"),e("code",null,"大图标"),n("，点击字体"),e("br"),e("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257835-69174c44-647d-4e1d-a4cb-5f5f05311df5.png#align=left&display=inline&height=547&margin=[object Object]&originHeight=547&originWidth=982&size=0&status=done&style=none&width=982",alt:"",loading:"lazy"}),e("br"),e("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257942-77be2d6b-a8e7-45be-b5c3-dabd260ace65.png#align=left&display=inline&height=895&margin=[object Object]&originHeight=895&originWidth=1240&size=0&status=done&style=none&width=1240",alt:"",loading:"lazy"}),e("br"),e("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257799-b4ed369f-1258-4452-8329-6be4baa07ab4.png#align=left&display=inline&height=895&margin=[object Object]&originHeight=895&originWidth=1240&size=0&status=done&style=none&width=1240",alt:"",loading:"lazy"})],-1);function _(q,y){const i=o("ExternalLinkIcon");return a(),d("div",null,[c,e("p",null,[n("然后保存，字体就应用成功了。"),u,n(" PS:要想换字体，最起码电脑上得安装上该字体，不然设置了也没有用。"),g,n(" 附上Fira Code字体的安装："),m,n(" 在"),e("a",b,[n("https://github.com/tonsky/FiraCode"),l(i)]),n("下载字体，在readmine.md中往下翻页，会看到download链接（如下图），"),h,p]),v,f])}const k=t(r,[["render",_],["__file","vscode中修改字体_使用Fira-Code.html.vue"]]);export{k as default};
