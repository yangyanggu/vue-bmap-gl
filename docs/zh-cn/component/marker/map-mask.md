---
title: 掩膜
description: 掩膜
---
# 掩膜

## 基础示例

::: demo

examples/marker/map-mask

:::


## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|
path | Array | 区域坐标点数组
showRegion | String | 展示区域内部还是外部，取值'inside'或'outside'，默认为'inside'
isBuildingMask | Boolean | 楼块是否参与掩膜，默认为false
isMapMask | Boolean | 底图是否参与掩膜，默认为false
isPoiMask | Boolean | 底图上的Poi是否参与掩膜，默认为false


## 动态属性
支持响应式。

名称 | 类型 | 说明
---|---|---|

## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回                                                                                    | 说明
---|---------------------------------------------------------------------------------------|---|
$$getInstance() | [BMapGL.MapMask](https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/AreaMask) | 获取`MapMask`实例

## 事件

事件 | 参数 | 说明
---|---|---|
init | Object | 组件实例
