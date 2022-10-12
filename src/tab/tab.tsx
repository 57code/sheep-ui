import { defineComponent } from 'vue'

export default defineComponent({
  name: 'STab',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(props, { slots }) {
    return () => <div class={'s-tab'}>{slots.default?.()}</div>
  }
})
