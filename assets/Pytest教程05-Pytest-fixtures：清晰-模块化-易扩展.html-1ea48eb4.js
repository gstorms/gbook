const t=JSON.parse('{"key":"v-1406f311","path":"/book/pytest/Pytest%E6%95%99%E7%A8%8B05-Pytest-fixtures%EF%BC%9A%E6%B8%85%E6%99%B0-%E6%A8%A1%E5%9D%97%E5%8C%96-%E6%98%93%E6%89%A9%E5%B1%95.html","title":"Pytest权威教程05-Pytest-fixtures：清晰-模块化-易扩展","lang":"zh-CN","frontmatter":{"description":"2.0/2.3/2.4版本新函数 text fixtures的目的是为测试的重复执行提供一个可靠的固定基线。 pytest fixture 比经典的 xUnit setUp/tearDown 方法有着显着的改进： fixtures 具有明确的名称,在测试用例/类/模块或整个项目中通过声明使用的 fixtures 名称来使用。; fixtures 以模块...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/book/pytest/Pytest%E6%95%99%E7%A8%8B05-Pytest-fixtures%EF%BC%9A%E6%B8%85%E6%99%B0-%E6%A8%A1%E5%9D%97%E5%8C%96-%E6%98%93%E6%89%A9%E5%B1%95.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"Pytest权威教程05-Pytest-fixtures：清晰-模块化-易扩展"}],["meta",{"property":"og:description","content":"2.0/2.3/2.4版本新函数 text fixtures的目的是为测试的重复执行提供一个可靠的固定基线。 pytest fixture 比经典的 xUnit setUp/tearDown 方法有着显着的改进： fixtures 具有明确的名称,在测试用例/类/模块或整个项目中通过声明使用的 fixtures 名称来使用。; fixtures 以模块..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-03T09:19:59.000Z"}],["meta",{"property":"article:author","content":"gstorms"}],["meta",{"property":"article:modified_time","content":"2023-07-03T09:19:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Pytest权威教程05-Pytest-fixtures：清晰-模块化-易扩展\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-03T09:19:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"gstorms\\",\\"url\\":\\"https://gtcool.top\\"}]}"]]},"headers":[{"level":3,"title":"Fixtures作为函数参数使用","slug":"fixtures作为函数参数使用","link":"#fixtures作为函数参数使用","children":[]},{"level":3,"title":"Fixtures: 依赖注入的主要例子","slug":"fixtures-依赖注入的主要例子","link":"#fixtures-依赖注入的主要例子","children":[]},{"level":3,"title":"conftest.py: 共享fixture函数","slug":"conftest-py-共享fixture函数","link":"#conftest-py-共享fixture函数","children":[]},{"level":3,"title":"共享测试数据","slug":"共享测试数据","link":"#共享测试数据","children":[]},{"level":3,"title":"生效范围：在测试类/测试模块/测试会话中共享fixture对象","slug":"生效范围-在测试类-测试模块-测试会话中共享fixture对象","link":"#生效范围-在测试类-测试模块-测试会话中共享fixture对象","children":[]},{"level":3,"title":"高范围的fixture函数优先实例化","slug":"高范围的fixture函数优先实例化","link":"#高范围的fixture函数优先实例化","children":[]},{"level":3,"title":"fixture结束/执行teardown代码","slug":"fixture结束-执行teardown代码","link":"#fixture结束-执行teardown代码","children":[]},{"level":3,"title":"Fixtures中使用测试上下文的内省信息","slug":"fixtures中使用测试上下文的内省信息","link":"#fixtures中使用测试上下文的内省信息","children":[]},{"level":3,"title":"Fixture作为函数工厂(译者注：Fixture返回一个函数，以支持根据参数得到不同的结果。)","slug":"fixture作为函数工厂-译者注-fixture返回一个函数-以支持根据参数得到不同的结果。","link":"#fixture作为函数工厂-译者注-fixture返回一个函数-以支持根据参数得到不同的结果。","children":[]},{"level":3,"title":"Fixtures参数化","slug":"fixtures参数化","link":"#fixtures参数化","children":[]},{"level":3,"title":"使用参数化fixtures标记","slug":"使用参数化fixtures标记","link":"#使用参数化fixtures标记","children":[]},{"level":3,"title":"模块化：在fixture函数中使用fixtures函数","slug":"模块化-在fixture函数中使用fixtures函数","link":"#模块化-在fixture函数中使用fixtures函数","children":[]},{"level":3,"title":"使用fixture实例自动组织测试用例","slug":"使用fixture实例自动组织测试用例","link":"#使用fixture实例自动组织测试用例","children":[]},{"level":3,"title":"在类/模块/项目中使用fixtures","slug":"在类-模块-项目中使用fixtures","link":"#在类-模块-项目中使用fixtures","children":[]},{"level":3,"title":"自动使用fixtures(xUnit 框架的setup固定方法)","slug":"自动使用fixtures-xunit-框架的setup固定方法","link":"#自动使用fixtures-xunit-框架的setup固定方法","children":[]},{"level":3,"title":"不同级别的fixtures的覆盖(优先级)","slug":"不同级别的fixtures的覆盖-优先级","link":"#不同级别的fixtures的覆盖-优先级","children":[]}],"git":{"createdTime":1688375999000,"updatedTime":1688375999000,"contributors":[{"name":"gstorms","email":"wangzx_2015@foxmail.com","commits":1}]},"readingTime":{"minutes":21.97,"words":6590},"filePathRelative":"book/pytest/Pytest教程05-Pytest-fixtures：清晰-模块化-易扩展.md","localizedDate":"2023年7月3日","autoDesc":true,"excerpt":""}');export{t as data};
