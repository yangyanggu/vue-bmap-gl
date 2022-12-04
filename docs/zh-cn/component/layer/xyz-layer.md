---
title: XYZLayer
description: XYZLayer
---
# XYZLayer

## 基础示例

[官方参数示例](https://lbs.baidu.com/jsdemo.htm#wms)


::: demo

examples/layer/xyz-layer

:::


## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型       | 说明
---|----------|---|
tileUrlTemplate | String   | 图像数据请求地址。可通过{0,1,2}标记实现多请求地址的配置；可通过[z]，[x]，[y]，[b]引用默认的*Template。WMTS/TMS/自定义栅格图层服务默认使用[z]，[x]，[y]，瓦片大小为256*256。WMS服务默认使用[b]。
xTemplate | Function | 通过输入的网格x、y、z参数计算[x]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
yTemplate | Function  | 通过输入的网格x、y、z参数计算[y]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
zTemplate | Function  | 通过输入的网格x、y、z参数计算[z]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
bTemplate | Function  | 通过输入的网格x、y、z参数计算[b]具体返回值，返回值默认为四至坐标拼接成的字符串：’minX,minY,maxX,maxY’。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
minZoom | Number | 设置图层显示的最小缩放等级。
maxZoom | Number | 设置图层显示的最大缩放等级。
extent | Array | 设置图层加载数据的四至范围，输入的范围数值默认为EPSG:3857坐标[minX,minY,maxX,maxY]。
extentCRSIsWGS84 | Boolean | 标记参数extend数组数据是否为EPSG:4326坐标。默认false，如果设置为true，参数extent数值需要是EPSG:4326 坐标。
boundary | Array | 设置图层掩膜。可通过BMapGL.Boundary()获取行政区域的坐标数据。
useThumbData | Boolean | 缩放图层时，是否使用跨图层的瓦片进行平滑切换。默认false。如果影响透明图层的展示效果，可以设置false；如果非透明图层，可以设置true。
tms | Boolean | tileUrlTemplate中[y]是否为tms请求服务形式。默认false。如果是则设置为true。


## 动态属性
支持响应式。

名称 | 类型 | 说明
---|---|---|

## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回                                                                                    | 说明
---|---------------------------------------------------------------------------------------|---|
$$getInstance() | [BMapGL.XYZLayer](https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a8b55) | 获取`MapMask`实例
$$addBoundary | Array | 设置图层掩膜。boundaries可通过BMapGL.Boundary()获取行政区域的坐标数据。
$$clearBoundary | 无 | 清空图层掩膜。

## 事件

事件 | 参数 | 说明
---|---|---|
init | Object | 组件实例
