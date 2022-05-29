import type { App } from 'vue'
import { TrophyIcon as _TrophyIcon } from './trophy'

const TrophyIcon = {
  install: (app: App) => {
    app.component('TrophyIcon', _TrophyIcon)
  }
}

export default TrophyIcon
