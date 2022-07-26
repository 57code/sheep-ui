import { ensureDirSync } from 'fs-extra'
import { resolve } from 'path'
import { lightBlue, lightGreen } from 'kolorist'
import { WriteFileOptions } from 'fs'
import { writeFileSync } from 'fs-extra'
import genCoreTemplate from '../template/core'
import genTypesTemplate from '../template/types'
import genStyleTemplate from '../template/style'
import genTestTemplate from '../template/test'
import genIndexTemplate from '../template/index'

export type ComponentMeta = {
  name: string
  title: string
  category: string
}

const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: 'utf-8' }

export default function createComponent(meta: ComponentMeta) {
  // 拼接组件目录
  const componentDir = resolve('../src', meta.name)

  // 其他核心文件：组件源文件、类型文件、样式文件
  const compSrcDir = resolve(componentDir, 'src')
  const styleDir = resolve(componentDir, 'style')
  const testDir = resolve(componentDir, 'test')

  ensureDirSync(compSrcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)

  // 创建组件核心文件：组件文件，类型文件，样式文件
  // 组件文件
  const coreFilePath = resolve(compSrcDir, meta.name) + '.tsx'
  writeFileSync(coreFilePath, genCoreTemplate(meta.name), WRITE_FILE_OPTIONS)

  // 组件类型文件
  const typesFilePath = resolve(compSrcDir, meta.name + '-type.ts')
  writeFileSync(typesFilePath, genTypesTemplate(meta.name), WRITE_FILE_OPTIONS)
  // 样式文件
  const styleFilePath = styleDir + `/${meta.name}.scss`
  writeFileSync(styleFilePath, genStyleTemplate(meta.name), WRITE_FILE_OPTIONS)

  // 测试文件
  const testFilePath = testDir + `/${meta.name}.test.ts`
  writeFileSync(testFilePath, genTestTemplate(meta.name), WRITE_FILE_OPTIONS)

  // 索引文件
  const indexFilePath = componentDir + '/index.ts'
  writeFileSync(indexFilePath, genIndexTemplate(meta.name), WRITE_FILE_OPTIONS)

  console.log(
    lightGreen(
      `✔ The component "${meta.name}" directory has been generated successfully.`
    )
  )
  console.log(lightBlue(`✈ Target directory: ${componentDir}`))
}
