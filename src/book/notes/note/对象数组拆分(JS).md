# 对象数组拆分(JS)

现有数组：
```javascript
const r = [
    {
        date: "2020-12",
        regNum: "0"
    },
    {
        date: "2021-1",
        regNum: "1"
    },
    {
        date: "2021-2",
        regNum: "10"
    }
]
```
目标数组：
```javascript
const a = ["2020-12","2021-1","2021-2"]
const b = [0,1,10]
```
方法一：
```javascript
const a = r.map(o=>o.date)
const b = r.map(o=>Number(o.regNum))
```
方法二：
```javascript
const [a, b] = r.reduce((acc, { date, regNum }) => {
    acc[0].push(date);
    acc[1].push(parseInt(regNum, 10));
    return acc;
}, [[], []]);
```
方法三：
```javascript
function map(arr) {
    var a = [];
    var b = [];
    for (var i = 0; i < arr.length; ++i) {
        a.push(arr[i].date);
        b.push(+arr[i].regNum);
    }
    return [a, b];
}
console.dir(map(r));
```
