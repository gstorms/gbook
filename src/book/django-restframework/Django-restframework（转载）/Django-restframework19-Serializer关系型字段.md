# DRF19-Serializer关系型字段
> 坏程序员担心代码，好程序员担心数据结构和它们之间的关系。

1. 简介  
关系字段被用来表示模型之间的关系，能够用在ForeignKey, ManyToManyField and OneToOneField中，也可以颠倒这个关系，也可以自定义关系，如GenericForeignKey  
在使用ModelSerializer，最好利用print repr(serializer)检查自动生成的字段内容

2. 关系型序列化字段使用指南  
1 使用示例  
一张音乐专辑和专辑里的所有歌曲详情
```python
# 专辑类
class Album(models.Model):
    album_name = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)

# 歌曲详情
class Track(models.Model):
    # 专辑通过外键链接，专辑删除，包含的歌曲就会被删除
    album = models.ForeignKey(Album, related_name='tracks', on_delete=models.CASCADE)
    # 歌曲编号
    order = models.IntegerField()
    # 歌曲标题
    title = models.CharField(max_length=100)
    # 歌曲时长
    duration = models.IntegerField()

    class Meta:
        # 将'album', 'order'设为主键
        unique_together = ('album', 'order')
        # 设置序列化输出时的排序字段
        ordering = ['order']

    def __unicode__(self):
        return '%d: %s' % (self.order, self.title)
```

### 2 StringRelatedField
调用**unicode** 方法来呈现对象。
```python
class AlbumSerializer(serializers.ModelSerializer):
    # 外界只显示歌曲编号和歌曲名字，many为多个对象执行
    tracks = serializers.StringRelatedField(many=True)

    class Meta:
        model = Album
        fields = ('album_name', 'artist', 'tracks')
{
    'album_name': 'Things We Lost In The Fire',
    'artist': 'Low',
    'tracks': [
        '1: Sunflower',
        '2: Whitetail',
        '3: Dinosaur Act',
        ...
    ]
}
```
3 PrimaryKeyRelatedField  
使用主键来表示关联的目标，默认情况下该字段是可以读写的，可以利用read_only将其设置为只读  
- queryset:设置用于查找的查询集对象，如果没有设置，就需要设置read_only=True  
- many：如果对应多个关系对象时  
- allow_null：如果设置为True，则允许接收空字符串和None  
- pk_field:设置主键的值
```python
class AlbumSerializer(serializers.ModelSerializer):
    tracks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Album
        fields = ('album_name', 'artist', 'tracks')

{
    'album_name': 'Undun',
    'artist': 'The Roots',
    'tracks': [
        89,
        90,
        91,
        ...
    ]
}
```
4 HyperlinkedRelatedField  
默认通过主键查询，关系对象显示为一个url  
url接受单独的URL关键字参数，利用lookup_field和lookup_url_kwarg设置  
url中包含一个单独的主键或者标签参数  
如果需要使用更复杂的超链接字段，需要自己自定义  
- view_name：被用来表示对象的视图函数名。如果使用标准路由类，那就是-detail。required。  
- queryset：用于字段查找和验证的对象查找集。与read_only=True参数二选一  
- many：如果对应多个对象时，设置为True  
- allow_null：设置为True,则接受字段输入None或者空值  
- lookup_field：查询字段名 ，应该与 view_name中的参数一致，默认为’pk’  
- lookup_url_kwarg:定义在url中的查询参数的名字，默认使用与lookup_field一样的值  
- format：url后缀
```python
class AlbumSerializer(serializers.ModelSerializer):
    tracks = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='track-detail'
    )
# view_name='track-detail'查询函数，默认使用主键    

    class Meta:
        model = Album
        fields = ('album_name', 'artist', 'tracks')

# 接口的显示内容
{
    'album_name': 'Graceland',
    'artist': 'Paul Simon',
    'tracks': [
        'http://www.example.com/api/tracks/45/',
        'http://www.example.com/api/tracks/46/',
        'http://www.example.com/api/tracks/47/',
        ...
    ]
}
```

### 5 SlugRelatedField
slug_field使用对象中的某个字段表示对象
```python
class AlbumSerializer(serializers.ModelSerializer):
    tracks = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='title'
     )
    # 使用歌曲名字代表歌曲对象
    class Meta:
        model = Album
        fields = ('album_name', 'artist', 'tracks')

{
    'album_name': 'Dear John',
    'artist': 'Loney Dear',
    'tracks': [
        'Airport Surroundings',
        'Everything Turns to You',
        'I Was Only Going Out',
        ...
    ]
}
```

