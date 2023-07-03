# Python-中文排序

```
from pypinyin import lazy_pinyin

a = ['中国', '啊', '你好', '1您','台球','bu是']
# ['中国', '啊', '你好', '1您', '台球', 'bu是']
b = [''.join(lazy_pinyin(_)) for _ in a]
# ['zhongguo', 'a', 'nihao', '1nin', 'taiwan', 'bushi']
aa = dict(zip(b,a))
# {'zhongguo': '中国', 'a': '啊', 'nihao': '你好', '1nin': '1您', 'taiwan': '台球', 'bushi': 'bu是'}
ss = sorted(aa.items(), key=lambda aa:aa[0])
# [('1nin', '1您'), ('a', '啊'), ('bushi', 'bu是'), ('nihao', '你好'), ('taiwan', '台球'), ('zhongguo', '中国')]
sa = dict(ss)
res = list(sa.values())
# ['1您', '啊', 'bu是', '你好', '台球', '中国']
```
