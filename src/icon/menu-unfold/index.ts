import type { App } from 'vue'
import { MenuUnfoldIcon as _MenuUnfoldIcon } from './menu-unfold'

const MenuUnfoldIcon = {
  install: (app: App) => {
    app.component('MenuUnfoldIcon', _MenuUnfoldIcon)
  }
}

export default MenuUnfoldIcon
