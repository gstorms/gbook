# 导出Python项目中包

### 导出Python项目用到的包

#### 1、安装pipreqs模块
```bash
pip install pipreqs
```

#### 2、切到项目的根目录
```bash
cd 项目目录
```

#### 3、执行命令，查询该项目所用的模块
```bash
pipreqs ./ --encoding=utf-8
```

#### 4、查询是否生成requirements.txt文件
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12492743/1630485796100-08e9fa73-2ccc-402d-a36e-df1c679d9a0b.png)


### 导出Python环境安装包
```bash
pip freeze > packages.txt
```  
这将会创建一个packages.txt文件，其中包含了当前环境中所有包以及各自的版本的简单列表（即pip list所列出的包列表）

安装导入Python环境包:  
```bash
pip install -r packages.txt
```
