# DRF17-Serializer
## 1 Serializers

### 1 简介
序列化器允许将诸如queryset和模型实例之类的复杂数据转换为原生的Python数据类型，这些数据类型可以很容易地转换为JSON、XML或其他内容类型。序列化器还提供反序列化，允许解析后的数据在第一次验证传入数据之后被转换回复杂类型。  
REST框架中的序列化器与Django的表单和模型类的工作非常相似。框架提供了一个Serializer类，使用一种强大的、通用的方法来控制响应的输出，和一个ModelSerializer类，它为创建处理模型实例和queryset的序列化器提供了一个有用的快捷方式。


### 2 使用示例

#### 1.创建一个对象
```python
from datetime import datetime

class Comment(object):
    def __init__(self, email, content, created=None):
        self.email = email
        self.content = content
        self.created = created or datetime.now()

comment = Comment(email='leila@example.com', content='foo bar')
```

#### 2. 声明一个serializer类，提供序列化和反序列化方法
```python
from rest_framework import serializers

class CommentSerializer(serializers.Serializer):
    email = serializers.EmailField()
    content = serializers.CharField(max_length=200)
    created = serializers.DateTimeField()
```

#### 3. 序列化对象（转化为python的原生数据类型，再转化为其他格式）
```python
serializer = CommentSerializer(comment)
serializer.data
# {'email': 'leila@example.com', 'content': 'foo bar', 'created': '2016-01-27T15:17:10.375877'}
# 装换成json数据类型
from rest_framework.renderers import JSONRenderer

json = JSONRenderer().render(serializer.data)
json
# b'{"email":"leila@example.com","content":"foo bar","created":"2016-01-27T15:17:10.375877"}'
```

#### 4. 反序列化对象（首先将数据流转化为python原生数据）
```python
from django.utils.six import BytesIO
from rest_framework.parsers import JSONParser

# 转化成数据流
stream = BytesIO(json)
# 使用json解析器转化成python原生数据类型，从字符串中解析出json对象
data = JSONParser().parse(stream)
# 将这些原生数据恢复到验证字典中
serializer = CommentSerializer(data=data)
serializer.is_valid()
# True
serializer.validated_data
# {'content': 'foo bar', 'email': 'leila@example.com', 'created': datetime.datetime(2012, 08, 22, 16, 20, 09, 822243)}
```

#### 5. 保存实例
如果我们想返回一个完整的对爱实例，那么我们必须基于validated data实现一个.create()或update()方法，或者两个都实现
```python
class CommentSerializer(serializers.Serializer):
    email = serializers.EmailField()
    content = serializers.CharField(max_length=200)
    created = serializers.DateTimeField()

    def create(self, validated_data):
        return Comment(**validated_data)

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.content = validated_data.get('content', instance.content)
        instance.created = validated_data.get('created', instance.created)
        return instance
```
如果对象与数据模型一致，也想保存对象到数据库模型中：
```python
def create(self, validated_data):
    # 使用数据库模型对象进行创建
    return Comment.objects.create(**validated_data)

def update(self, instance, validated_data):
    instance.email = validated_data.get('email', instance.email)
    instance.content = validated_data.get('content', instance.content)
    instance.created = validated_data.get('created', instance.created)
    instance.save()
    return instance
```
最后我们对通过验证的对象进行保存
```python
comment = serializer.save()
```
.save()方法到底是更新还是创建，取决于我们是否传入一个已经存在的序列化实例，如：
```python
# .save()将会创建一个新的实例
serializer = CommentSerializer(data=data)

# .save()将会更新已经存在的comment实例
serializer = CommentSerializer(comment, data=data)
```
保存时添加附加属性  
有时，您希望您的视图代码能够在保存实例的时候注入额外的数据。这些额外的数据可能包括当前用户、当前时间或其他不属于请求数据的信息。
```python
serializer.save(owner=request.user)
```
添加的附加信息也会被包含在validated_data中，然后传入到.create()或update（）函数中去  
重写保存方法  
有时created（）和update（）方法名字命名不能传达出实际意义，就需要重写，如下， 你应该重写方法：
```python
class ContactForm(serializers.Serializer):
    email = serializers.EmailField()
    message = serializers.CharField()

    def save(self):
        email = self.validated_data['email']
        message = self.validated_data['message']
        send_email(from=email, message=message)
```

