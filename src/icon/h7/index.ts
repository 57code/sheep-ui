import type { App } from 'vue'
import { H7Icon as _H7Icon } from './h7'

const H7Icon = {
  install: (app: App) => {
    app.component('H7Icon', _H7Icon)
  }
}

export default H7Icon
