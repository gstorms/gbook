# python引用问题：ImportError

执行python时，一直提示ImportError: cannot import name 'Config'，但是查看了路径都没问题  
最终在网上找到了原因，是循环导入问题。  
config.py:

```
from file_reader import ExcerReader
...
class Config:
  ...
```

file_reader.py:

```
from config import Config
...
class ExcerReader:
  ...
if __name__ == "__main__":
  ...
```

执行file_reader.py的时候会提示ImportError  
因为是在第一个文件引用第二个文件，又在第二个文件引用第一个文件  
只要改下引用就可以了。
