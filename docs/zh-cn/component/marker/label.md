---
title: 文本
description: 文本功能与百度原有API有些区别，增加isCustom属性和支持slot
---
# 文本
文本功能与百度原有API有些区别，增加以下功能<br/>
* isCustom属性，该属性用于取消label默认设置的边框和背景颜色
* 支持slot方式

## 基础示例

::: demo

examples/marker/label

:::


## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|
isCustom | Boolean | 是否自定义样式，默认false，设置为true时会将style设置为{border:'none',background:'none'}，该属性会覆盖labelStyle属性

## 动态属性
支持响应式。

名称 | 类型 | 说明
---|---|---|
content |  String |  标记显示的文本内容
position |  Array [x,y] |  点标记在地图上显示的位置
offset |  Array [x,y] | 点标记显示位置偏移量
title | String |  鼠标滑过点标记时的文字提示，不设置则鼠标滑过点标无文字提示
labelStyle | Object | 设置文本标注样式，该样式将作用于文本标注的容器元素上。其中styles为JavaScript对象常量，比如： setStyle({ color : "red", fontSize : "12px" }) 注意：如果css的属性名中包含连字符，需要将连字符去掉并将其后的字母进行大写处理，例如：背景色属性要写成：backgroundColor
enableMassClear | Boolean | 是否在调用map.clearOverlays清除此覆盖物，默认为true
visible | Boolean | 覆盖物显隐控制,默认true


## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.Label](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a3b8) | 获取`Label`实例


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
remove | event{type, target} | 移除文本标注时触发
