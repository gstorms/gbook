
## 前言
- pytest 可以支持自定义标记，自定义标记可以把一个 web 项目划分多个模块，然后指定模块名称执行
- 譬如我可以标明哪些用例是window下执行的，哪些用例是mac下执行的，在运行代码时候指定mark即可

 

## 上代码

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
__title__  = 
__Time__   = 2020/4/9 19:32
__Author__ = 小菠萝测试笔记
__Blog__   = https://www.cnblogs.com/poloyy/
"""
import pytest
@pytest.mark.weibo
def test_weibo():
    print("测试微博")
@pytest.mark.toutiao
def test_toutiao():
    print("测试头条")
@pytest.mark.toutiao
def test_toutiao1():
    print("再次测试头条")
@pytest.mark.xinlang
class TestClass:
    def test_method(self):
        print("测试新浪")
def testnoMark():
    print("没有标记测试")
```
 

### cmd敲运行命令

```bash
pytest -s -m weibo 08_mark.py
```
 

### 执行结果
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200409213339765-380395952.png)

 

### 如何避免warnings

- 创建一个pytest.ini文件**（后续详解）**
- 加上自定义mark，如下图
- **注意：**pytest.ini需要和运行的测试用例同一个目录，或在根目录下作用于全局

![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200409213514482-434242000.png)  
 

### 如果不想标记weibo的用例，我们直接取反即可

```bash
pytest -s -m "not weibo" 08_mark.py
```
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200410132234930-1457001816.png)  
 

### 如果想执行多个自定义标记的用例

```bash
pytest -s -m "toutiao or weibo" 08_mark.py
```
![](https://img2020.cnblogs.com/blog/1896874/202004/1896874-20200410132231668-571418711.png)  
 
> 转载：[https://www.cnblogs.com/poloyy/p/12669068.html](https://www.cnblogs.com/poloyy/p/12669068.html)

