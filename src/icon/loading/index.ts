import type { App } from 'vue'
import { LoadingIcon as _LoadingIcon } from './loading'

const LoadingIcon = {
  install: (app: App) => {
    app.component('LoadingIcon', _LoadingIcon)
  }
}

export default LoadingIcon
