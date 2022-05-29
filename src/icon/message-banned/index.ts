import type { App } from 'vue'
import { MessageBannedIcon as _MessageBannedIcon } from './message-banned'

const MessageBannedIcon = {
  install: (app: App) => {
    app.component('MessageBannedIcon', _MessageBannedIcon)
  }
}

export default MessageBannedIcon
