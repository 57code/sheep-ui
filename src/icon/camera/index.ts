import type { App } from 'vue'
import { CameraIcon as _CameraIcon } from './camera'

const CameraIcon = {
  install: (app: App) => {
    app.component('CameraIcon', _CameraIcon)
  }
}

export default CameraIcon
