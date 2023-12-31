
## 背景
- pytest 运行 测试用例生成 allure 报告时，当测试用例名称修改后重新运行，会保留历史运行记录
- 又或者分开运行两个测试用例文件，但是 allure 报告生成目录是同一个，那么 allure 报告会同时显示两个文件的测试用例运行情况
- 咱们来看看这种情况

 

### 目录结构
下面两个栗子都是这个目录结构  
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028110652149-1920030839.png)  
 

### 修改名称的栗子

#### test_1.py 的代码

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
__title__  = 
__Time__   = 2020/10/28 11:03
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
def test_1():
    print("test_1 文件的测试用例1")
def test_2():
    print("test_1 文件的测试用例2")
```
 

#### 运行命令
进入该目录下，cmd 运行

pytest test_1.py --alluredir=./allure  
 

#### allure 报告
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028111346609-886062831.png)  
只有两条用例  
 

#### 修改后的 test_1.py 的代码

```python
def test_11():
    print("test_1 文件的测试用例1")
def test_22():
    print("test_1 文件的测试用例2")
```
 

#### 再次运行命令，查看 allure 报告
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028111355331-1963122828.png)  
四条用例，包含了历史的两条，这不是我们希望看到的  
 

### 分开运行测试用例文件的栗子

#### test_2.py 的代码

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
__title__  = 
__Time__   = 2020/10/28 11:03
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""


def test_1():
    print("test_1 文件的测试用例1")


def test_2():
    print("test_1 文件的测试用例2")

```
 

#### 分开运行 test_1 和 test_2 两个测试用例文件

```bash
# 先运行第一个
pytest test_1.py --alluredir=./allure

# 再运行第二个，此时应该希望 allure 报告只有 test_2.py 的测试用例
pytest test_2.py --alluredir=./allure
```
 

#### 查看 allure 报告
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028112004419-420743254.png)  
出现了 test_1.py 的测试用例，这不是想要的结果  
 

## --clean-alluredir 参数

#### 前言

- pytest 提供了 --clean-alluredir 参数可以清空 allure 报告生成的目录
- 可以看看 pytest 的说明文档

   

```bash
pytest -h
```
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028112503115-1419060590.png)  
 

#### 将上面的栗子重新运行

```bash
# 先运行第一个
pytest test_1.py --alluredir=./allure

# 再运行第二个，此时应该希望 allure 报告只有 test_2.py 的测试用例
pytest test_2.py --alluredir=./allure --clean-alluredir

```

#### 运行结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201028113553241-1279045150.png)  
 

> 转载：[https://www.cnblogs.com/poloyy/p/13890086.html](https://www.cnblogs.com/poloyy/p/13890086.html)

