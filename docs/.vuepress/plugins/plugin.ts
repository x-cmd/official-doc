import type { BaiduAnalyticsPluginOptions } from "@x-cmd/vuepress-plugin-baidu-analytics";
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
 * @description: Baidu Analytics Plugin
 */
export const BaiduAnalytics: PluginConfig = [
  "@x-cmd/vuepress-plugin-baidu-analytics",
  {
    id: "dbf4327a921eac36c68ec119c80f31b9"
  } as BaiduAnalyticsPluginOptions
];
