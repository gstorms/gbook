# Vue前端接收日期数据的格式化

`npm i moment --save`  
```  
import moment from 'moment'  
Vue.filter('dateFormat', function (dateStr,pattern = "YYYY-MM-DD HH:mm:ss") {  
  return moment(dateStr).format(pattern);  
})  
```  
你可以在一个组件的选项中定义本地的过滤器  
或者在创建 Vue 实例之前全局定义过滤器  
当全局过滤器和局部过滤器重名时，会采用局部过滤器。
