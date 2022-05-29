import type { App } from 'vue'
import { RobotIcon as _RobotIcon } from './robot'

const RobotIcon = {
  install: (app: App) => {
    app.component('RobotIcon', _RobotIcon)
  }
}

export default RobotIcon
