# vitejs-get-vue-ref

> vue3获取ref

## 安装

```bash
npm install vitejs-get-vue-ref -D
```
## 使用 

vite.config.ts
```js
import GetVueRef from 'vitejs-get-vue-ref'

import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        GetVueRef()
    ]
})
```