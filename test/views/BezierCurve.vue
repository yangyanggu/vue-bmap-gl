<template>
  <div class="map-container">
    <el-bmap
      :center="center"
      :zoom="zoom"
      @click="clickMap"
      @init="initMap"
    >
      <el-bmap-bezier-curve
        :visible="polyline.visible"
        :stroke-weight="polyline.strokeWeight"
        :draggable="polyline.draggable"
        :path="polyline.path"
        :control-points="polyline.controlPoints"
        :stroke-color="polyline.strokeColor"
        :stroke-style="polyline.strokeStyle"
        @click="click"
      />
    </el-bmap>
    <div class="control-container">
      <el-button @click="toggleVisible">
        {{ polyline.visible ? '隐藏标记' : '显示标记' }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ElBmap from "@vue-map/packages/map/bmap.vue";
import ElBmapBezierCurve from "@vue-map/packages/BezierCurve/BezierCurve.vue";

export default defineComponent({
  name: "Map",
  components: {
    ElBmapBezierCurve,
    ElBmap
  },
  data(){
    return {
      zoom: 13,
      center: [116.380298, 39.907771],
      polyline: {
        path: [
          [116.39, 39.91],
          [116.380298, 39.907771],
          [116.385298, 39.907771]
        ],
        controlPoints: [
          [116.37, 39.91],
          [116.38, 39.90],
          [116.40, 39.90]
        ],
        strokeDasharray: [10, 10],
        strokeColor: "#ff33ff", //线颜色
        strokeOpacity: 1, //线透明度
        strokeWeight: 3, //线宽
        strokeStyle: "solid", //线样式
        visible: true,
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
    changeEditable() {
      this.polyline.editable = !this.polyline.editable;
    },
    toggleVisible(){
      this.polyline.visible = !this.polyline.visible;
    },
    changeDraggable(){
      this.polyline.draggable = !this.polyline.draggable;
    },
    click(e) {
      alert('click BezierCurve');
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
  z-index: 10;
  bottom: 40px;
  left: 150px;
  right: 150px;
}
</style>
