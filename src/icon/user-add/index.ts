import type { App } from 'vue'
import { UserAddIcon as _UserAddIcon } from './user-add'

const UserAddIcon = {
  install: (app: App) => {
    app.component('UserAddIcon', _UserAddIcon)
  }
}

export default UserAddIcon
