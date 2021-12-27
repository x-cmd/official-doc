import type { PluginConfig } from 'vuepress'
import docSearchPlugin from './docSearchPlugin';
import registerComponents from './registerComponents';
import codeCopyPlugin from './codeCopyPlugin';
import vuepressSearchPlugin from './vuepressSearchPlugin';

export default [
  registerComponents,
  docSearchPlugin,
  codeCopyPlugin,

  // vuepressSearchPlugin,
] as PluginConfig[];
