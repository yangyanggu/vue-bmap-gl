<template>
  <div class="bmap-page-container">
    <el-bmap :zoom="zoom" :center="center">
      <el-bmap-info-window
          :title="currentWindow.title"
          :position="currentWindow.position"
          v-model:visible="currentWindow.visible"
          @close="close"
          @open="open"
      >
        <span>{{currentWindow.content}}</span>
      </el-bmap-info-window>
    </el-bmap>
  </div>
  <div class="control-container">
    <button @click="switchVisible">{{currentWindow.visible ? '隐藏信息框' : '显示信息框'}}</button>
    <button @click="changePosition()">修改弹出框位置</button>
    <button @click="changeTitle()">修改弹出框标题</button>
    <button @click="changeContent()">修改弹出框内容</button>
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
        title: '标题',
        position: [121.5163285, 31.21515044],
        content: '',
        visible: true
      }
    }
  },

  methods: {
    switchVisible() {
      this.currentWindow.visible = !this.currentWindow.visible;
    },
    changePosition() {
      let position = this.currentWindow.position;
      this.currentWindow.position = [position[0] + 0.002, position[1] - 0.002];
    },
    changeTitle() {
      this.currentWindow.title = `标题: ${new Date().toString()}`;
    },
    changeContent() {
      this.currentWindow.content = `内容: ${new Date().toString()}`;
    },
    close(){
      console.log('关闭信息框')
    },
    open(){
      console.log('显示信息框')
    }
  }
})
</script>
