import type { App } from 'vue'
import { MenuIcon as _MenuIcon } from './menu'

const MenuIcon = {
  install: (app: App) => {
    app.component('MenuIcon', _MenuIcon)
  }
}

export default MenuIcon
