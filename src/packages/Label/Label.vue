<template>
  <div ref="info">
    <slot />
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';
import {toLngLat, toSize} from '../../utils/convert-helper';

export default defineComponent({
  name: 'ElBmapLabel',
  mixins: [registerMixin],
  props: {
    content: {
      type: String
    },
    position: {
      type: Array,
      required: true
    },
    offset: {
      type: Array
    },
    title: {
      type: String
    },
    labelStyle: {
      type: Object
    },
    enableMassClear: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: true
    },
    isCustom: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isVue: false,
      propsRedirect: {
        labelStyle: 'style'
      },
      converters: {
        position(arr) {
          return toLngLat(arr);
        },
        offset(arr) {
          return toSize(arr);
        }
      },
    };
  },
  unmounted() {
    if (this.$amapComponent && this.$amapComponent.getMap()) {
      this.$amapComponent.getMap().removeOverlay(this.$amapComponent);
      this.$amapComponent = null;
    }
  },
  updated() {
    if(this.isVue){
      this.$nextTick(() => {
        this.$amapComponent.setContent((this.$refs.info as HTMLDivElement).outerHTML)
      })
    }
  },
  methods: {
    __initComponent(options) {
      if(!options.content){
        this.isVue = true;
        options.content = (this.$refs.info as HTMLDivElement).outerHTML;
      }
      this.$amapComponent = new BMapGL.Label(options.content, options);
      this.$parentComponent.addOverlay(this.$amapComponent);
      // console.log(options);
      if (options.style) {
        this.$amapComponent.setStyle(options.style);
      }
      if (options.isCustom) {
        this.$amapComponent.setStyle({
          border: 'none',
          background: 'none'
        });
      }
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$amapComponent.hide();
        });
      }
    },
    __position(value) {
      this.$amapComponent.setPosition(value);
    }
  },
});
</script>
