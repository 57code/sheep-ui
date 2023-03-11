import { App } from 'vue'
import Table from './src/table'
import Column from './src/column'

export { Table, Column }

export default {
  install(app: App) {
    app.component('STable', Table)
    app.component('SColumn', Column)
  }
}
