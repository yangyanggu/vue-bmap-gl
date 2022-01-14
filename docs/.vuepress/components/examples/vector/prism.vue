<template>
  <div class="bmap-page-container">
    <el-bmap vid="bmap" :zoom="zoom" :center="center" class="bmap-demo">
      <el-bmap-prism
          :path="path"
          :visible="visible"
          :altitude="altitude"
          :top-fill-color="topFillColor"
          :top-fill-opacity="topFillOpacity"
          :side-fill-color="sideFillColor"
          :side-fill-opacity="sideFillOpacity"
          @click="click"
      ></el-bmap-prism>
    </el-bmap>
  </div>
  <div class="control-container">
    <button @click="switchVisible">{{visible ? '隐藏' : '显示'}}</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      zoom: 12,
      center: [121.5273285, 31.25515044],
      visible: true,
      path: [[121.5389385, 31.21515044], [121.5389385, 31.29615044], [121.5273285, 31.21515044]],
      altitude: 500,
      topFillColor: '#5679ea',
      topFillOpacity: 0.5,
      sideFillColor: '#5679ea',
      sideFillOpacity: 0.9,
    };
  },
  methods: {
    switchVisible(){
      this.visible = !this.visible;
    },
    click(e) {
      alert('click prism');
    },
  }
})
</script>
