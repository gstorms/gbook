# Cypress-的鼠标悬浮等事件不生效（mouseover等）解决方法
页面有个元素需要鼠标悬停才会显示出来，写用例的时候死活写不出来，看cypress文档说使用`.trigger("mouseover")` ,但是没有用！！！  
最终在`https://github.com/cypress-io/cypress/issues/10`，这里有个人分享了一个插件，试了下终于OK了  
插件地址：  
`https://github.com/dmtrKovalenko/cypress-real-events`  
安装：

```bash
npm install cypress-real-events

yarn add cypress-real-events
```

注册指令：  
在文件`cypress/support/index.{js,ts}`中引入一下

```javascript
import "cypress-real-events/support";
```

使用:

```javascript
cy.get("button").realHover();
cy.get("button").realHover(options);
```
