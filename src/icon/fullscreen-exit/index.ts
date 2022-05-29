import type { App } from 'vue'
import { FullscreenExitIcon as _FullscreenExitIcon } from './fullscreen-exit'

const FullscreenExitIcon = {
  install: (app: App) => {
    app.component('FullscreenExitIcon', _FullscreenExitIcon)
  }
}

export default FullscreenExitIcon
