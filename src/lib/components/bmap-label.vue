<script>
import registerMixin from '../mixins/register-component';
import {toLngLat, toSize} from '../utils/convert-helper';
import Vue from 'vue';

export default {
  name: 'el-bmap-label',
  mixins: [registerMixin],
  props: {
    vid: {
      type: [String, Number]
    },
    content: {
      type: String
    },
    position: {
      type: Array
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
      type: Boolean
    },
    visible: {
      type: Boolean,
      default: true
    },
    events: {
      type: Object
    },
    isCustom: {
      type: Boolean
    }
  },
  data() {
    return {
      preHtml: '',
      tmpVM: null,
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
      handlers: {
        visible(flag) {
          flag === false ? this.hide() : this.show();
        },
        position(value) {
          this.setPosition(value);
        }
      }
    };
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = new BMapGL.Label(options.content, options);
      options.map.addOverlay(this.$bmapComponent);
      // console.log(options);
      if (options.style) {
        this.$bmapComponent.setStyle(options.style);
      }
      if (options.isCustom) {
        this.$bmapComponent.setStyle({
          border: 'none',
          background: 'none'
        });
      }
      if (this.$slots.default && this.$slots.default.length) {
        this.$nextTick(() => {
          this.preHtml = this.tmpVM.$refs.node.outerHTML;
          this.$bmapComponent.setContent(this.preHtml);
        });

      }
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$bmapComponent.hide();
        });
      }
    }
  },
  created() {
    this.tmpVM = new Vue({
      data() {
        return {node: ''};
      },
      render(h) {
        const { node } = this;
        return h('div', {ref: 'node'}, Array.isArray(node) ? node : [node]);
      }
    }).$mount();
  },
  updated() {
    this.$nextTick(() => {
      let html = this.tmpVM.$refs.node.outerHTML;
      if (this.preHtml !== html) {
        if (this.$bmapComponent) {
          this.$bmapComponent.setContent(html);
        }
        this.preHtml = html;
      }
    });
  },
  destroyed() {
    if (this.tmpVM) {
      this.tmpVM.$destroy();
    }
    if (this.$bmapComponent && this.$bmapComponent.getMap()) {
      this.$bmapComponent.getMap().removeOverlay(this.$bmapComponent);
      this.$bmapComponent = null;
      this.tmpVM = null;
    }
  },
  render() {
    const slots = this.$slots.default || [];
    if (slots.length) {
      this.tmpVM.node = slots;
    }
    return null;
  }
};
</script>
