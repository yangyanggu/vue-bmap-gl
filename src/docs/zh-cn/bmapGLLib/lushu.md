# 说明
该页面仅用于加载plugin后调用的示例，所有扩展库的调用都要放在地图的init事件之后

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="bmap-page-container">
      <el-bmap ref="map" vid="bmapDemo" :min-zoom="10" :max-zoom="22" :tilt="tilt" :heading="heading" :bmap-manager="bmapManager" :center="center" :zoom="zoom" :events="events" class="bmap-demo">
      </el-bmap>

      <div class="toolbar">
        <button @click="start">开始</button>
        <button @click="pause">暂停</button>
        <button @click="stop">停止</button>
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

    let lushu = null;
    
    module.exports = {
      data: function() {
        return {
          bmapManager,
          zoom: 13,
          center: [116.404, 39.915],
          tilt: 60,
          heading: 0,
          events: {
            init: (o) => {
              this.startDemo(o);
            },
            'moveend': () => {
            },
            'zoomchange': () => {
            },
            'click': (e) => {
              alert('map clicked');
            }
          },
        };
      },
      mounted() {
      },
      methods: {
        getMap() {
          // bmap vue component
          console.log(bmapManager._componentMap);
          // 百度 map instance
          console.log(bmapManager._map);
        },
        startDemo(map) {
          var drv = new BMapGL.DrivingRoute('北京', {
              onSearchComplete: (res) => {
                  if (drv.getStatus() == BMAP_STATUS_SUCCESS) {
                      var plan = res.getPlan(0);
                      var arrPois =[];
                      for(var j=0;j<plan.getNumRoutes();j++){
                          var route = plan.getRoute(j);
                          arrPois= arrPois.concat(route.getPath());
                      }
                      map.addOverlay(new BMapGL.Polyline(arrPois, {strokeColor: '#111'}));
                      map.setViewport(arrPois);
      
                      lushu = new BMapGLLib.LuShu(map, arrPois, {
                          defaultContent: '', // "从天安门到百度大厦"
                          autoView: true, // 是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
                          icon: new BMapGL.Icon('./assets/images/car.png', new BMapGL.Size(32, 32), {anchor: new BMapGL.Size(10, 10)}),
                          speed: 500,
                          enableRotation: true, // 是否设置marker随着道路的走向进行旋转
                          // landmarkPois: [
                          //     {lng:116.314782, lat:39.913508, html:'加油站', pauseTime:2},
                          //     {lng:116.315391, lat:39.964429, html:'高速公路收费<div><img src="//map.baidu.com/img/logo-map.gif"/></div>', pauseTime:3},
                          //     {lng:116.381476, lat:39.974073, html:'肯德基早餐', pauseTime:2}
                          // ]
                      });
                  }
              }
          });
          var start=new BMapGL.Point(116.404844, 40);
          var end=new BMapGL.Point(116.308102, 40.056057);
          drv.search(start, end);
        },
        start(){
          lushu.start();
        },
        pause(){
          lushu.pause();
        },
        stop(){
          lushu.stop();
        }
      }
    };
  </script>

</script>
