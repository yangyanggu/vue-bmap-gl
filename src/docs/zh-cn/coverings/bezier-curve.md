# 贝塞尔曲线

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

<template>
  <div class="bmap-page-container">
      <el-bmap vid="bmapDemo" :zoom="zoom" :center="center" class="bmap-demo">
        <el-bmap-bezier-curve v-for="(line,index) in lines" :key="index" :events="line.events" :visible="line.visible" :path="line.path" :control-points="line.controlPoints" :stroke-color="line.strokeColor" :stroke-style="line.strokeStyle" :events="line.events" :stroke-opacity="line.strokeOpacity"></el-bmap-bezier-curve>
      </el-bmap>
      <div class="toolbar">
        <button @click="toggleVisible">切换显隐</button>
      </div>
    </div>
  </template>

  <style>
    .bmap-demo {
      height: 300px;
    }
  </style>

  <script>
    module.exports = {
      data () {
        return {
          zoom: 12,
          center: [116.380298, 39.907771],
          lines: [
            {
              path: [
                [116.39, 39.91],
                [116.380298, 39.907771],
                [116.385298, 39.907771]
              ],
              controlPoints: [
                [116.37, 39.91],
                [116.38, 39.90],
                [116.40, 39.90]
              ],
              visible: true,
              strokeDasharray: [10, 10],
              strokeColor: "#ff33ff", //线颜色
              strokeOpacity: 1, //线透明度
              strokeWeight: 3, //线宽
              strokeStyle: "solid", //线样式
              events: {
                click: () => {
                  alert('click');
                }
              }
            }
          ]
        }
      },
      methods: {
        toggleVisible() {
            this.lines[0].visible = !this.lines[0].visible;
        }
      }
    };
  </script>

</script>


## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|
vid | String | 组件的ID。


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
