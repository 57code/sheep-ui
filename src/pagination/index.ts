import { App } from 'vue'
import Pagination from './src/pagination'

// 具名导出
export { Pagination }

// 导出插件
export default {
  install(app: App) {
    app.component('SPagination', Pagination)
  }
}
