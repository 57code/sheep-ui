import type { App } from 'vue'
import { BookIcon as _BookIcon } from './book'

const BookIcon = {
  install: (app: App) => {
    app.component('BookIcon', _BookIcon)
  }
}

export default BookIcon
