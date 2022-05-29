import type { App } from 'vue'
import { SearchIcon as _SearchIcon } from './search'

const SearchIcon = {
  install: (app: App) => {
    app.component('SearchIcon', _SearchIcon)
  }
}

export default SearchIcon
