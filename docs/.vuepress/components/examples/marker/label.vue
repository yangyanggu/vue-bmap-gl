<template>
  <div class="bmap-page-container">
    <el-bmap :zoom="zoom" :center="center">
      <el-bmap-label v-for="(label,index) in labels" :key="index" :content="label.content" :visible="label.visible" :label-style="label.style" :offset="label.offset" :position="label.position"></el-bmap-label>
      <el-bmap-label :position="diyLabel.position" :is-custom="true" @click="click">
        <div style="color:red;font-size:20px;">diy[{{diyLabel.num}}]</div>
      </el-bmap-label>
    </el-bmap>
  </div>
  <div class="control-container">
    <button type="button" name="button" @click="changePosition">切换diy位置</button>
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
      labels: [
        {
          position: [121.5273285, 31.21515044],
          content: 'hello world',
          offset: [0, 0],
          visible: true,
          style: {
            color: 'yellow'
          },
        }
      ],
      diyLabel: {
        position: [121.5215285, 31.21515044],
        num: 0
      }
    }
  },
  methods: {
    toggleVisible() {
      this.labels[0].visible = !this.labels[0].visible;
    },
    changePosition() {
      let position = this.diyLabel.position;
      this.diyLabel.position = [position[0] + 0.0002, position[1] - 0.0002];
      this.diyLabel.num++;
    },
    click(){
      alert('click text');
    }
  }
})
</script>
