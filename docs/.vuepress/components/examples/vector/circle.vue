<template>
  <div class="bmap-page-container">
    <el-bmap :zoom="zoom" :center="center">
      <el-bmap-circle
          :center="circleCenter"
          :visible="visible"
          :radius="radius"
          :fill-opacity="fillOpacity"
          :enable-editing="enableEditing"
          @click="click"
          @lineupdate="lineupdate"
      ></el-bmap-circle>
    </el-bmap>
  </div>
  <div class="control-container">
    <button @click="toggleEdit()">切换编辑状态</button>
    <button @click="toggleVisible">切换显隐</button>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data () {
    return {
      zoom: 15,
      center: [121.5273285, 31.21515044],
      circleCenter: [121.5273285, 31.21515044],
      radius: 200,
      enableEditing: true,
      fillOpacity: 0.5,
      visible: true,
    }
  },
  methods: {
    toggleEdit(){
      this.enableEditing = !this.enableEditing;
    },
    toggleVisible(){
      this.visible = !this.visible;
    },
    click: () => {
      alert('click');
    },
    lineupdate: (e,target) => {
      console.log('lineupdate', e, target);
    }
  }
})
</script>
