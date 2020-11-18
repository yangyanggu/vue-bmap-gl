<template>
  <div>
    <slot />
  </div>
</template>
<script>
import registerMixin from '../mixins/register-component';
import CONST from '../utils/constant';
export default {
  name: 'el-bmap-menu',
  mixins: [registerMixin],
  props: [
    'vid',
    'events',
    'onceEvents'
  ],
  data() {
    return {
      converters: {
      },
      handlers: {
      }
    };
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = new BMapGL.ContextMenu();
      options.map.addContextMenu(this.$bmapComponent);
      this.$children.forEach(component => {
        component.$emit(CONST.BMAP_READY_EVENT, this.$bmap);
      });
    }
  },
  destroyed() {
    if (this.$bmapComponent && this.$bmapComponent.getMap()) {
      this.$bmapComponent.getMap().removeContextMenu(this.$bmapComponent);
    }
  }
};
</script>
