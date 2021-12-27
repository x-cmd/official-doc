import type { PluginConfig } from '@vuepress/core'

const codeCopyPlugin: PluginConfig = [
  '@x-cmd/vuepress-plugin-clipboard',
  {
    staticIcon: true,
    backgroundTransition: false
  },
]

export default codeCopyPlugin;