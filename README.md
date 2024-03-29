
# vue-bmap-gl
[![npm (tag)](https://img.shields.io/npm/v/vue-bmap-gl/next)](https://www.npmjs.org/package/vue-bmap-gl)
[![NPM downloads](http://img.shields.io/npm/dm/vue-bmap-gl.svg)](https://npmjs.org/package/vue-bmap-gl)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/vue-bmap-gl@next/dist/index.min.js?compression=gzip&label=gzip%20size:%20JS)
[![NPM](https://img.shields.io/npm/l/vue-bmap-gl)](https://gitee.com/guyangyang/vue-bmap-gl)
[![star](https://gitee.com/guyangyang/vue-bmap-gl/badge/star.svg?theme=dark)](https://gitee.com/guyangyang/vue-bmap-gl/stargazers)

  :x: **由于百度需要开源文档认证，组件库停止维护，后续文档也会同步下线，有需要的可以下载代码本地运行查看文档，百度key也会失效，可以更换为自己的key** 

> vue-bmap-gl@next是一套基于Vue3 和百度GL的地图组件。
> 该版本对原组件进行升级，主要适配Vue3，同时调整事件绑定形式，调整为使用v-on进行事件绑定。
> 支持全量导入、按需导入和自动导入

>vue2请使用0.x版本，对应分支vue2

```html
觉得有用可以给个star
```

:q

## 捐赠支持
<img src="./image/zhifubao.jpg" alt="支付宝" width="270px" />
<img src="./image/weixin.png" alt="微信" width="270px"/>

## 安装
```
npm i -S vue-bmap-gl@next
```

## 文档
**[https://vue-bmap-gl.guyixi.cn](https://vue-bmap-gl.guyixi.cn)**


## 快速上手

引入vue-bmap-gl@next

```javascript
// 引入vue-bmap-gl
import VueBMap, {initBMapApiLoader} from 'vue-bmap-gl';
import 'vue-bmap-gl/dist/style.css';

// 初始化vue-bmap-gl
initBMapApiLoader({
  // 高德的key
  ak: 'YOUR_KEY',
});
createApp(App).use(VueBMap)

```

## 自动导入
首先你需要安装```unplugin-vue-components``` 、 ```unplugin-auto-import``` 、 ```@vuemap/unplugin-resolver```这三款插件
```
npm install -D unplugin-vue-components unplugin-auto-import @vuemap/unplugin-resolver
```
然后在main.ts中导入css和进行初始化key
```ts
import App from './App.vue'
import {initBMapApiLoader} from 'vue-bmap-gl';
import 'vue-bmap-gl/dist/style.css'
initBMapApiLoader({
    ak: 'YOUR_KEY'
})

createApp(App)
    .mount('#app')
```
再修改配置文件，把下列代码插入到你的 Vite 或 Webpack 的配置文件中
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {VueBmapGlResolver} from '@vuemap/unplugin-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VueBmapGlResolver()],
    }),
    Components({
      resolvers: [VueBmapGlResolver()],
    }),
  ]
})
```

## 组件

### 地图

```vue
<el-bmap  :zoom="zoom" :center="center">
</el-bmap>
```

