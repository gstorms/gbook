# RestfulAPI

1、studnet表

| **主键** | **姓名** | **性别** | **年龄** | **班级ID** |
| --- | --- | --- | --- | --- |
| 1 | 张三 | 男 | 10 | 31 |
| 2 | 李四 | 女 | 11 | 42 |

2、class表

| **主键** | **班级名称** |
| --- | --- |
| 31 | 三（一）班 |
| 42 | 四（二）班 |


基础的资源路径：

- 创建 Create：POST /students
- 查询 Query：GET /students?age=0,10&name=姓,&q=搜索
- 获取 Get： GET /students/{studentId}
- 删除 Destroy：DELETE /students/{studentId}
- 替换 Update：PUT /students/{studentsId}
- 补丁 Patch(部分更新)：PATCH /students/{studentsId}
- 替换单个属性 Update Field：PUT /students/{studentId}/{fieldName}，请求的 payload 就是对象的字段的值
- 班级的对应的方式与 Student 的一样，POST /classes 等
- 班级下的学生： POST /classes/{classId}/students 向班级中添加学生
- 查询班级下的学生：GET /classes/{classId}/students?age=0,10&name=,姓,&q=搜索
- 获取班级下学生的详细信息：GET /classes/{classId}/students/{studentId}
- ……

我们将接口分为以下几种类型：

1. 创建资源：Create，统一为 POST /resource-names
1. 查询资源：Query，统一为 GET /resource-names?q=查询关键字&age=0,10&name=,姓&limit=10&offset=0
1. 获取资源：Get，统一为 GET /resource-names/{recourceId}
1. 删除资源：Destroy，统一为 DELETE /resource-names/{recourceId}
1. 替换资源：Update（全量更新），统一为 PUT /resource-names/{recourceId}
1. 部分更新：Patch（打补丁），统一为 PATCH /resouce-names/{resourceId}/{?fieldName}
1. 操作请求：Action（比如通过审核、激活等对资源的操作）统一为 POST /resouce-names/{resourceId}/action-name
1. 大型查询：Maga Query，比如我们希望从磁带库中查询某一个时间段的数据，可能查询需要很长的时间，那么按以下方式完成：  
a. 创建查询： POST /queries，创建一个新的查询，payload 为查询所需要的所有配置参数信息，接口返回 queryId  
b. 通过 queryId 获取状态（或者通过 WebSocket 直接通知响起方）， GET /queries/{queryId}/status  
c. 通过 queryId 获取查询结果 GET /queries/{queryId}/rows?limit=10&offset=0&q=搜索，查询结果得到之后，同样可以对结果进行二次搜索

关于查询参数的规范：

- age=0,10 表示查询 age 为 [0, 10) 区间的数据， , 区分起始，同样的还可应用于 _时间_、_日期_ 等类型的数据
- age=,10;20,30;40表示查询 age 为 [0, 10)以及[20,30)以及大于 40 的数据， , 前面表示开始值，若不提供，表示所有小于 , 右侧的值的值，, 右侧表示结束值，若没有，则表示所有大于 , 左侧的值，; 表示多个值的区分。
- age=10 表示 age===10 的值
- name=姓, 表示以 姓 开头的值，类似 LIKE %姓
- name=,名 表示以 名 结尾的值
- name=姓名 表示 name 完全等于 姓名 的值
- limit 此次查询多少条数据
- offset 从 0 开始的偏移量
- q 万能的搜索关键字，后端根据需求选择性使用
