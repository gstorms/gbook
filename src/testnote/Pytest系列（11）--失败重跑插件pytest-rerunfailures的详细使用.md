
## 环境前提
以下先决条件才能使用pytest-rerunfailures

- Python 3.5, 最高 3.8, or PyPy3
- pytest 5.0或更高版本

 

## 安装插件

```bash
pip3 install pytest-rerunfailures -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
```
 

## 提前了解重点
**命令行参数：**--reruns n（重新运行次数），--reruns-delay m（等待运行秒数）  
**装饰器参数：**reruns=n（重新运行次数），reruns_delay=m（等待运行秒数）  
 

## 重新运行所有失败的用例
要重新运行所有测试失败，使用 --reruns 命令行选项，并指定要运行测试的最大次数：  

```bash
pytest --reruns 5 -s
```

### 知识点
运行失败的fixture或setup_class也将重新执行  
 

### 添加重新运行的延时
要在两次重试之间增加延迟时间，使用 --reruns-delay 命令行选项，指定下次测试重新开始之前等待的秒数  

```bash
pytest --reruns 5 --reruns-delay 10 -s
```
 

## 重新运行指定的测试用例
要将单个测试用例添加flaky装饰器 @pytest.mark.flaky(reruns=5) ，并在测试失败时自动重新运行，需要指定最大重新运行的次数  
 

### 小栗子

```python
import pytest
@pytest.mark.flaky(reruns=5)
def test_example():
    import random
    assert random.choice([True, False, False])
```

### 执行结果

```bash
collecting ... collected 1 item
11_reruns.py::test_example RERUN                                         [100%]
11_reruns.py::test_example PASSED                                        [100%]
========================= 1 passed, 1 rerun in 0.05s ==========================
```
 

### 同样的，这个也可以指定重新运行的等待时间

```python
@pytest.mark.flaky(reruns=5, reruns_delay=2)
def test_example():
    import random
    assert random.choice([True, False, False])
```
 

### 注意事项
如果指定了用例的重新运行次数，则在命令行添加--reruns对这些用例是不会生效的   
 

## 兼容性问题

- 不可以和fixture装饰器一起使用： @pytest.fixture()
- 该插件与pytest-xdist的 --looponfail 标志不兼容
- 该插件与核心--pdb标志不兼容

> 转载：[https://www.cnblogs.com/poloyy/p/12687308.html](https://www.cnblogs.com/poloyy/p/12687308.html)

