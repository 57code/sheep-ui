import type { App } from 'vue'
import { GitlabIcon as _GitlabIcon } from './gitlab'

const GitlabIcon = {
  install: (app: App) => {
    app.component('GitlabIcon', _GitlabIcon)
  }
}

export default GitlabIcon