#### 6.验证
在反序列化数据时，在获取validated_data或保存实例前需要调用is_valid()方法，如果验证时发生了错误，serializer.errors将会包含发生的错误信息：
```python
serializer = CommentSerializer(data={'email': 'foobar', 'content': 'baz'})
serializer.is_valid()
# False
serializer.errors
# {'email': [u'Enter a valid e-mail address.'], 'created': [u'This field is required.']}
```
错误字典中的每一个键都应该是字段名，non_field_errors也会列出具体的字段信息，可以通过  
框架设置NON_FIELD_ERRORS_KEY来设置non_field_errors的字段名。  
对于验证不合法的数据也可以抛出异常，设置raise_exception=True.
```python
# Return a 400 response if the data was invalid.
serializer.is_valid(raise_exception=True)
```
**单个字段验证**  
添加.validate_方法（类似.clean_方法），如
```python
from rest_framework import serializers

# 博客提交时的标题必须含有‘django’
class BlogPostSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)
    content = serializers.CharField()

    def validate_title(self, value):
        """
        Check that the blog post is about Django.
        """
        if 'django' not in value.lower():
            raise serializers.ValidationError("Blog post is not about Django")
        return value
```
如果字段设置了required=False，而且提交的时候没有包含这个字段，那么就不会被验证  
如果需要对多个字段的值进行比较验证，应该重写.validate()方法，返回validated values或抛出ValidationError。
```python
from rest_framework import serializers

class EventSerializer(serializers.Serializer):
    description = serializers.CharField(max_length=100)
    start = serializers.DateTimeField()
    finish = serializers.DateTimeField()

    def validate(self, data):
        """
        Check that the start is before the stop.
        """
        if data['start'] > data['finish']:
            raise serializers.ValidationError("finish must occur after start")
        return data
```
序列化上的每个字段都可以包含验证器：
```python
def multiple_of_ten(value):
    if value % 10 != 0:
        raise serializers.ValidationError('Not a multiple of ten')

class GameRecord(serializers.Serializer):
    score = IntegerField(validators=[multiple_of_ten])
    ...
```
可重用的验证类，在元类中声明：
```python
class EventSerializer(serializers.Serializer):
    name = serializers.CharField()
    room_number = serializers.IntegerField(choices=[101, 102, 103, 201])
    date = serializers.DateField()

    class Meta:
        # 每天每间房只能干一件事
        validators = UniqueTogetherValidator(
            queryset=Event.objects.all(),
            fields=['room_number', 'date']
        )
```

#### 7. 访问初始数据和实例
当将初始对象或queryset传递给序列化器实例时，对象将被作为.instance调用。如果没有初始对象被传递，那么.instance的值将为None。  
当将数据传递给序列化器实例时，未修改的数据将被作为.initial_data提供。如果没有传递，那么initial_data属性将不存在。


#### 8. 部分更新
默认需要传入全部字段，否则会产生错误，可以利用partial参数，只传入需要更新的字段
```python
# Update `comment` with partial data
serializer = CommentSerializer(comment, data={'content': u'foo bar'}, partial=True)
```

