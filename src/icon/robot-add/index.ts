import type { App } from 'vue'
import { RobotAddIcon as _RobotAddIcon } from './robot-add'

const RobotAddIcon = {
  install: (app: App) => {
    app.component('RobotAddIcon', _RobotAddIcon)
  }
}

export default RobotAddIcon
