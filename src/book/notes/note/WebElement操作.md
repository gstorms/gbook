# WebElement操作


### 一、WebElement的属性
- tag_name --- 元素的tagName属性
- text --- 元素的文本内容
- location_once_scrolled_into_view --- 滚动直到指定的元素在视图中
- size --- 元素的大小
- location --- 元素在画布中的位置
- rect --- 元素的大小和位置
- screenshot_as_base64 --- 元素显示图像的二进制数据的base64编码字符串
- screenshot_as_png --- 元素显示图像的PNG格式二进制数据
- parent --- 元素的父元素对象
- id --- 元素在Selenium中的内部ID，并非在DOM中的id属性。

  


### 二、WebElement的属性和状态操作

- get_property --- 获得元素指定名称的属性。(property是DOM中的属性，像是JavaScript里的对象，只要是某类型的对象就自动具备这些属性成员。)
- get_attribute --- 获得元素指定名称的特性。(attribute是HTML标签上的特性，它的值只能够是字符串，由用户额外设定的特性名称和特性值。)
- is_selected --- 获得元素的选中状态，特指Select类型的元素，比如checkbox和radio。
- is_enabled --- 获得元素的使能状态
- is_displayed --- 元素是否对用户可见
- value_of_css_property --- 元素的CSS属性中指定名称的属性值


### 三、WebElement的行为

- click --- 点击元素
- submit --- 提交表格
- clear --- 清除文本输入
- send_keys --- 模拟键盘向元素输入内容
- screenshot --- 元素的显示图像保持为PNG格式文件


### 四、WebElement的子元素查找

#### 1.一次查找一个子元素

   - find_element_by_id
   - find_element_by_name
   - find_element_by_link_text
   - find_element_by_partial_link_text
   - find_element_by_tag_name
   - find_element_by_xpath
   - find_element_by_class_name
   - find_element_by_css_selector

#### 2.一次查找多个子元素

   - find_elements_by_id
   - find_elements_by_name
   - find_elements_by_link_text
   - find_elements_by_partial_link_text
   - find_elements_by_tag_name
   - find_elements_by_xpath
   - find_elements_by_class_name
   - find_elements_by_css_selector

#### 3.通用查找

   - find_element --- 通过指定策略类型和目标值来查找子元素，返回WebElement元素。
   - find_elements --- 通过指定策略类型和目标值来查找子元素，返回WebElement元素的列表。


> 参考[https://www.cnblogs.com/ringboow/p/11120243.html](https://www.cnblogs.com/ringboow/p/11120243.html)

