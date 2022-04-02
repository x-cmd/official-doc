import type { MarkdownOptions } from "@vuepress/markdown";
import type { AppOptions, HeadConfig } from "vuepress";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

// if your repo is '/',you can delete REPO_NAME
// const REPO_NAME = 'x-cmd-official-template'

export const lang = "zh-CN";

export const USlang = "en-US";

export const base = "/";

export const title = `x-cmd`;

export const description = "x-cmd 一个快速，跨平台功能强大的终端插件，让你的终端有无限可能!";

export const USdescription =
  "X-cmd is a fast, cross-platform powerful terminal plug-in that makes your terminal have unlimited possibilities!";
/* eslint-disable prettier/prettier */
export const headConfig: HeadConfig[] = [
  ["meta", { name: "google-site-verification", content: "_18qqOuIfzijSG7HV3nMHul_TLcD5hnpJBB0m3omcN0" }],
  ["meta", { name: "baidu-site-verification", content: "code-94Da26LdEW" }],
  ["meta", { name: "360-site-verification", content: "71117d0a062655745c2e8657e7b2f9bf" }],
  ["meta", { name: "bytedance-verification-code", content: "W9u8mjz2WL0N6b4V30co" }],
  ["meta", { name: "sogou_site_verification", content: "TG2EXJQGxy" }],
  ["meta", { name: "application-name", content: "x-cmd" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "x-cmd" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
  ["meta", { name: "msapplication-TileImage", content: `/images/icons/favicon-192.png` }],
  ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" }],

  ["link", { rel: "shortcut icon", href: `/images/favicon.ico` }],
  ["link", { rel: "icon", type: "image/x-icon", size: "16x16 32x32", href: `/images/favicon.ico` }],
  ["link", { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "152x152", href: `/images/icons/favicon-152-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "144x144", href: `/images/icons/favicon-144-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "120x120", href: `/images/icons/favicon-120-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "114x114", href: `/images/icons/favicon-114-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "180x180", href: `/images/icons/favicon-180-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "72x72", href: `/images/icons/favicon-72-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "57x57", href: `/images/icons/favicon-57-precomposed.png` }],
  ["link", { rel: "icon", sizes: "32x32", href: `/images/icons/favicon-32.png` }],
  ["link", { rel: "icon", sizes: "192x192", href: `/images/icons/favicon-192.png` }],
  ["link", { rel: "mask-icon", href: "/images/icons/safari-pinned-tab.svg", color: "#3eaf7c" }],

  ["link", { rel: "manifest", href: `/manifest.webmanifest` }]
];

export const locales: AppOptions['locales'] = {
    "/": {
      lang: lang,
      title: title,
      description: description
    },
    "/en/": {
      lang: USlang,
      title: title,
      description: USdescription
    }
}

export const themeConfig: AppOptions["themeConfig"] = {
  sidebar: sidebar.zh,
  sidebarDepth: 1,
  logo: "/images/logo.png",
  lastUpdatedText: "更新时间",
  docsRepo: "https://github.com/x-cmd/official-doc",
  docsBranch: "main",
  docsDir: "docs",
  editLinkPattern: ":repo/",
  backToHome: "> cd $HOME",
  locales: {
    '/': {
      selectLanguageName: '简体中文',
      selectLanguageText: '选择语言',
      navbar: navbar.zh,
    },
    '/en/': {
      selectLanguageName: 'English',
      selectLanguageText: 'Languages',
      navbar: navbar.en,
    },
  },
};

export const markdownConfig: MarkdownOptions = {
  code: {
    lineNumbers: false
  }
};
