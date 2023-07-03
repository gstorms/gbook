# Angular常用管道Pipe

| 描述 | 语法 | 实例 | 效果 |
| --- | --- | --- | --- |
| 字符串大写 | `{string\|uppercase}` | `{'Hello world!'\|uppercase}` | `HELLO WORLD!` |
| 字符串小写 | `{string\|lowercase}` | `{'Hello World!'\|lowercase}` | `hello world!` |
| 数字格式化 | `{num\|number:'a.b-c'}`  
'a.b-c'解释：  
a:整数部分保留的最小位数（位数不够前方补0）  
b:小数部分保留的最小位数（位数不够后方补0）  
c:小数部分保留的最大位数 | `{5.57\|number:'4.5-5'}` | `0005.57000` |
| 百分数格式化 | `{num\|percent:'a.b-c}`  
a,b,含义同“数字格式化”, | `{0.0537\|percent:'4.5-5'}` | `0005.37000%` |
| Title格式化 | `{string\|titlecase}` | `{'we are family'\|titlecase}` | `We Are Family` |
| 时间格式化 | `{timestamp\|date:'yyyy/MM/dd HH:mm:ss'}` |  |  |

