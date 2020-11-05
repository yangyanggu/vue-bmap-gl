<p align="center">
  <img src="https://cdn.rawgit.com/ElemeFE/vue-amap/master/src/docs/assets/images/logo.png">
</p>

# vue-bmap-gl
[![Build Status](https://travis-ci.org/ElemeFE/vue-amap.svg?branch=master)](https://travis-ci.org/ElemeFE/vue-amap)
[![npm package](https://img.shields.io/npm/v/vue-amap.svg)](https://www.npmjs.org/package/vue-amap)
[![NPM downloads](http://img.shields.io/npm/dm/vue-amap.svg)](https://npmjs.org/package/vue-amap)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/vue-amap/src/lib/index.js?compression=gzip&label=gzip%20size:%20JS)
[![license](https://img.shields.io/github/license/elemefe/vue-amap.svg?style=flat-square)](https://github.com/ElemeFE/vue-amap)
[![GitHub stars](https://img.shields.io/github/stars/elemefe/vue-amap.svg?style=social&label=Star)](https://github.com/ElemeFE/vue-amap)

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

### 地图

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
</el-bmap>
```

### 点坐标

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
  <el-bmap-marker v-for="marker in markers" :position="marker.position"></el-bmap-marker>
</el-bmap>
```

### 折线

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
  <el-bmap-polyline :path="polyline.path"></el-bmap-polyline>
</el-bmap>
```

### 多边形

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
  <el-bmap-polygon v-for="polygon in polygons" :path="polygon.path" :events="polygon.events"></el-bmap-polygon>
</el-bmap>
```

### 圆

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
  <el-bmap-circle v-for="circle in circles" :center="circle.center" :radius="circle.radius"></el-bmap-circle>
</el-bmap>
```

### 图片覆盖物

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
  <el-bmap-ground-overlay v-for="groundimage in groundimages" :url="groundimage.url"></el-bmap-ground-overlay>
</el-bmap>
```

### 文本

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
  <el-bmap-text v-for="text in texts"></el-bmap-text>
</el-bmap>
```

### 贝塞尔曲线

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
  <el-bmap-bezier-curve v-for="line in lines"></el-bmap-bezier-curve>
</el-bmap>
```

### 圆点标记

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
  <el-bmap-circle-marker v-for="marker in markers"></el-bmap-circle-marker>
</el-bmap>
```

### 椭圆

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
  <el-bmap-ellipse v-for="ellipse in ellipses"></el-bmap-ellipse>
</el-bmap>
```

### 矩形

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
  <el-bmap-rectangle v-for="rectangle in rectangles"></el-bmap-rectangle>
</el-bmap>
```

### 信息窗体

```vue
<el-bmap vid="bmapDemo" :zoom="zoom" :center="center">
  <el-bmap-info-window v-for="window in windows" :position="window.position" :content="window.content" :open="window.open"></el-bmap-info-window>
</el-bmap>
```

### Search-Box

```vue
<el-bmap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-bmap-search-box>
<el-bmap vid="bmapDemo">
</el-bmap>
```

### 其他特性

* 支持自定义组件

## 反馈

