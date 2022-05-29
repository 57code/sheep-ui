import type { App } from 'vue'
import { ListIcon as _ListIcon } from './list'

const ListIcon = {
  install: (app: App) => {
    app.component('ListIcon', _ListIcon)
  }
}

export default ListIcon
