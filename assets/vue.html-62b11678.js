import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as p}from"./app-207e7d61.js";const t={},e=p(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h1><h3 id="vite-config-ts" tabindex="-1"><a class="header-anchor" href="#vite-config-ts" aria-hidden="true">#</a> vite.config.ts</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> UserConfig<span class="token punctuation">,</span> ConfigEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> vueJsx <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue-jsx&#39;</span> <span class="token comment">//tsx插件引入</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span> <span class="token comment">//自动引入ref,reactive等等等</span>
<span class="token comment">// 配置antd-v按需加载</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AntDesignVueResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>
<span class="token comment">// import path from &#39;path&#39;;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve<span class="token punctuation">,</span> join <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> wrapperEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./build/utils&#39;</span>

<span class="token comment">// defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> command<span class="token punctuation">,</span> mode <span class="token punctuation">}</span><span class="token operator">:</span> ConfigEnv<span class="token punctuation">)</span><span class="token operator">:</span> UserConfig <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> mode<span class="token punctuation">,</span> <span class="token string">&#39;===&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> root<span class="token punctuation">)</span> <span class="token comment">// 环境变量对象</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;环境变量------&#39;</span><span class="token punctuation">,</span> env<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件路径（ process.cwd()）------&#39;</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件路径（dirname）------&#39;</span><span class="token punctuation">,</span> __dirname <span class="token operator">+</span> <span class="token string">&#39;/src&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">VITE_DROP_CONSOLE</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">wrapperEnv</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span>

  <span class="token comment">// // dev 独有配置</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    root<span class="token punctuation">,</span> <span class="token comment">//项目根目录（index.html 文件所在的位置） 默认： process.cwd()</span>
    base<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">//  开发或生产环境服务的公共基础路径：默认&#39;/&#39;   1、绝对 URL 路径名： /foo/；  2、完整的 URL： https://foo.com/； 3、空字符串或 ./（用于开发环境）</span>
    publicDir<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//默认&#39;public&#39;  作为静态资源服务的文件夹  (打包public文件夹会没有，里面得东西会直接编译在dist文件下)</span>
    assetsInclude<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/assets&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 静态资源处理</span>

    <span class="token comment">// ******插件配置******</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">vueJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        imports<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            axios<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">[</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">]</span> <span class="token comment">// import { default as axios } from &#39;axios&#39;,</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        dts<span class="token operator">:</span> <span class="token string">&#39;types/auto-import.d.ts&#39;</span> <span class="token comment">//生成全局引入的文件</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        resolvers<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token function">AntDesignVueResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            importStyle<span class="token operator">:</span> <span class="token string">&#39;less&#39;</span> <span class="token comment">//修改antdv主题色</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//配置插件</span>
    <span class="token comment">// ******开发服务器配置******</span>
    server<span class="token operator">:</span> <span class="token punctuation">{</span>
      https<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//(使用https)启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS</span>
      host<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 监听所有地址</span>
      port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span> <span class="token comment">//指定开发服务器端口：默认3000</span>
      open<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//启动时自动在浏览器中打开</span>
      cors<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//为开发服务器配置 CORS</span>
      proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//配置自定义代理规则</span>
        <span class="token comment">// 字符串简写写法</span>
        <span class="token string-property property">&#39;/jpi&#39;</span><span class="token operator">:</span> <span class="token string">&#39;http://192.168.1.97:4567&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> <span class="token string">&#39;http://192.168.1.97:108&#39;</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否跨域</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> path <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// hmr: {</span>
      <span class="token comment">//   overlay: false</span>
      <span class="token comment">// }</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ******项目构建配置******</span>
    build<span class="token operator">:</span> <span class="token punctuation">{</span>
      target<span class="token operator">:</span> <span class="token string">&#39;modules&#39;</span><span class="token punctuation">,</span> <span class="token comment">//设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules</span>
      outDir<span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 构建得包名  默认：dist</span>
      assetsDir<span class="token operator">:</span> <span class="token string">&#39;assets&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 静态资源得存放路径文件名  assets</span>
      sourcemap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//构建后是否生成 source map 文件</span>
      brotliSize<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 启用/禁用 brotli 压缩大小报告。 禁用该功能可能会提高大型项目的构建性能</span>
      minify<span class="token operator">:</span> <span class="token string">&#39;esbuild&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 项目压缩 :boolean | &#39;terser&#39; | &#39;esbuild&#39;</span>
      chunkSizeWarningLimit<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">//chunk 大小警告的限制（以 kbs 为单位）默认：500</span>
      cssTarget<span class="token operator">:</span> <span class="token string">&#39;chrome61&#39;</span> <span class="token comment">//防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ******resolver配置******</span>
    resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
      alias<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 别名配置</span>
        <span class="token comment">// 键必须以斜线开始和结束</span>
        <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        components<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        assets<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/assets&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;#&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;types&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        build<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ******打印+debugger清除配置******</span>
    <span class="token comment">// 测试环境保留打印</span>
    esbuild<span class="token operator">:</span> <span class="token punctuation">{</span>
      pure<span class="token operator">:</span> <span class="token constant">VITE_DROP_CONSOLE</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&#39;console.log&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;debugger&#39;</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    css<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 全局变量+全局引入less+配置antdv主题色</span>
      preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        less<span class="token operator">:</span> <span class="token punctuation">{</span>
          javascriptEnabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token comment">// 全局变量使用：@primary-color</span>
          modifyVars<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;primary-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 全局主色</span>
            <span class="token string-property property">&#39;link-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39; #1890ff&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 链接色</span>
            <span class="token string-property property">&#39;success-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39; #52c41a&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 成功色</span>
            <span class="token string-property property">&#39;warning-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39; #faad14&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 警告色</span>
            <span class="token string-property property">&#39;error-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39; #f5222d&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 错误色</span>
            <span class="token string-property property">&#39;font-size-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39; 14px&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 主字号</span>
            <span class="token string-property property">&#39;heading-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39; rgba(0, 0, 0, 0.85)&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 标题色</span>
            <span class="token string-property property">&#39;text-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39; rgba(0, 0, 0, 0.65)&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 主文本色</span>
            <span class="token string-property property">&#39;text-color-secondary&#39;</span><span class="token operator">:</span> <span class="token string">&#39; rgba(0, 0, 0, 0.45)&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 次文本色</span>
            <span class="token string-property property">&#39;disabled-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39; rgba(0, 0, 0, 0.25)&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 失效色</span>
            <span class="token string-property property">&#39;border-radius-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39; 2px&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 组件/浮层圆角</span>
            <span class="token string-property property">&#39;border-color-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39; #d9d9d9&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 边框色</span>
            <span class="token string-property property">&#39;box-shadow-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39; 0 2px 8px rgba(0, 0, 0, 0.15)&#39;</span> <span class="token comment">// 浮层阴影</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","vue.html.vue"]]);export{k as default};
