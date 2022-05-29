import type { App } from 'vue'
import { FilterIcon as _FilterIcon } from './filter'

const FilterIcon = {
  install: (app: App) => {
    app.component('FilterIcon', _FilterIcon)
  }
}

export default FilterIcon