### 6 HyperlinkedIdentityField
自定义超链接字段名，默认为‘url’,始终为只读  
参数有:view_name,lookup_field,lookup_url_kwarg,format
```python
class AlbumSerializer(serializers.HyperlinkedModelSerializer):
    track_listing = serializers.HyperlinkedIdentityField(view_name='track-list')

    class Meta:
        model = Album
        fields = ('album_name', 'artist', 'track_listing')

{
    'album_name': 'The Eraser',
    'artist': 'Thom Yorke',
    'track_listing': 'http://www.example.com/api/track_list/12/',
}
```

## 3 嵌套关系

### 1. 创建一个具有读写操作的序列化类
如果一个字段对应多个关连对象，设置many=True
```python
class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ('order', 'title', 'duration')

class AlbumSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True, read_only=True)

    class Meta:
        model = Album
        fields = ('album_name', 'artist', 'tracks')

# 需要分别创建专辑和歌曲对象     
>>> album = Album.objects.create(album_name="The Grey Album", artist='Danger Mouse')
>>> Track.objects.create(album=album, order=1, title='Public Service Announcement', duration=245)
<Track: Track object>
>>> Track.objects.create(album=album, order=2, title='What More Can I Say', duration=264)
<Track: Track object>
>>> Track.objects.create(album=album, order=3, title='Encore', duration=159)
<Track: Track object>
>>> serializer = AlbumSerializer(instance=album)
>>> serializer.data
{
    'album_name': 'The Grey Album',
    'artist': 'Danger Mouse',
    'tracks': [
        {'order': 1, 'title': 'Public Service Announcement', 'duration': 245},
        {'order': 2, 'title': 'What More Can I Say', 'duration': 264},
        {'order': 3, 'title': 'Encore', 'duration': 159},
        ...
    ],
}
```
可写的嵌套序列化器  
如果需要支持可写操作，那么就必须在序列化类中重写create() and/or update()
```python
class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ('order', 'title', 'duration')

class AlbumSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True)

    class Meta:
        model = Album
        fields = ('album_name', 'artist', 'tracks')

    def create(self, validated_data):
        tracks_data = validated_data.pop('tracks')
        # 一对多，首先创建一，再创建多
        album = Album.objects.create(**validated_data)
        for track_data in tracks_data:
            Track.objects.create(album=album, **track_data)
        return album


>>> data = {
    'album_name': 'The Grey Album',
    'artist': 'Danger Mouse',
    'tracks': [
        {'order': 1, 'title': 'Public Service Announcement', 'duration': 245},
        {'order': 2, 'title': 'What More Can I Say', 'duration': 264},
        {'order': 3, 'title': 'Encore', 'duration': 159},
    ],
}
>>> serializer = AlbumSerializer(data=data)
>>> serializer.is_valid()
True
>>> serializer.save()
<Album: Album object>
```
2 自定义关系型字段  
当不存在字段能够瞒住需要的关系的模型时，就需要自定义一个字段。  
- 首先需要继承重写RelatedField  
- 实现.to_representation(self, value)方法，该参数接受一个值value,该值为一个字段，通常是模型实例，返回需要进行序列化的目标  
- 如果想实现读写操作，还必须实现.to_internal_value(self, data)方法  
- 如果基于context实现动态的查询集（queryset）,需要重写.get_queryset(self)，而不是使用.queryset属性
```python
import time


# 重写的字段
class TrackListingField(serializers.RelatedField):
    def to_representation(self, value):
        duration = time.strftime('%M:%S', time.gmtime(value.duration))
        # 返回歌曲的编号+名字+时长
        return 'Track %d: %s (%s)' % (value.order, value.name, duration)

class AlbumSerializer(serializers.ModelSerializer):
    tracks = TrackListingField(many=True)

    class Meta:
        model = Album
        fields = ('album_name', 'artist', 'tracks')

# 接口显示结果        
{
    'album_name': 'Sometimes I Wish We Were an Eagle',
    'artist': 'Bill Callahan',
    'tracks': [
        'Track 1: Jim Cain (04:39)',
        'Track 2: Eid Ma Clack Shaw (04:19)',
        'Track 3: The Wind and the Dove (04:34)',
        ...
    ]
}
```
3 自定义超链接字段  
有时你需要自定义一个超链接字段来返回多个查询参数，可以通过继承重写HyperlinkedRelatedField字段，有两个方法可能需要重写：  
- get_url(self, obj, view_name, request, format)  
用来匹配对象实例到它的url上  
如果view_name和lookup_field属性没有指向正确的匹配网址，可能会抛出NoReverseMatch  
- get_object(self, queryset, view_name, view_args, view_kwargs)  
如果你需要支持可写的超链接字段，就要重写此方法以返回网址所映射的对象。对于只读的超链接字段不需要重写此方法。  
此方法返回的对象应该与网址参数（view_args）匹配的一致  
可能会抛出ObjectDoesNotExist异常。  
比如说我们有一个网址含有两个关键参数，
```python
/api/<organization_slug>/customers/<customer_pk>/
```
默认只接受一个查询参数，所以我们需要重写HyperlinkedRelatedField字段
```python
from rest_framework import serializers
from rest_framework.reverse import reverse

class CustomerHyperlink(serializers.HyperlinkedRelatedField):
    # 定义一个类属性，而不需要接收它们，然后只需接收网址参数
    view_name = 'customer-detail'
    # 查询集为固定查询集
    queryset = Customer.objects.all()

    # 生成一个对象实例的url表示
    def get_url(self, obj, view_name, request, format):
        url_kwargs = {
            'organization_slug': obj.organization.slug,
            'customer_pk': obj.pk
        }
        return reverse(view_name, kwargs=url_kwargs, request=request, format=format)

    # 通过url参数获取对象实例，参数为固定的，不能更改
    def get_object(self, view_name, view_args, view_kwargs):
        lookup_kwargs = {
           'organization__slug': view_kwargs['organization_slug'],
           'pk': view_kwargs['customer_pk']
        }
        return self.get_queryset().get(**lookup_kwargs)
```
如果需要在通用视图中使用这种方法，也需要重写get_object方法  
通常情况下，推荐使用扁平的API视图，但是url嵌套也是可以的。


