# 3D棱柱

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="bmap-page-container">
      <el-bmap vid="bmap" :zoom="zoom" :center="center" class="bmap-demo">
        <el-bmap-prism  :path="prism.path" :visible="visible" :altitude="prism.altitude" :top-fill-color="prism.topFillColor" :top-fill-opacity="prism.topFillOpacity" :side-fill-color="prism.sideFillColor" :side-fill-opacity="prism.sideFillOpacity" :events="prism.events"></el-bmap-prism>
      </el-bmap>
      <div>
        <button @click="switchVisible">切换显隐</button>
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
      data() {
        return {
          zoom: 12,
          center: [121.5273285, 31.25515044],
          visible: true,
          prism: {
            path: [[121.5389385, 31.21515044], [121.5389385, 31.29615044], [121.5273285, 31.21515044]],
            altitude: 500,
            topFillColor: '#5679ea',
            topFillOpacity: 0.5,
            sideFillColor: '#5679ea',
            sideFillOpacity: 0.9,
            events: {
              click(e) {
                alert('click prism');
              },
            },
          }
        };
      },
      methods: {
        switchVisible(){
          this.visible = !this.visible;
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
events | Object | 事件，key值为事件名称，提供默认的init事件，用于初始化后的操作.具体事件说明见下面的事件列表


## 动态属性

支持响应式。

名称 | 类型 | 说明
---|---|---|
path | Array [[x,y],[x,y]] | 底面多边形的点数组
altitude | Number | 棱柱的高，单位：米
topFillColor | String | 顶面填充颜色
topFillOpacity | Number | 顶面填充颜色透明度，取值范围0 - 1
sideFillColor | String | 侧面填充颜色
sideFillOpacity | Number | 侧面填充颜色透明度，取值范围0 - 1
enableMassClear | Boolean | 是否在调用map.clearOverlays清除此覆盖物，默认为true


## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.Polyline](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a3b10) | 获取`polyline`实例
$$getPath() | [ [lng:Number, lat:Number] ] | 获取 `prism` 获取折线路径的节点数组


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
