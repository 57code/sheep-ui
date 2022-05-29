import type { App } from 'vue'
import { SendIcon as _SendIcon } from './send'

const SendIcon = {
  install: (app: App) => {
    app.component('SendIcon', _SendIcon)
  }
}

export default SendIcon
