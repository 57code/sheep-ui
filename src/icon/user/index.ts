import type { App } from 'vue'
import { UserIcon as _UserIcon } from './user'

const UserIcon = {
  install: (app: App) => {
    app.component('UserIcon', _UserIcon)
  }
}

export default UserIcon
