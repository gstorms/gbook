# DRF20-Validators验证类
Validators可以在不同的字段验证时重复使用


## 1 REST框架中的模型验证
REST框架中的模型验证与Django的ModelForm表单验证有少量不同：  
ModelForm中的验证部分在form中，部分由模型验证，而在REST框架中则完全由序列化类验证  
优点：

1. 让代码的行为变得更明显
1. ModelSerializer与Serializer类互相转化很轻松
1. 使用repr方法就能看到明确的验证规则
```python
class CustomerReportRecord(models.Model):
    time_raised = models.DateTimeField(default=timezone.now, editable=False)
    reference = models.CharField(unique=True, max_length=20)
    description = models.TextField()

class CustomerReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerReportRecord
# 查看字段验证信息
>>> from project.example.serializers import CustomerReportSerializer
>>> serializer = CustomerReportSerializer()
>>> print(repr(serializer))
CustomerReportSerializer():
    id = IntegerField(label='ID', read_only=True)
    time_raised = DateTimeField(read_only=True)
    reference = CharField(max_length=20, validators=[<UniqueValidator(queryset=CustomerReportRecord.objects.all())>])
    description = CharField(style={'type': 'textarea'})

# reference字段的唯一性验证被明确表示。
```

## 2 自带验证器

### 1 UniqueValidator
用于验证unique=True的字段，常用参数：  
- queryset： required，用于明确验证唯一性集合，必须设置  
- message：当验证失败时的提示信息  
- lookup：用于查找已经存在的实例，默认为’exact’。
```python
from rest_framework.validators import UniqueValidator

slug = SlugField(
    max_length=100,
    validators=[UniqueValidator(queryset=BlogPost.objects.all())]
)
```

### 2 UniqueTogetherValidator
queryset：required，用于明确验证唯一性集合，必须设置  
fields: required，字段列表或者元组，字段必须是序列化类中存在的字段  
message：当验证失败时的提示信息  
UniqueTogetherValidator有一个隐性要求就是验证的字段必须要提供值，除非设置了一个默认值
```python
from rest_framework.validators import UniqueTogetherValidator

class ExampleSerializer(serializers.Serializer):
    class Meta:
        validators = [
            UniqueTogetherValidator(
                queryset=ToDoItem.objects.all(),
                fields=('list', 'position')
            )
        ]
```

### 3 UniqueForDateValidator UniqueForMonthValidator UniqueForYearValidator
用于验证模型中的unique_for_date, unique_for_month 和unique_for_year字段  
- queryset： required，用于明确验证唯一性集合，必须设置  
- message：当验证失败时的提示信息  
- date_field：required， 用于确定时间范围必须是在序列化中已经存在的字段  
- field：required，用于验证唯一性的字段名。
```python
from rest_framework.validators import UniqueForYearValidator

class ExampleSerializer(serializers.Serializer):
    # ...
    class Meta:
        # Blog posts should have a slug that is unique for the current year.
        validators = [
            UniqueForYearValidator(
                queryset=BlogPostItem.objects.all(),
                field='slug',
                date_field='published'
            )
        ]
```
date_field必须是序列化类中已经存在的类，不能简单的设置一个默认值，因为，默认值是在数据通过验证之后才会生成的。  
使用一个可写的时间字段：
```python
published = serializers.DateTimeField(required=True)
```
使用一个只读的时间字段
```python
published = serializers.DateTimeField(read_only=True, default=timezone.now)
```
使用一个隐藏的时间字段
```python
published = serializers.HiddenField(default=timezone.now)
```

### 4 高级的字段默认值
验证函数需要验证多个字段，但是有时需要验证一个字段，不是由API客户端输入的但又是一个可用的输入。

1. 对于这种验证有两种实现方式：

- 利用HiddenField，该字段会传递给validated_data，但是不会被序列化输出给用户  
- 使用read_only=True和default=…参数。

2. CurrentUserDefault

为了使用CurrentUserDefault，’request’中必须包含上下文字典，以供序列化类初始化使用
```python
owner = serializers.HiddenField(
    default=serializers.CurrentUserDefault()
)
```

3. CreateOnlyDefault  
只在创建时使用的默认类，其接受一个参数，可以是一个默认值，也可以是一个可调用的对象
```python
created_at = serializers.DateTimeField(
    read_only=True,
    default=serializers.CreateOnlyDefault(timezone.now)
)
```

### 5 validators的局限性
对于默写模糊不清的字段，由ModelSerializer会自动生成比自己明确设置好  
也可以设置validators=[],禁用验证函数  
1. 可选字段  
对于”unique together”默认强制设置了required=True，有时对于其中一个字段，需要required=False，此时验证行为就不清晰了  
对于未设置验证函数的对象，可以在.validate()或者视图函数中使用其他的验证逻辑
```python
class BillingRecordSerializer(serializers.ModelSerializer):
    def validate(self, data):
        # Apply custom validation either here, or in the view.

    class Meta:
        fields = ('client', 'date', 'amount')
        extra_kwargs = {'client': {'required': 'False'}}
        validators = []  # Remove a default "unique together" constraint.
```
更新可选对象  
当更新一个已经存在的实例时，唯一性检查会将目前的实例排除。因为他是作为序列化类的一个属性instance=…。在更新嵌套序列化类时，就不会被排除了。  
这时你就需要明确的移除这个验证函数，然后编写.validate()方法或者在views中明确。

调式复杂情况  
ModelSerializer使用repr方法

### 6 编写一个自定义验证函数
可以利用已经存在的验证函数，或者编写自定义验证类

1. 基础函数

验证可能抛出serializers.ValidationError异常  
.validate_可以提供一个字段验证
```python
def even_number(value):
    if value % 2 != 0:
        raise serializers.ValidationError('This field must be an even number.')
```

2. 基础类  
使用**call**方法，允许使用传参，和重用行为
```python
class MultipleOf(object):
    def __init__(self, base):
        self.base = base

    def __call__(self, value):
        if value % self.base != 0:
            message = 'This field must be a multiple of %d.' % self.base
            raise serializers.ValidationError(message)
```
你也可以为验证类添加附加的请求上下文。可以在基础验证类中使用set_context方法。
```python
def set_context(self, serializer_field):
    # 判断这是一个更新还是一个创建操作
    self.is_update = serializer_field.parent.instance is not None
```

