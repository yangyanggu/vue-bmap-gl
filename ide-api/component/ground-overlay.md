---
title: BmapGroundOverlay
---
# BmapGroundOverlay

地面叠加层,可以用于叠加图片在图层上，根据地图进行相应缩放

## Attributes

Attribute | Type | Description
---|---|---|
bounds | Array [[x,y],[x,y]] | 区域
type | String | 'video' 、 'canvas'，默认为image
url | String Canvas | 图片、视频 url 或 自定义的canvas对象
opacity | Number | 图片透明度，取值范围[0,1]，0表示完全透明，1表示不透明默认值：1
visible | Boolean | 覆盖物显隐控制,默认true

## Events

Event Name | Parameters | Description
---|---|---|
init | Object | 百度组件实例
click | event{type, target} | 鼠标左键单击事件
dblclick | event{type, target} | 鼠标左键双击事件
