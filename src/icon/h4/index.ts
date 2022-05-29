import type { App } from 'vue'
import { H4Icon as _H4Icon } from './h4'

const H4Icon = {
  install: (app: App) => {
    app.component('H4Icon', _H4Icon)
  }
}

export default H4Icon
