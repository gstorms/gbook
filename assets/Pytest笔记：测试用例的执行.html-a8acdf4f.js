import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as n,c as d,a as e,b as a,d as r,f as l}from"./app-3f278ba4.js";const c={},o=l(`<h1 id="pytest笔记-测试用例的执行" tabindex="-1"><a class="header-anchor" href="#pytest笔记-测试用例的执行" aria-hidden="true">#</a> Pytest笔记：测试用例的执行</h1><h3 id="pytest-的-exit-code-含义清单" tabindex="-1"><a class="header-anchor" href="#pytest-的-exit-code-含义清单" aria-hidden="true">#</a> Pytest 的 Exit Code 含义清单</h3><hr><ul><li>Exit code 0 所有用例执行完毕，全部通过</li><li>Exit code 1 所有用例执行完毕，存在Failed的测试用例</li><li>Exit code 2 用户中断了测试的执行</li><li>Exit code 3 测试执行过程发生了内部错误</li><li>Exit code 4 pytest 命令行使用错误</li><li>Exit code 5 未采集到可用测试用例文件</li></ul><h3 id="如何获取帮助信息" tabindex="-1"><a class="header-anchor" href="#如何获取帮助信息" aria-hidden="true">#</a> 如何获取帮助信息</h3><p>查看 pytest 版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示可用的内置函数参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest --fixtures
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过命令行查看帮助信息及配置文件选项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在第n个用例失败后-结束测试执行" tabindex="-1"><a class="header-anchor" href="#在第n个用例失败后-结束测试执行" aria-hidden="true">#</a> 在第N个用例失败后，结束测试执行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest -x                    # 第01次失败，就停止测试
pytest --maxfail=2     # 出现2个失败就终止测试
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行特定用例" tabindex="-1"><a class="header-anchor" href="#执行特定用例" aria-hidden="true">#</a> 执行特定用例</h3><hr><h4 id="指定测试模块" tabindex="-1"><a class="header-anchor" href="#指定测试模块" aria-hidden="true">#</a> 指定测试模块</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest test_mod.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="指定测试目录" tabindex="-1"><a class="header-anchor" href="#指定测试目录" aria-hidden="true">#</a> 指定测试目录</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest testing/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="通过关键字表达式过滤执行" tabindex="-1"><a class="header-anchor" href="#通过关键字表达式过滤执行" aria-hidden="true">#</a> 通过关键字表达式过滤执行</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest -k &quot;MyClass and not method&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条命令会匹配文件名、类名、方法名匹配表达式的用例，这里这条命令会运行 TestMyClass.test_something， 不会执行 TestMyClass.test_method_simple</p><h4 id="通过-node-id-指定测试用例" tabindex="-1"><a class="header-anchor" href="#通过-node-id-指定测试用例" aria-hidden="true">#</a> 通过 node id 指定测试用例</h4><p>nodeid由模块文件名、分隔符、类名、方法名、参数构成，举例如下：<br> 运行模块中的指定用例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest test_mod.py::test_func
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行模块中的指定方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest test_mod.py::TestClass::test_method
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="通过标记表达式执行" tabindex="-1"><a class="header-anchor" href="#通过标记表达式执行" aria-hidden="true">#</a> 通过标记表达式执行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest -m slow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条命令会执行被装饰器 <a href="/pytest.mark.slow">@pytest.mark.slow </a> 装饰的所有测试用例</p><h3 id="通过包执行测试" tabindex="-1"><a class="header-anchor" href="#通过包执行测试" aria-hidden="true">#</a> 通过包执行测试</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest --pyargs pkg.testing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条命令会自动导入包 pkg.testing，并使用该包所在的目录，执行下面的用例</p><h2 id="修改-python-traceback-输出" tabindex="-1"><a class="header-anchor" href="#修改-python-traceback-输出" aria-hidden="true">#</a> 修改 Python traceback 输出</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest --showlocals     # show local variables in tracebacks
pytest -l               # show local variables (shortcut)
pytest --tb=auto        # (default) &#39;long&#39; tracebacks for the first and last
                        # entry, but &#39;short&#39; style for the other entries
pytest --tb=long        # exhaustive, informative traceback formatting
pytest --tb=short       # shorter traceback format
pytest --tb=line        # only one line per failure
pytest --tb=native      # Python standard library formatting
pytest --tb=no          # no traceback at all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>--full-trace 参数会打印更多的错误输出信息，比参数 --tb=long 还多，即使是 Ctrl+C 触发的错误，也会打印出来</p><h2 id="执行失败的时候跳转到-pdb" tabindex="-1"><a class="header-anchor" href="#执行失败的时候跳转到-pdb" aria-hidden="true">#</a> 执行失败的时候跳转到 PDB</h2><p>执行用例的时候，跟参数 --pdb，这样失败的时候，每次遇到失败，会自动跳转到 PDB</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest --pdb              # 每次遇到失败都跳转到 PDB
pytest -x --pdb           # 第一次遇到失败就跳转到 PDB，结束测试执行
pytest --pdb --maxfail=3  # 只有前三次失败跳转到 PDB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置断点" tabindex="-1"><a class="header-anchor" href="#设置断点" aria-hidden="true">#</a> 设置断点</h2><p>在用例脚本中加入如下python代码，pytest会自动关闭执行输出的抓取，这里，其他test脚本不会受到影响，带断点的test上一个test正常输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import pdb; pdb.set_trace()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="获取用例执行性能数据" tabindex="-1"><a class="header-anchor" href="#获取用例执行性能数据" aria-hidden="true">#</a> 获取用例执行性能数据</h2><p>获取最慢的10个用例的执行耗时</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest --durations=10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="生成-junitxml-格式的结果文件" tabindex="-1"><a class="header-anchor" href="#生成-junitxml-格式的结果文件" aria-hidden="true">#</a> 生成 JUnitXML 格式的结果文件</h2><p>这种格式的结果文件可以被Jenkins或其他CI工具解析</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest --junitxml=path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="禁用插件" tabindex="-1"><a class="header-anchor" href="#禁用插件" aria-hidden="true">#</a> 禁用插件</h2><p>例如，关闭 doctest 插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest -p no:doctest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="从python代码中调用pytest" tabindex="-1"><a class="header-anchor" href="#从python代码中调用pytest" aria-hidden="true">#</a> 从Python代码中调用pytest</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pytest.main()                      # 基本用法
pytest.main([&#39;-x&#39;, &#39;mytestdir&#39;])   # 传入配置参数


// 指定自定义的或额外的插件
# content of myinvoke.py
import pytest
class MyPlugin(object):
    def pytest_sessionfinish(self):
        print(&quot;*** test run reporting finishing&quot;)

pytest.main([&quot;-qq&quot;], plugins=[MyPlugin()])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试脚本迁移后快速部署包含pytest的virtualenv" tabindex="-1"><a class="header-anchor" href="#测试脚本迁移后快速部署包含pytest的virtualenv" aria-hidden="true">#</a> 测试脚本迁移后快速部署包含pytest的virtualenv</h2><p>例如你从Gitlab仓库里clone了项目组的刀刀同学编写的测试脚本到你自己的电脑里，你想修改些东西，并调试，咋办？可以通过下面的操作快速创建 VirtualEnv</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd &lt;repository&gt;
pip install -e .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>This will set up a symlink to your code in site-packages, allowing you to edit your code while<br> your tests run against it as if it were installed.<br> Setting up your project in development mode lets you avoid having to reinstall every time you want to run your tests,<br> and is less brittle than mucking about with sys.path to point your tests at local code.<br> Also consider using tox</p>`,57),u={href:"https://www.jianshu.com/p/9982abb9942c",target:"_blank",rel:"noopener noreferrer"},v=e("br",null,null,-1);function h(p,b){const t=s("ExternalLinkIcon");return n(),d("div",null,[o,e("blockquote",null,[e("p",null,[a("原文链接："),e("a",u,[a("https://www.jianshu.com/p/9982abb9942c"),r(t)]),v,a(" 作者：半个王国")])])])}const g=i(c,[["render",h],["__file","Pytest笔记：测试用例的执行.html.vue"]]);export{g as default};
