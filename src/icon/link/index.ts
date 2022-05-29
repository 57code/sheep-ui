import type { App } from 'vue'
import { LinkIcon as _LinkIcon } from './link'

const LinkIcon = {
  install: (app: App) => {
    app.component('LinkIcon', _LinkIcon)
  }
}

export default LinkIcon
