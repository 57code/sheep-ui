import type { App } from 'vue'
import { ImageIcon as _ImageIcon } from './image'

const ImageIcon = {
  install: (app: App) => {
    app.component('ImageIcon', _ImageIcon)
  }
}

export default ImageIcon
