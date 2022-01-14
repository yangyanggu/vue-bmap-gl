<template>
  <div class="bmap-page-container">
    <el-bmap
      ref="map"
      :lazy="2000"
      :map-style-v2="darkStyle"
      :preserve-drawing-buffer="true"
      :min-zoom="10"
      :max-zoom="22"
      :tilt="tilt"
      :heading="heading"
      :center="center"
      :zoom="zoom"
      ,@click="click"
      @tilesloaded="tilesloaded"
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
import darkStyle from '../../../assets/mapStyle'

export default defineComponent({
  data() {
    return {
      zoom: 16,
      center: [121.59996, 31.197646],
      tilt: 60,
      heading: 0,
      darkStyle,
      timer: null,
    };
  },
  mounted() {
    const change = () =>{
      clearTimeout(this.timer);
      window.removeEventListener('hashchange',change)
    }
    window.addEventListener('hashchange',change)
  },
  methods: {
    getMap() {
      // bmap vue component
      // 百度 map instance
      console.log(this.$refs.map.$$getInstance());
    },
    panMap() {
      this.timer = setTimeout( () => {
        this.center = [(this.center[0]+0.0001), this.center[1]];
        this.panMap();
      },1000);
    },
    click(){
      alert('map clicked');
    },
    tilesloaded(e){
      console.log('tilesloaded')
    }
  }
})
</script>
