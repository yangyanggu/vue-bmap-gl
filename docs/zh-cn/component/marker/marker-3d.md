---
title: 3D点坐标
description: 3D点坐标
---
# 3D点坐标

## 基础示例

::: demo

examples/marker/marker3d

:::


## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|

## 动态属性
支持响应式。

名称 | 类型 | 说明
---|---|---|
position | Array [x,y] | 点标记在地图上显示的位置，默认为地图中心点。
height | number | 点标记显示位置偏移量，默认值为[-8,-8]。Marker指定position后，默认以marker左上角位置为基准点，对准所给定的position位置，若需使marker指定位置对准在position处，需根据marker的尺寸设置一定的偏移量。
icon | {url:'',size:[],imageOffset:[],anchor:[]} | 该值为标号图标，详细参数说明见下面表，可为空。
size | number | 点的大小，默认为50
shape | number | 点的形状，1 为圆形，2 为正方形，默认为 1。也可以使用对应的常量 BMAP_SHAPE_CIRCLE 和 BMAP_SHAPE_RECT
fillColor | String | 点的颜色，格式为 '#xxxxxx'，比如'#f00'
fillOpacity | Number | 点的透明度，范围0-1，默认0.8

icon参数说明

名称 | 类型 | 说明
---|---|---|
url | String | 图标的图片地址，可以是http地址，也可以是base64
size | Array [x,y] | 图片的大小，根据实际图片大小来控制
imageOffset | Array [x,y] | 图标所用的图片相对于可视区域的偏移值，<br/>此功能的作用等同于CSS中的background-position属性
anchor | Array [x,y] | 图标的定位点相对于图标左上角的偏移值


## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.Marker](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a3b2) | 获取`marker`实例

## 事件

事件 | 参数 | 说明
---|---|---|
init | Object | 实例初始化事件
click | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标左键单击事件
