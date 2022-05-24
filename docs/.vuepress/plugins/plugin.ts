import { searchConsolePlugin } from "@x-cmd/vuepress-plugin-china-seo";
import { codeCopyPlugin } from "@x-cmd/vuepress-plugin-code-copy";
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
 * @description: sitemap Plugin
 */
export const genSitemapPlugin = sitemapPlugin({
  hostname: "https://www.x-cmd.com",
  excludeUrls: ["/404.html"]
});
