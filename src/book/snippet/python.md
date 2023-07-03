# python

添加代码块

### Docker中安装poetry

```docker
FROM python:3.6.6-alpine3.7

ARG YOUR_ENV

ENV YOUR_ENV=${YOUR_ENV} 
  PYTHONFAULTHANDLER=1 
  PYTHONUNBUFFERED=1 
  PYTHONHASHSEED=random 
  PIP_NO_CACHE_DIR=off 
  PIP_DISABLE_PIP_VERSION_CHECK=on 
  PIP_DEFAULT_TIMEOUT=100 
  POETRY_VERSION=1.0.0

# System deps:
RUN pip install "poetry==$POETRY_VERSION"

# Copy only requirements to cache them in docker layer
WORKDIR /code
COPY poetry.lock pyproject.toml /code/

# Project initialization:
RUN poetry config virtualenvs.create false 
  && poetry install $(test "$YOUR_ENV" == production && echo "--no-dev") --no-interaction --no-ansi

# Creating folders, and files for a project:
COPY . /code

```

### requests批量上传文件

```python
def upload_pic(pics):
    """
    上传图片到后台
    """
    url= f"{backurl}/app/picmsg/picmsg.php"
    data = {"method":"uploadpic"}
    files = []
    for pic in pics:
        print(pic)
    for p in pics:
        if p['isdownload']!="1":
            continue
        pic = ("files[]",(p['picname'],open(f"{base_path}/{p['picpath']}",mode='rb'),p['picpath']))
        files.append(pic)
    res=requests.post(url,data=data,files=files)
    if res.status_code==200:
        try:
            resp = res.json()
            if "ok".upper()==resp['msg']:
                logger.info("上传图片到后台结束")
            else:
                logger.error(f"上传图片到后台出错：{res.text}")
        except JSONDecodeError as e:
            logger.error(f"服务器返回数据有问题{e}")
    else:
        logger.error("上传图片到后台失败")
    logger.info("上传图片到后台结束")
```

### 装饰器

```python
from functools import wraps

def timer(func):
    @wraps(func)
    def infunc(*args,**kwargs):
        start = time.time()
        print(func.__doc__)
        print(func.__name__)
        res = func(*args,**kwargs)
        end = time.time()
        print(f"花费了{end-start}秒")
        return res
    return infunc

@timer
def bubble_sort(arr):
    """
    冒泡排序
    """
    n = len(arr)
    # 遍历所有数组元素
    for i in range(n):
        # 最后i个元素已经就位
        for j in range(0, n-i-1):
            # 如果找到的元素大于下一个元素，则交换
            if arr[j] > arr[j+1] :
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr


#     冒泡排序

# bubble_sort
# 花费了0.1639995574951172秒
 装饰器
```

### 缓存

```python
# 定义一个装饰器函数
def cache(func):
    cached_results = {}
    def wrapper(*args):
        if args in cached_results:
            return cached_results[args]
        result = func(*args)
        cached_results[args] = result
        return result
    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2) 缓存
```

### ALL OR ANY

```python
x = [True, True, False]
if any(x):
    print("At least one True")
if all(x):
    print("Not one False")
if any(x) and not all(x):
    print("At least one True and one False")
```

### PPrint

```python
import requests
import pprint
url = 'https://randomuser.me/api/?results=1'
users = requests.get(url).json()
pprint.pprint(users) pprint
```

### zip

```python
keys = ['a', 'b', 'c']
vals = [1, 2, 3]
zipped = dict(zip(keys, vals))
print(zipped)
# {'a': 1, 'b': 2, 'c': 3}
```

### 数组添加元素

```python
arr = [1,2,3]
# append 可以在列表后方添加一个元素
arr.append(4)
print(arr)
# [1,2,3,4]

# extend 可以在将另外一个列表的所有元素添加到该列表后边
arr.extend([5,6])
print(arr)
# [1,2,3,4,5,6]

# insert 可以根据索引位置在列表指定的位置插入元素
arr.insert(2,"b")
print(arr)
# [1, 2, 'b', 3, 4, 5, 6]
```

### 正则分组匹配  `(?P...)` &#x20;

例：身份证 `1102231990xxxxxxxx` 

```python
import re
s = '1102231990xxxxxxxx'
res = re.search('(?P<province>\d{3})(?P<city>\d{3})(?P<born_year>\d{4})',s)
print(res.groupdict())
```

此分组取出结果为：

```json
{'province': '110', 'city': '223', 'born_year': '1990'}
```

直接将匹配结果直接转为字典模式，方便使用。

### Python实现链式调用

在python中实现链式调用只需在函数返回对象自己就行了。 &#x20;

原理：上一个方法返回对象，是下一个调用方法的执行对象，依次执行下去，就成了链式调用方法

链式调用，返回对象自己， 可以再方法后继续接方法

```python
class person():
    def name(self,name):
        self.name=name
        return  self
    def age(self,age):
        self.age=age
        return  self
    def show(self):
        return self.name,self.age
p=person()
print(p.name('tyh').age(15).show())
```

### Python-中文排序

```python
from pypinyin import lazy_pinyin

a = ['中国', '啊', '你好', '1您','台球','bu是']
# ['中国', '啊', '你好', '1您', '台球', 'bu是']
b = [''.join(lazy_pinyin(_)) for _ in a]
# ['zhongguo', 'a', 'nihao', '1nin', 'taiwan', 'bushi']
aa = dict(zip(b,a))
# {'zhongguo': '中国', 'a': '啊', 'nihao': '你好', '1nin': '1您', 'taiwan': '台球', 'bushi': 'bu是'}
ss = sorted(aa.items(), key=lambda aa:aa[0])
# [('1nin', '1您'), ('a', '啊'), ('bushi', 'bu是'), ('nihao', '你好'), ('taiwan', '台球'), ('zhongguo', '中国')]
sa = dict(ss)
res = list(sa.values())
# ['1您', '啊', 'bu是', '你好', '台球', '中国']
```

