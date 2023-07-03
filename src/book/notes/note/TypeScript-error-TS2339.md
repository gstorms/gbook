# TypeScript-error-TS2339

出现问题`TypeScript error TS2339: Property 'app' does not exist on type 'Window'`

解决方法，将`window.app`改为`(<any>window).app`就ok了

> 摘自 [TypeScript error TS2339: Property 'app' does not exist on type 'Window' ](https://stackoverflow.com/questions/46727426/typescript-error-ts2339-property-app-does-not-exist-on-type-window)

