import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview
} from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [{ text: '快速开始', link: '/quick-start' }]
      },
      {
        text: '组件',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'Select 选择器', link: '/components/select' },
          { text: 'Switch 开关', link: '/components/switch' },
          { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
          { text: 'Tooltip 文字提醒', link: '/components/tooltip' },
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
          { text: 'Form 表单', link: '/components/form' },
          { text: 'Message 消息', link: '/components/message' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
