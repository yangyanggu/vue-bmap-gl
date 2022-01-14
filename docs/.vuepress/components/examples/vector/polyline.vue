<template>
  <div class="bmap-page-container">
    <el-bmap :zoom="zoom" :center="center">
      <el-bmap-polyline
          :enable-editing="enableEditing"
          :visible="visible"
          :path="path"
          @click="click"
          @editend="end"
      ></el-bmap-polyline>
    </el-bmap>
  </div>
  <div class="control-container">
    <button @click="switchVisible">{{visible ? '隐藏' : '显示'}}</button>
    <button @click="changeEditable">{{enableEditing ? '取消编辑' : '编辑'}}</button>
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
      enableEditing: false
    };
  },
  methods: {
    changeEditable() {
      this.enableEditing = !this.enableEditing;
    },
    switchVisible(){
      this.visible = !this.visible;
    },
    click(e) {
      alert('click polyline');
    },
    end: (e) => {
      let newPath = e.target.getPath().map(point => [point.lng, point.lat]);
      console.log(newPath);
    }
  }
})
</script>
