const t=JSON.parse(`{"key":"v-5d0a913a","path":"/book/notes/note/python%E5%BC%95%E7%94%A8%E9%97%AE%E9%A2%98%EF%BC%9AImportError.html","title":"python引用问题：ImportError","lang":"zh-CN","frontmatter":{"description":"执行python时，一直提示ImportError: cannot import name 'Config'，但是查看了路径都没问题 最终在网上找到了原因，是循环导入问题。 config.py: file_reader.py: 执行file_reader.py的时候会提示ImportError 因为是在第一个文件引用第二个文件，又在第二个文件引用第一个...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/book/notes/note/python%E5%BC%95%E7%94%A8%E9%97%AE%E9%A2%98%EF%BC%9AImportError.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"python引用问题：ImportError"}],["meta",{"property":"og:description","content":"执行python时，一直提示ImportError: cannot import name 'Config'，但是查看了路径都没问题 最终在网上找到了原因，是循环导入问题。 config.py: file_reader.py: 执行file_reader.py的时候会提示ImportError 因为是在第一个文件引用第二个文件，又在第二个文件引用第一个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-03T09:19:59.000Z"}],["meta",{"property":"article:author","content":"gstorms"}],["meta",{"property":"article:modified_time","content":"2023-07-03T09:19:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"python引用问题：ImportError\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-03T09:19:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"gstorms\\",\\"url\\":\\"https://gtcool.top\\"}]}"]]},"headers":[],"git":{"createdTime":1688375999000,"updatedTime":1688375999000,"contributors":[{"name":"gstorms","email":"wangzx_2015@foxmail.com","commits":1}]},"readingTime":{"minutes":0.4,"words":119},"filePathRelative":"book/notes/note/python引用问题：ImportError.md","localizedDate":"2023年7月3日","autoDesc":true,"excerpt":""}`);export{t as data};
