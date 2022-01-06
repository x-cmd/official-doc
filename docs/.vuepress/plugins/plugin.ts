import type { PluginConfig } from "@vuepress/core";
import type { ClipboardOptions } from "@x-cmd/vuepress-plugin-code-copy";

export const codeCopyPlugin: PluginConfig = [
  "@x-cmd/vuepress-plugin-code-copy",
  {
    staticIcon: true,
    align: "top",
    delay: 500
  } as ClipboardOptions
];
