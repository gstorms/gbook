# DRF09-Request对象
REST框架的Request类扩展了标准的HttpRequest,增加了对REST框架的灵活解析和请求认证


## 1. Request方法
允许以与处理表单数据相同的方式处理JSON数据或其他媒体类型的请求  
- .data(数据)  
request.data返回请求正文的解析内容,类似标准对象中的request.POST and request.FILES，除了以下几点：

1.  包括所有的解析内容，如文件输入和非文件输入
1. 不仅仅支持支持POST提交的内容，还支持PUT和PATCH请求
1.  灵活解析，不仅仅是支持表单数据，例如可以通过处理表单数据传入json数据

- .query_params（查询参数）  
request.query_params相比它的同义词request.GET，命名更加正确  
request.query_params[‘id’]获取参数  
/?id=12  
- .parsers  
APIView或者@api_view装饰器会基于parser_classes或者DEFAULT_PARSER_CLASSES setting自动设置一个Parser解析类型对象
```python
注意，如果客户端发送了一个错误的内容， 使用request.data，将会出现ParseError，
通过APIView和@api_view装饰器能够自动catch异常，然后返回一个400
如果客户端提交了一个不支持的content-type，将会产生UnsupportedMediaType异常
然后服务器返回一个 415 Unsupported Media Type响应
```

## 2. 内容协商
.accepted_renderer： 选择渲染器  
.accepted_media_type： 可接受的媒体类型字符串

## 3. 用户认证
REST框架提供了一个流畅的， 在处理请求之前进行用户认证，提供了：

- 给不同的接口设置不同认证策略
- 支持多个认证策略
- 提供请求和用户，令牌信息之间的信息

属性：  
- .user  
如果用户认证启用了的话，request.user返回一个django.contrib.auth.models.User  
如果没有通过验证，返回request.user的默认值，django.contrib.auth.models.AnonymousUser  
- .auth  
request.auth返回附加的用户认证上下文，request.auth依靠于认证策略，但它通常是一个token实例。  
如果请求是未经过认证的，或者没有附加的请求上下文，它的默认值为None  
- .authenticators  
APIView类和@api_view装饰器基于authentication_classes或者DEFAULT_AUTHENTICATORS默认设置，确保这个属性自动设置为Authentication实例


## 4. 浏览器增强
表单提交的方法PUT, PATCH and DELETE  
- .method  
返回一个请求方法名全部大写的字符串，PUT, PATCH and DELETE  
- .content_type  
返回请求的媒体类型，如json，如果没有提供则是一个空字符串  
如果确实需要获取请求的媒体类型，优先使用content_type，而不是request.META.get(‘HTTP_CONTENT_TYPE’)  
- .stream  
request.stream返回一个请求的正文，body


## 5. 标准的HttpRequest属性
REST框架的request 继承了django的HttpRequest，其他的标准属性和方法，request都是支持的，例如request.META和request.session字典  
实现方式，不是通过继承HttpRequest，而是通过组装的方式，并没有实现HttpRequest类  
————————————————  
版权声明：本文为CSDN博主「敲代码的伪文青」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。  
原文链接：[https://blog.csdn.net/runnoob_1115/article/details/78486800](https://blog.csdn.net/runnoob_1115/article/details/78486800)
