import type { App } from 'vue'
import { WifiIcon as _WifiIcon } from './wifi'

const WifiIcon = {
  install: (app: App) => {
    app.component('WifiIcon', _WifiIcon)
  }
}

export default WifiIcon
