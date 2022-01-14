<template>
  <slot />
</template>
<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';

export default defineComponent({
  name: 'ElBmapMenu',
  mixins: [registerMixin],
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      converters: {
      },
      handlers: {
      }
    };
  },
  unmounted() {
    if (this.$amapComponent) {
      this.$parentComponent.removeContextMenu(this.$amapComponent);
      this.$amapComponent = null;
    }
  },
  methods: {
    __initComponent() {
      this.$amapComponent = new BMapGL.ContextMenu();
      this.$parentComponent.addContextMenu(this.$amapComponent);
    },
  }
});
</script>
