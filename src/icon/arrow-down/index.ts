import { App } from 'vue'
import { ArrowDownIcon } from './arrow-down'

export { ArrowDownIcon }
export default {
  install(app: App) {
    app.component('ArrowDownIcon', ArrowDownIcon)
  }
}
