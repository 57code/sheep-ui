const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [{ text: 'Button 按钮', link: '/components/button/' }]
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' ,
      children: [{ text: 'Input 输入框', link: '/components/input/' }]
    },
    { text: '数据展示' },
    { text: '布局',
      children:[
        { text:'Space 间距',link:'/components/space/'}
      ]
    }
  ]
}

const config = {
  themeConfig: {
    sidebar
  },
  markdown: {
    config(md) {
      // 这里可以使用markdown-it插件
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin,{
        cssPreprocessor: 'scss'
      })
    }
  }
}

export default config
