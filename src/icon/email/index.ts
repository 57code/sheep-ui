import type { App } from 'vue'
import { EmailIcon as _EmailIcon } from './email'

const EmailIcon = {
  install: (app: App) => {
    app.component('EmailIcon', _EmailIcon)
  }
}

export default EmailIcon
