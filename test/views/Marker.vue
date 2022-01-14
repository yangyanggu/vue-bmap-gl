<template>
  <div class="map-container">
    <el-bmap
      :center="center"
      :zoom="zoom"
      @click="clickMap"
      @init="initMap"
      @moveend="moveendMap"
    >
      <el-bmap-marker
        :position="position"
        :visible="visible"
        :icon="icon"
        :label="label"
        @click="clickMarker"
      />
    </el-bmap>
    <div class="control-container">
      <el-button @click="changeCenter">
        更换中心点
      </el-button>
      <el-button @click="toggleVisible">
        切换显隐
      </el-button>
      <el-button @click="changeLabel">
        修改label
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ElBmap from "@vue-map/packages/map/bmap.vue";
import ElBmapMarker from "@vue-map/packages/Marker/Marker.vue";

export default defineComponent({
  name: "Map",
  components: {
    ElBmapMarker,
    ElBmap,
  },
  data(){
    return {
      center: [121.5273285, 31.21515044],
      zoom: 16,
      position: [121.5273285, 31.21515044],
      visible: true,
      icon: {
        url: './vehicle.png',
        size: [50,50]
      },
      label: {
        content: '123'
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
    click(e){
      console.log('click circle', e);
    },
    toggleVisible(){
      this.visible = !this.visible;
    },
    changeLabel(){
      this.label.content = new Date().toString()
    },
    clickMarker(e){
      alert('click marker');
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
