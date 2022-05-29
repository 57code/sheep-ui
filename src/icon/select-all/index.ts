import type { App } from 'vue'
import { SelectAllIcon as _SelectAllIcon } from './select-all'

const SelectAllIcon = {
  install: (app: App) => {
    app.component('SelectAllIcon', _SelectAllIcon)
  }
}

export default SelectAllIcon
