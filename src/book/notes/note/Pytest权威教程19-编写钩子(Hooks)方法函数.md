# Pytest权威教程19-编写钩子(Hooks)方法函数


## 编写钩子(Hooks)函数

### 钩子函数验证和执行
Pytest会调用任意给定规格并注册了的插件的钩子方法。让我们看一下一个函数的典型钩子函数  
`pytest_collection_modifyitems(session,config,items)`，Pytest在收集完所有测试用例后调用该钩子方法。  
当我们在自己的插件中实现一个`pytest_collection_modifyitems`函数时,Pytest将在注册期间验证你是否使用了与规范匹配的参数名称,如果不符合规范，则废弃掉该方法。  
让我们看一下实现该插件的方法：
```python
def pytest_collection_modifyitems(config,items):
    # 在收集完测试用例后执行
    # 你可以修改items用例列表
    ...
```
这里,Pytest将传入config(pytest配置对象)和items(收集的测试用例列表),但不会传入session参数,因为我们没有在函数签名中列出它。这种动态的改动参数允许Pytest进行一些“未来兼容”：我们可以引入新的钩子函数命名参数而不破坏现有钩子函数实现的签名，这是Pytest插件的一般可以长期兼容的原因之一。  
请注意,除了pytest_runtest_*这种测试运行期间的钩子方法，其他钩子方法不允许抛出异常，不然会破坏Pytest的运行流程。

### firstresult: 遇到第一个有效(非None)结果返回
通常Pytest钩子函数的调用，都会产生一个包含所有所调用钩子方法的有效结果组成的列表。  
一些钩子函数规格使用firstresult=True选项,以便钩子函数调用，直到多个个注册钩子函数中的第一个返回有效结果,然后将其作为整个钩子函数调用的结果。这种情况下,其余的钩子函数不会再调用。

### hookwrapper：在其他钩子函数周围执行
版本2.7中的新函数。  
Pytest插件可以实现钩子函数装饰器,它包装其他钩子函数实现的执行。钩子函数装饰器是一个生成器函数,它只生成一次。当Pytest调用钩子函数时,它首先执行钩子函数装饰器并传递与常规钩子函数相同的参数。  
在钩子函数装饰器的yield处,Pytest将执行下一个钩子函数实现,并以Result对象的形式，封装结果或异常信息的实例的形式将其结果返回到yield处。因此,yield处通常本身不会抛出异常(除非存在错误)。  
以下是钩子函数装饰器的示例：
```python
import pytest

@pytest.hookimpl(hookwrapper=True)
def pytest_pyfunc_call(pyfuncitem):
    do_something_before_next_hook_executes()
    outcome = yield
    # outcome的退出信息(outcome.excinfo)可能是None或者(cls,val,tb)组成的元祖
    res = outcome.get_result()  # 如果outcome出错会抛出异常
    post_process_result(res)
    outcome.force_result(new_res)  # 覆盖插件系统的返回值
```
请注意,钩子函数装饰器本身不返回结果,它们只是围绕实际的钩子函数实现执行跟踪或其他额外作用。如果底层钩子函数的结果是一个可变对象,这可能会修改该结果,因此最好避免对动态结果这样使用。

有关更多信息,请参阅：插件文档。

### 钩子(Hooks)函数排序/调用示例[#](https://www.cnblogs.com/superhin/p/11478007.html#3688582692)
对于任何给定的钩子函数规格,可能存在多个实现,因此我们通常将钩子函数执行视为1:N的函数调用,其中N是已注册函数的数量。有一些方法可以影响钩子函数实现是在其他之前还是之后,即在N-sized函数列表中的位置：
```python
# Plugin 1
@pytest.hookimpl(tryfirst=True)
def pytest_collection_modifyitems(items):
    # will execute as early as possible
    ...

# Plugin 2
@pytest.hookimpl(trylast=True)
def pytest_collection_modifyitems(items):
    # will execute as late as possible
    ...

# Plugin 3
@pytest.hookimpl(hookwrapper=True)
def pytest_collection_modifyitems(items):
    # will execute even before the tryfirst one above!
    outcome = yield
    # will execute after all non-hookwrappers executed
```
这是执行的顺序：

1. Plugin3的pytest_collection_modifyitems被调用直到注入点,因为它是一个钩子函数装饰器。
1. 调用Plugin1的pytest_collection_modifyitems是因为它标有`tryfirst=True`。
1. 调用Plugin2的pytest_collection_modifyitems因为它被标记`trylast=True(但即使没有这个标记,它也会在Plugin1之后出现)。
1. 插件3的pytest_collection_modifyitems然后在注入点之后执行代码。yield接收一个`Result`实例,该实例封装了调用非装饰器的结果。包装不得修改结果。

这是可能的使用tryfirst,并trylast结合还hookwrapper=True处于这种情况下,它会影响彼此之间hookwrappers的排序。

### 声明新的钩子函数
插件和`conftest.py`文件可以声明新钩子函数,然后可以由其他插件实现,以便改变行为或与新插件交互：  
在插件注册时调用,允许通过调用添加新的钩子函数。pluginmanager.add_Hookspecs(module_or_class,prefix)  
参数： **pluginmanager**(__pytest.config.PytestPluginManager_) - Pytest插件管理器
> 注意:
> 这个钩子函数与之不相容hookwrapper=True。

钩子函数通常被声明为do-nothing函数,它们只包含描述何时调用钩子函数以及期望返回值的文档。  
有关示例,请参阅：xdist插件。

### 使用第三方插件的钩子函数
由于标准的验证机制,方法可能有点棘手：如果你依赖未安装的插件,验证将失败并且错误消息对你的用户没有多大意义。  
一种方法是将钩子函数实现推迟到新的插件,而不是直接在插件模块中声明钩子函数,例如：
```python
# contents of myplugin.py

class DeferPlugin(object):
    """Simple plugin to defer pytest-xdist hook functions."""

    def pytest_testnodedown(self,node,error):
        """standard xdist hook function.
 """

def pytest_configure(config):
    if config.pluginmanager.hasplugin("xdist"):
        config.pluginmanager.register(DeferPlugin())
```
这具有额外的好处,允许你根据安装的插件有条件地安装钩子。
> 参考：[https://www.cnblogs.com/superhin/p/11478007.html](https://www.cnblogs.com/superhin/p/11478007.html)

