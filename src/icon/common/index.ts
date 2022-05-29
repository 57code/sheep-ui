import type { App } from 'vue'
import { CommonIcon as _CommonIcon } from './common'

const CommonIcon = {
  install: (app: App) => {
    app.component('CommonIcon', _CommonIcon)
  }
}

export default CommonIcon
