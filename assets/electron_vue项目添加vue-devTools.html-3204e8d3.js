import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as d,a as e,b as n,d as i,f as a}from"./app-207e7d61.js";const r={},c=e("h1",{id:"electron-vue项目添加vue-devtools",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#electron-vue项目添加vue-devtools","aria-hidden":"true"},"#"),n(" electron+vue项目添加vue-devTools")],-1),u=e("code",null,"vue-devtools",-1),v=e("br",null,null,-1),m=e("code",null,"git clone [https://github.com/vuejs/vue-devtools.git",-1),_={href:"https://github.com/vuejs/vue-devtools.git%60",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),h=e("code",null,"master",-1),p=e("code",null,"dev",-1),g=e("br",null,null,-1),x=e("code",null,"git checkout master",-1),f=e("br",null,null,-1),w=e("code",null,"vue-devtools",-1),q=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install
...
npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后将build生成的<code>shells</code>目录中的<code>chrome</code>目录拷贝出来，这个就是build生成的vue-devtools插件<br> 浏览器安装容易，直接打开插件管理，切换开发模式，加载已解压插件，选择刚刚的chrome目录就行了。但是electron项目中安装会有点麻烦：<br> 找到<code>background.js</code>文件，找到这段代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app.on(&quot;ready&quot;, async () =&gt; {
      if (isDevelopment &amp;&amp; !p<wbr>rocess.env.IS_TEST) {
        // Install Vue Devtools
    try {
          await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
          console.error(&quot;Vue Devtools failed to install:&quot;, e.toString());
    }
  }
  createWindow();
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个是默认安装<code>vue-devtools</code>部分，不过因为网络问题，安装不上：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Failed to fetch extension, trying 4 more times
Failed to fetch extension, trying 3 more times
Failed to fetch extension, trying 2 more times
Failed to fetch extension, trying 1 more times
Failed to fetch extension, trying 0 more times
Vue Devtools failed to install: Error: net::ERR_CONNECTION_TIMED_OUT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以要修改一下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app.on(&quot;ready&quot;, async () =&gt; {
      if (isDevelopment &amp;&amp; !p<wbr>rocess.env.IS_TEST) {
        // Install Vue Devtools
    try {
          // await installExtension(VUEJS_DEVTOOLS);
      // 新增的：安装vue-devtools
      const { session } = require(&quot;electron&quot;);
      const path = require(&quot;path&quot;);
      session.defaultSession.loadExtension(
            path.resolve(__dirname, &quot;../../devTools/chrome&quot;)  //这个是刚刚build好的插件目录
      );  
//这个是刚开始找的方法不行，换上边的方法
// BrowserWindow.addDevToolsExtension(path.resolve(__dirname, &quot;../../devTools/chrome&quot;)  );
    } catch (e) {
          console.error(&quot;Vue Devtools failed to install:&quot;, e.toString());
    }
  }
  createWindow();
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),E=e("br",null,null,-1),k={href:"https://www.electronjs.org/docs/api/session#sesloadextensionpath",target:"_blank",rel:"noopener noreferrer"},T=e("br",null,null,-1),y=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`(node:9068) ExtensionLoadWarning: Warnings loading extension at D:\\work\\docker\\projects\\devTools\\chrome: Unrecognized manifest key 'browser_action'. Permission 'contextMenus' is unknown or URL pattern is malformed.
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),V=e("p",null,"这个问题参考了下边的解决方法：",-1),D={href:"https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/776",target:"_blank",rel:"noopener noreferrer"},S=e("br",null,null,-1),j=e("img",{src:"https://upload-images.jianshu.io/upload_images/1724024-ed4f525a78e7ba58.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240",alt:"image.png",loading:"lazy"},null,-1),I=e("br",null,null,-1),O=e("br",null,null,-1),N=e("img",{src:"https://upload-images.jianshu.io/upload_images/1724024-8774200d8326656e.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240",alt:"image.png",loading:"lazy"},null,-1);function L(F,U){const s=o("ExternalLinkIcon");return t(),d("div",null,[c,e("p",null,[n("手动clone项目"),u,v,m,n("]("),e("a",_,[n("https://github.com/vuejs/vue-devtools.git`"),i(s)]),n(")"),b,n(" 然后切换到"),h,n("分支，默认的是"),p,n("分支："),g,x,f,n(" 进入"),w,n("根目录：")]),q,e("blockquote",null,[e("p",null,[n("session的使用方法"),E,e("a",k,[n("https://www.electronjs.org/docs/api/session#sesloadextensionpath"),i(s)]),T,n(" 这个还没好，又提示了个问题：")])]),y,V,e("blockquote",null,[e("p",null,[e("a",D,[n("https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/776"),i(s)]),S,j,I,n(" OK，终于出来了，不容易啊。"),O,N])])])}const M=l(r,[["render",L],["__file","electron_vue项目添加vue-devTools.html.vue"]]);export{M as default};
