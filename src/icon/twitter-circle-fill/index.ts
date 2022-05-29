import type { App } from 'vue'
import { TwitterCircleFillIcon as _TwitterCircleFillIcon } from './twitter-circle-fill'

const TwitterCircleFillIcon = {
  install: (app: App) => {
    app.component('TwitterCircleFillIcon', _TwitterCircleFillIcon)
  }
}

export default TwitterCircleFillIcon
