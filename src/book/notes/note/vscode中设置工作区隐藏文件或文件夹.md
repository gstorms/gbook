# vscode中设置工作区隐藏文件或文件夹

在写python的时候，运行python程序，会在文件夹中生成*.pyc文件，或生成**pycache**文件夹，影响操作：  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611200619511-68e37f73-a560-4345-b100-c89f5bc8c488.png#align=left&display=inline&height=733&margin=%5Bobject%20Object%5D&originHeight=733&originWidth=292&size=0&status=done&style=none&width=292)

在vscode中可以将其设置隐藏：  
ctrl+shift+P打开显示所有命令，在输入框中输入settings回车，  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611200619499-c474512f-a700-43da-8648-6fc7d039f1d0.png#align=left&display=inline&height=385&margin=%5Bobject%20Object%5D&originHeight=385&originWidth=824&size=0&status=done&style=none&width=824)

进入User Settings页面搜索files.exclude  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611200619658-481e2302-9761-4065-beab-d1b207f557df.png#align=left&display=inline&height=510&margin=%5Bobject%20Object%5D&originHeight=510&originWidth=1240&size=0&status=done&style=none&width=1240)

在右侧用户设置中添加  "**/__pycache__": true  ，与之前用逗号隔开，覆盖默认值并保存  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611200619492-10a2766d-129b-40c9-b0f5-90de1a6fb9c8.png#align=left&display=inline&height=846&margin=%5Bobject%20Object%5D&originHeight=846&originWidth=1219&size=0&status=done&style=none&width=1219)

可以看到左侧的**pycache**目录隐藏了。  
如果要隐藏文件的话添加 "**/_.pyc": true 即可，_.pyc 是后缀名是pyc的文件，如果想隐藏其他类型文件，将后缀名替换即可。
