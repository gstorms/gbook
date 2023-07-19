const e=JSON.parse(`{"key":"v-82b52d0e","path":"/testnote/Selenium%E7%B3%BB%E5%88%97%EF%BC%8806%EF%BC%89---%E8%AF%A6%E7%BB%86%E8%A7%A3%E8%AF%BB%E5%BC%BA%E5%88%B6%E7%AD%89%E5%BE%85%E3%80%81%E9%9A%90%E5%BC%8F%E7%AD%89%E5%BE%85%E3%80%81%E6%98%BE%E5%BC%8F%E7%AD%89%E5%BE%85%E7%9A%84%E5%8C%BA%E5%88%AB%E5%92%8C%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html","title":"WebDriver提供了两种类型的等待：显式等待和隐式等待","lang":"zh-CN","frontmatter":{"description":"设置元素等待 为什么需要设置元素等待？ 因为，目前大多数Web应用程序都是使用Ajax和Javascript开发的；每次加载一个网页，就会加载各种HTML标签、JS文件 ; 但是，加载肯定有加载顺序，大型网站很难说一秒内就把所有东西加载出来，不仅如此，加载速度也受网络波动影响; 因此，当我们要在网页中做元素定位的时候，有可能我们打开了网页但元素未加载出...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/gbook/testnote/Selenium%E7%B3%BB%E5%88%97%EF%BC%8806%EF%BC%89---%E8%AF%A6%E7%BB%86%E8%A7%A3%E8%AF%BB%E5%BC%BA%E5%88%B6%E7%AD%89%E5%BE%85%E3%80%81%E9%9A%90%E5%BC%8F%E7%AD%89%E5%BE%85%E3%80%81%E6%98%BE%E5%BC%8F%E7%AD%89%E5%BE%85%E7%9A%84%E5%8C%BA%E5%88%AB%E5%92%8C%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"WebDriver提供了两种类型的等待：显式等待和隐式等待"}],["meta",{"property":"og:description","content":"设置元素等待 为什么需要设置元素等待？ 因为，目前大多数Web应用程序都是使用Ajax和Javascript开发的；每次加载一个网页，就会加载各种HTML标签、JS文件 ; 但是，加载肯定有加载顺序，大型网站很难说一秒内就把所有东西加载出来，不仅如此，加载速度也受网络波动影响; 因此，当我们要在网页中做元素定位的时候，有可能我们打开了网页但元素未加载出..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-03T09:19:59.000Z"}],["meta",{"property":"article:author","content":"gstorms"}],["meta",{"property":"article:modified_time","content":"2023-07-03T09:19:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WebDriver提供了两种类型的等待：显式等待和隐式等待\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-03T09:19:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"gstorms\\",\\"url\\":\\"https://gtcool.top\\"}]}"]]},"headers":[{"level":2,"title":"设置元素等待","slug":"设置元素等待","link":"#设置元素等待","children":[{"level":3,"title":"如果我们不设置元素等待，那怎么避免 **因元素未加载出来而定位失败 **的情况出现呢？","slug":"如果我们不设置元素等待-那怎么避免-因元素未加载出来而定位失败-的情况出现呢","link":"#如果我们不设置元素等待-那怎么避免-因元素未加载出来而定位失败-的情况出现呢","children":[]}]},{"level":2,"title":"强制等待的栗子","slug":"强制等待的栗子","link":"#强制等待的栗子","children":[]},{"level":2,"title":"隐式等待","slug":"隐式等待","link":"#隐式等待","children":[{"level":3,"title":"什么是隐式等待？","slug":"什么是隐式等待","link":"#什么是隐式等待","children":[]},{"level":3,"title":"如何体现隐式等待？","slug":"如何体现隐式等待","link":"#如何体现隐式等待","children":[]},{"level":3,"title":"隐式等待的弊端","slug":"隐式等待的弊端","link":"#隐式等待的弊端","children":[]},{"level":3,"title":"隐式等待的代码","slug":"隐式等待的代码","link":"#隐式等待的代码","children":[]}]},{"level":2,"title":"显式等待","slug":"显式等待","link":"#显式等待","children":[{"level":3,"title":"什么是显式等待？","slug":"什么是显式等待","link":"#什么是显式等待","children":[]},{"level":3,"title":"显式等待的优势","slug":"显式等待的优势","link":"#显式等待的优势","children":[]},{"level":3,"title":"显式等待的代码","slug":"显式等待的代码","link":"#显式等待的代码","children":[]}]},{"level":2,"title":"WebDriverWait实例初始化传参","slug":"webdriverwait实例初始化传参","link":"#webdriverwait实例初始化传参","children":[]},{"level":2,"title":"通俗易懂的 WebDriverWait","slug":"通俗易懂的-webdriverwait","link":"#通俗易懂的-webdriverwait","children":[]},{"level":2,"title":"WebDriverWait实例的两个方法","slug":"webdriverwait实例的两个方法","link":"#webdriverwait实例的两个方法","children":[{"level":3,"title":"until(self, method, message='')","slug":"until-self-method-message","link":"#until-self-method-message","children":[]},{"level":3,"title":"until_not(self, method, message='')","slug":"until-not-self-method-message","link":"#until-not-self-method-message","children":[]},{"level":3,"title":"两个方法的 method参数注意点","slug":"两个方法的-method参数注意点","link":"#两个方法的-method参数注意点","children":[]},{"level":3,"title":"官方提供的两个小例子","slug":"官方提供的两个小例子","link":"#官方提供的两个小例子","children":[]}]},{"level":2,"title":"expected_conditions的介绍","slug":"expected-conditions的介绍","link":"#expected-conditions的介绍","children":[]},{"level":2,"title":"其一：presence_of_element_located","slug":"其一-presence-of-element-located","link":"#其一-presence-of-element-located","children":[{"level":3,"title":"作用","slug":"作用","link":"#作用","children":[]},{"level":3,"title":"locator参数","slug":"locator参数","link":"#locator参数","children":[]},{"level":3,"title":"一起来看看By模块的源码","slug":"一起来看看by模块的源码","link":"#一起来看看by模块的源码","children":[]}]},{"level":2,"title":"其二：presence_of_all_elements_located","slug":"其二-presence-of-all-elements-located","link":"#其二-presence-of-all-elements-located","children":[{"level":3,"title":"唯一要注意的点就是","slug":"唯一要注意的点就是","link":"#唯一要注意的点就是","children":[]}]}],"git":{"createdTime":1688375999000,"updatedTime":1688375999000,"contributors":[{"name":"gstorms","email":"wangzx_2015@foxmail.com","commits":1}]},"readingTime":{"minutes":6.5,"words":1950},"filePathRelative":"testnote/Selenium系列（06）---详细解读强制等待、隐式等待、显式等待的区别和源码解读.md","localizedDate":"2023年7月3日","autoDesc":true,"excerpt":""}`);export{e as data};
