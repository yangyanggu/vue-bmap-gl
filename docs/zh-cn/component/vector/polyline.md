---
title: 折线
description: 折线
---
# 折线

## 基础示例

::: demo

examples/vector/polyline

:::


## 静态属性

仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|
geodesic | Boolean | 是否开启大地线模式，true时，两点连线将以大地线的形式。默认为false
clip | Boolean | 是否进行跨经度180度裁剪，绘制跨精度180时为了优化效果，可以设置成false，默认为true


## 动态属性

支持响应式。

名称 | 类型 | 说明
---|---|---|
path | Array | 折线的节点坐标数组
strokeColor | String | 线条颜色，使用16进制颜色代码赋值。默认值为#006600
strokeOpacity | Number | 线条透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
strokeWeight | Number | 线条宽度，单位：像素
strokeStyle | String | 线样式，实线:solid，虚线:dashed
enableMassClear | Boolean | 是否在调用map.clearOverlays清除此覆盖物，默认为true
enableEditing | Boolean | 多边形当前是否可编辑
enableClicking | Boolean | 是否响应点击事件，默认为true
visible | Boolean | 覆盖物显隐控制,默认true


## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.Polyline](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a3b10) | 获取`polyline`实例
$$getPath() | [ [lng:Number, lat:Number] ] | 获取 `polyline` 获取折线路径的节点数组


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
