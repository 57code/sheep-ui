import { ref, onMounted, onUpdated } from 'vue'
import { getFirstElementFromChildren } from '../_utils/vue-utils'
import type { VNode, Slots } from 'vue'

export function useFirstElement(slots: Slots) {
  const defaultSlot = slots.default?.() ?? []
  const firstElement = ref<HTMLElement>()

  const setFirstElement = () => {
    const element = getFirstElementFromChildren(defaultSlot)
    if (element !== firstElement.value) {
      firstElement.value = element
    }
  }
  // setFirstElement()

  onMounted(() => {
    setFirstElement()
  })

  onUpdated(() => {
    setFirstElement()
  })

  return {
    defaultSlot,
    firstElement
  }
}
