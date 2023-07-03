# Python实现链式调用

在python中实现链式调用只需在函数返回对象自己就行了。  
原理：上一个方法返回对象，是下一个调用方法的执行对象，依次执行下去，就成了链式调用方法

链式调用，返回对象自己， 可以再方法后继续接方法
```python
class person():
    def name(self,name):
        self.name=name
        return  self
    def age(self,age):
        self.age=age
        return  self
    def show(self):
        return self.name,self.age
p=person()
print(p.name('tyh').age(15).show())
```

