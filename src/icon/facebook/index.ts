import type { App } from 'vue'
import { FacebookIcon as _FacebookIcon } from './facebook'

const FacebookIcon = {
  install: (app: App) => {
    app.component('FacebookIcon', _FacebookIcon)
  }
}

export default FacebookIcon
