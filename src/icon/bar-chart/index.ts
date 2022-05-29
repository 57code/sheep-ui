import type { App } from 'vue'
import { BarChartIcon as _BarChartIcon } from './bar-chart'

const BarChartIcon = {
  install: (app: App) => {
    app.component('BarChartIcon', _BarChartIcon)
  }
}

export default BarChartIcon
