# JS

### 克隆数组

```javascript
// `arr` is an array
const clone = (arr) => arr.slice(0);

// Or
const clone = (arr) => [...arr];

// Or
const clone = (arr) => Array.from(arr);

// Or
const clone = (arr) => arr.map((x) => x);

// Or
const clone = (arr) => JSON.parse(JSON.stringify(arr));

// Or
const clone = (arr) => arr.concat([]);
```

### 比较两个数组，而不考虑顺序

```javascript
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort());

// Examples
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, 3, 2]); // true
isEqual([1, 2, 3], [1, "2", 3]); // false
```

### 比较两个数组

```javascript
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Or
const isEqual = (a, b) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

// Examples
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, "2", 3]); // false
```

### 将对象数组转换为单个对象

```javascript
const toObject = (arr, key) =>
  arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

// Example
toObject(
  [
    { id: "1", name: "Alpha", gender: "Male" },
    { id: "2", name: "Bravo", gender: "Male" },
    { id: "3", name: "Charlie", gender: "Female" },
  ],
  "id"
);
/* 
{
    '1': { id: '1', name: 'Alpha', gender: 'Male' },
    '2': { id: '2', name: 'Bravo', gender: 'Male' },
    '3': { id: '3', name: 'Charlie', gender: 'Female' },
}
*/
```

### 将字符串数组转换为数字

```javascript
const toNumbers = (arr) => arr.map(Number);

// Or
const toNumbers = (arr) => arr.map((x) => +x);

// Example
toNumbers(["2", "3", "4"]); // [2, 3, 4]
```

### 通过对象数组的属性进行计数

```javascript
const countBy = (arr, prop) =>
  arr.reduce(
    (prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev),
    {}
  );

// Example
countBy(
  [
    { branch: "audi", model: "q8", year: "2019" },
    { branch: "audi", model: "rs7", year: "2020" },
    { branch: "ford", model: "mustang", year: "2019" },
    { branch: "ford", model: "explorer", year: "2020" },
    { branch: "bmw", model: "x7", year: "2020" },
  ],
  "branch"
);

// { 'audi': 2, 'ford': 2, 'bmw': 1 }
```

### 计算数组中某个值的出现次数

```javascript
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// Or
const countOccurrences = (arr, val) =>
  arr.filter((item) => item === val).length;

// Examples
countOccurrences([2, 1, 3, 3, 2, 3], 2); // 2
countOccurrences(["a", "b", "a", "c", "a", "b"], "a"); // 3
```

### 统计数组元素每个元素的出现次数

```javascript
const countOccurrences = (arr) =>
  arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

// Examples
countOccurrences([2, 1, 3, 3, 2, 3]); // { '1': 1, '2': 2, '3': 3 }
countOccurrences(["a", "b", "a", "c", "a", "b"]); // { 'a': 3, 'b': 2, 'c': 1 }
```

### 查找数组中最大项的索引

```javascript
const indexOfMax = (arr) =>
  arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);

// Examples
indexOfMax([1, 3, 9, 7, 5]); // 2
indexOfMax([1, 3, 7, 7, 5]); // 2
```

### 集合

```javascript
var set1 = new Set(["name1","name2","name3"]);              //集合。不重复的元素集合，不存在键值对
set1.add("name");                   //添加集合
if(set1.has("name")){               //检测集合是否存在指定元素
    set1.delete("name");            //删除集合元素
    set1.clear();                   //清空集合元素
    console.log(set1.size);         //集合大小
}
set1 = new Set(["name1","name2","name3"]);
var set2 = new Set(["name1","name3","name5"]);
 
//并集
let union = new Set([...set1, ...set2]);
//交集
let intersect = new Set([...set1].filter( x => set2.has(x)));
//差集
let difference = new Set([...set1].filter(x => !set2.has(x)));
```
