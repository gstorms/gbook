import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c as a,a as e,b as n,d as r,f as o}from"./app-3f278ba4.js";const l={},c=e("h1",{id:"red-robot-framework-中使用headless模式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#red-robot-framework-中使用headless模式","aria-hidden":"true"},"#"),n(" RED（robot-framework）中使用headless模式")],-1),m=e("br",null,null,-1),u={href:"http://nokia.github.io/RED/",target:"_blank",rel:"noopener noreferrer"},v=e("br",null,null,-1),p=e("br",null,null,-1),b=e("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/12492743/1611199504062-1f8308d1-cf13-4f98-b926-0b45446237fa.png#align=left&display=inline&height=592&margin=[object Object]&originHeight=592&originWidth=712&size=0&status=done&style=none&width=712",alt:"",loading:"lazy"},null,-1),h=e("br",null,null,-1),_=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\${options}=    Evaluate    sys.modules[&#39;selenium.webdriver&#39;].ChromeOptions()    sys, selenium.webdriver
Call Method    \${options}    add_argument    --headless
Create WebDriver    Chrome    chrome_options=\${options}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他浏览器类似。<br> 用这个模式运行测试的时候，程序是在后台跑的，就是没有界面，不过失败截图什么的还正常进行。<br> 然后继续深入，尝试打开Chrome的模拟手机H5页面：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\${devname}    Create Dictionary    deviceName=iphone 5/SE
\${chromeoptions}=    Evaluate    sys.modules[&#39;selenium.webdriver&#39;].ChromeOptions()    sys, selenium.webdriver
Call Method    \${chromeoptions}    add_experimental_option    mobileEmulatuion    \${devname}
Create WebDriver    Chrome    chrome_options=\${options}
Go To    http://www.baidu.com    #url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要用headless模式时，再加上一句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Call Method    \${chromeoptions}    add_argument    --headless
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>好，问题解决了。<br> 不过在使用过程中出现了一个小问题，窗口最大化的问题（因为有的内容浏览器窗口不最大化，元素定位不到），很顺手就写了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Maximize Browser Window
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是发现不管用！！！（我这儿是这样）<br> 然后就上网搜索解决方法，在options中加入argument</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--window-size=1920,1080 #可以设置窗口大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>试了试还是不行，一直出错，这个解决不了了，不过有个万能解决方法，用Python，反正解决不了的问题用Python几乎都能解决，将options用python写个关键字封装下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from selenium import webdriver

class utils:
        #web模式
	def create_headlesschrome_options(self):
		chrome_options = webdriver.ChromeOptions()
		chrome_options.add_argument(&#39;--headless&#39;)
		chrome_options.add_argument(&#39;--disable-gpu&#39;)
		chrome_options.add_argument(&#39;--window-size=1920,1080&#39;)
		return chrome_options

        #H5模式
	def create_app_headlesschrome_options(self,deviceName=&#39;iPhone 5/SE&#39;):
		devname={&#39;deviceName&#39;:deviceName}
		chrome_options = webdriver.ChromeOptions()
		chrome_options.add_argument(&#39;--headless&#39;)
		chrome_options.add_argument(&#39;--disable-gpu&#39;)
		#chrome_options.add_argument(&#39;--deviceName=iPhone 5/SE&#39;)
		chrome_options.add_experimental_option(&#39;mobileEmulation&#39;,devname)
		# chrome_options.add_argument(&#39;--window-size=1920,1080&#39;)
		return chrome_options
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，使用的时候：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    \${options}    utils.Create Headlesschrome Options    #web模式
    #\${options}    utils.Create App Headlesschrome Options    #H5模式
    Create WebDriver    Chrome    chrome_options=\${options}
    go to    %{nt_url}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，解决。</p>`,14);function g(x,w){const i=d("ExternalLinkIcon");return t(),a("div",null,[c,e("p",null,[n("最近在用RED进行web自动化测试，RED是官方发布的针对python3 robot editor ide，下载地址："),m,e("a",u,[n("http://nokia.github.io/RED/"),r(i)]),v,n(" 因为运行测试时间比较长，随便都几十分钟，中间想做其他事情做不成（页面总是弹出），想寻找一种在后台运行测试的方法，然后就发现了headless模式。"),p,b,h,n(" 附上代码：")]),_])}const E=s(l,[["render",g],["__file","RED（robot-framework）中使用headless模式.html.vue"]]);export{E as default};
