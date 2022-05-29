import type { App } from 'vue'
import { ShrinkIcon as _ShrinkIcon } from './shrink'

const ShrinkIcon = {
  install: (app: App) => {
    app.component('ShrinkIcon', _ShrinkIcon)
  }
}

export default ShrinkIcon
