# cypress-断言
| **Chainer** | **Example** |
| --- | --- |
| not | `expect(name).to.not.equal('Jane')` |
| deep | `expect(obj).to.deep.equal({ name: 'Jane' })` |
| nested | `expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]')`  
`expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'})` |
| ordered | `expect([1, 2]).to.have.ordered.members([1, 2]).but.not.have.ordered.members([2, 1])` |
| any | `expect(arr).to.have.any.keys('age')` |
| all | `expect(arr).to.have.all.keys('name', 'age')` |
| a(_type_)  
**Aliases: **an | `expect('test').to.be.a('string')` |
| include(_value_)  
**Aliases: **contain, includes, contains | `expect([1,2,3]).to.include(2)` |
| ok | `expect(undefined).to.not.be.ok` |
| true | `expect(true).to.be.true` |
| false | `expect(false).to.be.false` |
| null | `expect(null).to.be.null` |
| undefined | `expect(undefined).to.be.undefined` |
| exist | `expect(myVar).to.exist` |
| empty | `expect([]).to.be.empty` |
| arguments  
**Aliases: **Arguments | `expect(arguments).to.be.arguments` |
| equal(_value_)  
**Aliases: **equals, eq | `expect(42).to.equal(42)` |
| deep.equal(_value_) | `expect({ name: 'Jane' }).to.deep.equal({ name: 'Jane' })` |
| eql(_value_)  
**Aliases: **eqls | `expect({ name: 'Jane' }).to.eql({ name: 'Jane' })` |
| greaterThan(_value_)  
**Aliases: **gt, above | `expect(10).to.be.greaterThan(5)` |
| least(_value_)  
**Aliases: **gte | `expect(10).to.be.at.least(10)` |
| lessThan(_value_)  
**Aliases: **lt, below | `expect(5).to.be.lessThan(10)` |
| most(_value_)  
**Aliases: **lte | `expect('test').to.have.length.of.at.most(4)` |
| within(_start_, _finish_) | `expect(7).to.be.within(5,10)` |
| instanceOf(_constructor_)  
**Aliases: **instanceof | `expect([1, 2, 3]).to.be.instanceOf(Array)` |
| property(_name_, _[value]_) | `expect(obj).to.have.property('name')` |
| deep.property(_name_, _[value]_) | `expect(deepObj).to.have.deep.property('tests[1]', 'e2e')` |
| ownProperty(_name_)  
**Aliases: **haveOwnProperty, own.property | `expect('test').to.have.ownProperty('length')` |
| ownPropertyDescriptor(_name_)  
**Aliases: **haveOwnPropertyDescriptor | `expect({a: 1}).to.have.ownPropertyDescriptor('a')` |
| lengthOf(_value_) | `expect('test').to.have.lengthOf(3)` |
| match(_RegExp_)  
**Aliases: **matches | `expect('testing').to.match(/^test/)` |
| string(_string_) | `expect('testing').to.have.string('test')` |
| keys(_key1_, _[key2]_, _[...]_)  
**Aliases: **key | `expect({ pass: 1, fail: 2 }).to.have.keys('pass', 'fail')` |
| throw(_constructor_)  
**Aliases: **throws, Throw | `expect(fn).to.throw(Error)` |
| respondTo(_method_)  
**Aliases: **respondsTo | `expect(obj).to.respondTo('getName')` |
| itself | `expect(Foo).itself.to.respondTo('bar')` |
| satisfy(_method_)  
**Aliases: **satisfies | `expect(1).to.satisfy((num) => { return num > 0 })` |
| closeTo(_expected_, _delta_)  
**Aliases: **approximately | `expect(1.5).to.be.closeTo(1, 0.5)` |
| members(_set_) | `expect([1, 2, 3]).to.include.members([3, 2])` |
| oneOf(_values_) | `expect(2).to.be.oneOf([1,2,3])` |
| change(_function_)  
**Aliases: **changes | `expect(fn).to.change(obj, 'val')` |
| increase(_function_)  
**Aliases: **increases | `expect(fn).to.increase(obj, 'val')` |
| decrease(_function_)  
**Aliases: **decreases | `expect(fn).to.decrease(obj, 'val')` |

