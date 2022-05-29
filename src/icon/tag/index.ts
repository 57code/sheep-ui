import type { App } from 'vue'
import { TagIcon as _TagIcon } from './tag'

const TagIcon = {
  install: (app: App) => {
    app.component('TagIcon', _TagIcon)
  }
}

export default TagIcon
