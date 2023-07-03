# Cypress笔记


### 使用cypress报错
```bash
Error: Webpack Compilation Error
./cypress/integration/main/login-page.test.js
Module build failed (from C:/Users/user/AppData/Local/Cypress/Cache/5.4.0/Cypress/resources/app/packages/server/node_modules/babel-loader/lib/index.js):
C:\Users\user\IdeaProjects\admin\project\project-ui\browserslist:1
# This file is used by the build system to adjust CSS and JS output to support the specified browsers below.
^

SyntaxError: Invalid or unexpected token
```
解决方法（待确认）
```json
"browserslist": [
		"> 0.5%",
		"last 2 versions",
		"Firefox ESR",
		"not dead",
		"not IE 9-11"
	],
```

