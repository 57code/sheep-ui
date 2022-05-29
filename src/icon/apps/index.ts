import type { App } from 'vue'
import { AppsIcon as _AppsIcon } from './apps'

const AppsIcon = {
  install: (app: App) => {
    app.component('AppsIcon', _AppsIcon)
  }
}

export default AppsIcon
