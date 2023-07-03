# Cypress-如何使用ts(typescript)
首先需要安装ts  
`npm install --save-dev typescript`  
然后配置`tsconfig.json`文件：
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```
测试用例的写法和js一样
> 参考：[https://docs.cypress.io/guides/tooling/typescript-support](https://docs.cypress.io/guides/tooling/typescript-support)

