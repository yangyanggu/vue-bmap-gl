---
title: 升级说明
---

# 升级说明
vue-bmap-gl vue3版本与vue2版本的API主要有以下几个不同点:
* 取消bmapManager对象，获取实例的方式调整为ref或者监听init事件
* 所有事件绑定调整为v-on，例如绑定click事件： `@click="clickMarker"`
* 信息框的visible双向绑定调整为使用 v-model:visible，不再支持.sync
