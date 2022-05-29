import type { App } from 'vue'
import { H1Icon as _H1Icon } from './h1'

const H1Icon = {
  install: (app: App) => {
    app.component('H1Icon', _H1Icon)
  }
}

export default H1Icon
