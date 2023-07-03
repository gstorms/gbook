# 【Django】DRF自定义数据返回格式
## 基本说明
在采用djangorestframework之后，api返回的数据结构默认如下图所示：  
![](https://img2020.cnblogs.com/blog/2189696/202108/2189696-20210816090632616-1800916873.jpg)  
但是通常resultful 的规范，后端返回 JSON 数据的格式有着不同的需求，那么我们必须能够根据需求自己定义返回数据的格式。列如如下：
```json
{   
    "code": 200, //成功的状态码   
    "msg": "success", //提示信息   
    "data": { //返回数据       
        "list": [{}，{}，{}], //返回数组       
		"total": 238, //总条数（表格中用到，其它接口可以不返回）   
	} 
} 
```
djangorestframwork可以通过自定义返回模板来重构返回数据的格式，我们查看restframework的默认设置可以看到,默认的模板是rest_framework.renderers.JSONRenderer和rest_framework.renderers.BrowsableAPIRenderer，其中第一个是用于前端接收数据时的数据格式模板，第二个是drf在api查看界面的数据显示模式。
```json
'DEFAULT_RENDERER_CLASSES': [     
  'rest_framework.renderers.JSONRenderer',     
  'rest_framework.renderers.BrowsableAPIRenderer', 
] 
```

## 修改模板
如果我们想要修改返回给前端的数据格式，那么我们可以首先修改配置参数（settings.py）中的DEFAULT_RENDERER_CLASSES，将rest_framework.renderers.JSONRenderer修改为自己定义的模板类：
```python
'DEFAULT_RENDERER_CLASSES': (     
  'utils.custome_renderer.CustomRenderer',     
	'rest_framework.renderers.BrowsableAPIRenderer', 
), 
```
这里有一个注意点就是在开发时如果需要通过drf的api查看界面查看相应的api一定要将这个模板加上rest_framework.renderers.BrowsableAPIRenderer，否则的话无法看到相应的界面，生产时无需该界面，也可通过相关命令关闭显示。  
`utils.custome_renderer.CustomRenderer`其中`utils.custome_render`是自己的文件路径可根据自己的实际情况进行修改，`CustomRenderer`是自己定义的返回模板类的名称
```python
from rest_framework.renderers import JSONRenderer # 导入控制返回的JSON格式的类 
class CustomRenderer(JSONRenderer):     
    # 重构render方法     
    def render(self, data, accepted_media_type=None, renderer_context=None):         
        if renderer_context:             
            # 判断实例的类型，返回的数据可能是列表也可能是字典             
            if isinstance(data, dict):                 
                # 如果是字典的话应该是返回的数据，会包含msg,code,status等字段必须抽离出来                 
                msg = data.pop('msg', 'success')                 
                code = data.pop('code', 200)                 
                # 重新构建返回的JSON字典                 
                if 'status' in data.keys():                     
                    del data['status']                     
                    data = data['data']                 
                else:                     
                    data = data             
                    # 自定义返回数据格式             
                    ret = {                 
                        'msg': msg,                 
                        'code': code,                 
                        'data': {                     
                            'list': data,                     
                            'total': len(data),                 
                        },             
                    }             
                    # 返回JSON数据             
                    return super().render(ret, accepted_media_type, renderer_context)         
                else:             
                    return super().render(data, accepted_media_type, renderer_context) 
```
[

](https://github.com/esofar/cnblogs-theme-silence)

> [https://www.cnblogs.com/henryhong/p/djangodrf-zi-ding-yi-shu-ju-fan-hui-ge-shi.html](https://www.cnblogs.com/henryhong/p/djangodrf-zi-ding-yi-shu-ju-fan-hui-ge-shi.html)  
 

