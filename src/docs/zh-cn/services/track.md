# 车辆跟踪

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="amap-page-container">
      <el-bmap vid="amapDemo" :zoom="zoom" :center="center" :tilt="75" class="amap-demo">
        <el-bmap-track ref="track" :tilt="45" :heading="heading"  :position="position" :auto-start="true" :only-view="true" :events="{init: ()=>{/*startMove()*/}}"></el-bmap-track>
      </el-bmap>
    </div>
  </template>

  <style>
    .amap-demo {
      height: 600px;
    }
  </style>

  <script>
  
  function bearCar(preLonlat, currentLonlat) {
    let point1 = turf.point(preLonlat);
    let point2 = turf.point(currentLonlat);
    return turf.bearing(point1,point2);
  }
    let path = [[120.030407,31.812844],[120.030527,31.812852],[120.031171,31.812851],[120.033331,31.812821],[120.033492,31.812818],[120.033622,31.812816],[120.034306,31.812803],[120.035009,31.81279],[120.036215,31.812777],[120.036276,31.812776],[120.036617,31.81277],[120.03715,31.81277],[120.0372,31.812769],[120.038808,31.812749],[120.03916,31.812742],[120.039773,31.812731],[120.039914,31.812728],[120.040084,31.812725],[120.040647,31.812715],[120.040918,31.81271],[120.041702,31.812695],[120.041702,31.812695],[120.041692,31.812606],[120.041591,31.811567],[120.04153,31.811268],[120.041358,31.810401],[120.040984,31.807557],[120.040741,31.805661],[120.04073,31.805321],[120.04076,31.80512],[120.04091,31.803797],[120.040919,31.803647],[120.040929,31.803447],[120.040638,31.803452],[120.040537,31.803454],[120.035895,31.803541],[120.035895,31.803541],[120.035633,31.803546]];
  
    module.exports = {
      name: 'bmap-page',
      data() {
        
        return {
          zoom: 21,
          center: [path[0][0], path[0][1]],
          heading: 0,
          index: 1,
          position: [path[0][0], path[0][1]],
          timer: null,
        };
      },
      mounted(){
        this.moveCar();
      },
      beforeDestroy(){
        clearTimeout(this.timer);
      },
      methods: {
        startMove(){
            this.$refs.track.start();
        },
        moveCar(){
            let prePoint,point;
            if(this.index === path.length){
                prePoint = path[path.length-1];
                point = path[0];
                this.index = 0;
            }else{
                prePoint = path[this.index-1];
                point = path[this.index];
            }
            this.heading = bearCar(prePoint, point);
            this.position = point;
            this.index++;
            this.timer = setTimeout(() => {
                this.moveCar();
            }, 1000)
        }
      }
    };
  </script>

</script>


## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|
onlyView | Boolean | 是否不可控制地图，默认为true，默认情况下是不允许对地图进行操作
autoStart | Boolean | 是否在组件初始化成功后自动启动车辆跟踪
events | Object | 事件，key值为事件名称，提供默认的init事件，用于初始化后的操作.具体事件说明见下面的事件列表

## 动态属性
支持响应式。

名称 | 类型 | 说明
---|---|---|
position | Array [x,y] | 点标记在地图上显示的位置。
offset | Array [x,y] | 点相当于地图中心点的偏移位置，该值为像素值，默认：X为0，Y为地图中心向下移动 1/4 的地图高度。
icon | {url:'',size:[]} | 该值为车辆跟踪图标，详细参数说明见下面表，可为空。
heading | Number | 点的旋转角度，该值会转化为地图的旋转，设置中车辆角度一直指向北边，地图会根据角度进行旋转
tilt | Number | 地图倾斜角度，默认-1，使用地图当前倾斜角度
zoom | Number | 地图缩放层级，默认19

icon参数说明

名称 | 类型 | 说明
---|---|---|
url | String | 图标的图片地址，可以是http地址，也可以是base64，当前包含一个默认的图标
size | Array [x,y] | 默认[58,58], 图片的大小，根据实际图片大小来控制


## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
start() |  | 启动车辆跟踪
end() |  | 停止车辆跟踪

## 事件

事件 | 参数 | 说明
---|---|---|
init |  | 组件初始化后调用，可以在init中启动车辆跟踪
