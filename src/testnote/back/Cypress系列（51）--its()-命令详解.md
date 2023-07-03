
## 作用
获取上一条命令结果的属性值  
 

## 语法格式

```javascript
.its(propertyName)
.its(propertyName, options)
```
 

#### 参数说明
**propertyName：**索引、属性名、要获取的嵌套属性名称  
**options：**log、timeout  
 

#### 命令返回结果
属性值  
 

## 正确写法

```javascript
cy.wrap({ width: '50' }).its('width') // 获取宽度属性
cy.window().its('sessionStorage')     // 获取 sessionStorage 属性
```
 

## 错误写法

```javascript
cy.its('window')                // 不能链接在 cy 后面
cy.clearCookies().its('length') // clearCookies 并不返回对象
```
 

## 各种栗子

### 获取字典对象的属性值

```javascript
cy.wrap({age: 52}).its('age').should('eq', 52) // true
```
 

### 数组对象，根据索引取值

```javascript
cy.wrap(['polo', 'yy']).its(1).should('eq', 'yy')
```
 

### 获取元素的属性值

```javascript
cy.get('ul li')
.its('length')
.should('be.gt',4)
```

### 获取字符串对象的属性值

```javascript
cy
.url()
.its('length')
.should('be.gt', 20)
```
 

### 属性值是函数

```javascript
const fn = () => {
      return 42
}
```
 cy.wrap({getNum: fn}).its('getNum').should('be.a', 'function')  
返回的是函数对象本身，而不是 return 的值  
 

### 获取嵌套属性值

```javascript
const user = {
  contacts: {
    work: {
      name: 'Kamil'
    }
  }
}
cy.wrap(user).its('contacts.work.name').should('eq', 'Kamil') // true
```

> [https://www.cnblogs.com/poloyy/p/13686431.html](https://www.cnblogs.com/poloyy/p/13686431.html)

