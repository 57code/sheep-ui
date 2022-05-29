import type { App } from 'vue'
import { WeiboCircleFillIcon as _WeiboCircleFillIcon } from './weibo-circle-fill'

const WeiboCircleFillIcon = {
  install: (app: App) => {
    app.component('WeiboCircleFillIcon', _WeiboCircleFillIcon)
  }
}

export default WeiboCircleFillIcon
