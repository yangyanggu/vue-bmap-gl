---
title: BmapInfoWindow
---
# BmapInfoWindow

信息窗体

## Attributes

Attribute | Type | Description
---|---|---|
title | String | 信息窗标题文字，支持HTML内容
content | String/HTML | 显示内容。支持字符串和HTML。
width | Number | 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
height | Number | 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
maxWidth | Number | 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
position | Array[x,y] | 信息窗体显示基点位置
offset | Array[x,y] | 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
enableAutoPan | Boolean | 是否开启信息窗口打开时地图自动移动（默认开启）
enableCloseOnClick | Boolean | 是否开启点击地图关闭信息窗口（默认开启）
visible | Boolean | 信息窗体是否显示。**这里需要注意的是，百度地图只支持同时一个信息窗体的显示**。所以一旦有窗体显示切换的场景，visible数组的状态需要自行维护。

## Events

Event Name | Parameters | Description
---|---|---|
init | Object | 百度组件实例
open| event{type, target, point} | 信息窗体打开之后触发事件
close | event{type, target, point} | 信息窗口被关闭时触发此事件
maximize| event{type, target} | 信息窗口最大化后触发此事件
restore | event{type, target} | 信息窗口还原时触发此事件
clickclose | event{type, target} | 点击信息窗口的关闭按钮时触发此事件
