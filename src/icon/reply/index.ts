import type { App } from 'vue'
import { ReplyIcon as _ReplyIcon } from './reply'

const ReplyIcon = {
  install: (app: App) => {
    app.component('ReplyIcon', _ReplyIcon)
  }
}

export default ReplyIcon
