# DRF30-Format-suffixes（后缀格式）
## 一、Format suffixes
Web api的一种常见模式是在url上使用文件名扩展，以为给定的媒体类型提供端点。例如,http://example.com/api/users.json的JSON  
为您的API在URLconf的每个单独条目中添加格式-后缀模式是容易出错和不干的，因此REST框架提供了将这些模式添加到您的URLconf中的快捷方式。  
1. format_suffix_patterns
```python
# 将所有urlpatterns,都加上一个后缀
Signature: format_suffix_patterns(urlpatterns, suffix_required=False, allowed=None)
```

- urlpatterns： 设置的urlpatterns列表
- suffix_required：可选，表示url中的后缀应该是可选的还是必需的，默认为False。
- allowed:可选，可选的后缀元组或者列表
```python
from rest_framework.urlpatterns import format_suffix_patterns
from blog import views

urlpatterns = [
    url(r'^/$', views.apt_root),
    url(r'^comments/$', views.comment_list),
    url(r'^comments/(?P<pk>[0-9]+)/$', views.comment_detail)
]

urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
```

1. 使用i18n_patterns  
确保i18n_patterns是在最后使用的
```python
url patterns = [
    …
]

urlpatterns = i18n_patterns(
    format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
)
```

## 二、查询参数格式
格式后缀的另一种选择是在查询参数中包含所请求的格式。REST框架在默认情况下提供了这个选项，并且在可浏览的API中使用它在不同的可用表示之间切换
```python
http://example.com/organizations/?format=csv.
```
format可以通过URL_FORMAT_OVERRIDE修改，设置为None就会禁用此功能。

## 三、请求头和格式后缀
在一些Web社区中，似乎有一种观点认为.format suffixes不是一种RESTful模式，而HTTP Accept标头应该总是被使用。
