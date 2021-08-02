import type { PluginConfig } from 'vuepress'
import docSearchPlugin from './docSearchPlugin';
import vuepressSearchPlugin from './vuepressSearchPlugin';
import registerComponents from './registerComponents';

export default [ 
  registerComponents,
  docSearchPlugin,

  // vuepressSearchPlugin,
] as PluginConfig[];
