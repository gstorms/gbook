
## 用例执行状态
用例执行完成后，每条用例都有自己的状态，常见的状态有

- passed：测试通过
- failed：断言失败
- error：用例本身写的质量不行，本身代码报错（譬如：fixture不存在，fixture里面有报错）
- xfail：预期失败，加了 @pytest.mark.xfail()

 

## error的栗子一：参数不存在

```python
def pwd():
    print("获取用户名")
    a = "yygirl"
    assert a == "yygirl123"
def test_1(pwd):
    assert user == "yygirl"
```

### 为啥是error
pwd参数并不存在，所以用例执行error  
 

## error的栗子二：fixture有错

```python
@pytest.fixture()
def user():
    print("获取用户名")
    a = "yygirl"
    assert a == "yygirl123"
    return a
def test_1(user):
    assert user == "yygirl"
```

### 为啥是error？

- fixture里面断言失败，所以fixture会报错；
- 因为test_1调用了错误的fixture，所以error表示用例有问题

 

## failed的栗子一

```python
@pytest.fixture()
def pwd():
    print("获取密码")
    a = "yygirl"
    return a
def test_2(pwd):
    assert pwd == "yygirl123"
```

### 为啥是failed
因为fixture返回的变量断言失败  
 

## failed的栗子二

```python
@pytest.fixture()
def pwd():
    print("获取密码")
    a = "polo"
    return a
def test_2(pwd):
    raise NameError
    assert pwd == "polo"
```

### 为啥是failed
因为用例执行期间抛出了异常  
 

## 总结

- 测试用例的代码有异常，包括主动抛出异常或代码有异常，都算failed
- 当测试用例调用的fixture有异常，或传入的参数有异常的时候，都算error
- 如果一份测试报告中，error的测试用例数量越多，说明测试用例质量越差

 

## xfail的栗子

```python
# 断言装饰器
@pytest.mark.xfail(raises=ZeroDivisionError)
def test_f():
    1 / 0
```

### 为啥是xfail
代码有异常，且和raised的异常类匹配，所以是xfail**（算测试通过的一种，表示符合期望捕捉到的异常）**，并不算failed  
如果和raised的异常类不匹配，则是failed

> 转载：[https://www.cnblogs.com/poloyy/p/12653187.html](https://www.cnblogs.com/poloyy/p/12653187.html)

