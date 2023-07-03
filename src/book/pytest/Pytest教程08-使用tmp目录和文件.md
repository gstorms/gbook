# Pytest权威教程08-使用tmp目录和文件

### tmp_path Fixture方法
_3.9版本新函数_  
你可以使用`tmp_path` 在临时目录根目录中创建一个独立的临时目录以供测试调用。  
`tmp_path`是一个`pathlib/pathlib2.Path`对象。以下是测试使用方法的示例如:
```python
# test_tmp_path.py文件内容
import os

CONTENT = u"content"

def test_create_file(tmp_path):
    d = tmp_path / "sub"
    d.mkdir()
    p = d / "hello.txt"
    p.write_text(CONTENT)
    assert p.read_text() == CONTENT
    assert len(list(tmp_path.iterdir())) == 1
    assert 0
```
运行这个,我们可以看到,除了`assert 0`这一行,其他断言都正常测试通过：
```bash
$ pytest test_tmpdir.py
=========================== test session starts ============================
platform linux -- Python 3.x.y,pytest-4.x.y,py-1.x.y,pluggy-0.x.y
rootdir: $REGENDOC_TMPDIR,inifile:
collected 1 item

test_tmpdir.py F                                                     [100%]

================================= FAILURES =================================
_____________________________ test_create_file _____________________________

tmpdir = local('PYTEST_TMPDIR/test_create_file0')

    def test_create_file(tmpdir):
        p = tmpdir.mkdir("sub").join("hello.txt")
        p.write("content")
        assert p.read() == "content"
        assert len(tmpdir.listdir()) == 1
>       assert 0
E       assert 0

test_tmpdir.py:7: AssertionError
========================= 1 failed in 0.12 seconds =========================
```
### tmp_path_factory Fixture方法
_2.8版本新函数_  
`tmpdir_factory`是一个session范围的fixture,可用于从任何其他测试用例及fixture中创建任意临时目录。  
例如,假设你的测试套件需要使用程序动态生成在本地磁盘上的一个大图片,你可以整个测试session中只生成一次以节省时间,而不是为每个用例都在自己的`tmpdir`中计算并生成一次：
```python
# conftest.py文件内容
import pytest


@pytest.fixture(scope="session")
def image_file(tmpdir_factory):
    img = compute_expensive_image()
    fn = tmpdir_factory.mktemp("data").join("img.png")
    img.save(str(fn))
    return fn


# contents of test_image.py
def test_histogram(image_file):
    img = load_image(image_file)
    # 计算和测试histogram
```
有关详细信息,请参阅tmpdir_factory API。
### tmpdir Fixture方法
### tmpdir_factory Fixture方法
### 默认临时目录根目录
默认情况下,临时目录创建为系统临时目录的子目录。 基本名称将是`pytest-数字`,其中数字将随着每次测试运行而递增。 此外,第3个以后的临时目录会被删除。  
你可以如下所示,修改默认的临时目录设置：
```bash
pytest --basetemp=mydir
```
在本地计算机上分发测试时,`pytest`会为子进程配置临时目录根目录,以便所有临时数据都落在单个每个测试运行的临时目录根目录。
