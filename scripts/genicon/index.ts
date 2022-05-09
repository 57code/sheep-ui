import path from 'path'
import fs from 'fs-extra'
import { optimize, OptimizedSvg } from 'svgo' // 优化svg图标
import glob from 'glob'
// import { JSDOM } from 'jsdom'
import { toKebabCase, toPascalCase } from '../convert-case'
import svgOptions from './svg.config'
import {
  getIconTsx,
  getIconIndex,
  getSheepVueIcon,
  getIndex
} from './vue-template'

const root = process.cwd()
const iconPath = path.resolve(root, 'icon/_svgs')
const iconComponentPath = path.resolve(root, 'src/icon')

// Icon' data structure
interface IconData {
  title: string
  type: string
  list: Array<{
    name: string
    componentName: string
    path: string
  }>
}

const iconMap: Record<string, string> = {
  direction: '方向指示类图标',
  tips: '提示建议类图标',
  interactiveButton: '交互按钮类图标',
  edit: '编辑类图标',
  media: '影音类图标',
  logo: '商标类图标',
  general: '通用类图标'
}
// 遍历获取icon下的svg的data数据
const getSVGData = () => {
  const result = []
  for (const key of Object.keys(iconMap)) {
    const iconData: IconData = {
      title: iconMap[key],
      type: key,
      list: []
    }
    const files = glob.sync(`${toKebabCase(key)}/**/*.svg`, {
      cwd: iconPath,
      absolute: true
    })
    for (const file of files) {
      const name = `${path.basename(file, '.svg')}`
      iconData.list.push({
        name,
        componentName: `${toPascalCase(name)}Icon`,
        path: file
      })
    }
    result.push(iconData)
  }

  return result
}

const buildIconComponent = async (svgData: IconData[]) => {
  // 对iconData中的list遍历，icon 包括  icon下的vue component 和 index.ts 文件
  // 1、先通过svgo对svg进行优化，然后生成真正需要的icon vue component，生成单个组件的index.ts文件

  await fs.emptyDir(path.resolve(root, 'src/icon'))

  for (const iconData of svgData) {
    for (const item of iconData.list) {
      const svgFile = fs.readFileSync(item.path, 'utf8')
      // optimize 过程
      //       <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">
      // <path d="M24 29C30.0751 29 35 24.0751 35 18C35 11.9249 30.0751 7 24 7C17.9249 7 13 11.9249 13 18C13 24.0751 17.9249 29 24 29ZM24 29V44" stroke-linecap="butt"></path>
      // <path d="M15 36H33" stroke-linecap="butt"></path>
      // </svg>

      // <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4"><path d="M24 29c6.075 0 11-4.925 11-11S30.075 7 24 7s-11 4.925-11 11 4.925 11 11 11Zm0 0v15M15 36h18"/></svg>
      try {
        const { data } = optimize(svgFile, {
          path: item.path,
          ...svgOptions
        }) as OptimizedSvg
        console.log(data, item.name, item.path)
        // const svgElement = JSDOM.fragment(data).firstElementChild
        await fs.outputFile(
          path.resolve(iconComponentPath, `${item.name}/${item.name}.tsx`),
          getIconTsx({
            name: item.name,
            componentName: item.componentName,
            svgHtml: data
          })
        )
        await fs.outputFile(
          path.resolve(iconComponentPath, `${item.name}/index.ts`),
          getIconIndex({
            name: item.name,
            componentName: item.componentName
            // svgHtml: data
          })
        )
        console.log(`Build ${item.componentName} Success!`)
      } catch (error) {
        console.error(`Build ${item.componentName} Failed: ${error}`)
      }
    }
  }
}

const buildIndex = async (svgData: IconData[]) => {
  const components = []
  const imports = []
  const exports = []
  for (const iconData of svgData) {
    for (const item of iconData.list) {
      const importStr = `import ${item.componentName} from '\.\/${item.name}'`
      imports.push(importStr)
      components.push(item.componentName)
      exports.push(
        `export { default as ${item.componentName} } from '\.\/${item.name}'`
      )
    }
  }
  try {
    await fs.outputFile(
      path.resolve(root, 'src/icon/sheep-vue-icon.ts'),
      getSheepVueIcon({ imports, components })
    )
    console.log('build sheep-vue-icon.ts success')

    await fs.outputFile(
      path.resolve(root, 'src/icon/index.ts'),
      getIndex(exports)
    )
    console.log('build index.ts success')
  } catch (error) {
    console.error(error)
  }
}

const genIcon = async () => {
  const data = getSVGData()
  buildIconComponent(data)
  buildIndex(data)
}
genIcon()
export default genIcon
