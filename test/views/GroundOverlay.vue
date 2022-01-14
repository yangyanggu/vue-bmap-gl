<template>
  <div class="map-container">
    <el-bmap
      :center="center"
      :zoom="zoom"
      @click="clickMap"
      @init="initMap"
      @moveend="moveendMap"
    >
      <el-bmap-ground-overlay
        v-for="(groundimage,index) in groundimages"
        :key="index"
        :url="groundimage.url"
        :visible="groundimage.visible"
        :bounds="groundimage.bounds"
        @click="click"
      />
    </el-bmap>
    <div class="control-container">
      <el-button @click="changeCenter">
        更换中心点
      </el-button>
      <el-button @click="toggleVisible">
        切换显隐
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ElBmap from "@vue-map/packages/map/bmap.vue";
import ElBmapGroundOverlay from "@vue-map/packages/GroundOverlay/GroundOverlay.vue";

export default defineComponent({
  name: "Map",
  components: {
    ElBmapGroundOverlay,
    ElBmap,
  },
  data(){
    return {
      center: [121.5273285, 31.21515044],
      zoom: 7,
      groundimages: [
        {
          url: 'vehicle.png',
          visible: true,
          bounds: [[122.9273285, 32.31515044], [121.5273285, 31.21515044]],
        }
      ]
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
    click(e) {
      console.log('click overlay',e);
      alert('click groundimage');
    },
    toggleVisible() {
      this.groundimages[0].visible = !this.groundimages[0].visible;
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
