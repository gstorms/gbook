const e=JSON.parse('{"key":"v-0faa678e","path":"/book/django-restframework/Django-restframework%EF%BC%88%E8%BD%AC%E8%BD%BD%EF%BC%89/Django-restframework05-%E7%94%A8%E6%88%B7%E8%AE%A4%E8%AF%81%E5%92%8C%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86.html","title":"DRF05-用户认证和权限管理","lang":"zh-CN","frontmatter":{"description":"1. 目的 实例对象始终与创建者相关联; 只有通过身份验证的用户可以创建实例; 只有对象的创建者能够更新和删除该对象; 未认证用户应该只有只读权限; 2. 数据库中字段的on update 和 on delete参数 数据库外键定义的可选项，用来设置当主键表中的被参考列的数据发生变化时，外键表中响应字段的变化规则。update则是主键表中被参考字段的值...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/book/django-restframework/Django-restframework%EF%BC%88%E8%BD%AC%E8%BD%BD%EF%BC%89/Django-restframework05-%E7%94%A8%E6%88%B7%E8%AE%A4%E8%AF%81%E5%92%8C%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"DRF05-用户认证和权限管理"}],["meta",{"property":"og:description","content":"1. 目的 实例对象始终与创建者相关联; 只有通过身份验证的用户可以创建实例; 只有对象的创建者能够更新和删除该对象; 未认证用户应该只有只读权限; 2. 数据库中字段的on update 和 on delete参数 数据库外键定义的可选项，用来设置当主键表中的被参考列的数据发生变化时，外键表中响应字段的变化规则。update则是主键表中被参考字段的值..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-03T09:19:59.000Z"}],["meta",{"property":"article:author","content":"gstorms"}],["meta",{"property":"article:modified_time","content":"2023-07-03T09:19:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DRF05-用户认证和权限管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-03T09:19:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"gstorms\\",\\"url\\":\\"https://gtcool.top\\"}]}"]]},"headers":[{"level":2,"title":"1. 目的","slug":"_1-目的","link":"#_1-目的","children":[]},{"level":2,"title":"2. 数据库中字段的on update 和 on delete参数","slug":"_2-数据库中字段的on-update-和-on-delete参数","link":"#_2-数据库中字段的on-update-和-on-delete参数","children":[]},{"level":2,"title":"3. 删除原数据库和迁移记录","slug":"_3-删除原数据库和迁移记录","link":"#_3-删除原数据库和迁移记录","children":[]},{"level":2,"title":"4.添加用户控制入口","slug":"_4-添加用户控制入口","link":"#_4-添加用户控制入口","children":[]},{"level":2,"title":"5. 设置断点","slug":"_5-设置断点","link":"#_5-设置断点","children":[{"level":3,"title":"1.在serializers.py中添加UserSerializer","slug":"_1-在serializers-py中添加userserializer","link":"#_1-在serializers-py中添加userserializer","children":[]},{"level":3,"title":"2.在views.py中使用只读属性","slug":"_2-在views-py中使用只读属性","link":"#_2-在views-py中使用只读属性","children":[]},{"level":3,"title":"3.添加url","slug":"_3-添加url","link":"#_3-添加url","children":[]},{"level":3,"title":"4.连接Snippets和Users","slug":"_4-连接snippets和users","link":"#_4-连接snippets和users","children":[]}]},{"level":2,"title":"6. 更新serializer","slug":"_6-更新serializer","link":"#_6-更新serializer","children":[]},{"level":2,"title":"7.为我们的视图函数添加权限认证","slug":"_7-为我们的视图函数添加权限认证","link":"#_7-为我们的视图函数添加权限认证","children":[]},{"level":2,"title":"8. 添加登录窗口url,rest_framework自带","slug":"_8-添加登录窗口url-rest-framework自带","link":"#_8-添加登录窗口url-rest-framework自带","children":[]},{"level":2,"title":"9. 用户权限内等级管理","slug":"_9-用户权限内等级管理","link":"#_9-用户权限内等级管理","children":[]},{"level":2,"title":"10. 用户认证","slug":"_10-用户认证","link":"#_10-用户认证","children":[]}],"git":{"createdTime":1688375999000,"updatedTime":1688375999000,"contributors":[{"name":"gstorms","email":"wangzx_2015@foxmail.com","commits":1}]},"readingTime":{"minutes":2.89,"words":866},"filePathRelative":"book/django-restframework/Django-restframework（转载）/Django-restframework05-用户认证和权限管理.md","localizedDate":"2023年7月3日","autoDesc":true,"excerpt":""}');export{e as data};
