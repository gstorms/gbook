
## 先看看 allure 命令的帮助文档
cmd 敲  

```bash
allure -h
```
 

#### allure 命令的语法格式

```bash
allure [options] [command] [command options]
```
 

#### options 列表

```bash
Options:
    --help 命令行帮助文档
    -q, --quiet
      切换至安静模式
      Default: false
    -v, --verbose
      切换至冗长模式
      Default: false
    --version
      版本信息
      Default: false
```
 

#### command 列表

1. generate
1. serve
1. open
1. plugin

这里只讲前三个常用的  
 

## generate 命令行参数

#### 作用
生成 allure 的html 报告  
 

#### 语法格式

```erlang
generate [options]  allure 结果目录
```
   
**注：**allure 结果目录就是运行 pytest 命令，--alluredir 跟的那个目录  

```bash
pytest -sq --alluredir= ./allure
```
 

#### 命令选项
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028123446680-921838785.png)  
主要就是用  -c 、 -o  两个参数  
 

## open 命令行参数

#### 作用
打开生成的 allure 报告，就是打开 generate 命令生成的报告  
 

#### 语法格式

```erlang
open [options] allure报告目录
```
   
**注：**allure 报告目录就是运行 allure generate 命令，-o 跟的那个目录  

```bash
allure generate -o ./allure-report
```
 

#### 命令选项
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028141707575-281214400.png)  
 

## serve 命令行参数

#### 作用
打开 allure 报告  
 

#### 语法格式

```erlang
serve [options] allure 结果目录
```
   
**注：**allure 结果目录就是运行 pytest 命令，--alluredir 跟的那个目录  

```bash
pytest -sq --alluredir= ./allure
```
 

#### 命令选项
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028142713421-258584445.png)  
 

## 浏览器打开 allure 报告的两种方式

### allure serve
标准写法  

```bash
# 执行 pytest，指定 allure 结果目录
pytest -sq --alluredir=./allure

# 打开 allure 报告
allure serve ./allure
```
 

### allure generate + allure open
 标准写法  

```bash
# 执行 pytest，指定 allure 结果目录
pytest -sq --alluredir=./allure

# 生成 allure 的 html 报告
allure generate -c -o ./allure-report ./allure

# 打开 allure 报告
allure open ./allure-report
```
当然不写 -o 也可以  
 

#### 看看 allure-report 的目录结构
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028143452978-709464647.png)

- 这种方式的目录会好看很多，不只是一堆 json 文件
- 而且直接打开 index.html 也是能看到 allure 报告的

> 转载： [https://www.cnblogs.com/poloyy/p/13890986.html](https://www.cnblogs.com/poloyy/p/13890986.html)

