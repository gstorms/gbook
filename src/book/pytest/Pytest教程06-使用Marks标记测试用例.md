# Pytest权威教程06-使用Marks标记测试用例

通过使用`pytest.mark`你可以轻松地在测试用例上设置元数据。例如, 一些常用的内置标记：

- skip - 始终跳过该测试用例
- skipif - 遇到特定情况跳过该测试用例
- xfail - 遇到特定情况,产生一个“期望失败”输出
- parametrize - 在同一个测试用例上运行多次调用(译者注: 参数化数据驱动)

创建自定义标记或将标记应用于整个测试类或模块很容易。 文档中包含有关标记的示例,详情可参阅[使用自定义标记。
> 注意：
> 标记只对测试用例有效,对fixtures方法无效。

### 在未知标记上引发异常： -strict
当使用`--strict`命令行参数时,未在`pytest.ini`文件中注册的任何标记都将引发异常。  
标记可以通过以下方式注册：
```bash
[pytest]
markers =
    slow
    serial
```
这可用于防止用户意外输错标记名称。 想要强制执行此操作的测试套件应将`--strict`添加到`addopts`：
```bash
[pytest]
addopts = --strict
markers =
    slow
    serial
```
### 标记改造和迭代
_3.6版本新函数_  
pytest的标记传统地实现是通过简单地在测试函数的`__dict__`中添加属性来进行标记。结果,标记意外的随着类的集成而传递。此外,使用`@pytest.mark`装饰器应用的标记和通过`node.add_marker`添加的标记存储的位置不同,用于检索它们的API也  
不一致。  
这样,如果不深入了解测试代码内部结构,技术上几乎无法正确使用参数化数据,从而导致在高级的使用方法中出现细微且难以理解的bug。  
根据标记声明/更改的方式,你都可以获得一个`MarkerInfo`对象,其中也可能会包含来自同级类的标记。当使用参数化标记,或`node.add_marker`时,会丢弃之前的使用装饰器声明的`MarkDecorators`标记。`MarkerInfo`对象实际上是使用同一标记名的多个标记的合并视图,当然,`MarkerInfo`也可以像单个标记一样使用。  
最重要的是,即使标记是在类/模块上声明的,实际上,标记只能在函数中访问。原因是模块,类和函数/方法无法以相同的方式访问标记。  
在pytest 3.6版本中引入了一个访问标记的新API,以解决初始设计中的问题,提供**_pytest.nodes.Node.iter_markers()**方法以一致的方式迭代标记并重新进行内部处理,这很好地解决了初始设计的问题。
#### 升级代码
不推荐使用原有的`Node.get_marker(name)`函数,因为它返回一个内部`MarkerInfo`对象,该对象包含应用于该节点的所有标记的合并名称和所有参数。  
通常,有两种方案可以处理标记：  
标记互相覆盖。 顺序很重要,但你只需要将你的标记视为单独的标记即可。 例如。 对于测试用例中的`log_level('debug')`会覆盖模块级别的`log_level('info')`。  
在这种情况下,可以使用`Node.get_closest_marker(name)`：
```python
# 替换这个:
marker = item.get_marker("log_level")
if marker:
    level = marker.args[0]

# 通过这个:
marker = item.get_closest_marker("log_level")
if marker:
    level = marker.args[0]
```
在特定条件下使用标记。 例如,`skipif(condition)`标记,意味着你只想测试所有非condition条件的用例,顺序不重要。你可以将这个标记视为一个满足该条件的集合使用。  
在这种情况下,迭代每个标记并单独处理它们的`*args`和`**kwargs`参数。
```python
# 替换这个：
skipif = item.get_marker("skipif")
if skipif:
    for condition in skipif.args:
        # eval condition
        ...

# 通过这个:
for skipif in item.iter_markers("skipif"):
    condition = skipif.args[0]
    # eval condition
```
如果你不确定或遇到任何难题,你可以考虑提出一个待解决问题。
> 注意：
> 在未来的Pytest主要版本中,我们将引入基于类的标记,在这些标记处,标记将不再局限于Mark的实例。

