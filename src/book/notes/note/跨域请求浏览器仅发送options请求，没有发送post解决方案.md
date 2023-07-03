# 跨域请求浏览器仅发送options请求，没有发送post解决方案

from flask_cors import CORS, cross_origin  
CORS(app, supports_credentials=True, resources=r'/*')  
@app.route('/',methods=["POST"])

@cross_origin()#通过装饰路线具体CORS

[@auth.login_required ](/auth.login_required )  
def index():  
if request.method == "POST":  
return jsonify({'22': '22'})

> 原文链接：[https://blog.csdn.net/u010650631/article/details/83044149](https://blog.csdn.net/u010650631/article/details/83044149)

