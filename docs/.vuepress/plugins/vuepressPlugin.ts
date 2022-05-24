import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { palettePlugin } from "@vuepress/plugin-palette";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { pwaPopupPlugin } from "@vuepress/plugin-pwa-popup";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";

/**
 * @description: Register Components
 */
export const genComponentPlugin = registerComponentsPlugin({
  components: {
    HomePage: path.resolve(__dirname, "../components/pages/HomePage.vue"),
    Terminal: path.resolve(__dirname, "../components/Terminal.vue")
  }
});

/**
 * @description: sass variables import
 */
export const sassPalettePlugin = palettePlugin({
  preset: "sass",
  userPaletteFile: ".vuepress/styles/vars/palette.scss"
});

/**
 * @description: Vuepress Document Search Plugin
 */
export const algoliaSearchPlugin = docsearchPlugin({
  apiKey: "6a0b75ff16eb6d2f06a04fe2aed71d13",
  indexName: "x-cmd",
  appId: "FR46CTJZQV",
  locales: {
    "/zh/": {
      placeholder: "搜索文档",
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档"
        },
        modal: {
          searchBox: {
            resetButtonTitle: "清除查询条件",
            resetButtonAriaLabel: "清除查询条件",
            cancelButtonText: "取消",
            cancelButtonAriaLabel: "取消"
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "没有搜索历史",
            saveRecentSearchButtonTitle: "保存至搜索历史",
            removeRecentSearchButtonTitle: "从搜索历史中移除",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle: "从收藏中移除"
          },
          errorScreen: {
            titleText: "无法获取结果",
            helpText: "你可能需要检查你的网络连接"
          },
          footer: {
            selectText: "选择",
            navigateText: "切换",
            closeText: "关闭",
            searchByText: "搜索提供者"
          },
          noResultsScreen: {
            noResultsText: "无法找到相关结果",
            suggestedQueryText: "你可以尝试查询",
            reportMissingResultsText: "你认为该查询应该有结果？",
            reportMissingResultsLinkText: "点击反馈"
          }
        }
      }
    }
  }
});

/**
 * @description: PWA Plugin
 */
export const genPwaPlugin = pwaPlugin({
  skipWaiting: false
});

/**
 * @description: PWA Popup Plugin
 */
export const genPwaPopupPlugin = pwaPopupPlugin({
  locales: {
    "/": {
      message: "New content is available.",
      buttonText: "Refresh"
    },
    "/zh/": {
      message: "文档有新内容，已准备就绪",
      buttonText: "刷新"
    }
  }
});

/**
 * @description: Google Analytics Plugin
 */
export const googleSEOPlugin = googleAnalyticsPlugin({
  id: "G-2FRCSZQS1X"
});

/**
 * @description: Vuepress Search Plugin
 */
// export const vuepressSearchPlugin: PluginConfig = [
//   "@vuepress/plugin-search",
//   {
//     // 排除首页
//     isSearchable: (page: Page) => page.path !== "/",
//     locales: {
//       "/zh/": {
//         placeholder: "搜索"
//       },
//       "/": {
//         placeholder: "Search"
//       }
//     }
//   } as unknown as SearchPluginOptions
// ];
