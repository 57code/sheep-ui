import type { App } from 'vue'
import { DashboardIcon as _DashboardIcon } from './dashboard'

const DashboardIcon = {
  install: (app: App) => {
    app.component('DashboardIcon', _DashboardIcon)
  }
}

export default DashboardIcon
