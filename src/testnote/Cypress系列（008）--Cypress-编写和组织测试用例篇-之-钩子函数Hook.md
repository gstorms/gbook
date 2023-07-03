
## Hook
就是常说的钩子函数，在 pytest 框架里面也有 hook 这个概念；接下来就让我们来看看 Mocha 提供的 Hook 函数叭！  
 

## Mocha 提供的 Hook 函数

- before()
- beforeEach()
- afterEach()
- after()

 

### hook 的作用
利用钩子函数可以在所有**测试用例执行前**做一些预置操作（如：准被测试数据、测试环境）  
或者在**测试结束后**做一些后置操作（如：清理测试数据）  
 

### hook 具体写法的栗子（比较长，耐心敲，耐心看）
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603140328124-324322765.png)

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603140341751-1760493878.png)

#### 知识点
若包含**多级测试套件**，那么父级套件、祖父级套件声明的 hook 函数会作用于所有子级套件的测试用例，孙子级套件的测试用例...以此类推**（如：栗子中的二级套件、孙子级套件）**  
 

### before()

- 该测试套件下，所有测试用例的**统一前置**操作
- 它在一个 describe() 或 context() 内只会执行一次，在所有 it() 之**前**执行
- 在运行结果可以看到是叫 BEFORE ALL

![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603141040916-1221477156.png)  
 

### after()

- 该测试套件下，所有测试用例的**统一后置**操作
- 它在一个  describe()  或 context() 内只会执行一次，在所有 it() 之**后**执行
- 在运行结果可以看到是叫  AFTER ALL ，而且是在最后一行

![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603143332828-2141197321.png)  
 

### beforeEach()

- 该测试套件下，每个测试用例的**前置**操作
- 一个  describe()  或 context() 内有多少个测试用例 it() ，就会执行几次 beforeEach()
- 在运行结果可以看到是叫 BEFORE EACH

![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603143725036-2104234506.png)  
 

### afterEach()

- 该测试套件下，每个测试用例的**后置**操作
- 一个 describe()  或 context() 内有多少个测试用例 it() ，就会执行几次  afterEach()  
- 在运行结果可以看到是叫 AFTER EACH 

![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200603144438601-530517176.png)  
 

> [https://www.cnblogs.com/poloyy/p/13037502.html](https://www.cnblogs.com/poloyy/p/13037502.html)

