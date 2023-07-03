# Pytest权威教程03-原有TestSuite的执行方法

### 原有TestSuite的执行方法
Pytest可以与大多数现有的测试套件(testsuite)一起使用,但是它的加载方式方式不像nose或Python的默认单元测试框架的测试运行器(test runner)。  
在使用本节之前,你需要安装pytest。
### 使用pytest运行已存在的测试套件(test suite)
假设你想要在某个地方为现有仓库(respsitory)做贡献代码。 在使用某种版本控制软件拉取代码和设置完`virtualenv` (可选)后,你需要运行：

```bash
cd <仓库名>
pip install -e . # 环境所依赖的'python setup.py develop' 和 'conda develop'包
```
在你项目根目录中,这将为你的代码在`site-packages`中设置一个符号链接,来允许你无需安装自己的代码即可执行测试。  
在开发模式下如此使用,可以避免每次要运行测试时重新安装,这比每次使用`sys.path`将测试指向本地代码更简单。  
或者你可以考虑使用[tox。
> 译者注: 实际官方并没有写Pytest怎么执行TestSuite,执行方法可以参考个人的另一篇文章: [https://www.jianshu.com/p/6a05ccd3ca94](https://www.jianshu.com/p/6a05ccd3ca94)

