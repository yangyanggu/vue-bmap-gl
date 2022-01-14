<template>
  <div class="map-container">
    <el-bmap
      :center="center"
      :zoom="zoom"
      @click="clickMap"
      @init="initMap"
      @moveend="moveendMap"
    >
      <el-bmap-menu>
        <el-bmap-menu-item
          text="测试"
          :callback="clickTest"
        />
      </el-bmap-menu>
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
import ElBmapMenu from "@vue-map/packages/Menu/Menu.vue";
import ElBmapMenuItem from "@vue-map/packages/MenuItem/MenuItem.vue";

export default defineComponent({
  name: "Map",
  components: {
    ElBmapMenuItem,
    ElBmapMenu,
    ElBmap,
  },
  data(){
    return {
      center: [120,31],
      zoom: 16,
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
    clickTest(){
      alert('点击测试按钮')
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
