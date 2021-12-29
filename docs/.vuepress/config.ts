import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { bunderInfo, pageInfo } from "./configs";
import pagePlugins from "./plugins";

export default defineUserConfig<DefaultThemeOptions>({
  lang: pageInfo.lang,
  base: pageInfo.base,
  title: pageInfo.title,
  description: pageInfo.description,
  head: pageInfo.headConfig,

  bundler: bunderInfo.bundler,
  bundlerConfig: bunderInfo.bundlerConfig,

  plugins: pagePlugins,
  extendsMarkdown: (md) => {
    md.use(require("markdown-it-task-lists"));
  },

  themeConfig: pageInfo.themeConfig,
  define: {
    __BASE__: "/"
  }
});
