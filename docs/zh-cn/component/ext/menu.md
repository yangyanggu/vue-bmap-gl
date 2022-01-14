---
title: 右击菜单
---

# 右击菜单

## 基础示例

::: demo

examples/ext/menu

:::

## el-bmap-menu 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|


## el-bmap-menu 动态属性

支持响应式。

名称 | 类型 | 说明
---|---|---|

## el-bmap-menu 事件

事件 | 参数 | 说明
---|---|---|
open | event{type, target, point, pixel} | 右键菜单打开时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点
close | event{type, target, point, pixel} | 右键菜单关闭时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点

## el-bmap-menu-item 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|
width | Number | 指定此菜单项的宽度，菜单以最长的菜单项宽度为准
domId | String | 指定此菜单项dom的id

## el-bmap-menu-item 动态属性

支持响应式。

名称 | 类型 | 说明
---|---|---|
text | String | 菜单项显示的文本
enable | Boolean | 是否启用菜单项

## el-bmap-menu-item 事件

事件 | 参数 | 说明
---|---|---|
