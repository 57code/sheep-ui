import type { App } from 'vue'
import { ItalicIcon as _ItalicIcon } from './italic'

const ItalicIcon = {
  install: (app: App) => {
    app.component('ItalicIcon', _ItalicIcon)
  }
}

export default ItalicIcon
