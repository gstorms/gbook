
## 前言
前面我们介绍了allure的快速入门，只是单纯的敲allure命令而已  
其实allure还有内置的特性可以让我们在pytest代码里面用起来，然后我们生成的报告更加直观、详细、贴合管理层的心意...  
 

## Environment
可以理解成**环境变量参数**，没有什么实际作用，个人觉得只是为了让别人知道本次测试的运行环境参数而已，显示啥都是自己定的  
**注意！！默认是没有的哦**  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200416190714772-747732691.png)  
 

## 如何添加Environment呢
通过创建environment.properties或者environment.xml文件，并把文件存放到allure-results(这个目录是生成最后的html报告之前，生成依赖文件的目录)目录下，就是 --alluredir  后面跟的目录  
像我这里目录就是allure，所以放在allure下面 --alluredir allure  
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200416192513518-762408880.png)  
 

### environment.properties

```
Browser=Chrome
Browser.Version=81.0.4044.92
Stand=Production
ApiUrl=127.0.0.1/login
python.Version=3.7.2
```
   
**或者**

### environment.xml

```xml
<environment>
    <parameter>
        <key>Browser</key>
        <value>Chrome</value>
    </parameter>
    <parameter>
        <key>Browser.Version</key>
        <value>81.0.4044.92</value>
    </parameter>
    <parameter>
        <key>Stand</key>
        <value>Production</value>
    </parameter>
        <parameter>
        <key>ApiUrl</key>
        <value>127.0.0.1/login</value>
    </parameter>
        <parameter>
        <key>python.Version</key>
        <value>3.7.2</value>
    </parameter>
</environment>
```
**注意！都不可以写中文哦！！！！亲测！！会乱码**  
 

### **运行之后，我们看看allure报告的environment**
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200416192739245-1776053197.png)  
 

## Categories
**直译：**分类  
**通俗理解：**测试用例结果的分类  
默认情况下，有两类缺陷：

1. Product defects 产品缺陷（测试结果：failed）
1. Test defects 测试缺陷（测试结果：error/broken）

我们是可以创建自定义缺陷分类的，将 categories.json 文件添加到allure-results目录即可（和上面environment.properties放同一个目录）  
 

### categories.json

```json
[
  {
    "name": "Ignored tests", 
    "matchedStatuses": ["skipped"] 
  },
  {
    "name": "Infrastructure problems",
    "matchedStatuses": ["broken", "failed"],
    "messageRegex": ".*bye-bye.*" 
  },
  {
    "name": "Outdated tests",
    "matchedStatuses": ["broken"],
    "traceRegex": ".*FileNotFoundException.*" 
  },
  {
    "name": "Product defects",
    "matchedStatuses": ["failed"]
  },
  {
    "name": "Test defects",
    "matchedStatuses": ["broken"]
  }
]
```
 

### 讲下参数的含义

- **name**：分类名称
- **matchedStatuses**：测试用例的运行状态，默认["failed", "broken", "passed", "skipped", "unknown"]
- **messageRegex**：测试用例运行的错误信息，默认是 .* ，是通过正则去匹配的哦！
- **traceRegex**：测试用例运行的错误堆栈信息，默认是  .*  ，也是通过正则去匹配的哦！

### 注意
这里的name是可以写中文的哦！  
 

## Flaky test
**用法：**在类或者方法上直接加 @Flaky  
**官方也说了：**可以将整个测试类标记为Flaky  
 

### 那什么是Flaky呢？

- 简单来说就是，不够稳定的测试用例集，有可能前阵子还运行成功，过阵子就运行失败，理解成“闪烁”
- 标记成Flaky的好处就是：当用例失败的情况下，我们能获取足够详细的信息，毕竟有可能某些测试用例是非常重要的
- 如果不标记为Flaky的话，可能就要禁用这些测试

> 转载：[https://www.cnblogs.com/poloyy/p/12715212.html](https://www.cnblogs.com/poloyy/p/12715212.html)

