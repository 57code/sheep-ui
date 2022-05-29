import type { App } from 'vue'
import { H2Icon as _H2Icon } from './h2'

const H2Icon = {
  install: (app: App) => {
    app.component('H2Icon', _H2Icon)
  }
}

export default H2Icon
