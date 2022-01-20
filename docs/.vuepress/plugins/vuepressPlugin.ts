import type { DocsearchOptions } from "@vuepress/plugin-docsearch";
import type { GoogleAnalyticsPluginOptions } from "@vuepress/plugin-google-analytics";
import type { PalettePluginOptions } from "@vuepress/plugin-palette";
import type { PwaPluginOptions } from "@vuepress/plugin-pwa";
import type { PwaPopupPluginOptions } from "@vuepress/plugin-pwa-popup";
import type { SearchPluginOptions } from "@vuepress/plugin-search";
import { path } from "@vuepress/utils";
import type { Page, PluginConfig } from "vuepress";

/**
 * @description: Register Components
 */
export const registerComponentPlugin: PluginConfig = [
  "@vuepress/register-components",
  {
    components: {
      HomePage: path.resolve(__dirname, "../components/pages/HomePage.vue"),
      Terminal: path.resolve(__dirname, "../components/Terminal.vue")
    }
  }
];

/**
 * @description: sass variables import
 */
export const sassPalettePlugin: PluginConfig = [
  "@vuepress/plugin-palette",
  {
    preset: "sass",
    userPaletteFile: ".vuepress/styles/vars/palette.scss"
  } as PalettePluginOptions
];

/**
 * @description: Vuepress Document Search Plugin
 */
export const docSearchPlugin: PluginConfig = [
  "@vuepress/plugin-docsearch",
  {
    apiKey: "6a0b75ff16eb6d2f06a04fe2aed71d13",
    indexName: "x-cmd",
    appId: "FR46CTJZQV",
    placeholder: "搜索"
  } as DocsearchOptions
];

/**
 * @description: Vuepress Search Plugin
 */
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
 * @description: PWA Plugin
 */
export const pwaPlugin: PluginConfig = [
  "@vuepress/pwa",
  {
    skipWaiting: false
  } as PwaPluginOptions
];

/**
 * @description: PWA Popup Plugin
 */
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
 * @description: Google Analytics Plugin
 */
export const googleAnalytics: PluginConfig = [
  "@vuepress/plugin-google-analytics",
  {
    id: "G-2FRCSZQS1X"
  } as GoogleAnalyticsPluginOptions
];
