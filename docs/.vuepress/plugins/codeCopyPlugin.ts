import type { PluginConfig } from "@vuepress/core";
import type { ClipboardOptions } from "@x-cmd/vuepress-plugin-code-copy";

const codeCopyPlugin: PluginConfig = [
  "@x-cmd/vuepress-plugin-code-copy",
  {
    staticIcon: true,
    align: "top"
  } as ClipboardOptions
];

export default codeCopyPlugin;
