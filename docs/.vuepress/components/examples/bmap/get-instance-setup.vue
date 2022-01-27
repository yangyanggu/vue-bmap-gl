<template>
  <div class="bmap-page-container">
    <el-bmap
      ref="mapRef"
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

<script lang="ts" setup>
import {ref} from "vue";

const zoom = ref(16);
const center = ref([121.59996, 31.197646]);
const tilt = ref(60);
const heading = ref(0);
let map = null;
const mapRef = ref();

const init = (e) => {
  map = e;
}

const getMap = () => {
  console.log('events init: ', map);
  console.log('$refs: ', mapRef.value.$$getInstance())
}
</script>
