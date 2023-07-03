
## 前言
Mcok 应该大家都很熟悉了就不再细说了  
 

#### 提出问题
如何实现当想用 Mock Server 返回的时候就用 Mock Server，当不想用 Mock Server 时就请求真实的服务器呢  
 

#### Cypress 提供的方案

- 使用自带的命令 cy.server() 、 cy.route()
- 无须自己搭建 Mock Server，就能模拟接口请求的各种返回及路由跳转
- 使用 Cypress 自带的 Mock 功能，不仅可以进行接口测试，还可以截获、控制及修改接口返回的行为

 

## .server() 命令详解
直接看文章学习：[https://www.cnblogs.com/poloyy/p/13856700.html](https://www.cnblogs.com/poloyy/p/13856700.html)  
 

## .route() 命令详解
直接看文章学习：[https://www.cnblogs.com/poloyy/p/13852941.html](https://www.cnblogs.com/poloyy/p/13852941.html)

> [https://www.cnblogs.com/poloyy/p/13855595.html](https://www.cnblogs.com/poloyy/p/13855595.html)

