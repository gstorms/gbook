# 自己建一个Python库并安装使用

在一个空白目录中新建：`setup.py`文件，模块目录`wutils`（这个可以任意取名），目录中存放自己的模块文件和`__init__.py`  
结构如下：

```powershell
D:/projects/
││  setup.py
││
└└──wutils
        file_reader.py
        __init__.py
```

setup.py文件:

```
from setuptools import setup

setup(
    name='wutils',#包名
    version='1.1',#版本号
    author='author',#作者
    packages=['wutils']#包含的模块
    )
```

构建模块：`python setup.py build`,生成build目录

```
D:.
││  setup.py
││
├├──build
││  └└──lib
││      └└──wutils
││              file_reader.py
││              __init__.py
││
└└──wutils
        file_reader.py
        __init__.py
```

生成发布压缩包：`python setup.py sdist`,生成个dist目录

```
├├──dist
││      wutils-1.1.tar.gz
```

解压后安装`python setup.py install`（这个需要在解压的目录中安装）  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199853799-23de187f-6a06-491f-85ab-6892c16bb160.png#align=left&display=inline&height=254&margin=%5Bobject%20Object%5D&originHeight=254&originWidth=634&size=0&status=done&style=none&width=634)

```
...
Installed d:\programdata\miniconda3\lib\site-packages\wutils-1.1-py3.7.egg
Processing dependencies for wutils==1.1
Finished processing dependencies for wutils==1.1
```

安装成功，可以使用了。

```
from wutils.file_reader import YamlReader  #file_reader 是自己写的模块

aa = YamlReader('D:\\temp\\compute\\cn.yml')

print(aa.data)
```
