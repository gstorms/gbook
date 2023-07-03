# Cypress获取伪类CSS属性

新增command
```javascript
Cypress.Commands.add(
  "before",
  {
    prevSubject: "element",
  },
  (el, property) => {
    // get Window reference from element
    const win = el[0].ownerDocument.defaultView
    // use getComputedStyle to read the pseudo selector
    const before = win.getComputedStyle(el[0], "before")
    // read the value of the `property` CSS property
    return before.getPropertyValue(property)
  }
)
```

使用
```javascript
...
cy.get(".main").before("content").should(...)
...
```

