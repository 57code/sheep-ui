import type { App } from 'vue'
import { WeiboIcon as _WeiboIcon } from './weibo'

const WeiboIcon = {
  install: (app: App) => {
    app.component('WeiboIcon', _WeiboIcon)
  }
}

export default WeiboIcon
