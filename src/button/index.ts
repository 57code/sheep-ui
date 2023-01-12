// button/index.ts
import { App } from 'vue'
import Button from './src/Button'

export { Button }

export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
}
