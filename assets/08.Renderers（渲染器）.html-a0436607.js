const e=JSON.parse('{"key":"v-6d809170","path":"/book/django-restframework/api/08.Renderers%EF%BC%88%E6%B8%B2%E6%9F%93%E5%99%A8%EF%BC%89.html","title":"Renderers（渲染器）","lang":"zh-CN","frontmatter":{"description":"在将TemplateResponse实例返回给客户端之前，必须渲染它。渲染过程采用模板和上下文的中间表示，并将其转换为可以提供给客户端的最终字节流。 — Django 文档 (https://docs.djangoproject.com/en/stable/stable/template-response/#the-rendering-process)...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/book/django-restframework/api/08.Renderers%EF%BC%88%E6%B8%B2%E6%9F%93%E5%99%A8%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"Renderers（渲染器）"}],["meta",{"property":"og:description","content":"在将TemplateResponse实例返回给客户端之前，必须渲染它。渲染过程采用模板和上下文的中间表示，并将其转换为可以提供给客户端的最终字节流。 — Django 文档 (https://docs.djangoproject.com/en/stable/stable/template-response/#the-rendering-process)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-03T09:19:59.000Z"}],["meta",{"property":"article:author","content":"gstorms"}],["meta",{"property":"article:modified_time","content":"2023-07-03T09:19:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Renderers（渲染器）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-03T09:19:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"gstorms\\",\\"url\\":\\"https://gtcool.top\\"}]}"]]},"headers":[{"level":2,"title":"渲染器的确定方式","slug":"渲染器的确定方式","link":"#渲染器的确定方式","children":[]},{"level":2,"title":"设置渲染器","slug":"设置渲染器","link":"#设置渲染器","children":[]},{"level":2,"title":"渲染器类的排序","slug":"渲染器类的排序","link":"#渲染器类的排序","children":[]},{"level":2,"title":"JSONRenderer","slug":"jsonrenderer","link":"#jsonrenderer","children":[]},{"level":2,"title":"TemplateHTMLRenderer","slug":"templatehtmlrenderer","link":"#templatehtmlrenderer","children":[]},{"level":2,"title":"StaticHTMLRenderer","slug":"statichtmlrenderer","link":"#statichtmlrenderer","children":[]},{"level":2,"title":"BrowsableAPIRenderer","slug":"browsableapirenderer","link":"#browsableapirenderer","children":[]},{"level":2,"title":"AdminRenderer","slug":"adminrenderer","link":"#adminrenderer","children":[]},{"level":2,"title":"HTMLFormRenderer","slug":"htmlformrenderer","link":"#htmlformrenderer","children":[]},{"level":2,"title":"MultiPartRenderer","slug":"multipartrenderer","link":"#multipartrenderer","children":[{"level":3,"title":"data","slug":"data","link":"#data","children":[]},{"level":3,"title":"media_type=None","slug":"media-type-none","link":"#media-type-none","children":[]},{"level":3,"title":"renderer_context=None","slug":"renderer-context-none","link":"#renderer-context-none","children":[]}]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]},{"level":2,"title":"设置字符集","slug":"设置字符集","link":"#设置字符集","children":[]},{"level":2,"title":"媒体类型的不同行为","slug":"媒体类型的不同行为","link":"#媒体类型的不同行为","children":[]},{"level":2,"title":"不明确的媒体类型","slug":"不明确的媒体类型","link":"#不明确的媒体类型","children":[]},{"level":2,"title":"设计你的媒体类型","slug":"设计你的媒体类型","link":"#设计你的媒体类型","children":[]},{"level":2,"title":"HTML错误视图","slug":"html错误视图","link":"#html错误视图","children":[]},{"level":2,"title":"YAML","slug":"yaml","link":"#yaml","children":[]},{"level":2,"title":"XML","slug":"xml","link":"#xml","children":[]},{"level":2,"title":"JSONP","slug":"jsonp","link":"#jsonp","children":[]},{"level":2,"title":"MessagePack","slug":"messagepack","link":"#messagepack","children":[]},{"level":2,"title":"CSV","slug":"csv","link":"#csv","children":[]},{"level":2,"title":"UltraJSON","slug":"ultrajson","link":"#ultrajson","children":[]},{"level":2,"title":"CamelCase JSON","slug":"camelcase-json","link":"#camelcase-json","children":[]},{"level":2,"title":"Pandas (CSV, Excel, PNG)","slug":"pandas-csv-excel-png","link":"#pandas-csv-excel-png","children":[]},{"level":2,"title":"LaTeX","slug":"latex","link":"#latex","children":[]}],"git":{"createdTime":1688375999000,"updatedTime":1688375999000,"contributors":[{"name":"gstorms","email":"wangzx_2015@foxmail.com","commits":1}]},"readingTime":{"minutes":13.08,"words":3924},"filePathRelative":"book/django-restframework/api/08.Renderers（渲染器）.md","localizedDate":"2023年7月3日","autoDesc":true,"excerpt":""}');export{e as data};
