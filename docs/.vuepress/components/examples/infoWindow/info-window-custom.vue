<template>
  <div class="bmap-page-container">
    <el-bmap :zoom="zoom" :center="center">
      <el-bmap-marker :position="currentWindow.position"></el-bmap-marker>
      <el-bmap-info-window-custom
          :is-custom="true"
          :position="currentWindow.position"
          :visible.sync="currentWindow.visible"
          @open="open"
          @close="close"
      >
          <span>{{currentWindow.content}}</span>
      </el-bmap-info-window-custom>
    </el-bmap>
  </div>
  <div class="control-container">
    <button @click="switchWindow">切换显隐</button>
    <button @click="changePosition()">修改弹出框位置</button>
    <button @click="changeContent()">修改内容</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data () {
    return {
      zoom: 14,
      center: [121.5273285, 31.21515044],
      currentWindow: {
        position: [121.4113285, 31.21515044],
        content: 'hello world',
        visible: true
      }
    }
  },

  mounted() {
  },

  methods: {
    open(){
      console.log('窗口已打开')
    },
    close(){
      console.log('窗口已关闭')
    },
    switchWindow() {
      this.currentWindow.visible = !this.currentWindow.visible;
    },
    changePosition() {
      let position = this.currentWindow.position;
      this.currentWindow.position = [position[0] + 0.002, position[1] - 0.002];
    },
    changeContent(){
      this.currentWindow.content = new Date().toString();
    }
  }
})
</script>
