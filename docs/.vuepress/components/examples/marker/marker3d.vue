<template>
  <div class="bmap-page-container">
    <el-bmap :zoom="zoom" :center="center">
      <el-bmap-marker3d :icon="icon" :position="position" :height="height"></el-bmap-marker3d>
    </el-bmap>
  </div>
  <div class="control-container">
    <button type="button" name="button" @click="changePosition">修改位置</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'bmap-page',
  data() {
    return {
      zoom: 14,
      center: [121.5273285, 31.21515044],
      position: [121.5273285, 31.21515044],
      height: 300,
      icon: {
        url: '/images/vehicle.png',
        size: [44, 88],
      },
    };
  },
  methods: {
    changePosition() {
      let position = this.position;
      this.position = [position[0] + 0.002, position[1] - 0.002];
    },
    click(){
      alert('click marker');
    },
  }
})
</script>
