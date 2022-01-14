---
title: Bmap
---

# BmapBezierCurve

贝塞尔曲线

## Attributes

Attribute | Type | Description
---|---|---|
path | Array [[x,y],[x,y]] | 贝瑟尔曲线的路径。
controlPoints | Array [[x,y],[x,y]] | 贝瑟尔曲线的控制点。
strokeColor | String | 线条颜色，如‘#000000’、‘red’
strokeOpacity | Number | 透明度
strokeWeight | Number | 线宽
strokeStyle | String | 虚线或者视线，'dashed'、'solid'
enableMassClear | Boolean | 是否在调用map.clearOverlays清除此覆盖物，默认为true
visible | Boolean | 覆盖物显隐控制,默认true

## Events

Event Name | Parameters | Description
---|---|---|
init | Object | 组件实例
