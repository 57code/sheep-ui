import type { App } from 'vue'
import { DragArrowIcon as _DragArrowIcon } from './drag-arrow'

const DragArrowIcon = {
  install: (app: App) => {
    app.component('DragArrowIcon', _DragArrowIcon)
  }
}

export default DragArrowIcon
