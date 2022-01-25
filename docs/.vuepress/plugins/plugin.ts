import type { SearchConsolePluginOptions } from "@x-cmd/vuepress-plugin-china-seo";
import type { ClipboardOptions } from "@x-cmd/vuepress-plugin-code-copy";
import type { PluginConfig } from "vuepress";

/**
 * @description: Code Copy Plugin
 */
export const codeCopyPlugin: PluginConfig = [
  "@x-cmd/vuepress-plugin-code-copy",
  {
    staticIcon: true,
    align: "top",
    delay: 500
  } as ClipboardOptions
];

/**
 * @description: Baidu Analytics | 360,baidu,byteDance Autopush
 */
export const chinaSEOPlugin: PluginConfig = [
  "@x-cmd/vuepress-plugin-china-seo",
  {
    baiduId: "bf054898b9d0571dbc66734813899364",
    autoPush360Switch: false
  } as SearchConsolePluginOptions
];
