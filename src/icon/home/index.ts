import type { App } from 'vue'
import { HomeIcon as _HomeIcon } from './home'

const HomeIcon = {
  install: (app: App) => {
    app.component('HomeIcon', _HomeIcon)
  }
}

export default HomeIcon
