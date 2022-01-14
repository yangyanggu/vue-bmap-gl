<template>
  <div class="map-container">
    <el-bmap
      :center="center"
      :zoom="zoom"
      @click="clickMap"
      @init="initMap"
      @moveend="moveendMap"
    >
      <el-bmap-circle
        v-for="(circle,index) in circles"
        :key="index"
        :center="circle.center"
        :visible="circle.visible"
        :radius="circle.radius"
        :fill-opacity="circle.fillOpacity"
        :enable-editing="circle.enableEditing"
        @click="click"
      />
    </el-bmap>
    <div class="control-container">
      <el-button @click="changeCenter">
        更换中心点
      </el-button>
      <el-button @click="toggleEdit()">
        切换编辑状态
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
import ElBmapCircle from "@vue-map/packages/Circle/Circle.vue";

export default defineComponent({
  name: "Map",
  components: {
    ElBmapCircle,
    ElBmap,
  },
  data(){
    return {
      center: [121.5273285, 31.21515044],
      zoom: 16,
      circles: [
        {
          center: [121.5273285, 31.21515044],
          radius: 200,
          enableEditing: true,
          fillOpacity: 0.5,
          visible: true,
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
    click(e){
      console.log('click circle', e);
    },
    toggleEdit(){
      this.circles.forEach( v => {
        v.enableEditing = !v.enableEditing;
      })
    },
    toggleVisible(){
      this.circles[0].visible = !this.circles[0].visible;
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
