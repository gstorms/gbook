# 限制文本框input只能输入数字

直接用正则将非数字替换

```
<input oninput="value=value.replace(/[^\d]/g,'')">
```
