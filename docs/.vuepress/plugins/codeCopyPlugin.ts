import type { PluginConfig } from '@vuepress/core'

const codeCopyPlugin: PluginConfig = [
  '@x-cmd/vuepress-plugin-clipboard',
  {},
]

export default codeCopyPlugin;