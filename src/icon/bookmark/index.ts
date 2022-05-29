import type { App } from 'vue'
import { BookmarkIcon as _BookmarkIcon } from './bookmark'

const BookmarkIcon = {
  install: (app: App) => {
    app.component('BookmarkIcon', _BookmarkIcon)
  }
}

export default BookmarkIcon
