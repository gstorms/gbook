
## 前言
- Test Runner 也叫运行器，Cypress 因为它的存在，才在众多自动化测试框架中脱颖而出
- Cypress 使测试在一个**独特的交互式运行器**中运行测试，不仅可以在执行命令时查看测试结果，同时还允许查看被测应用程序

 

#### Test Runner 的简介

- Test Runner 是一个库或者工具，它用来挑选一个包含单元测试或者一系列其他设置的测试集合**【打包测试用例集】**
- 然后执行这个测试集合，并将测试结果写入控制台或日志文件**【运行测试用例集】**
- Test Runner 使创建和执行测试套件更加方便和灵活
- 不同的语言，会有不同的 Test Runner

 

## Cypress Test Runner 
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200604174054542-1340909991.png)  
Cypress 自带的交互式测试运行器功能强大，允许你在测试运行期间就查看测试命令的执行结果，并同时监控在命令执行时，被测程序所处的状态  
 

## **Cypress Test Runner 的组成**
**讲解的顺序就是按上面图片1-6哦**  
 

### 测试状态目录（Test Status Menu）
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200604175512274-1356564086.png)  
展示测试用例成功的数目  
   
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200604175524390-220931143.png)  
展示测试用例失败的数目  
   
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200604175551484-179297259.png)  
展示测试用例待定的数目  
   
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200604175830468-1192209040.png)  
最后展示整个测试文件的运行总时间  
   
![](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200604175640517-1835273714.png)  
右侧还可以手动再次运行一次当前测试文件的所有测试用例哦  
 

### 命令日志（Command Log）

#### 命令
这里要说下命令的意思，其实就是调用的方法，只不过官方会将它说成命令；**一个命令等于调用了一个方法**  
 

#### 作用

- 命令日志用于记录每个被执行的命令
- 点击命令，可以在 Console 中查看命令应用于哪个元素，以及执行的详细信息；同时应用程序预览（App Preview）会显示当前命令执行时**被测应用程序的状态**

 

### URL 预览（URL Preview）
展示测试命令执行时，被测应用程序所处的 URL，它能够使你更方便地**查看测试路由**  
 

### 应用程序预览（App Preview）
展示测试运行时，**被测应用程序的实时状态（样式，动画之类的）**  
 

### 视窗大小（ViewPoint Sizing）

- 可以通过设置视窗大小来测试页面**响应式布局**
- 可以在 cypress.json 文件中通过设置 viewportWidth 和 viewportHeight 两个配置项来控制视窗大小

 

### Cypress 元素定位辅助器（Selector Playground）
可以帮助我们**识别元素唯一的定位标识**  
**
> [https://www.cnblogs.com/poloyy/p/13045410.html](https://www.cnblogs.com/poloyy/p/13045410.html)

