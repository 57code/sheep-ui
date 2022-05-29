import type { App } from 'vue'
import { BranchIcon as _BranchIcon } from './branch'

const BranchIcon = {
  install: (app: App) => {
    app.component('BranchIcon', _BranchIcon)
  }
}

export default BranchIcon
