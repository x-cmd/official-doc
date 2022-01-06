import type { Page, PluginConfig } from "@vuepress/core";
import type { DocsearchOptions } from "@vuepress/plugin-docsearch";
import type { GoogleAnalyticsPluginOptions } from "@vuepress/plugin-google-analytics";
import type { PwaPluginOptions } from "@vuepress/plugin-pwa";
import type { PwaPopupPluginOptions } from "@vuepress/plugin-pwa-popup";
import type { SearchPluginOptions } from "@vuepress/plugin-search";
import { path } from "@vuepress/utils";

/**
 * @description: Register Components
 */
export const registerComponentPlugin: PluginConfig = [
  "@vuepress/register-components",
  {
    components: {
      HomePage: path.resolve(__dirname, "../components/pages/HomePage.vue")
    }
  }
];

/**
 * @description: Search Plugin
 */
export const docSearchPlugin: PluginConfig = [
  "@vuepress/plugin-docsearch",
  {
    apiKey: "dd1cbbb79a132fe023c59224395dc215",
    indexName: "x-cmd",
    appId: "CXZ8IP0O5G",
    placeholder: "搜索"
  } as DocsearchOptions
];

export const vuepressSearchPlugin: PluginConfig = [
  "@vuepress/plugin-search",
  {
    // 排除首页
    isSearchable: (page: Page) => page.path !== "/",
    locales: {
      "/": {
        placeholder: "搜索"
      }
    }
  } as unknown as SearchPluginOptions
];

/**
 * @description: PWA
 */
export const pwaPlugin: PluginConfig = [
  "@vuepress/pwa",
  {
    skipWaiting: false
  } as PwaPluginOptions
];

export const pwaPopupPlugin: PluginConfig = [
  "@vuepress/plugin-pwa-popup",
  {
    locales: {
      // "/": {
      //     message: "New content is available.",
      //     buttonText: "Refresh",
      // },
      "/": {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }
  } as PwaPopupPluginOptions
];

/**
 * @description: Analytics Plugin
 */
export const googleAnalytics: PluginConfig = [
  "@vuepress/plugin-google-analytics",
  {
    id: "G-"
  } as GoogleAnalyticsPluginOptions
];
