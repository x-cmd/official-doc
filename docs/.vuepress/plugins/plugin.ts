import { searchConsolePlugin } from "@x-cmd/vuepress-plugin-china-seo";
import { codeCopyPlugin } from "@x-cmd/vuepress-plugin-code-copy";
import { searchPlugin } from "@x-cmd/vuepress-plugin-search";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

/**
 * @description: Code Copy Plugin
 */
export const genCodeCopyPlugin = codeCopyPlugin({
  staticIcon: true,
  align: "top",
  delay: 500
});

/**
 * @description: Baidu Analytics | 360,baidu,byteDance Autopush
 */
export const chinaSEOPlugin = searchConsolePlugin({
  baiduId: "bf054898b9d0571dbc66734813899364",
  autoPush360Switch: false
});

/**
 * @description: Docs Search Plugin
 * @from prepareSearchIndex
 */
export const docsSearchPlugin = searchPlugin({
  hotKeys: [
    {
      key: "k",
      ctrl: true
    },
    {
      key: "k",
      command: true
    }
  ],
  locales: {
    "/": {
      placeholder: "搜索"
    }
  },
  // options
  isSearchable: (page) => {
    return !(page.frontmatter.home || page.frontmatter.layout === "404");
  },
  getExtraFields: (page) => {
    return (page.frontmatter.tags as string[]) ?? [];
  }
});

/**
 * @description: Sitemap Plugin
 */
export const genSitemapPlugin = sitemapPlugin({
  hostname: "https://www.x-cmd.com",
  excludeUrls: ["/404.html"]
});
