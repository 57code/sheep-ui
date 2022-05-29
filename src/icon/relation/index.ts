import type { App } from 'vue'
import { RelationIcon as _RelationIcon } from './relation'

const RelationIcon = {
  install: (app: App) => {
    app.component('RelationIcon', _RelationIcon)
  }
}

export default RelationIcon
