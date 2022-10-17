import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = [
  {
    text: '快速开始',
    items: [
      { text: '安装', link: '/guide/install' } // /guide/install.md
    ]
  },
  {
    text: '通用',
    items: [
      { text: 'Button 按钮', link: '/components/button/' },
      { text: 'Icon 图标', link: '/components/icon/' }
    ]
  },
  {
    text: '导航',
    items: [
      { text: 'Pagination 分页', link: '/components/pagination/' },
      { text: 'Tab 选项卡', link: '/components/tabs/' },
    ]
  },
  { text: '反馈', items: [
    { text: 'Modal 模态框', link: '/components/modal/' }
  ] },
  { text: '数据录入', items: [
    { text: 'Form 表单', link: '/components/form/' }
  ] },
  { text: '数据展示', items: [{ text: 'Tree 树', link: '/components/tree/' }] },
  { text: '布局', items: [] }
]

export default {
  themeConfig: {
    sidebar
  },
  markdown: {
    config: md => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    }
  }
}
