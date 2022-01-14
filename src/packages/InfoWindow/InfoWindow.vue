<template>
  <div ref="info">
    <slot />
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {toLngLat, toSize} from '../../utils/convert-helper';
import registerMixin from '../../mixins/register-component';

export default defineComponent({
  name: 'ElBmapInfoWindow',
  mixins: [registerMixin],
  props: {
    title: {
      type: [String, HTMLElement]
    },
    content: {
      type: [String, HTMLElement]
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    maxWidth: {
      type: Number
    },
    offset: {
      type: Array
    },
    position: {
      type: Array
    },
    visible: {
      type: Boolean,
      default: true
    },
    enableAutoPan: {
      type: Boolean,
      default: true
    },
    enableCloseOnClick: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:visible'],
  data() {
    return {
      converters: {
        offset(arr) {
          return toSize(arr);
        }
      }
    };
  },
  unmounted() {
    if(this.$amapComponent.isOpen()){
      this.$parentComponent.closeInfoWindow();
    }
    this.$amapComponent = null;
  },
  methods: {
    __initComponent(options) {
      if (!options.content) {
        options.content = this.$refs.info;
      }
      this.$amapComponent = new BMapGL.InfoWindow(options.content, options);
      this.$amapComponent.addEventListener('close', () => {
        this.$emit('update:visible', false);
      });
      this.$amapComponent.addEventListener('open', () => {
        this.$emit('update:visible', true);
      });
      if (this.visible !== false) this.$parentComponent.openInfoWindow(this.$amapComponent, toLngLat(this.position));
    },
    __visible(flag) {
      const position = this.position;
      // fixed Amap info-window reopen
      if (position) {
        flag === false ? this.$parentComponent.closeInfoWindow() : this.$parentComponent.openInfoWindow(this.$amapComponent, toLngLat(position));
      }
    },
    __title(title) {
      this.$amapComponent.setTitle(title);
      this.$amapComponent._config.title = title;
      this.$amapComponent.redraw();
    },
    __position(value) {
      if (this.visible !== false) {
        this.$parentComponent.openInfoWindow(this.$amapComponent, value);
      }
    }
  },
});
</script>
