import type { App } from 'vue'
import { ImageCloseIcon as _ImageCloseIcon } from './image-close'

const ImageCloseIcon = {
  install: (app: App) => {
    app.component('ImageCloseIcon', _ImageCloseIcon)
  }
}

export default ImageCloseIcon
