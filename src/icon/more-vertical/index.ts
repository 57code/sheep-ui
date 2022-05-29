import type { App } from 'vue'
import { MoreVerticalIcon as _MoreVerticalIcon } from './more-vertical'

const MoreVerticalIcon = {
  install: (app: App) => {
    app.component('MoreVerticalIcon', _MoreVerticalIcon)
  }
}

export default MoreVerticalIcon
