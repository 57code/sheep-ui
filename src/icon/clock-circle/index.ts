import type { App } from 'vue'
import { ClockCircleIcon as _ClockCircleIcon } from './clock-circle'

const ClockCircleIcon = {
  install: (app: App) => {
    app.component('ClockCircleIcon', _ClockCircleIcon)
  }
}

export default ClockCircleIcon
