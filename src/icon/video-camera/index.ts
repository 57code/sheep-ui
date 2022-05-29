import type { App } from 'vue'
import { VideoCameraIcon as _VideoCameraIcon } from './video-camera'

const VideoCameraIcon = {
  install: (app: App) => {
    app.component('VideoCameraIcon', _VideoCameraIcon)
  }
}

export default VideoCameraIcon
