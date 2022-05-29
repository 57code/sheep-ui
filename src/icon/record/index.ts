import type { App } from 'vue'
import { RecordIcon as _RecordIcon } from './record'

const RecordIcon = {
  install: (app: App) => {
    app.component('RecordIcon', _RecordIcon)
  }
}

export default RecordIcon
