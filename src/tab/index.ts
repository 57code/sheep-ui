import { App } from 'vue'
import Tabs from './tabs'
import Tab from './tab'

export { Tabs, Tab }
export default {
  install(app: App) {
    app.component('STabs', Tabs)
    app.component('STab', Tab)
  }
}
