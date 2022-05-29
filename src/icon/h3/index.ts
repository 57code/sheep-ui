import type { App } from 'vue'
import { H3Icon as _H3Icon } from './h3'

const H3Icon = {
  install: (app: App) => {
    app.component('H3Icon', _H3Icon)
  }
}

export default H3Icon
