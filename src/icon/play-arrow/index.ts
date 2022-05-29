import type { App } from 'vue'
import { PlayArrowIcon as _PlayArrowIcon } from './play-arrow'

const PlayArrowIcon = {
  install: (app: App) => {
    app.component('PlayArrowIcon', _PlayArrowIcon)
  }
}

export default PlayArrowIcon
