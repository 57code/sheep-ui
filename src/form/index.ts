import { App } from 'vue'
import Form from './src/form'
import FormItem from './src/form-item'

export { Form }
export default {
  install(app: App) {
    app.component('SForm', Form)
    app.component('SFormItem', FormItem)
  }
}
