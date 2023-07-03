
## 作用
- 在测试中获取并设置配置选项
- 配置项官方文章可看：[https://docs.cypress.io/guides/references/configuration.html](https://docs.cypress.io/guides/references/configuration.html)
- 后面再自己写配置项的博客

 

#### 作用范围

- 使用 Cypress.config 设置的配置项**仅在**当前规范文件（js 测试文件）的范围内生效
- Cypress 隔离运行每个测试文件：在一个测试文件中更改的配置在其他测试文件中**不可见**

 

## 语法格式

```javascript
Cypress.config()
Cypress.config(name)
Cypress.config(name, value)
Cypress.config(object)
```
 

#### name
要获取或设置的配置的名称  
 

#### value
要设置的配置值  
 

#### object
使用对象属性（ {} 的格式）设置多个配置项   
 

## 实际栗子

#### 代码
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124144436807-935690094.png)  
 

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124165923528-1403332894.png)  
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124170012757-1788491737.png)  
可以看到统一修改的配置项  
 

## 重点
![](https://img2020.cnblogs.com/blog/1896874/202011/1896874-20201124170657892-257252918.png)

- 获取的配置项是依照上图的 Configuration 来拿的
- 使用 Cypress.config 设置配置项会覆盖已有的配置项

 
> [https://www.cnblogs.com/poloyy/p/14030243.html](https://www.cnblogs.com/poloyy/p/14030243.html)

