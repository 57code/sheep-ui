import type { App } from 'vue'
import { MindMappingIcon as _MindMappingIcon } from './mind-mapping'

const MindMappingIcon = {
  install: (app: App) => {
    app.component('MindMappingIcon', _MindMappingIcon)
  }
}

export default MindMappingIcon
