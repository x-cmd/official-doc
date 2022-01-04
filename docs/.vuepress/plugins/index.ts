import type { PluginConfig } from "vuepress";
import codeCopyPlugin from "./codeCopyPlugin";
import docSearchPlugin from "./docSearchPlugin";
import { pwa, pwaPopup } from "./pwa";
import registerComponents from "./registerComponents";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import vuepressSearchPlugin from "./vuepressSearchPlugin";

export default [
  registerComponents,
  docSearchPlugin,
  codeCopyPlugin,
  pwa,
  pwaPopup

  // vuepressSearchPlugin,
] as PluginConfig[];
