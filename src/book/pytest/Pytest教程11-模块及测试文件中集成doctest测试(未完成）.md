# Pytest权威教程11-模块及测试文件中集成doctest测试(未完成）

默认的，所有匹配 `test*.txt` 的文件都可以通过标准 `doctest` 模块运行。你也可以改变匹配模式通过使用：
```bash
pytest --doctest-glob="*.rst"
```
在命令行， `--doctest-glob` 可以出现多次。  
如果有这样一个文件：
```bash
# content of test_example.txt

hello this is a doctest
>>> x = 3
>>> x
3
```
你可以直接使用 `pytest` ：
```bash
$ pytest
=========================== test session starts ============================
platform linux -- Python 3.x.y, pytest-6.x.y, py-1.x.y, pluggy-0.x.y
cachedir: $PYTHON_PREFIX/.pytest_cache
rootdir: $REGENDOC_TMPDIR
collected 1 item

test_example.txt .                                                   [100%]

============================ 1 passed in 0.12s =============================
```
除了文本文件，你还可以通过类、方法或者是测试模块（test modules）的docstrings直接触发执行doctests：
```python
# content of mymodule.py
def something():
    """a doctest in a docstring
    >>> something()
    42
    """
    return 42
```
```bash
$ pytest --doctest-modules
=========================== test session starts ============================
platform linux -- Python 3.x.y, pytest-6.x.y, py-1.x.y, pluggy-0.x.y
cachedir: $PYTHON_PREFIX/.pytest_cache
rootdir: $REGENDOC_TMPDIR
collected 2 items

mymodule.py .                                                        [ 50%]
test_example.txt .                                                   [100%]

============================ 2 passed in 0.12s =============================
```
你可以把设置放到 ` pytest.ini`   中，使这些设置永久有效：
```bash
# content of pytest.ini
[pytest]
addopts = --doctest-modules
```
### 编码
默认编码为UTF-8,你也可以使用`doctest_encoding` 配置选项在 `pytest.ini` 文件指定用于这些doctest文件的编码：
```bash
# content of pytest.ini
[pytest]
doctest_encoding = latin1
```
### Using ‘doctest’ options
### Continue on failure
### Output format
### pytest-specific features
### 使用fixtures
可以使用`getfixture`帮助器使用Fixture方法：
```bash
# content of example.rst
>>> tmp = getfixture('tmpdir')
>>> ...
>>>
```
### ‘doctest_namespace’ fixture
### Skipping tests

