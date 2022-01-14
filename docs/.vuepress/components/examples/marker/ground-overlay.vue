<template>
  <div class="bmap-page-container">
    <el-bmap :zoom="zoom" :center="center">
      <el-bmap-ground-overlay :url="url" :visible="visible" :bounds="bounds" @click="click"></el-bmap-ground-overlay>
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
      zoom: 7,
      center: [121.5273285, 31.21515044],
      url: '/images/vehicle.png',
      visible: true,
      bounds: [[122.9273285, 32.31515044], [121.5273285, 31.21515044]],
    }
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
    click(){
      alert('click image')
    }
  }
})
</script>
