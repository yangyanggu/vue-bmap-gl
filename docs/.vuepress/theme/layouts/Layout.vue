<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import {publishDate} from "../../data/config.json";
const publishUrl = `https://img.shields.io/static/v1?label=更新日期&message=${publishDate}&color=green`
</script>

<template>
  <ParentLayout>
    <template #sidebar-top>
      <div class="version-container">
        <a
          href="https://github.com/yangyanggu/vue-bmap-gl"
          target="_blank"
        >
          <img src="https://img.shields.io/npm/v/vue-bmap-gl/next">
        </a>
        <a
          href="https://github.com/yangyanggu/vue-bmap-gl"
          target="_blank"
        >
          <img :src="publishUrl">
        </a>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css" scoped>
.version-container{
  padding-top: 10px;
  text-align: center;
}
.version-container a{
  margin-right: 4px;
}
</style>
