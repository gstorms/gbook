# WebDriver接口


### 一、WebDriver的初始化
```python
def __init__(self,
	command_executor='http://127.0.0.1:4444/wd/hub', # 执行JSONWireProtocol指令的命令执行器，比如ChromeRemoteConnection
 	desired_capabilities=None, # 对于浏览器的一些描述和控制信息
 	browser_profile=None, # 仅供FireFox浏览器使用
 	proxy=None, # 一个代理对象Proxy
 	keep_alive=False, # HTTP keep-alive参数
 	file_detector=None, # 文件查找器，默认是LocalFileDetector
 	options=None # 特定浏览器类型的Options对象
) 
```


    浏览器是否属于W3C模式，查看WebDriver对象的self.w3c属性即可；有些命令不支持W3C模式。  
    WebDriver对象实现了with上下文对象语法。  
 

### 二、WebDriver的属性

-     mobile --- 把WebDriver包装成移动对象，Web测试时无用。
-     name --- WebDriver使用的浏览器的名称
-     title --- 当前浏览器的标题信息
-     current_url --- 当前浏览器正在访问的URL路径
-     page_source --- 当前浏览器的页面源代码
-     current_window_handle --- 当前会话的浏览器窗体的句柄，每一个会话都是一个独立的浏览器窗口。
-     window_handles --- 浏览器窗体的句柄列表
-     switch_to --- 目标切换器
-     desired_capabilities --- 浏览器的设置和控制参数。
-     file_detector --- 文件查找器对象，继承自FileDetector。
-     orientation --- 指的是当前屏幕的方向(针对APP来说)
-     application_cache --- 浏览器的缓存对象ApplicationCache，用于缓存管理交互。
-     log_types --- 浏览器支持的日志类型名称

 

### 三、WebDriver的元素查找

#### 1、一次查找一个元素

-     find_element_by_id
-     find_element_by_name
-     find_element_by_xpath
-     find_element_by_link_text
-     find_element_by_partial_link_text
-     find_element_by_tag_name
-     find_element_by_class_name
-     find_element_by_css_selector

#### 2、一次查找多个元素

-     find_elements_by_id
-     find_elements_by_name
-     find_elements_by_xpath
-     find_elements_by_link_text
-     find_elements_by_partial_link_text
-     find_elements_by_tag_name
-     find_elements_by_class_name
-     find_elements_by_css_selector

#### 3、通用查找

-     find_element --- 通过指定策略类型和目标值来查找元素，返回WebElement元素。
-     find_elements --- 通过指定策略类型和目标值来查找元素，返回WebElement元素的列表。

 

### 四、WebDriver的其它方法

#### 1、浏览器操作

-     execute --- 执行指定的JSON命令
-     execute_script --- 执行JavaScript脚本
-     execute_async_script --- 异步执行JavaScript脚本
-     switch_to_active_element --- 切换到当前活动的元素
-     switch_to_window --- 切换到指定句柄的窗口(这个窗口指的是浏览器下面的TAB页)
-     switch_to_frame --- 切换到指定Frame
-     switch_to_default_content --- 切换到默认内容
-     switch_to_alert --- 切换到警告
-     implicitly_wait --- 设置WebDriver命令或元素查找的超时等待时间
-     set_script_timeout --- 设置WebDriver执行脚本的超时等待时间
-     set_page_load_timeout --- 设置Web页面加载超时等待时间

#### 2、浏览器控制

-     get --- 访问目标URL页面
-     close --- 关闭浏览器窗口上的当前TAB页面
-     quit --- 关闭浏览器
-     maximize_window --- 最大化浏览器
-     fullscreen_window --- 全屏浏览器
-     minimize_window --- 最小化浏览器
-     back --- 浏览器返回到上一个地址
-     forward --- 浏览器向前到下一个地址
-     refresh --- 浏览器刷新
-     get_screenshot_as_file --- Web页面截屏数据保存为PNG文件
-     save_screenshot --- Web页面截屏数据保存为PNG文件
-     get_screenshot_as_png --- Web页面截屏数据保存为PNG格式的二进制数据
-     get_screenshot_as_base64 --- Web页面截屏数据保存为二进制数据的base64编码字符串
-     get_window_size --- 获取浏览器窗口的大小
-     set_window_size --- 设置浏览器窗口的大小
-     get_window_position --- 获取浏览器窗口的位置
-     set_window_position --- 设置浏览器窗口的位置
-     get_window_rect --- 获取浏览器的窗口大小和位置
-     set_window_rect --- 设置浏览器的窗口大小和位置

#### 3、浏览器管理

-     get_cookies --- 获取当前会话的所有cookie
-     get_cookie --- 在当前会话中获取指定名称的cookie
-     delete_cookie --- 在当前会话中删除指定名称的cookie
-     delete_all_cookies --- 删除当前会话的所有cookie
-     add_cookie --- 添加cookie到当前会话
-     get_log --- 获取指定类型的日志

#### 4、辅助函数

-     start_client --- 钩子函数定义，在WebDriver的会话启动前调用。
-     stop_client --- 钩子函数定义，在WebDriver的quit()方法执行前调用。
-     start_session --- 启动浏览器会话，一般不要单独调用，因为一调用之后之前的浏览器会话会丢失。
-     create_web_element --- 创建一个标准的WebElement元素对象，用于包装和解包装Web元素。

> 参考[https://www.cnblogs.com/ringboow/p/11120191.html](https://www.cnblogs.com/ringboow/p/11120191.html)

