import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { bunderInfo, pageInfo } from "./configs";
import * as pagePlugins from "./plugins";

export default defineUserConfig<DefaultThemeOptions>({
  base: pageInfo.base,
  lang: pageInfo.lang,
  title: pageInfo.title,
  description: pageInfo.description,
  head: pageInfo.headConfig,

  bundler: bunderInfo.bundler,
  bundlerConfig: bunderInfo.bundlerConfig,

  // eslint-disable-next-line prettier/prettier
  plugins: [
    pagePlugins.codeCopyPlugin,
    pagePlugins.docSearchPlugin,
    pagePlugins.pwaPlugin,
    pagePlugins.pwaPopupPlugin,
    pagePlugins.registerComponentPlugin
  ],
  themeConfig: pageInfo.themeConfig,
  markdown: pageInfo.markdownConfig,
  extendsMarkdown: (md) => {
    md.use(require("markdown-it-task-lists"));
  }
});
