import type { App } from 'vue'
import { DragDotIcon as _DragDotIcon } from './drag-dot'

const DragDotIcon = {
  install: (app: App) => {
    app.component('DragDotIcon', _DragDotIcon)
  }
}

export default DragDotIcon
