
## 什么是Xpah
**官方：**XPath 是一门在 XML 文档中查找信息的语言。XPath 用于在 XML 文档中通过元素和属性进行导航  
**【XPath 使用路径表达式来选取 XML 文档中的节点或者节点集】**  
 

## Xpath的缺点
Xpath 这种定位方式， webdriver会将整个页面的所有元素进行扫描以定位我们所需要的元素， 这是个非常费时的操作，  如果脚本中大量使用xpath做元素定位的话， 脚本的执行速度可能会稍慢  
 

## Xpath在UI自动化中的应用场景

- 在Web UI自动化中，其实用Xpath的定位元素的优先级并不高，但它是万能的；所以如果用其他方式无法定位时，可以用Xpath进行定位
- 在App UI自动化中，Xpath是唯一可以定位元素的方式

 

## Xpath常见的表达式
| 表达式 | 等价于CSS | 描述 |
| :--- | :--- | :--- |
| nodename | 标签 | 选取此节点的所有子节点，类似 css 中的标签选择器 |
| / | > | 从根节点选取，也就是当前节点的最顶层（默认情况下当前节点是 html 最顶层，若从某元素开始，当前节点为此元素） |
| // | 空格，后代选择器 | 从匹配选择的当前节点选择文档中的节点，而不考虑它们的位置 |
| . | 无 | 选取当前节点 |
| .. | 无 | 选取当前节点的父节点 |
| @ | 无 | 选取属性 |
| * | * | 通配符，代表任意类型的标签 |

 

## Xpath定位方式的简单栗子

### 绝对路径定位
**作用：**从顶层 html 开始往下找，像文件夹一样写的完整路径；它是以 / 开头的，如： /html/body/div/ul/li  
**缺点：**一旦页面结构发生改变，路径也随之失效，必须重新定位。 所以不推荐使用绝对路径的写法  
 

### 相对路径定位
**作用：**相对路径  以"//" 开头， 让xpath 从文档的任何元素节点开始解析（也就是说每个节点都作为起点找一下）  
**和绝对路径的区别：**绝对路径  以 "/"  开头，让xpath 从文档的根节点开始解析  
 

### 索引定位
跟Python的列表一样，通过[ 1 ]下标去找，注意！它是从1开始的  
如： //input[2] ，表示任意节点下的第二个 input 标签  
 

## Xpath等价于CSS选择器的栗子

- 首先我们访问：[https://www.51job.com/](https://www.51job.com/)
- 然后按F12，选中Elements，按Ctrl+F
- 将下面的表达式放进去，逐一验证匹配出来的元素是否一致
- **注意：**这里可能需要你懂CSS的各种选择器写法哦，不太了解的可以看这篇博文：[https://www.cnblogs.com/poloyy/p/12629662.html](https://www.cnblogs.com/poloyy/p/12629662.html)
| Xpath路径表达式 | CSS选择器表达式 |
| --- | --- |
| **只通过绝对路径、标签定位** |  |
| /html/body | html>body |
| /html/body/div/div[@class="bar"] | html>body>div>div.bar |
| /html//div | html div |
| /html//div/ul//li | html div>ul li |
| **通过相对路径、标签、属性值定位** |  |
| //div[@class="header"] | div.header |
| //div[@class="ush top_wrap"] | div.top_wrap |
| //div[@class="ush top_wrap"]/a[@class="more"] | div.top_wrap>a.more  |
| **通过标签、属性值、通配符定位** |  |
| //* | * |
| //*[@class="header"] | [class="header"]或 .header |
| //*[@id="languagelist"] | [id="languagelist"]或 #languagelist |
| //*[@id="languagelist"]/li[2] | #languagelist>li:nth-child(2) |
| //div[@class="header"]//ul[@id="languagelist"]/* | div.header ul#languagelist >* |
| **通过下标 或 属性定位** |   |
| //@href | [href] |
| //a[@href] | a[href] |
| //div[@class="header"]//ul/li[last()] | div.header ul >li:last-child |
| //div[@class="ush top_wrap"]//ul[@id]/li[1] | div.top_wrap ul[id]>li:first-child |
| **若干路径** |   |
| //body &#124; //ul | body , ul |
| //ul[@id="kwdTypeSelUl"] &#124; //ul[@id="area_channel_layer_list"] | ul#kwdTypeSelUl , ul#area_channel_layer_list |

 

## Xpath一些常用函数和特殊写法
继续拿：[https://www.51job.com/](https://www.51job.com/)做小案例哦

| 表达式 | 描述 |
| --- | --- |
| //title[@*] | 选取所有带有属性的 title 元素 |
| **条件表达式and、or、not** |  |
| //div[@id="zoomer" and  @style="display:none;"] | 找到id="zoomer"和style="display:none"的div元素 |
| //div[@class="cresume" or @class="footer"] | 找到class="cresume"或 "footer"的div元素 |
| //*[@id="showguide" and not(@class="footer")] | 找到id="showguide"且class != "footer"的任意元素 |
| **模糊匹配函数starts-with、contains** |  |
| //*[starts-with(@id,"s")] | 找到id开头为 s 的任意元素 |
| //*[ends-with(@id,"s")] | 找到id结尾为 s 的任意元素 |
| //*[contains(text(),'注册')]   | 找到标签间文本包含 注册 的任意元素 |
| **定位函数position** |   |
| //*[contains(@id,"languagelist")]/li[position()=3] | 找到第三个 li |
| //*[contains(@id,"languagelist")]/li[position()<=2] | 找到前两个 li |

 

## Xpath的其他定位方式
| 定位方式 | 描述 |
| :--- | :--- |
| ancestor | 选取当前节点的所有先辈（父、祖父等） |
| ancestor-or-self | 选取当前节点的所有先辈（父、祖父等）以及当前节点本身 |
| child | 选取当前节点的所有子元素【**/可替代，略显多余】 |
| descendant | 选取当前节点的所有后代元素（子、孙等）【**//可替代，略显多余】**** |
| descendant-or-self | 选取当前节点的所有后代元素（子、孙等）以及当前节点本身 |
| following | 选取当前节点的结束标签之后的所有节点 |
| following-sibling | 选取当前节点之后的所有同级节点 |
| parent | 选取当前节点的父节点【**../可替代，略显多余】** |
| preceding | 选取文档中当前节点的开始标签之前的所有节点 |
| preceding-sibling | 选取当前节点之前的所有同级节点 |

 

## Xpath其他方式的实际栗子
继续拿：[https://www.51job.com/](https://www.51job.com/)做小案例哦

| 其他定位方式 |  是否有等价写法？ |
| --- | --- |
| //*[contains(@class,"top_wrap")]/parent::div | //*[contains(@class,"top_wrap")]/.. |
| //*[contains(@class,"content")]/div/child::div | //*[contains(@class,"content")]/div/div |
| //*[contains(@id,"userid")]/preceding-sibling::input | //*[contains(@id,"userid")]/../input[position()<=4] |
| //*[contains(@id,"userid")]/following-sibling::div | //*[contains(@id,"userid")]/../div[position()=2] |
| //*[contains(@class,"content")]/descendant::div | //*[contains(@class,"content")]//div |


> 转载： [https://www.cnblogs.com/poloyy/p/12626196.html](https://www.cnblogs.com/poloyy/p/12626196.html)