#### 9. 处理嵌套对象
serializer本身也是一个字段类型field，可以作为其他序列化类中的字段类型，如
```python
class UserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField(max_length=100)

class CommentSerializer(serializers.Serializer):
    # 使用了其他序列化器，来形成嵌套，如果允许为空，接受None值，应该设置required=False
    #  user = UserSerializer(required=False) 即允许匿名对象评论
    user = UserSerializer()
    # 如果传入的序列化器是一系列对象，应该设置many=True
    edits = EditItemSerializer(many=True)
    content = serializers.CharField(max_length=200)
    created = serializers.DateTimeField()
```
使用示例:
```python
serializer = CommentSerializer(data={'user': {'email': 'foobar', 'username': 'doe'}, 'content': 'baz'})
# 嵌套对象也会被验证
serializer.is_valid()
# False
serializer.errors
# {'user': {'email': [u'Enter a valid e-mail address.']}, 'created': [u'This field is required.']}
```
编写一个create（）方法
```python
class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ('username', 'email', 'profile')

    def create(self, validated_data):
        # pop方法使用最后传入的数据
        profile_data = validated_data.pop('profile')
        user = User.objects.create(**validated_data)
        Profile.objects.create(user=user, **profile_data)
        return user
```
编写一个update方法,需要对所有类进行更新，首先获取原对象，然后根据是否传入新的数据更新对象。如果相关数据为None或者没有提供，如何进行处理：  
- 设置相关对象值为Null  
- 删除相关实例  
- 无视数据，保持原数据  
- 抛出一个错误
```python
    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        # 除非应用强制此字段必须被设置，接下来可能会抛出需要处理`DoesNotExist’的异常
        # 获取原来的profile实例
        profile = instance.profile

        # 获取新的信息，如果不存在就使用以前的信息
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.save()

        # profile是否是优质成员，profile属性
        profile.is_premium_member = profile_data.get(
            'is_premium_member',
            profile.is_premium_member
        )
        # profile是否支持协议，profile属性
        profile.has_support_contract = profile_data.get(
            'has_support_contract',
            profile.has_support_contract
         )
        profile.save()

        return instance
```
由于嵌套的对象的更新和创建有着复杂的依赖关系，所以REST3要求用户自己编写嵌套列表的更新和创建操作，默认不再包含。  
也有第三方包提供自动创建一些自动更新和创建嵌套对象的操作  
在模型管理器中处理保存操作  
在序列化类中处理多个相关实例的方法是编写个性化的模型管理类来处理创建操作，例如：
```python
class UserManager(models.Manager):
    ...

    # 确保了user实例和profiles实例是同时创建的
    def create(self, username, email, is_premium_member=False, has_support_contract=False):
        user = User(username=username, email=email)
        user.save()
        profile = Profile(
            user=user,
            is_premium_member=is_premium_member,
            has_support_contract=has_support_contract
        )
        profile.save()
        return user
# 然后序列化类中的创建方法也可以重写为
def create(self, validated_data):
    return User.objects.create(
        username=validated_data['username'],
        email=validated_data['email']
        is_premium_member=validated_data['profile']['is_premium_member']
        has_support_contract=validated_data['profile']['has_support_contract']
    )
```

#### 10. 处理多个对象
Serializer也可以处理多个对象  
- 序列化多个对象  
设置many=True就可以
```python
queryset = Book.objects.all()
serializer = BookSerializer(queryset, many=True)
serializer.data
# [
#     {'id': 0, 'title': 'The electric kool-aid acid test', 'author': 'Tom Wolfe'},
#     {'id': 1, 'title': 'If this is a man', 'author': 'Primo Levi'},
#     {'id': 2, 'title': 'The wind-up bird chronicle', 'author': 'Haruki Murakami'}
# ]
```
-反序列化多个对象  
默认支持多个对象创建，但不支持多个对象同时更新。若需要支持多个对象同时更新，需要自定义


#### 11. 包含额外的上下文
有时你需要提供额外的上下文使对象能够被正确的序列化。比如你准备序列化一个包含一个超链接事务，你需要序列化类能够使用目前的request对象来生成合格的url.
```python
serializer = AccountSerializer(account, context={'request': request})
serializer.data
# {'id': 6, 'owner': u'denvercoder9', 'created': datetime.datetime(2013, 2, 12, 09, 44, 56, 678870), 'details': 'http://example.com/accounts/6/details'}
```
上下文字典可以使用在任何序列化字段中，例如可以自定义一个.to_representation()方法，查看self.context属性


## 3 ModelSerializer
你通常会想定义一个与数据库模型密切相关的序列化类。 ModelSerializer类提供了一个快捷方式，使你能够自动创建一个字段与模型一致的序列化类。  
ModelSerializer与Serializer的区别：  
- 自动基于数据库模型生成一系列字段  
- 自动为序列化类生成验证函数，例如唯一性验证  
- 包含简单的.create()和.update()，嵌套的需要自己编写
```python
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'account_name', 'users', 'created')
```
默认情况下，类中所有字段都与模型一致，模型中的foreignkey，在序列化类中将会变成PrimaryKeyRelatedField。反向关系在默认情况下是不包含的，除非你在 serializer关系文档中明确声明了。  
检查ModelSerializer  
可以查看ModelSerializers到底为你创建了哪些字段以及详细内容
```python
>>> from myapp.serializers import AccountSerializer
>>> serializer = AccountSerializer()
>>> print(repr(serializer))
AccountSerializer():
    id = IntegerField(label='ID', read_only=True)
    name = CharField(allow_blank=True, max_length=100, required=False)
    owner = PrimaryKeyRelatedField(queryset=User.objects.all())
