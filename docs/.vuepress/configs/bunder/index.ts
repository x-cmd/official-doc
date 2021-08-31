import type { AppOptions, WebpackChainConfig } from 'vuepress'
const isProd = process.env.NODE_ENV === 'production'

export const bundler: AppOptions["bundler"] = // specify bundler via environment variable
process.env.DOCS_BUNDLER ??
// use vite in dev, use webpack in prod
(isProd ? '@vuepress/webpack' : '@vuepress/vite');

export const bundlerConfig: AppOptions["bundlerConfig"] = {
  viteOptions: {
    css: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer')
        ]
      }
    },
  },
  chainWebpack: (config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => {
  }
}