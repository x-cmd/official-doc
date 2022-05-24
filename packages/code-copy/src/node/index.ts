import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type { ClipboardOptions } from "../shared";

export * from "../shared";

export const codeCopyPlugin =
  (options: ClipboardOptions): Plugin =>
  () => ({
    name: "vuepress-plugin-clipboard",
    multiple: false,
    define: {
      __CODE_CLIPBOARD_OPTIONS__: options
    },
    clientConfigFile: path.resolve(__dirname, "../client/config.js")
  });

export default codeCopyPlugin;