```

### 1指定包含的字段
使用modelSerializer时，如果想仅包含部分字段，可以通过设置fields或者exclude属性。强烈建议显示的设置需要显示的所有字段，这样模型改变时，就不会无意间暴露数据。例如：
```python
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'account_name', 'users', 'created')
```
你也可以将fields属性设置为’**all**‘，不过不推荐。exclude：不显示谁。

### 2指定显示嵌套对象的显示深度
```python
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'account_name', 'users', 'created')
        depth = 1
```

### 3明确的指出字段
可以添加额外的字段，或者重写默认的字段，额外的字段应该与模型字段一致，或者能够在模型中调用
```python
class AccountSerializer(serializers.ModelSerializer):
    url = serializers.CharField(source='get_absolute_url', read_only=True)
    groups = serializers.PrimaryKeyRelatedField(many=True)

    class Meta:
        model = Account
```

### 4指定只读字段
你可能想将多个字段同时指定为只读属性，而不是一个个添加read_only=True属性，你可以使用meta中的可选项：read_only_fields.
```python
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'account_name', 'users', 'created')
        read_only_fields = ('account_name',)
```
模型字段中如果设置为AutoField和editable=False，将被自动设置为只读  
有一个特殊的具有只读属性的例子是unique_together，它要求序列化类对其进行验证，但又不能被用户编辑。正确处理方式，是给字段设置属性read_only=True和default=…，例如
```python
user = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())
```

### 5. 附加的关键字参数
extra_kwargs参数能够为一个字段快捷的提供多个附加参数，这样就不用在fields字段中声明
```python
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
```

### 6. 相关字段
在序列化模型实例时，有多种方式用来表现关系，ModelSerializer默认采用主键来关联相关对象。  
另外一种方式是利用超链接序列化，嵌套序列化和其他自定义的序列化方式。


### 7. 自定义字段映射
ModelSerializer类也暴露了一个API用于重写，以查看序列化类是怎么自动创建字段的  
如果ModelSerializer没有默认创建你说期望的字段，你可以在类中显示的声明它们，或者创建一个基类，用于定义序列化类如何根据模型创建自动创建字段。  
- .serializer_field_mapping  
- .serializer_related_field（表示关系字段）  
ModelSerializer默认为PrimaryKeyRelatedField  
HyperlinkedModelSerializer默认为serializers.HyperlinkedRelatedField  
- serializer_url_field（url）  
- serializer_choice_field(choice)


#### 字段类和字段参数

- .build_standard_field(self, field_name, model_field)
- .build_relational_field(self, field_name, relation_info)
- relation_info为一元组，包含model_field, related_model, to_many和 has_through_model
- .build_nested_field(self, field_name, relation_info, nested_depth)

匹配模型中的关系型字段

- .build_property_field(self, field_name, model_class)
- .build_url_field(self, field_name, model_class)
- .build_unknown_field(self, field_name, model_class)

## 4 HyperlinkedModelSerializer
HyperlinkedModelSerializer与ModelSerializer是十分类似的，除了用hyperlinks来代替PK呈现关系。该类默认包含一个url字段用来代替pk字段。url属于HyperlinkedIdentityField字段，该模型中的所有关系都会由HyperlinkedIdentityField链接，你也可以显示的包含此字段
```python
class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = ('url', 'id', 'account_name', 'users', 'created')
```

### 1. 绝对和相对url
当初始化HyperlinkedModelSerializer时，必须请求上下文中包含当前request使生成的url包含主机名，为绝对路径，而不是相对路径
```python
serializer = AccountSerializer(queryset, context={'request': request})
absolute:http://api.example.com/accounts/1/
relative:/accounts/1/
```
如果想获得相对路径时，需要将contex设置为{‘request’: None}


### 2. 如何决定合适的hyperlinked函数
默认的超链接应该与’{model_name}-detail’模式一致，然后通过pk查询，也可以通过extra_kwargs设置view_name和lookup_field，重写url的字段名和查询参数名：
```python
class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = ('account_url', 'account_name', 'users', 'created')
        extra_kwargs = {
            'url': {'view_name': 'accounts', 'lookup_field': 'account_name'},
            'users': {'lookup_field': 'username'}
        }
