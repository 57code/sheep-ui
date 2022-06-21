const sidebar = {
  '/': [
    { text: '快速开始', link: '/', items: [] },
    {
      text: '通用',
      items: [{ text: 'Button 按钮', link: '/components/button/' }]
    },
    { text: '导航', items: [] },
    { text: '反馈', items: [] },
    { text: '数据录入' ,
      items: [{ text: 'Input 输入框', link: '/components/input/' }]
    },
    { text: '数据展示', items: [] },
    { text: '布局',
      items:[
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
