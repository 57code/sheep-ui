import type { App } from 'vue'
import { ExperimentIcon as _ExperimentIcon } from './experiment'

const ExperimentIcon = {
  install: (app: App) => {
    app.component('ExperimentIcon', _ExperimentIcon)
  }
}

export default ExperimentIcon
