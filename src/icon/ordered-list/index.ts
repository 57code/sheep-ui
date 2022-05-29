import type { App } from 'vue'
import { OrderedListIcon as _OrderedListIcon } from './ordered-list'

const OrderedListIcon = {
  install: (app: App) => {
    app.component('OrderedListIcon', _OrderedListIcon)
  }
}

export default OrderedListIcon
