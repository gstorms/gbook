
## 前言
- Cypress 底层依赖于很多优秀的开源测试框架，其中就有 **Mocha**
- Mocha 是一个适用于 Node.js 和浏览器的测试框架，它使得异步测试变得简单

 

### JS 语言带来的问题
JS 是单线程异步执行的，这使得测试变得复杂，因为无法像测试同步执行的代码那样，直接判断函数的返回值是否符合预期（因为给函数赋值时函数可能并未执行）  
 

### 如何验证异步函数的正确性

- 需要测试框架**支持回调**，Promise 或者其他方式来验证异步函数的正确性
- Mocha 提供了出色的**异步支持**包括  Promise ，从而使得异步测试变得简单

 

## Cypress 结合 Mocha
Cypress 继承并扩展了 Mocha 对异步的支持  
 

### Mocha 提供了什么

- 多种接口来定义测试套件，Hooks，单个测试（ Individual ）
- BDD（Behavior-Driven Development，**行为驱动开发**）
- TDD（Test-Driven Development，**测试驱动开发**）
- Exports、QUnit、Require

 

### Cypress 采纳了 Mocha 的 BDD 语法

- 该语法**非常适合**集成测试和单元测试
- 在 Mocha 中，一个** BDD 风格的测试用例**看起来是这样的

![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603130100118-1611276041.png)  
 

### 常见 Mocha 模块
Cypress 将 Mocha 硬编码在自己的框架中，所以编写测试用例都是基于 Mocha 提供的如下基本功能模块：

- describe()
- context()
- it()
- before()
- beforeEach()
- afterEach()
- after()
- .only()
- .skip()

 

### 对于一条可执行的测试用例来说，有以下两个必要的组成部分

#### describe()

- 代表测试套件，里面可以设定 context() ，也可以包括多个测试用例 it() ，还能嵌套子测试套件
- 一个测试套件可以不包括任何钩子函数（Hook），但必须包含至少一条测试用例 it()

 

#### it()
代表一条测试用例  
 

#### 其他模块

- 除上述两个功能模块外，其他功能模块对于一条可执行的测试来说，都是**可选的**
- 例如  context() 是 describe() 的别名，其**行为方式是一致**的，直接用 context() 代替 describe() 也是可以的哦

![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603132544618-1397739152.png)  
 可以看到，一共有三层的 context() ；  
运行成功看看下面的结果  
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603132654893-1811386580.png)  
 
> [https://www.cnblogs.com/poloyy/p/13034592.html](https://www.cnblogs.com/poloyy/p/13034592.html)

