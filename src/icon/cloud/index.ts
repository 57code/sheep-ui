import type { App } from 'vue'
import { CloudIcon as _CloudIcon } from './cloud'

const CloudIcon = {
  install: (app: App) => {
    app.component('CloudIcon', _CloudIcon)
  }
}

export default CloudIcon
