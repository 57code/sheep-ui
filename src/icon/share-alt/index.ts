import type { App } from 'vue'
import { ShareAltIcon as _ShareAltIcon } from './share-alt'

const ShareAltIcon = {
  install: (app: App) => {
    app.component('ShareAltIcon', _ShareAltIcon)
  }
}

export default ShareAltIcon
