<template>
  <div class="bmap-page-container">
    <el-bmap
      ref="map"
      :min-zoom="10"
      :max-zoom="22"
      :tilt="tilt"
      :heading="heading"
      :center="center"
      :zoom="zoom"
      @init="init"
    />
  </div>
  <div class="control-container">
    <button @click="getMap()">
      获取地图示例
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      zoom: 16,
      center: [121.59996, 31.197646],
      tilt: 60,
      heading: 0,
    };
  },
  methods: {
    init(map){
      this.map = map;
    },
    getMap() {
      // bmap vue component
      console.log('events init: ', this.map);
      console.log('$refs: ', this.$refs.map.$$getInstance())
    },
  }
})
</script>
