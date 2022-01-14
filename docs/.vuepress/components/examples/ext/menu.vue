<template>
  <div class="bmap-page-container">
    <el-bmap ref="map" :min-zoom="10" :max-zoom="22" :center="center" :zoom="zoom">
      <el-bmap-menu>
        <el-bmap-menu-item v-for="(item,index) in menus" :key="index" :enable="item.enable" :text="item.text" :callback="item.callback" ></el-bmap-menu-item>
      </el-bmap-menu>
    </el-bmap>
  </div>
  <div class="control-container">
    <button @click="switchEnable">切换缩小按钮的enable</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "menu",
  data() {
    const _this = this;
    return {
      zoom: 16,
      center: [121.59996, 31.197646],
      heading: 0,
      menus: [
        {
          text: '放大',
          callback(e){
            console.log(e);
            _this.getMap().zoomOut();
          },
          enable: true
        },
        {
          text: '缩小',
          callback(){
            _this.getMap().zoomIn();
          },
          enable: false
        }
      ]
    };
  },
  mounted() {
  },
  methods: {
    switchEnable(){
      this.menus[1].enable = !this.menus[1].enable;
    },
    getMap(){
      return this.$refs.map.$$getInstance();
    }
  }
})
</script>

<style scoped>

</style>
