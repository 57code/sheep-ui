// 1.函数式组件
// export default () => <div>test</div>

import { defineComponent, ref, withModifiers } from 'vue'

// 2.defineComponent
// export default defineComponent({
//   render() {
//     return <div>test</div>
//   }
// })

// 3.defineComponent({setup() {}})
// 摒弃this，对于ts支持最好
// 借助babel-plugin-jsx
// vue独特概念：修饰符，slot，directive，emit
export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    // 响应式数据count
    const count = ref(0)

    const inc = () => {
      count.value++
      emit('click')
    }

    const list = ref<string[]>(['a', 'b', 'c'])

    return () => {
      // v-if
      const span = true ? <span>A</span> : <span>B</span>

      return (
        <div onClick={withModifiers(inc, ['self'])}>
          test: {count.value}
          {/* <input type="text" v-focus v-model={count.value} /> */}
          <div>{span}</div>
          <ul>
            {list.value.map(str => (
              <li key={str}>{str}</li>
            ))}
          </ul>
          {/* 默认插槽内容 */}
          <div>{slots.default ? slots.default() : 'default content'}</div>
          <div>{slots.title ? slots.title() : 'title slot content'}</div>
          {/* <Test v-slots={{
          title: () => <h3>title</h3>,
        }}>abc</Test> */}
        </div>
      )
    }
  }
})
