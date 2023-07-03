# DRF18-Serializer-fields
序列化器的字段处理不仅会验证值（validate），也会将接收值转化为相应类型(clean)


## 1 核心参数

### 1. read_only
只应该包含在输出中，任何输入字段（创建和更新）中包含该属性都会被忽略，默认为False


### 2. write_only
只会在update/create时使用，外界也无法读取该值，默认为False


### 3. required
正常情况下在反序列化时字段没有提供值，将会报错，设置为False，就可以为空，默认为True


### 4. allow_null
验证数据时允许为空，默认为False，不允许


### 5. default
如果没有提供时，就返回默认值。可以将其设置为一个函数或其他可调用的函数，在这种情况下，每次使用该值时都将对其进行评估。当被调用时，它将不会收到任何参数。如果可调用对象有一个set_context方法，那么每次调用字段实例的值作为参数时都将调用该方法。这与验证器的工作方式相同。  
同时包含default 和 required参数的将会报错


### 6. source
用于填充该字段，可以是一个方法，只接受一个self参数，如URLField(source=’get_absolute_url’)，也可以通过‘.’快捷方式调用对象属性，如EmailField(source=’user.email’)  
source=’*’有着特殊的意义，表示将整个对象都会传递进去，在创建嵌套结构和或者需要完整对象来确定输出的时候特别有用。默认为字段名。


### 7. validators
用于验证字段值的函数列表，失败抛出serializers.ValidationError


### 8. error_messages
表示错误代码的错误信息


### 9. label
可以作为HTML表单字段中的name使用，或者其他描述性文本


### 10. help_text
用于在HTML表单中描述该字段


### 11. initial
用于预填充HTML表单字段，可以是一个可调用对象，如
```python
import datetime
from rest_framework import serializers
class ExampleSerializer(serializers.Serializer):
    day = serializers.DateField(initial=datetime.date.today)
```

### 12. style
用于控制render怎么渲染的字典参数
```python
# Use <input type="password"> for the input.
password = serializers.CharField(
    style={'input_type': 'password'}
)

# Use a radio input instead of a select input.
color_channel = serializers.ChoiceField(
    choices=['red', 'green', 'blue'],
    style={'base_template': 'radio.html'}
)
```

## 2. 常用字段

### 1. Boolean fields
BooleanField  
当使用表单时，如果忽略一个值，那么他将始终被视为False,即使它的默认值设为True  
NullBooleanField  
接受None作为一个验证值

### 2. 字符串字段

1. CharField

参数：CharField(max_length=None, min_length=None, allow_blank=False, trim_whitespace=True) trim_whitespace是否清除末尾空格

2. EmailField

EmailField(max_length=None, min_length=None, allow_blank=False)

3. RegexField

RegexField(regex, max_length=None, min_length=None, allow_blank=False)  
regex参数要么是一个正则编译过的正则表达式对象，要么是一个字符串

4. SlugField

RegexField字段翻版， regex参数为[a-zA-Z0-9_-]+  
SlugField(max_length=50, min_length=None, allow_blank=False)

5. URLField

RegexField，regex = http:///  
URLField(max_length=200, min_length=None, allow_blank=False)

6. UUIDField

确保输入的是一个合法的 UUID字符串，to_internal_value方法返回一个uuid.UUID对象， 输出时返回一个规范书写的字符串
> ”de305d54-75b4-431b-adb2-eb6b9e546013”



UUIDField(format=’hex_verbose’),format（表现形式，并不影响原本值）值有以下几种：  
- ‘hex_verbose’：”5ce0e9a5-5ffa-654b-cee0-1238041fb31a”，规范的16进制写法  
- ‘hex’：”5ce0e9a55ffa654bcee01238041fb31a”  
- ‘int’：”123456789012312313134124512351145145114”  
- ‘urn’：RFC 4122 URN ，”urn:uuid:5ce0e9a5-5ffa-654b-cee0-1238041fb31a”

7. FilePathField

限制文件在一个确定的文件目录中  
FilePathField(path, match=None, recursive=False, allow_files=True, allow_folders=False, required=None, **kwargs)  
参数解读：  
- path：文件的绝对系统路径，就是文件选择最大的目录，其他都是在这个路径之下的  
- match：正则表达式字符串，用于过滤文件名  
- recursive： 递归查询，明确是否包含系统路径下的子目录，默认不包含（false）  
- allow_files：是否包含指定路径下的文件，默认包含（True）  
- allow_folders：是否包含文件夹，默认不包含，与allow_files必须设置一个为True

8. IPAddressField

确保输入的是一个 IPv4或IPv6字符串  
IPAddressField(protocol=’both’, unpack_ipv4=False, **options)  
- protocol：’both’ (default), ‘IPv4’ or ‘IPv6’.  
- unpack_ipv4： Unpacks IPv4（ ::ffff:192.0.2.1），开启后解压为192.0.2.1，只有protocol=both时才可以使用

