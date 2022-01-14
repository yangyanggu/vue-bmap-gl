<template>
  <div class="bmap-page-container">
    <el-bmap :zoom="zoom" :center="center" ref="map">
      <el-bmap-polygon
          :visible="visible"
          :path="path"
          :enable-editing="enableEditing"
          @click="click"
      ></el-bmap-polygon>
    </el-bmap>
  </div>
  <div class="control-container">
    <button @click="switchVisible">{{visible ? '隐藏' : '显示'}}</button>
    <button @click="switchEdit">{{enableEditing ? '取消编辑' : '编辑'}}</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data () {
    return {
      zoom: 15,
      center: [121.5273285, 31.21515044],
      visible: true,
      enableEditing: true,
      path: [[121.5273285, 31.21515044], [121.5293285, 31.21515044], [121.5293285, 31.21915044], [121.5273285, 31.21515044]],
    }
  },
  methods: {
    switchVisible(){
      this.visible = !this.visible;
    },
    switchEdit(){
      this.enableEditing = !this.enableEditing;
    },
    click: () => {
      alert('click polygon');
    }
  }
})
</script>
