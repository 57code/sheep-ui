import type { App } from 'vue'
import { MenuFoldIcon as _MenuFoldIcon } from './menu-fold'

const MenuFoldIcon = {
  install: (app: App) => {
    app.component('MenuFoldIcon', _MenuFoldIcon)
  }
}

export default MenuFoldIcon
