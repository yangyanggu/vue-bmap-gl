<template>
  <div class="bmap-page-container">
    <el-bmap ref="map"  :zoom="zoom" :center="center"  :preserve-drawing-buffer="true" >
      <el-bmap-marker :position="position" :icon="icon" :label="label" :visible="visible" :enable-dragging="enableDragging"></el-bmap-marker>
    </el-bmap>
  </div>
  <div class="control-container">
    <button type="button" name="button" @click="toggleVisible">{{visible ? '隐藏' : '显示'}}</button>
    <button type="button" name="button" @click="changeDragging">{{enableDragging ? '禁止拖拽' : '允许拖拽'}}</button>
    <button type="button" name="button" @click="changePosition">修改位置</button>
    <button type="button" name="button" @click="getMapScreenshot">截图</button>
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
      title: 'markers1',
      visible: true,
      icon: {
        url: '/images/vehicle.png',
        size: [44, 88],
      },
      label: {
        content: 'markers1',
        style: {
          color: '#dcdcdc'
        }
      },
      enableDragging: false,
    };
  },
  methods: {
    changePosition() {
      let position = this.position;
      this.position = [position[0] + 0.002, position[1] - 0.002];
    },
    changeDragging() {
      this.enableDragging = !this.enableDragging;
    },
    toggleVisible() {
      this.visible = !this.visible;
    },
    getMapScreenshot(){
      let screen = this.$refs.map.$$getInstance().getMapScreenshot();
      console.log(screen);
    },
    click: () => {
      alert('click marker');
    },
    dragend: () => {
      console.log('---event---: dragend');
    }
  }
})
</script>
