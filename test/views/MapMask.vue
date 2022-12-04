<template>
  <div class="map-container">
    <el-bmap
      :center="center"
      :zoom="zoom"
      @click="clickMap"
      @init="initMap"
      @moveend="moveendMap"
    >
      <el-bmap-map-mask
        :path="path"
        :is-map-mask="true"
        :is-building-mask="true"
        :is-poi-mask="true"
      />
    </el-bmap>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ElBmap from "@vue-map/packages/map/bmap.vue";
import ElBmapMapMask from "@vue-map/packages/MapMask/MapMask.vue";

export default defineComponent({
  name: "Map",
  components: {
    ElBmapMapMask,
    ElBmap,
  },
  data(){
    return {
      center: [121.5273285, 31.21515044],
      zoom: 16,
      enableEditing: true,
      path: [[121.5273285, 31.21515044], [121.5293285, 31.21515044], [121.5293285, 31.21915044], [121.5273285, 31.21515044]],
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
