---
title: BmapMarker3d
---
# BmapMarker3d
3D点坐标

## Attributes

Attribute | Type | Description
---|---|---|
position | Array [x,y] | 点标记在地图上显示的位置，默认为地图中心点。
height | number | 点标记显示位置偏移量，默认值为[-8,-8]。Marker指定position后，默认以marker左上角位置为基准点，对准所给定的position位置，若需使marker指定位置对准在position处，需根据marker的尺寸设置一定的偏移量。
icon | {url:'',size:[],imageOffset:[],anchor:[]} | 该值为标号图标，详细参数说明见下面表，可为空。
size | number | 点的大小，默认为50
shape | number | 点的形状，1 为圆形，2 为正方形，默认为 1。也可以使用对应的常量 BMAP_SHAPE_CIRCLE 和 BMAP_SHAPE_RECT
fillColor | String | 点的颜色，格式为 '#xxxxxx'，比如'#f00'
fillOpacity | Number | 点的透明度，范围0-1，默认0.8

## Events

Event Name | Parameters | Description
---|---|---|
init | Object | 实例初始化事件
click | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标左键单击事件
