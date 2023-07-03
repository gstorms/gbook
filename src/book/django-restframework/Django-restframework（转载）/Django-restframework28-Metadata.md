# DRF28-Metadata
OPTIONS允许客户端确定与资源相关的选项和/或需求，而无需暗示资源操作或启动资源检索。


## 一、Metadata

简介  
REST框架包含一个可配置的机制，用于确定API如何响应OPTIONS可选请求。允许你返回API模式或者其他资源信息  
目前还没有任何广泛采用的约定来返回HTTP OPTIONS 请求的响应样式，因此我们提供了一种特殊的样式，返回一些有用的信息。
```python
# 默认返回的response信息
HTTP 200 OK
Allow: GET, POST, HEAD, OPTIONS
Content-Type: application/json

{
    "name": "To Do List",
    "description": "List existing 'To Do' items, or create a new item.",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "note": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "title",
                "max_length": 100
            }
        }
    }
}
```

1. 设置元数据模式  
REST框架仅包含一种元数据模式：SimpleMetadata，如果想使用其他的需要自定义元数据类
```python
REST_FRAMEWORK = {
    'DEFAULT_METADATA_CLASS': 'rest_framework.metadata.SimpleMetadata'
}

class APIRoot(APIView):
    metadata_class = APIRootMetadata

    def get(self, request, format=None):
        return Response({
            ...
        })
```

1. 创建模式端点
```python
@list_route(methods=['GET'])
def schema(self, request):
    meta = self.metadata_class()
    data = meta.determine_metadata(request, self)
    return Response(data)
```
最好使用这种方法，因为OPTIONS响应不可以缓存


## 二、自定义元类
继承重写BaseMetadata  
实现determine_metadata(self, request, view)方法  
您可能想要做的有用的事情包括返回模式信息，使用JSON模式之类的格式，或者将调试信息返回给admin用户。
```python
# 限制信息仅返回给OPTIONS请求
class MinimalMetadata(BaseMetadata):
    """
    Don't include field and other information for `OPTIONS` requests.
    Just return the name and description.
    """
    def determine_metadata(self, request, view):
        return {
            'name': view.get_view_name(),
            'description': view.get_view_description()
        }

# 配置
REST_FRAMEWORK = {
    'DEFAULT_METADATA_CLASS': 'myproject.apps.core.MinimalMetadata'
}
```

## 三、三方包

1. DRF-schema-adapter  
drf-schema-adapter是一组工具，它使向前端框架和库提供模式信息变得更加容易。它提供了一个metadata mixin，以及两个元数据类和几个适合生成json-schema的适配器，以及各种库可读的模式信息。
