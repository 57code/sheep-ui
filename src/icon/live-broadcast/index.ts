import type { App } from 'vue'
import { LiveBroadcastIcon as _LiveBroadcastIcon } from './live-broadcast'

const LiveBroadcastIcon = {
  install: (app: App) => {
    app.component('LiveBroadcastIcon', _LiveBroadcastIcon)
  }
}

export default LiveBroadcastIcon
