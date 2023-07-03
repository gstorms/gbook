# ionic打包android失败


## 问题1
现象
```bash
Unable to load Maven meta-data from https://maven.aliyun.com/com/android/support/support-v4/maven-metadata.xml.
```
```bash
Connect to maven.google.com:443 [maven.google.com/172.217.160.110] failed: Connection timed out:
```
解决方法
```
//  jcenter()//jcenter()改成下边的代理
    maven { url 'https://maven.aliyun.com/repository/jcenter' }
//  google()//google()会自动解析成https://maven.google.com/..,要改成新的链接
	maven { url 'https://dl.google.com/dl/android/maven2/'}
//  所有的"https://maven.google.com"改成"https://dl.google.com"
```
