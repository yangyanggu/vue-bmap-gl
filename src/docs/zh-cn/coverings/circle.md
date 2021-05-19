# 圆形

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="bmap-page-container">
      <el-bmap vid="amapDemo" :zoom="zoom" :center="center" class="bmap-demo">
        <el-bmap-circle v-for="(circle,index) in circles" :key="index" :center="circle.center" :visible="circle.visible" :radius="circle.radius" :fill-opacity="circle.fillOpacity" :events="circle.events" :enable-editing="circle.enableEditing"></el-bmap-circle>
      </el-bmap>
      <div class="toolbar">
        <button @click="toggleEdit()">切换编辑状态</button>
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
          zoom: 15,
          center: [121.5273285, 31.21515044],
          circles: [
            {
              center: [121.5273285, 31.21515044],
              radius: 200,
              enableEditing: true,
              fillOpacity: 0.5,
              visible: true,
              events: {
                click: () => {
                  alert('click');
                },
                lineupdate: (e,target) => {
                    console.log('lineupdate', e, target);
                }
              }
            }
          ]
        }
      },
      methods: {
        toggleEdit(){
            this.circles.forEach( v => {
                v.enableEditing = !v.enableEditing;
            })
        },
        toggleVisible(){
            this.circles[0].visible = !this.circles[0].visible;
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
center | Array[x,y] | 圆心位置
radius | Number | 圆半径，单位:米
strokeColor | String | 线条颜色，使用16进制颜色代码赋值。
strokeOpacity | Number | 轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
strokeWeight | Number | 轮廓线宽度,以像素为单位
fillColor | String | 圆形填充颜色,使用16进制颜色代码赋值。
fillOpacity | Float | 圆形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
strokeStyle | String | 轮廓线样式，实线:solid，虚线:dashed
enableMassClear | Boolean | 是否在调用map.clearOverlays清除此覆盖物，默认为true
enableEditing | Boolean | 是否启用线编辑，默认为false
enableClicking | Boolean | 是否响应点击事件，默认为true
visible | Boolean | 覆盖物显隐控制,默认true

## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.Circle](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a3b14) | 获取`circle`实例
$$getCenter() | [lng:Number,lat:Number] | 获取 `circle` 圆心坐标
$$getRadius | Number | 返回圆形的半径，单位为米

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
lineupdate | {type, target}	| 圆形覆盖物的属性发生变化时触发此事件
