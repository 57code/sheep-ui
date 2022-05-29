import type { App } from 'vue'
import { UnorderedListIcon as _UnorderedListIcon } from './unordered-list'

const UnorderedListIcon = {
  install: (app: App) => {
    app.component('UnorderedListIcon', _UnorderedListIcon)
  }
}

export default UnorderedListIcon
