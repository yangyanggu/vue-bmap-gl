<template>
  <div class="bmap-page-container">
    <el-bmap
      ref="mapRef"
      :lazy="2000"
      :map-style-v2="darkStyle"
      :preserve-drawing-buffer="true"
      :min-zoom="10"
      :max-zoom="22"
      :tilt="tilt"
      :heading="heading"
      :center="center"
      :zoom="zoom"
      @click="click"
      @tilesloaded="tilesloaded"
    />
  </div>
  <div class="control-container">
    <button @click="getMap()">
      获取地图示例
    </button>
  </div>
</template>


<script lang="ts" setup>
import {ref, onMounted} from "vue";
import darkStyleJSON from '../../../assets/mapStyle'
const zoom = ref(16);
const center = ref([121.59996, 31.197646]);
const tilt = ref(60);
const heading = ref(0);
const darkStyle = ref(darkStyleJSON)
const timer = ref(null);
const mapRef = ref();

onMounted(() => {
  const change = () =>{
    clearTimeout(timer.value);
    window.removeEventListener('hashchange',change)
  }
  window.addEventListener('hashchange',change)
})

const getMap = () => {
  // bmap vue component
  // 百度 map instance
  console.log(mapRef.value.$$getInstance());
}

const click = () => {
  alert('map clicked');
}
const tilesloaded = (e) => {
  console.log('tilesloaded')
}
</script>
