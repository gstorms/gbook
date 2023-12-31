# 在-Flask-SQLAlchemy-中联表查询

[SQLAlchemy](http://www.sqlalchemy.org/) 是一个功能强大的 [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) 。 [Flask-SQLAlchemy](http://flask-sqlalchemy.pocoo.org/) 是一个 [Flask](http://flask.pocoo.org/) 插件，它让我们在 Flask 框架中使用 SQLAlchemy 变得更容易。

本篇介绍我在使用 Flask-SQLAlchemy 2.1 时进行联表查询的一些经验


## 表定义

---

这里有两个表，account 表保存帐号 ID 和昵称，bind 表保存 account 之间的绑定关系。

```sql
# 省略了外键定义，请自行脑补
create table account
(
	gameuid int auto_increment primary key,
    nickname varchar(34) not null
);
create table bind
(
	bindid int auto_increment primary key,
	fromid int not null,
	toid int not null
);
```

对应的 Model 如下：

```python
class Account(db.Model):
    __tablename__ = 'account'
    gameuid = db.Column(db.INT, primary_key=True, nullable=False, autoincrement=True)
    nickname = db.Column(db.VARCHAR(64), nullable=False, unique=True)
    def __repr__(self):
        return '<Account %r>' % (self.gameuid)

class Bind(db.Model):
    __tablename__ = 'bind'
    bindid = db.Column(db.BIGINT, primary_key=True, autoincrement=True)
    # 绑定者和被绑定者的 gameuid
    fromid = db.Column(db.BIGINT, db.ForeignKey('account.gameuid'), nullable=False)
    toid = db.Column(db.BIGINT, db.ForeignKey('account.gameuid'), nullable=False)
    def __repr__(self):
        return '<Bind %r.%r>' % (self.fromid, self.toid)
```


## 关联查询

---

先来看一个简单的例子：查询 gameuid 1000 账号下绑定的所有帐号。

```python
>>> db.session.query(Bind.bindid, Bind.fromid, Bind.toid, Account.gameuid, Account.nickname). \
    filter(Bind.toid == 1000). \
    filter(Bind.fromid == Account.gameuid). \
    all()
[(2, 10001, 1000, 10001, '玩家10001'), (3, 10002, 1000, 10002, '玩家10002'), (4, 10003, 1000, 10003, '玩家10003'), (5, 10004, 1000, 10004, '玩家10004'), (6, 10005, 1000, 10005, '玩家10005'), (7, 10006, 1000, 10006, '玩家10006'), (8, 10007, 1000, 10007, '玩家10007'), (9, 10008, 1000, 10008, '玩家10008'), (10, 10009, 1000, 10009, '玩家10009'), (53, 10000, 1000, 10000, '玩家10000'), (54, 11000, 1000, 11000, '玩家11000')]
```

看一看生成的 SQL 语句：

```python
>>> print(db.session.query(Bind.bindid, Bind.fromid, Bind.toid, Account.gameuid, Account.nickname). \
    filter(Bind.toid == 1000). \
    filter(Bind.fromid == Account.gameuid))
SELECT bind.bindid AS bind_bindid, bind.fromid AS bind_fromid, bind.toid AS bind_toid, account.gameuid AS account_gameuid, account.nickname AS account_nickname
FROM bind, account
WHERE bind.toid = %(toid_1)s AND bind.fromid = account.gameuid
```

这里的联表查询使用的是 WHERE 语句。如果希望使用 JOIN 语句，可以这样写：

```python
>>> print(db.session.query(Bind.bindid, Account.gameuid, Account.nickname). \
    join(Account, Account.gameuid==Bind.fromid). \
    filter(Bind.toid == 1000))
SELECT bind.bindid AS bind_bindid, bind.fromid AS bind_fromid, account.gameuid AS account_gameuid, account.nickname AS account_nickname
FROM bind INNER JOIN account ON account.gameuid = bind.fromid
WHERE bind.toid = %(toid_1)s
```

可以看出，现在生成的 SQL 语句已经使用 JOIN 语句了。但上面的语意有点奇怪，既然已经在 query 中使用了 Bind 和 Account，后面再 join 一次 Account 总觉得有点多余。那么 SQLAlchemy 如何选择 JOIN 的时候谁先谁后呢？看看这个错误就知道了：

```python
>>> db.session.query(Bind.bindid, Bind.fromid, Account.gameuid, Account.nickname). \
    join(Bind, Account.gameuid==Bind.fromid). \
    filter(Bind.toid == 1000)
>>> Traceback (most recent call last):
  File "<console>", line 1, in <module>
  File "/Users/zrong/.pyvenv/api/lib/python3.6/site-packages/sqlalchemy/orm/query.py", line 1971, in join
    from_joinpoint=from_joinpoint)
  File "<string>", line 2, in _join
  File "/Users/zrong/.pyvenv/api/lib/python3.6/site-packages/sqlalchemy/orm/base.py", line 201, in generate
    fn(self, *args[1:], **kw)
  File "/Users/zrong/.pyvenv/api/lib/python3.6/site-packages/sqlalchemy/orm/query.py", line 2115, in _join
    outerjoin, full, create_aliases, prop)
  File "/Users/zrong/.pyvenv/api/lib/python3.6/site-packages/sqlalchemy/orm/query.py", line 2171, in _join_left_to_right
    l_info.selectable)
sqlalchemy.exc.InvalidRequestError: Can't join table/selectable 'bind' to itself
```

这个错误显然说明，query 中参数的顺序很重要，第一个参数所代表的 table 就是 JOIN 时放在前面的那个 table。因此，此处 JOIN 的目标应该是 Account， 而不应该是 Bind 自身。


## 分页支持

---

上面的例子已经解决了大多数需求了。我们再来看看分页。在 Flask-SQLAlchemy 中封装了一个 [paginate](http://flask-sqlalchemy.pocoo.org/2.1/api/?highlight=paginate#flask.ext.sqlalchemy.BaseQuery.paginate) 方法，可以方便地将查询记录进行分页：

```python
>>> db.session.query(Bind.bindid, Bind.fromid, Account.gameuid, Account.nickname). \
    join(Bind, Account.gameuid==Bind.fromid). \
    filter(Bind.toid == 1000). \
    paginate(1, 10)
Traceback (most recent call last):
  File "<console>", line 1, in <module>
AttributeError: 'Query' object has no attribute 'paginate'
```

报错的原因是`db.session.query` 默认返回的是 `orm.Query` 对象，这个对象并不包含`paginate`方法。要解决这个问题，需要修改 Flask-SQLAlchemy 的源码。

找到 `SQLAlchemy` 对象的 `__init__` 定义，在其中加入 `session_options['query_cls'] = BaseQuery` 即可：

```python
def __init__(self, app=None, use_native_unicode=True, session_options=None, metadata=None):

    if session_options is None:
        session_options = {}

    session_options.setdefault('scopefunc', connection_stack.__ident_func__)
    self.use_native_unicode = use_native_unicode
    self.app = app

    # 使用 BaseQuery，这样可以让使用 db.session.query 等方法创建的 Query 对象支持 BaseQuery 的方法
    session_options['query_cls'] = BaseQuery
```


## 另一种关联查询语法

在 Flask-SQLAlchemy 提供的 Model 对象中，可以使用 `Model.query` 这样的语法来直接得到一个查询对象，这是由于 Flask-SQLAlchemy 中存在一个 `_QueryProperty` 类，每次调用 `Model.__get__`时，会自动生成一个基于当前 session 的 query 对象：

```python
class _QueryProperty(object):

    def __init__(self, sa):
        self.sa = sa

    def __get__(self, obj, type):
        try:
            mapper = orm.class_mapper(type)
            if mapper:
                return type.query_class(mapper, session=self.sa.session())
        except UnmappedClassError:
            return None
```

使用 `Model.query`得到的这个 query 对象可以直接进行 JOIN 操作，得到的结果是 Model 对象。这样就方便多了：

```python
>>> Account.query.join(Bind, Bind.fromid == Account.gameuid).filter(Bind.toid == 1000).all()
[<Account 10001>, <Account 10002>, <Account 10003>, <Account 10004>, <Account 10005>, <Account 10006>, <Account 10007>, <Account 10008>, <Account 10009>, <Account 10000>, <Account 11000>]
```

转换成 SQL 是这样的：

```python
SELECT account.gameuid AS account_gameuid, account.nickname AS account_nickname
FROM account INNER JOIN bind ON bind.fromid = account.gameuid
WHERE bind.toid = %(toid_1)s
```

可以看出，这样的查询结果和使用 db.session.query 并没有什么不同。由于返回的是 Model 对象，使用上可能还更加方便了。


## 筛选字段

---

如何使用 `Model.query.join` 语法得到部分字段呢？这里可以使用 `SQLAlchemy` 提供的 [with_entities](http://docs.sqlalchemy.org/en/latest/orm/query.html#sqlalchemy.orm.query.Query.with_entities) 方法：

```python
>>> Account.query.join(Bind, Bind.fromid == Account.gameuid). \
    filter(Bind.toid == 1000). \
    with_entities(Bind.bindid, Account.nickname).all()
[(2, '玩家10001'), (3, '玩家10002'), (4, '玩家10003'), (5, '玩家10004'), (6, '玩家10005'), (7, '玩家10006'), (8, '玩家10007'), (9, '玩家10008'), (10, '玩家10009'), (53, '玩家10000'), (54, '玩家11000')]
>>>
```

注意，列表中的项 `(2, '玩家10001')` 并不是标准的 Python tuple。你如果查看它的类型，会发现一个奇怪的名称： `<class 'sqlalchemy.util._collections.result'>` 。它是一个 [AbstractKeyedTuple](https://github.com/zzzeek/sqlalchemy/blob/master/lib/sqlalchemy/util/_collections.py#L22) 对象，拥有一个 `keys()` 方法，这样可以很容易将其转换成 dict ：

```python
>>> results = Account.query.join(Bind, Bind.fromid == Account.gameuid). \
    filter(Bind.toid == 1000). \
    with_entities(Bind.bindid, Account.nickname).all()
>>> [dict(zip(result.keys(), result)) for result in results]
[{'bindid': 2, 'nickname': '玩家10001'}, {'bindid': 3, 'nickname': '玩家10002'}, {'bindid': 4, 'nickname': '玩家10003'}, {'bindid': 5, 'nickname': '玩家10004'}, {'bindid': 6, 'nickname': '玩家10005'}, {'bindid': 7, 'nickname': '玩家10006'}, {'bindid': 8, 'nickname': '玩家10007'}, {'bindid': 9, 'nickname': '玩家10008'}, {'bindid': 10, 'nickname': '玩家10009'}, {'bindid': 53, 'nickname': '玩家10000'}, {'bindid': 54, 'nickname': '玩家11000'}]
```

想了解 [AbstractKeyedTuple](https://github.com/zzzeek/sqlalchemy/blob/master/lib/sqlalchemy/util/_collections.py#L22) ，可以看看这篇文档 [New KeyedTuple implementation dramatically faster](http://docs.sqlalchemy.org/en/latest/changelog/migration_10.html#new-keyedtuple-implementation-dramatically-faster) 。


## 获得多个 Model 的记录

---

除了筛选字段外，还可以用另一个方法获取多个 Model 的记录。那就是，返回两个 Model 的所有字段：

```python
>>> db.session.query(Account, Bind).join(Bind, Account.gameuid==Bind.fromid).filter(Bind.toid==1000).all()
[(<Account 10001>, <Bind 10001, 1000>), (<Account 10002>, <Bind 10002, 1000>), (<Account 10004>, <Bind 10004, 1000>), (<Account 10005>, <Bind 10005, 1000>), (<Account 10006>, <Bind 10006, 1000>), (<Account 10007>, <Bind 10007, 1000>), (<Account 10008>, <Bind 10008, 1000>), (<Account 10009>, <Bind 10009, 1000>), (<Account 10000>, <Bind 10000, 1000>), (<Account 11000>, <Bind 11000, 1000>)]
```

使用上面的语法直接返回 Account 和 Bind 对象，可以进行更加灵活的操作。


## 多表查询

---

要联结超过 2 张以上的表，可以直接在 join 得到的结果之后链式调用 join 。也可以在 filter 的结果后面链式调用 join 。join 和 filter 返回的都是 query 对象，因此可以无限链式调用下去。

写完查询后，应该打印生成的 SQL 语句查看一下有没有性能问题。

> 原文作者：[zrong](https://blog.zengrong.net/)
> 原文链接：[https://blog.zengrong.net/post/join-in-flash-sqlalchemy/](https://blog.zengrong.net/post/join-in-flash-sqlalchemy/)

