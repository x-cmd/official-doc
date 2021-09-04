import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: 'markdown语法效果展示',
      children: [
        '/helloword.md',
      ],
    },
  ],
  '/helloword/': [
    {
      text: 'Hello',
      children: [
        '/helloword/README.md',
        '/helloword/helloword.md',
      ],
    }
  ],
}
