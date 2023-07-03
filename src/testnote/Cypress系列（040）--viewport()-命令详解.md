
## 作用
控制浏览器窗口的尺寸和方向  
 

#### 重点

- 也可以通过在配置项中定义 viewportWidth 和 viewportHeight 来全局设置浏览器窗口的宽度和高度
- **默认宽高：**1000px * 660px

 

## 语法格式
```javascript
cy.viewport(width, height)
cy.viewport(preset, orientation)
cy.viewport(width, height, options)
cy.viewport(preset, orientation, options)
```
 

## 参数讲解

#### width、height

- 必须为非负数
- 像素单位 px

 

#### options
只有 log，不再展开讲了  
 

#### orientation 

- 屏幕的方向
- **默认：**纵向， portrait
- 可改横向， landscape

 

#### preset 
预设值，Cypress 提供了以下的预设值

| **预设值** | **宽度** | **高度** |
| --- | --- | --- |
| ipad-2 | 768 | 1024 |
| ipad-mini | 768 | 1024 |
| iphone-3 | 320 | 480 |
| iphone-4 | 320 | 480 |
| iphone-5 | 320 | 568 |
| iphone-6 | 375 | 667 |
| iphone-6+ | 414 | 736 |
| iphone-x | 375 | 812 |
| iphone-xr | 414 | 896 |
| macbook-11 | 1366 | 768 |
| macbook-13 | 1280 | 800 |
| macbook-15 | 1440 | 900 |
| samsung-note9 | 414 | 846 |
| samsung-s10 | 360 | 760 |

 

## 正确格式
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622093308296-283791512.png)  
 

## 重要事项

#### 独立命令
cy.viewport() 后面不能再链接其他命令  
 

#### 自动缩放

- 默认情况下，如果屏幕不够大，无法显示应用程序所有像素，则 Cypress 会**将应用程序缩放并居中**，以适应 Cypress Test Runner
- 缩放应用程序**不会影响**应用程序的任何计算或行为
- **自动缩放好处：**无论屏幕大小如何，测试都始终通过或失败；测试最终在 CI 中运行，因此无论 Cypress 在什么计算机上运行，所有 viewports 都将相同

 

### Cypress.config()
也可以通过此命令来设置全局 viewport 宽高  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622093304295-676238682.png)  
   
**结尾**  
我的博客即将同步至腾讯云+社区，邀请大家一同入驻：[https://cloud.tencent.com/developer/support-plan?invite_code=12vd92hxgwgj1](https://cloud.tencent.com/developer/support-plan?invite_code=12vd92hxgwgj1)

> [https://www.cnblogs.com/poloyy/p/13174388.html](https://www.cnblogs.com/poloyy/p/13174388.html)

