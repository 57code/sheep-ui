import { App } from 'vue'
import Modal from './modal'

export { Modal }
export default {
  install(app: App) {
    app.component('SModal', Modal)
  }
}
