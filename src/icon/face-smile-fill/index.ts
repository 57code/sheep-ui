import type { App } from 'vue'
import { FaceSmileFillIcon as _FaceSmileFillIcon } from './face-smile-fill'

const FaceSmileFillIcon = {
  install: (app: App) => {
    app.component('FaceSmileFillIcon', _FaceSmileFillIcon)
  }
}

export default FaceSmileFillIcon
