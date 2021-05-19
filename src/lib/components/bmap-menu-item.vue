<script>
import registerMixin from '../mixins/register-component';
export default {
  name: 'el-bmap-menu-item',
  mixins: [registerMixin],
  props: {
    text: {
      type: String
    },
    enable: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number
    },
    domId: {
      type: String
    },
    callback: {
      type: Function
    }
  },
  data() {
    return {
      propsRedirect: {
        domId: 'id'
      },
      converters: {
      },
      handlers: {
      }
    };
  },
  methods: {
    __initComponent(options) {
      let $contextMenu = this.$parent.$bmapComponent;
      let o = {};
      if (options.width) {
        o.width = options.width;
      }
      if (options.id) {
        o.id = options.id;
      }
      this.$bmapComponent = new BMapGL.MenuItem(options.text, options.callback, o);
      $contextMenu.addItem(this.$bmapComponent);
      if (options.enable === false) {
        this.$bmapComponent.disable();
      }
    }
  },
  render() {
    return null;
  },
  destroyed() {
    if (this.$bmapComponent && this.$parent.$bmapComponent) {
      this.$parent.$bmapComponent.removeItem(this.$bmapComponent);
    }
  }
};
</script>
