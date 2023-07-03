
## 前言
- 一个测试用例集（describe）通常包含多个测试用例（it）
- 当网络不稳定而引起测试失败时，我们希望仅重试失败的用例而不是重跑整个测试用例集
- 但测试运行器默认仅支持重试整个测试用例集
- 今天讲的插件就能满足我们的需求

 

## 安装

```javascript
npm i -D cypress-skip-and-only-ui
```
 

## 配置
在 cypress/supprt/index.js 文件，任意位置添加配置项如下  
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200908102849179-445503099.png)  
   
在 cypress/plugins/index.js  文件，任意位置添加配置如下  
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200908104436753-664019920.png)  
 

## 使用
   
![](https://img2020.cnblogs.com/blog/1896874/202009/1896874-20200908105922234-1839507294.gif)  
 

## 备注
现在新版本的 Cypress 是不支持这个插件的，但不影响真实使用，毕竟这也是调试作用居多  
 
> [https://www.cnblogs.com/poloyy/p/13631293.html](https://www.cnblogs.com/poloyy/p/13631293.html)

