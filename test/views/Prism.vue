<template>
  <div class="map-container">
    <el-bmap
      :center="center"
      :zoom="zoom"
      :tilt="75"
      @click="clickMap"
      @init="initMap"
      @moveend="moveendMap"
    >
      <el-bmap-prism
        :path="prism.path"
        :visible="visible"
        :altitude="prism.altitude"
        :top-fill-color="prism.topFillColor"
        :top-fill-opacity="prism.topFillOpacity"
        :side-fill-color="prism.sideFillColor"
        :side-fill-opacity="prism.sideFillOpacity"
        @click="click"
      />
    </el-bmap>
    <div class="control-container">
      <el-button @click="changeCenter">
        更换中心点
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ElBmap from "@vue-map/packages/map/bmap.vue";
import ElBmapPrism from "@vue-map/packages/Prism/Prism.vue";

export default defineComponent({
  name: "Map",
  components: {
    ElBmapPrism,
    ElBmap,
  },
  data(){
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
      }
    }
  },
  methods: {
    clickMap(e){
      console.log('click map: ', e);
    },
    initMap(map){
      console.log('init map: ', map);
    },
    completeMap(e){
      console.log(e);
    },
    moveendMap(e){
      console.log('moveendMap: ', e);
    },
    changeCenter(){
      const lng = this.center[0]+0.01;
      const lat = this.center[1]+0.01;
      this.center = [lng, lat];
    },
    click(){
      alert('click prism');
    }
  }
})
</script>

<style scoped>
.map-container{
  width: 100%;
  height: 100%;
  position: relative;
}
.control-container{
  position: absolute;
  padding: 24px;
  background: #ffffff;
  z-index: 11;
  bottom: 40px;
  left: 150px;
  right: 150px;
}
</style>
