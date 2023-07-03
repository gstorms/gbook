# flask-SQLAlchemy模型属性和MySQL数据库数据类型对应关系

| 类型名 | Python类型 | 数据库类型 |
| --- | --- | --- |
| Integer | int 整数(4字节) | INT |
| SmallInteger | int取值范围小的整数(2字节) | SMALLINT |
| BigInteger | int或long | BIGINT |
| Float | float | FLOAT |
| Numeric | decimal.Decimal | DECIMAL |
| String | str | VARCHAR |
| Text | str | TEXT |
| Boolean | bool | BOOLEAN |
| Date | datetime.date | DATE |
| Time | datetime.time | TIME |
| DateTime | datetime.datetime | DATETIME |
| Enum | str | ENUM |
| LargeBinary | str | VARBINARY |


使用：

```python
...
db = SQLAlchemy()
...
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    about_me = db.Column(db.String(140))
    info = db.Column(db.Text)
    last_seen = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<User {}>'.format(self.username)
```

> 参考:[http://blog.51cto.com/13914991/2172809](http://blog.51cto.com/13914991/2172809)

