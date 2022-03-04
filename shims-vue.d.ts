import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties{
    $amapComponent ?: any,
    $parentComponent ?: any
  }
}
