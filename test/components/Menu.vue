<template>
  <div class="menu-container">
    <el-menu
      default-active="/"
      :router="true"
    >
      <el-menu-item
        v-for="item in menus"
        :key="item.path"
        :index="item.path"
      >
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Menu",
  data() {
    return {
      menus: [
        {
          path: '/',
          name: '地图'
        },
        {
          path: '/bezierCurve',
          name: '贝塞尔曲线'
        },
        {
          path: '/circle',
          name: '圆'
        },
        {
          path: '/groundOverlay',
          name: '地面叠加层'
        },
        {
          path: '/infoWindow',
          name: '信息框'
        },
        {
          path: '/infoWindowCustom',
          name: '自定义信息框'
        },
        {
          path: '/label',
          name: '文本'
        },
        {
          path: '/marker',
          name: '标号'
        },
        {
          path: '/marker3d',
          name: '3D标号'
        },
        {
          path: '/menu',
          name: '菜单'
        },
        {
          path: '/polygon',
          name: '多边形'
        },
        {
          path: '/polyline',
          name: '折线'
        },
        {
          path: '/prism',
          name: '3D棱柱'
        },
      ]
    }
  }
})
</script>

<style scoped>
.menu-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
