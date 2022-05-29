import type { App } from 'vue'
import { CalendarIcon as _CalendarIcon } from './calendar'

const CalendarIcon = {
  install: (app: App) => {
    app.component('CalendarIcon', _CalendarIcon)
  }
}

export default CalendarIcon
