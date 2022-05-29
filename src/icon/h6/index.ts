import type { App } from 'vue'
import { H6Icon as _H6Icon } from './h6'

const H6Icon = {
  install: (app: App) => {
    app.component('H6Icon', _H6Icon)
  }
}

export default H6Icon
