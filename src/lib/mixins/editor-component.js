import eventHelper from '../utils/event-helper';
export default {
  methods: {
    setEditorEvents() {
      if(this.$bmapComponent.editor && this.events){
        let filters = ['lineupdate', 'remove'];
        let filterSet = {};
        Object.keys(this.events).forEach(key => {
          if (filters.indexOf(key) !== -1) filterSet[key] = this.events[key];
        });
        Object.keys(filterSet).forEach(key => {
          eventHelper.addListener(this.$bmapComponent.editor, key, filterSet[key]);
        });
      }else if(this.$bmapComponent.editor){
        this.setEditorEventsFromListeners()
      }
    },
    setEditorEventsFromListeners() {
      let filters = ['lineupdate', 'remove'];
      let filterSet = {};
      Object.keys(this.$listeners).forEach(key => {
        if (filters.indexOf(key) !== -1) filterSet[key] = this.$listeners[key];
      });
      Object.keys(filterSet).forEach(key => {
        eventHelper.addListener(this.$bmapComponent.editor, key, filterSet[key]);
      });
    }
  }
};
