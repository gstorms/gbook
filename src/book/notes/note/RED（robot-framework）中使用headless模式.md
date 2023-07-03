# RED（robot-framework）中使用headless模式

最近在用RED进行web自动化测试，RED是官方发布的针对python3 robot editor ide，下载地址：  
[http://nokia.github.io/RED/](http://nokia.github.io/RED/)  
因为运行测试时间比较长，随便都几十分钟，中间想做其他事情做不成（页面总是弹出），想寻找一种在后台运行测试的方法，然后就发现了headless模式。  
![](https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199504062-1f8308d1-cf13-4f98-b926-0b45446237fa.png#align=left&display=inline&height=592&margin=%5Bobject%20Object%5D&originHeight=592&originWidth=712&size=0&status=done&style=none&width=712)  
附上代码：

```
${options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
Call Method    ${options}    add_argument    --headless
Create WebDriver    Chrome    chrome_options=${options}
```

其他浏览器类似。  
用这个模式运行测试的时候，程序是在后台跑的，就是没有界面，不过失败截图什么的还正常进行。  
然后继续深入，尝试打开Chrome的模拟手机H5页面：

```
${devname}    Create Dictionary    deviceName=iphone 5/SE
${chromeoptions}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
Call Method    ${chromeoptions}    add_experimental_option    mobileEmulatuion    ${devname}
Create WebDriver    Chrome    chrome_options=${options}
Go To    http://www.baidu.com    #url
```

如果要用headless模式时，再加上一句：

```
Call Method    ${chromeoptions}    add_argument    --headless
```

好，问题解决了。  
不过在使用过程中出现了一个小问题，窗口最大化的问题（因为有的内容浏览器窗口不最大化，元素定位不到），很顺手就写了

```
Maximize Browser Window
```

但是发现不管用！！！（我这儿是这样）  
然后就上网搜索解决方法，在options中加入argument

```
--window-size=1920,1080 #可以设置窗口大小
```

试了试还是不行，一直出错，这个解决不了了，不过有个万能解决方法，用Python，反正解决不了的问题用Python几乎都能解决，将options用python写个关键字封装下：

```
from selenium import webdriver

class utils:
        #web模式
	def create_headlesschrome_options(self):
		chrome_options = webdriver.ChromeOptions()
		chrome_options.add_argument('--headless')
		chrome_options.add_argument('--disable-gpu')
		chrome_options.add_argument('--window-size=1920,1080')
		return chrome_options

        #H5模式
	def create_app_headlesschrome_options(self,deviceName='iPhone 5/SE'):
		devname={'deviceName':deviceName}
		chrome_options = webdriver.ChromeOptions()
		chrome_options.add_argument('--headless')
		chrome_options.add_argument('--disable-gpu')
		#chrome_options.add_argument('--deviceName=iPhone 5/SE')
		chrome_options.add_experimental_option('mobileEmulation',devname)
		# chrome_options.add_argument('--window-size=1920,1080')
		return chrome_options
```

然后，使用的时候：

```
    ${options}    utils.Create Headlesschrome Options    #web模式
    #${options}    utils.Create App Headlesschrome Options    #H5模式
    Create WebDriver    Chrome    chrome_options=${options}
    go to    %{nt_url}
```

好了，解决。
