<script>
import registerMixin from '../mixins/register-component';
export default {
  name: 'el-bmap-menu-item',
  mixins: [registerMixin],
  props: [
    'vid',
    'text',
    'enable',
    'width',
    'domId',
    'callback'
  ],
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
  destroyed() {
    if (this.$bmapComponent && this.$parent.$bmapComponent) {
      this.$parent.$bmapComponent.removeItem(this.$bmapComponent);
    }
  }
};
</script>
