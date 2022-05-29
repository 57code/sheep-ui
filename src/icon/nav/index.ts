import type { App } from 'vue'
import { NavIcon as _NavIcon } from './nav'

const NavIcon = {
  install: (app: App) => {
    app.component('NavIcon', _NavIcon)
  }
}

export default NavIcon
