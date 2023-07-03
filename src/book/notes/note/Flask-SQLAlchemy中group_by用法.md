# Flask-SQLAlchemy中group_by用法

测试表： Goods

| id | iid | name | ac |
| --- | --- | --- | --- |
| 1 | 2 | 丁一 | 2 |
| 2 | 2 | 李四 | 5 |
| 3 | 3 | 李二 | 4 |
| 4 | 3 | 王五 | 5 |
| 5 | 3 | 狗蛋 | 1 |
| 6 | 4 | 张三 | 6 |
| 7 | 5 | 李四 | 3 |
| 8 | 6 | 王五 | 5 |


```python
from sqlalchemy import func
...
# select iid,count(*) as cnt,sum(ac) as acs from goods group by iid
Goods.query.with_entities(
    Goods.iid,
    func.group_concat(Goods.name).label('names'),
    func.count('*').label('cnt'),
    func.sum(Goods.ac).label('acs')
).group_by(Goods.iid).all()
...
```


##### 结果：
| iid | names | cnt | acs |
| --- | --- | --- | --- |
| 2 | 丁一，李四 | 2 | 7 |
| 3 | 李二，王五，狗蛋 | 3 | 10 |
| 4 | 张三 | 1 | 6 |
| 5 | 李四 | 1 | 3 |
| 6 | 王五 | 1 | 5 |

