import { defaultTheme, defineUserConfig } from "vuepress";
import { bunderInfo, pageInfo } from "./configs";
import * as pagePlugins from "./plugins";

export default defineUserConfig({
  base: pageInfo.base,
  locales: pageInfo.locales,
  head: pageInfo.headConfig,

  bundler: bunderInfo.bundler,

  plugins: [
    pagePlugins.googleSEOPlugin,
    pagePlugins.chinaSEOPlugin,
    pagePlugins.sassPalettePlugin,
    pagePlugins.docsSearchPlugin,
    pagePlugins.genCodeCopyPlugin,
    pagePlugins.genPwaPlugin,
    pagePlugins.genPwaPopupPlugin,
    pagePlugins.genComponentPlugin,
    pagePlugins.genSitemapPlugin
  ],
  theme: defaultTheme(pageInfo.themeConfig),
  markdown: pageInfo.markdownConfig,
  extendsMarkdown: (md) => {
    md.use(require("markdown-it-task-lists"));
    md.use(require("markdown-it-mark"));
    md.use(require("markdown-it-deflist"));
  }
});
