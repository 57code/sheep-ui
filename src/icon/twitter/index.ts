import type { App } from 'vue'
import { TwitterIcon as _TwitterIcon } from './twitter'

const TwitterIcon = {
  install: (app: App) => {
    app.component('TwitterIcon', _TwitterIcon)
  }
}

export default TwitterIcon
