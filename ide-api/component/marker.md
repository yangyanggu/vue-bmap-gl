---
title: BmapMarker
---
# BmapMarker

点坐标

## Attributes

Attribute | Type | Description
---|---|---|
position | Array [x,y] | 点标记在地图上显示的位置，默认为地图中心点。
offset | Array [x,y] | 点标记显示位置偏移量，默认值为[-8,-8]。Marker指定position后，默认以marker左上角位置为基准点，对准所给定的position位置，若需使marker指定位置对准在position处，需根据marker的尺寸设置一定的偏移量。
icon | {url:'',size:[],imageOffset:[],anchor:[]} | 该值为标号图标，详细参数说明见下面表，可为空。
title | String | 鼠标滑过点标记时的文字提示，不设置则鼠标滑过点标无文字提示。
label | {content,offset: [x, y],title} | 添加文本标注，content为文本标注的内容，offset为偏移量，左上角为偏移量为（0,0）,title为鼠标滑过label的提示
draggingCursor | String | 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
rotation | Number | 点标记的旋转角度
zIndex | String | 覆盖物的zIndex
raiseOnDrag | Boolean | 拖拽标注时，标注是否开启离开地图表面效果。默认为false
enableClicking | Boolean | 是否响应点击事件。默认为true
enableDragging | Boolean | 设置点标记是否可拖拽移动，默认为false。
enableMassClear | Boolean | 是否允许覆盖物在map.clearOverlays方法中被清除，默认true。
visible | Boolean | 覆盖物显隐控制,默认true

## Events

Event Name | Parameters | Description
---|---|---|
click | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标左键单击事件
dblclick | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标左键双击事件
rightclick | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标右键单击事件
mousemove | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标移动
mouseover | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标移近点标记时触发事件
mouseout | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标移出点标记时触发事件
mousedown | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标在点标记上按下时触发事件
mouseup | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标在点标记上按下后抬起时触发事件
dragstart | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 开始拖拽点标记时触发事件
dragging | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标拖拽移动点标记时触发事件
dragend | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 点标记拖拽移动结束触发事件
moveend |  | 点标记执行moveTo动画结束时触发事件，也可以由moveAlong方法触发
movealong |  | 点标记执行moveAlong动画一次后触发事件
touchstart | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 触摸开始时触发事件，仅适用移动设备
touchmove | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 触摸移动进行中时触发事件，仅适用移动设备
touchend | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 触摸结束时触发事件，仅适用移动设备
