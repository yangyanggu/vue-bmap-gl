<template>
  <div class="map-container">
    <el-bmap
      :center="center"
      :zoom="zoom"
      @click="clickMap"
      @init="initMap"
      @moveend="moveendMap"
    >
      <el-bmap-info-window
        v-model:visible="currentWindow.visible"
        :title="currentWindow.title"
        :position="currentWindow.position"
        :events="currentWindow.events"
      >
        <span>{{ currentWindow.content }}</span>
      </el-bmap-info-window>
    </el-bmap>
    <div class="control-container">
      <el-button @click="changeCenter">
        更换中心点
      </el-button>
      <el-button @click="toggleVisible">
        切换显隐
      </el-button>
      <el-button @click="changePosition()">
        修改弹出框位置
      </el-button>
      <el-button @click="changeTitle()">
        修改弹出框标题
      </el-button>
      <el-button @click="changeContent()">
        修改弹出框内容
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ElBmap from "@vue-map/packages/map/bmap.vue";
import ElBmapInfoWindow from "@vue-map/packages/InfoWindow/InfoWindow.vue";

export default defineComponent({
  name: "Map",
  components: {
    ElBmapInfoWindow,
    ElBmap,
  },
  data(){
    return {
      center: [121.5273285, 31.21515044],
      zoom: 16,
      currentWindow: {
        title: '标题',
        position: [121.5163285, 31.21515044],
        content: 'ssssssssss',
        visible: false
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
    changePosition() {
      const position = this.currentWindow.position;
      this.currentWindow.position = [position[0] + 0.002, position[1] - 0.002];
    },
    changeTitle() {
      this.currentWindow.title = `标题：${new Date().getTime()  }`;
    },
    changeContent(){
      this.currentWindow.content = `内容：${new Date().toString()}`
    },
    toggleVisible(){
      this.currentWindow.visible = !this.currentWindow.visible;
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