## 4. 更多注意事项

1. qureyset参数

对于可写的关系型字段，只需要queryset参数，用于将用户输入映射到一个模型实例  
在2.X的版本中，如果使用了ModelSerializer，就会自动确定qureyset  
现在修改为，如果是可写的字段，必须明确设置queryset

2. 自定义HTML显示

当模型实例用于填充choices时，将会使用对象的str方法。  
为了自定义一个表现形式需要继承重写RelatedField的display_value()方法，该方法  
接收一个模型对象，然后返回一个合适的字符串
```python
class TrackPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):
    def display_value(self, instance):
        return 'Track: %s' % (instance.title)
```

3. 切断选择字段

当一个API接口提供的最大可选对象为1000,超过1000后，后面就会显示”More than 1000 items…”  
这是模板阻止了对超出可接受范围内的渲染  
有两个参数可以控制这个行为：  
html_cutoff：用于设置可选框的最大接收个数，设置为None就会禁用此设置，默认为1000  
html_cutoff_text：用于设置超过html_cutoff指定数量后的显示内容，默认为”More than {count} items…”  
可以在设置文件中设置HTML_SELECT_CUTOFF and HTML_SELECT_CUTOFF_TEXT成全局变量
```python
assigned_to = serializers.SlugRelatedField(
   queryset=User.objects.all(),
   slug_field='username',
   style={'base_template': 'input.html'}
)
```

4. 反向关系  
使用ModelSerializer和HyperlinkedModelSerializer时，反向关系并不会默认创建。为了包含反向关系，需要明确添加该字段
```python
class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        # 必须保证track中设置外键时将related_name设置为tracks
        fields = ('tracks', ...)
        # 如果没有设置related_name
        fields = ('track_set', ...)

# 模型中
class Track(models.Model):
    album = models.ForeignKey(Album, related_name='tracks', on_delete=models.CASCADE)
    ...
```

