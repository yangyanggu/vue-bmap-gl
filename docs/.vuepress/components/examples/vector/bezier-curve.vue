<template>
  <div class="bmap-page-container">
    <el-bmap  :zoom="zoom" :center="center">
      <el-bmap-bezier-curve
          :visible="visible"
          :path="path"
          :control-points="controlPoints"
          :stroke-color="strokeColor"
          :stroke-style="strokeStyle"
          :stroke-opacity="strokeOpacity"
          @click="click"
      >
      </el-bmap-bezier-curve>
    </el-bmap>
  </div>
  <div class="control-container">
    <button @click="toggleVisible">切换显隐</button>
  </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data () {
    return {
      zoom: 12,
      center: [116.380298, 39.907771],
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
      visible: true,
      strokeDasharray: [10, 10],
      strokeColor: "#ff33ff", //线颜色
      strokeOpacity: 1, //线透明度
      strokeWeight: 3, //线宽
      strokeStyle: "solid", //线样式
    }
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
    click(){
      alert('click');
    }
  }
})
</script>
