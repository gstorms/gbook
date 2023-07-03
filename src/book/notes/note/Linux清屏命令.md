# Linux清屏命令


## clear

这个命令将会刷新屏幕，本质上只是让终端显示页向后翻了一页，如果向上滚动屏幕还可以看到之前的操作信息。一般都会用这个命令。

另外 `ctrl+l(小写L)`也是清屏，和`clear`功能一样


## reset

这个命令将完全刷新终端屏幕，之前的终端输入操作信息将都会被清空，这样虽然比较清爽，但整个命令过程速度有点慢，使用较少。


## 另外介绍一个用别名来使用清屏命令的方法，如下：

```
[root@localhost ~]$ alias cls='clear'
[root@localhost ~]$ cls
```

执行以上命令后，以后你就可以直接输入 cls 命令来实现和 clear 一样的清屏命令了。

> 原文：[http://www.phpernote.com/linux/507.html](http://www.phpernote.com/linux/507.html)

