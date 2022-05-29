import type { App } from 'vue'
import { SubscribedIcon as _SubscribedIcon } from './subscribed'

const SubscribedIcon = {
  install: (app: App) => {
    app.component('SubscribedIcon', _SubscribedIcon)
  }
}

export default SubscribedIcon
