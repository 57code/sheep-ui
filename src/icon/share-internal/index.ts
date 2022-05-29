import type { App } from 'vue'
import { ShareInternalIcon as _ShareInternalIcon } from './share-internal'

const ShareInternalIcon = {
  install: (app: App) => {
    app.component('ShareInternalIcon', _ShareInternalIcon)
  }
}

export default ShareInternalIcon
