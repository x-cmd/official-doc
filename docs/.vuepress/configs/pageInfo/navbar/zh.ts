import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: 'hello',
    link: '/',
  },
  {
    text: 'word',
    children: [
      {
        text: 'word template',
        children: [
          '/helloword.md',
        ],
      },
      {
        text: 'hello word',
        children: [
          '/helloword/README.md'
        ],
      },
    ],
  }
]
