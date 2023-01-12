//build.js
const path = require('path')
const fsExtra = require('fs-extra')
// 新增
const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const inquirer = require('inquirer')
let version

const entryFile = path.resolve(__dirname, './entry.ts')
// 组件目录
const componentsDir = path.resolve(__dirname, '../src')
const outputDir = path.resolve(__dirname, '../build')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 创建时传入包名name
const createPackageJson = name => {
  // 根据传入name决定包名、主文件和主模块名称
  const fileStr = `{
    "name": "${name ? name : 'sheep-ui'}",
    "version": "${version}",
    "main": "${name ? 'index.umd.js' : 'sheep-ui.umd.js'}",
    "module": "${name ? 'index.js' : 'sheep-ui.js'}",
    "author": "杨村长",
    "github": "",
    "description": "羊村第一个组件库Sheep-UI，以后村里羊圈能不能建好就看它了！",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/57code/sheep-ui.git"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/57code/sheep-ui/issues"
    },
  }`
  // 存在包名称，给单组件生成package.json文件
  if (name) {
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    )
  }
}
// 单组件按需构建
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )

  createPackageJson(name)
}

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'sheep-ui',
          fileName: 'sheep-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
  createPackageJson()
}

const buildLib = async () => {
  if (/^\d+(?:\.\d+){2}$/.test(process.argv.slice(2)[0])) {
    //npm run build 版本号会执行
    version = process.argv.slice(2)[0]
  } else if (
    process.argv.slice(2)[0] == '--v' ||
    process.argv.slice(2)[0] == '--version'
  ) {
    // node ./scripts/build.js --v 版本号 或 node ./scripts/build.js --version 版本号 或 yarn build --v 版本号 或 yarn build --version 版本号 会执行
    version = process.argv.slice(2)[1]
  } else if (!/^\d+(?:\.\d+){2}$/.test(version)) {
    // 没有版本号或者版本号不正确会执行
    let { version: res } = await inquirer.prompt({
      name: 'version',
      type: 'input',
      message: '（必填）请输入版本号 ，将用min-sheep-ui发布于使用：',
      validate: value => {
        if (value.trim() === '') {
          return '版本号不能为空'
        }
        if (!/^\d+(?:\.\d+){2}$/.test(value)) {
          return '版本号格式不正确，版本号一个为 0.0.0 这种格式'
        }
        return true
      }
    })
    version = res
  }
  await buildAll()
  // 创建单组件包
  // 获取组件名称组成的数组
  fs.readdirSync(componentsDir)
    .filter(name => {
      // 过滤组件目录：只要目录不要文件，且目录中包含index.ts
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      await buildSingle(name)
    })
}

buildLib()
