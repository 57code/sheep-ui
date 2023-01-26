import { App } from 'vue'
import BaseSelectAll from './src/base-select-all'
import BaseSelectionBox from './src/base-selection-box'
import BaseSemiSelection from './src/base-semi-selection'

// 具名导出
export { BaseSelectAll, BaseSelectionBox, BaseSemiSelection }

// 导出插件
export default {
  install(app: App) {
    app.component(BaseSelectAll.name, BaseSelectAll) // 全选
    app.component(BaseSelectionBox.name, BaseSelectionBox) // 选择框
    app.component(BaseSemiSelection.name, BaseSemiSelection) // 半选
  }
}
