---
title: 兼容百度原生 SDK
---

# 兼容百度原生 SDK

---

`vue-bmap-gl` 能够抛开百度原生 SDK 覆盖大多数场景，但对于部分定制化程度较高的场景而言，可能还是需要引入百度原生 SDK 来支持。这章将介绍如何在 vue-bmap-gl 中使用百度 SDK。


## 实例方式

对于大多数 `vue-amap` 组件，都有 `init` 这个 `event`，参数为百度地图对应组件的实例，通过这样暴露百度实例的方式，开发者能够非常自由地将原生 SDK 和 vue-bmap-gl 结合起来使用。


*若涉及到百度原生 `AMap` 需要注意的点：*

* 确保 `vue-bmap-gl` 的导入名不是 `BMapGL`，推荐 `import VueBMap from 'vue-bmap-gl'` 避免和百度全局的 `BMapGL` 冲突。
* 若 `eslint` 报错 `BMapGL is undefined` 之类的错误。请将 `BMapGL` 配置到 `.eslintrc` 的 `globals` 中。

### 地图示例
::: demo

examples/bmap/basic

:::
