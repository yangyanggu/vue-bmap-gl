# 地图

获取地图实例方式有三种：
1、使用BMapManager
2、在events的init事件
3、通过ref获取地图组件对象，然后调用$$getInstance方法

详细使用请查看下面的示例，可以在控制台看出打印效果

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="bmap-page-container">
      <el-bmap ref="map" vid="bmapDemo" :min-zoom="10" :max-zoom="22" :tilt="tilt" :heading="heading" :bmap-manager="bmapManager" :center="center" :zoom="zoom" :events="events" class="bmap-demo">
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
    
    module.exports = {
      data: function() {
        return {
          bmapManager,
          zoom: 16,
          center: [121.59996, 31.197646],
          tilt: 60,
          heading: 0,
          map: null,
          events: {
            init: (o) => {
              this.map = o;
              console.log(o.getCenter())
              console.log(this.$refs.map.$$getInstance())
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
          console.log('bmapManager: ',bmapManager.getMap());
          console.log('events init: ', this.map);
          console.log('$refs: ', this.$refs.map.$$getInstance())
        },
      }
    };
  </script>

</script>