### 3. 数字字段

1. IntegerField

IntegerField(max_value=None, min_value=None)

2. FloatField

FloatField(max_value=None, min_value=None)

3. DecimalField

DecimalField(max_digits, decimal_places, coerce_to_string=None, max_value=None, min_value=None)

   - max_digits： 要么为None,要么大于等于decimal_places
   - decimal_places：存储的十进制位数
   - coerce_to_string：True:返回字符串对象，默认与COERCE_DECIMAL_TO_STRING设置一致，一般为True,如果DECIMAL对象由序列化器返回，那就取决于renderer，localize为True将会强制将这个值设置为True.
   - localize:本地化输入输出,默认False.如果设置了USE_L10N=True，那么你就可以使用数据格式化

### 4. 日期字段

1. DateTimeField

DateTimeField(format=api_settings.DATETIME_FORMAT, input_formats=None)

   - format如果没有指定，默认按照DATETIME_FORMAT设置输出，’iso-8601’。设置为字符串类型，意味着to_representation返回的值强制转换为字符串。设置为None意味着可以反悔一个Python的datetime对象。
   - input_forms:输入的格式，解析时使用，没有指定的，默认使用DATETIME_INPUT_FORMATS的默认值[‘iso-8601’]。
   - 使用auto_now=True和auto_now_add=True默认为只读属性。
2. DateField

DateField(format=api_settings.DATE_FORMAT, input_formats=None)

3. TimeField

TimeField(format=api_settings.TIME_FORMAT, input_formats=None)

4. DurationField（Django versions >= 1.8）

验证时默认包含一个datetime.timedelta实例，返回的格式为’[DD] [HH:[MM:]]ss[.uuuuuu]’

### 5. 选择字段

1. ChoiceField

如果模型字段中含有choices=…参数，ModelSerializer会自动生成为ChoiceField。  
ChoiceField(choices)

   - choices： 合法的可选值列表，也可以使用(key, display_name)元组列表
   - allow_blank：默认为False，一般为文本选项设置此属性
   - allow_null：一般为数字或者非文本设置此属性
   - html_cutoff:默认为None,可以选择的最大数量
   - html_cutoff_text：设置一个文本切割器，默认为”More than {count} items…”
2. MultipleChoiceField

参数与用法和ChoiceField 一致

### 6. 文件上传字段
FileField和ImageField类紧适用于MultiPartParser或FileUploadParser，设置FILE_UPLOAD_HANDLERS 用于处理上传文件

1. FileField

FileField(max_length=None, allow_empty_file=False, use_url=UPLOADED_FILES_USE_URL)  
- max_length：文件名最大长度  
- allow_empty_file：文件能否为空  
- use_url：True，使用url作为表现形式，默认为（UPLOADED_FILES_USE_URL=True）,false则使用文件名作为表现形式。

2. ImageField

ImageField(max_length=None, allow_empty_file=False, use_url=UPLOADED_FILES_USE_URL)  
要求安装Pillow package or PIL package

### 7. 复合字段

1. ListField

ListField(child=, min_length=None, max_length=None)  
child：用于验证列表中的对象实例，如果没有的话就不进行验证
```python
# 验证列表中是否为数字类型
scores = serializers.ListField(
   child=serializers.IntegerField(min_value=0, max_value=100)
)
# 字符类型
class StringListField(serializers.ListField):
    child = serializers.CharField()
```

2. DictField  
DictField(child=)  
key始终为字符串  
child验证字典中的value
```python
document = DictField(child=CharField())
```

3. JSONField  
JSONField(binary),如果binary设置为True，则返回字符串，而不是原生的数据结构

### 8. 其他字段

1. ReadOnlyField  
返回不能修改的值，一般用于ModelSerializer，字段名是一个属性值而不是字段
```python
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'account_name', 'has_expired')
```

2. HiddenField

一个字段值不是基于用户输入，而是由默认值或者可调用对象的值
> modified = serializers.HiddenField(default=timezone.now)



因为一些验证需要预先提供一个值，而你又不想将这些字段暴露给客户端

1. ModelField

一个普通字段可以是任何模型字段。ModelField能被用于为自定义模型字段创建序列化字段，而不需要创建一个新的自定义序列化字段。  
一般用于ModelSerializer中  
ModelField(model_field=)

> ModelField(model_field=MyModel()._meta.get_field(‘custom_field’))


2. SerializerMethodField

只读字段，通过调用本序列化器的方法，可以用来对显示的顺序进行排序  
SerializerMethodField(method_name=None)  
method_name：序列化类中需要调用的方法名如果没有包含这个参数名，默认为get_ method_name指定的方法只接受一个参数（除了self外），返回想要在序列化类中显示的东西
```python
from django.contrib.auth.models import User
from django.utils.timezone import now
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    days_since_joined = serializers.SerializerMethodField()

    class Meta:
        model = User

    def get_days_since_joined(self, obj):
        return (now() - obj.date_joined).days
```

