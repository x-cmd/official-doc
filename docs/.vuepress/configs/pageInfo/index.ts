import type { HeadConfig, AppOptions } from 'vuepress'
import { path } from '@vuepress/utils';
import * as navbar from './navbar'
import * as sidebar from './sidebar'

// if your repo is '/',you can delete REPO_NAME
const REPO_NAME = 'x-cmd-official-template'

export const lang = 'zh-CN'

export const base = `/${REPO_NAME}/`

export const title = `X-Cmd`

export const description = 'X-Cmd 一个快速，跨平台功能强大的终端插件，让你的终端有无限可能!'

export const headConfig: HeadConfig[] = [
  [ 'meta', { name: 'application-name', content: 'X-Cmd' } ],
  [ 'meta', { name: 'apple-mobile-web-app-title', content: 'X-Cmd' } ],
  [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' } ],
  [ 'meta', { name: 'msapplication-TileColor', content: '#3eaf7c' } ],
  [ 'meta', { name: 'msapplication-TileImage', content: `/${REPO_NAME}/images/icons/favicon-192.png` } ],
  [ 'meta', { name: 'theme-color', content: '#3eaf7c' } ],
  [ 'meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' } ],

  [ 'link', { rel: 'shortcut icon', href: `/${REPO_NAME}/images/favicon.ico` } ],
  [ 'link', { rel: 'icon', type: 'image/x-icon', size: '16x16 32x32', href: `/${REPO_NAME}/images/favicon.ico` } ],
  [ 'link', { rel: 'apple-touch-icon', href: `/${REPO_NAME}/images/icons/apple-touch-icon.png` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "152x152", href: `/${REPO_NAME}/images/icons/favicon-152-precomposed.png` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "144x144", href: `/${REPO_NAME}/images/icons/favicon-144-precomposed.png` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "120x120", href: `/${REPO_NAME}/images/icons/favicon-120-precomposed.png` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "114x114", href: `/${REPO_NAME}/images/icons/favicon-114-precomposed.png` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "180x180", href: `/${REPO_NAME}/images/icons/favicon-180-precomposed.png` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "72x72", href: `/${REPO_NAME}/images/icons/favicon-72-precomposed.png` } ],
  [ 'link', { rel: 'apple-touch-icon', sizes: "57x57", href: `/${REPO_NAME}/images/icons/favicon-57-precomposed.png` } ],
  [ 'link', { rel: 'icon', sizes: "32x32", href: `/${REPO_NAME}/images/icons/favicon-32.png` } ],
  [ 'link', { rel: 'icon', sizes: "192x192", href: `/${REPO_NAME}/images/icons/favicon-192.png` } ],
  [ 'link', { rel: 'mask-icon', href: '/images/icons/safari-pinned-tab.svg', color: '#3eaf7c' } ],

  [ 'link', { rel: 'manifest', href: `/${REPO_NAME}/manifest.webmanifest` } ],
]

export const themeConfig: AppOptions["themeConfig"] = {
  navbar: navbar.zh,
  sidebar: sidebar.zh,
  sidebarDepth: 1,
  repo: 'https://gitee.com/zhengqbbb/x-cmd-official-template',
  logo: '/images/logo.png',
  lastUpdatedText: '更新时间',
  docsRepo: 'https://gitee.com/zhengqbbb/x-cmd-official-template',
  docsBranch: 'main',
  docsDir: 'docs',
  editLinkPattern: ':repo/',
}

