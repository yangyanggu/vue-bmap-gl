<template>
  <div class="bmap-page-container">
    <el-bmap
      :center="center"
      :zoom="zoom"
      @click="clickMap"
      @init="initMap"
      @moveend="moveendMap"
    >
      <el-bmap-xyz-layer
        tile-url-template="https://ows.mundialis.de/services/service?&service=WMS&request=GetMap&layers=TOPO-WMS%2COSM-Overlay-WMS&styles=&format=image%2Fjpeg&transparent=false&version=1.1.1&width=256&height=256&srs=EPSG%3A3857&bbox=[b]"
        :use-thumb-data="true"
      />
    </el-bmap>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "XyzLayer",
  data() {
    return {
      center: [121.5273285, 31.21515044],
      zoom: 16,
    }
  },
  methods: {
    clickMap(e) {
      console.log('click map: ', e);
    },
    initMap(map) {
      console.log('init map: ', map);
    },
    completeMap(e) {
      console.log(e);
    },
    moveendMap(e) {
      console.log('moveendMap: ', e);
    },
  }
})
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.control-container {
  position: absolute;
  padding: 24px;
  background: #ffffff;
  z-index: 11;
  bottom: 40px;
  left: 150px;
  right: 150px;
}
</style>
