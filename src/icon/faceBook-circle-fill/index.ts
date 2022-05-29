import type { App } from 'vue'
import { FaceBookCircleFillIcon as _FaceBookCircleFillIcon } from './faceBook-circle-fill'

const FaceBookCircleFillIcon = {
  install: (app: App) => {
    app.component('FaceBookCircleFillIcon', _FaceBookCircleFillIcon)
  }
}

export default FaceBookCircleFillIcon
