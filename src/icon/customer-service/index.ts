import type { App } from 'vue'
import { CustomerServiceIcon as _CustomerServiceIcon } from './customer-service'

const CustomerServiceIcon = {
  install: (app: App) => {
    app.component('CustomerServiceIcon', _CustomerServiceIcon)
  }
}

export default CustomerServiceIcon
