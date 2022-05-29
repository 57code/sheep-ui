import type { App } from 'vue'
import { NotificationIcon as _NotificationIcon } from './notification'

const NotificationIcon = {
  install: (app: App) => {
    app.component('NotificationIcon', _NotificationIcon)
  }
}

export default NotificationIcon
