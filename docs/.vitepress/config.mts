// 导入 VitePress 的配置定义函数
import { defineConfig } from 'vitepress'

base: '/vitepress/'
// VitePress 站点配置
// 参考文档: https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点标题（显示在浏览器标签页）
  title: "OpenArchiCN贡献指南",
  
  // 站点描述（用于 SEO 和 meta 标签）
  description: "OpenArchiCN 一个专注建筑全产业链数字化的开源社区",
  
  // 主题配置
  themeConfig: {
    // 参考文档: https://vitepress.dev/reference/default-theme-config
    
    // 导航栏配置
    nav: [
      // 导航项：Home 链接到首页
      { text: '首页', link: '/' },
      // 导航项：Examples 链接到 Markdown 示例页
      { text: '学习教程', link: '/markdown-examples' }
    ],

    // 侧边栏配置
    sidebar: [
      {
        // 侧边栏分组标题
        text: '学习教程',
        // 侧边栏项目列表
        items: [
          // Markdown 示例文档链接
          { text: 'Markdown Examples', link: '/markdown-examples' },
          // API 示例文档链接
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'md 学习教程', link: '/wm.md' }
        ]
      }
    ],

    // 社交链接配置（显示在导航栏或页脚）
    socialLinks: [
      // GitHub 链接
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})