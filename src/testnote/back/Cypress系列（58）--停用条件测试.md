
## Cypress 下什么是条件测试
- 判断一个元素是否存在，当它存在时，执行 A 操作；当它不存在时，执行 B 操作
- Cypress 认为条件测试是导致测试不稳定的根本原因

 

#### 条件测试的不稳定性

- 当测试代码中出现条件测试时，说明无法确定操作会导致哪种结果发生
- 这显然是有风险的，例如执行 A 操作的代码有错误，导致 A 操作一直没有被触发，则此问题将无法被测试到

 

## 停用条件测试

- Cypress 建议通过**指定前置测试条件**来避免操作引发的不确定行为
- 例如当有A、B 策略的需求时，指定测试前置条件使得 A 或 B 一定发生
- 前置条件的构造，可以通过修改 DB 直接获取，也可以根据业务使用 API 或 UI 的方式构造
- 唯有条件确定时，才能避免使测试进入条件测试的困境

 

#### 测试代码栗子

```javascript
// 前置条件的构造过程
it('确定 A 操作会发生', function () {
    cy.get('.A_Selector').should('exist')
});
it('确定 A 操作不会发生', function () {
    cy.get('.A_Selector').should('not.exist')
});
```
 
> [https://www.cnblogs.com/poloyy/p/13739349.html](https://www.cnblogs.com/poloyy/p/13739349.html)

