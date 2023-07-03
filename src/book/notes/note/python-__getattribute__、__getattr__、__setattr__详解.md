# python-__getattribute__、__getattr__、__setattr__详解


### __getattribute__
官方文档中描述如下：  
`object.``__getattribute__`(_self_, _name_)  
Called unconditionally to implement attribute accesses for instances of the class. If the class also defines [`__getattr__()`](https://docs.python.org/3/reference/datamodel.html#object.__getattr__), the latter will not be called unless [`__getattribute__()`](https://docs.python.org/3/reference/datamodel.html#object.__getattribute__) either calls it explicitly or raises an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError). This method should return the (computed) attribute value or raise an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError) exception. In order to avoid infinite recursion in this method, its implementation should always call the base class method with the same name to access any attributes it needs, for example, `object.__getattribute__(self, name)`.  
中文翻译：  
此方法会无条件地被调用以实现对类实例属性的访问。如果类还定义了 [`__getattr__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__getattr__)，则后者不会被调用，除非 [`__getattribute__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__getattribute__) 显式地调用它或是引发了 [`AttributeError`](https://docs.python.org/zh-cn/3/library/exceptions.html#AttributeError)。此方法应当返回（找到的）属性值或是引发一个 [`AttributeError`](https://docs.python.org/zh-cn/3/library/exceptions.html#AttributeError) 异常。为了避免此方法中的无限递归，其实现应该总是调用具有相同名称的基类方法来访问它所需要的任何属性，例如 `object.__getattribute__(self, name)`。

该方法可以拦截对对象属性的所有访问企图，当属性被访问时，自动调用该方法（只适用于新式类）。因此常用于实现一些访问某属性时执行一段代码的特性。  
需要注意的是，正式由于它拦截对所有属性的访问（包括对 `__dict__` 的访问），在使用中要十分小心地避开无限循环的陷阱。在 `__getattribute__` 方法中访问当前实例的属性时，唯一安全的方式是使用基类（超类） 的方法 `__getattribute__` （使用super）。例如：
```python
class man(object):
    gender = '男'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __getattribute__(self, name):
        print('拦截')
        try:
            return super().__getattribute__(name)
        except AttributeError:
            print(f'have no attribute of {name}')


A = man('小明', 20)
print(man.gender)
print(A.gender)
print(A.name)
print(A.job)

# -----------------
男
拦截
男
拦截
小明
拦截
have no attribute of job
None
```

通过上图中的代码示例可以看出，一旦实现了 `__getattribute__` 方法，所有通过对象访问的属性（包括类属性）都会被拦截，而直接通过类访问类属性则不会。  
注意：当访问的属性不存在并重载（覆盖基类对某方法的默认实现）了 `__getattribute__` 方法时，该方法不会主动抛出 `AttributeError` 异常。上图中捕获的 `AttributeError` 异常，是由基类 `__getattribute__` 方法实现并抛出。  
常见的错误用法示例：
```python
class man(object):
    gender = '男'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __getattribute__(self, name):
        print('拦截')
        return self.__dict__(name)


A = man('小明', 20)
print(A.name)

```
结果：
```bash
拦截
拦截
拦截
拦截
拦截
拦截
拦截
Traceback (most recent call last):
  File "D:/work/projects/example.py", line 18, in <module>
    print(A.name)
  File "D:/work/projects/example.py", line 14, in __getattribute__
    return self.__dict__(name)
  File "D:/work/projects/example.py", line 14, in __getattribute__
    return self.__dict__(name)
  File "D:/work/projects/example.py", line 14, in __getattribute__
    return self.__dict__(name)
  [Previous line repeated 993 more times]
  File "D:/work/projects/example.py", line 13, in __getattribute__
    print('拦截')
RecursionError: maximum recursion depth exceeded while calling a Python object
```

在实现 `__getattribute__` 方法时访问对象自身的属性，程序陷入无限循环直到崩溃。

### __getattr__
官方文档描述如下：  
`object.``__getattr__`(_self_, _name_)  
Called when the default attribute access fails with an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError) (either [`__getattribute__()`](https://docs.python.org/3/reference/datamodel.html#object.__getattribute__) raises an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError) because _name_ is not an instance attribute or an attribute in the class tree for `self`; or [`__get__()`](https://docs.python.org/3/reference/datamodel.html#object.__get__) of a _name_ property raises [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError)). This method should either return the (computed) attribute value or raise an [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError) exception.  
Note that if the attribute is found through the normal mechanism, [`__getattr__()`](https://docs.python.org/3/reference/datamodel.html#object.__getattr__) is not called. (This is an intentional asymmetry between [`__getattr__()`](https://docs.python.org/3/reference/datamodel.html#object.__getattr__) and [`__setattr__()`](https://docs.python.org/3/reference/datamodel.html#object.__setattr__).) This is done both for efficiency reasons and because otherwise [`__getattr__()`](https://docs.python.org/3/reference/datamodel.html#object.__getattr__) would have no way to access other attributes of the instance. Note that at least for instance variables, you can fake total control by not inserting any values in the instance attribute dictionary (but instead inserting them in another object). See the [`__getattribute__()`](https://docs.python.org/3/reference/datamodel.html#object.__getattribute__) method below for a way to actually get total control over attribute access.  
中文翻译：  
当默认属性访问因引发 [`AttributeError`](https://docs.python.org/zh-cn/3/library/exceptions.html#AttributeError) 而失败时被调用 (可能是调用 [`__getattribute__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__getattribute__) 时由于 _name_ 不是一个实例属性或 `self` 的类关系树中的属性而引发了 [`AttributeError`](https://docs.python.org/zh-cn/3/library/exceptions.html#AttributeError)；或者是对 _name_ 特性属性调用 [`__get__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__get__) 时引发了 [`AttributeError`](https://docs.python.org/zh-cn/3/library/exceptions.html#AttributeError))。此方法应当返回（找到的）属性值或是引发一个 [`AttributeError`](https://docs.python.org/zh-cn/3/library/exceptions.html#AttributeError) 异常。  
请注意如果属性是通过正常机制找到的，[`__getattr__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__getattr__) 就不会被调用。（这是在 [`__getattr__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__getattr__) 和 [`__setattr__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__setattr__) 之间故意设置的不对称性。）这既是出于效率理由也是因为不这样设置的话 [`__getattr__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__getattr__) 将无法访问实例的其他属性。要注意至少对于实例变量来说，你不必在实例属性字典中插入任何值（而是通过插入到其他对象）就可以模拟对它的完全控制。请参阅下面的 [`__getattribute__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__getattribute__) 方法了解真正获取对属性访问的完全控制权的办法。

__getattr__方法的自动执行，需要满足两个条件：一是访问对象属性；二是触发AttributeError异常。代码示例如下：
```python
class man(object):
    gender = '男'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __getattribute__(self, name):
        print('拦截')
        if name != 'name':
            raise AttributeError()

    def __getattr__(self, item):
        print("执行__getattr__")
        return self.name


A = man('小明', 20)
A.job

# ------------------
拦截
执行__getattr__
拦截
```

上图中，调用不存在的job属性首先调用 `__getattribute__` 方法（如果该方法未定义，会调用基类的 `__getattribute__` 方法），触发 `AttributeError` 异常并自动捕获，然后才调用 `__getattr__` 方法。  
错误用法示例如下：
```python
class man(object):
    gender = '男'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __getattribute__(self, name):
        print('拦截')
        # if name != 'name':
        #     raise AttributeError()

    def __getattr__(self, item):
        print("执行__getattr__")
        return self.name


A = man('小明', 20)
A.job

# ---------------
拦截
```

重载了 `__getattribute__` 方法，却没有主动抛出 `AttributeError` 异常的机制，或者抛出一个其它类型的异常， `__getattr__` 方法都不会执行。

### __setattr__
object.__setattr__(self, name, value)  
Called when an attribute assignment is attempted. This is called instead of the normal mechanism (i.e. store the value in the instance dictionary). _name_ is the attribute name, _value_ is the value to be assigned to it.  
If [`__setattr__()`](https://docs.python.org/3/reference/datamodel.html#object.__setattr__) wants to assign to an instance attribute, it should call the base class method with the same name, for example, `object.__setattr__(self, name, value)`.  
For certain sensitive attribute assignments, raises an [auditing event](https://docs.python.org/3/library/sys.html#auditing) `object.__setattr__` with arguments `obj`, `name`, `value`.  
中文翻译：  
此方法在一个属性被尝试赋值时被调用。这个调用会取代正常机制（即将值保存到实例字典）。 _name_ 为属性名称， _value_ 为要赋给属性的值。  
如果 [`__setattr__()`](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__setattr__) 想要赋值给一个实例属性，它应该调用同名的基类方法，例如 `object.__setattr__(self, name, value)`。  
引发一个 [审计事件](https://docs.python.org/zh-cn/3/library/sys.html#auditing) `object.__setattr__`，附带参数 `obj`, `name`, `value`。

试图给属性赋值时自动调用该方法，例如：
```python
class man(object):
    gender = '男'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __setattr__(self, name, value):
        print('执行__setattr__')
        self.__dict__[name] = value


A = man('小明', 20)
A.name = '小王'
print(A.name)

# --------------
执行__setattr__
执行__setattr__
执行__setattr__
小王
```

之所以会执行三次print函数，是因为在 `__init__` 方法中，对象A初始化时给属性name和age赋值时，触发了 `__setattr__` 方法。使用该方法是同样需要十分小心避免无限循环陷阱。  
错误用法示例如下：
```python
class man(object):
    gender = '男'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __setattr__(self, name, value):
        print('执行__setattr__')
        self.name = value


A = man('小明', 20)
A.name = '小王'

# --------------------
执行__setattr__
执行__setattr__
执行__setattr__
执行__setattr__
执行__setattr__
执行__setattr__
Traceback (most recent call last):
  File "D:/work/projects/example.py", line 23, in <module>
    A = man('小明', 20)
  File "D:/work/projects/example.py", line 5, in __init__
    self.name = name
  File "D:/work/projects/example.py", line 10, in __setattr__
    self.name = value
  File "D:/work/projects/example.py", line 10, in __setattr__
    self.name = value
  File "D:/work/projects/example.py", line 10, in __setattr__
    self.name = value
  [Previous line repeated 991 more times]
  File "D:/work/projects/example.py", line 9, in __setattr__
    print('执行__setattr__')
RecursionError: maximum recursion depth exceeded while calling a Python object
```

可以看出，在 `__setattr__` 方法中，不能直接给属性赋值，而通常的做法是使用 `__dict__` 魔法属性。 `__dict__` 属性是一个字典，所有的实例属性都存储在这个字典中，而修改 `__dict__` 字典中的键值对成员不会触发 `__setattr__` 方法，这里应注意与直接修改 `__dict__` 的值的区别。  
注意：如果定义 `__setattr__` 方法的同时定义了 `__getattribute__` 方法，那么在修改 `__dict__` 字典中的键值对时，由于调用了 `self.__dict__` 属性，同样会触发 `__getattribute__` 方法，使用时应格外小心。代码示例如下：
```python
class man(object):
    gender = '男'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __setattr__(self, name, value):
        print('执行__setattr__')
        self.__dict__[name] = value

    def __getattribute__(self, name):
        print('执行__getattribute__')
        return super().__getattribute__(name)


A = man('小明', 20)
A.name = "小王"

# -------------
执行__setattr__
执行__getattribute__
执行__setattr__
执行__getattribute__
执行__setattr__
执行__getattribute__
```

上图示例代码中，每调用一次 `__setattr__` 就会调用一次 `__getattribute__` 。  
注意赋值语句与属性调用的区别： `self.__dict__ = {}` 是赋值语句，不会触发 `__getattribute__` 方法，但触发 `__setattr__` 方法； `self.__dict__[name] = value` 语句，先调用 `self.__dict__` 属性，得到dict对象后再修改其成员，因此会触发 `__getattribute__` 方法。 

