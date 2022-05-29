import type { App } from 'vue'
import { MessageIcon as _MessageIcon } from './message'

const MessageIcon = {
  install: (app: App) => {
    app.component('MessageIcon', _MessageIcon)
  }
}

export default MessageIcon
