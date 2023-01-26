import { defineComponent, provide, ref } from 'vue'
import './tabs.scss'

export default defineComponent({
  name: 'STabs',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    addable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots }) {
    // 模拟
    const tabsData = ref<
      Array<{ id: string; title: string; type?: 'random'; content?: string }>
    >([])
    provide('tabs-data', tabsData)

    // 激活id
    const activeTab = ref(props.modelValue)
    provide('active-tab', activeTab)
    // 改变激活状态
    const changeTab = (tabId: string) => {
      activeTab.value = tabId
    }

    // 增加一个关闭方法
    const closeTab = (tabId: string) => {
      const tabIndex = tabsData.value.findIndex(item => item.id === tabId)
      tabsData.value.splice(tabIndex, 1)
    }

    const addTab = () => {
      const id = Math.floor(Math.random() * 1000) + ''
      tabsData.value.push({
        id,
        type: 'random',
        title: 'New Tab',
        content: 'New Tab Content'
      })
      activeTab.value = id
    }

    return () => (
      <div class={'s-tabs'}>
        {/* 导航页签 */}
        <ul className="s-tabs__nav">
          {tabsData.value.map(tab => (
            <li
              onClick={() => changeTab(tab.id)}
              class={tab.id === activeTab.value ? 'active' : ''}
              key={tab.id}
            >
              {tab.title}
              {/* 关闭页签 */}
              {props.closable && (
                <svg
                  onClick={() => closeTab(tab.id)}
                  style="margin-left: 8px;"
                  viewBox="0 0 1024 1024"
                  width="12"
                  height="12"
                >
                  <path d="M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"></path>
                </svg>
              )}
            </li>
          ))}

          {/* 添加标签按钮 */}
          {props.addable && (
            <li>
              <svg
                onClick={addTab}
                viewBox="0 0 1024 1024"
                width="14"
                height="14"
              >
                <path d="M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"></path>
              </svg>
            </li>
          )}
        </ul>

        {/* 内容区 */}
        {slots.default?.()}

        {/* 显示新增的内容 */}
        {tabsData.value
          .filter(tab => tab.type === 'random' && tab.id === activeTab.value)
          .map(tab => (
            <div class="s-tab">{tab.content}</div>
          ))}
      </div>
    )
  }
})
