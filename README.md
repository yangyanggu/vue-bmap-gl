
# vue-bmap-gl
[![npm (tag)](https://img.shields.io/npm/v/vue-bmap-gl/next)](https://www.npmjs.org/package/vue-bmap-gl)
[![NPM downloads](http://img.shields.io/npm/dm/vue-bmap-gl.svg)](https://npmjs.org/package/vue-bmap-gl)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/vue-bmap-gl@next/dist/index.min.js?compression=gzip&label=gzip%20size:%20JS)
[![NPM](https://img.shields.io/npm/l/vue-bmap-gl)](https://gitee.com/guyangyang/vue-bmap-gl)
[![star](https://gitee.com/guyangyang/vue-bmap-gl/badge/star.svg?theme=dark)](https://gitee.com/guyangyang/vue-bmap-gl/stargazers)

> vue-bmap-gl@next是一套基于Vue3 和百度GL的地图组件。
> 该版本对原组件进行升级，主要适配Vue3，同时调整事件绑定形式，调整为使用v-on进行事件绑定。

>vue2请使用0.x版本，对应分支vue2

```html
觉得有用可以给个star
```

## 群号
![avatar](./image/vue-mapvgl.png)

## 捐赠支持
<img src="./src/docs/assets/images/zhifubao.jpg" alt="支付宝" width="270px" />
<img src="./src/docs/assets/images/weixin.png" alt="微信" width="270px"/>

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

## 组件

### 地图

```vue
<el-bmap  :zoom="zoom" :center="center">
</el-bmap>
```

