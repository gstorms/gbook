# ActionChains接口

1# ActionChains接口11
ActionChains实现了with上下文对象接口。

### 一、行为控制

-     perform --- 执行所有准备好的Action
-     reset_actions --- 清空所有准备好的Action
-     pause --- 设置Action之间的动作时间间隔

 

### 二、鼠标操作

-     click --- 鼠标左键点击(可以指定或不指定元素对象)
-     click_and_hold --- 鼠标左键点击但不释放(可以指定或不指定元素对象)
-     release --- 释放鼠标点击动作(可以指定或不指定在目标元素对象上释放)
-     context_click --- 鼠标右键点击(可以指定或不指定元素对象)
-     double_click --- 鼠标左键双击(可以指定或不指定元素对象)
-     drag_and_drop --- 鼠标左键在两个元素之间拖拽
-     drag_and_drop_by_offset --- 鼠标左键拖拽元素到目标偏移位置
-     move_by_offset --- 鼠标移动指定偏移
-     move_to_element --- 鼠标移动到指定元素
-     move_to_element_with_offset --- 鼠标移动到指定元素的指定偏移位置

 

### 三、键盘操作

-     key_down --- 键盘按下
-     key_up --- 键盘释放
-     send_keys --- 向当前元素发送模拟按键
-     send_keys_to_element --- 向指定元素发送模拟按键

> 参考[https://www.cnblogs.com/ringboow/p/11120254.html](https://www.cnblogs.com/ringboow/p/11120254.html)

