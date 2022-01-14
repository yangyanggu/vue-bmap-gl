---
title: 贝塞尔曲线
description: 贝塞尔曲线
---
# 贝塞尔曲线

## 基础示例

::: demo

examples/vector/bezier-curve

:::

## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|


## 动态属性
支持响应式。

名称 | 类型 | 说明
---|---|---|
path | Array [[x,y],[x,y]] | 贝瑟尔曲线的路径。
controlPoints | Array [[x,y],[x,y]] | 贝瑟尔曲线的控制点。
strokeColor | String | 线条颜色，如‘#000000’、‘red’
strokeOpacity | Number | 透明度
strokeWeight | Number | 线宽
strokeStyle | String | 虚线或者视线，'dashed'、'solid'
enableMassClear | Boolean | 是否在调用map.clearOverlays清除此覆盖物，默认为true
visible | Boolean | 覆盖物显隐控制,默认true

## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.BezierCurve](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a3b18) | 获取`BezierCurve`实例
$$getPath() | Array [[x,y],[x,y]] | 获取贝瑟尔曲线的路径
$$getControlPoints | Array [[x,y],[x,y]] | 贝瑟尔曲线的控制点

## 事件

事件 | 参数 | 说明
---|---|---|
init | Object | 组件实例
