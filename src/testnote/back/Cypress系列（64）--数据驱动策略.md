
## 前言
- 数据驱动是测试框架中最常用的设计模式了
- 使用数据驱动，可以在不增加代码量的前提下根据数据生成不同的测试策略

 

## 策略一：数据通过 JS 的方式创建

```bash
describe('测试数据放在前置条件里', function () {
    let testDatas = testDatas = [
        {'name': 'yy', 'password': 'helloqa'},
        {'name': 'age', 'password': 'helloqa2'}]
    // 循环生成测试用例
    for (const data in testDatas) {
        it(`测试外部数据${data}`, function () {
            cy.log(testDatas[data].name, testDatas[data].password)
        });
    }
})
```
 

## 策略二：使用 fixtures（推荐）
直接看这篇文章就好了：[https://www.yuque.com/gstorms/fo7n4g/odg4gg](https://www.yuque.com/gstorms/fo7n4g/odg4gg)  
 

## 策略三：数据保存在自定义文件中

```bash
// 导入数据文件 example.json，并保存在 testData 变量中
import testData from '../../data/example.json'
describe('数据驱动的栗子', function () {
    describe('数据保存在自定义文件中', function () {
        for (const data in testData) {
            it(`测试外部数据${data}`, function () {
                cy.log(testData[data].name, testData[data].body)
            });
        }
    })
})
```
 

#### 测试结果
![](https://img2020.cnblogs.com/blog/1896874/202010/1896874-20201014142214668-497974209.png)  
 
> [https://www.cnblogs.com/poloyy/p/13814787.html](https://www.cnblogs.com/poloyy/p/13814787.html)

