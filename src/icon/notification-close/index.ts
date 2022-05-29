import type { App } from 'vue'
import { NotificationCloseIcon as _NotificationCloseIcon } from './notification-close'

const NotificationCloseIcon = {
  install: (app: App) => {
    app.component('NotificationCloseIcon', _NotificationCloseIcon)
  }
}

export default NotificationCloseIcon
