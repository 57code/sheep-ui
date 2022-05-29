import type { App } from 'vue'
import { RecordStopIcon as _RecordStopIcon } from './record-stop'

const RecordStopIcon = {
  install: (app: App) => {
    app.component('RecordStopIcon', _RecordStopIcon)
  }
}

export default RecordStopIcon
