<p align="center">
  <img src="https://cdn.rawgit.com/ElemeFE/vue-amap/master/src/docs/assets/images/logo.png">
</p>

# vue-bmap-gl
[![Build Status](https://travis-ci.org/a407042815/vue-bmap-gl.svg?branch=master)](https://travis-ci.org/ElemeFE/vue-amap)
[![npm package](https://img.shields.io/npm/v/vue-bmap-gl.svg)](https://gitee.com/guyangyang/vue-bmap-gl)
[![NPM downloads](http://img.shields.io/npm/dm/vue-bmap-gl.svg)](https://gitee.com/guyangyang/vue-bmap-gl)
[![license](https://img.shields.io/github/license/elemefe/vue-amap.svg?style=flat-square)](https://gitee.com/guyangyang/vue-bmap-gl)
[![Gitee stars](https://gitee.com/guyangyang/vue-bmap-gl/badge/star.svg?theme=white)](https://gitee.com/guyangyang/vue-bmap-gl/stargazers)

> vue-bmap-gl是一套基于Vue 2.0和百度地图WebGL版本的地图组件。
> 该版本在原来的版本上增加对bmap WebGL1.0的适配
> 该项目基于 https://github.com/ElemeFE/vue-amap/ 修改开发

## 安装
```
npm install -S vue-bmap-gl
```

## 文档
[https://guyangyang.gitee.io/vue-bmap-gl/#/](https://guyangyang.gitee.io/vue-bmap-gl/#/)


## 快速上手

引入vue-bmap-gl

```javascript
// 引入vue-bmap-gl
import VueBMap from 'vue-bmap-gl';
import 'vue-bmap-gl/dist/style.css';
Vue.use(VueBMap);

// 初始化vue-amap
VueBMap.initBMapApiLoader({
  // 百度的key
  ak: 'YOUR_KEY',
  // 百度 sdk 版本，默认为 1.0
  v: '1.0'
});
```

## 组件

目前完成组件：
* el-map（地图）
* el-bmap-bezier-curve（贝塞尔曲线）
* el-bmap-circle（圆）
* el-bmap-ground-overlay（地面叠加层）
* el-bmap-info-window（信息窗口）
* bmap-label（文本标记）
* bmap-marker（标号）
* bmap-marker-3d（3D标号）
* bmap-polygon（多边形）
* bmap-polyline（折线）
* bmap-prism（3D棱柱）

### 其他特性



## 反馈

