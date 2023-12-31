
## 前言
pytest中可以用python的assert断言，也可以写多个断言，但一个失败，后面的断言将不再执行  
 

## 安装插件

```bash
pip3 install pytest-assume -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
```
 

## assert多重断言

```python
def test_add1():
    assert 1 + 4 == 5
    assert 1 + 3 == 3
    assert 2 + 5 == 7
    assert 2 + 5 == 9
    print("测试完成")
```

### 执行结果
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200415132322553-569119361.png)

### 结论
可以看到，第二行断言失败之后，后面的断言也不会执行，包括正常的代码  
 

## pytest.assume多重断言

```python
def test_add2():
    pytest.assume(1 + 4 == 5)
    pytest.assume(1 + 3 == 3)
    pytest.assume(2 + 5 == 7)
    pytest.assume(2 + 5 == 9)
    print("测试完成")
```

### 执行结果
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200415132847122-1838621760.png)

### 结论

- 可以看到，第二行即使断言失败，后面的断言还是会继续执行
- 这有助于我们分析和查看到底一共有哪些断言是失败的
- 而且最后的代码也还会正常执行，比直接用assert更高效

 

> 转载：[https://www.cnblogs.com/poloyy/p/12704658.html](https://www.cnblogs.com/poloyy/p/12704658.html)

