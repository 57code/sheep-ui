import type { App } from 'vue'
import { ScheduleIcon as _ScheduleIcon } from './schedule'

const ScheduleIcon = {
  install: (app: App) => {
    app.component('ScheduleIcon', _ScheduleIcon)
  }
}

export default ScheduleIcon
