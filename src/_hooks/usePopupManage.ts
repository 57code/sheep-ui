import { getCurrentInstance, ref, watch } from 'vue'
import type { Ref } from 'vue'
export type PopupType = 'popup' | 'dialog' | 'message'

const POPUP_BASE_Z_INDEX = 1000
const MESSAGE_BASE_Z_INDEX = 5000
const Z_INDEX_STEP = 1

class PopupManager {
  private popupStack = {
    popup: new Set<number>(),
    dialog: new Set<number>(),
    message: new Set<number>()
  }

  private getNextZIndex(type: PopupType) {
    if (type === 'message')
      return MESSAGE_BASE_Z_INDEX + this.popupStack.message.size * Z_INDEX_STEP

    return POPUP_BASE_Z_INDEX + this.popupStack[type].size * Z_INDEX_STEP
  }
  public add(type: PopupType, id: number) {
    // if (!id) id = this.popupStack[type].size * Z_INDEX_STEP + POPUP_BASE_Z_INDEX
    this.popupStack[type].add(id)

    return this.getNextZIndex(type)
  }

  public remove(type: PopupType, id: number) {
    this.popupStack[type].delete(id)
  }
}

const popupManager = new PopupManager()

export default function usePopupManager(
  type: PopupType,
  visible: Ref<boolean>
) {
  const id = getCurrentInstance()?.uid ?? Date.now()
  const zIndex = ref(0)

  const open = () => {
    zIndex.value = popupManager.add(type, id)
  }

  const close = () => {
    popupManager.remove(type, id)
  }

  watch(
    () => visible.value,
    value => {
      if (value) {
        open()
      } else {
        close()
      }
    },
    { immediate: true }
  )
  return { open, close, zIndex }
}
