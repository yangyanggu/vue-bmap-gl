---
title: 多边形
description: 多边形
---
# 多边形

## 基础示例

::: demo

examples/vector/polygon

:::


## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|

## 动态属性
支持响应式。

名称 | 类型 | 说明
---|---|---|
path | Array| 多边形轮廓线的节点坐标数组，当为“环”多边形时（多边形区域在多边形内显示为“岛”），path为二维数组，数组元素为多边形轮廓的节点坐标数组“环”多边形时，要求数组第一个元素为外多边形，其余为“岛”多边形，外多边形需包含“岛”多边形，否则程序不作处理
strokeColor | String | 线条颜色，使用16进制颜色代码赋值。默认值为#006600
strokeOpacity | float | 轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
strokeWeight | Number | 轮廓线宽度
strokeStyle | String | 轮廓线样式，实线:solid，虚线:dashed
fillColor | String | 多边形填充颜色，使用16进制颜色代码赋值，如：#FFAA00
fillOpacity | Float | 多边形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
enableMassClear | Boolean | 是否在调用map.clearOverlays清除此覆盖物，默认为true
enableEditing | Boolean | 多边形当前是否可编辑
enableClicking | Boolean | 是否响应点击事件，默认为true
visible | Boolean | 覆盖物显隐控制,默认true

## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.Polygon](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a3b12) | 获取`polygon`实例
$$getPath() | [[lng:Number,lat:Number]] | 获取 `polygon` 的边界坐标

## 事件

事件 | 参数 | 说明
---|---|---|
init | Object | 组件实例
click | event{type, target, point, pixel} | 鼠标左键单击事件
dblclick | event{type, target, point, pixel} | 鼠标左键双击事件
rightclick | event{type, target, point, pixel} | 右键单击
mousedown | event{type, target, point, pixel} | 鼠标按下
mouseup | event{type, target, point, pixel} | 鼠标抬起
mouseover | event{type, target, point, pixel} | 鼠标经过
mouseout | event{type, target, point, pixel} | 鼠标移出
remove | {type, target} | 移除圆形时触发此事件
lineupdate | {type, target}	| 圆形覆盖物的属性发生变化时触发此事件，使用该事件后会导致修改path后图形不刷新问题
editend | {type, target} | 拖拽编辑后触发此事件
