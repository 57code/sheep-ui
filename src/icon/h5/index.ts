import type { App } from 'vue'
import { H5Icon as _H5Icon } from './h5'

const H5Icon = {
  install: (app: App) => {
    app.component('H5Icon', _H5Icon)
  }
}

export default H5Icon
