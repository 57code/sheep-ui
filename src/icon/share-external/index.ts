import type { App } from 'vue'
import { ShareExternalIcon as _ShareExternalIcon } from './share-external'

const ShareExternalIcon = {
  install: (app: App) => {
    app.component('ShareExternalIcon', _ShareExternalIcon)
  }
}

export default ShareExternalIcon
