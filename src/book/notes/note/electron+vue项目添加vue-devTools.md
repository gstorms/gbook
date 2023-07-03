# electron+vue项目添加vue-devTools

 
手动clone项目`vue-devtools`
`git clone [https://github.com/vuejs/vue-devtools.git`](https://github.com/vuejs/vue-devtools.git%60)
然后切换到`master`分支，默认的是`dev`分支：
`git checkout master`
进入`vue-devtools`根目录：

```
npm install
...
npm run build
```

然后将build生成的`shells`目录中的`chrome`目录拷贝出来，这个就是build生成的vue-devtools插件
浏览器安装容易，直接打开插件管理，切换开发模式，加载已解压插件，选择刚刚的chrome目录就行了。但是electron项目中安装会有点麻烦：
找到`background.js`文件，找到这段代码：

```
app.on("ready", async () => {
      if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
    try {
          await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
          console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});
```

这个是默认安装`vue-devtools`部分，不过因为网络问题，安装不上：

```
Failed to fetch extension, trying 4 more times
Failed to fetch extension, trying 3 more times
Failed to fetch extension, trying 2 more times
Failed to fetch extension, trying 1 more times
Failed to fetch extension, trying 0 more times
Vue Devtools failed to install: Error: net::ERR_CONNECTION_TIMED_OUT
```

所以要修改一下：

```
app.on("ready", async () => {
      if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
    try {
          // await installExtension(VUEJS_DEVTOOLS);
      // 新增的：安装vue-devtools
      const { session } = require("electron");
      const path = require("path");
      session.defaultSession.loadExtension(
            path.resolve(__dirname, "../../devTools/chrome")  //这个是刚刚build好的插件目录
      );  
//这个是刚开始找的方法不行，换上边的方法
// BrowserWindow.addDevToolsExtension(path.resolve(__dirname, "../../devTools/chrome")  );
    } catch (e) {
          console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});
```

>session的使用方法
>https://www.electronjs.org/docs/api/session#sesloadextensionpath
这个还没好，又提示了个问题：

```
(node:9068) ExtensionLoadWarning: Warnings loading extension at D:\work\docker\projects\devTools\chrome: Unrecognized manifest key 'browser_action'. Permission 'contextMenus' is unknown or URL pattern is malformed.
```

这个问题参考了下边的解决方法：
>https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/776
![image.png](https://upload-images.jianshu.io/upload_images/1724024-ed4f525a78e7ba58.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
OK，终于出来了，不容易啊。
![image.png](https://upload-images.jianshu.io/upload_images/1724024-8774200d8326656e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