1. 自定义字段

如果你需要自定义一个字段，你需要继承Field类，至少重写.to_representation()和.to_internal_value()方法中的一种。  
这两种方法是用来转换数据类型， initial datatype，primitive，serializable datatype  
原生数据类型（ Primitive datatypes）：number, string, boolean, date/time/datetime or None，也可以是任何列表或者字典对象（只包含原生数据），如果需要支持其他类型，你需要使用render.  
.to_representation(): initial datatype装换成primitive后，再转换成serializable datatype  
to_internal_value()：将primitive数据类型转换成python内部类型，数据不合法时，抛出serializers.ValidationError异常。  
WritableField类在2.x版本以后，你应该继承Field类，然后重写to_internal_value()方法。
```python
class Color(object):
    """
   RGB颜色对象
    """
    def __init__(self, red, green, blue):
        assert(red >= 0 and green >= 0 and blue >= 0)
        assert(red < 256 and green < 256 and blue < 256)
        self.red, self.green, self.blue = red, green, blue

class ColorField(serializers.Field):
    """
    颜色对象序列化成rgb(#, #, #)'写法
    """
    def to_representation(self, obj):
        return "rgb(%d, %d, %d)" % (obj.red, obj.green, obj.blue)

    def to_internal_value(self, data):
        data = data.strip('rgb(').rstrip(')')
        red, green, blue = [int(col) for col in data.split(',')]
        # 返回一个python原生对象
        return Color(red, green, blue)
```
默认字段值映射了一个对象，如果需要自定义这个值是怎么被接收的，你需要重写.get_attribute()方法和.get_value()
```python
class ClassNameField(serializers.Field):
    def get_attribute(self, obj):
        # 传递对象实例到to_representation方法中去，而不仅仅是传递一个字段属性
        return obj

    def to_representation(self, obj):
        """
        将对象序列化为类名
        """
        return obj.__class__.__name__
```
数据不合法时，抛出验证错误
```python
def to_internal_value(self, data):
    # 检验数据类型
    if not isinstance(data, six.text_type):
        msg = 'Incorrect type. Expected a string, but got %s'
        raise ValidationError(msg % type(data).__name__)

    # 利用正则表达式匹配字符串格式
    if not re.match(r'^rgb\([0-9]+,[0-9]+,[0-9]+\)$', data):
        raise ValidationError('Incorrect format. Expected `rgb(#,#,#)`.')
    # 移除左边的'rgb('，移除右边的')'
    data = data.strip('rgb(').rstrip(')')
    # 将字符串按‘，’切割
    red, green, blue = [int(col) for col in data.split(',')]
    # 检验数据值0-255
    if any([col > 255 or col < 0 for col in (red, green, blue)]):
        raise ValidationError('Value out of range. Must be between 0 and 255.')
    # 返回一个颜色对象
    return Color(red, green, blue)
```
.fail方法创建了一个处理ValidationError的快捷方式，携带着从error_messages中获取的消息字符串，这种风格使您的错误消息更干净，并且与您的代码更分离，并且应该首选。
```python
default_error_messages = {
    'incorrect_type': 'Incorrect type. Expected a string, but got {input_type}',
    'incorrect_format': 'Incorrect format. Expected `rgb(#,#,#)`.',
    'out_of_range': 'Value out of range. Must be between 0 and 255.'
}

def to_internal_value(self, data):
    if not isinstance(data, six.text_type):
        # 传入了错误类型，以及输入数据的类型
        self.fail('incorrect_type', input_type=type(data).__name__)

    if not re.match(r'^rgb\([0-9]+,[0-9]+,[0-9]+\)$', data):
        self.fail('incorrect_format')

    data = data.strip('rgb(').rstrip(')')
    red, green, blue = [int(col) for col in data.split(',')]

    if any([col > 255 or col < 0 for col in (red, green, blue)]):
        self.fail('out_of_range')

    return Color(red, green, blue)
```
3. 三方包

1. DRF Compound Fields

drf-compound-fields包提供了”compound”序列化字段。例如一个简单值组成的列表，序列化时不用设置many=True选项。也提供了序列化字典和值的字段，这个值可以是具         体的类型，或者是一系列类型组成的列表

2. DRF Extra Fields

drf-extra-fields包提供Base64ImageField and PointField

3. djangrestframework-recursive

djangorestframework-recursive包提供了RecursiveField用于序列化递归结构

4. django-rest-framework-gis

django-rest-framework-gis提供了GeometryFiel地理位置字段，和GeoJSON serializer。

5. django-rest-framework-hstore

django-rest-framework-hstore提供了HStoreField来支持 django-hstore包的DictionaryField字段




————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78497674](https://blog.csdn.net/runnoob_1115/article/details/78497674)