```
或者可以在serializer类中明确的设置
```python
class AccountSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='accounts',
        lookup_field='slug'
    )
    users = serializers.HyperlinkedRelatedField(
        view_name='user-detail',
        lookup_field='username',
        many=True,
        read_only=True
    )

    class Meta:
        model = Account
        fields = ('url', 'account_name', 'users', 'created')
```
通过打印repr(HyperlinkedModelSerializer)实例能够明确显示view_name和lookup_field


### 3. 改变url字段名
默认为‘url’, 也可以全局设置URL_FIELD_NAME


## 5. ListSerializer
ListSerializer能够同时查询或序列化多个对象。不过一般都不直接使用ListSerializer，而是通过设置  
many=True参数。  
当你为序列化器设置many=True时， 就创建了一个 ListSerializer。  
ListSerializer当设置allow_empty为True则允许空值作为合法返回值，False则不允许


### 1. 定制ListSerializer行为

1. 有时候你想使用特殊的验证，例如检查列表中一个元素是否与另外的元素存在冲突
1. 为多个对象定制创建和更新方法

可以在serializers.Serializer中使用many=True，另外Meta中设置 list_serializer_class选项
```python
class CustomListSerializer(serializers.ListSerializer):
    ...

class CustomSerializer(serializers.Serializer):
    ...
    class Meta:
        list_serializer_class = CustomListSerializer
```

### 2. 定制多个对象创建方法
```python
class BookListSerializer(serializers.ListSerializer):
    def create(self, validated_data):
        books = [Book(**item) for item in validated_data]
        # 多个创建需要在数据库模型中自定义
        return Book.objects.bulk_create(books)

class BookSerializer(serializers.Serializer):
    ...
    class Meta:
        list_serializer_class = BookListSerializer
