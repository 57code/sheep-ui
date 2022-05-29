import type { App } from 'vue'
import { PlayCircleIcon as _PlayCircleIcon } from './play-circle'

const PlayCircleIcon = {
  install: (app: App) => {
    app.component('PlayCircleIcon', _PlayCircleIcon)
  }
}

export default PlayCircleIcon
