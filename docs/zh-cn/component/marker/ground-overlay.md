---
title: 地面叠加层,
description: 可以用于叠加图片在图层上，根据地图进行相应缩放
---
# 地面叠加层
可以用于叠加图片在图层上，根据地图进行相应缩放

## 基础示例

::: demo

examples/marker/ground-overlay

:::

## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|

## 动态属性
支持响应式。

名称 | 类型 | 说明
---|---|---|
bounds | Array [[x,y],[x,y]] | 区域
type | String | 'video' 、 'canvas'，默认为image
url | String Canvas | 图片、视频 url 或 自定义的canvas对象
opacity | Number | 图片透明度，取值范围[0,1]，0表示完全透明，1表示不透明默认值：1
visible | Boolean | 覆盖物显隐控制,默认true

## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.GroundOverlay](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a3b16) | 获取`BMapGL.GroundOverlay`实例

## 事件

事件 | 参数 | 说明
---|---|---|
init | Object | 百度组件实例
click | event{type, target} | 鼠标左键单击事件
dblclick | event{type, target} | 鼠标左键双击事件
