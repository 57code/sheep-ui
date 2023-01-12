import { defineComponent, inject, Ref } from 'vue'

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
    // 获取当前激活项
    const activeTab = inject('active-tab') as Ref<string>
    // 获取tabsData,并将自身数据加入其中
    const tabsData = inject('tabs-data') as Ref<
      Array<{ id: string; title: string }>
    >
    tabsData.value.push({
      id: props.id,
      title: props.title
    })
    return () => (
      <>
        {props.id === activeTab.value && (
          <div class={'s-tab'}>{slots.default?.()}</div>
        )}
      </>
    )
  }
})
