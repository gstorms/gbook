# flask-sqlalchemy的增删改查用法


# 查询，插入，删除

已经创建过数据库[`model`](http://flask-sqlalchemy.pocoo.org/2.3/models/#models)了，可以直接从数据库中查询数据了。  
前提：在model中定义数据模型。


## 插入数据

插入数据到数据库中有3个步骤：

1. 创建`Python`对象
1. 把它加入到`session`中
1. 提交（`commit`）`session`

`session`不是`Flask session`，而是 `Flask-SQLAlchemy`的`session`。

```python
>>> from yourapp import User
>>> me = User('admin', 'admin@example.com') #步骤1
>>> db.session.add(me) #步骤2
>>> db.session.commit #步骤3
```

数据已经添加到数据库了，可以查看：

```python
>>> me.id
1
```


## 删除

删除和插入类似，只要把`add()`替换为`delete()`就行了

```python
>>> db.session.delete(me) #步骤2
>>> db.session.commit #步骤3
```


## 查询

使用query进行查询，如果要筛选使用filter关键字，选取结果的第一条用first关键字，选取全部结果用all关键字，如果用主键查询，直接用get。  
数据：

| id | username | email |
| --- | --- | --- |
| 1 | admin | [admin@example.com](mailto:admin@example.com) |
| 2 | peter | [peter@example.org](mailto:peter@example.org) |
| 3 | guest | [guest@example.com](mailto:guest@example.com) |


通过username查询：

```python
>>> peter = User.query.filter_by(username='peter').first()
>>> peter.id
2
>>> peter.email
peter@example.org
```

使用不在表中的username查询：

```python
>>> missing = User.query.filter_by(username='missing').first()
>>> missing is None
True
```

通过更复杂的表达式获取多个用户：

```python
>>> User.query.filter(User.email.endswith('@example.com')).all()
[<User u'admin',<User u'guest'>]
```

通过某个字段排序：

```python
>>> User.query.order_by(User.username).all()
[<User u'admin'>, <User u'guest'>, <User u'peter'>]
```

限制查询结果：

```python
>>> User.query.limit(1).all()
[<User u'admin'>]
```

通过主键获取数据：

```python
>>> User.query.get(1)
<User u'admin'>
```


## 在flask views中查询用法

因为有时候会获取不到数据，一般用get_or_404()替换get(),first_or_404()替换first()。此时会抛出404错误，而不是返回None。

```python
@app.route('/user/<username>')
def show_user(username):
    user = User.query.filter_by(username=username).first_or_404()
    return render_template('show_user.html', user=user)
```