```

### 3. 定制多个对象更新方法
ListSerializer默认不支持多个对象同时更新。因为这个行为到底是应该进行插入还是删除是模糊不清的。  
为了支持多对象更新，你应该写的十分明确  
- 怎样确定数据列表中的哪几个应该被更新？  
- 插入操作怎么处理，插入数据是否合法？还是创建一个新的对象？  
- 移除操作怎么处理是移除对象还是移除关系？它们应该被忽略还是不合法？  
- 排序操作怎么处理？改变两个元素的位置还是忽略它们？  
你需要显示的添加id字段到显示中去，默认创建的id字段是只读的，这将导致其无法更新。一旦你显示声明了，那他就会被update操作所更新。
```python
# 处理多个对象的方法
class BookListSerializer(serializers.ListSerializer):
    def update(self, instance, validated_data):
        # 利用id将原数据book对象和需要更新的数据对象链接起来
        # 获取原来数据的id，生成了一个字典对象id-instance
        book_mapping = {book.id: book for book in instance}
        # 获取更新对象的id
        data_mapping = {item['id']: item for item in validated_data}

        # 重写创建和更新方法
        ret = []
        # 获取更新对象的id和实际对象
        for book_id, data in data_mapping.items():
            # 在原有数据中查找是否存在该id为book_id的对象
            book = book_mapping.get(book_id, None)
            # 如果没有就创建
            if book is None:
                ret.append(self.child.create(data))
            else:
                # 存在就更新
                ret.append(self.child.update(book, data))

        # 重写删除方法，如果原来的数据没有在新传进来的数据中，那就将原来的删除
        for book_id, book in book_mapping.items():
            if book_id not in data_mapping:
                book.delete()
        # 所以ret为更新后的对象和新建的对象（book）
        return ret

class BookSerializer(serializers.Serializer):
    # 我们需要利用主键鉴别这个元素，所以我们需要显示的指定可读写的id,而不是使用默认只读的id.
    id = serializers.IntegerField()

    ...
    id = serializers.IntegerField(required=False)

    class Meta:
        # 更新多个对象的时候就会调用这个类
        list_serializer_class = BookListSerializer
```
3.1版本的REST框架自动创建了多对象同时更新的方法，类似于REST 2中提供的allow_add_remove行为


### 4. 定制ListSerializer初始化内容
当serializer设置many=True时，子类Serializer和父类ListSerializer的init()方法都应该确认接收哪些参数和关键字参数。  
默认将所有的参数传递给两个类，除了validators和任何自定义的关键字参数，这两个参数是默认由子类处理的。  
当many= True时，如果你需要定义这两个类是如何进行初始化的，你可以利用many_init这个类方法。
```python
@classmethod
def many_init(cls, *args, **kwargs):
    # 初始化子类序列器
    kwargs['child'] = cls()
    # 初始化父类list序列器
    return CustomListSerializer(*args, **kwargs)
