# 兼容高德原生 SDK

---

`vue-bmap-gl` 能够抛开百度原生 SDK 覆盖大多数场景，但对于部分定制化程度较高的场景而言，可能还是需要引入高德原生 SDK 来支持。这章将介绍如何在 vue-bmap-gl 中使用高德 SDK。


## 实例方式

对于大多数 `vue-bmap-gl` 组件，都有 `init` 这个 `event`，参数为高德的实例，通过这样暴露高德实例的方式，开发者能够非常自由地将原生 SDK 和 vue-bmap-gl 结合起来使用。

这里以 `el-bmap` 组件举例。`el-bmap` 比较特殊，它同时还支持一个 `amap-manager` 属性，通过这个属性，可以在任何地方拿到高德原生 `BMapGL.Map` 实例。下面的例子，将介绍两种方式的使用。

*若涉及到高德原生 `BMapGL` 需要注意的点：*

* 确保 `vue-bmap-gl` 的导入名不是 `BMapGL`，推荐 `import VueBMapGL from 'vue-bmap-gl'` 避免和高德全局的 `BMapGL` 冲突。
* 若 `eslint` 报错 `BMapGL is undefined` 之类的错误。请将 `BMapGL` 配置到 `.eslintrc` 的 `globals` 中。

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="amap-page-container">
      <el-bmap vid="amapDemo"  :center="center" :bmap-manager="bmapManager" :zoom="zoom" :events="events" class="amap-demo">
      </el-bmap>

      <div class="toolbar">
        <button @click="add()">add marker</button>
      </div>
    </div>
  </template>

  <style>
    .amap-demo {
      height: 300px;
    }
  </style>

  <script>
    // NPM 方式
    // import { BMapManager } from 'vue-bmap-gl';
    // CDN 方式
    let bmapManager = new VueBMap.BMapManager();
    module.exports = {
      data: function() {
        return {
          zoom: 8,
          center: [121.59996, 31.197646],
          bmapManager,
          events: {
            init(o) {
              let marker = new BMapGL.Marker({
                position: [121.59996, 31.197646]
              });

              marker.setMap(o);
            }
          }
        };
      },

      methods: {
        add() {
          let o = bmapManager.getMap();
          let lng = 121 + Math.random();
          let lat = 31 + Math.random();
          console.log(lng, lat);
          let marker = new BMapGL.Marker(new BMapGL.Point(lng, lat));
          o.addOverlay(marker);
        }
      }
    };
  </script>

</script>
