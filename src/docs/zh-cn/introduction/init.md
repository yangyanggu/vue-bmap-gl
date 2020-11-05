# 初始化

---

## 引入地图

一般项目中，对于 vue-bmap-gl 的初始化只需要调用 `initBMapApiLoader` 方法即可。

NPM 安装：

```javascript
import VueBMap from 'vue-bmap-gl';

Vue.use(VueBMap);
VueBMap.initBMapApiLoader({
  ak: 'YOUR_KEY',
  v: '1.0'
});
```

## Promise

在**定制化程度较高**的项目中，开发者可能只想通过 vue-bmap-gl 引入百度地图，而部分实例化的操作直接基于百度地图的 sdk 完成。这个时候就需要 `lazyBMapApiLoaderInstance`。

NPM 安装：

```javascript
import VueBMap from 'vue-bmap-gl';
import { lazyBMapApiLoaderInstance } from 'vue-bmap-gl';

Vue.use(VueBMap);
VueBMap.initBMapApiLoader({
  ak: 'YOUR_KEY',
  v: '1.0'
});

lazyBMapApiLoaderInstance.load().then(() => {
  // your code ...
  this.map = new BMapGL.Map('bmapContainer', {
    center: new BMapGL.LngLat(121.59996, 31.197646)
  });
});
```


## 参数

参数名  | 类型  |  默认值 | 描述 |
--- | --- | --- | --- |
ak | `String` | `` | 百度 Key |
v | `String` | `1.0` | SDK 版本 |

