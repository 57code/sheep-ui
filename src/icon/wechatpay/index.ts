import type { App } from 'vue'
import { WechatpayIcon as _WechatpayIcon } from './wechatpay'

const WechatpayIcon = {
  install: (app: App) => {
    app.component('WechatpayIcon', _WechatpayIcon)
  }
}

export default WechatpayIcon
