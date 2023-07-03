# DRF08-模式和客户端库
## 1. 内容
核心API  
添加一个模式  
利用命令行客户端  
客户端认证  
回顾我们之前的工作

## 2. 核心API
提供架构支持，使用Core API  
Core API简介

1. 用于表示Web API的与格式无关的文档对象模型。
1. 可以用于表示模式或超媒体响应，并允许您在应用程序界面层而不是网络接口与API进行交互
1. Core API目前具有可用于Core JSON，Open API / Swagger， HAL和JSON Hyper-Schema的实现
1. Core API规范有三层：

- 文件层： 客户端与之交互的抽象对象接口，  
- 编码层： 文档和字节串之间的映射  
- 传输层： 如何将文档交互映射到网络请求  
任何一个Core API接口的顶级元素始终为Document,文档总有一个关联的url，还应该有一个标题。链接是页面提供的可用交互点，核心API具有就地转换的特点，标记为就地的链接就会对文档进行部分转换，“put”，“patch”和“delete”操作默认为就地。链接之后的错误为一组键值对，用于表示与失败转换相关联的任何错误信息。


## 3. 添加模式schema
```python
# 安装：pip install coreapi
from rest_framework.schemas import get_schema_view
# 一个自动生成的模式视图来为API添加模式
schema_view = get_schema_view(title='Pastebin API')

urlpatterns = [
    url(r'^schema/$', schema_view),
    ...
]

命令行操作，指定所需类型：
$ http http://127.0.0.1:8000/schema/ Accept:application/coreapi+json
```

## 4. 使用命令行模拟客户端
```python
pip install coreapi-cli
coreapi # 查看coreapi介绍
# 使用命令行客户机加载API模式
coreapi get http://127.0.0.1:8000/schema/
# 列出所有片段
coreapi action snippets list
# 某些api端点需要命名参数的，例如，要获取特定代码段的高亮度HTML，我们需要提供一个id。
coreapi action snippets highlight --param id=1
# 认证我们的客户
coreapi credentials add 127.0.0.1 <username>:<password> --auth basic
# 再次交互，就可以看到一整套可用的交互
coreapi reload
# 再次与这些端点交互，传入的参数 前必须有 --param
coreapi action snippets create --param title="Example" --param code="print('hello, world')"
# 删除片段
coreapi action snippets delete --param id=7
```

————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78486783](https://blog.csdn.net/runnoob_1115/article/details/78486783)
