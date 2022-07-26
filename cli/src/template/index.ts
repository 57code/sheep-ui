import { upperFirst } from './utils'

export default function genIndexTemplate(name) {
  const compName = upperFirst(name)
  return `\
import { App } from 'vue'
import ${compName} from './src/${name}'
import { installComponent } from '../install'
import type { SheepUIOptions } from '../_utils/global-config'

// 具名导出
export { ${compName} }

// 导出插件
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, ${compName}, options)
  }
}  
`
}
