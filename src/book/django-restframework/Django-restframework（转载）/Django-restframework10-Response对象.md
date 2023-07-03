# DRF10-Response对象
## 1. 简介
和基本的HttpResponse objects不同，TemplateResponse objects会保存视图函数计算出来的响应上下文，最终输出的响应对象在需要时才会被计算  
REST框架提供一个Response对象以支持HTTP内容协商，Response依据客户端各种request.content_type提供相应的媒体类型  
没有要求必须使用Response，也可以使用HttpResponse或者StreamingHttpResponse。利用Response对象提供了一个简洁的接口返回响应。  
除非你想深度个性化REST框架，否则你应该使用APIView或这@api_view装饰器

## 2. 创建一个Response对象

### Response()

> Response(data, status=None, template_name=None, headers=None, content_type=None)

1. 不像普通的HttpResponse objects，不需要用渲染过的文本来实例化Response对象，你可以用任何未经渲染的数据，如存在的任何Python原始对象
1. 渲染器本身不能处理复杂的数据形式，如数据库模型，所以在创建Response对象之前，需要序列化数据成原始的数据类型,利用REST框架的Serializer或者自定义的序列化器
1. 参数：
      1. data: 序列化处理后的数据
      1. status: res状态码，默认200
      1. template_name： 模板名字，如果使用HTMLRenderer渲染成html数据
      1. headers: 返回给用户的响应头
      1. content_type: 返回数据的类型，一般是根据请求的内容协商结果自动设置

### 属性

1. data:未经序列化的请求对象
1. status_code: HTTP response的状态码
1. content： 必须先渲染render()之后才能调用.content
1. template_name: 如果应用了，那么只接受HTMLRenderer或者自定义的template renderer 渲染之后的数据
1. accepted_renderer: 设置用于渲染请求数据的渲染器
1. accepted_media_type：指定的媒体类型
1. renderer_context： 附加的字典信息，APIView和 @api_view会自动在马上就要返回给客户端的时候才会被渲染

### 标准的HttpResponse对象

1. render()：渲染序列化之后的数据
1. .render(data, accepted_media_type, renderer_context) 渲染方式accepted_renderer的实例



————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78486828](https://blog.csdn.net/runnoob_1115/article/details/78486828)
