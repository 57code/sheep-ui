import type { App } from 'vue'
import { DragDotVerticalIcon as _DragDotVerticalIcon } from './drag-dot-vertical'

const DragDotVerticalIcon = {
  install: (app: App) => {
    app.component('DragDotVerticalIcon', _DragDotVerticalIcon)
  }
}

export default DragDotVerticalIcon