```

## 5 BaseSerializer

### 1.基本介绍
BaseSerializer轻松支持可选的序列化样式和反序列化样式  
BaseSerializer和Serializer一样实现简单的API  
- data:返回输出的原始表示  
- is_valid()：反序列化并验证数据是否合法  
- validated_data：验证成功后返回的数据  
- errors： 验证失败后产生的错误  
- save()：保存数据到对象实例中  
- .to_representation()：重写此方法以支持序列化，用于进行读操作  
- .to_internal_value()：重写此方法以支持反序列化，进行写操作  
- .create()和.update()：重写这两个方法，以支持保存实例  
因为BaseSerializer提供了和Serializer一样的接口，所以你可以像使用Serializer或者ModelSerializer一样使用存在的基本的类视图函数  
唯一的不同之处就是BaseSerializer不会产生可供浏览器使用的API，这是因为他不会返回全部字段信息，允许每一个字段都以合适的方式进行渲染  
利用BaseSerializer实现一个只读的序列化类，只需要重写.to_representation()方法就行
```python
# 创建一个数据库模型
class HighScore(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    player_name = models.CharField(max_length=10)
    score = models.IntegerField()

# 通过将HighScore转换成简单的原始数据类型。
class HighScoreSerializer(serializers.BaseSerializer):
    def to_representation(self, obj):
        return {
            'score': obj.score,
            'player_name': obj.player_name
        }

# 现在我们就可以使用HighScoreSerializer序列化单个或多个HighScore实例了
@api_view(['GET'])
def high_score(request, pk):
    instance = HighScore.objects.get(pk=pk)
    serializer = HighScoreSerializer(instance)
    return Response(serializer.data)


@api_view(['GET'])
def all_high_scores(request):
    queryset = HighScore.objects.order_by('-score')
    serializer = HighScoreSerializer(queryset, many=True)
    return Response(serializer.data)
```

### 2. 创建一个读写的序列化类

- 首先，我们需要实现to_internal_value()方法，该方法返回验证后的数据用来构成对象实例，如果数据格式不对会抛出ValidationError。
- 一旦实现了to_internal_value()方法，基础的验证接口就可以使用了，如 .is_valid(), .validated_data和.errors
- 如果需要支持.save()方法，需要实现.create()和.update()中至少一种。
```python
class HighScoreSerializer(serializers.BaseSerializer):
    # 读写操作基础
    def to_internal_value(self, data):
        score = data.get('score')
        player_name = data.get('player_name')

        # 数据验证
        if not score:
            raise ValidationError({
                'score': 'This field is required.'
            })
        if not player_name:
            raise ValidationError({
                'player_name': 'This field is required.'
            })
        if len(player_name) > 10:
            raise ValidationError({
                'player_name': 'May not be more than 10 characters.'
            })

        # 返回验证后的数据，.validated_data就可以使用了
        return {
            'score': int(score),
            'player_name': player_name
        }

    # 实现只读
    def to_representation(self, obj):
        return {
            'score': obj.score,
            'player_name': obj.player_name
        }

    # 创建一个对象
    def create(self, validated_data):
        return HighScore.objects.create(**validated_data)
```

### 3. 创建一个新的基础类（BaseSerializer）
应用场景：实现一个通用的类用来处理特殊的序列化风格，或者集成可插拔的后端
```python
# 将任何对象转化成原始数据
class ObjectSerializer(serializers.BaseSerializer):
    """
    将复杂对象转化成简单的只读原始数据
    """
    def to_representation(self, obj):
        # 列出对象的所有属性和方法
        for attribute_name in dir(obj):
            attribute = getattr(obj, attribute_name)

            if attribute_name('_'):
                # 属性名中含有_的为私有属性，无视
                pass
            elif hasattr(attribute, '__call__'):
                # 无视方法和可以当函数调用的
                pass
            elif isinstance(attribute, (str, int, bool, float, type(None))):
                # 输出数据类型为原始数据类型的
                output[attribute_name] = attribute
            elif isinstance(attribute, list):
                # 递归处理列表中的所有数据
                output[attribute_name] = [
                    self.to_representation(item) for item in attribute
                ]
            elif isinstance(attribute, dict):
                # 递归处理字典中的所有元素，字典生成表达式
                output[attribute_name] = {
                    str(key): self.to_representation(value) for key, value in attribute.items()
                }
            else:
                # 其他的任何对象都装换成字符串
                output[attribute_name] = str(attribute)
```

## 6 序列化类的高级用法

### 1. 重写序列化方法和反序列化方法
如果你需要修改序列化、反序列化或验证数据的方法，你可以重写.to_representation()或者 .to_internal_value()  
应用场景：  
- 为基础类添加一个新的方法  
- 轻微修改存在类的方法  
- 提高需要频繁访问返回大量数据的接口的序列化性能  
特征方法：  
- .to_representation(self, obj)：一般返回python内置的数据类型结构，具体类型通过render_classes指定  
- .to_internal_value(self, data)：数据验证返回validated_data，如果序列化类中调用了save方法，那么validated_data就会被.create()或.update()所接收，验证错误就会抛出ValidationError(errors)。接收的data一般为request.data的值，所以接收的数据类型为通过API指定的Parser类型


### 2. 继承序列化器
和django中的表单类似，你可以通过继承，重用序列化类。意味着可以在一个父类中声明常用的字段和方法，然后给多个类使用
```python
class MyBaseSerializer(Serializer):
    my_field = serializers.CharField()

    # 验证单个字段的方法 （validate_{fieldname}）
    def validate_my_field(self):
        ...

class MySerializer(MyBaseSerializer):
    ...
```
和django的Model，ModelForm类似，序列化器内部Meta类并不会隐式的继承父类的Meta,如果需要继承父类的Meta类，应该显示指明
```python
class AccountSerializer(MyBaseSerializer):
    class Meta(MyBaseSerializer.Meta):
        model = Account
```
一般我们不推荐使用元类继承，而是在元类中明确的声明它们，另外在使用序列化类继承时有以下几点需要注意：  
- 如果多个基类中声明了同一个Meta类，那么只有第一个会被使用，如果没有，那么就是第一个父类的Meta.  
- 子类可以将父类中的字段设置为None来达到删除父类字段的目的，还有另外一种方法
```python
class MyBaseSerializer(ModelSerializer):
    my_field = serializers.CharField()

class MySerializer(MyBaseSerializer):
    my_field = None
```

### 3. 动态的修改字段
当序列化器完成初始化之后，字段（fields）字典就可以使用.fields属性直接访问。这就使你可以动态的修改fields属性  
这样就可以在程序运行时修改字段而不需要在序列化器中声明
```python
class DynamicFieldsModelSerializer(serializers.ModelSerializer):
    """
    传入了fields属性，就可以动态的指定显示字段
    """

    def __init__(self, *args, **kwargs):
        # 不给父类传递任何字段
        fields = kwargs.pop('fields', None)

        # 正常的初始化父类
        super(DynamicFieldsModelSerializer, self).__init__(*args, **kwargs)

        # 如果没有在参数中指定fields，就返回院本指定的全部字段
        if fields is not None:
            # 删除没有在初始化时传入fields参数中声明的参数
            # 允许的，指定的fields参数
            allowed = set(fields)
            # 存在的参数
            existing = set(self.fields.keys())
            # 列表减法
            for field_name in existing - allowed:
                self.fields.pop(field_name)

# 使用实例
>>> class UserSerializer(DynamicFieldsModelSerializer):
>>>     class Meta:
>>>         model = User
>>>         fields = ('id', 'username', 'email')
>>>
>>> print UserSerializer(user)
{'id': 2, 'username': 'jonwatts', 'email': 'jon@example.com'}
>>>
>>> print UserSerializer(user, fields=('id', 'email'))
{'id': 2, 'email': 'jon@example.com'}
```

### 4 自定义默认字段
REST2中提供了一个接口允许开发者重写ModelSerializer自动生成默认字段的过程。  
接口包括.get_field(), .get_pk_field()和其他方法  
REST3中已经移除了这个接口，就不要想太多。如果实在要修改，就需要引用源码。


## 7 第三方模块

1. Django REST marshmallow

django-rest-marshmallow,使用marshmallow，可以替代serializer，简易替换器

2. Serpy

serpy ,用于提升序列化速度的，将复杂数据类型序列化为简单的原生类型。

3. MongoengineModelSerializer

django-rest-framework-mongoengine,提供了一个MongoEngineModelSerializer，支持使用MongoDB作为存储层

4. GeoFeatureModelSerializer

django-rest-framework-gis, 支持对GeoJSON的读写操作

5. HStoreSerializer

django-rest-framework-hstore ，提供HStoreSerializer，支持django-hstore的DictionaryField模型字段和schema-mode特性。

6. Dynamic REST

dynamic-rest，继承了ModelSerializer和ModelViewSet接口，添加了API查询参数，用于 filtering, sorting, including / excluding和关系

7. DRF FlexFields

rf-dynamic-fields包提供了一个mixin，可以动态地将每个序列化器的字段限制为一个URL参数指定的子集。

8. Serializer Extensions

drf-flex-fields包扩展了ModelSerializer和ModelViewSet，提供了用于动态设置字段和将原始字段扩展到嵌套模型的常用功能，从URL参数和序列化器类中定义。

9. HTML JSON Forms

html-json-forms包

10. DRF-Base64

drf-base64提供一组字段和模型序列化器，用于处理base64编码文件的上传

11. QueryFields

djangorestframework-queryfields允许API客户端通过 inclusion/exclusion查询参数指定将在响应中发送哪些字段。

11. DRF Writable Nested

drf-writable-nested包提供可写的嵌套模型序列化器，它允许使用嵌套相关数据create/update模型。






————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78497655](https://blog.csdn.net/runnoob_1115/article/details/78497655)
