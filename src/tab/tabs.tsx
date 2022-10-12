import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'STabs',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots }) {
    // 模拟
    const tabsData = ref([
      { id: 'tab1', title: 'Tab1' },
      { id: 'tab2', title: 'Tab2' }
    ])
    // 激活id
    const activeTab = ref(props.modelValue)
    // 改变激活状态
    const changeTab = (tabId: string) => {
      activeTab.value = tabId
    }
    return () => (
      <div class={'s-tabs'}>
        {/* 导航页签 */}
        <ul className="s-tabs__nav">
          {tabsData.value.map(tab => (
            <li onClick={() => changeTab(tab.id)}>{tab.title}</li>
          ))}
        </ul>
        {activeTab.value}
        {/* 内容区 */}
        {slots.default?.()}
      </div>
    )
  }
})
