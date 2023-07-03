---
title: DRF02-rest接口新版写法
---
## REST框架简介
1. 身份验证策略OAuth1a和OAuth2的包
1. 支持ORM和非ORM数据源的序列化
1. 可以自定义，基于功能的常规视图

## 简单的接口写法

### 1. 设置settings
```python
     INSTALLED_APPS = (
         ...
         'rest_framework',
    )

    # 配置我们框架
    REST_FRAMEWORK = {
    # 设置权限，即谁可以访问，如认证过的，匿名的等
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ]，
    # 每页显示的个数
     'PAGE_SIZE': 10
}

```

### 2. REST框架的登录和注销视图,设置urls.py,
```python
from rest_framework import routers
# 建立一个路由器对象
router = routers.DefaultRouter()
# 将我们的路由注册到url里， /users/
router.register(r'users', UserViewSet)
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
# URL路径可以是任何你想要的，但你必须包括'rest_framework.urls'与'rest_framework'命名空间, 1.9以前
```

### 3. 在app中添加我们的序列器，serializer.py
```python
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        # 定义了我们序列化的模型和显示的字段， url为网络接口
        fields = ('url', 'username', 'email', 'is_staff')


class UserViewSet(viewsets.ModelViewSet):
    # 查询对象集
    queryset = User.objects.all()
    # 序列化的类名
    serializer_class = UserSerializer
    # 固定写法！不能改名字！
```


————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78479109](https://blog.csdn.net/runnoob_1115/article/details/78479109)
