import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as s}from"./app-207e7d61.js";const d={},a=s(`<h1 id="自己建一个python库并安装使用" tabindex="-1"><a class="header-anchor" href="#自己建一个python库并安装使用" aria-hidden="true">#</a> 自己建一个Python库并安装使用</h1><p>在一个空白目录中新建：<code>setup.py</code>文件，模块目录<code>wutils</code>（这个可以任意取名），目录中存放自己的模块文件和<code>__init__.py</code><br> 结构如下：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>D:<span class="token operator">/</span>projects/
││  setup<span class="token punctuation">.</span>py
││
└└──wutils
        file_reader<span class="token punctuation">.</span>py
        __init__<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setup.py文件:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from setuptools import setup

setup(
    name=&#39;wutils&#39;,#包名
    version=&#39;1.1&#39;,#版本号
    author=&#39;author&#39;,#作者
    packages=[&#39;wutils&#39;]#包含的模块
    )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建模块：<code>python setup.py build</code>,生成build目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:.
││  setup.py
││
├├──build
││  └└──lib
││      └└──wutils
││              file_reader.py
││              __init__.py
││
└└──wutils
        file_reader.py
        __init__.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成发布压缩包：<code>python setup.py sdist</code>,生成个dist目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├├──dist
││      wutils-1.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解压后安装<code>python setup.py install</code>（这个需要在解压的目录中安装）<br><img src="https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199853799-23de187f-6a06-491f-85ab-6892c16bb160.png#align=left&amp;display=inline&amp;height=254&amp;margin=[object Object]&amp;originHeight=254&amp;originWidth=634&amp;size=0&amp;status=done&amp;style=none&amp;width=634" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
Installed d:\\programdata\\miniconda3\\lib\\site-packages\\wutils-1.1-py3.7.egg
Processing dependencies for wutils==1.1
Finished processing dependencies for wutils==1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装成功，可以使用了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from wutils.file_reader import YamlReader  #file_reader 是自己写的模块

aa = YamlReader(&#39;D:\\\\temp\\\\compute\\\\cn.yml&#39;)

print(aa.data)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[a];function t(r,c){return i(),n("div",null,l)}const p=e(d,[["render",t],["__file","自己建一个Python库并安装使用.html.vue"]]);export{p as default};
