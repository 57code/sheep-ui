import type { App } from 'vue'
import { UserGroupIcon as _UserGroupIcon } from './user-group'

const UserGroupIcon = {
  install: (app: App) => {
    app.component('UserGroupIcon', _UserGroupIcon)
  }
}

export default UserGroupIcon
