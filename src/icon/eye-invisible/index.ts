import type { App } from 'vue'
import { EyeInvisibleIcon as _EyeInvisibleIcon } from './eye-invisible'

const EyeInvisibleIcon = {
  install: (app: App) => {
    app.component('EyeInvisibleIcon', _EyeInvisibleIcon)
  }
}

export default EyeInvisibleIcon