### 两个数组取交集、并集、差集

```python
# 数组取交集
print(list(set(a).intersection(set(b))))
# 数组取并集
print(list(set(a).union(set(b))))
# 数组取差集
print(list(set(a).difference(set(b))))
print(list(set(b).difference(set(a))))
```

### 识别图片中的条码（快递单号）

```python
import json
import os
import re
import sys

import cv2
import numpy as np
import pyzbar.pyzbar as pyzbar


def barcode(gray):
    texts = pyzbar.decode(gray)
    if texts == []:
        angle = barcode_angle(gray)
        if angle < -45:
            angle = -90 - angle
        texts = bar(gray, angle)
    if texts == []:
        gray = np.uint8(np.clip((1.1 * gray + 10), 0, 255))
        angle = barcode_angle(gray)
        if angle < -45:
            angle = -90 - angle
        texts = bar(gray, angle)

    if texts==[]:
        for i in range(9):
            angle = 10*i
            texts = bar(gray, angle)
            if not texts:
                texts = bar(gray, 0-angle)
            if texts:
                break
    return texts

def bar(image, angle):
    """
    旋转后进行识别条码
    """
    gray = image
    bar = rotate_bound(gray, 0 - angle)
    roi = cv2.cvtColor(bar, cv2.COLOR_BGR2RGB)
    texts = pyzbar.decode(roi)
    return texts


def barcode_angle(image):
    """
    计算条形码的倾斜度
    """
    gray = image
    ret, binary = cv2.threshold(gray, 220, 255, cv2.THRESH_BINARY_INV)
    kernel = np.ones((8, 8), np.uint8)
    dilation = cv2.dilate(binary, kernel, iterations=1)
    erosion = cv2.erode(dilation, kernel, iterations=1)
    erosion = cv2.erode(erosion, kernel, iterations=1)
    erosion = cv2.erode(erosion, kernel, iterations=1)
    
    contours, hierarchy = cv2.findContours(
        erosion, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    if len(contours) == 0:
        rect = [0, 0, 0]
    else:
        rect = cv2.minAreaRect(contours[0])
    # return -18
    return rect[2]

def rotate_bound(image, angle):
    """
    旋转图片
    :param image 传入的图片
    :param angle 旋转的角度
    """
    (h, w) = image.shape[:2]
    (cX, cY) = (w // 2, h // 2)

    M = cv2.getRotationMatrix2D((cX, cY), -angle, 1.0)
    cos = np.abs(M[0, 0])
    sin = np.abs(M[0, 1])
    nW = int((h * sin) + (w * cos))
    nH = int((h * cos) + (w * sin))

    M[0, 2] += (nW / 2) - cX
    M[1, 2] += (nH / 2) - cY

    return cv2.warpAffine(image, M, (nW, nH))


def get_jpg(img_base):
    """
    获取图片列表
    """
    jpgs = []
    for i in os.listdir(img_base):  #获取文件列表
        if i.split(".")[-1] == "jpg" or i.split(".")[-1] == "png":  #筛选jpg/png文件（截图）
            jpgs.append(i)
    return jpgs

def get_barcode(img):
    tt = ''
    image=cv2.imread(img)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    texts = barcode(gray)
    # print(texts)
    if texts==[]:
        print("未识别成功")
    else:
        for text in texts:
            tt = text.data.decode("utf-8")
            if "MMM" in tt:
                patt = re.compile("(?<='k5':')(\d+)")
                try:
                    tt = patt.findall(tt)[0]
                except Exception as e:
                    print(e)
                    tt = "识别失败"

        print("识别成功")
        print(tt)
    return tt


def img2text():
    path = os.getcwd()
    img_base = path+'\images'
    jpgs = get_jpg(img_base)
    data_m ={}
    for i in jpgs:
        print('*'*20,i,'*'*20)
        img_path = img_base+'\\'+i
        data = get_barcode(img_path)
        # data_m.append(data)
        data_m[i]=data
    return data_m

# img2text()

if __name__=="__main__":
    print("数据需要在当前目录下的images文件夹中")
    data_m=img2text()
    data = json.dumps(data_m, ensure_ascii=False)
    result_path = "result.json"
    with open(result_path, "w", encoding="utf8") as w:
        w.write(data)
```

### 删除目录中所有文件和文件夹

```python
import os, shutil
 
dir = 'path/to/dir'
for files in os.listdir(dir):
    path = os.path.join(dir, files)
    try:
        shutil.rmtree(path)
    except OSError:
        os.remove(path)
 
```

### fastapi定时任务

```python
from apscheduler.schedulers.background import BackgroundScheduler
from fastapi import FastAPI

app = FastAPI()

@app.on_event("startup")
def apschedule_task():
    """
    定时任务
    """
    sche = BackgroundScheduler()
    zip_job = sche.add_job(
        func=zip_job, trigger='interval', id='00001', name='zip pic job',
        jobstore='default', executor='default', replace_existing=True, seconds=1*60*60
    )
    upload_job = sche.add_job(
        func=upload_to_backend, trigger='interval', id='00002', name='upload pic to backend job',
        jobstore='default', executor='default', replace_existing=True, seconds=1.5*60*60
    )

    clear_temp_jon = sche.add_job(func=clear_tmp, trigger="interval", id="00003", name="clear temp dir",
                                  jobstore="default", executor="default", replace_existing=True, seconds=10*60)

    sche.start()
 fastapi定时任务
```

### 获取本机IP地址

```python
import socket
ip = socket.gethostbyname(socket.gethostname())
```
