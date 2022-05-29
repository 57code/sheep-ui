import type { App } from 'vue'
import { UndoIcon as _UndoIcon } from './undo'

const UndoIcon = {
  install: (app: App) => {
    app.component('UndoIcon', _UndoIcon)
  }
}

export default UndoIcon
