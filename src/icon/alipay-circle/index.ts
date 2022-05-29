import type { App } from 'vue'
import { AlipayCircleIcon as _AlipayCircleIcon } from './alipay-circle'

const AlipayCircleIcon = {
  install: (app: App) => {
    app.component('AlipayCircleIcon', _AlipayCircleIcon)
  }
}

export default AlipayCircleIcon