5. 通用关系  
如果想序列化一个通用的外键，需要自定义一个字段，用来明确表示该如何对其进行序列化和反序列化
```python
# https://docs.djangoproject.com/en/1.11/ref/contrib/contenttypes/
# http://blog.csdn.net/laughing2333/article/details/53014267
from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class TaggedItem(models.Model):
    """
    Tags arbitrary model instances using a generic relation.
    """
    tag_name = models.SlugField()
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    tagged_object = GenericForeignKey('content_type', 'object_id')

    def __unicode__(self):
        return self.tag_name

class Bookmark(models.Model):
    """
    A bookmark consists of a URL, and 0 or more descriptive tags.
    """
    url = models.URLField()
    # 如果删除了一个bookmark对象，相关的标签也会被删除
    tags = GenericRelation(TaggedItem)


class Note(models.Model):
    """
    A note consists of some text, and 0 or more descriptive tags.
    """
    text = models.CharField(max_length=1000)
    # note删除也需要相关标签
    tags = GenericRelation(TaggedItem)
```
我们也可以自定义一个字段用来为不同的实返回不同的值
```python
class TaggedObjectRelatedField(serializers.RelatedField):
   def to_representation(self, value):
        if isinstance(value, Bookmark):
            return 'Bookmark: ' + value.url
        elif isinstance(value, Note):
            return 'Note: ' + value.text
        raise Exception('Unexpected type of tagged object')
```
如果你需要关联的对象能够嵌套表示，可以在序列化器内部重写.to_representation()方法
```python
    def to_representation(self, value):
        """
        用合适的序列化器序列化相应对象。
        """
        if isinstance(value, Bookmark):
            serializer = BookmarkSerializer(value)
        elif isinstance(value, Note):
            serializer = NoteSerializer(value)
        else:
            raise Exception('Unexpected type of tagged object')

        return serializer.data
```
使用GenericRelation表示的反向字段，因为其类型是已知的，可以被普通序列化器序列化。

6. 模型中的ManyToManyField

默认情况下，含有through参数的ManyToManyField被设置为只读，所以确保将read_only 设置为True

   - 想在 many-to-many 关系保存额外信息，用 through 参数，例子如下。
   - 中介 model 必须且只包含一个 target model 的外键。
   - 中介 model 必须且只包含一个 source model 的外键。
   - 只有一个例外，当多对多关系出现在自我包含时。
   - 当自我包含多对多关系时，必须指定 symmetrical=False
   - 不像普通的many-to-many字段，中介模型不可以通过add, create 或 签名方法来创建关系
   - move() 方法也无法使用，只能使用 clear() 方法
   - 唯一的解决之道在于创建实例，然后完善细节
   - 中介 model 和普通的多对多 model 的query 方法是一样的
   - 可以用中介 model 的属性来 query 数据
```python
from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=128)

    # On Python 3: def __str__(self):
    def __unicode__(self):
        return self.name

class Group(models.Model):
    name = models.CharField(max_length=128)
    members = models.ManyToManyField(Person, through='Membership')

    # On Python 3: def __str__(self):
    def __unicode__(self):
        return self.name
# 中介模型
class Membership(models.Model):
    person = models.ForeignKey(Person)
    group = models.ForeignKey(Group)
    date_joined = models.DateField()
    invite_reason = models.CharField(max_length=64)

# 创建一个中介实例
>>> ringo = Person.objects.create(name="Ringo Starr")
>>> paul = Person.objects.create(name="Paul McCartney")
>>> beatles = Group.objects.create(name="The Beatles")
>>> m1 = Membership(person=ringo, group=beatles,
...     date_joined=date(1962, 8, 16),
...     invite_reason="Needed a new drummer.")
>>> m1.save()
>>> beatles.members.all()
[<Person: Ringo Starr>]
>>> ringo.group_set.all()
[<Group: The Beatles>]
>>> m2 = Membership.objects.create(person=paul, group=beatles,
...     date_joined=date(1960, 8, 1),
...     invite_reason="Wanted to form a band.")
>>> beatles.members.all()
[<Person: Ringo Starr>, <Person: Paul McCartney>]

# THIS WILL NOT WORK
>>> beatles.members.add(john)
# NEITHER WILL THIS
>>> beatles.members.create(name="George Harrison")
# AND NEITHER WILL THIS
>>> beatles.members = [john, paul, ringo, george]
```

## 5 三方包

1. DRF Nested Routers

drf-nested-routers包提供了一个router和关系字段用于处理嵌套资源

2. Rest Framework Generic Relations

rest-framework-generic-relations为generic foreign keys提供了一个读写序列化器




————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78497680](https://blog.csdn.net/runnoob_1115/article/details/78497680)
