import type { App } from 'vue'
import { TagsIcon as _TagsIcon } from './tags'

const TagsIcon = {
  install: (app: App) => {
    app.component('TagsIcon', _TagsIcon)
  }
}

export default TagsIcon
