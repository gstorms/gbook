# Flask-的flask_sqlalchemy查询指定列，以及结果转dict处理

通过使用with_entities()方法来获取要查询的列

```python
# 正常查询全部字段
result = User.query.order_by(User.id.desc())
result = User.query.all()

# 查询指定的id列
result = User.query.with_entities(User.id)  # 返回BaseQuery

# 返回指定的两列
result = User.query.with_entities(User.id, User.name)  
result = db.session.query(User.id, User.name)
```

查询结果处理(转dict)：

```python
def model_to_dict(result):
    '''正常查询结果转dict'''
    from collections import Iterable
    try:
        if isinstance(result, Iterable):
            tmp = [dict(zip(res.__dict__.keys(), res.__dict__.values())) for res in result]
            for t in tmp:
                t.pop('_sa_instance_state')
        else:
            tmp = dict(zip(result.__dict__.keys(), result.__dict__.values()))
            tmp.pop('_sa_instance_state')
        return tmp
    except BaseException as e:
        raise TypeError('Type error of parameter')

def model_to_dict_nosa(result):
    '''指定查询字段时，查询结果转dict'''
    from collections import Iterable
    try:
        if isinstance(result, Iterable):
            tmp = [dict(zip(res.keys(), res)) for res in result]
        else:
            tmp = dict(zip(res.keys(), res))
        return tmp
    except BaseException as e:
        raise TypeError('Type error of parameter')
```
