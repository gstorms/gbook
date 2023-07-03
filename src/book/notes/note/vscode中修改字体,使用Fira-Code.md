# vscode中修改字体,使用Fira-Code

vscode默认字体感觉不好看，想换个字体，介绍下换字体的方法：  
首先，打开设置页面，搜索`font`，如图：  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257918-b2c4300f-f63b-4353-9f45-98558c5978a5.png#align=left&display=inline&height=682&margin=%5Bobject%20Object%5D&originHeight=682&originWidth=1240&size=0&status=done&style=none&width=1240)

设置中的下面几个属性与字体有关：

```
// 控制字体系列。
  "editor.fontFamily": "Consolas, 'Courier New', monospace",

  // 启用字体连字
  "editor.fontLigatures": false,

  // 以像素为单位控制字号。
  "editor.fontSize": 14,

  // 控制字体粗细。
  "editor.fontWeight": "normal",
```

然后，在右侧的用户设置中添加对应设置(记得在添加之前先加个逗号分隔)：

```
"editor.fontFamily": "Fira Code",//后边的引号中写上要设置的字体类型，个人比较喜欢Fira Code
"editor.fontLigatures": true,//这个控制是否启用字体连字，true启用，false不启用，这里选择启用
  "editor.fontSize": 14,//设置字体大小，这个不多说都明白
"editor.fontWeight": "normal",//这个设置字体粗细，可选normal,bold,"100"~"900"等，选择合适的就行
```

然后保存，字体就应用成功了。  
PS:要想换字体，最起码电脑上得安装上该字体，不然设置了也没有用。  
附上Fira Code字体的安装：  
在[https://github.com/tonsky/FiraCode](https://github.com/tonsky/FiraCode)下载字体，在readmine.md中往下翻页，会看到download链接（如下图），  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257929-96e64451-04b5-40b3-88b2-c24bd75874e1.png#align=left&display=inline&height=515&margin=%5Bobject%20Object%5D&originHeight=515&originWidth=1088&size=0&status=done&style=none&width=1088)

点击就可以下载字体安装包，是个zip压缩包，加压后找到ttf文件夹，会看到几个ttf文件  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257773-3dfe4188-713c-4d63-aea3-d9ecf50c49d4.png#align=left&display=inline&height=206&margin=%5Bobject%20Object%5D&originHeight=206&originWidth=572&size=0&status=done&style=none&width=572)  
全选，右键安装就可以了，在windows的控制面板，字体中就可以看到该字体了，安装完成。

查看windows的字体：进入控制面板，修改查看方式为`大图标`，点击字体  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257835-69174c44-647d-4e1d-a4cb-5f5f05311df5.png#align=left&display=inline&height=547&margin=%5Bobject%20Object%5D&originHeight=547&originWidth=982&size=0&status=done&style=none&width=982)  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257942-77be2d6b-a8e7-45be-b5c3-dabd260ace65.png#align=left&display=inline&height=895&margin=%5Bobject%20Object%5D&originHeight=895&originWidth=1240&size=0&status=done&style=none&width=1240)  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611201257799-b4ed369f-1258-4452-8329-6be4baa07ab4.png#align=left&display=inline&height=895&margin=%5Bobject%20Object%5D&originHeight=895&originWidth=1240&size=0&status=done&style=none&width=1240)
