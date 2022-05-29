import type { App } from 'vue'
import { FullscreenIcon as _FullscreenIcon } from './fullscreen'

const FullscreenIcon = {
  install: (app: App) => {
    app.component('FullscreenIcon', _FullscreenIcon)
  }
}

export default FullscreenIcon
