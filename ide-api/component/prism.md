---
title: BmapPrism
---
# BmapPrism

3D棱柱

## Attributes

Attribute | Type | Description
---|---|---|
path | Array [[x,y],[x,y]] | 底面多边形的点数组
altitude | Number | 棱柱的高，单位：米
topFillColor | String | 顶面填充颜色
topFillOpacity | Number | 顶面填充颜色透明度，取值范围0 - 1
sideFillColor | String | 侧面填充颜色
sideFillOpacity | Number | 侧面填充颜色透明度，取值范围0 - 1
enableMassClear | Boolean | 是否在调用map.clearOverlays清除此覆盖物，默认为true

## Events

Event Name | Parameters | Description
---|---|---|
init | Object | 组件实例
click | event{type, target, point, pixel} | 鼠标左键单击事件
dblclick | event{type, target, point, pixel} | 鼠标左键双击事件
rightclick | event{type, target, point, pixel} | 右键单击
mousedown | event{type, target, point, pixel} | 鼠标按下
mouseup | event{type, target, point, pixel} | 鼠标抬起
mouseover | event{type, target, point, pixel} | 鼠标经过
mouseout | event{type, target, point, pixel} | 鼠标移出
