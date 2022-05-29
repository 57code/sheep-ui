import type { App } from 'vue'
import { ExpandIcon as _ExpandIcon } from './expand'

const ExpandIcon = {
  install: (app: App) => {
    app.component('ExpandIcon', _ExpandIcon)
  }
}

export default ExpandIcon
