import * as inquirer from 'inquirer'
import { red } from 'kolorist'
import createComponent from '../shared/create-component'

// 创建类型
const CREATE_TYPES = ['component', 'lib-entry']
// 组件分类
const DOCS_CATEGORIES = ['通用', '导航', '反馈', '数据录入', '数据显示']

export async function onCreate(args = { type: '' }) {
  // 容错，判断用户是否输入type
  let { type } = args
  // 未输入，提示用户重新输入，给用户一个列表去选择
  if (!type) {
    const result = await inquirer.prompt([
      {
        // 获取输入后的属性名
        name: 'type',
        // 交互方式为列表
        type: 'list',
        // 提示信息
        message: '（必填）请选择创建类型：',
        // 选项列表
        choices: CREATE_TYPES,
        // 默认选项
        default: 0
      }
    ])
    type = result.type
  }

  // 另一个错误，用户输入了信息，但是输入错误，要求用户重新选择
  if (!CREATE_TYPES.includes(type)) {
    console.log(
      red(
        `当前类型仅支持：${CREATE_TYPES.join(
          ', '
        )}，您输入的是："${type}", 请重新选择！`
      )
    )
    return onCreate()
  }

  // 输入则创建对应的内容
  try {
    switch (type) {
      case 'component':
        // 如果是组件，我们还需要收集组件信息
        const info = await inquirer.prompt([
          {
            name: 'name',
            type: 'input',
            message: '（必填）请输入组件name，将用作文件名和文件夹名称',
            validate(value: string) {
              if (value.trim() === '') {
                return '组件name不能为空！'
              }
              return true
            }
          },
          {
            name: 'title',
            type: 'input',
            message: '（必填）请输入组件中文名称，将用作文档列表中显示',
            validate(value: string) {
              if (value.trim() === '') {
                return '组件名称不能为空！'
              }
              return true
            }
          },
          {
            name: 'category',
            type: 'list',
            message: '（必填）请选择组件分类，将用作文档列表分类中',
            choices: DOCS_CATEGORIES,
            default: 0
          }
        ])
        // 创建组件模板文件
        createComponent(info)
        break

      default:
        break
    }
  } catch (error) {}
}
