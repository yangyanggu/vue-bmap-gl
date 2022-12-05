# 地图

地图组件

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="bmap-page-container">
      <el-bmap ref="map" :lazy="2000" :map-style-v2="darkStyle" :preserve-drawing-buffer="true" vid="bmapDemo" :min-zoom="10" :max-zoom="22" :tilt="tilt" :heading="heading" :bmap-manager="bmapManager" :center="center" :zoom="zoom" @click="clickMap" class="bmap-demo">
      </el-bmap>

      <div class="toolbar">
        <button @click="getMap()">get map</button>
      </div>
    </div>
  </template>

  <style>
    .bmap-demo {
      height: 300px;
    }
  </style>

  <script>
    // NPM 方式
    //  import { BMapManager } from 'vue-bmap-gl';
    // CDN 方式
    let bmapManager = new VueBMap.BMapManager();
    
    let darkStyle = {
      styleJson: [{
              featureType: 'background',
              elementType: 'geometry',
              stylers: {
                  color: '#070c17ff'
              }
          }, {
              featureType: 'poilabel',
              elementType: 'labels.icon',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'road',
              elementType: 'labels',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'road',
              elementType: 'geometry.fill',
              stylers: {
                  color: '#151e25ff'
              }
          }, {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: {
                  color: '#ffffff00'
              }
          }, {
              featureType: 'highway',
              elementType: 'geometry.fill',
              stylers: {
                  color: '#27303bff'
              }
          }, {
              featureType: 'highway',
              elementType: 'geometry.stroke',
              stylers: {
                  color: '#ffffff00'
              }
          }, {
              featureType: 'nationalway',
              elementType: 'geometry.fill',
              stylers: {
                  color: '#27303bff'
              }
          }, {
              featureType: 'nationalway',
              elementType: 'geometry.stroke',
              stylers: {
                  color: '#ffffff00'
              }
          }, {
              featureType: 'provincialway',
              elementType: 'geometry.fill',
              stylers: {
                  color: '#27303bff'
              }
          }, {
              featureType: 'provincialway',
              elementType: 'geometry.stroke',
              stylers: {
                  color: '#ffffff00'
              }
          }, {
              featureType: 'railway',
              elementType: 'geometry',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'highwaysign',
              elementType: 'labels',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'highwaysign',
              elementType: 'labels.icon',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'nationalwaysign',
              elementType: 'labels.icon',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'nationalwaysign',
              elementType: 'labels',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'provincialwaysign',
              elementType: 'labels',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'provincialwaysign',
              elementType: 'labels.icon',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'tertiarywaysign',
              elementType: 'labels',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'tertiarywaysign',
              elementType: 'labels.icon',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'subwaylabel',
              elementType: 'labels',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'subwaylabel',
              elementType: 'labels.icon',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'poilabel',
              elementType: 'labels.text.fill',
              stylers: {
                  color: '#80868dff'
              }
          }, {
              featureType: 'poilabel',
              elementType: 'labels.text.stroke',
              stylers: {
                  color: '#ffffff00'
              }
          }, {
              featureType: 'districtlabel',
              elementType: 'labels.text.fill',
              stylers: {
                  color: '#71767aff'
              }
          }, {
              featureType: 'districtlabel',
              elementType: 'labels.text.stroke',
              stylers: {
                  color: '#ffffff00'
              }
          }, {
              featureType: 'poilabel',
              elementType: 'labels',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'airportlabel',
              elementType: 'labels',
              stylers: {
                  visibility: 'on'
              }
          }, {
              featureType: 'airportlabel',
              elementType: 'labels.icon',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'airportlabel',
              elementType: 'labels.text.fill',
              stylers: {
                  color: '#80868dff'
              }
          }, {
              featureType: 'airportlabel',
              elementType: 'labels.text.stroke',
              stylers: {
                  color: '#ffffff00'
              }
          }, {
              featureType: 'manmade',
              elementType: 'labels',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'manmade',
              elementType: 'geometry',
              stylers: {
                  color: '#070c17ff'
              }
          }, {
              featureType: 'water',
              elementType: 'labels',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'water',
              elementType: 'geometry',
              stylers: {
                  color: '#141d27ff'
              }
          }, {
              featureType: 'green',
              elementType: 'geometry',
              stylers: {
                  color: '#122228ff',
                  visibility: 'off'
              }
          }, {
              featureType: 'subway',
              elementType: 'geometry',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'highway',
              elementType: 'labels',
              stylers: {
                  visibility: 'on'
              }
          }, {
              featureType: 'highway',
              elementType: 'labels.text.stroke',
              stylers: {
                  color: '#ffffff00'
              }
          }, {
              featureType: 'highway',
              elementType: 'labels.text.fill',
              stylers: {
                  color: '#5f6468ff'
              }
          }, {
              featureType: 'town',
              elementType: 'labels',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'village',
              elementType: 'labels',
              stylers: {
                  visibility: 'off'
              }
          }, {
              featureType: 'highway',
              elementType: 'geometry',
              stylers: {
                  weight: 3
              }
          }, {
              featureType: 'cityhighway',
              elementType: 'geometry.fill',
              stylers: {
                  color: '#27303bff'
              }
          }, {
              featureType: 'arterial',
              elementType: 'geometry.fill',
              stylers: {
                  color: '#27303bff'
              }
          }, {
              featureType: 'arterial',
              elementType: 'geometry.stroke',
              stylers: {
                  color: '#ffffff00'
              }
          }, {
              featureType: 'cityhighway',
              elementType: 'geometry.stroke',
              stylers: {
                  color: '#ffffff00'
              }
          }]
      }
    
    module.exports = {
      data: function() {
        return {
          bmapManager,
          zoom: 16,
          center: [121.59996, 31.197646],
          tilt: 60,
          heading: 0,
          darkStyle,
          timer: null,
          events: {
            init: (o) => {
              console.log(o.getCenter())
              console.log(this.$refs.map.$$getInstance())
              this.panMap();
            },
            'moveend': () => {
            },
            'zoomchange': () => {
            },
            'click': (e) => {
              alert('map clicked');
            },
            tilesloaded: (e) => {
              console.log('tilesloaded')
            }
          },
        };
      },
      mounted() {
        let change = () =>{
          clearTimeout(this.timer);
          window.removeEventListener('hashchange',change)
        }
        window.addEventListener('hashchange',change)
      },
      methods: {
        getMap() {
          // bmap vue component
          console.log(bmapManager._componentMap);
          // 百度 map instance
          console.log(bmapManager._map);
        },
        panMap() {
            this.timer = setTimeout( () => {
                this.center = [(this.center[0]+0.0001), this.center[1]];
                this.panMap();
            },1000);
        },
        clickMap(e) {
          alert('map clicked');
          console.log('click map: ', e)
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
bmapManager| BMapManager | 地图管理对象。
events | Object | 事件
lazy | Number | 延时加载地图，单位 毫秒，默认-1,不进行延时加载
preserveDrawingBuffer | Boolean | 是否允许webgl缓存，设置为true时支持地图截图功能，默认false。地图截图方法：map.getMapScreenshot()

## 动态属性

支持响应式。

名称 | 类型 | 说明
---|---|---|
zoom | Number | 地图当前缩放级别
minZoom | Number | 地图允许展示的最小级别
maxZoom | Number | 地图允许展示的最大级别
center | Array | 地图中心点坐标值
tilt | Number | 倾斜角度
heading | Number | 旋转角度
mapType | String | 地图类型,可选值：B_NORMAL_MAP（普通街道视图） 、B_EARTH_MAP（地球卫星视图） 
enableAutoResize | Boolean | 开启自动适应地图容器变化，默认启用
enableDragging	| Boolean |	地图拖拽，默认启用
enableInertialDragging | Boolean | 地图惯性拖拽，默认禁用
enableScrollWheelZoom | Boolean | 允许地图可被鼠标滚轮缩放，默认启用
enableContinuousZoom | Boolean | 双击平滑缩放效果，默认启用
enableResizeOnCenter | Boolean | 图区resize中心点不变
enableDoubleClickZoom | Boolean | 地图双击缩放，左键双击放大、右键双击缩小
enableKeyboard | Boolean | 键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级
enablePinchToZoom | Boolean | 双指缩放地图
enableRotateGestures | Boolean | 允许通过手势旋转地图
enableTiltGestures | Boolean | 允许通过手势倾斜地图
bounds | [Bounds](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a1b2) | 地图当前视野范围的矩形区域，以地理坐标表示
draggingCursor | String | 拖拽地图时的鼠标指针样式
mapStyleV2 | Object | 设置个性化地图，参数为个性化配置对象，示例：{styleId:'', styleJson: {}},参数二选一使用
trafficVisible | Boolean | 设置是否显示交通流量图层
defaultCursor | String | 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范

## BmapManager

用于获取地图实例，以及获得地图内组件的实例。

名称 | 参数 | 返回类型 | 说明
---|--- | --- |---|
getMap | | AMap.Map | 返回地图实例，注入该管理实例的组件的地图实例
getChildInstance| vid | instance | 返回 vid 对应的组件实例

## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.Map](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a0b0) | 获取地图实例
$$getCenter()   | [lng: Number, lat: Number] | 获取地图中心


## 事件

事件 | 参数 | 说明
---|---|---|
init | | 组件初始化成功后调用
load | {type, target, pixel, point, zoom} | 调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块
click | {type, target, point, pixel, overlay} | 左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick
dblclick | {type, target, pixel, point} | 鼠标双击地图时会触发此事件
rightdblclick | {type, target, point, pixel, overlay} | 右键双击地图时触发此事件
maptypechange | {type, target} | 地图类型发生变化时触发此事件
mousemove | {type, target, point, pixel, overlay} | 鼠标在地图上移动时触发
mouseover | {type, target} | 鼠标移入地图区域时触发此事件
mouseout | {type, target} | 鼠标移出地图区域时触发此事件
movestart | {type, target} | 地图移动开始时触发此事件
moving | {type, target} | 地图移动过程中触发此事件
moveend | {type, target} | 地图移动结束时触发此事件
zoomstart | {type, target} | 地图更改缩放级别开始时触发触发此事件
zoomend | {type, target} | 地图更改缩放级别结束时触发触发此事件
addoverlay | {type, target} | 当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件
addcontrol | {type, target} | 当使用Map.addControl()方法向地图中添加单个控件时会触发此事件
removecontrol | {type, target} | 当使用Map.removeControl()方法移除单个控件时会触发此事件
removeoverlay | {type, target} | 当使用Map.removeOverlay()方法移除单个覆盖物时会触发此事件
clearoverlays | {type, target} | 当使用Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件
dragstart | {type, target, pixel, point} | 开始拖拽地图时触发
dragging | {type, target, pixel, point} | 拖拽地图过程中触发
dragend | {type, target, pixel, point} | 停止拖拽地图时触发
addtilelayer | {type, target} | 添加一个自定义地图图层时触发此事件
removetilelayer | {type, target} | 移除一个自定义地图图层时触发此事件
load | {type, target, pixel, point, zoom} | 调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块
resize | {type, target, size} | 地图可视区域大小发生变化时会触发此事件
hotspotclick | {type, target, spots} | 点击热区时触发此事件
hotspotover | {type, target, spots} | 鼠标移至热区时触发此事件
hotspotout | {type, target, spots} | 鼠标移出热区时触发此事件
tilesloaded | {type, target} | 当地图所有图块完成加载时触发此事件
touchstart | {type, target, point,pixel} | 触摸开始时触发此事件，仅适用移动设备
touchmove | {type, target, point,pixel} | 触摸移动时触发此事件，仅适用移动设备
touchend | {type, target, point,pixel} | 触摸结束时触发此事件，仅适用移动设备
longpress | {type, target, point,pixel} | 长按事件，仅适用移动设备
