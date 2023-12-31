
## 环境前提
Python3.6+  
 

## 安装插件

```bash
pip3 install pytest-html -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
```
 

## 快速入门

```bash
pytest --html=report.html
```
会在当前目录下创建一个report.html的测试报告  
 

### 合并CSS
上面命令生成的报告，css是独立的，分享报告的时候样式会丢失，为了更好的分享发邮件展示报告，可以把css样式合并到html里  

```bash
pytest --html=report.html --self-contained-html
```
 

### 注意事项

- 在将文件或链接添加到独立报告时，插件会发出warnings；
- 在html测试报告中可能无法按预期显示文件或链接

> 转载：[https://www.cnblogs.com/poloyy/p/12688606.html](https://www.cnblogs.com/poloyy/p/12688606.html)

