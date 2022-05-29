import type { App } from 'vue'
import { PlayCircleFillIcon as _PlayCircleFillIcon } from './play-circle-fill'

const PlayCircleFillIcon = {
  install: (app: App) => {
    app.component('PlayCircleFillIcon', _PlayCircleFillIcon)
  }
}

export default PlayCircleFillIcon
