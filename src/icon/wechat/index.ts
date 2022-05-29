import type { App } from 'vue'
import { WechatIcon as _WechatIcon } from './wechat'

const WechatIcon = {
  install: (app: App) => {
    app.component('WechatIcon', _WechatIcon)
  }
}

export default WechatIcon
