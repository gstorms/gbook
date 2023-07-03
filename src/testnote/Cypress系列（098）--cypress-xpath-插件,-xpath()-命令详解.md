
## 前置学习
首先，得对 xpath 语法熟悉哦，可看此链接进行学习  
[https://www.cnblogs.com/poloyy/p/12626196.html](https://www.cnblogs.com/poloyy/p/12626196.html)  
 

#### 官方地址
[https://github.com/cypress-io/cypress-xpath](https://github.com/cypress-io/cypress-xpath)  
 

## 安装方式

#### npm

```javascript
npm install -D cypress-xpath
```
 

#### Yarn

```javascript
yarn add cypress-xpath --dev
```
 

## 项目导入插件
在 cypress/support/index.js 文件下写下面语句即可

```javascript
require('cypress-xpath')
```
 

## 个人总结

#### 调用 xpath() 命令的两种方式

```javascript
// 直接 cy.
cy.xpath()
// 获取到 element 元素之后再调用
cy.get('ul').xpath()
cy.xpath().xpath()
cy.get('div').first().xpath()
```
 

#### xpath() 命令的返回结果
单个 element 元素或多个 element 元素组成的数组  
 

## 入门使用的栗子

```javascript
it('简单的栗子', function () {
    cy.xpath('//ul/li')
        .should('have.length', 6)
});
```
 

## 调用 Cypress 命令后再接 xpath 命令

```javascript
it('调用 Cypress 命令后再接 xpath 命令', function () {
    cy.xpath('//ul')
        .first()
        .xpath('./li')
});
```
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201206144608296-2042762823.png)  
 

## 调用 xpath 后再接一次 xpath 命令

```javascript
it('调用 xpath 后再接一次 xpath 命令', function () {
    cy.xpath('//body/ul')
        .xpath('./li')
});
```
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201206144614091-324309024.png)  
 

## 根据属性定位元素

```javascript
it('根据属性定位元素', function () {
    cy.xpath('//*[@id="form-wrapper"]')
    cy.xpath('//*[@class]')
});
```
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201206144626373-1380966137.png)  
 

##  选取当前节点的父节点再找元素

```javascript
it('选取当前节点的父节点', function () {
    cy.xpath('//*[@id="form-wrapper"]/../h2')
});
```
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201206144657432-621488126.png)  
 

## 根据索引定位

```javascript
it('根据索引定位', function () {
    cy.xpath('//body/ul[1]/li[3]')
});
```
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201206144703813-1703827343.png)  
 

## 条件表达式

```javascript
it('条件表达式', function () {
    cy.xpath('//*[@name="password" or @id="form-wrapper"]')
}
```
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201206144711492-1813714810.png)  
 

## 模糊匹配函数

```javascript
it('模糊匹配函数', function () {
    cy.xpath('//*[starts-with(@class,"e")]')
    cy.xpath('//*[contains(text(),"Show")]')
});
```
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201206144720545-2121856347.png)  
 

## 定位函数

```javascript
it('定位函数', function () {
    cy.xpath('//input[position()=1]')
});
```
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201206144730691-1242241228.png)  
 

## 其他定位方式

```javascript
it('其他定位方式', function () {
    cy.xpath('//li[position()=2]/preceding-sibling::li')
    // 等价写法
    cy.xpath('//li[position()=2]/../li[position()<2]')
});
```
![](https://img2020.cnblogs.com/blog/1896874/202012/1896874-20201206144738098-1440902872.png)  
 
> [https://www.cnblogs.com/poloyy/p/14092754.html](https://www.cnblogs.com/poloyy/p/14092754.html)

